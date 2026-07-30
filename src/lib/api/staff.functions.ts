import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { verifySessionToken } from "@/lib/session.server";

function requireSuperOrDirector(token: string) {
  const s = verifySessionToken(token);
  if (!s) throw new Error("Unauthorized: session expired");
  if (s.role !== "superuser" && s.role !== "director") throw new Error("Unauthorized: insufficient role");
  return s;
}

export const listStaff = createServerFn({ method: "POST" })
  .inputValidator(z.object({ token: z.string() }))
  .handler(async ({ data }) => {
    requireSuperOrDirector(data.token);
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { data: rows, error } = await supabaseAdmin.rpc("list_staff_accounts");
    if (error) throw new Error(error.message);
    return rows;
  });

export const createStaff = createServerFn({ method: "POST" })
  .inputValidator(z.object({
    token: z.string(), username: z.string().min(1), password: z.string().min(6),
    role: z.enum(["superuser", "director", "admin", "manager"]),
    name: z.string(), surname: z.string(),
  }))
  .handler(async ({ data }) => {
    requireSuperOrDirector(data.token);
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { data: rows, error } = await supabaseAdmin.rpc("create_staff_account", {
      p_username: data.username, p_password: data.password, p_role: data.role,
      p_name: data.name, p_surname: data.surname,
    });
    if (error) throw new Error(error.message);
    return rows?.[0];
  });

export const deleteStaff = createServerFn({ method: "POST" })
  .inputValidator(z.object({ token: z.string(), username: z.string() }))
  .handler(async ({ data }) => {
    requireSuperOrDirector(data.token);
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin.rpc("delete_staff_account", { p_username: data.username });
    if (error) throw new Error(error.message);
    return { ok: true };
  });