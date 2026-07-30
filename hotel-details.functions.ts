// src/lib/api/hotel-details.functions.ts
import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { verifySessionToken } from "@/lib/session.server";

export const getHotelDetails = createServerFn({ method: "POST" })
  .inputValidator(z.object({ token: z.string() }))
  .handler(async ({ data }) => {
    if (!verifySessionToken(data.token)) throw new Error("Unauthorized");
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { data: row, error } = await supabaseAdmin.from("hotel_details").select("data").eq("id", 1).maybeSingle();
    if (error) throw new Error(error.message);
    return row?.data ?? {};
  });

export const setHotelDetails = createServerFn({ method: "POST" })
  .inputValidator(z.object({ token: z.string(), details: z.any() }))
  .handler(async ({ data }) => {
    if (!verifySessionToken(data.token)) throw new Error("Unauthorized");
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin
      .from("hotel_details")
      .upsert({ id: 1, data: data.details, updated_at: new Date().toISOString() });
    if (error) throw new Error(error.message);
    return { ok: true };
  });