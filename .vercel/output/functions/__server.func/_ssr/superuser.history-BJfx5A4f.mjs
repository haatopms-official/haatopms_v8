import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { P as ProtectedRoute } from "./ProtectedRoute-wiEuUcf9.mjs";
import { a as useAuth, k as useAudit, b as useAdmins } from "./router-D4A6PFi8.mjs";
import { H as HotelNavbar } from "./HotelNavbar-BoJodXQi.mjs";
import { h as humanizeAudit } from "./auditFormat-DhjM8GyN.mjs";
import "../_libs/next-themes.mjs";
import "../_libs/sonner.mjs";
import "./client-Cr_PIcuQ.mjs";
import "../_libs/react-dom.mjs";
import { s as History, g as Trash2, ag as Search, q as Settings2, h as User, p as Briefcase, o as Shield, L as LogIn, a as LogOut, f as ChevronDown, aE as AtSign, a9 as IdCard, a5 as Fingerprint, C as Clock, a3 as Activity, P as Plus, aF as Trash, l as Pencil, aG as RefreshCcw, a0 as CircleCheck } from "../_libs/lucide-react.mjs";
import { A as AnimatePresence, m as motion } from "../_libs/framer-motion.mjs";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
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
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/supabase__supabase-js.mjs";
import "../_libs/supabase__postgrest-js.mjs";
import "../_libs/supabase__realtime-js.mjs";
import "../_libs/supabase__phoenix.mjs";
import "../_libs/supabase__storage-js.mjs";
import "../_libs/iceberg-js.mjs";
import "../_libs/supabase__auth-js.mjs";
import "tslib";
import "../_libs/supabase__functions-js.mjs";
import "../_libs/radix-ui__react-popover.mjs";
import "../_libs/radix-ui__react-focus-guards.mjs";
import "../_libs/radix-ui__react-focus-scope.mjs";
import "../_libs/radix-ui__react-id.mjs";
import "../_libs/aria-hidden.mjs";
import "../_libs/react-remove-scroll.mjs";
import "../_libs/react-remove-scroll-bar.mjs";
import "../_libs/react-style-singleton.mjs";
import "../_libs/get-nonce.mjs";
import "../_libs/use-sidecar.mjs";
import "../_libs/use-callback-ref.mjs";
import "../_libs/radix-ui__react-dropdown-menu.mjs";
import "../_libs/radix-ui__react-menu.mjs";
import "../_libs/radix-ui__react-direction.mjs";
import "../_libs/radix-ui__react-roving-focus.mjs";
import "../_libs/@radix-ui/react-use-is-hydrated+[...].mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const ROLE_ICON = {
  superuser: Shield,
  director: Briefcase,
  admin: User,
  manager: Settings2
};
const ROLE_COLOR = {
  superuser: "text-fuchsia-600 bg-fuchsia-50 border-fuchsia-200",
  director: "text-amber-600 bg-amber-50 border-amber-200",
  admin: "text-sky-600 bg-sky-50 border-sky-200",
  manager: "text-emerald-600 bg-emerald-50 border-emerald-200"
};
function SuperuserHistory() {
  const { history, clearHistory } = useAuth();
  const { events: auditEvents, clear: clearAudit } = useAudit();
  const { admins } = useAdmins();
  const [query, setQuery] = reactExports.useState("");
  const [filter, setFilter] = reactExports.useState("all");
  const [scope, setScope] = reactExports.useState("admins");
  const [expanded, setExpanded] = reactExports.useState(null);
  const visibleHistory = reactExports.useMemo(() => {
    return history.filter((e) => {
      if (scope === "admins" && e.role !== "admin") return false;
      if (filter !== "all" && e.action !== filter) return false;
      const q = query.trim().toLowerCase();
      if (!q) return true;
      return e.username.toLowerCase().includes(q) || e.role.toLowerCase().includes(q) || (e.displayName ?? "").toLowerCase().includes(q);
    });
  }, [history, query, filter, scope]);
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-h-screen flex-col bg-gradient-to-br from-slate-50 to-slate-100", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(HotelNavbar, { totalRooms: 0, viewMode: "tiles", onViewModeChange: () => {
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "flex-1 px-4 sm:px-8 py-8 max-w-5xl w-full mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "flex flex-wrap items-end justify-between gap-4 mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-[hsl(265_85%_55%)] text-xs font-bold tracking-widest uppercase", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(History, { className: "h-3.5 w-3.5" }),
            "Activity log"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-1 text-3xl font-black tracking-tight text-slate-900", children: "Login history" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-slate-500", children: "Sign-in / sign-out events for every administrator. Click an event to see who they are and every action they performed in this system." })
        ] }),
        (history.length > 0 || auditEvents.length > 0) && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => {
              if (confirm("Clear the entire activity log (logins + actions)?")) {
                clearHistory();
                clearAudit();
              }
            },
            className: "flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-bold text-slate-600 hover:bg-red-50 hover:text-red-600 hover:border-red-200",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-3.5 w-3.5" }),
              "Clear log"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2 mb-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-1 min-w-[220px]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              value: query,
              onChange: (e) => setQuery(e.target.value.slice(0, 28)),
              placeholder: "Filter by name, username or role…",
              maxLength: 28,
              className: "w-full rounded-xl border border-slate-200 bg-white py-2.5 pl-9 pr-3 text-sm outline-none focus:border-[hsl(265_85%_55%)] focus:ring-4 focus:ring-[hsl(265_85%_55%)]/15"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-1 rounded-xl bg-white border border-slate-200 p-1 text-xs font-bold", children: ["admins", "all"].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => setScope(s),
            className: `rounded-lg px-3 py-1.5 transition ${scope === s ? "bg-[hsl(265_85%_55%)] text-white shadow" : "text-slate-500 hover:text-slate-800"}`,
            children: s === "admins" ? "Admins only" : "All roles"
          },
          s
        )) }),
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
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm font-bold text-slate-700", children: "No activity yet" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-slate-500", children: scope === "admins" ? "When administrators sign in, their sessions will appear here." : "As people sign in and out, their actions will appear here." })
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
          const Icon = ROLE_ICON[e.role];
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
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "span",
                        {
                          className: `inline-flex items-center gap-1 rounded-full border px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${ROLE_COLOR[e.role]}`,
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-3 w-3" }),
                            e.role
                          ]
                        }
                      ),
                      e.adminId && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] font-mono text-slate-400", children: [
                        "@",
                        e.username
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
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-bold text-slate-700 tabular-nums", children: new Date(e.at).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-slate-400 tabular-nums", children: new Date(e.at).toLocaleDateString([], { month: "short", day: "numeric" }) })
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
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(ExpandedDetails, { event: e, admins, auditEvents })
              },
              "details"
            ) })
          ] }, e.id);
        }) })
      ] }, day)) })
    ] })
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
function ExpandedDetails({
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
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 ml-0 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-200 p-4 sm:p-5 shadow-inner", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 sm:grid-cols-[260px_1fr]", children: [
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
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Detail,
          {
            icon: Activity,
            label: "Total actions",
            value: String(userActions.length)
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-2 flex items-center gap-2 text-[11px] font-bold tracking-wider text-slate-500 uppercase", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "h-3.5 w-3.5" }),
        "Documented actions"
      ] }),
      userActions.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-xl border border-dashed border-slate-200 bg-white/70 px-4 py-6 text-center text-xs text-slate-500", children: "No actions recorded yet for this account." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "space-y-2 max-h-[420px] overflow-y-auto pr-1", children: userActions.map((a) => {
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
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: new Date(a.at).toLocaleDateString([], { month: "short", day: "numeric" }) })
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
    /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-3.5 w-3.5 mt-0.5 text-slate-400" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-bold uppercase tracking-wider text-slate-400", children: label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `text-xs text-slate-800 break-words ${mono ? "font-mono tracking-wider" : "font-semibold"}`, children: value })
    ] })
  ] });
}
const SplitComponent = () => /* @__PURE__ */ jsxRuntimeExports.jsx(ProtectedRoute, { allow: ["superuser", "manager"], children: /* @__PURE__ */ jsxRuntimeExports.jsx(SuperuserHistory, {}) });
export {
  SplitComponent as component
};
