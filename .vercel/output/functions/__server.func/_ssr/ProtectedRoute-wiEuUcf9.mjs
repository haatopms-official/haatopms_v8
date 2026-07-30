import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { N as Navigate } from "../_libs/tanstack__react-router.mjs";
import { a as useAuth, j as ROLE_HOME } from "./router-D4A6PFi8.mjs";
function ProtectedRoute({ allow, children }) {
  const { user, ready } = useAuth();
  if (!ready) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex w-full max-w-sm flex-col items-center gap-3 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 w-10 animate-spin rounded-full border-2 border-border border-t-primary" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground", children: "Loading workspace…" })
    ] }) });
  }
  if (!user) return /* @__PURE__ */ jsxRuntimeExports.jsx(Navigate, { to: "/login", replace: true });
  if (user.canSwitchWorkspaces) return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children });
  if (!allow.includes(user.role)) return /* @__PURE__ */ jsxRuntimeExports.jsx(Navigate, { to: ROLE_HOME[user.role], replace: true });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children });
}
export {
  ProtectedRoute as P
};
