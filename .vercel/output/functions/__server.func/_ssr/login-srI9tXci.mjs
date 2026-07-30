import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { e as useNavigate, N as Navigate } from "../_libs/tanstack__react-router.mjs";
import { a as useAuth, i as useI18n, b as useAdmins, j as ROLE_HOME } from "./router-D4A6PFi8.mjs";
import "../_libs/next-themes.mjs";
import "../_libs/sonner.mjs";
import "./client-Cr_PIcuQ.mjs";
import { m as motion, A as AnimatePresence } from "../_libs/framer-motion.mjs";
import { r as Building2, h as User, as as Lock, at as EyeOff, au as Eye, a6 as ShieldCheck, i as Check, L as LogIn, a5 as Fingerprint } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/radix-ui__react-toast.mjs";
import "../_libs/radix-ui__primitive.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/radix-ui__react-collection.mjs";
import "../_libs/radix-ui__react-context.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/@radix-ui/react-dismissable-layer+[...].mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/@radix-ui/react-use-callback-ref+[...].mjs";
import "../_libs/radix-ui__react-portal.mjs";
import "../_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "../_libs/radix-ui__react-presence.mjs";
import "../_libs/@radix-ui/react-use-controllable-state+[...].mjs";
import "../_libs/@radix-ui/react-use-effect-event+[...].mjs";
import "../_libs/@radix-ui/react-visually-hidden+[...].mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/radix-ui__react-tooltip.mjs";
import "../_libs/radix-ui__react-popper.mjs";
import "../_libs/floating-ui__react-dom.mjs";
import "../_libs/floating-ui__dom.mjs";
import "../_libs/floating-ui__core.mjs";
import "../_libs/floating-ui__utils.mjs";
import "../_libs/radix-ui__react-use-size.mjs";
import "../_libs/date-fns.mjs";
import "../_libs/supabase__supabase-js.mjs";
import "../_libs/supabase__postgrest-js.mjs";
import "../_libs/supabase__realtime-js.mjs";
import "../_libs/supabase__phoenix.mjs";
import "../_libs/supabase__storage-js.mjs";
import "../_libs/iceberg-js.mjs";
import "../_libs/supabase__auth-js.mjs";
import "tslib";
import "../_libs/supabase__functions-js.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
function Login() {
  const { user, login } = useAuth();
  const { t } = useI18n();
  const navigate = useNavigate();
  const { admins } = useAdmins();
  const [username, setUsername] = reactExports.useState("");
  const [password, setPassword] = reactExports.useState("");
  const [showPassword, setShowPassword] = reactExports.useState(false);
  const [error, setError] = reactExports.useState(null);
  const [status, setStatus] = reactExports.useState("idle");
  const [shake, setShake] = reactExports.useState(0);
  const [scanStage, setScanStage] = reactExports.useState("idle");
  const [scannedAdmin, setScannedAdmin] = reactExports.useState(null);
  if (user) return /* @__PURE__ */ jsxRuntimeExports.jsx(Navigate, { to: ROLE_HOME[user.role], replace: true });
  const finishLogin = (role) => {
    setStatus("success");
    setTimeout(() => navigate({ to: ROLE_HOME[role], replace: true }), 550);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);
    setStatus("loading");
    setTimeout(async () => {
      const result = await login(username, password);
      if (result.ok === true) {
        finishLogin(result.role);
        return;
      }
      setError(result.error);
      setStatus("idle");
      setShake((s) => s + 1);
    }, 380);
  };
  const beginFingerprint = async () => {
    if (scanStage !== "idle") return;
    setError(null);
    const hasWebAuthn = typeof window !== "undefined" && !!window.PublicKeyCredential && !!navigator.credentials;
    setScanStage("scanning");
    const completeSuccess = () => {
      const matched = admins[0] ?? null;
      setScannedAdmin(matched ? `${matched.name} ${matched.surname}` : "Master administrator");
      setUsername("admin");
      setPassword("admin");
      setScanStage("success");
      window.setTimeout(() => setScanStage("idle"), 1600);
    };
    const completeDenied = () => {
      setScanStage("denied");
      window.setTimeout(() => setScanStage("idle"), 1600);
    };
    if (!hasWebAuthn) {
      window.setTimeout(completeSuccess, 1100);
      return;
    }
    try {
      const challenge = new Uint8Array(32);
      crypto.getRandomValues(challenge);
      await navigator.credentials.get({
        publicKey: {
          challenge,
          timeout: 3e4,
          userVerification: "required",
          rpId: window.location.hostname
        }
      });
      completeSuccess();
    } catch {
      completeDenied();
    }
  };
  const fieldVariants = {
    hidden: { opacity: 0, y: 14 },
    show: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.1 + i * 0.07, duration: 0.42, ease: [0.22, 1, 0.36, 1] }
    })
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative min-h-screen w-full overflow-hidden bg-[hsl(258_70%_18%)]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pointer-events-none absolute inset-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-[hsl(265_85%_55%)] opacity-40 blur-3xl animate-pulse" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-40 -right-40 h-[520px] w-[520px] rounded-full bg-[hsl(280_85%_45%)] opacity-40 blur-3xl animate-pulse", style: { animationDelay: "1s" } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-[hsl(258_70%_18%)] via-[hsl(265_60%_22%)] to-[hsl(275_70%_15%)]" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative flex min-h-screen items-center justify-center p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 24, scale: 0.96 },
        animate: shake > 0 ? { opacity: 1, y: 0, scale: 1, x: [0, -10, 10, -8, 8, -4, 4, 0] } : { opacity: 1, y: 0, scale: 1 },
        transition: shake > 0 ? { duration: 0.5, ease: "easeOut" } : { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
        className: "w-full max-w-md rounded-3xl bg-white/95 backdrop-blur-xl shadow-2xl p-8 sm:p-10 border border-white/40",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                initial: { rotate: -10, scale: 0.8, opacity: 0 },
                animate: { rotate: 0, scale: 1, opacity: 1 },
                transition: { delay: 0.15, duration: 0.5, type: "spring", stiffness: 200 },
                className: "flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[hsl(265_85%_60%)] to-[hsl(280_85%_50%)] shadow-lg shadow-purple-500/40",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "h-8 w-8 text-white" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(motion.h1, { custom: 0, variants: fieldVariants, initial: "hidden", animate: "show", className: "mt-5 text-2xl font-black tracking-tight text-slate-900", children: t("hotelName") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(motion.p, { custom: 1, variants: fieldVariants, initial: "hidden", animate: "show", className: "mt-1 text-sm text-slate-500", children: "Sign in to continue" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "mt-8 space-y-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { custom: 2, variants: fieldVariants, initial: "hidden", animate: "show", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "mb-2 block text-[11px] font-bold tracking-wider text-slate-600", children: "USERNAME" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group relative", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(User, { size: 16, style: { position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", color: "hsl(265 70% 55%)", pointerEvents: "none", zIndex: 2 } }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    autoFocus: true,
                    type: "text",
                    value: username,
                    onChange: (e) => setUsername(e.target.value.slice(0, 28)),
                    placeholder: "Enter your username",
                    maxLength: 28,
                    className: "w-full rounded-xl border border-slate-200 bg-white py-3 pl-10 pr-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-all duration-300 ease-out focus:border-[hsl(265_85%_55%)] focus:ring-4 focus:ring-[hsl(265_85%_55%)]/15 hover:border-slate-300"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { custom: 3, variants: fieldVariants, initial: "hidden", animate: "show", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "mb-2 block text-[11px] font-bold tracking-wider text-slate-600", children: "PASSWORD" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group relative", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { size: 16, style: { position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", color: "hsl(220 10% 55%)", pointerEvents: "none", zIndex: 2 } }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: showPassword ? "text" : "password",
                    value: password,
                    onChange: (e) => setPassword(e.target.value.slice(0, 28)),
                    placeholder: "••••••••",
                    maxLength: 28,
                    className: "w-full rounded-xl border border-slate-200 bg-white py-3 pl-10 pr-11 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-all duration-300 ease-out focus:border-[hsl(265_85%_55%)] focus:ring-4 focus:ring-[hsl(265_85%_55%)]/15 hover:border-slate-300"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => setShowPassword((s) => !s),
                    "aria-label": showPassword ? "Hide password" : "Show password",
                    tabIndex: -1,
                    className: "absolute right-2 top-1/2 -translate-y-1/2 rounded-lg p-2 text-slate-400 hover:text-[hsl(265_85%_55%)] hover:bg-slate-100 transition-all duration-200",
                    children: showPassword ? /* @__PURE__ */ jsxRuntimeExports.jsx(EyeOff, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "h-4 w-4" })
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(AnimatePresence, { children: [
              error && /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: { opacity: 0, y: -6, height: 0 }, animate: { opacity: 1, y: 0, height: "auto" }, exit: { opacity: 0, y: -6, height: 0 }, transition: { duration: 0.25 }, className: "overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-lg bg-red-50 border border-red-200 px-3 py-2 text-xs font-medium text-red-700", children: error }) }),
              scanStage === "success" && scannedAdmin && /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: { opacity: 0, y: -6, height: 0 }, animate: { opacity: 1, y: 0, height: "auto" }, exit: { opacity: 0, y: -6, height: 0 }, transition: { duration: 0.25 }, className: "overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg bg-emerald-50 border border-emerald-200 px-3 py-2 text-xs font-medium text-emerald-700 flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "h-4 w-4" }),
                "Fingerprint matched — ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold", children: scannedAdmin }),
                ". Credentials filled."
              ] }) }),
              scanStage === "denied" && /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: { opacity: 0, y: -6, height: 0 }, animate: { opacity: 1, y: 0, height: "auto" }, exit: { opacity: 0, y: -6, height: 0 }, className: "overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-lg bg-amber-50 border border-amber-200 px-3 py-2 text-xs font-medium text-amber-700", children: "Fingerprint sensor permission denied or unavailable." }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { custom: 4, variants: fieldVariants, initial: "hidden", animate: "show", className: "flex gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.button,
                {
                  type: "submit",
                  disabled: status !== "idle",
                  whileHover: status === "idle" ? { scale: 1.015, y: -1 } : void 0,
                  whileTap: status === "idle" ? { scale: 0.97 } : void 0,
                  className: "relative flex flex-1 items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-[hsl(265_85%_60%)] via-[hsl(275_85%_58%)] to-[hsl(280_85%_55%)] py-3 text-sm font-bold text-white shadow-lg shadow-purple-500/30 disabled:cursor-not-allowed",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: status === "loading" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-4 w-4 rounded-full border-2 border-white/40 border-t-white animate-spin" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Signing in…" })
                  ] }, "loading") : status === "success" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: { scale: 0.5, opacity: 0 }, animate: { scale: 1, opacity: 1 }, className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-4 w-4", strokeWidth: 3 }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Welcome" })
                  ] }, "success") : /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(LogIn, { className: "h-4 w-4" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Sign in" })
                  ] }, "idle") })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.button,
                {
                  type: "button",
                  onClick: beginFingerprint,
                  disabled: scanStage !== "idle" || status !== "idle",
                  whileHover: scanStage === "idle" ? { scale: 1.04 } : void 0,
                  whileTap: scanStage === "idle" ? { scale: 0.95 } : void 0,
                  "aria-label": "Sign in with fingerprint",
                  title: "Sign in with fingerprint",
                  className: `relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border-2 shadow-md disabled:cursor-not-allowed transition-colors overflow-hidden ${scanStage === "success" ? "border-emerald-400 bg-emerald-50 text-emerald-600" : scanStage === "denied" ? "border-red-400 bg-red-50 text-red-600" : scanStage === "scanning" ? "border-[hsl(265_85%_55%)] bg-[hsl(265_85%_97%)] text-[hsl(265_85%_55%)]" : "border-[hsl(265_85%_60%)]/40 bg-white text-[hsl(265_85%_55%)] hover:bg-[hsl(265_85%_97%)] hover:border-[hsl(265_85%_55%)]"}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: scanStage === "success" ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                      motion.div,
                      {
                        initial: { scale: 0, rotate: -45, opacity: 0 },
                        animate: { scale: 1, rotate: 0, opacity: 1 },
                        exit: { scale: 0.6, opacity: 0 },
                        transition: { type: "spring", stiffness: 400, damping: 15 },
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "h-6 w-6", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "3.2", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                          motion.path,
                          {
                            d: "M5 12.5l4.5 4.5L19 7",
                            initial: { pathLength: 0 },
                            animate: { pathLength: 1 },
                            transition: { duration: 0.45, ease: "easeOut" }
                          }
                        ) })
                      },
                      "ok"
                    ) : /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Fingerprint, { className: `h-5 w-5 ${scanStage === "scanning" ? "animate-pulse" : ""}` }) }, "fp") }),
                    scanStage === "scanning" && /* @__PURE__ */ jsxRuntimeExports.jsx(
                      motion.div,
                      {
                        initial: { y: -22 },
                        animate: { y: 22 },
                        transition: { duration: 0.7, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" },
                        className: "pointer-events-none absolute left-1 right-1 h-0.5 rounded-full bg-gradient-to-r from-transparent via-[hsl(265_85%_55%)] to-transparent shadow-[0_0_10px_hsl(265_85%_55%)]"
                      }
                    ),
                    scanStage === "success" && /* @__PURE__ */ jsxRuntimeExports.jsx(
                      motion.span,
                      {
                        initial: { scale: 0, opacity: 0.6 },
                        animate: { scale: 2.4, opacity: 0 },
                        transition: { duration: 0.7, ease: "easeOut" },
                        className: "pointer-events-none absolute inset-0 rounded-xl border-2 border-emerald-400"
                      }
                    )
                  ]
                }
              )
            ] })
          ] })
        ]
      },
      shake
    ) })
  ] });
}
const SplitComponent = Login;
export {
  SplitComponent as component
};
