// src/lib/api/audit.functions.ts
import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { verifySessionToken } from "@/lib/session.server";

export const listAudit = createServerFn({ method: "POST" })
  .inputValidator(z.object({ token: z.string() }))
  .handler(async ({ data }) => {
    if (!verifySessionToken(data.token)) throw new Error("Unauthorized");
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { data: rows, error } = await supabaseAdmin
      .from("audit_log").select("*").order("created_at", { ascending: false }).limit(2000);
    if (error) throw new Error(error.message);
    return rows;
  });

export const logAudit = createServerFn({ method: "POST" })
  .inputValidator(z.object({
    token: z.string(), actor_username: z.string(), actor_role: z.string(),
    category: z.string(), action: z.string(), summary: z.string(),
  }))
  .handler(async ({ data }) => {
    if (!verifySessionToken(data.token)) throw new Error("Unauthorized");
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin.from("audit_log").insert({
      actor_username: data.actor_username, actor_role: data.actor_role,
      category: data.category, action: data.action, summary: data.summary,
    });
    if (error) throw new Error(error.message);
    return { ok: true };
  });