import { c as createServerRpc } from "./createServerRpc-DcpxgMFB.mjs";
import { a as createServerFn } from "./server-zM6mg_wl.mjs";
import "../_libs/seroval.mjs";
import "../_libs/react.mjs";
import { e as enumType, o as objectType, a as anyType } from "../_libs/zod.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "node:stream";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
const stateKeySchema = enumType(["bookings", "grid", "admins", "audit", "auth-history", "guests", "anketas", "passports"]);
const getStateSchema = objectType({
  key: stateKeySchema
});
const setStateSchema = objectType({
  key: stateKeySchema,
  stateData: anyType()
});
const getHotelState_createServerFn_handler = createServerRpc({
  id: "89b60288b8b232346474bc8bf300257346a58b7164121f204f414697ad1faac3",
  name: "getHotelState",
  filename: "src/lib/hotel-state.functions.ts"
}, (opts) => getHotelState.__executeServer(opts));
const getHotelState = createServerFn({
  method: "GET"
}).inputValidator((input) => getStateSchema.parse(input)).handler(getHotelState_createServerFn_handler, async ({
  data
}) => {
  if (!process.env.SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
    return null;
  }
  const {
    supabaseAdmin
  } = await import("./client.server-AV-m5x0b.mjs");
  const {
    data: row,
    error
  } = await supabaseAdmin.from("hotel_app_state").select("state_data, version, updated_at").eq("state_key", data.key).maybeSingle();
  if (error) throw new Error(error.message);
  if (!row) return null;
  return {
    stateData: row.state_data,
    version: Number(row.version ?? 0),
    updatedAt: String(row.updated_at ?? "")
  };
});
const setHotelState_createServerFn_handler = createServerRpc({
  id: "114603339148d6b7cfbc2a9a16d7c155014b773beb6587879438626e7354f351",
  name: "setHotelState",
  filename: "src/lib/hotel-state.functions.ts"
}, (opts) => setHotelState.__executeServer(opts));
const setHotelState = createServerFn({
  method: "POST"
}).inputValidator((input) => setStateSchema.parse(input)).handler(setHotelState_createServerFn_handler, async ({
  data
}) => {
  if (!process.env.SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
    return {
      stateData: data.stateData,
      version: 0,
      updatedAt: ""
    };
  }
  const {
    supabaseAdmin
  } = await import("./client.server-AV-m5x0b.mjs");
  const {
    data: row,
    error
  } = await supabaseAdmin.from("hotel_app_state").upsert({
    state_key: data.key,
    state_data: data.stateData
  }, {
    onConflict: "state_key"
  }).select("state_data, version, updated_at").single();
  if (error) throw new Error(error.message);
  return {
    stateData: row.state_data,
    version: Number(row.version ?? 0),
    updatedAt: String(row.updated_at ?? "")
  };
});
export {
  getHotelState_createServerFn_handler,
  setHotelState_createServerFn_handler
};
