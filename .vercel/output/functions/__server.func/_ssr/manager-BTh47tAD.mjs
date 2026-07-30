import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { P as ProtectedRoute } from "./ProtectedRoute-wiEuUcf9.mjs";
import { r as reactDomExports } from "../_libs/react-dom.mjs";
import { H as HotelNavbar } from "./HotelNavbar-BoJodXQi.mjs";
import { g as useBookingsContext, h as useHotelGrid, B as BOOKING_STATUSES, a as useAuth, k as useAudit, b as useAdmins } from "./router-D4A6PFi8.mjs";
import { a as HotelDashboardBody } from "./Index-Ch60ZCMd.mjs";
import { S as SuperuserAdmins } from "./SuperuserAdmins-pVXzxwrd.mjs";
import { h as humanizeAudit } from "./auditFormat-DhjM8GyN.mjs";
import { H as HotelDetailsPage } from "./HotelDetailsPage-C4fI4JQq.mjs";
import "../_libs/next-themes.mjs";
import "../_libs/sonner.mjs";
import "./client-Cr_PIcuQ.mjs";
import "./dialog-DLX0hhUD.mjs";
import "./button-Dzx3P4Vv.mjs";
import "./alert-dialog-q5bFbkxl.mjs";
import "./label-CeB4zpI0.mjs";
import "./BookingDialog-CAL3HQj6.mjs";
import "./checkbox-Bi4g2gFZ.mjs";
import "./server-zM6mg_wl.mjs";
import "../_libs/seroval.mjs";
import { s as startOfDay, b as addDays, c as subDays, f as format, p as parseISO, o as differenceInDays } from "../_libs/date-fns.mjs";
import { A as AnimatePresence, m as motion } from "../_libs/framer-motion.mjs";
import { av as LayoutDashboard, aw as ChartColumn, G as UserPlus, s as History, u as Landmark, ae as ChevronUp, ax as Maximize2, X, ay as Minimize2, Y as Sparkles, m as CalendarDays, U as Users, J as DollarSign, az as ChartLine, aA as Gauge, a3 as Activity, A as BedDouble, ap as TrendingUp, au as Eye, ag as Search, L as LogIn, a as LogOut, h as User, f as ChevronDown, aB as ArrowUpRight, aC as ArrowDownRight, a7 as Clock3, a0 as CircleCheck, aD as CircleX, ao as Percent, an as CalendarCheck, aE as AtSign, a9 as IdCard, a5 as Fingerprint, C as Clock, P as Plus, aF as Trash, l as Pencil, aG as RefreshCcw } from "../_libs/lucide-react.mjs";
import { h as LineChart, b as CartesianGrid, X as XAxis, Y as YAxis, T as Tooltip, i as Line, A as AreaChart, d as Area, B as BarChart, c as Bar, P as PieChart, a as Pie, C as Cell, j as ResponsiveContainer } from "../_libs/recharts.mjs";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/isbot.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/radix-ui__react-popover.mjs";
import "../_libs/radix-ui__primitive.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/radix-ui__react-context.mjs";
import "../_libs/@radix-ui/react-dismissable-layer+[...].mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/@radix-ui/react-use-callback-ref+[...].mjs";
import "../_libs/radix-ui__react-focus-guards.mjs";
import "../_libs/radix-ui__react-focus-scope.mjs";
import "../_libs/radix-ui__react-id.mjs";
import "../_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "../_libs/radix-ui__react-popper.mjs";
import "../_libs/floating-ui__react-dom.mjs";
import "../_libs/floating-ui__dom.mjs";
import "../_libs/floating-ui__core.mjs";
import "../_libs/floating-ui__utils.mjs";
import "../_libs/radix-ui__react-use-size.mjs";
import "../_libs/radix-ui__react-portal.mjs";
import "../_libs/radix-ui__react-presence.mjs";
import "../_libs/@radix-ui/react-use-controllable-state+[...].mjs";
import "../_libs/@radix-ui/react-use-effect-event+[...].mjs";
import "../_libs/aria-hidden.mjs";
import "../_libs/react-remove-scroll.mjs";
import "tslib";
import "../_libs/react-remove-scroll-bar.mjs";
import "../_libs/react-style-singleton.mjs";
import "../_libs/get-nonce.mjs";
import "../_libs/use-sidecar.mjs";
import "../_libs/use-callback-ref.mjs";
import "../_libs/radix-ui__react-dropdown-menu.mjs";
import "../_libs/radix-ui__react-menu.mjs";
import "../_libs/radix-ui__react-collection.mjs";
import "../_libs/radix-ui__react-direction.mjs";
import "../_libs/radix-ui__react-roving-focus.mjs";
import "../_libs/@radix-ui/react-use-is-hydrated+[...].mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/radix-ui__react-toast.mjs";
import "../_libs/@radix-ui/react-visually-hidden+[...].mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/radix-ui__react-tooltip.mjs";
import "../_libs/supabase__supabase-js.mjs";
import "../_libs/supabase__postgrest-js.mjs";
import "../_libs/supabase__realtime-js.mjs";
import "../_libs/supabase__phoenix.mjs";
import "../_libs/supabase__storage-js.mjs";
import "../_libs/iceberg-js.mjs";
import "../_libs/supabase__auth-js.mjs";
import "../_libs/supabase__functions-js.mjs";
import "../_libs/radix-ui__react-dialog.mjs";
import "../_libs/radix-ui__react-alert-dialog.mjs";
import "../_libs/radix-ui__react-label.mjs";
import "../_libs/radix-ui__react-select.mjs";
import "../_libs/radix-ui__number.mjs";
import "../_libs/radix-ui__react-use-previous.mjs";
import "./createSsrRpc-ZdepijWa.mjs";
import "../_libs/zod.mjs";
import "../_libs/radix-ui__react-checkbox.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
import "../_libs/lodash.mjs";
import "../_libs/react-smooth.mjs";
import "../_libs/prop-types.mjs";
import "../_libs/fast-equals.mjs";
import "../_libs/tiny-invariant.mjs";
import "../_libs/react-is.mjs";
import "../_libs/d3-shape.mjs";
import "../_libs/d3-path.mjs";
import "../_libs/victory-vendor.mjs";
import "../_libs/d3-scale.mjs";
import "../_libs/internmap.mjs";
import "../_libs/d3-array.mjs";
import "../_libs/d3-time-format.mjs";
import "../_libs/d3-time.mjs";
import "../_libs/d3-interpolate.mjs";
import "../_libs/d3-color.mjs";
import "../_libs/d3-format.mjs";
import "../_libs/recharts-scale.mjs";
import "../_libs/decimal.js-light.mjs";
import "../_libs/eventemitter3.mjs";
function ManagerLoginHistory() {
  const { history } = useAuth();
  const { events: auditEvents } = useAudit();
  const { admins } = useAdmins();
  const [query, setQuery] = reactExports.useState("");
  const [filter, setFilter] = reactExports.useState("all");
  const [expanded, setExpanded] = reactExports.useState(null);
  const visibleHistory = reactExports.useMemo(() => {
    return history.filter((e) => {
      if (e.role !== "admin") return false;
      if (filter !== "all" && e.action !== filter) return false;
      const q = query.trim().toLowerCase();
      if (!q) return true;
      return e.username.toLowerCase().includes(q) || (e.displayName ?? "").toLowerCase().includes(q);
    });
  }, [history, query, filter]);
  const grouped = reactExports.useMemo(() => {
    const map = /* @__PURE__ */ new Map();
    for (const e of visibleHistory) {
      const day = new Date(e.at).toLocaleDateString(void 0, {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
      });
      const arr = map.get(day) ?? [];
      arr.push(e);
      map.set(day, arr);
    }
    return Array.from(map.entries());
  }, [visibleHistory]);
  const adminAuditEvents = reactExports.useMemo(
    () => auditEvents.filter((a) => a.actor.role === "admin"),
    [auditEvents]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full px-4 sm:px-8 py-8 max-w-5xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "flex flex-wrap items-end justify-between gap-4 mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-[hsl(265_85%_55%)] text-xs font-bold tracking-widest uppercase", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(History, { className: "h-3.5 w-3.5" }),
          "Activity log"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-1 text-3xl font-black tracking-tight text-slate-900 dark:text-foreground", children: "Admin login history" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-slate-500 dark:text-muted-foreground", children: "Read-only view of sign-in / sign-out events and documented actions for administrators only." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-500", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "h-3 w-3" }),
        " Read-only"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2 mb-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-1 min-w-[220px]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            value: query,
            onChange: (e) => setQuery(e.target.value.slice(0, 28)),
            placeholder: "Filter by name or username…",
            maxLength: 28,
            className: "w-full rounded-xl border border-slate-200 bg-white py-2.5 pl-9 pr-3 text-sm outline-none focus:border-[hsl(265_85%_55%)] focus:ring-4 focus:ring-[hsl(265_85%_55%)]/15"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-1 rounded-xl bg-white border border-slate-200 p-1 text-xs font-bold", children: ["all", "login", "logout"].map((f) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => setFilter(f),
          className: `rounded-lg px-3 py-1.5 transition ${filter === f ? "bg-[hsl(265_85%_55%)] text-white shadow" : "text-slate-500 hover:text-slate-800"}`,
          children: f === "all" ? "All" : f === "login" ? "Logins" : "Logouts"
        },
        f
      )) })
    ] }),
    grouped.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border-2 border-dashed border-slate-200 bg-white/60 py-14 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(History, { className: "mx-auto h-10 w-10 text-slate-300" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm font-bold text-slate-700", children: "No admin activity yet" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-slate-500", children: "When administrators sign in, their sessions will appear here." })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-7", children: grouped.map(([day, events]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-2 flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xs font-bold tracking-widest text-slate-500 uppercase", children: day }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 h-px bg-slate-200" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[11px] font-bold text-slate-400", children: [
          events.length,
          " event",
          events.length === 1 ? "" : "s"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "relative border-l-2 border-slate-200 ml-3 space-y-3", children: events.map((e) => {
        const isIn = e.action === "login";
        const isOpen = expanded === e.id;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "ml-5 relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: `absolute -left-[34px] top-2 flex h-6 w-6 items-center justify-center rounded-full border-2 border-white shadow ${isIn ? "bg-emerald-500" : "bg-rose-500"}`,
              children: isIn ? /* @__PURE__ */ jsxRuntimeExports.jsx(LogIn, { className: "h-3 w-3 text-white" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(LogOut, { className: "h-3 w-3 text-white" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => setExpanded(isOpen ? null : e.id),
              className: "w-full text-left rounded-xl bg-white border border-slate-200 px-4 py-3 shadow-sm hover:shadow-md hover:border-[hsl(265_85%_55%)]/40 transition-all flex items-center justify-between gap-3",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-bold text-slate-900", children: e.displayName || e.username }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 rounded-full border px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-sky-600 bg-sky-50 border-sky-200", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "h-3 w-3" }),
                      "admin"
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-0.5 text-xs text-slate-500", children: [
                    isIn ? "Signed in" : "Signed out",
                    " at",
                    " ",
                    new Date(e.at).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                      second: "2-digit"
                    })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-bold text-slate-700 tabular-nums", children: new Date(e.at).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit"
                    }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-slate-400 tabular-nums", children: new Date(e.at).toLocaleDateString([], {
                      month: "short",
                      day: "numeric"
                    }) })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    ChevronDown,
                    {
                      className: `h-4 w-4 text-slate-400 transition-transform ${isOpen ? "rotate-180" : ""}`
                    }
                  )
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { initial: false, children: isOpen && /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0, height: 0 },
              animate: { opacity: 1, height: "auto" },
              exit: { opacity: 0, height: 0 },
              transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] },
              className: "overflow-hidden",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                AdminDetails,
                {
                  event: e,
                  admins,
                  auditEvents: adminAuditEvents
                }
              )
            },
            "details"
          ) })
        ] }, e.id);
      }) })
    ] }, day)) })
  ] });
}
const CATEGORY_META = {
  auth: { label: "Auth", color: "bg-emerald-50 text-emerald-700 border-emerald-200" },
  booking: { label: "Booking", color: "bg-sky-50 text-sky-700 border-sky-200" },
  admin: { label: "Admin", color: "bg-fuchsia-50 text-fuchsia-700 border-fuchsia-200" },
  shift: { label: "Shift", color: "bg-amber-50 text-amber-700 border-amber-200" },
  form: { label: "Form", color: "bg-indigo-50 text-indigo-700 border-indigo-200" },
  system: { label: "System", color: "bg-slate-100 text-slate-700 border-slate-200" }
};
function actionIcon(action) {
  if (action.endsWith(".created")) return Plus;
  if (action.endsWith(".deleted")) return Trash;
  if (action.endsWith(".updated")) return Pencil;
  if (action.endsWith(".login")) return LogIn;
  if (action.endsWith(".logout")) return LogOut;
  if (action.startsWith("shift")) return RefreshCcw;
  return CircleCheck;
}
function AdminDetails({
  event,
  admins,
  auditEvents
}) {
  const admin = event.adminId ? admins.find((a) => a.id === event.adminId) : void 0;
  const userActions = reactExports.useMemo(() => {
    const eventDay = new Date(event.at).toDateString();
    return auditEvents.filter((a) => {
      if (new Date(a.at).toDateString() !== eventDay) return false;
      if (event.adminId) return a.actor.adminId === event.adminId;
      return a.actor.username === event.username && a.actor.role === event.role;
    }).slice(0, 200);
  }, [auditEvents, event]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-200 p-4 sm:p-5 shadow-inner", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 sm:grid-cols-[260px_1fr]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-white border border-slate-200 p-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[hsl(265_85%_60%)] to-[hsl(280_85%_55%)] text-white shadow-md shadow-purple-500/30", children: /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "h-5 w-5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-black text-slate-900 break-words", children: event.displayName || event.username }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] font-medium text-slate-500 capitalize", children: event.role })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("dl", { className: "mt-4 space-y-2 text-xs", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Detail, { icon: AtSign, label: "Username", value: event.username }),
        admin?.idNumber && /* @__PURE__ */ jsxRuntimeExports.jsx(Detail, { icon: IdCard, label: "ID number", value: admin.idNumber }),
        admin?.fingerprintId && /* @__PURE__ */ jsxRuntimeExports.jsx(Detail, { icon: Fingerprint, label: "Fingerprint", value: admin.fingerprintId, mono: true }),
        admin?.createdAt && /* @__PURE__ */ jsxRuntimeExports.jsx(
          Detail,
          {
            icon: Clock,
            label: "Registered",
            value: new Date(admin.createdAt).toLocaleString()
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Detail, { icon: Activity, label: "Total actions", value: String(userActions.length) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-2 flex items-center gap-2 text-[11px] font-bold tracking-wider text-slate-500 uppercase", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "h-3.5 w-3.5" }),
        "Documented actions"
      ] }),
      userActions.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-xl border border-dashed border-slate-200 bg-white/70 px-4 py-6 text-center text-xs text-slate-500", children: "No actions recorded yet for this administrator." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "space-y-2 max-h-[420px] overflow-y-auto pr-1", children: userActions.map((a) => {
        const meta = CATEGORY_META[a.category];
        const Icon = actionIcon(a.action);
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "li",
          {
            className: "flex items-start gap-3 rounded-xl border border-slate-200 bg-white px-3 py-2.5",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-slate-50 text-slate-600 border border-slate-200", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-3.5 w-3.5" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: `inline-flex items-center rounded-full border px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${meta.color}`,
                      children: meta.label
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-mono text-slate-400", children: a.action })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-0.5 space-y-0.5 text-xs leading-relaxed text-slate-700", children: humanizeAudit(a).map((line, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: line }, i)) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right text-[10px] text-slate-400 tabular-nums whitespace-nowrap", children: [
                new Date(a.at).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                  second: "2-digit"
                }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: new Date(a.at).toLocaleDateString([], {
                  month: "short",
                  day: "numeric"
                }) })
              ] })
            ]
          },
          a.id
        );
      }) })
    ] })
  ] }) });
}
function Detail({
  icon: Icon,
  label,
  value,
  mono
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-3.5 w-3.5 mt-0.5 text-slate-400 shrink-0" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "text-[10px] font-bold uppercase tracking-wider text-slate-400", children: label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { className: `text-xs text-slate-800 break-words ${mono ? "font-mono" : "font-medium"}`, children: value })
    ] })
  ] });
}
const ACTIVE_STATUSES = ["in-house", "booked", "confirmed", "pending"];
const RATE_BY_CATEGORY = {
  "standard-double": { resident: [40, 40], nonResident: [40, 40] },
  "standard-twin": { resident: [40, 40], nonResident: [40, 40] },
  "standard-triple": { resident: [37, 37, 36], nonResident: [37, 37, 36] },
  "standard-quadruple": { resident: [35, 35, 35, 35], nonResident: [35, 35, 35, 35] },
  "deluxe-double": { resident: [90, 90], nonResident: [90, 90] },
  "deluxe-twin": { resident: [90, 90], nonResident: [90, 90] }
};
const RANGE_LABEL = {
  "7d": "7 дней",
  "14d": "14 дней",
  "30d": "30 дней"
};
function nightsOf(b) {
  return Math.max(
    1,
    differenceInDays(parseISO(b.checkOut), parseISO(b.checkIn)) + (b.checkInHalfDay ? 0.5 : 0) + (b.checkOutHalfDay ? 0.5 : 0)
  );
}
function isActiveOn(b, day) {
  if (!ACTIVE_STATUSES.includes(b.status)) return false;
  const inD = startOfDay(parseISO(b.checkIn));
  const outD = startOfDay(parseISO(b.checkOut));
  return day >= inD && day <= outD;
}
function bookingRevenue(b, categoryId, rates) {
  if (typeof b.price === "number" && Number.isFinite(b.price)) return b.price;
  if (!categoryId) return 0;
  const r = rates[categoryId] ?? RATE_BY_CATEGORY[categoryId];
  const arr = r?.resident ?? [];
  if (arr.length === 0) return 0;
  const guests = Math.max(1, Number(b.guestCount) || 1);
  const maxG = arr.length;
  const within = Math.min(guests, maxG);
  const base = Number(arr[within - 1]) || 0;
  const extras = Math.max(0, guests - maxG);
  const extraRate = Number(arr[0]) || 0;
  const perNight = base + extras * extraRate;
  return nightsOf(b) * perNight;
}
function useCountUp(target, duration = 900) {
  const [v, setV] = reactExports.useState(0);
  reactExports.useEffect(() => {
    let raf = 0;
    const start = performance.now();
    const from = 0;
    const tick = (t) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setV(from + (target - from) * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, duration]);
  return v;
}
function Manager() {
  const [view, setView] = reactExports.useState("workspace");
  const [range, setRange] = reactExports.useState("14d");
  const [workspaceViewMode, setWorkspaceViewMode] = reactExports.useState("timeline");
  const { bookings, addBooking, removeBooking, updateBooking } = useBookingsContext();
  const { categories, rooms, categoryRates } = useHotelGrid();
  reactExports.useEffect(() => {
    const handler = (e) => {
      const detail = e.detail;
      if (!detail || detail.to === "/manager") {
        setView("workspace");
        setWorkspaceViewMode("timeline");
        if (typeof window !== "undefined") {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }
    };
    window.addEventListener("workspace:reset", handler);
    return () => window.removeEventListener("workspace:reset", handler);
  }, []);
  const stats = reactExports.useMemo(() => {
    const today = startOfDay(/* @__PURE__ */ new Date());
    const totalRooms = rooms.length || 1;
    const days = range === "7d" ? 7 : range === "14d" ? 14 : 30;
    const occupiedRoomNumbers = new Set(
      bookings.filter((b) => isActiveOn(b, today)).map((b) => b.roomNumber)
    );
    const occupiedNow = occupiedRoomNumbers.size;
    const occupancyPct = Math.round(occupiedNow / totalRooms * 100);
    const trend = Array.from({ length: days }).map((_, i) => {
      const day = addDays(subDays(today, days - 1), i);
      const dayBookings = bookings.filter((b) => isActiveOn(b, day));
      const dayRooms = new Set(dayBookings.map((b) => b.roomNumber));
      const dayRevenue2 = dayBookings.reduce((acc, b) => {
        const room = rooms.find((r) => r.number === b.roomNumber);
        const perNight = bookingRevenue(b, room?.category, categoryRates) / nightsOf(b);
        return acc + perNight;
      }, 0);
      return {
        date: format(day, "dd.MM"),
        occupied: dayRooms.size,
        occupancy: Math.round(dayRooms.size / totalRooms * 100),
        bookings: dayBookings.length,
        revenue: Math.round(dayRevenue2)
      };
    });
    const totalRevenue = bookings.reduce((acc, b) => {
      const room = rooms.find((r) => r.number === b.roomNumber);
      if (b.status === "maintenance") return acc;
      return acc + bookingRevenue(b, room?.category, categoryRates);
    }, 0);
    const dayRevenue = trend[trend.length - 1]?.revenue ?? 0;
    const prevDayRevenue = trend[trend.length - 2]?.revenue ?? 0;
    const weekRevenue = trend.slice(-7).reduce((a, b) => a + b.revenue, 0);
    const prevWeekRevenue = trend.slice(-14, -7).reduce((a, b) => a + b.revenue, 0);
    const monthRevenue = trend.reduce((a, b) => a + b.revenue, 0);
    const revenueGrowth = prevWeekRevenue ? Math.round((weekRevenue - prevWeekRevenue) / prevWeekRevenue * 100) : 0;
    const dailyGrowth = prevDayRevenue ? Math.round((dayRevenue - prevDayRevenue) / prevDayRevenue * 100) : 0;
    const statusCounts = Object.keys(BOOKING_STATUSES).reduce(
      (acc, s) => {
        acc[s] = bookings.filter((b) => b.status === s).length;
        return acc;
      },
      {}
    );
    const upcoming = bookings.filter(
      (b) => parseISO(b.checkIn) > today && ["booked", "confirmed", "pending"].includes(b.status)
    ).length;
    const active = bookings.filter((b) => isActiveOn(b, today)).length;
    const statusPie = Object.keys(BOOKING_STATUSES).map((s) => ({
      name: BOOKING_STATUSES[s].label.ru,
      value: statusCounts[s],
      color: BOOKING_STATUSES[s].color
    })).filter((d) => d.value > 0);
    const categoryUsage = categories.map((c) => {
      const catRooms = rooms.filter((r) => r.category === c.id);
      const occ = catRooms.filter((r) => occupiedRoomNumbers.has(r.number)).length;
      return {
        name: c.short,
        full: c.label.ru,
        total: catRooms.length,
        occupied: occ,
        free: catRooms.length - occ,
        pct: catRooms.length ? Math.round(occ / catRooms.length * 100) : 0
      };
    });
    const totalGuests = bookings.filter((b) => b.status === "in-house").reduce((acc, b) => acc + (b.guestCount || 1), 0);
    return {
      totalRooms,
      occupiedNow,
      occupancyPct,
      trend,
      totalRevenue,
      dayRevenue,
      weekRevenue,
      monthRevenue,
      revenueGrowth,
      dailyGrowth,
      statusCounts,
      statusPie,
      categoryUsage,
      upcoming,
      active,
      totalGuests,
      totalBookings: bookings.length
    };
  }, [bookings, rooms, categories, categoryRates, range]);
  if (view === "workspace") {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-screen flex-col overflow-hidden bg-gradient-to-b from-background via-background to-[hsl(265_60%_98%)] dark:to-background", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(HotelNavbar, { totalRooms: stats.totalRooms, viewMode: workspaceViewMode, onViewModeChange: setWorkspaceViewMode }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(HotelDashboardBody, { showNavbar: false, showFooter: false, viewMode: workspaceViewMode, onViewModeChange: setWorkspaceViewMode }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FloatingNav, { view, onChange: setView })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-gradient-to-b from-background via-background to-[hsl(265_60%_98%)] dark:to-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(HotelNavbar, { totalRooms: stats.totalRooms, viewMode: "timeline", onViewModeChange: () => {
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "w-full pb-32", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 16, filter: "blur(6px)" },
        animate: { opacity: 1, y: 0, filter: "blur(0px)" },
        exit: { opacity: 0, y: -10, filter: "blur(4px)" },
        transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
        children: view === "analytics" ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full px-4 pt-8 sm:px-6 lg:px-8 space-y-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { view, range, onRangeChange: setRange }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AnalyticsView, { stats })
        ] }) : view === "login-history" ? /* @__PURE__ */ jsxRuntimeExports.jsx(ManagerLoginHistory, {}) : view === "hotel-details" ? /* @__PURE__ */ jsxRuntimeExports.jsx(HotelDetailsPage, { embedded: true }) : /* @__PURE__ */ jsxRuntimeExports.jsx(SuperuserAdmins, { embedded: true })
      },
      view
    ) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FloatingNav, { view, onChange: setView })
  ] });
}
function PageHeader({
  view,
  range,
  onRangeChange
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: -8 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.4 },
      className: "flex flex-wrap items-end justify-between gap-4",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 rounded-full border border-[hsl(265_85%_55%)]/20 bg-[hsl(265_85%_97%)] px-3 py-1 text-[10px] font-black uppercase tracking-[0.22em] text-[hsl(265_85%_55%)] dark:bg-[hsl(265_60%_15%)]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3 w-3" }),
            "Manager workspace"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-3 text-3xl font-black tracking-tight text-foreground sm:text-4xl", children: view === "workspace" ? "Workplace" : "Analytics" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground", children: view === "workspace" ? "The same Superuser hotel grid is shown here for synchronized daily operations." : "Best hotel statistics, revenue trends, occupancy intelligence, and booking activity in one clean view." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-1 rounded-full border border-border bg-card p-1 shadow-sm", children: Object.keys(RANGE_LABEL).map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => onRangeChange(r),
            className: `relative rounded-full px-3.5 py-1.5 text-xs font-bold transition-colors ${range === r ? "text-white" : "text-muted-foreground hover:text-foreground"}`,
            children: [
              range === r && /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.span,
                {
                  layoutId: "manager-range-pill",
                  className: "absolute inset-0 rounded-full bg-gradient-to-r from-[hsl(265_85%_55%)] to-[hsl(280_85%_60%)] shadow-md shadow-purple-500/30",
                  transition: { type: "spring", stiffness: 400, damping: 30 }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative z-10", children: RANGE_LABEL[r] })
            ]
          },
          r
        )) })
      ]
    }
  );
}
function RevenueContainer({ stats }) {
  const day = useCountUp(stats.dayRevenue);
  const week = useCountUp(stats.weekRevenue);
  const month = useCountUp(stats.monthRevenue);
  const positive = stats.revenueGrowth >= 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    AnalyticsCard,
    {
      Icon: DollarSign,
      title: "Доход",
      subtitle: "Выручка отеля",
      accent: "from-[hsl(265_85%_55%)] to-[hsl(280_85%_60%)]",
      delay: 0,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline justify-between gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-black uppercase tracking-wider text-muted-foreground", children: "Сегодня" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1 text-3xl font-black tracking-tight text-foreground tabular-nums", children: [
              "$",
              Math.round(day).toLocaleString()
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "span",
            {
              className: `inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-bold ${positive ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400" : "bg-rose-500/10 text-rose-600 dark:text-rose-400"}`,
              children: [
                positive ? /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-3 w-3" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowDownRight, { className: "h-3 w-3" }),
                Math.abs(stats.revenueGrowth),
                "%"
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 grid grid-cols-2 gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MiniStat, { label: "Неделя", value: `$${Math.round(week).toLocaleString()}` }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(MiniStat, { label: "Месяц", value: `$${Math.round(month).toLocaleString()}` })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 h-32", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: "100%", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AreaChart, { data: stats.trend, margin: { top: 5, right: 0, bottom: 0, left: 0 }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "revGrad", x1: "0", y1: "0", x2: "0", y2: "1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "hsl(265 85% 55%)", stopOpacity: 0.45 }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "hsl(265 85% 55%)", stopOpacity: 0 })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { content: /* @__PURE__ */ jsxRuntimeExports.jsx(NiceTooltip, { suffix: "$" }), cursor: { stroke: "hsl(265 85% 55%)", strokeOpacity: 0.2 } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Area,
            {
              type: "monotone",
              dataKey: "revenue",
              stroke: "hsl(265 85% 55%)",
              strokeWidth: 2.5,
              fill: "url(#revGrad)"
            }
          )
        ] }) }) })
      ]
    }
  );
}
function BookingContainer({ stats }) {
  const sc = stats.statusCounts;
  const total = useCountUp(stats.totalBookings);
  const cards = [
    { label: "Активные", value: sc["in-house"] + sc.booked, color: "text-emerald-500", Icon: Activity },
    { label: "Ожидают", value: sc.confirmed + sc.pending, color: "text-amber-500", Icon: Clock3 },
    { label: "Завершены", value: sc["checked-out"], color: "text-slate-400", Icon: CircleCheck },
    { label: "Отменены", value: sc.maintenance, color: "text-rose-500", Icon: CircleX }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    AnalyticsCard,
    {
      Icon: CalendarDays,
      title: "Бронирования",
      subtitle: "Активность по статусам",
      accent: "from-sky-400 to-blue-600",
      delay: 0.08,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-black uppercase tracking-wider text-muted-foreground", children: "Всего" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-3xl font-black tracking-tight text-foreground tabular-nums", children: Math.round(total) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 rounded-full bg-sky-500/10 px-2.5 py-1 text-[11px] font-bold text-sky-600 dark:text-sky-400", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "h-3 w-3" }),
            stats.upcoming,
            " новых"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 grid grid-cols-2 gap-2", children: cards.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "flex items-center gap-2.5 rounded-xl border border-border bg-muted/30 px-3 py-2.5 transition-colors hover:bg-muted/60",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(c.Icon, { className: `h-4 w-4 ${c.color}` }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-black uppercase tracking-wider text-muted-foreground", children: c.label }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-bold text-foreground tabular-nums", children: c.value })
              ] })
            ]
          },
          c.label
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 h-32", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: "100%", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(BarChart, { data: stats.trend, margin: { top: 5, right: 0, bottom: 0, left: 0 }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { content: /* @__PURE__ */ jsxRuntimeExports.jsx(NiceTooltip, {}), cursor: { fill: "hsl(265 85% 55% / 0.06)" } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Bar, { dataKey: "bookings", radius: [6, 6, 0, 0], children: stats.trend.map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Cell, { fill: "hsl(210 90% 55%)" }, i)) })
        ] }) }) })
      ]
    }
  );
}
function OccupancyContainer({ stats }) {
  const pct = useCountUp(stats.occupancyPct);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    AnalyticsCard,
    {
      Icon: Percent,
      title: "Загрузка",
      subtitle: "Использование номеров",
      accent: "from-emerald-400 to-teal-600",
      delay: 0.16,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircularGauge, { value: Math.round(pct) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-black uppercase tracking-wider text-muted-foreground", children: "Сейчас занято" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1 text-2xl font-black text-foreground tabular-nums", children: [
              stats.occupiedNow,
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-base font-bold text-muted-foreground", children: [
                "/",
                stats.totalRooms
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-2 text-[11px] text-muted-foreground", children: [
              "Свободно ",
              stats.totalRooms - stats.occupiedNow,
              " номеров"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 space-y-2.5", children: stats.categoryUsage.slice(0, 4).map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-[11px]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: c.full }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-bold tabular-nums text-muted-foreground", children: [
              c.occupied,
              "/",
              c.total,
              " · ",
              c.pct,
              "%"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 overflow-hidden rounded-full bg-muted", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { width: 0 },
              animate: { width: `${c.pct}%` },
              transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
              className: "h-full rounded-full bg-gradient-to-r from-emerald-400 to-teal-500"
            }
          ) })
        ] }, c.name)) })
      ]
    }
  );
}
function AnalyticsView({ stats }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-6 lg:grid-cols-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SummaryStat,
        {
          label: "Всего бронирований",
          value: stats.totalBookings,
          Icon: CalendarDays,
          accent: "from-[hsl(265_85%_55%)] to-[hsl(280_85%_60%)]"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SummaryStat,
        {
          label: "Гостей в отеле",
          value: stats.totalGuests,
          Icon: Users,
          accent: "from-sky-400 to-blue-600"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SummaryStat,
        {
          label: "Накопленный доход",
          value: stats.totalRevenue,
          prefix: "$",
          Icon: DollarSign,
          accent: "from-emerald-400 to-teal-600"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-6 xl:grid-cols-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(RevenueContainer, { stats }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(BookingContainer, { stats }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(OccupancyContainer, { stats })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-6 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        ChartContainer,
        {
          Icon: ChartLine,
          title: "Тренд выручки",
          subtitle: "Доход за период",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs(LineChart, { data: stats.trend, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CartesianGrid, { stroke: "hsl(var(--border) / 0.4)", strokeDasharray: "3 3", vertical: false }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(XAxis, { dataKey: "date", stroke: "hsl(var(--muted-foreground))", fontSize: 11, tickLine: false, axisLine: false }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(YAxis, { stroke: "hsl(var(--muted-foreground))", fontSize: 11, tickLine: false, axisLine: false }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { content: /* @__PURE__ */ jsxRuntimeExports.jsx(NiceTooltip, { suffix: "$" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Line,
              {
                type: "monotone",
                dataKey: "revenue",
                stroke: "hsl(265 85% 55%)",
                strokeWidth: 3,
                dot: { r: 3, fill: "hsl(265 85% 55%)" },
                activeDot: { r: 5 }
              }
            )
          ] })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        ChartContainer,
        {
          Icon: Gauge,
          title: "Загрузка отеля",
          subtitle: "Процент занятости по дням",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AreaChart, { data: stats.trend, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "occGrad", x1: "0", y1: "0", x2: "0", y2: "1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "hsl(160 70% 45%)", stopOpacity: 0.4 }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "hsl(160 70% 45%)", stopOpacity: 0 })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CartesianGrid, { stroke: "hsl(var(--border) / 0.4)", strokeDasharray: "3 3", vertical: false }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(XAxis, { dataKey: "date", stroke: "hsl(var(--muted-foreground))", fontSize: 11, tickLine: false, axisLine: false }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(YAxis, { stroke: "hsl(var(--muted-foreground))", fontSize: 11, tickLine: false, axisLine: false }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { content: /* @__PURE__ */ jsxRuntimeExports.jsx(NiceTooltip, { suffix: "%" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Area,
              {
                type: "monotone",
                dataKey: "occupancy",
                stroke: "hsl(160 70% 45%)",
                strokeWidth: 2.5,
                fill: "url(#occGrad)"
              }
            )
          ] })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        ChartContainer,
        {
          Icon: ChartColumn,
          title: "Активность бронирований",
          subtitle: "Количество активных броней по дням",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs(BarChart, { data: stats.trend, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CartesianGrid, { stroke: "hsl(var(--border) / 0.4)", strokeDasharray: "3 3", vertical: false }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(XAxis, { dataKey: "date", stroke: "hsl(var(--muted-foreground))", fontSize: 11, tickLine: false, axisLine: false }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(YAxis, { stroke: "hsl(var(--muted-foreground))", fontSize: 11, tickLine: false, axisLine: false }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { content: /* @__PURE__ */ jsxRuntimeExports.jsx(NiceTooltip, {}), cursor: { fill: "hsl(210 90% 55% / 0.08)" } }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Bar, { dataKey: "bookings", radius: [8, 8, 0, 0], fill: "hsl(210 90% 55%)" })
          ] })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        ChartContainer,
        {
          Icon: Activity,
          title: "Распределение статусов",
          subtitle: "Текущие бронирования",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs(PieChart, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { content: /* @__PURE__ */ jsxRuntimeExports.jsx(NiceTooltip, {}) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Pie,
              {
                data: stats.statusPie,
                dataKey: "value",
                nameKey: "name",
                innerRadius: 60,
                outerRadius: 95,
                paddingAngle: 3,
                stroke: "hsl(var(--background))",
                strokeWidth: 3,
                children: stats.statusPie.map((d, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Cell, { fill: d.color }, i))
              }
            )
          ] })
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-6 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        ChartContainer,
        {
          Icon: BedDouble,
          title: "Загрузка по категориям",
          subtitle: "Занятые vs свободные номера",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs(BarChart, { data: stats.categoryUsage, layout: "vertical", margin: { left: 12 }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CartesianGrid, { stroke: "hsl(var(--border) / 0.4)", strokeDasharray: "3 3", horizontal: false }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(XAxis, { type: "number", stroke: "hsl(var(--muted-foreground))", fontSize: 11, tickLine: false, axisLine: false }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(YAxis, { type: "category", dataKey: "name", stroke: "hsl(var(--muted-foreground))", fontSize: 11, tickLine: false, axisLine: false, width: 70 }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { content: /* @__PURE__ */ jsxRuntimeExports.jsx(NiceTooltip, {}), cursor: { fill: "hsl(265 85% 55% / 0.06)" } }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Bar, { dataKey: "occupied", stackId: "a", radius: [0, 0, 0, 0], fill: "hsl(265 85% 55%)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Bar, { dataKey: "free", stackId: "a", radius: [0, 6, 6, 0], fill: "hsl(160 70% 45%)" })
          ] })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        ChartContainer,
        {
          Icon: TrendingUp,
          title: "Номера занятые по дням",
          subtitle: "Динамика занятых номеров",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AreaChart, { data: stats.trend, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "occRoomsGrad", x1: "0", y1: "0", x2: "0", y2: "1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "hsl(210 90% 55%)", stopOpacity: 0.45 }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "hsl(210 90% 55%)", stopOpacity: 0 })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CartesianGrid, { stroke: "hsl(var(--border) / 0.4)", strokeDasharray: "3 3", vertical: false }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(XAxis, { dataKey: "date", stroke: "hsl(var(--muted-foreground))", fontSize: 11, tickLine: false, axisLine: false }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(YAxis, { stroke: "hsl(var(--muted-foreground))", fontSize: 11, tickLine: false, axisLine: false }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { content: /* @__PURE__ */ jsxRuntimeExports.jsx(NiceTooltip, {}) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Area, { type: "monotone", dataKey: "occupied", stroke: "hsl(210 90% 55%)", strokeWidth: 2.5, fill: "url(#occRoomsGrad)" })
          ] })
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(RecentActivity, { stats })
  ] });
}
function AnalyticsCard({
  Icon,
  title,
  subtitle,
  accent,
  children,
  delay = 0
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 16 },
      animate: { opacity: 1, y: 0 },
      transition: { delay, duration: 0.5 },
      whileHover: { y: -4 },
      className: "group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border/70 bg-card p-6 shadow-sm transition-shadow hover:shadow-xl hover:shadow-purple-500/10",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: `absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gradient-to-br ${accent} opacity-10 blur-2xl transition-opacity duration-500 group-hover:opacity-25`
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-5 flex items-center justify-between", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: `inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br ${accent} text-white shadow-md`,
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-black tracking-tight text-foreground", children: title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground", children: subtitle })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1", children })
      ]
    }
  );
}
function ChartContainer({
  Icon,
  title,
  subtitle,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 12 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.5 },
      className: "rounded-3xl border border-border/70 bg-card p-6 shadow-sm transition-shadow hover:shadow-lg",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex h-10 w-10 items-center justify-center rounded-xl bg-muted text-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4.5 w-4.5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-black tracking-tight text-foreground", children: title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground", children: subtitle })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-72", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: "100%", children }) })
      ]
    }
  );
}
function SummaryStat({
  label,
  value,
  prefix = "",
  Icon,
  accent
}) {
  const v = useCountUp(value);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 12 },
      animate: { opacity: 1, y: 0 },
      whileHover: { y: -3 },
      className: "group relative overflow-hidden rounded-2xl border border-border/70 bg-card p-5 shadow-sm transition-shadow hover:shadow-lg",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: `absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br ${accent} opacity-10 blur-2xl transition-opacity group-hover:opacity-25`
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-black uppercase tracking-wider text-muted-foreground", children: label }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1 text-3xl font-black tracking-tight text-foreground tabular-nums", children: [
              prefix,
              Math.round(v).toLocaleString()
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: `inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${accent} text-white shadow-md`,
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5" })
            }
          )
        ] })
      ]
    }
  );
}
function MiniStat({ label, value }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-muted/30 px-3 py-2.5 transition-colors hover:bg-muted/60", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-black uppercase tracking-wider text-muted-foreground", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-0.5 text-sm font-bold text-foreground tabular-nums", children: value })
  ] });
}
function CircularGauge({ value }) {
  const size = 96;
  const stroke = 8;
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const offset = c - value / 100 * c;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", style: { width: size, height: size }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { width: size, height: size, className: "-rotate-90", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: size / 2, cy: size / 2, r, stroke: "hsl(var(--muted))", strokeWidth: stroke, fill: "none" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.circle,
        {
          cx: size / 2,
          cy: size / 2,
          r,
          stroke: "url(#gaugeGrad)",
          strokeWidth: stroke,
          fill: "none",
          strokeLinecap: "round",
          initial: { strokeDashoffset: c },
          animate: { strokeDashoffset: offset },
          transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
          style: { strokeDasharray: c }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "gaugeGrad", x1: "0", y1: "0", x2: "1", y2: "1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "hsl(160 70% 45%)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "hsl(180 70% 50%)" })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xl font-black tabular-nums text-foreground", children: [
      value,
      "%"
    ] }) })
  ] });
}
function NiceTooltip({
  active,
  payload,
  label,
  suffix = ""
}) {
  if (!active || !payload?.length) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-popover/95 px-3 py-2 text-xs shadow-xl backdrop-blur-sm", children: [
    label && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-1 font-bold text-foreground", children: label }),
    payload.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "span",
        {
          className: "h-2 w-2 rounded-full",
          style: { background: p.color || p.payload?.color || "hsl(265 85% 55%)" }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
        p.name,
        ":"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-bold text-foreground tabular-nums", children: [
        suffix === "$" && "$",
        p.value.toLocaleString(),
        suffix && suffix !== "$" && suffix
      ] })
    ] }, i))
  ] });
}
function RecentActivity({ stats }) {
  const items = [
    { Icon: CalendarCheck, label: "Активные бронирования", value: stats.active, tone: "text-emerald-500" },
    { Icon: Clock3, label: "Предстоящие заезды", value: stats.upcoming, tone: "text-amber-500" },
    { Icon: Users, label: "Гости в отеле", value: stats.totalGuests, tone: "text-sky-500" },
    { Icon: BedDouble, label: "Свободные номера", value: stats.totalRooms - stats.occupiedNow, tone: "text-violet-500" }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.section,
    {
      initial: { opacity: 0, y: 12 },
      animate: { opacity: 1, y: 0 },
      transition: { delay: 0.2, duration: 0.5 },
      className: "rounded-3xl border border-border/70 bg-card p-6 shadow-sm",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-5 flex items-center justify-between", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-black tracking-tight text-foreground", children: "Быстрая сводка" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground", children: "Операционные показатели в реальном времени" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-3 sm:grid-cols-4", children: items.map((it) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "flex items-center gap-3 rounded-2xl border border-border bg-muted/20 px-4 py-3 transition-all hover:-translate-y-0.5 hover:bg-muted/50 hover:shadow-md",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(it.Icon, { className: `h-5 w-5 ${it.tone}` }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-black uppercase tracking-wider text-muted-foreground", children: it.label }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-black tabular-nums text-foreground", children: it.value })
              ] })
            ]
          },
          it.label
        )) })
      ]
    }
  );
}
function FloatingNav({
  view,
  onChange
}) {
  const tabs = [
    { key: "workspace", label: "Workspace", Icon: LayoutDashboard },
    { key: "analytics", label: "Analytics", Icon: ChartColumn },
    { key: "admin-registration", label: "Admin Registration", Icon: UserPlus },
    { key: "login-history", label: "Login History", Icon: History },
    { key: "hotel-details", label: "Hotel Details", Icon: Landmark }
  ];
  const [mounted, setMounted] = reactExports.useState(false);
  const [mode, setMode] = reactExports.useState(() => {
    if (typeof window === "undefined") return "bar";
    return localStorage.getItem("manager:nav-mode") || "bar";
  });
  const [menuOpen, setMenuOpen] = reactExports.useState(false);
  reactExports.useEffect(() => {
    setMounted(true);
  }, []);
  reactExports.useEffect(() => {
    if (typeof window !== "undefined") localStorage.setItem("manager:nav-mode", mode);
    if (mode !== "compact") setMenuOpen(false);
  }, [mode]);
  const activeTab = tabs.find((t) => t.key === view) ?? tabs[0];
  const nav = /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      style: {
        position: "fixed",
        left: 0,
        right: 0,
        bottom: 24,
        zIndex: 2147483600,
        display: "flex",
        justifyContent: "center",
        pointerEvents: "none"
      },
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          animate: { opacity: 1, y: 0 },
          transition: { type: "spring", stiffness: 260, damping: 24, mass: 0.7 },
          className: "pointer-events-auto",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AnimatePresence, { mode: "wait", initial: false, children: [
            mode === "hidden" && /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.button,
              {
                initial: { opacity: 0, scale: 0.85 },
                animate: { opacity: 1, scale: 1 },
                exit: { opacity: 0, scale: 0.85 },
                onClick: () => setMode("bar"),
                title: "Show navigation",
                className: "flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-slate-900/90 text-white shadow-2xl shadow-purple-900/40 backdrop-blur-xl transition hover:scale-105",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(LayoutDashboard, { className: "h-4 w-4" })
              },
              "hidden"
            ),
            mode === "compact" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 8 },
                animate: { opacity: 1, y: 0 },
                exit: { opacity: 0, y: 8 },
                className: "relative flex items-center gap-1 rounded-full border border-white/15 bg-slate-900/90 p-1.5 shadow-2xl shadow-purple-900/40 backdrop-blur-xl",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      onClick: () => setMenuOpen((v) => !v),
                      className: "flex items-center gap-2 rounded-full bg-gradient-to-r from-[hsl(265_85%_55%)] to-[hsl(280_85%_60%)] px-4 py-2 text-xs font-bold tracking-wide text-white shadow-lg shadow-purple-500/40 transition hover:brightness-110",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(activeTab.Icon, { className: "h-4 w-4" }),
                        activeTab.label,
                        /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: `h-3.5 w-3.5 transition-transform ${menuOpen ? "" : "rotate-180"}` })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      onClick: () => setMode("bar"),
                      title: "Expand to full bar",
                      className: "flex h-9 w-9 items-center justify-center rounded-full text-white/70 transition hover:bg-white/10 hover:text-white",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Maximize2, { className: "h-4 w-4" })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      onClick: () => setMode("hidden"),
                      title: "Hide navigation",
                      className: "flex h-9 w-9 items-center justify-center rounded-full text-white/70 transition hover:bg-white/10 hover:text-white",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: menuOpen && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    motion.div,
                    {
                      initial: { opacity: 0, y: 8, scale: 0.96 },
                      animate: { opacity: 1, y: 0, scale: 1 },
                      exit: { opacity: 0, y: 8, scale: 0.96 },
                      transition: { duration: 0.15 },
                      className: "absolute bottom-full left-0 mb-2 min-w-[220px] overflow-hidden rounded-2xl border border-white/15 bg-slate-900/95 p-1.5 shadow-2xl shadow-purple-900/40 backdrop-blur-xl",
                      children: tabs.map((t) => {
                        const active = view === t.key;
                        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "button",
                          {
                            onClick: () => {
                              onChange(t.key);
                              setMenuOpen(false);
                            },
                            className: `flex w-full items-center gap-2.5 rounded-xl px-3 py-2.5 text-left text-xs font-bold tracking-wide transition ${active ? "bg-gradient-to-r from-[hsl(265_85%_55%)] to-[hsl(280_85%_60%)] text-white shadow-md shadow-purple-500/40" : "text-white/70 hover:bg-white/10 hover:text-white"}`,
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(t.Icon, { className: "h-4 w-4" }),
                              t.label
                            ]
                          },
                          t.key
                        );
                      })
                    }
                  ) })
                ]
              },
              "compact"
            ),
            mode === "bar" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 8 },
                animate: { opacity: 1, y: 0 },
                exit: { opacity: 0, y: 8 },
                className: "flex items-center gap-1 rounded-full border border-white/15 bg-slate-900/90 p-1.5 shadow-2xl shadow-purple-900/40 backdrop-blur-xl",
                children: [
                  tabs.map((t) => {
                    const active = view === t.key;
                    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "button",
                      {
                        onClick: () => onChange(t.key),
                        className: `relative flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-bold tracking-wide transition-all duration-300 ease-out ${active ? "text-white" : "text-white/60 hover:text-white hover:scale-[1.03]"}`,
                        children: [
                          active && /* @__PURE__ */ jsxRuntimeExports.jsx(
                            motion.span,
                            {
                              layoutId: "manager-nav-pill",
                              className: "absolute inset-0 rounded-full bg-gradient-to-r from-[hsl(265_85%_55%)] to-[hsl(280_85%_60%)] shadow-lg shadow-purple-500/50",
                              transition: { type: "spring", stiffness: 380, damping: 28 }
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative z-10 flex items-center gap-2", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(t.Icon, { className: "h-4 w-4" }),
                            t.label
                          ] })
                        ]
                      }
                    ) }, t.key);
                  }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-1 h-6 w-px bg-white/10" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      onClick: () => setMode("compact"),
                      title: "Collapse to dropdown",
                      className: "flex h-9 w-9 items-center justify-center rounded-full text-white/60 transition hover:bg-white/10 hover:text-white",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Minimize2, { className: "h-4 w-4" })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      onClick: () => setMode("hidden"),
                      title: "Hide navigation",
                      className: "flex h-9 w-9 items-center justify-center rounded-full text-white/60 transition hover:bg-white/10 hover:text-white",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" })
                    }
                  )
                ]
              },
              "bar"
            )
          ] })
        }
      )
    }
  );
  if (!mounted || typeof document === "undefined") return null;
  return reactDomExports.createPortal(nav, document.body);
}
function ManagerRouteComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ProtectedRoute, { allow: ["superuser", "manager"], children: /* @__PURE__ */ jsxRuntimeExports.jsx(Manager, {}) });
}
export {
  ManagerRouteComponent as component
};
