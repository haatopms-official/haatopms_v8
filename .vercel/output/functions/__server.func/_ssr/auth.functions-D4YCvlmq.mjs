import { c as createServerRpc } from "./createServerRpc-DcpxgMFB.mjs";
import { a as createServerFn } from "./server-zM6mg_wl.mjs";
import { createHmac } from "node:crypto";
import "../_libs/seroval.mjs";
import "../_libs/react.mjs";
import { o as objectType, s as stringType } from "../_libs/zod.mjs";
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
function getSecret() {
  const secret = process.env.APP_SESSION_SECRET;
  if (!secret) throw new Error("Missing APP_SESSION_SECRET env variable");
  return secret;
}
function createSessionToken(payload, hoursValid = 14) {
  const full = { ...payload, exp: Math.floor(Date.now() / 1e3) + hoursValid * 3600 };
  const body = Buffer.from(JSON.stringify(full)).toString("base64url");
  const sig = createHmac("sha256", getSecret()).update(body).digest("base64url");
  return `${body}.${sig}`;
}
const loginStaff_createServerFn_handler = createServerRpc({
  id: "d3686433918a53a28382418faaa218ad0a1777c6c869dfe5f1ceffb7bb8a4024",
  name: "loginStaff",
  filename: "src/lib/api/auth.functions.ts"
}, (opts) => loginStaff.__executeServer(opts));
const loginStaff = createServerFn({
  method: "POST"
}).inputValidator(objectType({
  username: stringType().min(1),
  password: stringType().min(1)
})).handler(loginStaff_createServerFn_handler, async ({
  data
}) => {
  const {
    supabaseAdmin
  } = await import("./client.server-AV-m5x0b.mjs");
  const {
    data: rows,
    error
  } = await supabaseAdmin.rpc("verify_staff_login", {
    p_username: data.username,
    p_password: data.password
  });
  if (error || !rows || rows.length === 0) {
    return {
      ok: false,
      error: "Invalid username or password"
    };
  }
  const staff = rows[0];
  const token = createSessionToken({
    id: staff.id,
    username: staff.username,
    role: staff.role,
    name: staff.name,
    surname: staff.surname
  });
  return {
    ok: true,
    token,
    role: staff.role,
    username: staff.username
  };
});
export {
  loginStaff_createServerFn_handler
};
