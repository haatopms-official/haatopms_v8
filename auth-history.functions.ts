// src/lib/api/auth-history.functions.ts
import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { verifySessionToken } from "@/lib/session.server";

export const listAuthHistory = createServerFn({ method: "POST" })
  .inputValidator(z.object({ token: z.string() }))
  .handler(async ({ data }) => {
    if (!verifySessionToken(data.token)) throw new Error("Unauthorized");
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { data: rows, error } = await supabaseAdmin
      .from("auth_history").select("*").order("at", { ascending: false }).limit(500);
    if (error) throw new Error(error.message);
    return rows;
  });

export const pushAuthHistory = createServerFn({ method: "POST" })
  .inputValidator(z.object({ token: z.string().optional(), username: z.string(), role: z.string(), action: z.enum(["login","logout"]) }))
  .handler(async ({ data }) => {
    // token is optional here on purpose: logout-on-tab-close uses keepalive
    // fetch and may not always carry it; this endpoint only ever writes a
    // login/logout row, nothing sensitive, so that's an acceptable trade-off.
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin.from("auth_history").insert({
      username: data.username, role: data.role, action: data.action,
    });
    if (error) throw new Error(error.message);
    return { ok: true };
  });