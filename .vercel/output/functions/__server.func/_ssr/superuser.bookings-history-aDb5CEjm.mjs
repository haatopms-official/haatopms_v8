import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { P as ProtectedRoute } from "./ProtectedRoute-wiEuUcf9.mjs";
import { e as useNavigate } from "../_libs/tanstack__react-router.mjs";
import { H as HotelNavbar } from "./HotelNavbar-BoJodXQi.mjs";
import { g as formatPrice, B as BookingDialog } from "./BookingDialog-CAL3HQj6.mjs";
import { g as useBookingsContext, k as useAudit, m as formatGuestName } from "./router-D4A6PFi8.mjs";
import "../_libs/react-dom.mjs";
import "./dialog-DLX0hhUD.mjs";
import "./alert-dialog-q5bFbkxl.mjs";
import "./button-Dzx3P4Vv.mjs";
import "./checkbox-Bi4g2gFZ.mjs";
import "../_libs/sonner.mjs";
import "./server-zM6mg_wl.mjs";
import "../_libs/seroval.mjs";
import "../_libs/next-themes.mjs";
import "./client-Cr_PIcuQ.mjs";
import { d as differenceInCalendarDays, p as parseISO, f as format } from "../_libs/date-fns.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { b as BookOpen, U as Users, J as DollarSign, ag as Search, A as BedDouble, m as CalendarDays, aM as MapPin, r as Building2, aN as Earth, aO as Bot, aP as Crown } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
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
import "../_libs/@radix-ui/react-visually-hidden+[...].mjs";
import "../_libs/radix-ui__react-select.mjs";
import "../_libs/radix-ui__number.mjs";
import "../_libs/radix-ui__react-use-previous.mjs";
import "./createSsrRpc-ZdepijWa.mjs";
import "../_libs/zod.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/radix-ui__react-toast.mjs";
import "../_libs/class-variance-authority.mjs";
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
import "../_libs/radix-ui__react-alert-dialog.mjs";
import "../_libs/radix-ui__react-checkbox.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const FILTERS = [
  { id: "all", label: "All" },
  { id: "offline", label: "Offline" },
  { id: "online-natural", label: "Online · Natural" },
  { id: "online-admin", label: "Online · Admin" }
];
function SuperuserBookingsHistory() {
  const { bookings, addBooking, updateBooking, removeBooking } = useBookingsContext();
  const { events } = useAudit();
  const navigate = useNavigate();
  const [filter, setFilter] = reactExports.useState("all");
  const [query, setQuery] = reactExports.useState("");
  const [selected, setSelected] = reactExports.useState(null);
  const goToGrid = (id) => {
    setSelected(null);
    navigate({ to: "/superuser", search: { focus: id } });
  };
  const creatorByBookingId = reactExports.useMemo(() => {
    const map = /* @__PURE__ */ new Map();
    for (const ev of events ?? []) {
      if (ev.action !== "booking.created") continue;
      const id = ev.details?.bookingId;
      if (!id) continue;
      if (!map.has(id)) {
        map.set(id, { role: ev.actor.role, username: ev.actor.username, at: ev.at });
      }
    }
    return map;
  }, [events]);
  const STAFF_ROLES = /* @__PURE__ */ new Set(["admin", "superuser", "manager", "director"]);
  const classified = reactExports.useMemo(() => {
    return bookings.map((b) => {
      const creator = creatorByBookingId.get(b.id);
      const channel = b.bookingChannel === "online" ? creator && STAFF_ROLES.has(creator.role) ? "online-admin" : "online-natural" : "offline";
      return { booking: b, channel, creator };
    });
  }, [bookings, creatorByBookingId]);
  const filtered = reactExports.useMemo(() => {
    const q = query.trim().toLowerCase();
    return classified.filter((c) => filter === "all" ? true : c.channel === filter).filter((c) => {
      if (!q) return true;
      const name = formatGuestName(c.booking).toLowerCase();
      return name.includes(q) || String(c.booking.roomNumber).includes(q) || (c.booking.guestPhone ?? "").toLowerCase().includes(q) || (c.booking.guestEmail ?? "").toLowerCase().includes(q);
    }).sort(
      (a, b) => new Date(b.booking.checkIn).getTime() - new Date(a.booking.checkIn).getTime()
    );
  }, [classified, filter, query]);
  const totals = reactExports.useMemo(() => {
    let totalBookings = 0;
    let totalGuests = 0;
    let totalRevenue = 0;
    let totalNights = 0;
    for (const { booking: b } of filtered) {
      totalBookings += 1;
      totalGuests += b.guestCount ?? 0;
      totalRevenue += b.price ?? b.paymentAmount ?? 0;
      try {
        const nights = Math.max(
          0,
          differenceInCalendarDays(parseISO(b.checkOut), parseISO(b.checkIn))
        );
        totalNights += nights;
      } catch {
      }
    }
    return { totalBookings, totalGuests, totalRevenue, totalNights };
  }, [filtered]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(HotelNavbar, { totalRooms: 0, viewMode: "tiles", onViewModeChange: () => {
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto w-full max-w-[1500px] px-5 py-6 space-y-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 12 },
          animate: { opacity: 1, y: 0 },
          className: "relative overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-600 via-purple-600 to-fuchsia-600 p-7 text-white shadow-2xl",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/20 blur-3xl" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute -left-16 -bottom-16 h-56 w-56 rounded-full bg-fuchsia-300/30 blur-3xl" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex items-start justify-between gap-6 flex-wrap", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-11 w-11 items-center justify-center rounded-2xl bg-white/20 backdrop-blur", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "h-5 w-5" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-black uppercase tracking-[0.24em] text-white/80", children: "Superuser · Records" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-2xl font-black leading-tight", children: "Booking history" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 max-w-xl text-sm text-white/85", children: "Read-only log of every booking ever recorded in the grid — offline, natural online, and admin-created online — with totals for guests, bookings and revenue." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-3 min-w-[420px]", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  SummaryTile,
                  {
                    label: "Total bookings",
                    value: totals.totalBookings.toLocaleString("ru-RU"),
                    Icon: BookOpen
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  SummaryTile,
                  {
                    label: "Total guests",
                    value: totals.totalGuests.toLocaleString("ru-RU"),
                    Icon: Users
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  SummaryTile,
                  {
                    label: "Total revenue",
                    value: formatPrice(totals.totalRevenue),
                    Icon: DollarSign,
                    suffix: "UZS"
                  }
                )
              ] })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-3 rounded-2xl border border-slate-200 bg-white/80 p-3 shadow-sm backdrop-blur", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap items-center gap-1.5", children: FILTERS.map((f) => {
          const active = filter === f.id;
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => setFilter(f.id),
              className: `rounded-xl px-3 py-1.5 text-xs font-bold transition ${active ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow" : "bg-slate-100 text-slate-600 hover:bg-slate-200"}`,
              children: f.label
            },
            f.id
          );
        }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ml-auto relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              value: query,
              onChange: (e) => setQuery(e.target.value),
              placeholder: "Search guest, room, phone, email…",
              className: "h-9 w-72 rounded-xl border border-slate-200 bg-white pl-9 pr-3 text-sm font-medium text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] font-bold uppercase tracking-wider text-slate-500", children: [
          filtered.length,
          " record",
          filtered.length === 1 ? "" : "s",
          " ·",
          " ",
          totals.totalNights,
          " night",
          totals.totalNights === 1 ? "" : "s"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-slate-50 text-[10px] font-black uppercase tracking-wider text-slate-500", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 text-left", children: "Channel" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 text-left", children: "Guest" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 text-left", children: "Room" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 text-left", children: "Check-in" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 text-left", children: "Check-out" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 text-right", children: "Nights" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 text-right", children: "Guests" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 text-left", children: "Status" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 text-left", children: "Created by" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 text-right", children: "Revenue" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 text-right", children: "Action" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: filtered.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "td",
          {
            colSpan: 11,
            className: "px-4 py-12 text-center text-sm text-slate-400",
            children: "No bookings match the current filter."
          }
        ) }) : filtered.map(({ booking: b, channel, creator }) => {
          const nights = (() => {
            try {
              return Math.max(
                0,
                differenceInCalendarDays(
                  parseISO(b.checkOut),
                  parseISO(b.checkIn)
                )
              );
            } catch {
              return 0;
            }
          })();
          const rev = b.price ?? b.paymentAmount ?? 0;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.tr,
            {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              whileHover: { backgroundColor: "rgba(99,102,241,0.05)" },
              onClick: () => setSelected(b),
              className: "cursor-pointer border-t border-slate-100 transition",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChannelBadge, { channel }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 font-semibold text-slate-800", children: formatGuestName(b) || /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-400 italic", children: "No name" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 rounded-lg bg-slate-100 px-2 py-0.5 text-xs font-bold text-slate-700", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(BedDouble, { className: "h-3 w-3" }),
                  b.roomNumber
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-slate-600", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarDays, { className: "h-3 w-3 text-slate-400" }),
                  format(parseISO(b.checkIn), "dd MMM yyyy")
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-slate-600", children: format(parseISO(b.checkOut), "dd MMM yyyy") }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-right tabular-nums font-semibold text-slate-700", children: nights }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-right tabular-nums font-semibold text-slate-700", children: b.guestCount ?? 0 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-slate-600", children: b.status }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: creator ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col leading-tight", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold text-slate-800", children: creator.username }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-bold uppercase tracking-wider text-slate-400", children: creator.role })
                ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-bold uppercase tracking-wider text-slate-400", children: channel === "online-natural" ? "Guest (web)" : "—" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-4 py-3 text-right tabular-nums font-bold text-slate-800", children: [
                  formatPrice(rev),
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-semibold text-slate-400", children: "UZS" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "td",
                  {
                    className: "px-4 py-3 text-right",
                    onClick: (e) => e.stopPropagation(),
                    children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "button",
                      {
                        onClick: () => goToGrid(b.id),
                        className: "inline-flex items-center gap-1 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 px-2.5 py-1 text-[10px] font-black uppercase tracking-wider text-white shadow-sm transition hover:shadow-md hover:brightness-110",
                        title: "Highlight this booking on the main grid",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-3 w-3" }),
                          "Show"
                        ]
                      }
                    )
                  }
                )
              ]
            },
            b.id
          );
        }) })
      ] }) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      BookingDialog,
      {
        open: selected != null,
        onClose: () => setSelected(null),
        onSave: (b) => {
          const ok = addBooking(b);
          if (ok !== false) setSelected(null);
          return ok;
        },
        onUpdate: updateBooking,
        onDelete: (id) => {
          removeBooking(id);
          setSelected(null);
        },
        roomNumber: selected?.roomNumber ?? 0,
        checkIn: selected?.checkIn ?? format(/* @__PURE__ */ new Date(), "yyyy-MM-dd"),
        checkOut: selected?.checkOut ?? format(/* @__PURE__ */ new Date(), "yyyy-MM-dd"),
        editBooking: selected,
        bedIndex: selected?.bedIndex,
        readOnly: true
      }
    )
  ] });
}
function SummaryTile({
  label,
  value,
  Icon,
  suffix
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-white/15 p-3 ring-1 ring-white/20 backdrop-blur", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-[10px] font-black uppercase tracking-wider text-white/80", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-3.5 w-3.5" }),
      label
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 font-display text-lg font-black leading-tight tabular-nums", children: [
      value,
      suffix ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-1 text-[10px] font-bold text-white/70", children: suffix }) : null
    ] })
  ] });
}
function ChannelBadge({ channel }) {
  if (channel === "offline") {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 rounded-full bg-slate-900 px-2 py-0.5 text-[10px] font-black uppercase tracking-wider text-white", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "h-3 w-3" }),
      " Offline"
    ] });
  }
  if (channel === "online-natural") {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-sky-500 to-cyan-500 px-2 py-0.5 text-[10px] font-black uppercase tracking-wider text-white", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Earth, { className: "h-3 w-3" }),
      " Natural"
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 px-2 py-0.5 text-[10px] font-black uppercase tracking-wider text-white", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Bot, { className: "h-3 w-3" }),
    " Admin",
    /* @__PURE__ */ jsxRuntimeExports.jsx(Crown, { className: "h-3 w-3 opacity-80" })
  ] });
}
const SplitComponent = () => /* @__PURE__ */ jsxRuntimeExports.jsx(ProtectedRoute, { allow: ["superuser"], children: /* @__PURE__ */ jsxRuntimeExports.jsx(SuperuserBookingsHistory, {}) });
export {
  SplitComponent as component
};
