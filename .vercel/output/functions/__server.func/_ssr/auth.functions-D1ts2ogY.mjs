import { c as createSsrRpc } from "./createSsrRpc-ZdepijWa.mjs";
import { a as createServerFn } from "./server-zM6mg_wl.mjs";
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
const loginStaff = createServerFn({
  method: "POST"
}).inputValidator(objectType({
  username: stringType().min(1),
  password: stringType().min(1)
})).handler(createSsrRpc("d3686433918a53a28382418faaa218ad0a1777c6c869dfe5f1ceffb7bb8a4024"));
export {
  loginStaff
};
