import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { f as useLocation, e as useNavigate } from "../_libs/tanstack__react-router.mjs";
import { H as HotelNavbar } from "./HotelNavbar-BoJodXQi.mjs";
import { i as useI18n, g as useBookingsContext, h as useHotelGrid, l as useNotifications, B as BOOKING_STATUSES, a as useAuth, k as useAudit, n as useSharedState, o as isRoomDirty, m as formatGuestName } from "./router-D4A6PFi8.mjs";
import { r as reactDomExports } from "../_libs/react-dom.mjs";
import { D as Dialog, a as DialogContent, b as DialogHeader, c as DialogTitle } from "./dialog-DLX0hhUD.mjs";
import { B as Button } from "./button-Dzx3P4Vv.mjs";
import { A as AlertDialog, a as AlertDialogContent, b as AlertDialogHeader, c as AlertDialogTitle, d as AlertDialogDescription, e as AlertDialogFooter, f as AlertDialogCancel, g as AlertDialogAction, I as Input } from "./alert-dialog-q5bFbkxl.mjs";
import { L as Label } from "./label-CeB4zpI0.mjs";
import { B as BookingDialog, s as splitBookingAt, c as computeSplitDateNow, a as sumSegments, S as Select, b as SelectTrigger, d as SelectValue, e as SelectContent, f as SelectItem } from "./BookingDialog-CAL3HQj6.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { s as startOfDay, a as isWithinInterval, p as parseISO, f as format, b as addDays, c as subDays, d as differenceInCalendarDays, i as isBefore, e as isSameDay } from "../_libs/date-fns.mjs";
import { H as Hotel, D as DoorOpen, C as Clock, b as BookOpen, c as House, a as LogOut, W as Wrench, d as CalendarCheck2, F as FolderPlus, e as ChevronRight, f as ChevronDown, U as Users, P as Plus, g as Trash2, h as User, X, T as TriangleAlert, i as Check, S as Sunrise, M as Moon, I as Info, j as Layers, k as Hash, l as Pencil, m as CalendarDays, n as CalendarRange } from "../_libs/lucide-react.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
function AnimatedNumber({ value }) {
  const [display, setDisplay] = reactExports.useState(value);
  const [animKey, setAnimKey] = reactExports.useState(0);
  const prev = reactExports.useRef(value);
  reactExports.useEffect(() => {
    if (prev.current !== value) {
      setAnimKey((k) => k + 1);
      setDisplay(value);
      prev.current = value;
    }
  }, [value]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block tabular-nums counter-bounce", children: display }, animKey);
}
function HotelSummaryCards({
  total,
  available,
  confirmed,
  pending,
  booked,
  inHouse,
  checkedOut,
  maintenance,
  activeFilter = "all",
  onSelect
}) {
  const { t } = useI18n();
  const cards = [
    { label: t("totalRooms"), value: total, icon: Hotel, iconBg: "bg-slate-100 text-slate-700", activeRing: "ring-slate-400", filter: "all" },
    { label: t("available"), value: available, icon: DoorOpen, iconBg: "bg-sky-100 text-sky-700", activeRing: "ring-sky-400", filter: "available" },
    { label: t("pendingLabel"), value: pending, icon: Clock, iconBg: "bg-amber-100 text-amber-700", activeRing: "ring-amber-400", filter: "pending" },
    { label: t("bookedLabel"), value: booked, icon: BookOpen, iconBg: "bg-violet-100 text-violet-700", activeRing: "ring-violet-400", filter: "booked" },
    { label: t("inHouse"), value: inHouse, icon: House, iconBg: "bg-emerald-100 text-emerald-700", activeRing: "ring-emerald-400", filter: "in-house" },
    { label: t("checkedOutLabel"), value: checkedOut, icon: LogOut, iconBg: "bg-gray-100 text-gray-700", activeRing: "ring-gray-400", filter: "checked-out" },
    { label: t("maintenanceLabel"), value: maintenance, icon: Wrench, iconBg: "bg-red-100 text-red-700", activeRing: "ring-red-400", filter: "maintenance" }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-4 md:grid-cols-7 gap-2.5 px-4 py-3.5", children: cards.map((card, i) => {
    const isActive = activeFilter === card.filter;
    const handleClick = () => {
      if (!onSelect) return;
      if (isActive && card.filter !== "all") onSelect("all");
      else onSelect(card.filter);
    };
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.button,
      {
        type: "button",
        initial: { opacity: 0, y: 18, scale: 0.94 },
        animate: { opacity: 1, y: 0, scale: isActive ? 1.04 : 1 },
        transition: { delay: i * 0.05, type: "spring", stiffness: 220, damping: 22 },
        whileHover: { y: -3 },
        whileTap: { scale: 0.97 },
        onClick: handleClick,
        "aria-pressed": isActive,
        className: `glass-card rounded-2xl px-3 py-3 flex flex-col items-center text-center group text-left transition-all duration-300 outline-none
              ${isActive ? `ring-2 ${card.activeRing} shadow-xl` : "ring-0 hover:ring-1 hover:ring-primary/20"}
              ${onSelect ? "cursor-pointer" : "cursor-default"}`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${card.iconBg} shadow-sm mb-2 transition-all duration-500 group-hover:rotate-12 group-hover:scale-110 group-hover:shadow-md ${isActive ? "rotate-6 scale-110" : ""}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(card.icon, { className: "h-4 w-4" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `font-display text-2xl font-black leading-tight transition-colors duration-300 ${isActive ? "text-primary" : "text-foreground group-hover:text-primary"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedNumber, { value: card.value }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-[10px] font-semibold truncate w-full mt-0.5 ${isActive ? "text-primary" : "text-muted-foreground"}`, children: card.label })
        ]
      },
      card.label
    );
  }) });
}
function HotelStatusFilter({ activeFilter, onFilterChange, counts }) {
  const { t, lang } = useI18n();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5 overflow-x-auto py-1.5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        onClick: () => onFilterChange("all"),
        className: `shrink-0 flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-bold transition-all duration-300 hover-lift
          ${activeFilter === "all" ? "bg-primary text-primary-foreground shadow-lg scale-105" : "bg-card text-muted-foreground border border-border hover:bg-muted hover:border-primary/30"}`,
        children: [
          t("all"),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `rounded-full px-1.5 py-0.5 text-[10px] font-black ${activeFilter === "all" ? "bg-white/20" : "bg-muted"}`, children: counts.all || 0 })
        ]
      }
    ),
    Object.entries(BOOKING_STATUSES).filter(([key]) => key !== "confirmed").map(([key, cfg], i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        onClick: () => onFilterChange(key),
        className: `shrink-0 flex items-center gap-1.5 rounded-full px-3.5 py-2 text-xs font-bold transition-all duration-300 border hover-lift animate-fade-in-up
            ${activeFilter === key ? `${cfg.tailwindBg} ${cfg.tailwindText} ${cfg.tailwindBorder} shadow-lg scale-105` : "bg-card text-muted-foreground border-border hover:bg-muted hover:border-primary/30"}`,
        style: { animationDelay: `${i * 40}ms` },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: `h-2.5 w-2.5 rounded-full shrink-0 ${activeFilter === key ? "status-dot-pulse" : ""}`,
              style: { background: cfg.color, transform: activeFilter === key ? "scale(1.4)" : "scale(1)" }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: cfg.label[lang] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `rounded-full px-1.5 py-0.5 text-[10px] font-black ${activeFilter === key ? "bg-background/50" : "bg-muted"}`, children: counts[key] || 0 })
        ]
      },
      key
    ))
  ] });
}
function AddCategoryDialog({ open, onClose }) {
  const { t } = useI18n();
  const { addCategory } = useHotelGrid();
  const [name, setName] = reactExports.useState("");
  const [short, setShort] = reactExports.useState("");
  const [maxGuests, setMaxGuests] = reactExports.useState(2);
  reactExports.useEffect(() => {
    if (open) {
      setName("");
      setShort("");
      setMaxGuests(2);
    }
  }, [open]);
  const handleCreate = () => {
    if (!name.trim()) return;
    addCategory({ name: name.trim(), short: short.trim(), maxGuests });
    toast.success(t("categoryCreated"));
    onClose();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open, onOpenChange: (v) => !v && onClose(), children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogContent, { className: "sm:max-w-[480px] modal-animate rounded-2xl border-2 border-primary/15 shadow-2xl p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, scale: 0.96, filter: "blur(2px)" },
      animate: { opacity: 1, scale: 1, filter: "blur(0px)" },
      transition: { duration: 0.2, ease: "easeOut" },
      className: "overflow-hidden rounded-2xl",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-gradient-to-r from-primary/15 via-primary/5 to-transparent px-6 pt-6 pb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogTitle, { className: "flex items-center gap-3 text-lg font-black", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/15 text-primary shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Layers, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display", children: t("addCategoryTitle") })
        ] }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-6 pb-6 space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "text-xs font-bold flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Layers, { className: "h-3 w-3 text-primary/60" }),
              t("categoryName"),
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                autoFocus: true,
                value: name,
                onChange: (e) => setName(e.target.value),
                placeholder: t("categoryNamePlaceholder"),
                className: "h-11 rounded-xl input-focus-glow"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "text-xs font-bold flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Hash, { className: "h-3 w-3 text-primary/60" }),
                t("shortCode")
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  value: short,
                  onChange: (e) => setShort(e.target.value.toUpperCase()),
                  placeholder: t("shortCodePlaceholder"),
                  className: "h-11 rounded-xl input-focus-glow uppercase tracking-wider",
                  maxLength: 10
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "text-xs font-bold flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-3 w-3 text-primary/60" }),
                t("maxGuests")
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  type: "number",
                  min: 1,
                  max: 10,
                  value: maxGuests,
                  onChange: (e) => setMaxGuests(Number(e.target.value)),
                  className: "h-11 rounded-xl input-focus-glow tabular-nums"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-end gap-2 pt-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", size: "sm", onClick: onClose, className: "rounded-xl", children: t("cancel") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                size: "sm",
                onClick: handleCreate,
                disabled: !name.trim(),
                className: "rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all",
                children: t("create")
              }
            )
          ] })
        ] })
      ]
    }
  ) }) });
}
function AddRoomDialog({ open, onClose, category }) {
  const { t, lang } = useI18n();
  const { categories, addRoom } = useHotelGrid();
  const [roomNumber, setRoomNumber] = reactExports.useState("");
  const [categoryId, setCategoryId] = reactExports.useState(category?.id ?? "");
  reactExports.useEffect(() => {
    if (open) {
      setRoomNumber("");
      setCategoryId(category?.id ?? categories[0]?.id ?? "");
    }
  }, [open, category, categories]);
  const handleCreate = () => {
    const num = parseInt(roomNumber, 10);
    if (!Number.isFinite(num) || num <= 0) {
      toast.error(t("invalidNumber"));
      return;
    }
    if (!categoryId) return;
    const result = addRoom(categoryId, num);
    if (!result.ok) {
      toast.error(result.reason === "exists" ? t("roomExists") : t("invalidNumber"));
      return;
    }
    toast.success(t("roomCreated"));
    onClose();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open, onOpenChange: (v) => !v && onClose(), children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogContent, { className: "sm:max-w-[460px] modal-animate rounded-2xl border-2 border-primary/15 shadow-2xl p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, scale: 0.96, filter: "blur(2px)" },
      animate: { opacity: 1, scale: 1, filter: "blur(0px)" },
      transition: { duration: 0.2, ease: "easeOut" },
      className: "overflow-hidden rounded-2xl",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-gradient-to-r from-primary/15 via-primary/5 to-transparent px-6 pt-6 pb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogTitle, { className: "flex items-center gap-3 text-lg font-black", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/15 text-primary shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(DoorOpen, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display block", children: t("addRoomTitle") }),
            category && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold text-muted-foreground", children: category.label[lang] })
          ] })
        ] }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-6 pb-6 space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "text-xs font-bold flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Hash, { className: "h-3 w-3 text-primary/60" }),
              t("roomNumber"),
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                autoFocus: true,
                type: "number",
                min: 1,
                value: roomNumber,
                onChange: (e) => setRoomNumber(e.target.value),
                placeholder: t("roomNumberPlaceholder"),
                className: "h-11 rounded-xl input-focus-glow tabular-nums text-base"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "text-xs font-bold flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Layers, { className: "h-3 w-3 text-primary/60" }),
              t("category")
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: categoryId, onValueChange: setCategoryId, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "h-11 rounded-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { className: "rounded-xl", children: categories.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: c.id, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-black uppercase tracking-wider text-primary/70", children: c.short }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: c.label[lang] })
              ] }) }, c.id)) })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-end gap-2 pt-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", size: "sm", onClick: onClose, className: "rounded-xl", children: t("cancel") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                size: "sm",
                onClick: handleCreate,
                disabled: !roomNumber || !categoryId,
                className: "rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all",
                children: t("create")
              }
            )
          ] })
        ] })
      ]
    }
  ) }) });
}
function isVisuallyCriticalNow(booking, now = /* @__PURE__ */ new Date()) {
  const today = new Date(now);
  today.setHours(0, 0, 0, 0);
  const minutesNow = now.getHours() * 60 + now.getMinutes();
  if (booking.status === "booked" || booking.status === "confirmed" || booking.status === "pending") {
    const checkInDay = parseISO(booking.checkIn);
    checkInDay.setHours(0, 0, 0, 0);
    if (today < checkInDay) return false;
    const threshold = booking.checkInLateNight ? 23 * 60 : 11 * 60;
    return today > checkInDay || minutesNow >= threshold;
  }
  if (booking.status === "in-house") {
    const checkOutDay = parseISO(booking.checkOut);
    checkOutDay.setHours(0, 0, 0, 0);
    if (today > checkOutDay) return true;
    if (today < checkOutDay) return false;
    const threshold = booking.checkOutHalfDay ? 22 * 60 + 59 : 10 * 60 + 59;
    return minutesNow >= threshold;
  }
  return false;
}
const BookingBar = reactExports.memo(function BookingBar2({ booking, leftPx, widthPx, onClick, onResize, canResize, onResizeLeft, canResizeLeft, onResizeConflict, onMoveStart, dayWidthPx, isPast }) {
  const { lang, t } = useI18n();
  const { criticalBookingIds } = useNotifications();
  const isCritical = criticalBookingIds.has(booking.id) && isVisuallyCriticalNow(booking);
  const config = BOOKING_STATUSES[booking.status];
  const checkInDate = parseISO(booking.checkIn);
  const checkOutDate = parseISO(booking.checkOut);
  const baseDayDiff = differenceInCalendarDays(checkOutDate, checkInDate);
  const baseHalfNights = baseDayDiff * 2 + (booking.checkOutHalfDay ? 1 : 0) + (booking.checkInHalfDay ? 1 : 0);
  const showGuestCount = widthPx > 240;
  const showNights = widthPx > 280;
  const [resizing, setResizing] = reactExports.useState(null);
  const [previewWidth, setPreviewWidth] = reactExports.useState(null);
  const [previewLeft, setPreviewLeft] = reactExports.useState(null);
  const [previewLate, setPreviewLate] = reactExports.useState(!!booking.checkOutHalfDay);
  const [previewEarly, setPreviewEarly] = reactExports.useState(!!booking.checkInHalfDay);
  const startX = reactExports.useRef(0);
  const startWidth = reactExports.useRef(0);
  const startLeft = reactExports.useRef(0);
  const finalLateRef = reactExports.useRef(!!booking.checkOutHalfDay);
  const finalEarlyRef = reactExports.useRef(!!booking.checkInHalfDay);
  const finalCheckOutRef = reactExports.useRef(booking.checkOut);
  const rafIdRef = reactExports.useRef(null);
  const pendingDxRef = reactExports.useRef(0);
  const movedRef = reactExports.useRef(false);
  const suppressNextClickRef = reactExports.useRef(false);
  const beginResize = reactExports.useCallback((e) => {
    e.stopPropagation();
    e.preventDefault();
    if (!onResize) return;
    if (booking.status === "checked-out" || booking.status === "dirty" || booking.status === "cleaned") return;
    const today = /* @__PURE__ */ new Date();
    today.setHours(0, 0, 0, 0);
    if (parseISO(booking.checkOut) < today) return;
    setResizing("right");
    startX.current = e.clientX;
    startWidth.current = widthPx;
    finalLateRef.current = !!booking.checkOutHalfDay;
    finalCheckOutRef.current = booking.checkOut;
    setPreviewLate(!!booking.checkOutHalfDay);
    movedRef.current = false;
  }, [onResize, widthPx, booking.checkOutHalfDay, booking.checkOut, booking.status]);
  const beginResizeLeft = reactExports.useCallback((e) => {
    e.stopPropagation();
    e.preventDefault();
    if (!onResizeLeft) return;
    if (booking.status === "checked-out" || booking.status === "dirty" || booking.status === "cleaned") return;
    const today = /* @__PURE__ */ new Date();
    today.setHours(0, 0, 0, 0);
    if (new Date(booking.checkIn) < today) return;
    setResizing("left");
    startX.current = e.clientX;
    startWidth.current = widthPx;
    startLeft.current = leftPx;
    finalEarlyRef.current = !!booking.checkInHalfDay;
    setPreviewEarly(!!booking.checkInHalfDay);
    movedRef.current = false;
  }, [onResizeLeft, widthPx, leftPx, booking.checkInHalfDay, booking.checkIn, booking.status]);
  reactExports.useEffect(() => {
    if (!resizing) return;
    const halfWidth = dayWidthPx / 2;
    const flush = () => {
      rafIdRef.current = null;
      const dx = pendingDxRef.current;
      if (resizing === "right") {
        const threshold = halfWidth * 0.45;
        const baseHalves = baseDayDiff * 2 + (booking.checkOutHalfDay ? 1 : 0) + (booking.checkInHalfDay ? 1 : 0);
        const movedHalves = Math.trunc((dx + (dx >= 0 ? threshold : -threshold)) / halfWidth);
        const nextHalves = Math.max(1, baseHalves + movedHalves);
        const checkInHalfOffset = booking.checkInHalfDay ? 1 : 0;
        const stayHalvesAfterCheckInDate = Math.max(1, nextHalves - checkInHalfOffset);
        const dayDelta = Math.floor(stayHalvesAfterCheckInDate / 2);
        const nextLate = stayHalvesAfterCheckInDate % 2 === 1;
        finalLateRef.current = nextLate;
        finalCheckOutRef.current = format(addDays(parseISO(booking.checkIn), Math.max(1, dayDelta)), "yyyy-MM-dd");
        setPreviewLate(nextLate);
        setPreviewWidth(Math.max(halfWidth, startWidth.current + movedHalves * halfWidth));
      } else {
        const startedEarly = !!booking.checkInHalfDay;
        const minDx = startedEarly ? 0 : -halfWidth;
        const maxDx = startedEarly ? halfWidth : 0;
        const clampedDx = Math.min(maxDx, Math.max(minDx, dx));
        const earlyProgress = startedEarly ? 1 - clampedDx / halfWidth : -clampedDx / halfWidth;
        const earlyShift = earlyProgress >= 0.5;
        finalEarlyRef.current = earlyShift;
        setPreviewEarly(earlyShift);
        setPreviewLeft(startLeft.current + clampedDx);
        setPreviewWidth(startWidth.current - clampedDx);
      }
    };
    const onMove = (e) => {
      pendingDxRef.current = e.clientX - startX.current;
      if (Math.abs(pendingDxRef.current) >= halfWidth * 0.45) movedRef.current = true;
      if (rafIdRef.current == null) rafIdRef.current = requestAnimationFrame(flush);
    };
    const onUp = () => {
      if (rafIdRef.current != null) {
        cancelAnimationFrame(rafIdRef.current);
        rafIdRef.current = null;
        flush();
      }
      const side = resizing;
      if (movedRef.current) {
        suppressNextClickRef.current = true;
        window.setTimeout(() => {
          suppressNextClickRef.current = false;
        }, 200);
      }
      setResizing(null);
      if (side === "right") {
        const late = finalLateRef.current;
        const checkOut = finalCheckOutRef.current;
        if (onResize && movedRef.current && (late !== !!booking.checkOutHalfDay || checkOut !== booking.checkOut)) {
          if (canResize && !canResize(booking.id, checkOut, late)) {
            onResizeConflict?.();
            setPreviewWidth(null);
            setPreviewLeft(null);
            setPreviewLate(!!booking.checkOutHalfDay);
            setPreviewEarly(!!booking.checkInHalfDay);
            return;
          }
          onResize(booking.id, checkOut, late);
        }
      } else if (side === "left") {
        const early = finalEarlyRef.current;
        if (onResizeLeft && movedRef.current && early !== !!booking.checkInHalfDay) {
          if (canResizeLeft && !canResizeLeft(booking.id, early)) {
            onResizeConflict?.();
            setPreviewWidth(null);
            setPreviewLeft(null);
            setPreviewLate(!!booking.checkOutHalfDay);
            setPreviewEarly(!!booking.checkInHalfDay);
            return;
          }
          onResizeLeft(booking.id, early);
        }
      }
      setPreviewWidth(null);
      setPreviewLeft(null);
      setPreviewLate(!!booking.checkOutHalfDay);
      setPreviewEarly(!!booking.checkInHalfDay);
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
      if (rafIdRef.current != null) cancelAnimationFrame(rafIdRef.current);
      rafIdRef.current = null;
    };
  }, [resizing, dayWidthPx, onResize, canResize, onResizeLeft, canResizeLeft, onResizeConflict, booking.id, booking.checkIn, booking.checkInHalfDay, booking.checkOut, booking.checkOutHalfDay, baseDayDiff]);
  const effectiveLeft = previewLeft ?? leftPx;
  const effectiveWidth = previewWidth ?? widthPx;
  const effectiveLate = resizing === "right" ? previewLate : !!booking.checkOutHalfDay;
  const effectiveEarly = resizing === "left" ? previewEarly : !!booking.checkInHalfDay;
  const effectiveHalfNights = baseDayDiff * 2 + (effectiveLate ? 1 : 0) + (effectiveEarly ? 1 : 0);
  const effectiveNightsLabel = effectiveHalfNights / 2;
  const isLate = effectiveLate;
  const isEarly = effectiveEarly;
  const lateLabel = t("lateBadge");
  const earlyLabel = t("earlyBadge");
  const isFrozenStatus = booking.status === "checked-out" || booking.status === "dirty" || booking.status === "cleaned";
  const todayForHandles = /* @__PURE__ */ new Date();
  todayForHandles.setHours(0, 0, 0, 0);
  const leftHandleDisabled = isFrozenStatus || parseISO(booking.checkIn) < todayForHandles;
  const rightHandleDisabled = isFrozenStatus || parseISO(booking.checkOut) < todayForHandles;
  const handleBarClick = (e) => {
    e.stopPropagation();
    if (suppressNextClickRef.current) {
      e.preventDefault();
      suppressNextClickRef.current = false;
      return;
    }
    if (!resizing) onClick(booking);
  };
  const barRef = reactExports.useRef(null);
  const [hovered, setHovered] = reactExports.useState(false);
  const hoverTimerRef = reactExports.useRef(null);
  const [popPos, setPopPos] = reactExports.useState(null);
  const computePopPos = reactExports.useCallback(() => {
    const node = barRef.current;
    if (!node) return;
    const r = node.getBoundingClientRect();
    const POP_W = 300;
    const POP_H_EST = 220;
    const margin = 12;
    const placeAbove = r.top > POP_H_EST + margin;
    const top = placeAbove ? r.top - margin : r.bottom + margin;
    let left = r.left + r.width / 2 - POP_W / 2;
    left = Math.max(8, Math.min(left, window.innerWidth - POP_W - 8));
    setPopPos({ top, left, placeAbove });
  }, []);
  const handleMouseEnter = reactExports.useCallback(() => {
    if (resizing) return;
    if (hoverTimerRef.current) window.clearTimeout(hoverTimerRef.current);
    hoverTimerRef.current = window.setTimeout(() => {
      computePopPos();
      setHovered(true);
    }, 140);
  }, [resizing, computePopPos]);
  const handleMouseLeave = reactExports.useCallback(() => {
    if (hoverTimerRef.current) window.clearTimeout(hoverTimerRef.current);
    hoverTimerRef.current = window.setTimeout(() => setHovered(false), 80);
  }, []);
  reactExports.useEffect(() => () => {
    if (hoverTimerRef.current) window.clearTimeout(hoverTimerRef.current);
  }, []);
  reactExports.useEffect(() => {
    if (resizing) setHovered(false);
  }, [resizing]);
  reactExports.useLayoutEffect(() => {
    if (!hovered) return;
    let raf = 0;
    const schedule = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        computePopPos();
      });
    };
    window.addEventListener("scroll", schedule, true);
    window.addEventListener("resize", schedule);
    return () => {
      window.removeEventListener("scroll", schedule, true);
      window.removeEventListener("resize", schedule);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [hovered, computePopPos]);
  const bar = /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      ref: barRef,
      onMouseDown: (e) => {
        if (e.button === 1 && onMoveStart) {
          e.preventDefault();
          e.stopPropagation();
          onMoveStart(booking, e);
          return;
        }
        e.stopPropagation();
      },
      onAuxClick: (e) => {
        if (e.button === 1) {
          e.preventDefault();
          e.stopPropagation();
        }
      },
      onClick: handleBarClick,
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
      "data-booking-id": booking.id,
      className: `group/bar absolute top-[5px] bottom-[5px] rounded-xl cursor-pointer booking-bar booking-premium-surface
        text-[11px] font-semibold text-primary-foreground flex items-stretch overflow-hidden
        animate-slide-in border backdrop-blur-[2px] transition-[transform,box-shadow] duration-200 ease-out
        hover:-translate-y-[2px]
        ${isPast ? "border-solid border-gray-500 bg-gray-400 opacity-60 grayscale" : `${config.border} ${config.bg} ${config.opacity}`}
        ${isCritical ? "booking-critical-alert" : ""}
        ${resizing ? "ring-2 ring-primary/70 shadow-2xl scale-y-[1.04]" : ""}`,
      style: {
        left: `${effectiveLeft}px`,
        width: `${Math.max(effectiveWidth - 2, 8)}px`,
        transition: resizing ? "none" : "left 140ms cubic-bezier(0.2,0.9,0.4,1.1), width 140ms cubic-bezier(0.2,0.9,0.4,1.1), transform 200ms ease-out, box-shadow 220ms ease-out",
        backgroundImage: !isPast ? "linear-gradient(180deg, rgba(255,255,255,0.28) 0%, rgba(255,255,255,0.06) 45%, rgba(0,0,0,0.18) 100%)" : void 0
      },
      children: [
        !isPast && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": true, className: "booking-bar-sheen" }),
        isEarly && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": true, className: "booking-early-strip absolute left-0 top-0 bottom-0 w-[7px] z-[1]" }),
        isLate && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": true, className: "booking-late-strip absolute right-0 top-0 bottom-0 w-[7px] z-[1]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-[2] flex min-w-0 flex-1 items-center gap-1.5 px-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full bg-primary-foreground/20 text-[11px] leading-none ring-1 ring-primary-foreground/30", children: config.icon }),
          isEarly && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: "booking-early-badge shrink-0 inline-flex h-[18px] w-[18px] items-center justify-center rounded-full ring-1 animate-fade-in-up",
              title: `${t("earlyCheckinTitle")} · ${earlyLabel} · 08:00`,
              "aria-label": `${earlyLabel} 08:00`,
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sunrise, { className: "h-3 w-3" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "min-w-0 flex-1 truncate whitespace-nowrap text-[11.5px] font-normal tracking-tight drop-shadow-[0_1px_2px_rgba(0,0,0,0.35)]", children: formatGuestName(booking) }),
          isLate && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: "booking-late-badge shrink-0 inline-flex h-[18px] w-[18px] items-center justify-center rounded-full ring-1 animate-fade-in-up",
              title: `${t("lateCheckoutTitle")} · ${lateLabel} · 24:00`,
              "aria-label": `${lateLabel} 24:00`,
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Moon, { className: "h-3 w-3" })
            }
          ),
          showGuestCount && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-0.5 shrink-0 opacity-90 text-[9.5px] tabular-nums bg-black/15 rounded-md px-1.5 py-[2px]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-2.5 w-2.5" }),
            booking.guestCount
          ] }),
          showNights && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "shrink-0 opacity-90 text-[9.5px] font-bold tabular-nums bg-black/15 rounded-md px-1.5 py-[2px]", children: [
            Number.isInteger(effectiveNightsLabel) ? effectiveNightsLabel : effectiveNightsLabel.toFixed(1),
            t("nightsLetter")
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onMouseDown: (e) => e.stopPropagation(),
              onClick: handleBarClick,
              title: t("detailedInfo") ?? "Detailed information",
              "aria-label": t("detailedInfo") ?? "Detailed information",
              className: "shrink-0 ml-0.5 flex h-5 w-5 items-center justify-center rounded-md bg-white/20 text-white/95 ring-1 ring-white/40 opacity-0 group-hover/bar:opacity-100 hover:bg-white/35 hover:scale-110 transition-all duration-150",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { className: "h-3 w-3" })
            }
          )
        ] }),
        onResizeLeft && !leftHandleDisabled && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            onMouseDown: beginResizeLeft,
            onClick: (e) => e.stopPropagation(),
            title: t("dragToEarly"),
            className: "absolute top-0 left-0 h-full w-3 cursor-ew-resize flex items-center justify-center bg-gradient-to-r from-black/20 to-transparent opacity-0 group-hover/bar:opacity-100 transition-opacity z-[3]",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-7 w-[3px] rounded-full bg-white/80 shadow-[0_0_6px_rgba(255,255,255,0.6)]" })
          }
        ),
        onResize && !rightHandleDisabled && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            onMouseDown: beginResize,
            onClick: (e) => e.stopPropagation(),
            title: t("dragToExtend"),
            className: "absolute top-0 right-0 h-full w-3 cursor-ew-resize flex items-center justify-center bg-gradient-to-l from-black/20 to-transparent opacity-0 group-hover/bar:opacity-100 transition-opacity z-[3]",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-7 w-[3px] rounded-full bg-white/80 shadow-[0_0_6px_rgba(255,255,255,0.6)]" })
          }
        )
      ]
    }
  );
  const popover = popPos && hovered && typeof document !== "undefined" ? reactDomExports.createPortal(
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        style: {
          position: "fixed",
          top: popPos.placeAbove ? void 0 : popPos.top,
          bottom: popPos.placeAbove ? window.innerHeight - popPos.top : void 0,
          left: popPos.left,
          width: 300,
          zIndex: 9999,
          // Popover is informational only — disabling pointer events stops
          // the cursor from re-entering the popover and re-triggering the
          // enter/leave loop that produced the "corner tweak/freeze".
          pointerEvents: "none",
          willChange: "transform, opacity",
          transformOrigin: popPos.placeAbove ? "bottom center" : "top center",
          animation: "booking-pop-in 140ms cubic-bezier(0.2,0.9,0.4,1.05) both"
        },
        className: "rounded-2xl shadow-2xl",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "relative rounded-2xl border bg-popover p-0 overflow-hidden",
            style: { borderColor: `${config.color}40` },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "h-1.5 w-full",
                  style: { background: `linear-gradient(90deg, ${config.color}, ${config.color}aa)` }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3.5 space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-[15px] font-black leading-tight text-foreground truncate", children: formatGuestName(booking) || (lang === "ru" ? "Гость" : lang === "uz" ? "Mehmon" : "Guest") }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] font-bold uppercase tracking-wider text-muted-foreground mt-0.5", children: [
                      t("room"),
                      " ",
                      booking.roomNumber
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "span",
                    {
                      className: "inline-flex shrink-0 items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-black uppercase tracking-wider ring-1",
                      style: {
                        background: `${config.color}1a`,
                        color: config.color,
                        borderColor: `${config.color}40`
                      },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full", style: { background: config.color } }),
                        config.label[lang]
                      ]
                    }
                  )
                ] }),
                (() => {
                  const channel = booking.bookingChannel ?? "offline";
                  const isOnline = channel === "online";
                  const onlineLabel = lang === "ru" ? "Онлайн" : lang === "uz" ? "Onlayn" : "Online";
                  const offlineLabel = lang === "ru" ? "Офлайн" : lang === "uz" ? "Oflayn" : "Offline";
                  const guestLabel = lang === "ru" ? "Гость" : lang === "uz" ? "Mehmon" : "Guest";
                  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-bold uppercase tracking-wider text-muted-foreground/70", children: guestLabel }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 rounded-full bg-muted/40 p-[2px] ring-1 ring-border/60 shadow-sm select-none", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `inline-flex items-center gap-1 rounded-full px-1.5 py-0.5 text-[9px] font-black uppercase tracking-wider ${isOnline ? "bg-gradient-to-r from-sky-500 to-cyan-500 text-white shadow-[0_1px_4px_-1px_rgba(14,165,233,0.6)] ring-1 ring-sky-600/40" : "text-muted-foreground/60 opacity-70"}`, children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `h-1 w-1 rounded-full ${isOnline ? "bg-white" : "bg-sky-500/30"}` }),
                        onlineLabel
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `inline-flex items-center gap-1 rounded-full px-1.5 py-0.5 text-[9px] font-black uppercase tracking-wider ${!isOnline ? "bg-gradient-to-r from-slate-700 to-slate-900 text-white shadow-[0_1px_4px_-1px_rgba(15,23,42,0.6)] ring-1 ring-slate-900/50" : "text-muted-foreground/60 opacity-70"}`, children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `h-1 w-1 rounded-full ${!isOnline ? "bg-white" : "bg-slate-500/30"}` }),
                        offlineLabel
                      ] })
                    ] })
                  ] });
                })(),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-muted/40 px-2.5 py-2 space-y-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-[11px]", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-bold text-foreground tabular-nums", children: [
                      booking.checkIn,
                      " ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground font-medium", children: booking.checkInHalfDay ? "08:00" : "14:00" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "→" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-bold text-foreground tabular-nums", children: [
                      booking.checkOut,
                      " ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground font-medium", children: booking.checkOutHalfDay ? "24:00" : "12:00" })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2 pt-0.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 rounded-md bg-primary/15 px-1.5 py-0.5 text-[10px] font-black text-primary", children: [
                      Number.isInteger(baseHalfNights / 2) ? baseHalfNights / 2 : (baseHalfNights / 2).toFixed(1),
                      " ",
                      t("nightsWord")
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 text-[10px] font-bold text-muted-foreground", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-3 w-3" }),
                      " ",
                      booking.guestCount,
                      " ",
                      t("guestsWord")
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1", children: [
                      booking.checkInHalfDay && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center rounded-md bg-emerald-500/20 px-1.5 py-0.5 text-[9px] font-black uppercase tracking-wider text-emerald-700", children: t("earlyBadge") }),
                      booking.checkOutHalfDay && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center rounded-md bg-amber-500/20 px-1.5 py-0.5 text-[9px] font-black uppercase tracking-wider text-amber-700", children: t("lateBadge") })
                    ] })
                  ] })
                ] }),
                (booking.guestPhone || booking.guestEmail) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-0.5 text-[11px]", children: [
                  booking.guestPhone && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "flex items-center gap-1.5 text-foreground/80", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary/70", children: "📞" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold tabular-nums", children: booking.guestPhone })
                  ] }),
                  booking.guestEmail && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "flex items-center gap-1.5 text-foreground/80 truncate", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary/70", children: "✉" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold truncate", children: booking.guestEmail })
                  ] })
                ] }),
                booking.notes && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] text-muted-foreground italic border-t border-border/40 pt-2 leading-snug", children: [
                  '"',
                  booking.notes,
                  '"'
                ] })
              ] })
            ]
          }
        )
      },
      "booking-hover-pop"
    ),
    document.body
  ) : null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    bar,
    popover
  ] });
});
const MIN_THUMB_WIDTH = 56;
const MAX_THUMB_WIDTH_RATIO = 0.3;
const EDGE_REQUEST_INTERVAL_MS = 180;
const PROXIMITY_RANGE_PX = 4e3;
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const easeInOut = (t) => t * t * (3 - 2 * t);
function TimelineBottomScrollbar({
  scrollRef,
  labelWidth,
  todayContentPx,
  onDragStateChange,
  onEdgeRequest
}) {
  const trackRef = reactExports.useRef(null);
  const thumbRef = reactExports.useRef(null);
  const [metrics, setMetrics] = reactExports.useState({ scrollLeft: 0, scrollWidth: 1, clientWidth: 1 });
  const [trackWidth, setTrackWidth] = reactExports.useState(0);
  const [hovered, setHovered] = reactExports.useState(false);
  const [dragging, setDragging] = reactExports.useState(false);
  const activeDragRef = reactExports.useRef(false);
  const computeThumbWidth = reactExports.useCallback((scrollLeft, clientWidth) => {
    const viewport2 = Math.max(1, clientWidth - labelWidth);
    const viewportCenter = scrollLeft + viewport2 / 2;
    const distance = Math.abs(viewportCenter - todayContentPx);
    const proximity = clamp(1 - distance / PROXIMITY_RANGE_PX, 0, 1);
    const eased = easeInOut(proximity);
    const maxWidth = Math.max(MIN_THUMB_WIDTH + 40, Math.round(trackWidth * MAX_THUMB_WIDTH_RATIO));
    const width = MIN_THUMB_WIDTH + (maxWidth - MIN_THUMB_WIDTH) * eased;
    return Math.round(Math.max(MIN_THUMB_WIDTH, Math.min(trackWidth - 8, width)));
  }, [labelWidth, todayContentPx, trackWidth]);
  const measure = reactExports.useCallback(() => {
    const el = scrollRef.current;
    if (!el || activeDragRef.current) return;
    setMetrics({ scrollLeft: el.scrollLeft, scrollWidth: el.scrollWidth, clientWidth: el.clientWidth });
  }, [scrollRef]);
  reactExports.useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    let raf = 0;
    const schedule = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        measure();
      });
    };
    measure();
    el.addEventListener("scroll", schedule, { passive: true });
    const ro = new ResizeObserver(schedule);
    ro.observe(el);
    const inner = el.firstElementChild;
    if (inner) ro.observe(inner);
    window.addEventListener("resize", schedule);
    return () => {
      el.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      ro.disconnect();
      if (raf) cancelAnimationFrame(raf);
    };
  }, [scrollRef, measure]);
  reactExports.useLayoutEffect(() => {
    if (!trackRef.current) return;
    const ro = new ResizeObserver(([entry]) => setTrackWidth(entry.contentRect.width));
    ro.observe(trackRef.current);
    setTrackWidth(trackRef.current.getBoundingClientRect().width);
    return () => ro.disconnect();
  }, []);
  const viewport = Math.max(1, metrics.clientWidth - labelWidth);
  const maxScroll = Math.max(1, metrics.scrollWidth - metrics.clientWidth);
  const liveThumbWidth = trackWidth > 0 ? computeThumbWidth(metrics.scrollLeft, metrics.clientWidth) : MIN_THUMB_WIDTH;
  const maxThumbLeft = Math.max(0, trackWidth - liveThumbWidth - 8);
  const liveThumbLeft = clamp(metrics.scrollLeft / maxScroll * maxThumbLeft, 0, maxThumbLeft);
  const onThumbPointerDown = reactExports.useCallback((e) => {
    const el = scrollRef.current;
    if (!el || !trackRef.current) return;
    e.preventDefault();
    e.stopPropagation();
    activeDragRef.current = true;
    setDragging(true);
    onDragStateChange?.(true);
    try {
      e.target.setPointerCapture(e.pointerId);
    } catch {
    }
    let pointerX = e.clientX;
    const startPointerX = e.clientX;
    let anchorScroll = el.scrollLeft;
    let lastScrollWidth = el.scrollWidth;
    let raf = 0;
    let lastEdgeReqAt = 0;
    const writeThumb = (left, width) => {
      if (!thumbRef.current) return;
      thumbRef.current.style.width = `${width}px`;
      thumbRef.current.style.transform = `translate3d(${left + 4}px, -50%, 0)`;
    };
    const requestEdge = (dir) => {
      const now = performance.now();
      if (now - lastEdgeReqAt < EDGE_REQUEST_INTERVAL_MS) return;
      lastEdgeReqAt = now;
      onEdgeRequest?.(dir);
    };
    const tick = () => {
      if (!activeDragRef.current) return;
      const widthDelta = el.scrollWidth - lastScrollWidth;
      if (widthDelta > 0) {
        const scrollLeftMovedForwardApprox = el.scrollLeft - (anchorScroll + (pointerX - startPointerX) * 0);
        if (scrollLeftMovedForwardApprox >= widthDelta * 0.5) {
          anchorScroll += widthDelta;
        }
      }
      const trackLen = trackRef.current?.getBoundingClientRect().width ?? trackWidth;
      const maxScrollNow = Math.max(1, el.scrollWidth - el.clientWidth);
      const liveWidth = computeThumbWidth(anchorScroll + (pointerX - startPointerX) * (maxScrollNow / Math.max(1, trackLen - MIN_THUMB_WIDTH - 8)), el.clientWidth);
      const usableTrack = Math.max(1, trackLen - liveWidth - 8);
      const pointerDelta = pointerX - startPointerX;
      const scrollDelta = pointerDelta * (maxScrollNow / usableTrack);
      let target = anchorScroll + scrollDelta;
      if (target < 0) {
        requestEdge("past");
        target = 0;
      }
      if (target > maxScrollNow) {
        requestEdge("future");
        target = maxScrollNow;
      }
      el.scrollLeft = target;
      const visualLeft = clamp(target / maxScrollNow * usableTrack, 0, usableTrack);
      writeThumb(visualLeft, liveWidth);
      lastScrollWidth = el.scrollWidth;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    const move = (ev) => {
      ev.preventDefault();
      pointerX = ev.clientX;
    };
    const up = (ev) => {
      activeDragRef.current = false;
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
      window.removeEventListener("pointercancel", up);
      if (thumbRef.current) {
        thumbRef.current.style.width = "";
        thumbRef.current.style.transform = "";
      }
      setMetrics({ scrollLeft: el.scrollLeft, scrollWidth: el.scrollWidth, clientWidth: el.clientWidth });
      setDragging(false);
      onDragStateChange?.(false);
      try {
        e.target.releasePointerCapture(ev.pointerId);
      } catch {
      }
    };
    window.addEventListener("pointermove", move, { passive: false });
    window.addEventListener("pointerup", up);
    window.addEventListener("pointercancel", up);
  }, [scrollRef, trackWidth, computeThumbWidth, onDragStateChange, onEdgeRequest]);
  const onTrackPointerDown = reactExports.useCallback((e) => {
    if (e.target !== trackRef.current) return;
    const el = scrollRef.current;
    if (!el || !trackRef.current) return;
    const rect = trackRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - liveThumbWidth / 2;
    const usable = Math.max(1, trackWidth - liveThumbWidth - 8);
    const clamped = clamp(x, 0, usable);
    const target = clamped / usable * (el.scrollWidth - el.clientWidth);
    el.scrollTo({ left: target, behavior: "smooth" });
  }, [scrollRef, liveThumbWidth, trackWidth]);
  reactExports.useEffect(() => () => {
    activeDragRef.current = false;
    onDragStateChange?.(false);
  }, [onDragStateChange]);
  const hidden = metrics.scrollWidth <= viewport + labelWidth + 4;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "sticky bottom-0 z-40 flex w-full select-none border-t border-border/40 bg-gradient-to-b from-background/70 to-background backdrop-blur-md",
      style: {
        height: 24,
        opacity: hidden ? 0 : 1,
        pointerEvents: hidden ? "none" : "auto",
        transition: "opacity 200ms ease"
      },
      onMouseEnter: () => setHovered(true),
      onMouseLeave: () => setHovered(false),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { width: labelWidth }, className: "shrink-0" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            ref: trackRef,
            onPointerDown: onTrackPointerDown,
            className: "relative flex-1 cursor-pointer",
            style: { touchAction: "none" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "absolute left-1 right-1 top-1/2 -translate-y-1/2 rounded-full bg-muted/60 ring-1 ring-border/60",
                  style: {
                    height: hovered || dragging ? 10 : 6,
                    transition: dragging ? "none" : "height 140ms ease"
                  }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  ref: thumbRef,
                  onPointerDown: onThumbPointerDown,
                  role: "scrollbar",
                  "aria-orientation": "horizontal",
                  "aria-valuenow": Math.round(metrics.scrollLeft / maxScroll * 100) || 0,
                  className: "absolute top-1/2 cursor-grab rounded-full bg-gradient-to-b from-primary to-primary/80 shadow-md ring-1 ring-primary/40 active:cursor-grabbing",
                  style: {
                    left: 0,
                    transform: `translate3d(${liveThumbLeft + 4}px, -50%, 0)`,
                    width: liveThumbWidth,
                    height: hovered || dragging ? 14 : 10,
                    transition: dragging ? "none" : "width 260ms cubic-bezier(.22,.61,.36,1), transform 180ms cubic-bezier(.22,.61,.36,1), height 160ms ease, box-shadow 160ms ease",
                    boxShadow: dragging || hovered ? "0 4px 14px -2px color-mix(in oklab, hsl(var(--primary)) 55%, transparent)" : "0 2px 6px -1px color-mix(in oklab, hsl(var(--primary)) 30%, transparent)",
                    touchAction: "none",
                    willChange: dragging ? "transform, width" : "transform"
                  }
                }
              )
            ]
          }
        )
      ]
    }
  );
}
const HALF_COL_WIDTH = 40;
const DAY_WIDTH = HALF_COL_WIDTH * 2;
const ROW_HEIGHT = 44;
const PERSON_ROW_HEIGHT = 38;
const DEFAULT_LABEL_WIDTH = 440;
const INITIAL_PAST_DAYS = 14;
const INITIAL_FUTURE_DAYS = 45;
const LOAD_MORE_DAYS = 30;
const EDGE_THRESHOLD = 600;
const ADMIN_INITIAL_PAST_DAYS = 30;
const ADMIN_LEFT_OFFSET_DAYS = 2;
const PERSON_COUNTS = {
  "standard-double": 2,
  "standard-twin": 2,
  "standard-triple": 3,
  "standard-quadruple": 4,
  "deluxe-twin": 2
};
const DAY_LABELS_RU = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"];
const DAY_LABELS_UZ = ["Ya", "Du", "Se", "Ch", "Pa", "Ju", "Sh"];
const CATEGORY_STATUS_ORDER = ["pending", "booked", "in-house", "checked-out", "maintenance"];
const CategoryStatusStrip = reactExports.memo(({ counts, lang }) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "category-status-strip", children: CATEGORY_STATUS_ORDER.map((status) => {
  const config = BOOKING_STATUSES[status];
  const count = counts[status] ?? 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `category-status-chip${count === 0 ? " is-empty" : ""}`, style: { "--chip-color": config.color }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "category-status-count", children: count }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "category-status-dot" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "category-status-label", children: config.label[lang] })
  ] }, status);
}) }));
CategoryStatusStrip.displayName = "CategoryStatusStrip";
const DayHeaderCell = reactExports.memo(({ date, isToday, isPastDay, isWeekendDay, dayLabel, lang, isFirstOfMonth }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
  "div",
  {
    className: `day-header-cell relative flex flex-col items-center justify-center select-none ${isToday ? "today-header-glow" : "bg-card"}`,
    style: { width: DAY_WIDTH, minWidth: DAY_WIDTH, height: 78, borderRight: "1px solid hsl(var(--grid-line-strong) / 0.5)", paddingTop: 2, paddingBottom: 12 },
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "span",
        {
          className: [
            "z-10 mb-1 inline-flex items-center justify-center rounded-full leading-none tracking-[0.14em] uppercase transition-colors",
            isFirstOfMonth ? "px-1.5 py-[2px] text-[8px] font-black shadow-sm ring-1 " + (isToday ? "bg-white/25 text-white ring-white/40" : "bg-primary/15 text-primary ring-primary/30") : "px-1 py-[1px] text-[7.5px] font-bold " + (isToday ? "text-white/85" : isPastDay ? "text-muted-foreground/45" : "text-primary/55")
          ].join(" "),
          children: format(date, "MMM")
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[10px] font-extrabold uppercase leading-none z-10 tracking-wider ${isToday ? "text-white" : isPastDay ? "text-muted-foreground/50" : isWeekendDay ? "text-destructive" : "text-foreground/70"}`, children: dayLabel }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[16px] font-black leading-tight z-10 mt-0.5 ${isToday ? "text-white" : isPastDay ? "text-muted-foreground/50" : "text-foreground"}`, children: format(date, "d") }),
      isToday && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[7px] font-black uppercase tracking-wider text-white/90 z-10 mt-0.5", children: lang === "ru" ? "Сегодня" : "Bugun" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: `absolute bottom-0.5 left-0 right-0 z-10 flex items-center justify-center gap-2 text-[8px] font-bold leading-none pointer-events-none ${isToday ? "text-white/95" : isPastDay ? "text-muted-foreground/50" : "text-foreground/55"}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-[1px]", children: [
              "↑",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "tabular-nums", children: "12" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-[1px]", children: [
              "↓",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "tabular-nums", children: "14" })
            ] })
          ]
        }
      )
    ]
  }
));
DayHeaderCell.displayName = "DayHeaderCell";
const RowBackground = reactExports.memo(({ height, totalWidth, todayOffset, totalDays }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  "div",
  {
    style: {
      width: totalWidth,
      height,
      position: "absolute",
      top: 0,
      left: 0,
      pointerEvents: "none",
      background: "hsl(var(--card))",
      backgroundImage: [
        `repeating-linear-gradient(90deg, hsl(var(--grid-line-strong) / 0.55) 0px, hsl(var(--grid-line-strong) / 0.55) 1px, transparent 1px, transparent ${DAY_WIDTH}px)`,
        `repeating-linear-gradient(90deg, transparent 0px, transparent ${HALF_COL_WIDTH}px, hsl(var(--grid-line) / 0.3) ${HALF_COL_WIDTH}px, hsl(var(--grid-line) / 0.3) ${HALF_COL_WIDTH + 1}px, transparent ${HALF_COL_WIDTH + 1}px, transparent ${DAY_WIDTH}px)`
      ].join(", "),
      backgroundSize: `${DAY_WIDTH}px ${height}px`
    },
    children: todayOffset >= 0 && todayOffset < totalDays && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "today-column-glow",
        style: {
          position: "absolute",
          left: todayOffset * DAY_WIDTH,
          top: 0,
          width: DAY_WIDTH,
          height,
          background: "hsl(var(--primary-hsl) / 0.10)",
          borderLeft: "3px solid hsl(var(--primary-hsl) / 0.55)",
          borderRight: "3px solid hsl(var(--primary-hsl) / 0.55)"
        }
      }
    )
  }
));
RowBackground.displayName = "RowBackground";
const categoryDisplay = (cat, lang) => cat.short || cat.label[lang] || cat.label.en || "";
const RowDragOverlay = reactExports.memo(({ rowKey, registerOverlay }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      ref: (el) => registerOverlay(rowKey, el),
      className: "drag-overlay-animate",
      style: {
        position: "absolute",
        left: 0,
        top: 0,
        width: 0,
        height: 0,
        border: "1.5px dashed hsl(var(--primary-hsl) / 0.7)",
        borderRadius: 8,
        pointerEvents: "none",
        zIndex: 2,
        display: "none"
      }
    }
  );
});
RowDragOverlay.displayName = "RowDragOverlay";
function bucketBookings(bookings, startDate, totalDays, today) {
  const byRoom = /* @__PURE__ */ new Map();
  const byBed = /* @__PURE__ */ new Map();
  const totalPx = totalDays * DAY_WIDTH;
  for (const booking of bookings) {
    const bIn = parseISO(booking.checkIn);
    const bOut = parseISO(booking.checkOut);
    const startDayOffset = differenceInCalendarDays(bIn, startDate);
    const endDayOffset = differenceInCalendarDays(bOut, startDate);
    const earlyShift = booking.checkInHalfDay ? HALF_COL_WIDTH : 0;
    const startPx = Math.max(0, startDayOffset * DAY_WIDTH + HALF_COL_WIDTH - earlyShift);
    const halfExtra = booking.checkOutHalfDay ? HALF_COL_WIDTH : 0;
    const endPx = Math.min(totalPx, endDayOffset * DAY_WIDTH + HALF_COL_WIDTH + halfExtra);
    const w = endPx - startPx;
    if (w <= 0) continue;
    const isPast = isBefore(bOut, today);
    const item = { booking, leftPx: startPx, widthPx: w, isPast };
    if (booking.bedIndex === void 0) {
      const arr = byRoom.get(booking.roomNumber);
      if (arr) arr.push(item);
      else byRoom.set(booking.roomNumber, [item]);
    } else {
      const k = `${booking.roomNumber}:${booking.bedIndex}`;
      const arr = byBed.get(k);
      if (arr) arr.push(item);
      else byBed.set(k, [item]);
      if (booking.additionalBeds && booking.additionalBeds.length) {
        for (const ab of booking.additionalBeds) {
          const kk = `${booking.roomNumber}:${ab}`;
          const blockerItem = { booking, leftPx: startPx, widthPx: w, isPast, isBlocker: true };
          const ar = byBed.get(kk);
          if (ar) ar.push(blockerItem);
          else byBed.set(kk, [blockerItem]);
        }
      }
    }
  }
  return { byRoom, byBed };
}
function HotelRoomGrid({ bookings, conflictBookings = bookings, onAddBooking, onDeleteBooking, onUpdateBooking, focusBookingId, onFocusConsumed, labelWidth }) {
  const LABEL_WIDTH = labelWidth ?? DEFAULT_LABEL_WIDTH;
  const { t, lang } = useI18n();
  const { categories, rooms, categoryRates, removeCategory, removeRoom, setCategoryRate } = useHotelGrid();
  const { user } = useAuth();
  const { log: logAudit } = useAudit();
  const isManager = user?.role === "manager";
  const isAdmin = user?.role === "admin";
  const isSuperuser = user?.role === "superuser";
  const canManageStructure = !isAdmin;
  const canEditRate = user?.role === "manager" || user?.role === "superuser";
  const today = reactExports.useMemo(() => startOfDay(/* @__PURE__ */ new Date()), []);
  const [pastDays, setPastDays] = reactExports.useState(isAdmin || isManager || isSuperuser ? ADMIN_INITIAL_PAST_DAYS : INITIAL_PAST_DAYS);
  const [futureDays, setFutureDays] = reactExports.useState(INITIAL_FUTURE_DAYS);
  const [collapsedCategories, setCollapsedCategories] = reactExports.useState({});
  const [expandedRooms, setExpandedRooms] = reactExports.useState({});
  const [personNames, setPersonNames] = reactExports.useState({});
  const { data: extraPersons, setData: setExtraPersonsShared } = useSharedState("guests", {});
  const setExtraPersons = reactExports.useCallback(
    (updater) => {
      setExtraPersonsShared(updater);
    },
    [setExtraPersonsShared]
  );
  const [deletedPersonSlots, setDeletedPersonSlots] = reactExports.useState({});
  const [deleteTarget, setDeleteTarget] = reactExports.useState(null);
  const [deleteStep, setDeleteStep] = reactExports.useState(1);
  reactExports.useEffect(() => {
    if (!deleteTarget || deleteTarget.type !== "category" || !isSuperuser) return;
    const catRoomNumbers = new Set(
      rooms.filter((r) => r.category === deleteTarget.id).map((r) => r.number)
    );
    const hasBookings = bookings.some((b) => catRoomNumbers.has(b.roomNumber));
    if (!hasBookings) setDeleteStep(2);
  }, [deleteTarget, isSuperuser, rooms, bookings]);
  const [addCategoryOpen, setAddCategoryOpen] = reactExports.useState(false);
  const [addRoomCategoryId, setAddRoomCategoryId] = reactExports.useState(null);
  const [rateEditCategoryId, setRateEditCategoryId] = reactExports.useState(null);
  const [rateDraft, setRateDraft] = reactExports.useState([]);
  const [rateDraftNon, setRateDraftNon] = reactExports.useState([]);
  const toggleCategory = reactExports.useCallback((catId) => {
    setCollapsedCategories((prev) => ({ ...prev, [catId]: !prev[catId] }));
  }, []);
  const toggleRoomExpand = reactExports.useCallback((roomNumber) => {
    setExpandedRooms((prev) => ({ ...prev, [roomNumber]: !prev[roomNumber] }));
  }, []);
  const updatePersonName = reactExports.useCallback((roomNumber, personIdx, name) => {
    setPersonNames((prev) => ({ ...prev, [roomNumber]: { ...prev[roomNumber] || {}, [personIdx]: name } }));
  }, []);
  const addExtraPerson = reactExports.useCallback((roomNumber) => {
    setExtraPersons((prev) => ({ ...prev, [roomNumber]: (prev[roomNumber] || 0) + 1 }));
    setExpandedRooms((prev) => ({ ...prev, [roomNumber]: true }));
  }, [setExtraPersons]);
  const removeExtraPerson = reactExports.useCallback((roomNumber, personIdx) => {
    setExtraPersons((prev) => ({ ...prev, [roomNumber]: Math.max(0, (prev[roomNumber] || 0) - 1) }));
    setPersonNames((prev) => {
      const copy = { ...prev[roomNumber] || {} };
      delete copy[personIdx];
      return { ...prev, [roomNumber]: copy };
    });
  }, [setExtraPersons]);
  const confirmDelete = reactExports.useCallback(() => {
    if (!deleteTarget) return;
    if (deleteTarget.type === "category") {
      if (isSuperuser && deleteStep === 1) {
        const catRoomNumbers = new Set(
          rooms.filter((r) => r.category === deleteTarget.id).map((r) => r.number)
        );
        const affected = bookings.filter((b) => catRoomNumbers.has(b.roomNumber));
        affected.forEach((b) => {
          try {
            onDeleteBooking(b.id);
          } catch {
          }
          try {
            logAudit({
              actor: {
                username: user?.username ?? "superuser",
                role: user?.role ?? "superuser",
                adminId: null
              },
              category: "booking",
              action: "booking.deleted",
              summary: (lang === "ru" ? "Удалена бронь" : "Booking deleted") + ` · ${lang === "ru" ? "номер" : "room"} ${b.roomNumber} · ${b.status}`,
              details: {
                bookingId: b.id,
                roomNumber: b.roomNumber,
                status: b.status,
                checkIn: b.checkIn,
                checkOut: b.checkOut,
                reason: "category-deleted",
                categoryId: deleteTarget.id,
                categoryLabel: deleteTarget.label
              }
            });
          } catch {
          }
        });
        try {
          logAudit({
            actor: {
              username: user?.username ?? "superuser",
              role: user?.role ?? "superuser",
              adminId: null
            },
            category: "system",
            action: "category.bookings_wiped",
            summary: (lang === "ru" ? `Удалены все бронирования категории "${deleteTarget.label}"` : `Wiped all bookings for category "${deleteTarget.label}"`) + ` · ${affected.length}`,
            details: {
              categoryId: deleteTarget.id,
              categoryLabel: deleteTarget.label,
              roomNumbers: Array.from(catRoomNumbers).sort((a, b) => a - b),
              deletedBookingIds: affected.map((b) => b.id),
              deletedCount: affected.length
            }
          });
        } catch {
        }
        setDeleteStep(2);
        return;
      }
      removeCategory(deleteTarget.id);
      try {
        logAudit({
          actor: {
            username: user?.username ?? "superuser",
            role: user?.role ?? "superuser",
            adminId: null
          },
          category: "system",
          action: "category.deleted",
          summary: lang === "ru" ? `Категория удалена: ${deleteTarget.label}` : `Category deleted: ${deleteTarget.label}`,
          details: { categoryId: deleteTarget.id, categoryLabel: deleteTarget.label }
        });
      } catch {
      }
      toast.success(lang === "ru" ? `Категория удалена: ${deleteTarget.label}` : `Category deleted: ${deleteTarget.label}`);
    } else if (deleteTarget.type === "room") {
      removeRoom(deleteTarget.roomNumber);
      toast.success(lang === "ru" ? `Номер ${deleteTarget.roomNumber} удалён` : `Room ${deleteTarget.roomNumber} deleted`);
    } else if (deleteTarget.isExtra) {
      removeExtraPerson(deleteTarget.roomNumber, deleteTarget.personIdx);
      toast.success(lang === "ru" ? "Гость удалён" : "Guest deleted");
    } else {
      setDeletedPersonSlots((prev) => {
        const next = new Set(prev[deleteTarget.roomNumber] ?? []);
        next.add(deleteTarget.personIdx);
        return { ...prev, [deleteTarget.roomNumber]: next };
      });
      setPersonNames((prev) => {
        const copy = { ...prev[deleteTarget.roomNumber] || {} };
        delete copy[deleteTarget.personIdx];
        return { ...prev, [deleteTarget.roomNumber]: copy };
      });
      toast.success(lang === "ru" ? "Гость удалён" : "Guest deleted");
    }
    setDeleteTarget(null);
    setDeleteStep(1);
  }, [deleteTarget, deleteStep, isSuperuser, bookings, rooms, onDeleteBooking, logAudit, user, lang, removeCategory, removeRoom, removeExtraPerson]);
  const openRateEditor = reactExports.useCallback((categoryId) => {
    setRateEditCategoryId(categoryId);
    const cur = categoryRates[categoryId];
    const cat = categories.find((c) => c.id === categoryId);
    const slots = Math.max(1, cat?.maxGuests ?? 1);
    const toDraft = (arr) => Array.from({ length: slots }, (_, i) => {
      const v = arr?.[i];
      return v && v > 0 ? String(v) : "";
    });
    setRateDraft(toDraft(cur?.resident));
    setRateDraftNon(toDraft(cur?.nonResident));
  }, [categoryRates, categories]);
  const saveRate = reactExports.useCallback(() => {
    if (!rateEditCategoryId) return;
    const cat = categories.find((c) => c.id === rateEditCategoryId);
    const slots = Math.max(1, cat?.maxGuests ?? 1);
    const toArr = (drafts) => Array.from({ length: slots }, (_, i) => {
      const n = Number(String(drafts[i] ?? "").replace(/[^0-9.]/g, ""));
      return Number.isFinite(n) ? Math.max(0, n) : 0;
    });
    setCategoryRate(rateEditCategoryId, { resident: toArr(rateDraft), nonResident: toArr(rateDraftNon) });
    toast.success(lang === "ru" ? `Цена сохранена` : `Price saved`);
    setRateEditCategoryId(null);
    setRateDraft([]);
    setRateDraftNon([]);
  }, [lang, rateEditCategoryId, rateDraft, rateDraftNon, setCategoryRate, categories]);
  const startDate = reactExports.useMemo(() => subDays(today, pastDays), [today, pastDays]);
  const totalDays = pastDays + futureDays;
  const dates = reactExports.useMemo(() => Array.from({ length: totalDays }, (_, i) => addDays(startDate, i)), [startDate, totalDays]);
  const todayIdx = pastDays;
  const totalWidth = totalDays * DAY_WIDTH;
  const scrollRef = reactExports.useRef(null);
  const didInitialScroll = reactExports.useRef(false);
  const scrollRafRef = reactExports.useRef(null);
  const lastScrollLeftRef = reactExports.useRef(null);
  const isPrependingPastRef = reactExports.useRef(false);
  const pendingPastPrependDaysRef = reactExports.useRef(0);
  const buckets = reactExports.useMemo(
    () => bucketBookings(bookings, startDate, totalDays, today),
    [bookings, startDate, totalDays, today]
  );
  reactExports.useMemo(() => {
    const result = /* @__PURE__ */ new Map();
    const totalHalves = totalDays * 2;
    if (totalHalves <= 0) return result;
    const sd = dates[0];
    if (!sd) return result;
    const halfSpan = (b) => {
      const startDay = differenceInCalendarDays(parseISO(b.checkIn), sd);
      const endDay = differenceInCalendarDays(parseISO(b.checkOut), sd);
      const startHalf = 2 * startDay + 1 - (b.checkInHalfDay ? 1 : 0);
      const endHalf = 2 * endDay + 1 + (b.checkOutHalfDay ? 1 : 0);
      return [startHalf, endHalf];
    };
    for (const room of rooms) {
      const cat = categories.find((c) => c.id === room.category);
      const personCount = PERSON_COUNTS[room.category] ?? cat?.maxGuests ?? 0;
      const totalBeds = personCount + (extraPersons[room.number] || 0);
      if (totalBeds < 1) continue;
      const occBeds = Array.from({ length: totalHalves }, () => /* @__PURE__ */ new Set());
      const occBks = Array.from({ length: totalHalves }, () => /* @__PURE__ */ new Set());
      for (const b of bookings) {
        if (b.roomNumber !== room.number) continue;
        const span = halfSpan(b);
        if (!span) continue;
        const beds = b.status === "maintenance" || b.bedIndex === void 0 ? Array.from({ length: totalBeds }, (_, i) => i) : [b.bedIndex, ...b.additionalBeds ?? []];
        const s = Math.max(0, span[0]);
        const e = Math.min(totalHalves, span[1]);
        for (let i = s; i < e; i++) {
          for (const bed of beds) occBeds[i].add(bed);
          occBks[i].add(b.id);
        }
      }
      const ranges = [];
      let cur = null;
      for (let i = 0; i < totalHalves; i++) {
        if (occBeds[i].size >= totalBeds) {
          if (!cur) cur = { startHalf: i, endHalf: i + 1, ids: /* @__PURE__ */ new Set() };
          else cur.endHalf = i + 1;
          for (const id of occBks[i]) cur.ids.add(id);
        } else if (cur) {
          ranges.push({ startHalf: cur.startHalf, endHalf: cur.endHalf, bookingIds: [...cur.ids] });
          cur = null;
        }
      }
      if (cur) ranges.push({ startHalf: cur.startHalf, endHalf: cur.endHalf, bookingIds: [...cur.ids] });
      if (ranges.length) result.set(room.number, ranges);
    }
    return result;
  }, [bookings, rooms, categories, extraPersons, totalDays, dates]);
  const [openFullKey, setOpenFullKey] = reactExports.useState(null);
  const activeGlowNodesRef = reactExports.useRef(/* @__PURE__ */ new Set());
  const activeFocusDoneRef = reactExports.useRef(null);
  const clearAllGlows = reactExports.useCallback(() => {
    activeGlowNodesRef.current.forEach((node) => {
      node.classList.remove("booking-focus-glow");
      const prev = node._focusTimer;
      if (prev) window.clearTimeout(prev);
      node._focusTimer = void 0;
    });
    activeGlowNodesRef.current.clear();
    const finishFocus = activeFocusDoneRef.current;
    activeFocusDoneRef.current = null;
    finishFocus?.();
  }, []);
  const registerGlow = reactExports.useCallback((node, durationMs, onDone) => {
    node.classList.remove("booking-focus-glow");
    node.offsetWidth;
    node.classList.add("booking-focus-glow");
    activeGlowNodesRef.current.add(node);
    if (onDone) activeFocusDoneRef.current = onDone;
    const prev = node._focusTimer;
    if (prev) window.clearTimeout(prev);
    node._focusTimer = window.setTimeout(() => {
      node.classList.remove("booking-focus-glow");
      activeGlowNodesRef.current.delete(node);
      if (onDone && activeFocusDoneRef.current === onDone) {
        activeFocusDoneRef.current = null;
      }
      onDone?.();
    }, durationMs);
  }, []);
  reactExports.useEffect(() => {
    const cancel = () => {
      if (activeGlowNodesRef.current.size > 0) clearAllGlows();
    };
    const stopExplicit = () => clearAllGlows();
    window.addEventListener("mousedown", cancel, true);
    window.addEventListener("touchstart", cancel, true);
    window.addEventListener("hotel:stop-focus-glow", stopExplicit);
    return () => {
      window.removeEventListener("mousedown", cancel, true);
      window.removeEventListener("touchstart", cancel, true);
      window.removeEventListener("hotel:stop-focus-glow", stopExplicit);
    };
  }, [clearAllGlows]);
  reactExports.useCallback((ids) => {
    const root = scrollRef.current;
    if (!root) return;
    for (const id of ids) {
      const nodes = root.querySelectorAll(`[data-booking-id="${CSS.escape(id)}"]`);
      nodes.forEach((node) => registerGlow(node, 3500));
    }
  }, [registerGlow]);
  const categoryStatusCounts = reactExports.useMemo(() => {
    const roomCat = /* @__PURE__ */ new Map();
    for (const r of rooms) roomCat.set(r.number, r.category);
    const out = {};
    for (const c of categories) {
      out[c.id] = { confirmed: 0, pending: 0, booked: 0, "in-house": 0, "checked-out": 0, maintenance: 0, dirty: 0, cleaned: 0 };
    }
    for (const b of bookings) {
      const cat = roomCat.get(b.roomNumber);
      if (cat && out[cat]) out[cat][b.status] = (out[cat][b.status] ?? 0) + 1;
    }
    return out;
  }, [bookings, rooms, categories]);
  const isPanningRef = reactExports.useRef(false);
  const isAppendingRef = reactExports.useRef(false);
  const handleHeaderMouseDown = reactExports.useCallback((e) => {
    const el = scrollRef.current;
    if (!el) return;
    if (e.button !== 0) return;
    e.preventDefault();
    const startX = e.clientX;
    const startScroll = el.scrollLeft;
    let raf = null;
    let pendingX = startX;
    let hasDragged = false;
    const apply = () => {
      raf = null;
      const delta = pendingX - startX;
      if (!hasDragged && Math.abs(delta) < 4) return;
      if (!hasDragged) {
        hasDragged = true;
        el.classList.add("is-panning");
        isPanningRef.current = true;
      }
      const max = el.scrollWidth - el.clientWidth;
      const next = startScroll - delta;
      if (next >= max - EDGE_THRESHOLD && !isAppendingRef.current) {
        isAppendingRef.current = true;
        setFutureDays((prev) => prev + LOAD_MORE_DAYS);
      }
      const clamped = Math.max(0, Math.min(max, next));
      el.scrollLeft = clamped;
      lastScrollLeftRef.current = clamped;
    };
    const move = (ev) => {
      pendingX = ev.clientX;
      if (raf == null) raf = requestAnimationFrame(apply);
    };
    const up = () => {
      if (raf != null) cancelAnimationFrame(raf);
      el.classList.remove("is-panning");
      isPanningRef.current = false;
      lastScrollLeftRef.current = el.scrollLeft;
      if (el.scrollLeft <= EDGE_THRESHOLD && !isPrependingPastRef.current) {
        isPrependingPastRef.current = true;
        pendingPastPrependDaysRef.current += LOAD_MORE_DAYS;
        setPastDays((prev) => prev + LOAD_MORE_DAYS);
      }
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseup", up);
    };
    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mouseup", up);
  }, []);
  const computeTodayScroll = reactExports.useCallback((el) => {
    const visibleWidth = Math.max(0, el.clientWidth - LABEL_WIDTH);
    const max = Math.max(0, el.scrollWidth - el.clientWidth);
    const target = isAdmin ? todayIdx * DAY_WIDTH - ADMIN_LEFT_OFFSET_DAYS * DAY_WIDTH : todayIdx * DAY_WIDTH - visibleWidth / 2 + DAY_WIDTH / 2;
    return Math.max(0, Math.min(max, target));
  }, [todayIdx, LABEL_WIDTH, isAdmin]);
  const scrollToToday = reactExports.useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const next = computeTodayScroll(el);
    lastScrollLeftRef.current = next;
    el.scrollTo({ left: next, behavior: "smooth" });
  }, [computeTodayScroll]);
  reactExports.useEffect(() => {
    if (didInitialScroll.current) return;
    const el = scrollRef.current;
    if (el) {
      const initialLeft = computeTodayScroll(el);
      el.scrollLeft = initialLeft;
      lastScrollLeftRef.current = initialLeft;
      didInitialScroll.current = true;
    }
  }, [computeTodayScroll]);
  reactExports.useEffect(() => {
    isAppendingRef.current = false;
  }, [futureDays]);
  reactExports.useEffect(() => {
    const addedDays = pendingPastPrependDaysRef.current;
    if (addedDays <= 0) return;
    pendingPastPrependDaysRef.current = 0;
    isPrependingPastRef.current = false;
    const el = scrollRef.current;
    if (!el) return;
    const next = el.scrollLeft + addedDays * DAY_WIDTH;
    el.scrollLeft = next;
    lastScrollLeftRef.current = next;
  }, [pastDays]);
  reactExports.useEffect(() => {
    if (!focusBookingId) return;
    const targetBooking = bookings.find((b) => b.id === focusBookingId);
    if (!targetBooking) return;
    const room = rooms.find((r) => r.number === targetBooking.roomNumber);
    if (room && collapsedCategories[room.category]) {
      setCollapsedCategories((prev) => ({ ...prev, [room.category]: false }));
    }
    if (targetBooking.bedIndex !== void 0 && !expandedRooms[targetBooking.roomNumber]) {
      setExpandedRooms((prev) => ({ ...prev, [targetBooking.roomNumber]: true }));
    }
    const diff = differenceInCalendarDays(today, parseISO(targetBooking.checkIn));
    if (diff > pastDays - 3) {
      setPastDays((prev) => Math.max(prev, diff + LOAD_MORE_DAYS));
      return;
    }
    let raf2 = 0;
    const raf = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(() => {
        const el = scrollRef.current;
        if (!el) return;
        const node = el.querySelector(`[data-booking-id="${CSS.escape(focusBookingId)}"]`);
        if (!node) return;
        const elRect = el.getBoundingClientRect();
        const nodeRect = node.getBoundingClientRect();
        const visibleWidth = Math.max(1, el.clientWidth - LABEL_WIDTH);
        const EDGE_PAD_X = 32;
        const maxScrollLeft = Math.max(0, el.scrollWidth - el.clientWidth);
        const nodeLeftInContent = nodeRect.left - elRect.left + el.scrollLeft;
        const nodeWidth = nodeRect.width;
        let targetLeft;
        if (nodeWidth + EDGE_PAD_X * 2 >= visibleWidth) {
          targetLeft = nodeLeftInContent - LABEL_WIDTH - EDGE_PAD_X;
        } else {
          targetLeft = nodeLeftInContent - LABEL_WIDTH - (visibleWidth - nodeWidth) / 2;
        }
        targetLeft = Math.max(0, Math.min(maxScrollLeft, targetLeft));
        const HEADER_H = 44;
        const BOTTOM_BAR_H = 24;
        const EDGE_PAD_Y = 12;
        const usableTop = HEADER_H + EDGE_PAD_Y;
        const usableBottom = el.clientHeight - BOTTOM_BAR_H - EDGE_PAD_Y;
        const usableH = Math.max(1, usableBottom - usableTop);
        const nodeTopInScroller = nodeRect.top - elRect.top;
        const nodeH = nodeRect.height;
        let verticalDelta;
        if (nodeH >= usableH) {
          verticalDelta = nodeTopInScroller - usableTop;
        } else {
          verticalDelta = nodeTopInScroller - (usableTop + (usableH - nodeH) / 2);
        }
        const maxScrollTop = Math.max(0, el.scrollHeight - el.clientHeight);
        const targetTop = Math.max(0, Math.min(maxScrollTop, el.scrollTop + verticalDelta));
        el.scrollTo({ left: targetLeft, top: targetTop, behavior: "smooth" });
        registerGlow(node, 3500, () => onFocusConsumed?.());
      });
    });
    return () => {
      cancelAnimationFrame(raf);
      if (raf2) cancelAnimationFrame(raf2);
    };
  }, [focusBookingId, bookings, rooms, pastDays, today, collapsedCategories, expandedRooms, onFocusConsumed, LABEL_WIDTH, registerGlow]);
  const handleScroll = reactExports.useCallback(() => {
    if (scrollRafRef.current != null) return;
    scrollRafRef.current = requestAnimationFrame(() => {
      scrollRafRef.current = null;
      const el = scrollRef.current;
      if (!el) return;
      lastScrollLeftRef.current = el.scrollLeft;
      if (isPanningRef.current) return;
      if (el.scrollLeft + el.clientWidth >= el.scrollWidth - EDGE_THRESHOLD) {
        setFutureDays((prev) => prev + LOAD_MORE_DAYS);
      }
      if (el.scrollLeft <= EDGE_THRESHOLD && !isPrependingPastRef.current) {
        isPrependingPastRef.current = true;
        pendingPastPrependDaysRef.current += LOAD_MORE_DAYS;
        setPastDays((prev) => prev + LOAD_MORE_DAYS);
      }
    });
  }, []);
  const handleTimelineScrollbarDragState = reactExports.useCallback((active) => {
    const el = scrollRef.current;
    isPanningRef.current = active;
    if (el) {
      el.classList.toggle("is-panning", active);
      if (!active) lastScrollLeftRef.current = el.scrollLeft;
    }
  }, []);
  const handleTimelineScrollbarEdgeRequest = reactExports.useCallback((direction) => {
    const el = scrollRef.current;
    if (!el) return;
    if (direction === "future") {
      if (isAppendingRef.current) return;
      isAppendingRef.current = true;
      setFutureDays((prev) => prev + LOAD_MORE_DAYS);
      return;
    }
    if (isPrependingPastRef.current) return;
    isPrependingPastRef.current = true;
    pendingPastPrependDaysRef.current += LOAD_MORE_DAYS;
    setPastDays((prev) => prev + LOAD_MORE_DAYS);
  }, []);
  const preventNativeMiddleScroll = reactExports.useCallback((e) => {
    if (e.button === 1) {
      e.preventDefault();
    }
  }, []);
  const dragRef = reactExports.useRef(null);
  const overlayElsRef = reactExports.useRef(/* @__PURE__ */ new Map());
  const isDraggingRef = reactExports.useRef(false);
  const dragRafRef = reactExports.useRef(null);
  const registerOverlay = reactExports.useCallback((key, el) => {
    if (el) overlayElsRef.current.set(key, el);
    else overlayElsRef.current.delete(key);
  }, []);
  const bookingHalfSpan = reactExports.useCallback((b) => {
    const sd = datesRef.current[0];
    if (!sd) return null;
    const startDay = differenceInCalendarDays(parseISO(b.checkIn), sd);
    const endDay = differenceInCalendarDays(parseISO(b.checkOut), sd);
    const startHalf = 2 * startDay + 1 - (b.checkInHalfDay ? 1 : 0);
    const endHalf = 2 * endDay + 1 + (b.checkOutHalfDay ? 1 : 0);
    return [startHalf, endHalf];
  }, []);
  const rowsConflict = reactExports.useCallback((a, b) => {
    if (a.roomNumber !== b.roomNumber) return false;
    const aRoomWide = a.status === "maintenance" || a.bedIndex === void 0;
    const bRoomWide = b.status === "maintenance" || b.bedIndex === void 0;
    if (aRoomWide || bRoomWide) return true;
    const aBeds = /* @__PURE__ */ new Set([a.bedIndex, ...a.additionalBeds ?? []]);
    const bBeds = /* @__PURE__ */ new Set([b.bedIndex, ...b.additionalBeds ?? []]);
    for (const x of aBeds) if (bBeds.has(x)) return true;
    return false;
  }, []);
  const hasBookingConflict = reactExports.useCallback((candidate, startHalf, endHalf, excludeId) => {
    return conflictBookingsRef.current.some((b) => {
      if (b.id === excludeId || !rowsConflict(candidate, b)) return false;
      const span = bookingHalfSpan(b);
      return !!span && span[0] < endHalf && span[1] > startHalf;
    });
  }, [bookingHalfSpan, rowsConflict]);
  const showOverlapError = reactExports.useCallback(() => {
    toast.error(t("overlapError"));
  }, [t]);
  const computeDragOverlap = reactExports.useCallback(() => {
    const d = dragRef.current;
    if (!d) return false;
    const startHalf = Math.min(d.startHalf, d.endHalf);
    const endHalfRaw = Math.max(d.startHalf, d.endHalf);
    const startDayIdx = Math.floor(startHalf / 2);
    let endDayIdx = Math.floor(endHalfRaw / 2);
    if (endDayIdx <= startDayIdx) endDayIdx = startDayIdx + 1;
    const newStartHalf = 2 * startDayIdx + 1;
    const newEndHalf = 2 * endDayIdx + 1;
    return hasBookingConflict({ roomNumber: d.roomNumber, bedIndex: d.bedIndex, status: "confirmed" }, newStartHalf, newEndHalf);
  }, [hasBookingConflict]);
  const paintOverlay = reactExports.useCallback(() => {
    const d = dragRef.current;
    if (!d) return;
    const el = overlayElsRef.current.get(d.roomKey);
    if (!el) return;
    const minH = Math.min(d.startHalf, d.endHalf);
    const maxH = Math.max(d.startHalf, d.endHalf);
    const left = minH * HALF_COL_WIDTH;
    const width = (maxH - minH + 1) * HALF_COL_WIDTH;
    el.style.display = "block";
    el.style.transform = `translate3d(${left}px, 0, 0)`;
    el.style.width = `${width}px`;
    el.style.height = `${d.height}px`;
    el.dataset.invalid = d.invalid ? "true" : "false";
  }, []);
  const hideAllOverlays = reactExports.useCallback(() => {
    const d = dragRef.current;
    if (d) {
      const el = overlayElsRef.current.get(d.roomKey);
      if (el) {
        el.style.display = "none";
        el.dataset.invalid = "false";
      }
    }
  }, []);
  const [dialogOpen, setDialogOpen] = reactExports.useState(false);
  const [selectedRoom, setSelectedRoom] = reactExports.useState(101);
  const [selectedBedIndex, setSelectedBedIndex] = reactExports.useState(void 0);
  const [selectedPrefillName, setSelectedPrefillName] = reactExports.useState("");
  const [selectedCheckIn, setSelectedCheckIn] = reactExports.useState(format(today, "yyyy-MM-dd"));
  const [selectedCheckOut, setSelectedCheckOut] = reactExports.useState(format(addDays(today, 2), "yyyy-MM-dd"));
  const [selectedEarlyCheckin, setSelectedEarlyCheckin] = reactExports.useState(false);
  const [selectedLateCheckout, setSelectedLateCheckout] = reactExports.useState(false);
  const [editBooking, setEditBooking] = reactExports.useState(null);
  const [changeRoomMode, setChangeRoomMode] = reactExports.useState(null);
  const [changeHover, setChangeHover] = reactExports.useState(null);
  const prevCollapsedRef = reactExports.useRef(null);
  const changeRoomModeRef = reactExports.useRef(null);
  changeRoomModeRef.current = changeRoomMode;
  const datesRef = reactExports.useRef(dates);
  datesRef.current = dates;
  const totalDaysRef = reactExports.useRef(totalDays);
  totalDaysRef.current = totalDays;
  const personNamesRef = reactExports.useRef(personNames);
  personNamesRef.current = personNames;
  const bookingsRef = reactExports.useRef(bookings);
  bookingsRef.current = bookings;
  const conflictBookingsRef = reactExports.useRef(conflictBookings);
  conflictBookingsRef.current = conflictBookings;
  const dragTooltipRef = reactExports.useRef(null);
  const ensureDragTooltip = reactExports.useCallback(() => {
    if (dragTooltipRef.current) return dragTooltipRef.current;
    const el = document.createElement("div");
    el.className = "drag-days-tooltip";
    el.style.cssText = "position:fixed;top:0;left:0;pointer-events:none;z-index:9999;padding:4px 10px;border-radius:9999px;background:hsl(222 47% 11% / 0.92);color:#fff;font-size:11px;font-weight:700;letter-spacing:0.02em;box-shadow:0 4px 14px rgba(0,0,0,.25);transform:translate3d(0,0,0);transition:opacity .12s ease;opacity:0;white-space:nowrap;";
    document.body.appendChild(el);
    dragTooltipRef.current = el;
    return el;
  }, []);
  const hideDragTooltip = reactExports.useCallback(() => {
    const el = dragTooltipRef.current;
    if (el) el.style.opacity = "0";
  }, []);
  const paintDragTooltip = reactExports.useCallback((clientX, clientY) => {
    const d = dragRef.current;
    if (!d) return;
    const el = ensureDragTooltip();
    const minH = Math.min(d.startHalf, d.endHalf);
    const maxH = Math.max(d.startHalf, d.endHalf);
    const days = (maxH - minH + 1) / 2;
    const label = days === 1 ? lang === "ru" ? "1 ночь" : lang === "uz" ? "1 tun" : "1 night" : lang === "ru" ? `${days} ноч.` : lang === "uz" ? `${days} tun` : `${days} nights`;
    el.textContent = label;
    el.style.transform = `translate3d(${clientX + 14}px, ${clientY - 28}px, 0)`;
    el.style.opacity = "1";
    if (d.invalid) {
      el.style.background = "hsl(0 72% 45% / 0.95)";
    } else {
      el.style.background = "hsl(222 47% 11% / 0.92)";
    }
  }, [ensureDragTooltip, lang]);
  reactExports.useEffect(() => {
    return () => {
      if (dragTooltipRef.current) {
        dragTooltipRef.current.remove();
        dragTooltipRef.current = null;
      }
    };
  }, []);
  const handleCellMouseDown = reactExports.useCallback((roomNumber, bedIndex, height, e) => {
    if (e.button !== 0) return;
    e.preventDefault();
    if (changeRoomModeRef.current) {
      e.stopPropagation();
      hideAllOverlays();
      hideDragTooltip();
      return;
    }
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const halfIdx = Math.floor(x / HALF_COL_WIDTH);
    const roomKey = bedIndex === void 0 ? `${roomNumber}` : `${roomNumber}:${bedIndex}`;
    isDraggingRef.current = true;
    dragRef.current = { roomKey, roomNumber, bedIndex, height, startHalf: halfIdx, endHalf: halfIdx, invalid: false };
    paintOverlay();
    paintDragTooltip(e.clientX, e.clientY);
  }, [paintOverlay, paintDragTooltip, hideAllOverlays, hideDragTooltip]);
  reactExports.useEffect(() => {
    const onMove = (e) => {
      if (!isDraggingRef.current || !dragRef.current) return;
      if ((e.buttons & 1) === 0) {
        isDraggingRef.current = false;
        dragRef.current = null;
        hideAllOverlays();
        hideDragTooltip();
        return;
      }
      const el = overlayElsRef.current.get(dragRef.current.roomKey);
      if (!el || !el.parentElement) return;
      const rect = el.parentElement.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const halfIdx = Math.max(0, Math.min(Math.floor(x / HALF_COL_WIDTH), totalDaysRef.current * 2 - 1));
      if (dragRef.current.endHalf === halfIdx) {
        paintDragTooltip(e.clientX, e.clientY);
        return;
      }
      dragRef.current.endHalf = halfIdx;
      dragRef.current.invalid = computeDragOverlap();
      if (dragRafRef.current == null) {
        dragRafRef.current = requestAnimationFrame(() => {
          dragRafRef.current = null;
          paintOverlay();
        });
      }
      paintDragTooltip(e.clientX, e.clientY);
    };
    const onUp = () => {
      if (!isDraggingRef.current || !dragRef.current) {
        isDraggingRef.current = false;
        hideDragTooltip();
        return;
      }
      const d = dragRef.current;
      isDraggingRef.current = false;
      hideAllOverlays();
      hideDragTooltip();
      const startHalf = Math.min(d.startHalf, d.endHalf);
      const endHalf = Math.max(d.startHalf, d.endHalf);
      const startDayIdx = Math.floor(startHalf / 2);
      let endDayIdx = Math.floor(endHalf / 2);
      if (endDayIdx <= startDayIdx) endDayIdx = startDayIdx + 1;
      const dts = datesRef.current;
      const checkInDate = dts[startDayIdx];
      const checkOutDate = dts[endDayIdx] ?? addDays(dts[startDayIdx], 1);
      dragRef.current = null;
      if (!isSuperuser && !isManager && isBefore(checkInDate, today)) {
        toast.error(t("pastBookingError"));
        return;
      }
      const newStartHalf = 2 * startDayIdx + 1;
      const newEndHalf = 2 * endDayIdx + 1;
      const overlaps = hasBookingConflict({ roomNumber: d.roomNumber, bedIndex: d.bedIndex, status: "confirmed" }, newStartHalf, newEndHalf);
      if (overlaps) {
        showOverlapError();
        return;
      }
      setSelectedRoom(d.roomNumber);
      setSelectedBedIndex(d.bedIndex);
      setSelectedPrefillName(
        d.bedIndex !== void 0 ? personNamesRef.current[d.roomNumber]?.[d.bedIndex] || "" : ""
      );
      setSelectedCheckIn(format(checkInDate, "yyyy-MM-dd"));
      setSelectedCheckOut(format(checkOutDate, "yyyy-MM-dd"));
      setSelectedEarlyCheckin(false);
      setSelectedLateCheckout(false);
      setEditBooking(null);
      setDialogOpen(true);
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
      if (dragRafRef.current != null) cancelAnimationFrame(dragRafRef.current);
      dragRafRef.current = null;
    };
  }, [today, t, paintOverlay, hideAllOverlays, computeDragOverlap, hasBookingConflict, showOverlapError, lang, paintDragTooltip, hideDragTooltip, isSuperuser, isManager]);
  const [moveGhost, setMoveGhost] = reactExports.useState(null);
  const [moveConfirm, setMoveConfirm] = reactExports.useState(null);
  const moveGhostRef = reactExports.useRef(null);
  moveGhostRef.current = moveGhost;
  const moveActive = moveGhost != null;
  const handleBookingMoveStart = reactExports.useCallback((booking, e) => {
    if (!isSuperuser && !isManager) {
      if (isBefore(parseISO(booking.checkOut), today)) return;
    }
    const target = e.currentTarget;
    const rect = target.getBoundingClientRect();
    const ghost = {
      booking,
      width: rect.width,
      height: rect.height,
      x: e.clientX,
      y: e.clientY,
      offsetX: e.clientX - rect.left,
      offsetY: e.clientY - rect.top,
      targetRoom: null,
      targetBed: void 0,
      targetCheckIn: null,
      targetCheckOut: null,
      invalid: false,
      snapLeft: null,
      snapTop: null,
      snapWidth: null,
      snapHeight: null
    };
    setMoveGhost(ghost);
  }, [today, isSuperuser]);
  const ghostElRef = reactExports.useRef(null);
  const ghostInvalidRef = reactExports.useRef(false);
  const ghostLabelRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    if (!moveActive) return;
    const original = moveGhostRef.current?.booking;
    if (!original) return;
    const nights = Math.max(1, differenceInCalendarDays(parseISO(original.checkOut), parseISO(original.checkIn)));
    let lastX = moveGhostRef.current?.x ?? 0;
    let lastY = moveGhostRef.current?.y ?? 0;
    let lastAppliedKey = "";
    let dirty = true;
    const applyGhostTransform = (left, top, width, height, invalid) => {
      const el = ghostElRef.current;
      if (!el) return;
      el.style.width = `${width}px`;
      el.style.height = `${height}px`;
      el.style.transform = `translate3d(${left}px, ${top}px, 0) scale(1.04) rotate(-0.6deg)`;
      if (invalid !== ghostInvalidRef.current) {
        ghostInvalidRef.current = invalid;
        el.dataset.invalid = invalid ? "1" : "0";
      }
    };
    const computeAndApply = () => {
      const ghost = moveGhostRef.current;
      if (!ghost) return;
      const EDGE = 120;
      const MAX_SPEED = 60;
      const ramp = (dist) => {
        const f = Math.min(1, Math.max(0, dist) / EDGE);
        return Math.ceil(f * (2 - f) * MAX_SPEED);
      };
      const scrollEl = scrollRef.current;
      if (scrollEl) {
        const r = scrollEl.getBoundingClientRect();
        let dx = 0;
        if (lastX < r.left + EDGE) dx = -ramp(r.left + EDGE - lastX);
        else if (lastX > r.right - EDGE) dx = ramp(lastX - (r.right - EDGE));
        if (dx) {
          scrollEl.scrollLeft += dx;
          dirty = true;
        }
        if (scrollEl.scrollHeight > scrollEl.clientHeight) {
          let dy = 0;
          if (lastY < r.top + EDGE) dy = -ramp(r.top + EDGE - lastY);
          else if (lastY > r.bottom - EDGE) dy = ramp(lastY - (r.bottom - EDGE));
          if (dy) {
            scrollEl.scrollTop += dy;
            dirty = true;
          }
        }
      }
      const vh = window.innerHeight;
      let wy = 0;
      if (lastY < EDGE) wy = -ramp(EDGE - lastY);
      else if (lastY > vh - EDGE) wy = ramp(lastY - (vh - EDGE));
      if (wy) {
        const before = window.scrollY;
        window.scrollBy(0, wy);
        if (window.scrollY !== before) dirty = true;
      }
      if (!dirty) return;
      dirty = false;
      const el = document.elementFromPoint(lastX, lastY);
      let row = null;
      let cur = el;
      while (cur) {
        if (cur.dataset && cur.dataset.gridRow === "true") {
          row = cur;
          break;
        }
        cur = cur.parentElement;
      }
      let targetRoom = null;
      let targetBed = void 0;
      let targetCheckIn = null;
      let targetCheckOut = null;
      let invalid = false;
      let snapLeft = null;
      let snapTop = null;
      let snapWidth = null;
      let snapHeight = null;
      if (row) {
        const rRoom = Number(row.dataset.roomNumber);
        const bedRaw = row.dataset.bedIndex ?? "";
        const rBed = bedRaw === "" ? void 0 : Number(bedRaw);
        const rowRect = row.getBoundingClientRect();
        const dts = datesRef.current;
        let dayIdx;
        if (isAdmin) {
          dayIdx = Math.max(0, Math.min(
            totalDaysRef.current - 1,
            differenceInCalendarDays(parseISO(original.checkIn), dts[0])
          ));
        } else {
          const x = lastX - rowRect.left - ghost.offsetX + HALF_COL_WIDTH;
          dayIdx = Math.max(0, Math.min(totalDaysRef.current - 1, Math.round(x / DAY_WIDTH)));
        }
        const ci = dts[dayIdx];
        const co = addDays(ci, nights);
        targetRoom = rRoom;
        targetBed = rBed;
        targetCheckIn = format(ci, "yyyy-MM-dd");
        targetCheckOut = format(co, "yyyy-MM-dd");
        const datesUnchanged = targetCheckIn === original.checkIn && targetCheckOut === original.checkOut;
        if (!isSuperuser && !isManager && !datesUnchanged && isBefore(ci, today)) invalid = true;
        if (!invalid) {
          const sh = 2 * dayIdx + 1 - (original.checkInHalfDay ? 1 : 0);
          const eh = 2 * (dayIdx + nights) + 1 + (original.checkOutHalfDay ? 1 : 0);
          if (hasBookingConflict({ roomNumber: rRoom, bedIndex: rBed, status: original.status }, sh, eh, original.id)) {
            invalid = true;
          }
        }
        const earlyShift = original.checkInHalfDay ? HALF_COL_WIDTH : 0;
        const halfExtra = original.checkOutHalfDay ? HALF_COL_WIDTH : 0;
        snapLeft = rowRect.left + dayIdx * DAY_WIDTH + HALF_COL_WIDTH - earlyShift;
        snapTop = rowRect.top;
        snapWidth = nights * DAY_WIDTH + earlyShift + halfExtra;
        snapHeight = rowRect.height;
      }
      const left = snapLeft != null ? snapLeft : lastX - ghost.offsetX;
      const top = snapTop != null ? snapTop : lastY - ghost.offsetY;
      const w = snapWidth != null ? snapWidth : ghost.width;
      const h = snapHeight != null ? snapHeight : ghost.height;
      applyGhostTransform(left, top, w, h, invalid);
      const labelEl = ghostLabelRef.current;
      if (labelEl) {
        const txt = invalid ? lang === "ru" ? "✕ Невозможно разместить здесь" : "✕ Cannot drop here" : `↕ ${(original.guestName || "").trim() || (lang === "ru" ? "Бронирование" : "Booking")}${targetCheckIn ? `   →  ${format(parseISO(targetCheckIn), "dd MMM")}${targetRoom != null ? ` · #${targetRoom}` : ""}` : ""}`;
        if (labelEl.textContent !== txt) labelEl.textContent = txt;
      }
      const g = moveGhostRef.current;
      if (g) {
        g.targetRoom = targetRoom;
        g.targetBed = targetBed;
        g.targetCheckIn = targetCheckIn;
        g.targetCheckOut = targetCheckOut;
        g.snapLeft = snapLeft;
        g.snapTop = snapTop;
        g.snapWidth = snapWidth;
        g.snapHeight = snapHeight;
        g.invalid = invalid;
      }
      const invalidKey = invalid ? "1" : "0";
      if (invalidKey !== lastAppliedKey) {
        lastAppliedKey = invalidKey;
        setMoveGhost((prev) => prev ? { ...prev, invalid } : prev);
      }
    };
    let pumpId = 0;
    const pump = () => {
      computeAndApply();
      pumpId = requestAnimationFrame(pump);
    };
    pumpId = requestAnimationFrame(pump);
    const onMove = (e) => {
      if ((e.buttons & 4) === 0) {
        setMoveGhost(null);
        return;
      }
      if (e.clientX !== lastX || e.clientY !== lastY) {
        lastX = e.clientX;
        lastY = e.clientY;
        dirty = true;
      }
    };
    const onScroll = () => {
      dirty = true;
    };
    const onUp = (e) => {
      if (e.button !== 1) return;
      const g = moveGhostRef.current;
      setMoveGhost(null);
      if (!g || g.targetRoom == null || !g.targetCheckIn || !g.targetCheckOut) return;
      if (g.targetRoom === original.roomNumber && g.targetBed === original.bedIndex && g.targetCheckIn === original.checkIn && g.targetCheckOut === original.checkOut) return;
      if (g.invalid) {
        toast.error(t("overlapError"));
        return;
      }
      moveResolvedRef.current = false;
      setMoveConfirm({
        booking: original,
        targetRoom: g.targetRoom,
        targetBed: g.targetBed,
        targetCheckIn: g.targetCheckIn,
        targetCheckOut: g.targetCheckOut
      });
    };
    const onKey = (e) => {
      if (e.key === "Escape") setMoveGhost(null);
    };
    const onCancel = () => setMoveGhost(null);
    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseup", onUp);
    window.addEventListener("keydown", onKey);
    window.addEventListener("blur", onCancel);
    window.addEventListener("scroll", onScroll, { passive: true, capture: true });
    document.addEventListener("mouseleave", onCancel);
    return () => {
      if (pumpId) cancelAnimationFrame(pumpId);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("blur", onCancel);
      window.removeEventListener("scroll", onScroll, true);
      document.removeEventListener("mouseleave", onCancel);
    };
  }, [moveActive, today, t, hasBookingConflict, lang, isAdmin, isSuperuser]);
  const moveResolvedRef = reactExports.useRef(false);
  const confirmMove = reactExports.useCallback(() => {
    if (!moveConfirm) return;
    const { booking, targetRoom, targetBed, targetCheckIn, targetCheckOut } = moveConfirm;
    const fromRoom = rooms.find((r) => r.number === booking.roomNumber);
    const toRoom = rooms.find((r) => r.number === targetRoom);
    const isCategoryChange = !!(fromRoom && toRoom && fromRoom.category !== toRoom.category);
    const todayIso = format(/* @__PURE__ */ new Date(), "yyyy-MM-dd");
    const canSplit = isCategoryChange && booking.status === "in-house" && booking.checkIn < todayIso && todayIso < booking.checkOut;
    if (canSplit && toRoom && fromRoom) {
      const originalSpan = bookingHalfSpan({ ...booking, roomNumber: targetRoom, bedIndex: targetBed, additionalBeds: void 0 });
      if (originalSpan && hasBookingConflict({ roomNumber: targetRoom, bedIndex: targetBed, status: booking.status }, originalSpan[0], originalSpan[1], booking.id)) {
        toast.error(t("overlapError"));
        moveResolvedRef.current = true;
        setMoveConfirm(null);
        return;
      }
      const segments = splitBookingAt({
        booking,
        splitDate: computeSplitDateNow(booking),
        newRoomNumber: targetRoom,
        newCategoryId: toRoom.category,
        oldCategoryId: fromRoom.category,
        residency: booking.residency ?? "resident",
        categoryRates
      });
      if (segments) {
        const total = sumSegments(segments);
        onUpdateBooking(booking.id, {
          roomNumber: targetRoom,
          bedIndex: targetBed,
          additionalBeds: void 0,
          checkIn: booking.checkIn,
          checkOut: booking.checkOut,
          segments,
          price: total,
          paymentAmount: total
        });
        toast.success(lang === "ru" ? `Категория изменена · ${segments.length} сегмента, итого ${total.toLocaleString("ru-RU")} сум` : `Category changed · ${segments.length} legs, total ${total.toLocaleString("en-US")} UZS`);
        moveResolvedRef.current = true;
        setMoveConfirm(null);
        return;
      }
    }
    onUpdateBooking(booking.id, {
      roomNumber: targetRoom,
      bedIndex: targetBed,
      checkIn: targetCheckIn,
      checkOut: targetCheckOut
    });
    toast.success(lang === "ru" ? "Бронирование перемещено" : "Booking moved");
    moveResolvedRef.current = true;
    setMoveConfirm(null);
  }, [moveConfirm, onUpdateBooking, lang, rooms, categoryRates, bookingHalfSpan, hasBookingConflict, t]);
  const cancelMove = reactExports.useCallback(() => {
    if (moveResolvedRef.current) {
      moveResolvedRef.current = false;
      setMoveConfirm(null);
      return;
    }
    moveResolvedRef.current = true;
    setMoveConfirm(null);
    toast.message(lang === "ru" ? "Перемещение отменено" : "Move cancelled");
  }, [lang]);
  const moveTargetRoomInfo = reactExports.useMemo(() => {
    if (!moveConfirm) return null;
    const r = rooms.find((x) => x.number === moveConfirm.targetRoom);
    const c = r ? categories.find((cc) => cc.id === r.category) : null;
    return { room: r, category: c };
  }, [moveConfirm, rooms, categories]);
  const handleBookingClick = reactExports.useCallback((booking) => {
    if (changeRoomModeRef.current && !isAdmin) {
      return;
    }
    setSelectedRoom(booking.roomNumber);
    setSelectedCheckIn(booking.checkIn);
    setSelectedCheckOut(booking.checkOut);
    setSelectedEarlyCheckin(!!booking.checkInHalfDay);
    setSelectedLateCheckout(!!booking.checkOutHalfDay);
    setEditBooking(booking);
    setDialogOpen(true);
  }, [isAdmin]);
  const handleResize = reactExports.useCallback((id, newCheckOut, halfDay) => {
    onUpdateBooking(id, { checkOut: newCheckOut, checkOutHalfDay: halfDay });
  }, [onUpdateBooking]);
  const handleResizeLeft = reactExports.useCallback((id, halfDay) => {
    onUpdateBooking(id, { checkInHalfDay: halfDay });
  }, [onUpdateBooking]);
  const canResize = reactExports.useCallback((id, newCheckOut, halfDay) => {
    const booking = bookingsRef.current.find((b) => b.id === id);
    if (!booking) return true;
    const span = bookingHalfSpan({ ...booking, checkOut: newCheckOut, checkOutHalfDay: halfDay });
    return !span || !hasBookingConflict(booking, span[0], span[1], id);
  }, [bookingHalfSpan, hasBookingConflict]);
  const canResizeLeft = reactExports.useCallback((id, halfDay) => {
    const booking = bookingsRef.current.find((b) => b.id === id);
    if (!booking) return true;
    const span = bookingHalfSpan({ ...booking, checkInHalfDay: halfDay });
    return !span || !hasBookingConflict(booking, span[0], span[1], id);
  }, [bookingHalfSpan, hasBookingConflict]);
  const handleAddBookingWrapped = reactExports.useCallback((b) => {
    if (b.status === "maintenance") {
      onAddBooking(b);
      return;
    }
    const room = rooms.find((r) => r.number === b.roomNumber);
    if (!room) {
      onAddBooking(b);
      return;
    }
    const cat = categories.find((c) => c.id === room.category);
    const personCount = PERSON_COUNTS[room.category] ?? cat?.maxGuests ?? 0;
    const totalBeds = personCount + (extraPersons[room.number] || 0);
    if (totalBeds < 1) {
      onAddBooking(b);
      return;
    }
    const guestsNeeded = Math.max(1, b.guestCount || 1);
    const span = bookingHalfSpan(b);
    if (!span) {
      onAddBooking(b);
      return;
    }
    const [sh, eh] = span;
    const order = [];
    if (b.bedIndex !== void 0 && b.bedIndex >= 0 && b.bedIndex < totalBeds) order.push(b.bedIndex);
    for (let i = 0; i < totalBeds; i++) if (i !== b.bedIndex) order.push(i);
    const free = [];
    for (const i of order) {
      if (!hasBookingConflict({ roomNumber: b.roomNumber, bedIndex: i, status: b.status }, sh, eh)) {
        free.push(i);
        if (free.length >= guestsNeeded) break;
      }
    }
    if (free.length < guestsNeeded) {
      toast.error(lang === "ru" ? `Недостаточно свободных мест для ${guestsNeeded} ${guestsNeeded === 1 ? "гостя" : "гостей"} на выбранные даты` : `Not enough available beds for ${guestsNeeded} guest${guestsNeeded === 1 ? "" : "s"} on these dates`);
      return;
    }
    const [primary, ...rest] = free;
    if (b.bedIndex !== void 0 && primary !== b.bedIndex) {
      toast.success(lang === "ru" ? `Гость размещён на свободном месте №${primary + 1}` : `Guest placed on available bed #${primary + 1}`);
    }
    onAddBooking({ ...b, bedIndex: primary, additionalBeds: rest.length ? rest : void 0 });
  }, [onAddBooking, rooms, categories, extraPersons, bookingHalfSpan, hasBookingConflict, lang]);
  const handleUpdateBookingWrapped = reactExports.useCallback((id, updates) => {
    const reEvalKeys = ["guestCount", "checkIn", "checkOut", "checkInHalfDay", "checkOutHalfDay", "roomNumber", "bedIndex", "status"];
    const needsReEval = reEvalKeys.some((k) => k in updates);
    if (!needsReEval) {
      onUpdateBooking(id, updates);
      return;
    }
    const current = bookingsRef.current.find((b) => b.id === id);
    if (!current) {
      onUpdateBooking(id, updates);
      return;
    }
    const merged = { ...current, ...updates };
    if (merged.bedIndex === void 0 || merged.status === "maintenance") {
      onUpdateBooking(id, updates);
      return;
    }
    const room = rooms.find((r) => r.number === merged.roomNumber);
    if (!room) {
      onUpdateBooking(id, updates);
      return;
    }
    const cat = categories.find((c) => c.id === room.category);
    const personCount = PERSON_COUNTS[room.category] ?? cat?.maxGuests ?? 0;
    const totalBeds = personCount + (extraPersons[merged.roomNumber] || 0);
    const guestsNeeded = Math.max(1, merged.guestCount || 1);
    if (guestsNeeded <= 1) {
      onUpdateBooking(id, { ...updates, additionalBeds: void 0 });
      return;
    }
    const span = bookingHalfSpan(merged);
    if (!span) {
      onUpdateBooking(id, updates);
      return;
    }
    const [sh, eh] = span;
    const extrasNeeded = guestsNeeded - 1;
    const extras = [];
    for (let i = 0; i < totalBeds && extras.length < extrasNeeded; i++) {
      if (i === merged.bedIndex) continue;
      if (!hasBookingConflict({ roomNumber: merged.roomNumber, bedIndex: i, status: merged.status }, sh, eh, id)) {
        extras.push(i);
      }
    }
    if (extras.length < extrasNeeded) {
      toast.error(lang === "ru" ? `Недостаточно свободных мест для ${guestsNeeded} гостей на выбранные даты` : `Not enough available beds for ${guestsNeeded} guests on these dates`);
      return;
    }
    onUpdateBooking(id, { ...updates, additionalBeds: extras.length ? extras : void 0 });
  }, [onUpdateBooking, rooms, categories, extraPersons, bookingHalfSpan, hasBookingConflict, lang]);
  const getDayLabel = reactExports.useCallback((d) => (lang === "ru" ? DAY_LABELS_RU : DAY_LABELS_UZ)[d.getDay()], [lang]);
  const isTdy = reactExports.useCallback((d) => isSameDay(d, today), [today]);
  const isPast = reactExports.useCallback((d) => isBefore(d, today) && !isSameDay(d, today), [today]);
  const isWeekend = (d) => d.getDay() === 0 || d.getDay() === 6;
  const monthStarts = reactExports.useMemo(() => {
    const s = /* @__PURE__ */ new Set();
    dates.forEach((d, i) => {
      if (d.getDate() === 1) s.add(i);
    });
    s.add(0);
    return s;
  }, [dates]);
  const changePreviewGeom = reactExports.useMemo(() => {
    if (!changeRoomMode) return null;
    const b = changeRoomMode.booking;
    const bIn = parseISO(b.checkIn);
    const bOut = parseISO(b.checkOut);
    const startDayOffset = differenceInCalendarDays(bIn, startDate);
    const endDayOffset = differenceInCalendarDays(bOut, startDate);
    const earlyShift = b.checkInHalfDay ? HALF_COL_WIDTH : 0;
    const startPx = Math.max(0, startDayOffset * DAY_WIDTH + HALF_COL_WIDTH - earlyShift);
    const halfExtra = b.checkOutHalfDay ? HALF_COL_WIDTH : 0;
    const endPx = endDayOffset * DAY_WIDTH + HALF_COL_WIDTH + halfExtra;
    return { leftPx: startPx, widthPx: Math.max(0, endPx - startPx) };
  }, [changeRoomMode, startDate]);
  reactExports.useEffect(() => {
    const handler = (ev) => {
      const detail = ev.detail;
      if (!detail?.bookingId || !detail?.categoryId) return;
      const b = bookingsRef.current.find((x) => x.id === detail.bookingId);
      if (!b) return;
      setChangeRoomMode({ booking: b, categoryId: detail.categoryId });
      toast.info(lang === "ru" ? "Наведите на свободную комнату и кликните" : lang === "uz" ? "Bo‘sh xonaga olib borib bosing" : "Hover a free room and click");
    };
    window.addEventListener("hotel:change-room", handler);
    return () => window.removeEventListener("hotel:change-room", handler);
  }, [lang]);
  reactExports.useEffect(() => {
    if (!changeRoomMode) {
      if (prevCollapsedRef.current !== null) {
        setCollapsedCategories(prevCollapsedRef.current);
        prevCollapsedRef.current = null;
      }
      setChangeHover(null);
      return;
    }
    const catId = changeRoomMode.categoryId;
    if (collapsedCategories[catId]) {
      if (prevCollapsedRef.current === null) {
        prevCollapsedRef.current = collapsedCategories;
      }
      setCollapsedCategories({ ...collapsedCategories, [catId]: false });
    }
    const raf = requestAnimationFrame(() => {
      const container = scrollRef.current;
      if (!container) return;
      const el = container.querySelector(`[data-category-id="${catId}"]`);
      if (!el) return;
      const top = el.offsetTop - 80;
      container.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
    });
    return () => cancelAnimationFrame(raf);
  }, [changeRoomMode, isAdmin]);
  reactExports.useEffect(() => {
    if (!changeRoomMode || !isAdmin) return;
    const container = scrollRef.current;
    if (!container) return;
    const BUFFER = 140;
    const HEADER = 80;
    const computeBounds = () => {
      const el = container.querySelector(
        `[data-category-id="${changeRoomMode.categoryId}"]`
      );
      if (!el) return null;
      const top = Math.max(0, el.offsetTop - HEADER - BUFFER);
      const bottom = Math.max(
        top,
        el.offsetTop + el.offsetHeight - container.clientHeight + BUFFER
      );
      return { top, bottom };
    };
    let bounds = computeBounds();
    const recompute = () => {
      bounds = computeBounds();
    };
    const onScroll = () => {
      if (!bounds) {
        bounds = computeBounds();
        if (!bounds) return;
      }
      const st = container.scrollTop;
      if (st < bounds.top) container.scrollTop = bounds.top;
      else if (st > bounds.bottom) container.scrollTop = bounds.bottom;
    };
    const raf = requestAnimationFrame(recompute);
    container.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", recompute);
    return () => {
      cancelAnimationFrame(raf);
      container.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", recompute);
    };
  }, [changeRoomMode, isAdmin]);
  reactExports.useEffect(() => {
    if (!changeRoomMode) return;
    const b = changeRoomMode.booking;
    const findRow = (target) => {
      let cur = target;
      while (cur) {
        if (cur.dataset && cur.dataset.gridRow === "true") return cur;
        cur = cur.parentElement;
      }
      return null;
    };
    const onKey = (e) => {
      if (e.key === "Escape") setChangeRoomMode(null);
    };
    const onMove = (e) => {
      const row = findRow(e.target);
      if (!row) {
        setChangeHover(null);
        return;
      }
      const roomNumber = Number(row.dataset.roomNumber);
      if (!Number.isFinite(roomNumber)) {
        setChangeHover(null);
        return;
      }
      const room = rooms.find((r) => r.number === roomNumber);
      if (!room || room.category !== changeRoomMode.categoryId) {
        setChangeHover(null);
        return;
      }
      const bedRaw = row.dataset.bedIndex ?? "";
      const bedIndex = bedRaw === "" ? void 0 : Number(bedRaw);
      const span = bookingHalfSpan(b);
      const valid = span ? !hasBookingConflict(
        { roomNumber, bedIndex, status: b.status, additionalBeds: b.additionalBeds },
        span[0],
        span[1],
        b.id
      ) : false;
      setChangeHover((prev) => {
        if (prev && prev.roomNumber === roomNumber && prev.bedIndex === bedIndex && prev.valid === valid) return prev;
        return { roomNumber, bedIndex, valid };
      });
    };
    const onClickCapture = (e) => {
      const row = findRow(e.target);
      if (!row) return;
      const roomNumber = Number(row.dataset.roomNumber);
      if (!Number.isFinite(roomNumber)) return;
      const room = rooms.find((r) => r.number === roomNumber);
      if (!room) return;
      if (room.category !== changeRoomMode.categoryId) {
        toast.error(lang === "ru" ? "Комната не в выбранной категории" : lang === "uz" ? "Xona tanlangan kategoriyada emas" : "Room is not in the selected category");
        e.preventDefault();
        e.stopPropagation();
        return;
      }
      if (roomNumber === b.roomNumber) {
        setChangeRoomMode(null);
        return;
      }
      const span = bookingHalfSpan(b);
      if (!span) {
        setChangeRoomMode(null);
        return;
      }
      const bedRaw = row.dataset.bedIndex ?? "";
      const bedIndex = bedRaw === "" ? void 0 : Number(bedRaw);
      const conflict = hasBookingConflict(
        { roomNumber, bedIndex, status: b.status, additionalBeds: b.additionalBeds },
        span[0],
        span[1],
        b.id
      );
      if (conflict) {
        toast.error(t("overlapError"));
        e.preventDefault();
        e.stopPropagation();
        return;
      }
      e.preventDefault();
      e.stopPropagation();
      const fromRoom = rooms.find((r) => r.number === b.roomNumber);
      const toRoom = rooms.find((r) => r.number === roomNumber);
      const isCategoryChange = !!(fromRoom && toRoom && fromRoom.category !== toRoom.category);
      const todayIso = format(/* @__PURE__ */ new Date(), "yyyy-MM-dd");
      const canSplit = isCategoryChange && b.status === "in-house" && b.checkIn < todayIso && todayIso < b.checkOut;
      if (canSplit && toRoom && fromRoom) {
        const segments = splitBookingAt({
          booking: b,
          splitDate: computeSplitDateNow(b),
          newRoomNumber: roomNumber,
          newCategoryId: toRoom.category,
          oldCategoryId: fromRoom.category,
          residency: b.residency ?? "resident",
          categoryRates
        });
        if (segments) {
          const total = sumSegments(segments);
          onUpdateBooking(b.id, {
            roomNumber,
            bedIndex,
            additionalBeds: void 0,
            segments,
            price: total,
            paymentAmount: total
          });
          setChangeRoomMode(null);
          toast.success(lang === "ru" ? `Категория изменена · ${segments.length} сегмента, итого ${total.toLocaleString("ru-RU")} сум` : lang === "uz" ? `Kategoriya o‘zgartirildi · ${segments.length} qism, jami ${total.toLocaleString("ru-RU")} so‘m` : `Category changed · ${segments.length} legs, total ${total.toLocaleString("en-US")} UZS`);
          return;
        }
      }
      onUpdateBooking(b.id, { roomNumber, bedIndex });
      setChangeRoomMode(null);
      toast.success(lang === "ru" ? "Комната изменена" : lang === "uz" ? "Xona o‘zgartirildi" : "Room changed");
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("click", onClickCapture, true);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("click", onClickCapture, true);
    };
  }, [changeRoomMode, rooms, bookingHalfSpan, hasBookingConflict, onUpdateBooking, t, lang, categoryRates]);
  reactExports.useEffect(() => {
    if (!changeRoomMode) return;
    const body = document.body;
    body.classList.add("admin-change-room-focus");
    return () => {
      body.classList.remove("admin-change-room-focus");
    };
  }, [changeRoomMode]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    changeRoomMode && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-change-room-banner": "true", className: "fixed top-4 left-1/2 -translate-x-1/2 z-[9999] flex items-center gap-3 rounded-2xl border border-primary/40 bg-primary px-5 py-2.5 text-primary-foreground shadow-2xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[12px] font-black uppercase tracking-wider", children: [
        lang === "ru" ? "Выберите свободную комнату" : lang === "uz" ? "Bo‘sh xonani tanlang" : "Pick a free room",
        ": ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "opacity-90", children: categories.find((c) => c.id === changeRoomMode.categoryId)?.label[lang] || categories.find((c) => c.id === changeRoomMode.categoryId)?.label.en })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          onClick: () => setChangeRoomMode(null),
          className: "rounded-md bg-white/20 px-2 py-0.5 text-[10px] font-black uppercase tracking-wider hover:bg-white/30",
          children: [
            lang === "ru" ? "Отмена" : lang === "uz" ? "Bekor" : "Cancel",
            " · ESC"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-1 min-h-0 flex flex-col", children: [
      !changeRoomMode && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          onClick: scrollToToday,
          className: "jump-today-btn group absolute top-3 right-5 z-30 inline-flex items-center gap-1.5 rounded-full bg-primary px-3.5 py-2 text-[11px] font-bold uppercase tracking-wider text-primary-foreground shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300",
          title: lang === "ru" ? "К сегодняшней дате" : "Bugungi sanaga",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarCheck2, { className: "h-3.5 w-3.5 transition-transform duration-500 group-hover:rotate-12" }),
            lang === "ru" ? "Сегодня" : "Bugun"
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          ref: scrollRef,
          onScroll: handleScroll,
          onMouseDown: preventNativeMiddleScroll,
          onAuxClick: preventNativeMiddleScroll,
          className: "timeline-scroll timeline-scroll--no-hbar flex-1 overflow-y-auto overflow-x-hidden select-none",
          style: { contain: "layout paint", willChange: "scroll-position" },
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { minWidth: totalWidth + LABEL_WIDTH }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: `timeline-date-header sticky top-0 z-40 flex bg-card ${changeRoomMode ? "pointer-events-none opacity-90" : "cursor-grab"}`,
                style: { borderBottom: "2px solid hsl(var(--grid-line-bold))", background: "hsl(var(--card))" },
                onMouseDown: changeRoomMode ? void 0 : handleHeaderMouseDown,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: "sticky left-0 z-30 shrink-0 bg-card flex items-center gap-2 px-3",
                      style: { width: LABEL_WIDTH, borderRight: "2px solid hsl(var(--grid-line-bold))", boxShadow: "4px 0 8px hsl(0 0% 0% / 0.06)" },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col flex-1 min-w-0", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-extrabold uppercase tracking-widest text-foreground", children: t("roomCategory") }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] text-muted-foreground font-semibold mt-0.5", children: lang === "ru" ? "Комната / Тип" : lang === "uz" ? "Xona / Turi" : "Room / Type" })
                        ] }),
                        canManageStructure && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "button",
                          {
                            type: "button",
                            onMouseDown: (e) => e.stopPropagation(),
                            onClick: (e) => {
                              e.stopPropagation();
                              setAddCategoryOpen(true);
                            },
                            title: t("addCategory"),
                            className: "add-control-fancy group inline-flex h-9 items-center gap-1.5 rounded-full bg-gradient-to-r from-primary via-primary/90 to-primary/75 px-3 text-[10px] font-black uppercase tracking-wider text-primary-foreground shadow-lg shadow-primary/30 ring-1 ring-primary/40 hover:shadow-xl hover:shadow-primary/40 hover:scale-105 active:scale-95 transition-all",
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(FolderPlus, { className: "h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-12" }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden xl:inline", children: t("addCategory") })
                            ]
                          }
                        )
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex", children: dates.map((d, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                    DayHeaderCell,
                    {
                      date: d,
                      isToday: isTdy(d),
                      isPastDay: isPast(d),
                      isWeekendDay: isWeekend(d),
                      dayLabel: getDayLabel(d),
                      lang,
                      isFirstOfMonth: monthStarts.has(i)
                    },
                    i
                  )) })
                ]
              }
            ),
            categories.map((cat) => {
              const catRooms = rooms.filter((r) => r.category === cat.id);
              const isCollapsed = collapsedCategories[cat.id] ?? false;
              const personCount = PERSON_COUNTS[cat.id] ?? cat.maxGuests ?? 0;
              const isChangeRoomLocked = !!changeRoomMode && cat.id !== changeRoomMode.categoryId;
              return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-category-id": cat.id, "data-change-room-locked": isChangeRoomLocked ? "true" : void 0, style: { position: "relative" }, children: [
                isChangeRoomLocked && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    "aria-hidden": "true",
                    className: "pointer-events-auto absolute inset-0 z-30",
                    onPointerDown: (e) => {
                      e.preventDefault();
                      e.stopPropagation();
                    },
                    onPointerMove: (e) => {
                      e.preventDefault();
                      e.stopPropagation();
                    },
                    onPointerUp: (e) => {
                      e.preventDefault();
                      e.stopPropagation();
                    },
                    onMouseDown: (e) => {
                      e.preventDefault();
                      e.stopPropagation();
                    },
                    onMouseUp: (e) => {
                      e.preventDefault();
                      e.stopPropagation();
                    },
                    onClick: (e) => {
                      e.preventDefault();
                      e.stopPropagation();
                    },
                    onDoubleClick: (e) => {
                      e.preventDefault();
                      e.stopPropagation();
                    },
                    onAuxClick: (e) => {
                      e.preventDefault();
                      e.stopPropagation();
                    },
                    onContextMenu: (e) => {
                      e.preventDefault();
                      e.stopPropagation();
                    },
                    onWheel: (e) => {
                      e.preventDefault();
                      e.stopPropagation();
                    },
                    style: {
                      background: "rgba(15, 23, 42, 0.35)",
                      backdropFilter: "blur(10px) saturate(0.85)",
                      WebkitBackdropFilter: "blur(10px) saturate(0.85)",
                      cursor: "not-allowed"
                    }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "group/category flex cursor-pointer category-header hover:brightness-[1.02] transition-all",
                    style: { borderTop: "2px solid hsl(var(--grid-line-bold))", borderBottom: "2px solid hsl(var(--primary-hsl) / 0.35)", background: "linear-gradient(90deg, hsl(var(--primary-hsl) / 0.18) 0%, hsl(var(--primary-hsl) / 0.08) 60%, hsl(var(--primary-hsl) / 0.04) 100%)", height: 48 },
                    onClick: () => toggleCategory(cat.id),
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "div",
                        {
                          className: "sticky left-0 z-20 shrink-0 flex items-center gap-2.5 px-3 py-2 overflow-visible",
                          style: { width: LABEL_WIDTH, minWidth: LABEL_WIDTH, borderRight: "2px solid hsl(var(--grid-line-bold))", background: "linear-gradient(90deg, hsl(var(--primary-hsl) / 0.22), hsl(var(--primary-hsl) / 0.14))", boxShadow: "4px 0 12px hsl(var(--primary-hsl) / 0.12)" },
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-primary/25", children: isCollapsed ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-4 w-4 text-primary" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "h-4 w-4 text-primary" }) }),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col min-w-0 flex-1 overflow-visible", children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[12px] font-extrabold text-foreground leading-tight block whitespace-normal break-words", title: cat.label[lang], children: categoryDisplay(cat, lang) }),
                              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[9px] text-muted-foreground font-semibold flex flex-wrap items-center gap-1 leading-tight", children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "uppercase tracking-wider text-primary/70 font-bold", children: cat.short }),
                                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "opacity-60", children: "·" }),
                                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                                  catRooms.length,
                                  " ",
                                  t("rooms")
                                ] }),
                                personCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-0.5 text-primary/80", children: [
                                  "· ",
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "inline h-3 w-3" }),
                                  " ",
                                  personCount
                                ] })
                              ] })
                            ] }),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ml-auto flex shrink-0 items-center gap-1.5", children: [
                              canEditRate ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "button",
                                {
                                  type: "button",
                                  onMouseDown: (e) => e.stopPropagation(),
                                  onClick: (e) => {
                                    e.stopPropagation();
                                    openRateEditor(cat.id);
                                  },
                                  title: lang === "ru" ? "Цена за ночь" : "Rate per night",
                                  className: "inline-flex h-7 shrink-0 items-center rounded-full bg-emerald-500/12 px-2.5 text-[10px] font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-300 ring-1 ring-emerald-500/25 hover:bg-emerald-500 hover:text-white hover:ring-emerald-500 transition-colors",
                                  children: lang === "ru" ? "Цена" : "Price"
                                }
                              ) : null,
                              canManageStructure && /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "button",
                                {
                                  type: "button",
                                  onMouseDown: (e) => e.stopPropagation(),
                                  onClick: (e) => {
                                    e.stopPropagation();
                                    setAddRoomCategoryId(cat.id);
                                  },
                                  title: t("addRoom"),
                                  className: "add-control-fancy inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-card/95 text-primary ring-1 ring-primary/30 hover:bg-primary hover:text-primary-foreground transition-colors",
                                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-3.5 w-3.5" })
                                }
                              ),
                              canManageStructure && /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "button",
                                {
                                  type: "button",
                                  onMouseDown: (e) => e.stopPropagation(),
                                  onClick: (e) => {
                                    e.stopPropagation();
                                    setDeleteTarget({ type: "category", id: cat.id, label: cat.label[lang] });
                                  },
                                  title: lang === "ru" ? "Удалить категорию" : "Delete category",
                                  className: "delete-control-fancy flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-card/90 text-destructive ring-1 ring-destructive/20 hover:bg-destructive hover:text-destructive-foreground transition-colors",
                                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-3.5 w-3.5" })
                                }
                              )
                            ] })
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { width: totalWidth, height: "100%", position: "relative" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          style: { position: "sticky", left: LABEL_WIDTH + 14, display: "inline-flex", height: "100%", alignItems: "center", paddingRight: 14, pointerEvents: "auto", zIndex: 5 },
                          onClick: (e) => e.stopPropagation(),
                          onMouseDown: (e) => e.stopPropagation(),
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(CategoryStatusStrip, { counts: categoryStatusCounts[cat.id] ?? { confirmed: 0, pending: 0, booked: 0, "in-house": 0, "checked-out": 0, maintenance: 0 }, lang })
                        }
                      ) })
                    ]
                  }
                ),
                !isCollapsed && catRooms.map((room) => {
                  const isExpanded = expandedRooms[room.number] ?? false;
                  const hasPersonRows = personCount >= 2;
                  const extra = extraPersons[room.number] || 0;
                  const totalPersons = personCount + extra;
                  const bars = buckets.byRoom.get(room.number) || [];
                  const roomKey = `${room.number}`;
                  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: isExpanded ? "person-section-expanded" : "", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "div",
                      {
                        className: `group/room flex grid-row ${isExpanded ? "person-section-top-border" : ""}`,
                        style: { borderBottom: "1px solid hsl(var(--grid-line))" },
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs(
                            "div",
                            {
                              className: "sticky left-0 z-10 flex shrink-0 items-center gap-2 bg-card px-2.5",
                              style: { width: LABEL_WIDTH, borderRight: "2px solid hsl(var(--grid-line-bold))", boxShadow: "4px 0 8px hsl(0 0% 0% / 0.04)" },
                              children: [
                                hasPersonRows ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                                  "button",
                                  {
                                    type: "button",
                                    onMouseDown: (e) => e.stopPropagation(),
                                    onClick: (e) => {
                                      e.stopPropagation();
                                      e.preventDefault();
                                      toggleRoomExpand(room.number);
                                    },
                                    className: `flex h-6 w-6 items-center justify-center rounded-lg transition-all duration-200 ${isExpanded ? "bg-primary/20 shadow-sm" : "hover:bg-primary/10"}`,
                                    title: lang === "ru" ? "Показать кровати" : "Yotoqlarni ko'rsatish",
                                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: `h-3.5 w-3.5 text-primary/70 transition-transform duration-300 ${isExpanded ? "rotate-90" : ""}` })
                                  }
                                ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-6" }),
                                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex h-7 w-9 items-center justify-center rounded-lg bg-primary/10 text-[12px] font-black text-primary", children: [
                                  room.number,
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                                    "span",
                                    {
                                      className: `absolute -top-1 -right-1 h-2.5 w-2.5 rounded-full ring-2 ring-card ${isRoomDirty(room.number, bookings) ? "bg-red-500 shadow-[0_0_8px_2px_rgba(239,68,68,0.85)] animate-pulse" : "bg-emerald-500 shadow-[0_0_5px_rgba(16,185,129,0.55)]"}`,
                                      title: isRoomDirty(room.number, bookings) ? lang === "ru" ? "Грязный" : "Dirty" : lang === "ru" ? "Чистый" : "Clean"
                                    }
                                  )
                                ] }),
                                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col min-w-0 flex-1", children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-bold text-foreground leading-tight truncate", children: categoryDisplay(cat, lang) }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] text-muted-foreground font-semibold truncate", children: cat.short })
                                ] }),
                                hasPersonRows && /* @__PURE__ */ jsxRuntimeExports.jsx(
                                  "button",
                                  {
                                    type: "button",
                                    onMouseDown: (e) => e.stopPropagation(),
                                    onClick: (e) => {
                                      e.stopPropagation();
                                      e.preventDefault();
                                      addExtraPerson(room.number);
                                    },
                                    title: lang === "ru" ? "Добавить гостя" : "Mehmon qo'shish",
                                    className: "add-control-fancy flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary shadow-sm ring-1 ring-primary/20 hover:bg-primary hover:text-primary-foreground hover:scale-110 active:scale-95 transition-all duration-200 group",
                                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-3.5 w-3.5 group-hover:rotate-90 transition-transform duration-300" })
                                  }
                                ),
                                canManageStructure && /* @__PURE__ */ jsxRuntimeExports.jsx(
                                  "button",
                                  {
                                    type: "button",
                                    onMouseDown: (e) => e.stopPropagation(),
                                    onClick: (e) => {
                                      e.stopPropagation();
                                      e.preventDefault();
                                      setDeleteTarget({ type: "room", roomNumber: room.number });
                                    },
                                    title: lang === "ru" ? "Удалить номер" : "Delete room",
                                    className: "delete-control-fancy flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-muted-foreground/60 ring-1 ring-transparent transition-all hover:bg-destructive/15 hover:text-destructive hover:ring-destructive/25 hover:scale-105 active:scale-95",
                                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-3.5 w-3.5" })
                                  }
                                )
                              ]
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs(
                            "div",
                            {
                              className: "relative cursor-crosshair",
                              "data-grid-row": "true",
                              "data-room-number": room.number,
                              "data-bed-index": hasPersonRows ? 0 : "",
                              style: { width: totalWidth, height: ROW_HEIGHT, contain: "layout paint" },
                              onMouseDown: (e) => handleCellMouseDown(room.number, hasPersonRows ? 0 : void 0, ROW_HEIGHT, e),
                              children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx(RowBackground, { height: ROW_HEIGHT, totalWidth, todayOffset: todayIdx, totalDays }),
                                /* @__PURE__ */ jsxRuntimeExports.jsx(RowDragOverlay, { rowKey: hasPersonRows ? `${room.number}:0` : roomKey, registerOverlay }),
                                changeRoomMode && changePreviewGeom && changeHover?.roomNumber === room.number && /* @__PURE__ */ jsxRuntimeExports.jsx(
                                  "div",
                                  {
                                    className: "pointer-events-none absolute transition-opacity",
                                    style: {
                                      left: changePreviewGeom.leftPx,
                                      width: changePreviewGeom.widthPx,
                                      top: 3,
                                      bottom: 3,
                                      zIndex: 4,
                                      borderRadius: 8,
                                      border: `2px dashed ${changeHover.valid ? "hsl(var(--primary-hsl))" : "hsl(var(--destructive))"}`,
                                      background: changeHover.valid ? "hsl(var(--primary-hsl) / 0.22)" : "hsl(var(--destructive) / 0.18)",
                                      boxShadow: changeHover.valid ? "0 0 0 3px hsl(var(--primary-hsl) / 0.15)" : "0 0 0 3px hsl(var(--destructive) / 0.12)"
                                    }
                                  }
                                ),
                                bars.map(({ booking, leftPx, widthPx, isPast: bp }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                                  BookingBar,
                                  {
                                    booking,
                                    leftPx,
                                    widthPx,
                                    onClick: handleBookingClick,
                                    dayWidthPx: DAY_WIDTH,
                                    isPast: bp,
                                    onResize: handleResize,
                                    canResize,
                                    onResizeLeft: handleResizeLeft,
                                    canResizeLeft,
                                    onResizeConflict: showOverlapError,
                                    onMoveStart: handleBookingMoveStart
                                  },
                                  booking.id
                                )),
                                hasPersonRows && (buckets.byBed.get(`${room.number}:0`) || []).map(({ booking, leftPx, widthPx, isPast: bp, isBlocker }) => isBlocker ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                                  "div",
                                  {
                                    className: "booking-blocker-stripes",
                                    style: {
                                      position: "absolute",
                                      left: leftPx,
                                      top: 6,
                                      width: widthPx,
                                      height: ROW_HEIGHT - 12,
                                      borderRadius: 6,
                                      pointerEvents: "none",
                                      background: "repeating-linear-gradient(135deg, rgba(136,19,55,0.55) 0 3px, rgba(136,19,55,0.04) 3px 9px)",
                                      border: "1px solid rgba(136,19,55,0.45)",
                                      boxShadow: "none",
                                      opacity: bp ? 0.5 : 0.95
                                    },
                                    title: lang === "ru" ? "Занято бронированием" : "Occupied by booking"
                                  },
                                  `blocker-room-${booking.id}`
                                ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
                                  BookingBar,
                                  {
                                    booking,
                                    leftPx,
                                    widthPx,
                                    onClick: handleBookingClick,
                                    dayWidthPx: DAY_WIDTH,
                                    isPast: bp,
                                    onResize: handleResize,
                                    canResize,
                                    onResizeLeft: handleResizeLeft,
                                    canResizeLeft,
                                    onResizeConflict: showOverlapError,
                                    onMoveStart: handleBookingMoveStart
                                  },
                                  booking.id
                                ))
                              ]
                            }
                          )
                        ]
                      }
                    ),
                    hasPersonRows && isExpanded && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "person-section-body", children: Array.from({ length: totalPersons }, (_, pIdx) => {
                      if (pIdx === 0) return null;
                      if (deletedPersonSlots[room.number]?.has(pIdx)) return null;
                      const isExtra = pIdx >= personCount;
                      const personBars = buckets.byBed.get(`${room.number}:${pIdx}`) || [];
                      const bedKey = `${room.number}:${pIdx}`;
                      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "div",
                        {
                          className: "group/guest flex person-row-animate person-row-active person-row-hover",
                          style: { borderBottom: pIdx < totalPersons - 1 ? "1px solid hsl(var(--grid-line))" : "none", animationDelay: `${pIdx * 60}ms` },
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsxs(
                              "div",
                              {
                                className: "sticky left-0 z-10 flex shrink-0 items-center gap-2 px-2.5 pl-12",
                                style: { width: LABEL_WIDTH, borderRight: "2px solid hsl(var(--grid-line-bold))", background: "hsl(var(--grid-person-expanded-bg))", boxShadow: "4px 0 8px hsl(0 0% 0% / 0.03)" },
                                children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `flex h-5 w-5 items-center justify-center rounded-full ${isExtra ? "bg-primary/30" : "bg-primary/20"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "h-3 w-3 text-primary/70" }) }),
                                  (() => {
                                    const guestDirty = bookings.some((b) => b.roomNumber === room.number && b.bedIndex === pIdx && b.status === "dirty");
                                    return /* @__PURE__ */ jsxRuntimeExports.jsx(
                                      "span",
                                      {
                                        className: `h-1.5 w-1.5 shrink-0 rounded-full ring-1 ring-background ${guestDirty ? "bg-red-500 animate-pulse" : "bg-emerald-500"}`,
                                        title: guestDirty ? lang === "ru" ? "Грязный" : "Dirty" : lang === "ru" ? "Чистый" : "Clean"
                                      }
                                    );
                                  })(),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                                    "input",
                                    {
                                      type: "text",
                                      value: personNames[room.number]?.[pIdx] ?? "",
                                      onChange: (e) => updatePersonName(room.number, pIdx, e.target.value.slice(0, 28)),
                                      placeholder: `${t("person")} ${pIdx + 1}`,
                                      maxLength: 28,
                                      className: "person-name-input text-[10px] font-bold text-muted-foreground/80 bg-transparent border-none outline-none flex-1 min-w-0 placeholder:text-muted-foreground/50 focus:text-foreground h-6 px-1.5 rounded-md transition-all duration-200 hover:bg-primary/5",
                                      onMouseDown: (e) => e.stopPropagation(),
                                      onClick: (e) => e.stopPropagation()
                                    }
                                  ),
                                  isExtra || !isAdmin ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                                    "button",
                                    {
                                      type: "button",
                                      onMouseDown: (e) => e.stopPropagation(),
                                      onClick: (e) => {
                                        e.stopPropagation();
                                        setDeleteTarget({ type: "guest", roomNumber: room.number, personIdx: pIdx, isExtra });
                                      },
                                      title: lang === "ru" ? "Удалить гостя" : "Mehmonni olib tashlash",
                                      className: "delete-control-fancy flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-muted-foreground/60 ring-1 ring-transparent transition-all hover:bg-destructive/15 hover:text-destructive hover:ring-destructive/25 hover:scale-105 active:scale-95",
                                      children: isExtra ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-3 w-3" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-3 w-3" })
                                    }
                                  ) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-6 w-6 shrink-0", "aria-hidden": "true" })
                                ]
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs(
                              "div",
                              {
                                className: "relative cursor-crosshair",
                                "data-grid-row": "true",
                                "data-room-number": room.number,
                                "data-bed-index": pIdx,
                                style: { width: totalWidth, height: PERSON_ROW_HEIGHT, contain: "layout paint" },
                                onMouseDown: (e) => handleCellMouseDown(room.number, pIdx, PERSON_ROW_HEIGHT, e),
                                children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(RowBackground, { height: PERSON_ROW_HEIGHT, totalWidth, todayOffset: todayIdx, totalDays }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(RowDragOverlay, { rowKey: bedKey, registerOverlay }),
                                  personBars.map(({ booking, leftPx, widthPx, isPast: bp, isBlocker }) => isBlocker ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                                    "div",
                                    {
                                      className: "booking-blocker-stripes",
                                      style: {
                                        position: "absolute",
                                        left: leftPx,
                                        top: 5,
                                        width: widthPx,
                                        height: PERSON_ROW_HEIGHT - 10,
                                        borderRadius: 6,
                                        pointerEvents: "none",
                                        // Refined, restrained diagonal stripes — narrow, monochrome
                                        // crimson on near-transparent ground. Reads as "blocked"
                                        // without the previous candy-cane intensity.
                                        background: "repeating-linear-gradient(135deg, rgba(136,19,55,0.55) 0 3px, rgba(136,19,55,0.04) 3px 9px)",
                                        border: "1px solid rgba(136,19,55,0.45)",
                                        boxShadow: "none",
                                        opacity: bp ? 0.5 : 0.95
                                      },
                                      title: lang === "ru" ? "Занято бронированием" : "Occupied by booking"
                                    },
                                    `blocker-${booking.id}-${pIdx}`
                                  ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
                                    BookingBar,
                                    {
                                      booking,
                                      leftPx,
                                      widthPx,
                                      onClick: handleBookingClick,
                                      dayWidthPx: DAY_WIDTH,
                                      isPast: bp,
                                      onResize: handleResize,
                                      canResize,
                                      onResizeLeft: handleResizeLeft,
                                      canResizeLeft,
                                      onResizeConflict: showOverlapError,
                                      onMoveStart: handleBookingMoveStart
                                    },
                                    booking.id
                                  ))
                                ]
                              }
                            )
                          ]
                        },
                        pIdx
                      );
                    }) })
                  ] }, room.number);
                })
              ] }, cat.id);
            })
          ] })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        TimelineBottomScrollbar,
        {
          scrollRef,
          labelWidth: LABEL_WIDTH,
          todayContentPx: todayIdx * DAY_WIDTH + DAY_WIDTH / 2,
          onDragStateChange: handleTimelineScrollbarDragState,
          onEdgeRequest: handleTimelineScrollbarEdgeRequest
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      BookingDialog,
      {
        open: dialogOpen,
        onClose: () => {
          clearAllGlows();
          setDialogOpen(false);
          setEditBooking(null);
          setSelectedBedIndex(void 0);
          setSelectedPrefillName("");
          setSelectedEarlyCheckin(false);
          setSelectedLateCheckout(false);
        },
        onSave: handleAddBookingWrapped,
        onUpdate: handleUpdateBookingWrapped,
        onDelete: onDeleteBooking,
        roomNumber: selectedRoom,
        checkIn: selectedCheckIn,
        checkOut: selectedCheckOut,
        editBooking,
        bedIndex: selectedBedIndex,
        prefillName: selectedPrefillName,
        initialEarlyCheckin: selectedEarlyCheckin,
        initialLateCheckout: selectedLateCheckout,
        extraGuestSlots: extraPersons[selectedRoom] || 0
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AlertDialog,
      {
        open: deleteTarget !== null,
        onOpenChange: (open) => {
          if (!open) {
            setDeleteTarget(null);
            setDeleteStep(1);
          }
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogContent, { className: "overflow-hidden rounded-2xl border-2 border-destructive/25 bg-card p-0 shadow-2xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_0%,hsl(var(--destructive)/0.16),transparent_38%),linear-gradient(135deg,hsl(var(--destructive)/0.08),transparent_52%)]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogHeader, { className: "relative gap-3 text-left", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-12 w-12 items-center justify-center rounded-xl bg-destructive/12 text-destructive ring-1 ring-destructive/25", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-6 w-6" }) }),
            (() => {
              const isCatSuperuser = isSuperuser && deleteTarget?.type === "category";
              if (isCatSuperuser && deleteTarget?.type === "category") {
                const catRoomNumbers = rooms.filter((r) => r.category === deleteTarget.id).map((r) => r.number);
                const affectedCount = bookings.filter(
                  (b) => catRoomNumbers.includes(b.roomNumber)
                ).length;
                if (deleteStep === 1) {
                  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogTitle, { className: "font-display text-xl font-black", children: lang === "ru" ? "Действительно удалить категорию?" : "Really delete this category?" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogDescription, { className: "text-sm font-medium leading-relaxed", children: lang === "ru" ? `В категории «${deleteTarget.label}» ${affectedCount === 1 ? "есть 1 активное бронирование" : `есть ${affectedCount} активных бронирований`}. Если продолжить, ${affectedCount === 1 ? "оно будет удалено" : "все они будут удалены"} без возможности восстановления, а номера ${catRoomNumbers.join(", ") || "—"} будут записаны в историю входов.` : `Category "${deleteTarget.label}" has ${affectedCount === 1 ? "1 active booking" : `${affectedCount} active bookings`}. If you continue, ${affectedCount === 1 ? "it will be" : "they will all be"} permanently deleted, and rooms ${catRoomNumbers.join(", ") || "—"} will be written to the login history.` })
                  ] });
                }
                return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogTitle, { className: "font-display text-xl font-black", children: lang === "ru" ? "Точно удалить эту категорию?" : "Delete this category for real?" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogDescription, { className: "text-sm font-medium leading-relaxed", children: lang === "ru" ? `Эта категория уже встроена в систему — просто используйте её. Если вы всё равно нажмёте «Удалить», категория «${deleteTarget.label}» будет удалена окончательно.` : `This category is already built into the system — just use it. If you still press "Delete", category "${deleteTarget.label}" will be removed for good.` })
                ] });
              }
              return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogTitle, { className: "font-display text-xl font-black", children: lang === "ru" ? "Вы уверены?" : "Are you sure?" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogDescription, { className: "text-sm font-medium leading-relaxed", children: lang === "ru" ? "После подтверждения выбранный элемент будет скрыт из сетки. Это действие нельзя отменить в этом окне." : "After confirmation, the selected item will be hidden from the grid. This action cannot be undone here." })
              ] });
            })()
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogFooter, { className: "relative mt-6 gap-2 sm:space-x-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              AlertDialogCancel,
              {
                onClick: () => setDeleteStep(1),
                className: "rounded-xl border-border/70 bg-background/80 font-bold",
                children: t("cancel")
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              AlertDialogAction,
              {
                onClick: (e) => {
                  if (isSuperuser && deleteTarget?.type === "category" && deleteStep === 1) {
                    e.preventDefault();
                  }
                  confirmDelete();
                },
                className: "rounded-xl bg-destructive font-black text-destructive-foreground shadow-lg shadow-destructive/25 hover:bg-destructive/90",
                children: isSuperuser && deleteTarget?.type === "category" && deleteStep === 1 ? lang === "ru" ? "Удалить бронирования" : "Delete bookings" : t("delete")
              }
            )
          ] })
        ] }) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialog, { open: rateEditCategoryId !== null, onOpenChange: (open) => !open && setRateEditCategoryId(null), children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      AlertDialogContent,
      {
        className: "overflow-hidden rounded-2xl border-2 border-primary/20 bg-card p-0 shadow-2xl",
        style: {
          maxWidth: `${Math.min(Math.max(1, categories.find((c) => c.id === rateEditCategoryId)?.maxGuests ?? 1), 4) * 260 + 48}px`
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogHeader, { className: "text-left", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogTitle, { className: "font-display text-xl font-black", children: lang === "ru" ? "Цена категории" : "Category price" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogDescription, { children: (() => {
              const c = categories.find((x) => x.id === rateEditCategoryId);
              return c ? categoryDisplay(c, lang) : "";
            })() })
          ] }),
          (() => {
            const editingCat = categories.find((c) => c.id === rateEditCategoryId);
            const slots = Math.max(1, editingCat?.maxGuests ?? 1);
            const guestLabel = (i) => lang === "ru" ? `Гость ${i + 1}` : lang === "uz" ? `Mehmon ${i + 1}` : `Guest ${i + 1}`;
            const updateAt = (setter, idx, v) => setter((prev) => {
              const next = prev.slice();
              while (next.length < slots) next.push("");
              next[idx] = v.replace(/\D/g, "").slice(0, 18);
              return next;
            });
            const fmt = (raw) => raw ? Number(String(raw).replace(/\D/g, "")).toLocaleString("ru-RU") : "";
            const residentLabel = lang === "ru" ? "Резидент" : "Resident";
            const nonResidentLabel = lang === "ru" ? "Нерезидент" : "Non-resident";
            const cols = Math.min(slots, 4);
            const gridColsClass = cols >= 4 ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" : cols === 3 ? "grid-cols-1 sm:grid-cols-3" : cols === 2 ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1";
            return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 max-h-[60vh] overflow-y-auto pr-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `grid gap-3 ${gridColsClass}`, children: Array.from({ length: slots }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "min-w-0 rounded-2xl border border-border/70 bg-background/60 p-3 shadow-sm transition hover:border-primary/40 hover:shadow-md",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 flex items-center justify-between", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-black text-foreground", children: guestLabel(i) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-primary", children: [
                      "#",
                      i + 1
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-1 text-[10px] font-bold uppercase tracking-wider text-emerald-600", children: residentLabel }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-w-0 items-center gap-1.5 rounded-xl border border-emerald-500/20 bg-emerald-500/5 px-2.5 py-2", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "shrink-0 text-xs font-black text-emerald-500", children: "сум" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "input",
                          {
                            autoFocus: i === 0,
                            type: "text",
                            inputMode: "numeric",
                            value: fmt(rateDraft[i]),
                            onChange: (e) => updateAt(setRateDraft, i, e.target.value),
                            className: "h-9 w-full min-w-0 flex-1 bg-transparent text-sm font-black tabular-nums text-foreground outline-none",
                            placeholder: "0"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "shrink-0 text-[10px] font-bold uppercase tracking-wider text-muted-foreground", children: "UZS" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-1 text-[10px] font-bold uppercase tracking-wider text-amber-600", children: nonResidentLabel }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-w-0 items-center gap-1.5 rounded-xl border border-amber-500/20 bg-amber-500/5 px-2.5 py-2", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "shrink-0 text-xs font-black text-amber-500", children: "сум" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "input",
                          {
                            type: "text",
                            inputMode: "numeric",
                            value: fmt(rateDraftNon[i]),
                            onChange: (e) => updateAt(setRateDraftNon, i, e.target.value),
                            className: "h-9 w-full min-w-0 flex-1 bg-transparent text-sm font-black tabular-nums text-foreground outline-none",
                            placeholder: "0"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "shrink-0 text-[10px] font-bold uppercase tracking-wider text-muted-foreground", children: "UZS" })
                      ] })
                    ] })
                  ] })
                ]
              },
              `guest-${i}`
            )) }) });
          })(),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogFooter, { className: "mt-6 gap-2 sm:space-x-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogCancel, { className: "rounded-xl border-border/70 bg-background/80 font-bold", children: t("cancel") }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogAction, { onClick: saveRate, className: "rounded-xl bg-primary font-black text-primary-foreground shadow-lg shadow-primary/25 hover:bg-primary/90", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "mr-1.5 h-4 w-4" }),
              " ",
              t("save")
            ] })
          ] })
        ] })
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AddCategoryDialog, { open: addCategoryOpen, onClose: () => setAddCategoryOpen(false) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AddRoomDialog,
      {
        open: addRoomCategoryId !== null,
        onClose: () => setAddRoomCategoryId(null),
        category: categories.find((c) => c.id === addRoomCategoryId) ?? null
      }
    ),
    moveGhost && typeof document !== "undefined" && reactDomExports.createPortal(
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          ref: (el) => {
            ghostElRef.current = el;
            if (el) {
              const g = moveGhostRef.current;
              if (g) {
                const left = g.snapLeft != null ? g.snapLeft : g.x - g.offsetX;
                const top = g.snapTop != null ? g.snapTop : g.y - g.offsetY;
                const w = g.snapWidth != null ? g.snapWidth : g.width;
                const h = g.snapHeight != null ? g.snapHeight : g.height;
                el.style.width = `${w}px`;
                el.style.height = `${h}px`;
                el.style.transform = `translate3d(${left}px, ${top}px, 0) scale(1.04) rotate(-0.6deg)`;
                el.dataset.invalid = g.invalid ? "1" : "0";
              }
            }
          },
          "data-invalid": moveGhost.invalid ? "1" : "0",
          style: {
            position: "fixed",
            left: 0,
            top: 0,
            willChange: "transform",
            pointerEvents: "none",
            zIndex: 9999,
            borderRadius: 12,
            background: moveGhost.invalid ? "linear-gradient(135deg, hsl(var(--destructive) / 0.85), hsl(var(--destructive) / 0.65))" : "linear-gradient(135deg, hsl(var(--primary-hsl) / 0.85), hsl(var(--primary-hsl) / 0.6))",
            color: "hsl(var(--primary-foreground))",
            border: moveGhost.invalid ? "2px solid hsl(var(--destructive))" : "2px solid hsl(var(--primary-hsl))",
            boxShadow: moveGhost.invalid ? "0 18px 40px -10px hsl(var(--destructive) / 0.55), 0 0 0 4px hsl(var(--destructive) / 0.18)" : "0 18px 40px -10px hsl(var(--primary-hsl) / 0.55), 0 0 0 4px hsl(var(--primary-hsl) / 0.18)",
            transition: "background 120ms ease, border-color 120ms ease, box-shadow 160ms ease",
            display: "flex",
            alignItems: "center",
            padding: "0 12px",
            fontSize: 12,
            fontWeight: 700,
            overflow: "hidden",
            whiteSpace: "nowrap",
            backdropFilter: "blur(2px)"
          },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              ref: (el) => {
                ghostLabelRef.current = el;
              },
              style: { opacity: 0.95, textOverflow: "ellipsis", overflow: "hidden" },
              children: moveGhost.invalid ? lang === "ru" ? "✕ Невозможно разместить здесь" : "✕ Cannot drop here" : `↕ ${(moveGhost.booking.guestName || "").trim() || (lang === "ru" ? "Бронирование" : "Booking")}`
            }
          )
        }
      ),
      document.body
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialog, { open: moveConfirm !== null, onOpenChange: (open) => {
      if (!open && moveConfirm) cancelMove();
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogContent, { className: "overflow-hidden rounded-2xl border-2 border-primary/25 bg-card p-0 shadow-2xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_0%,hsl(var(--primary-hsl)/0.16),transparent_38%),linear-gradient(135deg,hsl(var(--primary-hsl)/0.08),transparent_52%)]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogHeader, { className: "relative gap-3 text-left", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary ring-1 ring-primary/25", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarCheck2, { className: "h-6 w-6" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogTitle, { className: "font-display text-xl font-black", children: lang === "ru" ? "Переместить бронирование?" : "Move booking?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogDescription, { className: "text-sm font-medium leading-relaxed", children: moveConfirm && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          lang === "ru" ? "Гость: " : "Guest: ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-foreground", children: moveConfirm.booking.guestName || "—" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
            lang === "ru" ? "Из" : "From",
            ": #",
            moveConfirm.booking.roomNumber,
            moveConfirm.booking.bedIndex !== void 0 && ` · ${lang === "ru" ? "место" : "bed"} ${moveConfirm.booking.bedIndex + 1}`,
            " · ",
            moveConfirm.booking.checkIn,
            " → ",
            moveConfirm.booking.checkOut
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-primary font-bold", children: [
            lang === "ru" ? "В" : "To",
            ": #",
            moveConfirm.targetRoom,
            moveConfirm.targetBed !== void 0 && ` · ${lang === "ru" ? "место" : "bed"} ${moveConfirm.targetBed + 1}`,
            moveTargetRoomInfo?.category && ` · ${categoryDisplay(moveTargetRoomInfo.category, lang)}`,
            " · ",
            moveConfirm.targetCheckIn,
            " → ",
            moveConfirm.targetCheckOut
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogFooter, { className: "relative mt-6 gap-2 sm:space-x-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogCancel, { onClick: cancelMove, className: "rounded-xl border-border/70 bg-background/80 font-bold", children: lang === "ru" ? "Нет, вернуть" : "No, snap back" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogAction, { onClick: confirmMove, className: "rounded-xl bg-primary font-black text-primary-foreground shadow-lg shadow-primary/25 hover:bg-primary/90", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "mr-1.5 h-4 w-4" }),
          lang === "ru" ? "Да, переместить" : "Yes, move"
        ] })
      ] })
    ] }) }) })
  ] });
}
function getRoomBookings(roomNumber, bookings, date) {
  const d = startOfDay(date);
  const all = bookings.filter((b) => b.roomNumber === roomNumber);
  const active = all.filter((b) => isWithinInterval(d, { start: parseISO(b.checkIn), end: parseISO(b.checkOut) }));
  const rest = all.filter((b) => !active.includes(b)).sort((a, b) => a.checkIn < b.checkIn ? 1 : -1);
  return [...active, ...rest];
}
function HotelRoomTileGrid({ rooms, bookings, activeFilter, selectedDate, onEditRoom, onShowOnGrid, onEditBooking }) {
  const { lang, t } = useI18n();
  const { categories } = useHotelGrid();
  const [selectedByRoom, setSelectedByRoom] = reactExports.useState({});
  const roomData = reactExports.useMemo(
    () => rooms.map((r) => ({ room: r, roomBookings: getRoomBookings(r.number, bookings, selectedDate) })),
    [rooms, bookings, selectedDate]
  );
  const matches = (booking) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "available") return booking === null;
    return booking?.status === activeFilter;
  };
  const getCategoryLabel = (catId) => {
    const cat = categories.find((c) => c.id === catId);
    return cat ? cat.label[lang] || cat.short : catId;
  };
  const grouped = reactExports.useMemo(() => {
    const map = /* @__PURE__ */ new Map();
    categories.forEach((c) => map.set(c.id, []));
    roomData.forEach((rd) => {
      if (!map.has(rd.room.category)) map.set(rd.room.category, []);
      map.get(rd.room.category).push(rd);
    });
    return Array.from(map.entries()).filter(([, items]) => items.length > 0);
  }, [roomData, categories]);
  const renderTile = ({ room, roomBookings }) => {
    const defaultBooking = roomBookings[0] ?? null;
    const selectedId = selectedByRoom[room.number];
    const booking = selectedId && roomBookings.find((b) => b.id === selectedId) || defaultBooking;
    const statusCfg = booking ? BOOKING_STATUSES[booking.status] : null;
    const isMatch = matches(booking);
    const dirty = isRoomDirty(room.number, bookings);
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: `room-card relative p-4 cursor-pointer overflow-hidden group transition-all duration-200 hover:bg-accent/40 ${isMatch ? "" : "opacity-30 grayscale hover:opacity-60"}`,
        style: { contain: "layout paint" },
        onClick: () => {
          if (booking && onEditBooking) onEditBooking(booking.id);
          else onEditRoom(room.number);
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: `absolute top-2 right-2 h-2.5 w-2.5 rounded-full ring-2 ring-background z-10 ${dirty ? "bg-red-500 shadow-[0_0_10px_2px_rgba(239,68,68,0.85)] animate-pulse" : "bg-emerald-500 shadow-[0_0_6px_rgba(16,185,129,0.55)]"}`,
              title: dirty ? lang === "ru" ? "Грязный" : "Dirty" : lang === "ru" ? "Чистый" : "Clean"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between mb-1.5 pr-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl font-black text-foreground leading-none group-hover:text-primary transition-colors duration-150", children: room.number }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: (e) => {
                  e.stopPropagation();
                  if (booking && onEditBooking) onEditBooking(booking.id);
                  else onEditRoom(room.number);
                },
                className: "p-1.5 rounded-lg hover:bg-muted transition-opacity duration-150 opacity-0 group-hover:opacity-100",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Pencil, { className: "h-3.5 w-3.5 text-muted-foreground" })
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] font-medium text-muted-foreground mb-3 truncate", children: getCategoryLabel(room.category) }),
          roomBookings.length >= 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-2", onClick: (e) => e.stopPropagation(), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Select,
            {
              value: booking?.id ?? "",
              onValueChange: (v) => setSelectedByRoom((prev) => ({ ...prev, [room.number]: v })),
              onOpenChange: (open) => {
                if (!open && typeof window !== "undefined") {
                  window.dispatchEvent(new CustomEvent("hotel:stop-focus-glow"));
                }
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "h-7 rounded-md text-[10px] font-semibold", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: roomBookings.map((b) => {
                  const bDirty = b.status === "dirty";
                  return /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: b.id, className: "text-xs", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `h-1.5 w-1.5 rounded-full ${bDirty ? "bg-red-500" : "bg-emerald-500"}` }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "truncate", children: [
                      formatGuestName(b) || t("person"),
                      " · ",
                      b.checkIn
                    ] })
                  ] }) }, b.id);
                }) })
              ]
            }
          ) }),
          statusCfg ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-bold ${statusCfg.tailwindBg} ${statusCfg.tailwindText} ${statusCfg.tailwindBorder} border`, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full", style: { background: statusCfg.color } }),
              statusCfg.label[lang]
            ] }),
            booking && (booking.guestName || booking.guestFirstName || booking.guestLastName) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 space-y-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-normal text-foreground truncate", children: formatGuestName(booking) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-[10px] text-muted-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarDays, { className: "h-3 w-3" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                  booking.checkIn,
                  " → ",
                  booking.checkOut
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 text-[10px] text-muted-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-3 w-3" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: booking.guestCount })
              ] })
            ] }),
            booking && onShowOnGrid && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: (e) => {
                  e.stopPropagation();
                  onShowOnGrid(booking.id);
                },
                className: "mt-3 inline-flex w-full items-center justify-center gap-1.5 rounded-lg bg-primary/10 hover:bg-primary hover:text-primary-foreground text-primary text-[10px] font-bold uppercase tracking-wide px-2 py-1.5 ring-1 ring-primary/20 transition-all duration-200 hover:scale-[1.03]",
                title: t("viewOnGrid"),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarRange, { className: "h-3 w-3" }),
                  t("viewOnGrid")
                ]
              }
            )
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" }),
            t("available")
          ] })
        ]
      },
      room.number
    );
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-4 px-4 pb-4", children: grouped.map(([catId, items]) => {
    const cat = categories.find((c) => c.id === catId);
    const label = cat ? cat.label[lang] || cat.short : catId;
    const short = cat?.short ?? "";
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        className: "rounded-2xl border border-border bg-card/60 backdrop-blur-sm shadow-sm overflow-hidden",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "flex items-center justify-between gap-3 px-4 py-3 border-b border-border bg-muted/40", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline gap-2 min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-bold text-foreground truncate", children: label }),
              short && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-semibold uppercase tracking-wider text-muted-foreground", children: short })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center justify-center min-w-[1.5rem] h-6 px-2 rounded-full bg-primary/10 text-primary text-[11px] font-bold", children: items.length })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 p-3", children: items.map(renderTile) })
        ]
      },
      catId
    );
  }) });
}
function HotelDashboardBody({
  showNavbar = true,
  showFooter = true,
  viewMode: controlledViewMode,
  onViewModeChange
}) {
  const { t } = useI18n();
  const { pathname, search } = useLocation();
  const navigate = useNavigate();
  const isAdminRoute = pathname.startsWith("/admin");
  const { bookings, addBooking, removeBooking, updateBooking } = useBookingsContext();
  const { rooms } = useHotelGrid();
  const [internalViewMode, setInternalViewMode] = reactExports.useState("timeline");
  const viewMode = controlledViewMode ?? internalViewMode;
  const setViewMode = reactExports.useCallback(
    (next) => {
      const resolved = typeof next === "function" ? next(viewMode) : next;
      if (onViewModeChange) onViewModeChange(resolved);
      if (controlledViewMode === void 0) setInternalViewMode(resolved);
    },
    [controlledViewMode, onViewModeChange, viewMode]
  );
  const [statusFilter, setStatusFilter] = reactExports.useState("all");
  const [editRoomNumber, setEditRoomNumber] = reactExports.useState(null);
  const [editBookingId, setEditBookingId] = reactExports.useState(null);
  const [focusBookingId, setFocusBookingId] = reactExports.useState(null);
  const { focusBookingRequest, clearFocusRequest, criticalBookingIds } = useNotifications();
  reactExports.useEffect(() => {
    if (!focusBookingRequest) return;
    setFocusBookingId(focusBookingRequest);
    setViewMode("timeline");
    clearFocusRequest();
  }, [focusBookingRequest]);
  const handleSummarySelect = reactExports.useCallback((filter) => {
    setStatusFilter(filter);
    setViewMode("tiles");
    if (typeof window !== "undefined") {
      window.requestAnimationFrame(() => {
        document.getElementById("hotel-main-grid")?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  }, []);
  reactExports.useEffect(() => {
    if (focusBookingId) setViewMode("timeline");
  }, [focusBookingId]);
  reactExports.useEffect(() => {
    if (typeof window === "undefined") return;
    const handler = () => {
      setStatusFilter("all");
      setViewMode("timeline");
      window.requestAnimationFrame(() => {
        document.getElementById("hotel-main-grid")?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    };
    window.addEventListener("workspace:reset", handler);
    return () => window.removeEventListener("workspace:reset", handler);
  }, [setViewMode]);
  reactExports.useEffect(() => {
    if (typeof window === "undefined") return;
    const handler = (ev) => {
      if (viewMode === "timeline") return;
      const detail = ev.detail;
      setViewMode("timeline");
      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
          window.dispatchEvent(new CustomEvent("hotel:change-room", { detail }));
        });
      });
    };
    window.addEventListener("hotel:change-room", handler);
    return () => window.removeEventListener("hotel:change-room", handler);
  }, [viewMode, setViewMode]);
  reactExports.useEffect(() => {
    const params = new URLSearchParams(
      typeof search === "string" ? search : new URLSearchParams(search).toString()
    );
    const id = params.get("focus");
    if (!id) return;
    setFocusBookingId(id);
    setViewMode("timeline");
    if (typeof window !== "undefined") {
      window.requestAnimationFrame(() => {
        document.getElementById("hotel-main-grid")?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
    navigate({ to: pathname, search: {}, replace: true });
  }, [search]);
  const handleFocusConsumed = reactExports.useCallback(() => {
    setFocusBookingId(null);
  }, []);
  const goToBookingOnGrid = reactExports.useCallback((bookingId) => {
    setViewMode("timeline");
    setFocusBookingId(bookingId);
  }, []);
  const handleAddBooking = reactExports.useCallback((b) => {
    const ok = addBooking(b);
    if (ok) setStatusFilter((prev) => prev !== "all" && prev !== b.status ? "all" : prev);
    return ok;
  }, [addBooking]);
  const handleUpdateBooking = reactExports.useCallback((id, updates) => {
    const ok = updateBooking(id, updates);
    if (ok && updates.status) {
      setStatusFilter((prev) => prev !== "all" && prev !== updates.status ? "all" : prev);
    }
    return ok;
  }, [updateBooking]);
  const handleEditRoom = reactExports.useCallback((roomNumber) => {
    setEditBookingId(null);
    setEditRoomNumber(roomNumber);
  }, []);
  const handleEditBooking = reactExports.useCallback((bookingId) => {
    const b = bookings.find((x) => x.id === bookingId);
    if (!b) return;
    setEditBookingId(bookingId);
    setEditRoomNumber(b.roomNumber);
  }, [bookings]);
  const editingBooking = reactExports.useMemo(() => {
    if (editBookingId) return bookings.find((b) => b.id === editBookingId) ?? null;
    if (editRoomNumber == null) return null;
    const today = startOfDay(/* @__PURE__ */ new Date());
    return bookings.find(
      (b) => b.roomNumber === editRoomNumber && isWithinInterval(today, { start: parseISO(b.checkIn), end: parseISO(b.checkOut) })
    ) ?? null;
  }, [editBookingId, editRoomNumber, bookings]);
  const counts = reactExports.useMemo(() => {
    const c = { all: bookings.length };
    bookings.forEach((booking) => {
      c[booking.status] = (c[booking.status] || 0) + 1;
    });
    return c;
  }, [bookings]);
  const summary = reactExports.useMemo(() => {
    const inHouse = counts["in-house"] || 0;
    const booked = counts.booked || 0;
    const confirmed = counts.confirmed || 0;
    const pending = counts.pending || 0;
    const maintenance = counts.maintenance || 0;
    const checkedOut = counts["checked-out"] || 0;
    const occupied = inHouse + booked + confirmed + pending + maintenance;
    return {
      total: rooms.length,
      available: Math.max(0, rooms.length - occupied),
      confirmed,
      pending,
      booked,
      inHouse,
      checkedOut,
      maintenance
    };
  }, [counts, rooms]);
  const filteredBookings = reactExports.useMemo(() => {
    if (statusFilter === "all") return bookings;
    return bookings.filter((booking) => booking.status === statusFilter);
  }, [bookings, statusFilter]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    showNavbar && /* @__PURE__ */ jsxRuntimeExports.jsx(HotelNavbar, { totalRooms: rooms.length, viewMode, onViewModeChange: setViewMode }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(HotelSummaryCards, { ...summary, activeFilter: statusFilter, onSelect: handleSummarySelect }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(HotelStatusFilter, { activeFilter: statusFilter, onFilterChange: setStatusFilter, counts }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { id: "hotel-main-grid", className: "flex min-h-0 flex-1 flex-col px-4 pb-2 scroll-mt-4 transition-[opacity] duration-300", children: viewMode === "timeline" ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      HotelRoomGrid,
      {
        bookings: filteredBookings,
        conflictBookings: bookings,
        onAddBooking: handleAddBooking,
        onDeleteBooking: removeBooking,
        onUpdateBooking: handleUpdateBooking,
        focusBookingId,
        onFocusConsumed: handleFocusConsumed,
        labelWidth: isAdminRoute ? 320 : void 0
      }
    ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-0 flex-1 overflow-y-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      HotelRoomTileGrid,
      {
        rooms,
        bookings,
        activeFilter: statusFilter,
        selectedDate: /* @__PURE__ */ new Date(),
        onEditRoom: handleEditRoom,
        onShowOnGrid: goToBookingOnGrid,
        onEditBooking: handleEditBooking
      }
    ) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      BookingDialog,
      {
        open: editRoomNumber != null,
        onClose: () => {
          setEditRoomNumber(null);
          setEditBookingId(null);
        },
        onSave: (b) => {
          const ok = handleAddBooking(b);
          if (ok !== false) {
            setEditRoomNumber(null);
            setEditBookingId(null);
          }
          return ok;
        },
        onUpdate: handleUpdateBooking,
        onDelete: removeBooking,
        roomNumber: editRoomNumber ?? 0,
        checkIn: editingBooking?.checkIn ?? format(/* @__PURE__ */ new Date(), "yyyy-MM-dd"),
        checkOut: editingBooking?.checkOut ?? format(addDays(/* @__PURE__ */ new Date(), 1), "yyyy-MM-dd"),
        editBooking: editingBooking
      }
    ),
    showFooter && /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "footer-animate shrink-0 px-4 py-2 text-center text-[11px] text-muted-foreground", children: t("copyright") })
  ] });
}
function HotelDashboard() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-screen flex-col overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(HotelDashboardBody, {}) });
}
export {
  HotelDashboard as H,
  HotelDashboardBody as a
};
