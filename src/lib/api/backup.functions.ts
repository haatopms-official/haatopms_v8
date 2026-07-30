import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { verifySessionToken } from "@/lib/session.server";

function requireManagerAbove(token: string) {
  const session = verifySessionToken(token);
  if (!session) throw new Error("Unauthorized: session expired or invalid");
  if (session.role !== "superuser" && session.role !== "director") {
    throw new Error("Unauthorized: only superuser/director can manage backups");
  }
  return session;
}

export const createBackup = createServerFn({ method: "POST" })
  .inputValidator(z.object({ token: z.string(), label: z.string().optional() }))
  .handler(async ({ data }) => {
    const session = requireManagerAbove(data.token);
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { data: backupId, error } = await supabaseAdmin.rpc("create_backup", {
      p_label: data.label ?? null,
      p_created_by: session.username,
    });
    if (error) throw new Error(error.message);
    return { backupId };
  });

export const downloadBackup = createServerFn({ method: "POST" })
  .inputValidator(z.object({ token: z.string(), backupId: z.string() }))
  .handler(async ({ data }) => {
    requireManagerAbove(data.token);
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { data: row, error } = await supabaseAdmin
      .from("backups")
      .select("snapshot, created_at, label")
      .eq("backup_id", data.backupId)
      .maybeSingle();
    if (error || !row) throw new Error("Backup not found");
    return row;
  });

export const restoreBackupById = createServerFn({ method: "POST" })
  .inputValidator(z.object({ token: z.string(), backupId: z.string() }))
  .handler(async ({ data }) => {
    requireManagerAbove(data.token);
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin.rpc("restore_backup", { p_backup_id: data.backupId });
    if (error) throw new Error(error.message);
    return { ok: true };
  });

export const restoreBackupFromFile = createServerFn({ method: "POST" })
  .inputValidator(z.object({ token: z.string(), snapshot: z.any() }))
  .handler(async ({ data }) => {
    requireManagerAbove(data.token);
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin.rpc("restore_from_json", { p_snapshot: data.snapshot });
    if (error) throw new Error(error.message);
    return { ok: true };
  });