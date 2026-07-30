import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { P as ProtectedRoute } from "./ProtectedRoute-wiEuUcf9.mjs";
import { e as useNavigate, L as Link } from "../_libs/tanstack__react-router.mjs";
import { r as Route, g as useBookingsContext, i as useI18n, B as BOOKING_STATUSES } from "./router-D4A6PFi8.mjs";
import { B as Button } from "./button-Dzx3P4Vv.mjs";
import { T as Textarea, C as Checkbox } from "./checkbox-Bi4g2gFZ.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import "../_libs/next-themes.mjs";
import "./client-Cr_PIcuQ.mjs";
import { T as TriangleAlert, aS as ArrowLeft, ab as ShieldAlert, A as BedDouble, m as CalendarDays, U as Users, K as Phone, O as Mail, ac as FileWarning, i as Check, g as Trash2 } from "../_libs/lucide-react.mjs";
import { d as differenceInCalendarDays, p as parseISO, f as format } from "../_libs/date-fns.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
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
import "../_libs/supabase__supabase-js.mjs";
import "../_libs/supabase__postgrest-js.mjs";
import "../_libs/supabase__realtime-js.mjs";
import "../_libs/supabase__phoenix.mjs";
import "../_libs/supabase__storage-js.mjs";
import "../_libs/iceberg-js.mjs";
import "../_libs/supabase__auth-js.mjs";
import "tslib";
import "../_libs/supabase__functions-js.mjs";
import "../_libs/radix-ui__react-checkbox.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
function DeleteBookingPage({ bookingId }) {
  const navigate = useNavigate();
  const { bookings, removeBooking } = useBookingsContext();
  const { t, lang } = useI18n();
  const booking = reactExports.useMemo(() => bookings.find((b) => b.id === bookingId), [bookings, bookingId]);
  const [reason, setReason] = reactExports.useState("");
  const [acknowledged, setAcknowledged] = reactExports.useState(false);
  const [submitting, setSubmitting] = reactExports.useState(false);
  if (!booking) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-muted/30 to-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto h-16 w-16 rounded-2xl bg-muted flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-8 w-8 text-muted-foreground" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-black", children: lang === "ru" ? "Бронирование не найдено" : lang === "uz" ? "Bron topilmadi" : "Booking not found" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, className: "rounded-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-4 w-4 mr-1.5 inline" }),
        t("back")
      ] }) })
    ] }) });
  }
  const cfg = BOOKING_STATUSES[booking.status];
  const nights = differenceInCalendarDays(parseISO(booking.checkOut), parseISO(booking.checkIn));
  const presetReasons = [
    { key: "guestCancelled", label: t("reasonGuestCancelled") },
    { key: "noShow", label: t("reasonNoShow") },
    { key: "duplicate", label: t("reasonDuplicate") },
    { key: "createdInError", label: t("reasonError") },
    { key: "other", label: t("reasonOther") }
  ];
  const trimmedReason = reason.trim();
  const reasonValid = trimmedReason.length >= 10;
  const canDelete = reasonValid && acknowledged && !submitting;
  const handleConfirm = () => {
    if (!canDelete) {
      if (!reasonValid) toast.error(t("reasonRequired"));
      return;
    }
    setSubmitting(true);
    removeBooking(booking.id);
    toast.success(t("bookingDeleted"));
    setTimeout(() => navigate({ to: "/" }), 200);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "delete-bg min-h-screen px-4 py-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-4xl space-y-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        onClick: () => navigate({ to: "/" }),
        className: "group inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/70 px-4 py-2 text-sm font-bold text-muted-foreground shadow-sm backdrop-blur transition-colors hover:text-foreground",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-4 w-4 transition-transform group-hover:-translate-x-1" }),
          t("back")
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 12, scale: 0.98 },
        animate: { opacity: 1, y: 0, scale: 1 },
        transition: { type: "spring", stiffness: 220, damping: 24 },
        className: "danger-glow relative overflow-hidden rounded-[32px] border border-destructive/35 bg-card shadow-2xl shadow-destructive/10",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-destructive/40 via-destructive to-destructive/40" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "guest-holo-grid pointer-events-none absolute inset-0 opacity-70" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-destructive/15 blur-3xl" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-7 pt-7 pb-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                initial: { rotate: -10, scale: 0.8 },
                animate: { rotate: 0, scale: 1 },
                transition: { delay: 0.1, type: "spring", stiffness: 220 },
                className: "flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-destructive text-destructive-foreground shadow-lg shadow-destructive/30",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-6 w-6" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-2 inline-flex items-center gap-2 rounded-full border border-destructive/25 bg-destructive/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-destructive", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldAlert, { className: "h-3.5 w-3.5" }),
                " irreversible action"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl font-black tracking-tight text-foreground", children: t("deleteBookingTitle") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 max-w-xl text-sm font-semibold leading-relaxed text-muted-foreground", children: t("deleteBookingSubtitle") })
            ] })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-7 pb-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-[24px] border border-border/70 bg-background/75 p-4 shadow-inner space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-black uppercase tracking-[0.18em] text-muted-foreground", children: t("bookingSummary") }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "span",
                {
                  className: "inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider ring-1",
                  style: { background: `${cfg.color}1a`, color: cfg.color, borderColor: `${cfg.color}40` },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full", style: { background: cfg.color } }),
                    cfg.label[lang]
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/15 text-primary shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BedDouble, { className: "h-5 w-5" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-xl font-black text-foreground leading-tight", children: booking.guestName || (lang === "ru" ? "Гость" : "Guest") }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] font-semibold text-muted-foreground", children: [
                  t("room"),
                  " ",
                  booking.roomNumber
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-2 text-[12px]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SummaryChip, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarDays, { className: "h-3.5 w-3.5 text-primary" }), label: t("checkIn"), value: format(parseISO(booking.checkIn), "d MMM yyyy") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SummaryChip, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarDays, { className: "h-3.5 w-3.5 text-destructive" }), label: t("checkOut"), value: format(parseISO(booking.checkOut), "d MMM yyyy") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SummaryChip, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-3.5 w-3.5 text-primary/70" }), label: t("guests"), value: `${booking.guestCount}` }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SummaryChip, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary/70 font-black text-[11px]", children: "N" }), label: t("nightsShort"), value: `${nights}` })
            ] }),
            (booking.guestPhone || booking.guestEmail) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-3 pt-1 text-[11px] text-muted-foreground border-t border-border/50", children: [
              booking.guestPhone && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 pt-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-3 w-3 text-primary/70" }),
                " ",
                booking.guestPhone
              ] }),
              booking.guestEmail && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 pt-2 truncate", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-3 w-3 text-primary/70" }),
                " ",
                booking.guestEmail
              ] })
            ] })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-7 pb-7 space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.18em] text-foreground/70", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(FileWarning, { className: "h-3.5 w-3.5 text-destructive" }),
                t("reasonPreset")
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5", children: presetReasons.map((p) => {
                const active = reason.trim() === p.label;
                return /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => setReason(p.label),
                    className: `rounded-full px-3 py-1.5 text-[11px] font-bold transition-all ${active ? "bg-destructive text-destructive-foreground shadow-md shadow-destructive/30 scale-[1.03]" : "bg-background border border-border/70 text-muted-foreground hover:border-destructive/30 hover:text-foreground hover:scale-[1.02]"}`,
                    children: p.label
                  },
                  p.key
                );
              }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "text-[11px] font-black uppercase tracking-wider text-foreground/80 flex items-center gap-1.5", children: [
                t("reasonLabel"),
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Textarea,
                {
                  value: reason,
                  onChange: (e) => setReason(e.target.value),
                  placeholder: t("reasonPlaceholder"),
                  rows: 4,
                  className: "input-focus-glow rounded-2xl resize-none border-2 bg-background/80 focus-visible:border-destructive/50"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-[10px] text-muted-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: reasonValid ? "text-emerald-600 font-bold" : "", children: [
                  trimmedReason.length,
                  "/10+ ",
                  lang === "ru" ? "символов" : lang === "uz" ? "belgi" : "chars"
                ] }),
                reasonValid && /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-3.5 w-3.5 text-primary" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-start gap-2.5 rounded-2xl border-2 border-destructive/20 bg-destructive/5 p-3 cursor-pointer hover:bg-destructive/10 transition-colors", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Checkbox,
                {
                  checked: acknowledged,
                  onCheckedChange: (v) => setAcknowledged(!!v),
                  className: "mt-0.5 data-[state=checked]:bg-destructive data-[state=checked]:border-destructive"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[12px] font-semibold text-foreground leading-snug", children: t("iUnderstand") })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 border-t border-border/60 bg-background/70 px-7 py-4 backdrop-blur", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", onClick: () => navigate({ to: "/" }), className: "rounded-2xl", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-4 w-4 mr-1.5" }),
              t("cancel")
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                onClick: handleConfirm,
                disabled: !canDelete,
                className: "rounded-2xl bg-destructive px-6 text-destructive-foreground shadow-lg shadow-destructive/30 hover:bg-destructive/90 disabled:opacity-50 disabled:cursor-not-allowed",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-4 w-4 mr-1.5" }),
                  t("confirmDelete")
                ]
              }
            )
          ] })
        ]
      }
    )
  ] }) });
}
function SummaryChip({ icon, label, value }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border/60 bg-background/60 px-2.5 py-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 text-[9px] font-black uppercase tracking-wider text-muted-foreground", children: [
      icon,
      label
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-0.5 text-[12px] font-black tabular-nums text-foreground truncate", children: value })
  ] });
}
function DeleteBookingRoute() {
  const {
    id
  } = Route.useParams();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ProtectedRoute, { allow: ["superuser", "director", "admin"], children: /* @__PURE__ */ jsxRuntimeExports.jsx(DeleteBookingPage, { bookingId: id }) });
}
export {
  DeleteBookingRoute as component
};
