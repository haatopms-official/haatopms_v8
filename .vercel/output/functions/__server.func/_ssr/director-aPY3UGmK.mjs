import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { P as ProtectedRoute } from "./ProtectedRoute-wiEuUcf9.mjs";
import { H as HotelNavbar } from "./HotelNavbar-BoJodXQi.mjs";
import { g as useBookingsContext, h as useHotelGrid, B as BOOKING_STATUSES, u as useShift, a as useAuth, b as useAdmins, c as useNow, d as computeShiftWindow, f as formatRemaining, e as cn, R as ROOM_CATEGORIES } from "./router-D4A6PFi8.mjs";
import { D as Dialog, a as DialogContent, b as DialogHeader, c as DialogTitle, d as DialogDescription } from "./dialog-DLX0hhUD.mjs";
import { c as cva } from "../_libs/class-variance-authority.mjs";
import { R as Root, V as Viewport, C as Corner, S as ScrollAreaScrollbar, a as ScrollAreaThumb } from "../_libs/radix-ui__react-scroll-area.mjs";
import "../_libs/react-dom.mjs";
import "../_libs/next-themes.mjs";
import "../_libs/sonner.mjs";
import "./client-Cr_PIcuQ.mjs";
import { s as startOfDay, b as addDays, c as subDays, f as format, p as parseISO } from "../_libs/date-fns.mjs";
import { am as WalletCards, A as BedDouble, an as CalendarCheck, ao as Percent, U as Users, ap as TrendingUp, J as DollarSign, w as Sun, M as Moon, aq as UserX, v as UserCog, ar as UserCheck, x as Timer, e as ChevronRight } from "../_libs/lucide-react.mjs";
import { P as PieChart, a as Pie, C as Cell, T as Tooltip, L as Legend, B as BarChart, b as CartesianGrid, X as XAxis, Y as YAxis, c as Bar, A as AreaChart, d as Area, R as RadarChart, e as PolarGrid, f as PolarAngleAxis, g as Radar, h as LineChart, i as Line, j as ResponsiveContainer } from "../_libs/recharts.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/isbot.mjs";
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
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/radix-ui__react-tooltip.mjs";
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
import "../_libs/supabase__functions-js.mjs";
import "../_libs/radix-ui__react-dialog.mjs";
import "../_libs/radix-ui__number.mjs";
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
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
function DirectorShiftPanel() {
  const { session } = useShift();
  const { history } = useAuth();
  const { admins } = useAdmins();
  const now = useNow();
  const liveAdmin = reactExports.useMemo(() => {
    const seen = /* @__PURE__ */ new Set();
    for (const ev of history) {
      const key = ev.username.toLowerCase();
      if (seen.has(key)) continue;
      seen.add(key);
      if (ev.action === "login" && ev.role === "admin") {
        const shiftEnd = computeShiftWindow(new Date(ev.at)).end.getTime();
        if (now.getTime() >= shiftEnd) continue;
        const record = admins.find((a) => a.username.toLowerCase() === key);
        const displayName = record ? `${record.name} ${record.surname}`.trim() || record.username : ev.displayName || ev.username;
        return { displayName, at: ev.at };
      }
    }
    return null;
  }, [history, admins, now]);
  const effective = reactExports.useMemo(() => {
    if (liveAdmin) {
      const win = computeShiftWindow(now);
      return {
        name: liveAdmin.displayName,
        kind: win.kind,
        startISO: win.start.toISOString(),
        endISO: win.end.toISOString(),
        coveringFor: null,
        reason: null
      };
    }
    return session;
  }, [liveAdmin, session, now]);
  const remaining = reactExports.useMemo(() => {
    if (!effective) return 0;
    return new Date(effective.endISO).getTime() - now.getTime();
  }, [effective, now]);
  const elapsedPct = reactExports.useMemo(() => {
    if (!effective) return 0;
    const start = new Date(effective.startISO).getTime();
    const end = new Date(effective.endISO).getTime();
    const total = end - start;
    if (total <= 0) return 0;
    const elapsed = Math.min(total, Math.max(0, now.getTime() - start));
    return Math.round(elapsed / total * 100);
  }, [effective, now]);
  const isDay = effective?.kind === "day";
  const ShiftIcon = isDay ? Sun : Moon;
  const isSubstitute = !!effective?.coveringFor;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 16 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
      className: "rounded-2xl border border-border bg-card shadow-sm overflow-hidden",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: `px-5 py-4 flex items-center justify-between border-b border-border ${effective ? isDay ? "bg-gradient-to-r from-amber-50 to-amber-100/60" : "bg-gradient-to-r from-indigo-50 to-indigo-100/60" : "bg-muted/40"}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: `flex h-11 w-11 items-center justify-center rounded-xl ${effective ? isDay ? "bg-amber-200/70 text-amber-700" : "bg-indigo-200/70 text-indigo-700" : "bg-muted text-muted-foreground"}`,
                    children: effective ? /* @__PURE__ */ jsxRuntimeExports.jsx(ShiftIcon, { className: "h-5 w-5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(UserX, { className: "h-5 w-5" })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] font-bold tracking-wider text-muted-foreground uppercase", children: "Текущая смена" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg font-black tracking-tight text-foreground", children: effective ? isDay ? "Дневная смена" : "Ночная смена" : "Никого нет на смене" })
                ] })
              ] }),
              effective && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] font-bold tracking-wider text-muted-foreground uppercase", children: "Окно" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-bold tabular-nums", children: isDay ? "06:00 → 18:00" : "18:00 → 06:00" })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-5 space-y-4", children: effective ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          isSubstitute && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2 rounded-xl border border-amber-200 bg-amber-50 p-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(UserCog, { className: "h-4 w-4 text-amber-600 mt-0.5 shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs font-bold text-amber-800", children: [
                "Substitute — covering for",
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-black", children: effective.coveringFor })
              ] }),
              effective.reason && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-0.5 text-[11px] text-amber-700 italic break-words", children: [
                "Reason: ",
                effective.reason
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Stat,
              {
                label: isSubstitute ? "Substitute" : "На смене",
                value: effective.name,
                Icon: UserCheck,
                tone: "hsl(142 71% 45%)"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Stat,
              {
                label: "Осталось",
                value: formatRemaining(remaining),
                Icon: Timer,
                tone: isDay ? "hsl(38 92% 50%)" : "hsl(245 70% 55%)",
                mono: true
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-bold tracking-wider text-muted-foreground uppercase", children: "Прогресс смены" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-bold tabular-nums", children: [
                elapsedPct,
                "%"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2.5 w-full rounded-full bg-muted overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                initial: { width: 0 },
                animate: { width: `${elapsedPct}%` },
                transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
                className: `h-full rounded-full ${isDay ? "bg-gradient-to-r from-amber-400 to-orange-400" : "bg-gradient-to-r from-indigo-400 to-violet-500"}`
              }
            ) })
          ] })
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: "Администратор ещё не открыл смену. Когда администратор войдёт в систему и начнёт смену, имя сменщика и таймер появятся здесь автоматически." }) })
      ]
    }
  );
}
function Stat({
  label,
  value,
  Icon,
  tone,
  mono
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-background p-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "flex h-7 w-7 items-center justify-center rounded-lg",
          style: { backgroundColor: `color-mix(in oklab, ${tone} 18%, transparent)`, color: tone },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-3.5 w-3.5" })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-bold tracking-wider text-muted-foreground uppercase", children: label })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-base font-black text-foreground truncate ${mono ? "tabular-nums" : ""}`, children: value })
  ] });
}
const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function Badge({ className, variant, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn(badgeVariants({ variant }), className), ...props });
}
const ScrollArea = reactExports.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Root, { ref, className: cn("relative overflow-hidden", className), ...props, children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx(Viewport, { className: "h-full w-full rounded-[inherit]", children }),
  /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollBar, {}),
  /* @__PURE__ */ jsxRuntimeExports.jsx(Corner, {})
] }));
ScrollArea.displayName = Root.displayName;
const ScrollBar = reactExports.forwardRef(({ className, orientation = "vertical", ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  ScrollAreaScrollbar,
  {
    ref,
    orientation,
    className: cn(
      "flex touch-none select-none transition-colors",
      orientation === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]",
      orientation === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-[1px]",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollAreaThumb, { className: "relative flex-1 rounded-full bg-border" })
  }
));
ScrollBar.displayName = ScrollAreaScrollbar.displayName;
const STATUS_ORDER = [
  "confirmed",
  "pending",
  "booked",
  "in-house",
  "checked-out",
  "maintenance"
];
const ACTIVE_STATUSES = ["in-house", "booked", "confirmed", "pending"];
const WITHDRAWALS_KEY = "sayohat-revenue-withdrawals";
const CATEGORY_COLORS = [
  "hsl(262 83% 58%)",
  "hsl(199 89% 48%)",
  "hsl(142 71% 45%)",
  "hsl(38 92% 50%)",
  "hsl(0 84% 60%)",
  "hsl(280 65% 60%)"
];
function getCategoryLabel(id) {
  return ROOM_CATEGORIES.find((c) => c.id === id)?.label.ru ?? id;
}
const bookingRevenue = (booking, _categoryId, _categoryRates) => {
  if (Array.isArray(booking.payments) && booking.payments.length > 0) {
    return booking.payments.reduce((sum, p) => sum + (Number(p.amount) || 0), 0);
  }
  return 0;
};
function isActiveOn(b, day) {
  if (!ACTIVE_STATUSES.includes(b.status)) return false;
  const inD = startOfDay(parseISO(b.checkIn));
  const outD = startOfDay(parseISO(b.checkOut));
  return day >= inD && day <= outD;
}
const KpiCard = reactExports.memo(function KpiCard2({ label, value, hint, Icon, tone, onClick }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "button",
    {
      type: "button",
      onClick,
      className: "group text-left rounded-2xl bg-card border border-border shadow-sm p-5 flex items-center gap-4 hover:shadow-lg hover:-translate-y-0.5 hover:border-primary/30 transition-all duration-300 w-full",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "flex h-12 w-12 items-center justify-center rounded-xl shrink-0 transition-transform group-hover:scale-110",
            style: { background: `${tone}15`, color: tone },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-6 w-6" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium text-muted-foreground uppercase tracking-wide", children: label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-black text-foreground tabular-nums leading-tight", children: value }),
          hint && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground mt-0.5", children: hint })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-4 w-4 text-muted-foreground/50 group-hover:text-primary group-hover:translate-x-0.5 transition-all" })
      ]
    }
  );
});
const ChartCard = reactExports.memo(function ChartCard2({ title, subtitle, children, className, onClick }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      role: onClick ? "button" : void 0,
      tabIndex: onClick ? 0 : void 0,
      onClick,
      onKeyDown: (e) => {
        if (onClick && (e.key === "Enter" || e.key === " ")) {
          e.preventDefault();
          onClick();
        }
      },
      className: `rounded-2xl bg-card border border-border shadow-sm p-5 transition-all duration-300 ${onClick ? "cursor-pointer hover:shadow-lg hover:-translate-y-0.5 hover:border-primary/30" : ""} ${className ?? ""}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 flex items-start justify-between gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-bold text-foreground", children: title }),
            subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: subtitle })
          ] }),
          onClick && /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-4 w-4 text-muted-foreground/50 mt-0.5" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-64", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: "100%", children }) })
      ]
    }
  );
});
function DetailDialog({
  payload,
  onClose,
  rooms,
  categoryRates
}) {
  const open = payload !== null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open, onOpenChange: (o) => !o && onClose(), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "max-w-2xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogHeader, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: payload?.title }),
      payload?.subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx(DialogDescription, { children: payload.subtitle })
    ] }),
    payload?.kind === "bookings" && /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollArea, { className: "max-h-[60vh] pr-3", children: payload.items.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground py-8 text-center", children: "Нет данных для отображения." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: payload.items.map((b) => {
      const cfg = BOOKING_STATUSES[b.status];
      const room = rooms.find((r) => r.number === b.roomNumber);
      const revenue = bookingRevenue(b, room?.category);
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "li",
        {
          className: "rounded-xl border border-border bg-muted/30 p-3 flex items-center gap-3",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "flex h-10 w-10 items-center justify-center rounded-lg text-white font-bold text-sm shrink-0",
                style: { background: cfg.color },
                children: b.roomNumber
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-semibold text-sm text-foreground truncate", children: [
                b.guestName || "Без имени",
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground font-normal ml-2", children: [
                  "· ",
                  b.guestCount,
                  " гост",
                  b.guestCount === 1 ? "ь" : "я"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
                format(parseISO(b.checkIn), "dd.MM.yyyy"),
                " →",
                " ",
                format(parseISO(b.checkOut), "dd.MM.yyyy"),
                room && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  " · ",
                  getCategoryLabel(room.category)
                ] }),
                revenue > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  " · $",
                  revenue.toLocaleString()
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Badge,
              {
                variant: "secondary",
                style: { background: `${cfg.color}20`, color: cfg.color, borderColor: `${cfg.color}40` },
                className: "border shrink-0",
                children: cfg.label.ru
              }
            )
          ]
        },
        b.id
      );
    }) }) }),
    payload?.kind === "rooms" && /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollArea, { className: "max-h-[60vh] pr-3", children: payload.items.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground py-8 text-center", children: "Нет номеров." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2", children: payload.items.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "rounded-xl border border-border bg-muted/30 p-3 text-center",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-black text-foreground", children: r.number }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground truncate", children: getCategoryLabel(r.category) })
        ]
      },
      r.number
    )) }) })
  ] }) });
}
function DirectorDashboard() {
  const { bookings } = useBookingsContext();
  const { categories, rooms, categoryRates } = useHotelGrid();
  const [detail, setDetail] = reactExports.useState(null);
  const [withdrawals, setWithdrawals] = reactExports.useState([]);
  reactExports.useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      setWithdrawals(JSON.parse(window.localStorage.getItem(WITHDRAWALS_KEY) || "[]"));
    } catch {
      setWithdrawals([]);
    }
  }, []);
  const recordWithdrawal = reactExports.useCallback((amount) => {
    const next = [{ id: crypto.randomUUID(), at: (/* @__PURE__ */ new Date()).toISOString(), amount }, ...withdrawals];
    setWithdrawals(next);
    if (typeof window !== "undefined") window.localStorage.setItem(WITHDRAWALS_KEY, JSON.stringify(next));
  }, [withdrawals]);
  const openBookings = reactExports.useCallback(
    (title, items, subtitle) => setDetail({ kind: "bookings", title, subtitle, items }),
    []
  );
  const openRooms = reactExports.useCallback(
    (title, items, subtitle) => setDetail({ kind: "rooms", title, subtitle, items }),
    []
  );
  const stats = reactExports.useMemo(() => {
    const today = startOfDay(/* @__PURE__ */ new Date());
    const totalRooms = rooms.length || 1;
    const statusCounts = STATUS_ORDER.reduce((acc, s) => {
      acc[s] = 0;
      return acc;
    }, {});
    bookings.forEach((b) => {
      statusCounts[b.status] = (statusCounts[b.status] ?? 0) + 1;
    });
    const statusPie = STATUS_ORDER.map((s) => ({
      key: s,
      name: BOOKING_STATUSES[s].label.ru,
      value: statusCounts[s],
      color: BOOKING_STATUSES[s].color
    })).filter((d) => d.value > 0);
    const occupiedRoomNumbers = new Set(
      bookings.filter((b) => isActiveOn(b, today)).map((b) => b.roomNumber)
    );
    const occupiedNow = occupiedRoomNumbers.size;
    const occupancyPct = Math.round(occupiedNow / totalRooms * 100);
    const categoryData = categories.map((cat, idx) => {
      const catRooms = rooms.filter((r) => r.category === cat.id);
      const occupiedRooms = catRooms.filter((r) => occupiedRoomNumbers.has(r.number));
      return {
        id: cat.id,
        name: cat.label.ru,
        short: cat.short,
        total: catRooms.length,
        occupied: occupiedRooms.length,
        free: catRooms.length - occupiedRooms.length,
        color: CATEGORY_COLORS[idx % CATEGORY_COLORS.length],
        rooms: catRooms,
        occupiedRooms,
        freeRooms: catRooms.filter((r) => !occupiedRoomNumbers.has(r.number))
      };
    });
    const trend = Array.from({ length: 14 }).map((_, i) => {
      const day = addDays(subDays(today, 6), i);
      const dayBookings = bookings.filter((b) => isActiveOn(b, day));
      const dayRooms = new Set(dayBookings.map((b) => b.roomNumber));
      return {
        date: format(day, "dd.MM"),
        day,
        occupied: dayRooms.size,
        occupancy: Math.round(dayRooms.size / totalRooms * 100),
        bookings: dayBookings
      };
    });
    const revenueByCategory = categories.map((cat, idx) => {
      const lastWithdrawalAt = withdrawals[0]?.at ? new Date(withdrawals[0].at).getTime() : 0;
      const catBookings = bookings.filter((b) => {
        const room = rooms.find((r) => r.number === b.roomNumber);
        const createdAt = b.createdAt ? new Date(b.createdAt).getTime() : 0;
        return room?.category === cat.id && b.status !== "maintenance" && (!lastWithdrawalAt || createdAt > lastWithdrawalAt);
      });
      return {
        id: cat.id,
        name: cat.short,
        fullName: cat.label.ru,
        revenue: catBookings.reduce((acc, b) => acc + bookingRevenue(b, cat.id), 0),
        bookings: catBookings,
        color: CATEGORY_COLORS[idx % CATEGORY_COLORS.length]
      };
    });
    const totalRevenue = revenueByCategory.reduce((a, b) => a + b.revenue, 0);
    const totalGuests = bookings.filter((b) => b.status === "in-house").reduce((acc, b) => acc + (b.guestCount || 1), 0);
    const guestDist = [1, 2, 3, 4].map((n, i) => ({
      key: n,
      name: `${n} ${n === 1 ? "гость" : n < 5 ? "гостя" : "гостей"}`,
      value: bookings.filter((b) => b.guestCount === n).length,
      bookings: bookings.filter((b) => b.guestCount === n),
      color: CATEGORY_COLORS[i % CATEGORY_COLORS.length]
    }));
    const radar = categoryData.map((c) => ({
      id: c.id,
      category: c.name,
      occupancy: c.total > 0 ? Math.round(c.occupied / c.total * 100) : 0
    }));
    return {
      statusPie,
      statusCounts,
      categoryData,
      trend,
      revenueByCategory,
      totalRevenue,
      occupiedNow,
      occupancyPct,
      totalGuests,
      guestDist,
      radar,
      totalBookings: bookings.length,
      totalRooms,
      occupiedRoomNumbers
    };
  }, [bookings, categories, rooms, categoryRates, withdrawals]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(HotelNavbar, { totalRooms: stats.totalRooms, viewMode: "timeline", onViewModeChange: () => {
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "px-5 py-6 max-w-[1600px] mx-auto space-y-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "animate-fade-in-up", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl font-black tracking-tight text-foreground", children: "Панель Директора" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "Аналитика, KPI и операционные показатели отеля в реальном времени. Нажмите на карточку для подробностей." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DirectorShiftPanel, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "rounded-2xl border border-border bg-card p-5 shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(WalletCards, { className: "h-6 w-6" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-black uppercase tracking-wider text-muted-foreground", children: "Накопленный доход" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-3xl font-black text-foreground tabular-nums", children: [
              "$",
              stats.totalRevenue.toLocaleString()
            ] }),
            withdrawals[0] && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
              "Последнее снятие: ",
              new Date(withdrawals[0].at).toLocaleString(),
              " · $",
              withdrawals[0].amount.toLocaleString()
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            disabled: stats.totalRevenue <= 0,
            onClick: () => recordWithdrawal(stats.totalRevenue),
            className: "rounded-xl bg-primary px-4 py-2.5 text-sm font-black text-primary-foreground shadow-lg shadow-primary/25 transition hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-50",
            children: "Деньги сняты"
          }
        )
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          KpiCard,
          {
            label: "Всего номеров",
            value: String(stats.totalRooms),
            Icon: BedDouble,
            tone: "hsl(262 83% 58%)",
            onClick: () => openRooms("Все номера", rooms, `Всего: ${stats.totalRooms}`)
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          KpiCard,
          {
            label: "Занято сейчас",
            value: String(stats.occupiedNow),
            hint: `из ${stats.totalRooms}`,
            Icon: CalendarCheck,
            tone: "hsl(142 71% 45%)",
            onClick: () => openRooms(
              "Занятые номера сегодня",
              rooms.filter((r) => stats.occupiedRoomNumbers.has(r.number)),
              format(/* @__PURE__ */ new Date(), "dd.MM.yyyy")
            )
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          KpiCard,
          {
            label: "Заполняемость",
            value: `${stats.occupancyPct}%`,
            Icon: Percent,
            tone: "hsl(38 92% 50%)",
            onClick: () => openRooms(
              "Свободные номера сегодня",
              rooms.filter((r) => !stats.occupiedRoomNumbers.has(r.number)),
              `Свободно: ${stats.totalRooms - stats.occupiedNow} из ${stats.totalRooms}`
            )
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          KpiCard,
          {
            label: "Гости в отеле",
            value: String(stats.totalGuests),
            Icon: Users,
            tone: "hsl(199 89% 48%)",
            onClick: () => openBookings(
              "Гости, проживающие сейчас",
              bookings.filter((b) => b.status === "in-house"),
              `Всего гостей: ${stats.totalGuests}`
            )
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          KpiCard,
          {
            label: "Бронирований",
            value: String(stats.totalBookings),
            Icon: TrendingUp,
            tone: "hsl(280 65% 60%)",
            onClick: () => openBookings("Все бронирования", bookings)
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          KpiCard,
          {
            label: "Доход (оценка)",
            value: `$${stats.totalRevenue.toLocaleString()}`,
            Icon: DollarSign,
            tone: "hsl(0 84% 60%)",
            onClick: () => openBookings(
              "Бронирования, формирующие доход",
              bookings.filter((b) => b.status !== "maintenance"),
              `Итого: $${stats.totalRevenue.toLocaleString()}`
            )
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          ChartCard,
          {
            title: "Статусы бронирований",
            subtitle: "Распределение по текущему статусу",
            onClick: () => openBookings("Все бронирования по статусам", bookings),
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(PieChart, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Pie,
                {
                  data: stats.statusPie,
                  dataKey: "value",
                  nameKey: "name",
                  cx: "50%",
                  cy: "50%",
                  outerRadius: 85,
                  innerRadius: 45,
                  paddingAngle: 2,
                  onClick: (data) => {
                    if (!data?.key) return;
                    openBookings(
                      `Статус: ${data.name}`,
                      bookings.filter((b) => b.status === data.key)
                    );
                  },
                  cursor: "pointer",
                  children: stats.statusPie.map((entry, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Cell, { fill: entry.color }, i))
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Legend, { wrapperStyle: { fontSize: 11 } })
            ] })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          ChartCard,
          {
            title: "Заполненность по категориям",
            subtitle: "Занятые vs свободные номера",
            onClick: () => openRooms("Все номера по категориям", rooms),
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(BarChart, { data: stats.categoryData, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CartesianGrid, { strokeDasharray: "3 3", opacity: 0.3 }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(XAxis, { dataKey: "short", tick: { fontSize: 10 } }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(YAxis, { tick: { fontSize: 11 }, allowDecimals: false }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Legend, { wrapperStyle: { fontSize: 11 } }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Bar, { dataKey: "occupied", stackId: "a", fill: "hsl(262 83% 58%)", name: "Занято", cursor: "pointer" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Bar, { dataKey: "free", stackId: "a", fill: "hsl(210 40% 90%)", name: "Свободно", radius: [6, 6, 0, 0], cursor: "pointer" })
            ] })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          ChartCard,
          {
            title: "Заполняемость (14 дней)",
            subtitle: "Динамика занятых номеров",
            onClick: () => {
              const allBookings = stats.trend.flatMap((d) => d.bookings);
              const unique = Array.from(new Map(allBookings.map((b) => [b.id, b])).values());
              openBookings("Бронирования за 14 дней", unique);
            },
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AreaChart, { data: stats.trend, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "occGrad", x1: "0", y1: "0", x2: "0", y2: "1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "5%", stopColor: "hsl(262 83% 58%)", stopOpacity: 0.7 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "95%", stopColor: "hsl(262 83% 58%)", stopOpacity: 0.05 })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CartesianGrid, { strokeDasharray: "3 3", opacity: 0.3 }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(XAxis, { dataKey: "date", tick: { fontSize: 10 } }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(YAxis, { tick: { fontSize: 11 }, allowDecimals: false }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Area, { type: "monotone", dataKey: "occupied", stroke: "hsl(262 83% 58%)", fill: "url(#occGrad)", strokeWidth: 2 })
            ] })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          ChartCard,
          {
            title: "Доход по категориям",
            subtitle: "Оценочный доход в USD",
            onClick: () => openBookings(
              "Все доходные бронирования",
              bookings.filter((b) => b.status !== "maintenance"),
              `Итого: $${stats.totalRevenue.toLocaleString()}`
            ),
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(BarChart, { data: stats.revenueByCategory, layout: "vertical", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CartesianGrid, { strokeDasharray: "3 3", opacity: 0.3 }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(XAxis, { type: "number", tick: { fontSize: 11 } }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(YAxis, { dataKey: "name", type: "category", tick: { fontSize: 11 }, width: 70 }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { formatter: (v) => `$${v.toLocaleString()}` }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Bar, { dataKey: "revenue", radius: [0, 6, 6, 0], cursor: "pointer", children: stats.revenueByCategory.map((entry, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Cell, { fill: entry.color }, i)) })
            ] })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          ChartCard,
          {
            title: "Гостей в бронировании",
            subtitle: "Распределение по числу гостей",
            onClick: () => openBookings("Все бронирования", bookings),
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(PieChart, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Pie,
                {
                  data: stats.guestDist,
                  dataKey: "value",
                  nameKey: "name",
                  cx: "50%",
                  cy: "50%",
                  outerRadius: 85,
                  onClick: (d) => {
                    if (typeof d?.key !== "number") return;
                    openBookings(
                      `Бронирования: ${d.name}`,
                      bookings.filter((b) => b.guestCount === d.key)
                    );
                  },
                  cursor: "pointer",
                  children: stats.guestDist.map((entry, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Cell, { fill: entry.color }, i))
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Legend, { wrapperStyle: { fontSize: 11 } })
            ] })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          ChartCard,
          {
            title: "Эффективность категорий",
            subtitle: "Заполняемость, % по категории",
            onClick: () => openRooms("Все номера по категориям", rooms),
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(RadarChart, { data: stats.radar, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(PolarGrid, {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx(PolarAngleAxis, { dataKey: "category", tick: { fontSize: 10 } }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Radar,
                {
                  name: "Заполняемость",
                  dataKey: "occupancy",
                  stroke: "hsl(262 83% 58%)",
                  fill: "hsl(262 83% 58%)",
                  fillOpacity: 0.45
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { formatter: (v) => `${v}%` })
            ] })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          ChartCard,
          {
            title: "Тренд заполняемости (%)",
            subtitle: "Процент занятых номеров за 14 дней",
            className: "lg:col-span-2 xl:col-span-3",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(LineChart, { data: stats.trend, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CartesianGrid, { strokeDasharray: "3 3", opacity: 0.3 }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(XAxis, { dataKey: "date", tick: { fontSize: 11 } }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(YAxis, { tick: { fontSize: 11 }, domain: [0, 100] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { formatter: (v) => `${v}%` }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Line,
                {
                  type: "monotone",
                  dataKey: "occupancy",
                  stroke: "hsl(262 83% 58%)",
                  strokeWidth: 3,
                  dot: { r: 4, fill: "hsl(262 83% 58%)" },
                  activeDot: { r: 6 }
                }
              )
            ] })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DetailDialog, { payload: detail, onClose: () => setDetail(null), rooms, categoryRates })
  ] });
}
const DirectorPage = reactExports.memo(DirectorDashboard);
function DirectorRouteComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ProtectedRoute, { allow: ["superuser", "director", "manager"], children: /* @__PURE__ */ jsxRuntimeExports.jsx(DirectorPage, {}) });
}
export {
  DirectorRouteComponent as component
};
