import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { verifySessionToken } from "@/lib/session.server";

function requireStaff(token: string) {
  const s = verifySessionToken(token);
  if (!s) throw new Error("Unauthorized: session expired");
  return s;
}

export const listBookings = createServerFn({ method: "POST" })
  .inputValidator(z.object({ token: z.string() }))
  .handler(async ({ data }) => {
    requireStaff(data.token);
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { data: rows, error } = await supabaseAdmin.from("bookings").select("id, data");
    if (error) throw new Error(error.message);
    // The full Booking object lives in `data`; typed columns are kept in sync
    // for reporting/filtering only — `data` is the source of truth.
    return (rows ?? []).map((r) => r.data);
  });

export const saveBookings = createServerFn({ method: "POST" })
  .inputValidator(z.object({ token: z.string(), bookings: z.array(z.any()) }))
  .handler(async ({ data }) => {
    requireStaff(data.token);
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const rows = data.bookings.map((b: any) => ({
      id: b.id,
      room_number: b.roomNumber,
      check_in: b.checkIn,
      check_out: b.checkOut,
      status: b.status,
      price: b.price ?? null,
      payment_amount: b.paymentAmount ?? null,
      payment_confirmed: !!b.paymentConfirmed,
      data: b,
    }));
    // Full-set replace keeps this a drop-in swap for the old shared-array model.
    const { error: delErr } = await supabaseAdmin.from("bookings").delete().neq("id", "");
    if (delErr) throw new Error(delErr.message);
    if (rows.length) {
      const { error } = await supabaseAdmin.from("bookings").insert(rows);
      if (error) throw new Error(error.message);
    }
    return { ok: true };
  });