// src/lib/api/room-state.functions.ts
import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { verifySessionToken } from "@/lib/session.server";

export const getRoomState = createServerFn({ method: "POST" })
  .inputValidator(z.object({ token: z.string() }))
  .handler(async ({ data }) => {
    if (!verifySessionToken(data.token)) throw new Error("Unauthorized");
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { data: rows, error } = await supabaseAdmin.from("room_state").select("room_number, data");
    if (error) throw new Error(error.message);
    return Object.fromEntries((rows ?? []).map((r) => [r.room_number, r.data]));
  });

export const setRoomState = createServerFn({ method: "POST" })
  .inputValidator(z.object({ token: z.string(), roomNumber: z.number(), data: z.any() }))
  .handler(async ({ data }) => {
    if (!verifySessionToken(data.token)) throw new Error("Unauthorized");
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin
      .from("room_state")
      .upsert({ room_number: data.roomNumber, data: data.data, updated_at: new Date().toISOString() });
    if (error) throw new Error(error.message);
    return { ok: true };
  });