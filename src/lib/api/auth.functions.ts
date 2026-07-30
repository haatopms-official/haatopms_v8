import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { createSessionToken } from "@/lib/session.server";

export const loginStaff = createServerFn({ method: "POST" })
  .inputValidator(z.object({ username: z.string().min(1), password: z.string().min(1) }))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { data: rows, error } = await supabaseAdmin.rpc("verify_staff_login", {
      p_username: data.username,
      p_password: data.password,
    });
    if (error || !rows || rows.length === 0) {
      return { ok: false as const, error: "Invalid username or password" };
    }
    const staff = rows[0];
    const token = createSessionToken({
      id: staff.id,
      username: staff.username,
      role: staff.role,
      name: staff.name,
      surname: staff.surname,
    });
    return { ok: true as const, token, role: staff.role, username: staff.username };
  });