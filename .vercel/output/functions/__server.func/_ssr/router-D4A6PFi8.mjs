import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent, d as useRouterState, O as Outlet, e as useNavigate, f as useLocation } from "../_libs/tanstack__react-router.mjs";
import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { z } from "../_libs/next-themes.mjs";
import { T as Toaster$2, t as toast$1 } from "../_libs/sonner.mjs";
import { P as Provider$1, R as Root2, T as Title, D as Description, C as Close, V as Viewport, A as Action } from "../_libs/radix-ui__react-toast.mjs";
import { c as cva } from "../_libs/class-variance-authority.mjs";
import { c as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { P as Provider, C as Content2 } from "../_libs/radix-ui__react-tooltip.mjs";
import { s as supabase } from "./client-Cr_PIcuQ.mjs";
import { s as startOfDay, p as parseISO, i as isBefore, d as differenceInCalendarDays } from "../_libs/date-fns.mjs";
import { B as Bell, X, L as LogIn, a as LogOut, T as TriangleAlert } from "../_libs/lucide-react.mjs";
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
const Toaster$1 = ({ ...props }) => {
  const { theme = "system" } = z();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Toaster$2,
    {
      theme,
      className: "toaster group",
      position: "bottom-right",
      richColors: true,
      closeButton: true,
      expand: true,
      visibleToasts: 4,
      gap: 12,
      offset: 24,
      duration: 3800,
      toastOptions: {
        unstyled: false,
        classNames: {
          toast: "group toast pointer-events-auto relative flex w-full items-start gap-3 overflow-hidden rounded-2xl border pl-4 pr-10 py-3.5 text-card-foreground shadow-[0_24px_60px_-16px_rgba(0,0,0,0.28),0_8px_20px_-8px_rgba(0,0,0,0.14)] backdrop-blur-xl backdrop-saturate-150 transition-all data-[swipe=move]:transition-none",
          title: "text-[13.5px] font-semibold leading-snug tracking-tight break-words",
          description: "text-[12px] leading-relaxed opacity-85 mt-0.5 break-words",
          actionButton: "group-[.toast]:rounded-lg group-[.toast]:bg-primary group-[.toast]:px-3 group-[.toast]:py-1.5 group-[.toast]:text-xs group-[.toast]:font-semibold group-[.toast]:text-primary-foreground hover:group-[.toast]:opacity-90",
          cancelButton: "group-[.toast]:rounded-lg group-[.toast]:bg-muted group-[.toast]:px-3 group-[.toast]:py-1.5 group-[.toast]:text-xs group-[.toast]:font-medium group-[.toast]:text-muted-foreground",
          closeButton: "group-[.toast]:!absolute group-[.toast]:!left-auto group-[.toast]:!right-2.5 group-[.toast]:!top-2.5 group-[.toast]:!translate-x-0 group-[.toast]:!translate-y-0 group-[.toast]:!h-6 group-[.toast]:!w-6 group-[.toast]:!rounded-full group-[.toast]:!border-0 group-[.toast]:!bg-black/[0.06] dark:group-[.toast]:!bg-white/10 group-[.toast]:!text-current group-[.toast]:!opacity-70 hover:group-[.toast]:!opacity-100 hover:group-[.toast]:!bg-black/15 dark:hover:group-[.toast]:!bg-white/20 group-[.toast]:!shadow-none group-[.toast]:!inline-flex group-[.toast]:!items-center group-[.toast]:!justify-center group-[.toast]:!transition-all group-[.toast]:!duration-150 focus-visible:group-[.toast]:!ring-2 focus-visible:group-[.toast]:!ring-current/30 focus-visible:group-[.toast]:!opacity-100 [&>svg]:!h-3 [&>svg]:!w-3 [&>svg]:!stroke-[3] [&>svg]:!opacity-100",
          success: "group-[.toaster]:!border-emerald-500/40 group-[.toaster]:!bg-gradient-to-br group-[.toaster]:!from-emerald-50 group-[.toaster]:!to-emerald-100/70 group-[.toaster]:!text-emerald-900 dark:group-[.toaster]:!from-emerald-950/80 dark:group-[.toaster]:!to-emerald-900/40 dark:group-[.toaster]:!text-emerald-50 dark:group-[.toaster]:!border-emerald-400/30",
          error: "group-[.toaster]:!border-rose-500/40 group-[.toaster]:!bg-gradient-to-br group-[.toaster]:!from-rose-50 group-[.toaster]:!to-rose-100/70 group-[.toaster]:!text-rose-900 dark:group-[.toaster]:!from-rose-950/80 dark:group-[.toaster]:!to-rose-900/40 dark:group-[.toaster]:!text-rose-50 dark:group-[.toaster]:!border-rose-400/30",
          warning: "group-[.toaster]:!border-amber-500/40 group-[.toaster]:!bg-gradient-to-br group-[.toaster]:!from-amber-50 group-[.toaster]:!to-amber-100/70 group-[.toaster]:!text-amber-900 dark:group-[.toaster]:!from-amber-950/80 dark:group-[.toaster]:!to-amber-900/40 dark:group-[.toaster]:!text-amber-50 dark:group-[.toaster]:!border-amber-400/30",
          info: "group-[.toaster]:!border-sky-500/40 group-[.toaster]:!bg-gradient-to-br group-[.toaster]:!from-sky-50 group-[.toaster]:!to-sky-100/70 group-[.toaster]:!text-sky-900 dark:group-[.toaster]:!from-sky-950/80 dark:group-[.toaster]:!to-sky-900/40 dark:group-[.toaster]:!text-sky-50 dark:group-[.toaster]:!border-sky-400/30",
          icon: "shrink-0 mt-[3px] [&_svg]:!h-4 [&_svg]:!w-4"
        }
      },
      ...props
    }
  );
};
const TOAST_LIMIT = 1;
const TOAST_REMOVE_DELAY = 1e6;
let count = 0;
function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER;
  return count.toString();
}
const toastTimeouts = /* @__PURE__ */ new Map();
const addToRemoveQueue = (toastId) => {
  if (toastTimeouts.has(toastId)) {
    return;
  }
  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId);
    dispatch({
      type: "REMOVE_TOAST",
      toastId
    });
  }, TOAST_REMOVE_DELAY);
  toastTimeouts.set(toastId, timeout);
};
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TOAST":
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT)
      };
    case "UPDATE_TOAST":
      return {
        ...state,
        toasts: state.toasts.map((t) => t.id === action.toast.id ? { ...t, ...action.toast } : t)
      };
    case "DISMISS_TOAST": {
      const { toastId } = action;
      if (toastId) {
        addToRemoveQueue(toastId);
      } else {
        state.toasts.forEach((toast2) => {
          addToRemoveQueue(toast2.id);
        });
      }
      return {
        ...state,
        toasts: state.toasts.map(
          (t) => t.id === toastId || toastId === void 0 ? {
            ...t,
            open: false
          } : t
        )
      };
    }
    case "REMOVE_TOAST":
      if (action.toastId === void 0) {
        return {
          ...state,
          toasts: []
        };
      }
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId)
      };
  }
};
const listeners = [];
let memoryState = { toasts: [] };
function dispatch(action) {
  memoryState = reducer(memoryState, action);
  listeners.forEach((listener) => {
    listener(memoryState);
  });
}
function toast({ ...props }) {
  const id = genId();
  const update = (props2) => dispatch({
    type: "UPDATE_TOAST",
    toast: { ...props2, id }
  });
  const dismiss = () => dispatch({ type: "DISMISS_TOAST", toastId: id });
  dispatch({
    type: "ADD_TOAST",
    toast: {
      ...props,
      id,
      open: true,
      onOpenChange: (open) => {
        if (!open) dismiss();
      }
    }
  });
  return {
    id,
    dismiss,
    update
  };
}
function useToast() {
  const [state, setState] = reactExports.useState(memoryState);
  reactExports.useEffect(() => {
    listeners.push(setState);
    return () => {
      const index = listeners.indexOf(setState);
      if (index > -1) {
        listeners.splice(index, 1);
      }
    };
  }, [state]);
  return {
    ...state,
    toast,
    dismiss: (toastId) => dispatch({ type: "DISMISS_TOAST", toastId })
  };
}
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const ToastProvider = Provider$1;
const ToastViewport = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Viewport,
  {
    ref,
    className: cn(
      "fixed bottom-0 right-0 z-[100] flex max-h-screen w-full flex-col p-4 sm:flex-col md:max-w-[420px]",
      className
    ),
    ...props
  }
));
ToastViewport.displayName = Viewport.displayName;
const toastVariants = cva(
  "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-bottom-full",
  {
    variants: {
      variant: {
        default: "border bg-background text-foreground",
        destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
const Toast = reactExports.forwardRef(({ className, variant, ...props }, ref) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Root2, { ref, className: cn(toastVariants({ variant }), className), ...props });
});
Toast.displayName = Root2.displayName;
const ToastAction = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Action,
  {
    ref,
    className: cn(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors group-[.destructive]:border-muted/40 hover:bg-secondary group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 group-[.destructive]:focus:ring-destructive disabled:pointer-events-none disabled:opacity-50",
      className
    ),
    ...props
  }
));
ToastAction.displayName = Action.displayName;
const ToastClose = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Close,
  {
    ref,
    className: cn(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 group-[.destructive]:text-red-300 hover:text-foreground group-[.destructive]:hover:text-red-50 focus:opacity-100 focus:outline-none focus:ring-2 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      className
    ),
    "toast-close": "",
    ...props,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" })
  }
));
ToastClose.displayName = Close.displayName;
const ToastTitle = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Title, { ref, className: cn("text-sm font-semibold", className), ...props }));
ToastTitle.displayName = Title.displayName;
const ToastDescription = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Description, { ref, className: cn("text-sm opacity-90", className), ...props }));
ToastDescription.displayName = Description.displayName;
function Toaster() {
  const { toasts } = useToast();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(ToastProvider, { children: [
    toasts.map(function({ id, title, description, action, ...props }) {
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(Toast, { ...props, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-1", children: [
          title && /* @__PURE__ */ jsxRuntimeExports.jsx(ToastTitle, { children: title }),
          description && /* @__PURE__ */ jsxRuntimeExports.jsx(ToastDescription, { children: description })
        ] }),
        action,
        /* @__PURE__ */ jsxRuntimeExports.jsx(ToastClose, {})
      ] }, id);
    }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ToastViewport, {})
  ] });
}
const TooltipProvider = Provider;
const TooltipContent = reactExports.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Content2,
  {
    ref,
    sideOffset,
    className: cn(
      "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  }
));
TooltipContent.displayName = Content2.displayName;
const ROOM_CATEGORIES = [
  { id: "standard-double", label: { en: "Standard Double", ru: "Стандарт Двухместный", uz: "Standart Ikki kishilik" }, short: "Std Dbl", maxGuests: 2 },
  { id: "standard-twin", label: { en: "Standard Twin", ru: "Стандарт Твин", uz: "Standart Twin" }, short: "Std Twin", maxGuests: 2 },
  { id: "standard-triple", label: { en: "Standard Triple", ru: "Стандарт Трёхместный", uz: "Standart Uch kishilik" }, short: "Std Trpl", maxGuests: 3 },
  { id: "standard-quadruple", label: { en: "Standard Quadruple", ru: "Стандарт Четырёхместный", uz: "Standart To'rt kishilik" }, short: "Std Quad", maxGuests: 4 },
  { id: "deluxe-double", label: { en: "Deluxe Double", ru: "Делюкс Двухместный", uz: "Deluxe Ikki kishilik" }, short: "Dlx Dbl", maxGuests: 2 },
  { id: "deluxe-twin", label: { en: "Deluxe Twin", ru: "Делюкс Твин", uz: "Deluxe Twin" }, short: "Dlx Twin", maxGuests: 2 }
];
const ROOMS_PER_CATEGORY = 5;
const BOOKING_STATUSES = {
  confirmed: { color: "#3B82F6", bg: "bg-blue-500", border: "border-solid border-blue-600", opacity: "opacity-100", label: { en: "Confirmed", ru: "Подтверждено", uz: "Tasdiqlangan" }, icon: "✔", tailwindBg: "bg-blue-50", tailwindText: "text-blue-700", tailwindBorder: "border-blue-200" },
  pending: { color: "#F59E0B", bg: "bg-amber-500", border: "border-solid border-amber-600", opacity: "opacity-100", label: { en: "Pending", ru: "Ожидание", uz: "Kutilmoqda" }, icon: "⏳", tailwindBg: "bg-amber-50", tailwindText: "text-amber-700", tailwindBorder: "border-amber-200" },
  booked: { color: "#8B5CF6", bg: "bg-violet-500", border: "border-solid border-violet-600", opacity: "opacity-100", label: { en: "Booked", ru: "Забронировано", uz: "Band qilingan" }, icon: "📋", tailwindBg: "bg-violet-50", tailwindText: "text-violet-700", tailwindBorder: "border-violet-200" },
  "in-house": { color: "#10B981", bg: "bg-emerald-500", border: "border-solid border-emerald-600", opacity: "opacity-100", label: { en: "In House", ru: "Проживает", uz: "Ichkarida" }, icon: "🛏", tailwindBg: "bg-emerald-50", tailwindText: "text-emerald-700", tailwindBorder: "border-emerald-200" },
  "checked-out": { color: "#6B7280", bg: "bg-gray-400/60", border: "border-solid border-gray-300", opacity: "opacity-60", label: { en: "Checked Out", ru: "Выехал", uz: "Chiqib ketgan" }, icon: "✓", tailwindBg: "bg-gray-100", tailwindText: "text-gray-600", tailwindBorder: "border-gray-200" },
  maintenance: { color: "#EF4444", bg: "bg-red-500", border: "border-solid border-red-600", opacity: "opacity-90", label: { en: "Maintenance", ru: "Обслуживание", uz: "Texnik xizmat" }, icon: "🔧", tailwindBg: "bg-red-50", tailwindText: "text-red-700", tailwindBorder: "border-red-200" },
  dirty: { color: "#EF4444", bg: "bg-red-500", border: "border-solid border-red-600", opacity: "opacity-90", label: { en: "Dirty", ru: "Грязный", uz: "Iflos" }, icon: "🧹", tailwindBg: "bg-red-50", tailwindText: "text-red-700", tailwindBorder: "border-red-200" },
  cleaned: { color: "#9CA3AF", bg: "bg-gray-400/60", border: "border-solid border-gray-300", opacity: "opacity-60", label: { en: "Cleaned", ru: "Убрано", uz: "Tozalangan" }, icon: "✨", tailwindBg: "bg-gray-100", tailwindText: "text-gray-600", tailwindBorder: "border-gray-200" }
};
function isRoomDirty(roomNumber, bookings) {
  return bookings.some((b) => b.roomNumber === roomNumber && b.status === "dirty");
}
function generateSampleBookings() {
  return [
    { id: "b1", roomNumber: 101, guestName: "John Doe", guestPhone: "+998901234567", guestEmail: "john@email.com", guestCount: 2, checkIn: "2026-04-11", checkOut: "2026-04-16", notes: "VIP guest", status: "in-house" },
    { id: "b2", roomNumber: 102, guestName: "Asef Karimov", guestPhone: "+998907654321", guestEmail: "asef@email.com", guestCount: 1, checkIn: "2026-04-10", checkOut: "2026-04-16", notes: "", status: "confirmed" },
    { id: "b3", roomNumber: 103, guestName: "Maria Ivanova", guestPhone: "+998912223344", guestEmail: "maria@email.com", guestCount: 2, checkIn: "2026-04-11", checkOut: "2026-04-12", notes: "Early checkout", status: "pending" },
    { id: "b4", roomNumber: 104, guestName: "Alex Turner", guestPhone: "+998933334455", guestEmail: "alex@email.com", guestCount: 1, checkIn: "2026-04-09", checkOut: "2026-04-11", notes: "", status: "checked-out" },
    { id: "b5", roomNumber: 105, guestName: "Sam Wilson", guestPhone: "+998944445566", guestEmail: "sam@email.com", guestCount: 1, checkIn: "2026-04-11", checkOut: "2026-04-14", notes: "", status: "booked" },
    { id: "b6", roomNumber: 201, guestName: "", guestPhone: "", guestEmail: "", guestCount: 0, checkIn: "2026-04-10", checkOut: "2026-04-20", notes: "Plumbing repair", status: "maintenance" },
    { id: "b7", roomNumber: 202, guestName: "Elena Petrova", guestPhone: "+998955556677", guestEmail: "elena@email.com", guestCount: 2, checkIn: "2026-04-12", checkOut: "2026-04-18", notes: "", status: "confirmed" },
    { id: "b8", roomNumber: 203, guestName: "Dmitry Volkov", guestPhone: "+998966667788", guestEmail: "dmitry@email.com", guestCount: 1, checkIn: "2026-04-13", checkOut: "2026-04-19", notes: "", status: "booked" },
    { id: "b9", roomNumber: 204, guestName: "Lola Alimova", guestPhone: "+998977778899", guestEmail: "lola@email.com", guestCount: 3, checkIn: "2026-04-11", checkOut: "2026-04-15", notes: "Family room", status: "in-house" },
    { id: "b10", roomNumber: 205, guestName: "Rustam Akhmedov", guestPhone: "+998988889900", guestEmail: "rustam@email.com", guestCount: 2, checkIn: "2026-04-14", checkOut: "2026-04-20", notes: "", status: "pending" },
    { id: "b11", roomNumber: 301, guestName: "Anna Schmidt", guestPhone: "+498123456789", guestEmail: "anna@email.com", guestCount: 2, checkIn: "2026-04-12", checkOut: "2026-04-17", notes: "", status: "confirmed" },
    { id: "b12", roomNumber: 302, guestName: "Pierre Dupont", guestPhone: "+331234567890", guestEmail: "pierre@email.com", guestCount: 1, checkIn: "2026-04-13", checkOut: "2026-04-18", notes: "Late arrival", status: "pending" },
    { id: "b13", roomNumber: 303, guestName: "Yuki Tanaka", guestPhone: "+811234567890", guestEmail: "yuki@email.com", guestCount: 2, checkIn: "2026-04-11", checkOut: "2026-04-14", notes: "", status: "in-house" },
    { id: "b14", roomNumber: 304, guestName: "Omar Hassan", guestPhone: "+201234567890", guestEmail: "omar@email.com", guestCount: 1, checkIn: "2026-04-15", checkOut: "2026-04-21", notes: "", status: "booked" },
    { id: "b15", roomNumber: 305, guestName: "Li Wei", guestPhone: "+861234567890", guestEmail: "li@email.com", guestCount: 2, checkIn: "2026-04-12", checkOut: "2026-04-16", notes: "", status: "confirmed" },
    { id: "b16", roomNumber: 401, guestName: "Carlos Silva", guestPhone: "+551234567890", guestEmail: "carlos@email.com", guestCount: 4, checkIn: "2026-04-11", checkOut: "2026-04-19", notes: "Large family", status: "in-house" },
    { id: "b17", roomNumber: 402, guestName: "Priya Patel", guestPhone: "+911234567890", guestEmail: "priya@email.com", guestCount: 3, checkIn: "2026-04-14", checkOut: "2026-04-22", notes: "", status: "pending" },
    { id: "b18", roomNumber: 104, guestName: "Фыва", guestPhone: "+998900001104", guestEmail: "fyva@sayohat.uz", guestCount: 1, checkIn: "2026-04-30", checkOut: "2026-05-01", notes: "Номер 104", status: "confirmed", checkInHalfDay: true, checkOutHalfDay: true }
  ];
}
function formatGuestName(b) {
  const last = (b.guestLastName || "").trim();
  const first = (b.guestFirstName || "").trim();
  const middle = (b.guestMiddleName || "").trim();
  if (last || first || middle) {
    return [last, first, middle].filter(Boolean).join(" ");
  }
  return (b.guestName || "").trim();
}
const translations = {
  // Brand
  hotelName: { ru: "Отель Саёхат", uz: "Sayohat Mehmonxonasi", en: "Sayohat Hotel" },
  roomManagement: { ru: "Управление номерами и бронированиями", uz: "Xonalar va bronlarni boshqarish", en: "Rooms & Bookings Management" },
  // Summary cards
  totalRooms: { ru: "Всего номеров", uz: "Jami xonalar", en: "Total Rooms" },
  available: { ru: "Свободные", uz: "Bo'sh xonalar", en: "Available" },
  confirmed: { ru: "Подтверждённые", uz: "Tasdiqlangan", en: "Confirmed" },
  pendingLabel: { ru: "Ожидают подтверждения", uz: "Tasdiq kutilmoqda", en: "Awaiting Confirmation" },
  bookedLabel: { ru: "Забронированы", uz: "Band qilingan", en: "Booked" },
  inHouse: { ru: "Проживают", uz: "Yashayapti", en: "In House" },
  checkedOutLabel: { ru: "Выехали", uz: "Chiqib ketgan", en: "Checked Out" },
  maintenanceLabel: { ru: "На обслуживании", uz: "Texnik xizmatda", en: "Maintenance" },
  // Status pills
  filterByStatus: { ru: "Фильтр по статусу", uz: "Holat bo'yicha filtr", en: "Filter by status" },
  all: { ru: "Все", uz: "Barchasi", en: "All" },
  // Grid
  roomCategory: { ru: "Номер / Категория", uz: "Xona / Turkum", en: "Room / Category" },
  room: { ru: "Номер", uz: "Xona", en: "Room" },
  rooms: { ru: "номеров", uz: "ta xona", en: "rooms" },
  person: { ru: "Гость", uz: "Mehmon", en: "Guest" },
  // Booking modal
  newBooking: { ru: "Новое бронирование", uz: "Yangi bron", en: "New Booking" },
  editBooking: { ru: "Редактировать бронирование", uz: "Bronni tahrirlash", en: "Edit Booking" },
  guestName: { ru: "Имя гостя", uz: "Mehmon ismi", en: "Guest Name" },
  fullName: { ru: "Полное имя гостя", uz: "Mehmonning to'liq ismi", en: "Full guest name" },
  firstName: { ru: "Имя", uz: "Ism", en: "First Name" },
  lastName: { ru: "Фамилия", uz: "Familiya", en: "Last Name" },
  firstNamePlaceholder: { ru: "Введите имя", uz: "Ismni kiriting", en: "Enter first name" },
  lastNamePlaceholder: { ru: "Введите фамилию", uz: "Familiyani kiriting", en: "Enter last name" },
  phone: { ru: "Телефон", uz: "Telefon raqami", en: "Phone" },
  email: { ru: "Электронная почта", uz: "Elektron pochta", en: "Email" },
  whatsapp: { ru: "WhatsApp", uz: "WhatsApp", en: "WhatsApp" },
  telegram: { ru: "Telegram", uz: "Telegram", en: "Telegram" },
  instagram: { ru: "Instagram", uz: "Instagram", en: "Instagram" },
  contactMethods: { ru: "Способы связи", uz: "Bog'lanish usullari", en: "Contact methods" },
  telegramPlaceholder: { ru: "@username", uz: "@username", en: "@username" },
  instagramPlaceholder: { ru: "@username", uz: "@username", en: "@username" },
  checkIn: { ru: "Дата заезда", uz: "Kirish sanasi", en: "Check-in Date" },
  checkOut: { ru: "Дата выезда", uz: "Chiqish sanasi", en: "Check-out Date" },
  guests: { ru: "Кол-во гостей", uz: "Mehmonlar soni", en: "Guests" },
  status: { ru: "Статус брони", uz: "Bron holati", en: "Booking Status" },
  notes: { ru: "Дополнительные заметки", uz: "Qo'shimcha eslatmalar", en: "Additional notes" },
  specialRequests: { ru: "Особые пожелания гостя…", uz: "Mehmonning maxsus so'rovlari…", en: "Special guest requests…" },
  // Buttons
  cancel: { ru: "Отмена", uz: "Bekor qilish", en: "Cancel" },
  save: { ru: "Сохранить", uz: "Saqlash", en: "Save" },
  delete: { ru: "Удалить", uz: "O'chirish", en: "Delete" },
  back: { ru: "Назад", uz: "Orqaga", en: "Back" },
  confirm: { ru: "Подтвердить", uz: "Tasdiqlash", en: "Confirm" },
  // Toasts
  bookingSaved: { ru: "Бронирование успешно сохранено", uz: "Bron muvaffaqiyatli saqlandi", en: "Booking saved successfully" },
  bookingDeleted: { ru: "Бронирование удалено", uz: "Bron o'chirildi", en: "Booking deleted" },
  // Delete reason flow
  deleteBookingTitle: { ru: "Удаление бронирования", uz: "Bronni o'chirish", en: "Delete Booking" },
  deleteBookingSubtitle: { ru: "Это действие нельзя отменить. Пожалуйста, укажите причину.", uz: "Bu amalni bekor qilib bo‘lmaydi. Iltimos, sababini ko‘rsating.", en: "This action cannot be undone. Please provide a reason." },
  reasonLabel: { ru: "Причина удаления", uz: "O'chirish sababi", en: "Reason for deletion" },
  reasonPlaceholder: { ru: "Опишите подробно, почему вы удаляете эту бронь…", uz: "Bu bronni nima uchun o'chirayotganingizni batafsil yozing…", en: "Describe in detail why you are deleting this booking…" },
  reasonRequired: { ru: "Пожалуйста, укажите причину (минимум 10 символов).", uz: "Iltimos, sababini ko'rsating (kamida 10 belgi).", en: "Please provide a reason (at least 10 characters)." },
  reasonPreset: { ru: "Быстрый выбор", uz: "Tez tanlash", en: "Quick select" },
  reasonGuestCancelled: { ru: "Гость отменил бронь", uz: "Mehmon bronni bekor qildi", en: "Guest cancelled booking" },
  reasonNoShow: { ru: "Гость не заехал (no-show)", uz: "Mehmon kelmadi (no-show)", en: "Guest no-show" },
  reasonDuplicate: { ru: "Дубликат бронирования", uz: "Takroriy bron", en: "Duplicate booking" },
  reasonError: { ru: "Ошибка при создании", uz: "Yaratishdagi xatolik", en: "Created in error" },
  reasonOther: { ru: "Другая причина", uz: "Boshqa sabab", en: "Other reason" },
  bookingSummary: { ru: "Что будет удалено", uz: "Nima o'chiriladi", en: "What will be deleted" },
  iUnderstand: { ru: "Я понимаю, что это действие необратимо", uz: "Bu amal qaytarib bo‘lmasligini tushunaman", en: "I understand this action is permanent" },
  confirmDelete: { ru: "Удалить навсегда", uz: "Butunlay o‘chirish", en: "Delete permanently" },
  // Misc
  copyright: { ru: "© 2026 Отель Саёхат · Все права защищены", uz: "© 2026 Sayohat Mehmonxonasi · Barcha huquqlar himoyalangan", en: "© 2026 Sayohat Hotel · All rights reserved" },
  jumpToToday: { ru: "К сегодняшней дате", uz: "Bugungi sanaga", en: "Jump to today" },
  today: { ru: "Сегодня", uz: "Bugun", en: "Today" },
  checkInOutInfo: { ru: "Заезд с 14:00 · Выезд до 12:00", uz: "Kirish 14:00 dan · Chiqish 12:00 gacha", en: "Check-in from 14:00 · Check-out by 12:00" },
  nightsShort: { ru: "ноч.", uz: "kecha", en: "nt." },
  tilesView: { ru: "Сетка номеров", uz: "Xonalar panjarasi", en: "Tile View" },
  timelineView: { ru: "Календарь броней", uz: "Bronlar taqvimi", en: "Timeline View" },
  viewOnGrid: { ru: "Показать на сетке", uz: "Panjarada koʻrsatish", en: "View on grid" },
  // Category & room management (NEW)
  addCategory: { ru: "Новая категория", uz: "Yangi turkum", en: "New Category" },
  addCategoryTitle: { ru: "Добавить категорию номеров", uz: "Xona turkumini qo'shish", en: "Add Room Category" },
  addRoom: { ru: "Добавить номер", uz: "Xona qo'shish", en: "Add Room" },
  addRoomTitle: { ru: "Новый номер", uz: "Yangi xona", en: "New Room" },
  categoryName: { ru: "Название категории", uz: "Turkum nomi", en: "Category Name" },
  categoryNamePlaceholder: { ru: "Например: Люкс Люкс", uz: "Masalan: Lyuks Lyuks", en: "e.g. Royal Suite" },
  shortCode: { ru: "Короткий код", uz: "Qisqa kod", en: "Short Code" },
  shortCodePlaceholder: { ru: "Например: STD DBL", uz: "Masalan: STD DBL", en: "e.g. STD DBL" },
  maxGuests: { ru: "Макс. гостей", uz: "Maks. mehmonlar", en: "Max Guests" },
  roomNumber: { ru: "Номер комнаты", uz: "Xona raqami", en: "Room Number" },
  roomNumberPlaceholder: { ru: "Например: 106", uz: "Masalan: 106", en: "e.g. 106" },
  category: { ru: "Категория", uz: "Turkum", en: "Category" },
  create: { ru: "Создать", uz: "Yaratish", en: "Create" },
  deleteCategory: { ru: "Удалить категорию", uz: "Turkumni o'chirish", en: "Delete category" },
  deleteRoom: { ru: "Удалить номер", uz: "Xonani o'chirish", en: "Delete room" },
  categoryCreated: { ru: "Категория создана", uz: "Turkum yaratildi", en: "Category created" },
  roomCreated: { ru: "Номер создан", uz: "Xona yaratildi", en: "Room created" },
  categoryDeleted: { ru: "Категория удалена", uz: "Turkum o'chirildi", en: "Category deleted" },
  roomDeleted: { ru: "Номер удалён", uz: "Xona o'chirildi", en: "Room deleted" },
  roomExists: { ru: "Номер с таким кодом уже существует", uz: "Bunday raqamli xona allaqachon mavjud", en: "A room with this number already exists" },
  invalidNumber: { ru: "Введите положительное число", uz: "Musbat son kiriting", en: "Enter a positive number" },
  // Anketa
  openAnketa: { ru: "Открыть Анкету", uz: "Anketani ochish", en: "Open Registration Form" },
  anketaAvailableHint: { ru: "Анкета доступна после выезда гостя", uz: "Anketa mehmon chiqib ketgandan keyin mavjud", en: "Form is available after guest checkout" },
  anketaTitle: { ru: "Анкета заселяющегося гостя", uz: "Joylashayotgan mehmon anketasi", en: "Guest Registration Form" },
  anketaSubtitle: { ru: "Гостиница «Саёхат» · Регистрационная карточка", uz: "«Sayohat» mehmonxonasi · Roʻyxatga olish kartasi", en: "Sayohat Hotel · Registration card" },
  anketaProgress: { ru: "Заполнено", uz: "To'ldirildi", en: "Completed" },
  anketaPersonal: { ru: "Личные данные", uz: "Shaxsiy maʼlumotlar", en: "Personal data" },
  anketaFullName: { ru: "Ф.И.О.", uz: "F.I.SH.", en: "Full Name" },
  anketaBirthDate: { ru: "Дата рождения", uz: "Tugʻilgan sana", en: "Date of Birth" },
  anketaBirthPlace: { ru: "Место рождения", uz: "Tugʻilgan joyi", en: "Place of Birth" },
  anketaPassport: { ru: "Паспортные данные", uz: "Pasport maʼlumotlari", en: "Passport Data" },
  anketaPassportNumber: { ru: "Паспорт №", uz: "Pasport №", en: "Passport No." },
  anketaPassportIssued: { ru: "Дата выдачи", uz: "Berilgan sana", en: "Issue Date" },
  anketaPassportValid: { ru: "Действителен до", uz: "Amal qilish muddati", en: "Valid Until" },
  anketaOriginContact: { ru: "Прибытие и контакты", uz: "Kelish va aloqa", en: "Arrival & Contact" },
  anketaArrivedFrom: { ru: "Откуда прибыл", uz: "Qayerdan keldi", en: "Arrived From" },
  anketaCitizenship: { ru: "Гражданство", uz: "Fuqaroligi", en: "Citizenship" },
  anketaStay: { ru: "Проживание", uz: "Yashash maʼlumotlari", en: "Stay Details" },
  anketaCheckIn: { ru: "Дата въезда", uz: "Kirish sanasi", en: "Check-in Date" },
  anketaCheckOut: { ru: "Дата выезда", uz: "Chiqish sanasi", en: "Check-out Date" },
  anketaRoomNumber: { ru: "№ комнаты", uz: "Xona raqami", en: "Room No." },
  anketaRoomType: { ru: "Тип номера", uz: "Xona turi", en: "Room Type" },
  anketaRoomTypeStandard: { ru: "Стандарт", uz: "Standart", en: "Standard" },
  anketaRoomTypeSemiLux: { ru: "Полулюкс", uz: "Yarim lyuks", en: "Semi-Lux" },
  anketaRules: { ru: "Правила размещения", uz: "Joylashish qoidalari", en: "Accommodation Rules" },
  anketaConsent: { ru: "Ознакомление и подпись", uz: "Tanishish va imzo", en: "Consent & Signature" },
  anketaSignature: { ru: "Подпись (ФИО)", uz: "Imzo (FIO)", en: "Signature (Full Name)" },
  anketaAcknowledge: { ru: "Я ознакомлен(а) с правилами размещения и подтверждаю достоверность данных.", uz: "Joylashish qoidalari bilan tanishdim va maʼlumotlarning haqiqiyligini tasdiqlayman.", en: "I have read the accommodation rules and confirm the accuracy of the data." },
  anketaAutosaveHint: { ru: "Анкета сохраняется локально к этому бронированию", uz: "Anketa shu bronlash uchun lokal saqlanadi", en: "Form is saved locally for this booking" },
  anketaPrint: { ru: "Печать", uz: "Chop etish", en: "Print" },
  anketaSubmit: { ru: "Сохранить анкету", uz: "Anketani saqlash", en: "Save Form" },
  anketaSaved: { ru: "Анкета сохранена", uz: "Anketa saqlandi", en: "Form saved" },
  anketaIncomplete: { ru: "Заполните обязательные поля и подтвердите согласие", uz: "Majburiy maydonlarni to'ldiring va roziligingizni tasdiqlang", en: "Please complete all required fields and confirm consent" },
  anketaSigDraw: { ru: "Нарисовать", uz: "Chizish", en: "Draw" },
  anketaSigType: { ru: "Напечатать", uz: "Yozish", en: "Type" },
  anketaSigClear: { ru: "Очистить", uz: "Tozalash", en: "Clear" },
  anketaSigHint: { ru: "Подпишите здесь — мышью, пальцем или внешним пером", uz: "Shu yerga imzo qoʻying — sichqoncha, barmoq yoki tashqi qalam bilan", en: "Sign here — mouse, finger or external pen" },
  anketaSigTypeHint: { ru: "Введённое имя будет использовано как подпись", uz: "Kiritilgan ism imzo sifatida ishlatiladi", en: "The typed name will be used as the signature" },
  // External USB signature pad (WebHID)
  hidConnect: { ru: "Подключить устройство", uz: "Qurilmani ulash", en: "Connect device" },
  hidConnected: { ru: "Устройство подключено", uz: "Qurilma ulangan", en: "Device connected" },
  hidDisconnect: { ru: "Отключить", uz: "Uzish", en: "Disconnect" },
  hidUnsupported: { ru: "Браузер не поддерживает WebHID", uz: "Brauzer WebHID-ni qo'llab-quvvatlamaydi", en: "Browser does not support WebHID" },
  hidHint: { ru: "Подключите внешний планшет для подписи через USB", uz: "Imzo uchun tashqi planshetni USB orqali ulang", en: "Connect an external USB signature tablet" },
  // Unsaved-changes close warning
  unsavedTitle: { ru: "Сохранить изменения?", uz: "O‘zgarishlar saqlansinmi?", en: "Save changes?" },
  unsavedMessage: { ru: "В бронировании есть несохранённые изменения. Сохраните их или закройте без сохранения.", uz: "Bronlashda saqlanmagan o‘zgarishlar bor. Ularni saqlang yoki saqlamasdan yoping.", en: "This booking has unsaved changes. Save them or close without saving." },
  unsavedKeep: { ru: "Продолжить редактирование", uz: "Tahrirlashni davom etish", en: "Keep editing" },
  unsavedDiscard: { ru: "Не сохранять", uz: "Saqlamaslik", en: "Don’t save" },
  unsavedSave: { ru: "Сохранить изменения", uz: "O‘zgarishlarni saqlash", en: "Save changes" },
  // Patronymic / extra name
  middleName: { ru: "Отчество", uz: "Otasining ismi", en: "Patronymic" },
  middleNamePlaceholder: { ru: "Введите отчество", uz: "Otasining ismini kiriting", en: "Enter patronymic" },
  // Status cycle button
  advanceStatus: { ru: "Следующий статус", uz: "Keyingi holat", en: "Advance status" },
  currentStatus: { ru: "Текущий статус", uz: "Joriy holat", en: "Current status" },
  // Arrival/departure timing segmented group
  arrivalTiming: { ru: "Время заезда", uz: "Kirish vaqti", en: "Arrival time" },
  departureTiming: { ru: "Время выезда", uz: "Chiqish vaqti", en: "Departure time" },
  earlyOption: { ru: "Ранний", uz: "Ertaroq", en: "Early" },
  standardOption: { ru: "Стандарт", uz: "Standart", en: "Standard" },
  lateOption: { ru: "Поздний", uz: "Kechki", en: "Late" },
  // Booking bar / drag UI
  lateBadge: { ru: "ПОЗДНИЙ", uz: "KECH", en: "LATE" },
  earlyBadge: { ru: "РАННИЙ", uz: "ERTA", en: "EARLY" },
  lateCheckoutTitle: { ru: "Поздний выезд", uz: "Kechki chiqish", en: "Late checkout" },
  earlyCheckinTitle: { ru: "Ранний заезд", uz: "Ertaroq kirish", en: "Early check-in" },
  dragToExtend: { ru: "Перетащите чтобы продлить", uz: "Cho'zish uchun torting", en: "Drag to extend" },
  dragToEarly: { ru: "Перетащите для раннего заезда", uz: "Erta kirish uchun torting", en: "Drag for early check-in" },
  detailedInfo: { ru: "Подробная информация", uz: "Batafsil ma'lumot", en: "Detailed information" },
  nightsWord: { ru: "ночей", uz: "kecha", en: "nights" },
  nightsLetter: { ru: "н", uz: "k", en: "n" },
  guestsWord: { ru: "гостей", uz: "mehmon", en: "guests" },
  showBeds: { ru: "Показать кровати", uz: "Yotoqlarni ko'rsatish", en: "Show beds" },
  addGuest: { ru: "Добавить гостя", uz: "Mehmon qo'shish", en: "Add guest" },
  removeGuest: { ru: "Удалить гостя", uz: "Mehmonni olib tashlash", en: "Remove guest" },
  roomTypeLabel: { ru: "Комната / Тип", uz: "Xona / Turi", en: "Room / Type" },
  pastBookingError: { ru: "Бронирование возможно только с сегодняшней даты", uz: "Bron faqat bugundan boshlab mumkin", en: "Bookings can only be created from today onwards" },
  overlapError: { ru: "You can't put another booking in this place", uz: "You can't put another booking in this place", en: "You can't put another booking in this place" }
};
const I18nContext = reactExports.createContext({
  lang: "ru",
  setLang: () => {
  },
  t: (k) => k,
  setUserScope: () => {
  }
});
const GLOBAL_KEY = "sayohat-lang";
const userKey = (u) => `sayohat-lang:${u.toLowerCase()}`;
function readLang(key) {
  if (typeof window === "undefined") return null;
  const raw = window.localStorage.getItem(key);
  return raw === "ru" || raw === "uz" || raw === "en" ? raw : null;
}
function I18nProvider({ children }) {
  const [lang, setLang] = reactExports.useState("ru");
  const [scope, setScope] = reactExports.useState(null);
  reactExports.useEffect(() => {
    if (typeof window === "undefined") return;
    const saved = readLang(GLOBAL_KEY);
    if (saved) setLang(saved);
  }, []);
  const setUserScope = reactExports.useCallback((username) => {
    setScope(username);
    if (typeof window === "undefined") return;
    if (username) {
      const saved = readLang(userKey(username));
      if (saved) {
        setLang(saved);
      } else {
        setLang((cur) => {
          window.localStorage.setItem(userKey(username), cur);
          return cur;
        });
      }
    }
  }, []);
  const changeLang = reactExports.useCallback((l) => {
    setLang(l);
    if (typeof window === "undefined") return;
    window.localStorage.setItem(GLOBAL_KEY, l);
    if (scope) window.localStorage.setItem(userKey(scope), l);
  }, [scope]);
  const t = reactExports.useCallback((key) => translations[key]?.[lang] || key, [lang]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(I18nContext.Provider, { value: { lang, setLang: changeLang, t, setUserScope }, children });
}
function useI18n() {
  return reactExports.useContext(I18nContext);
}
const SUPABASE_URL = "https://uhbcwxyrwikrinmrpjko.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVoYmN3eHlyd2lrcmlubXJwamtvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODUzNDUxMzcsImV4cCI6MjEwMDkyMTEzN30.ak-McxmylqcUV1wbI3QyUEEKFDdsStNlV5AR1Jo8k9w";
const FLUSH_MS = 150;
function useSharedState(key, initial) {
  const [data, setDataState] = reactExports.useState(initial);
  const [ready, setReady] = reactExports.useState(false);
  const versionRef = reactExports.useRef(0);
  const committedRef = reactExports.useRef(initial);
  const pendingUpdatersRef = reactExports.useRef([]);
  const flushTimerRef = reactExports.useRef(null);
  const localEchoRef = reactExports.useRef(0);
  const flushingRef = reactExports.useRef(false);
  reactExports.useEffect(() => {
    let cancelled = false;
    (async () => {
      const { data: row, error } = await supabase.from("hotel_app_state").select("state_data, version").eq("state_key", key).maybeSingle();
      if (cancelled) return;
      if (!error && row) {
        versionRef.current = Number(row.version) || 0;
        committedRef.current = row.state_data;
        setDataState(row.state_data);
      } else {
        const { data: seeded } = await supabase.rpc("hotel_app_state_cas", { p_key: key, p_expected_version: 0, p_state_data: initial }).select().maybeSingle();
        if (seeded) {
          versionRef.current = Number(seeded.version) || 1;
          committedRef.current = seeded.state_data ?? initial;
        }
      }
      setReady(true);
    })();
    return () => {
      cancelled = true;
    };
  }, [key]);
  reactExports.useEffect(() => {
    const channel = supabase.channel(`hotel_app_state:${key}`).on(
      "postgres_changes",
      { event: "*", schema: "public", table: "hotel_app_state", filter: `state_key=eq.${key}` },
      (payload) => {
        const row = payload.new ?? payload.old;
        if (!row) return;
        const v = Number(row.version) || 0;
        if (v <= versionRef.current) return;
        if (localEchoRef.current && v === localEchoRef.current) {
          localEchoRef.current = 0;
          versionRef.current = v;
          committedRef.current = row.state_data;
          return;
        }
        versionRef.current = v;
        committedRef.current = row.state_data;
        if (pendingUpdatersRef.current.length > 0) {
          let next = row.state_data;
          for (const fn of pendingUpdatersRef.current) next = fn(next);
          setDataState(next);
        } else {
          setDataState(row.state_data);
        }
      }
    ).subscribe();
    return () => {
      supabase.removeChannel(channel);
    };
  }, [key]);
  const flush = reactExports.useCallback(async () => {
    if (flushingRef.current) return;
    if (pendingUpdatersRef.current.length === 0) return;
    flushingRef.current = true;
    try {
      for (let attempt = 0; attempt < 6; attempt++) {
        const updaters = pendingUpdatersRef.current;
        if (updaters.length === 0) return;
        const expected = versionRef.current;
        let candidate = committedRef.current;
        for (const fn of updaters) candidate = fn(candidate);
        const { data: rows, error } = await supabase.rpc("hotel_app_state_cas", {
          p_key: key,
          p_expected_version: expected,
          p_state_data: candidate
        });
        if (error) {
          console.error("[hotel-sync] cas error", error);
          return;
        }
        const row = Array.isArray(rows) ? rows[0] : rows;
        if (!row) return;
        const newV = Number(row.version) || 0;
        if (newV === expected + 1) {
          pendingUpdatersRef.current = pendingUpdatersRef.current.slice(updaters.length);
          versionRef.current = newV;
          committedRef.current = candidate;
          localEchoRef.current = newV;
          if (pendingUpdatersRef.current.length === 0) return;
          continue;
        }
        versionRef.current = newV;
        committedRef.current = row.state_data;
      }
      if (pendingUpdatersRef.current.length > 0) {
        let next = committedRef.current;
        for (const fn of pendingUpdatersRef.current) next = fn(next);
        setDataState(next);
        flushTimerRef.current = setTimeout(() => {
          void flush();
        }, FLUSH_MS * 4);
      }
    } finally {
      flushingRef.current = false;
    }
  }, [key]);
  const setData = reactExports.useCallback((updater) => {
    const fn = typeof updater === "function" ? updater : () => updater;
    pendingUpdatersRef.current.push(fn);
    setDataState((prev) => fn(prev));
    if (flushTimerRef.current) clearTimeout(flushTimerRef.current);
    flushTimerRef.current = setTimeout(() => {
      void flush();
    }, FLUSH_MS);
  }, [flush]);
  const flushNow = reactExports.useCallback(() => {
    if (pendingUpdatersRef.current.length === 0) return;
    let candidate = committedRef.current;
    for (const fn of pendingUpdatersRef.current) candidate = fn(candidate);
    try {
      void fetch(`${SUPABASE_URL}/rest/v1/rpc/hotel_app_state_cas`, {
        method: "POST",
        keepalive: true,
        headers: {
          "Content-Type": "application/json",
          apikey: SUPABASE_KEY,
          Authorization: `Bearer ${SUPABASE_KEY}`
        },
        body: JSON.stringify({
          p_key: key,
          p_expected_version: versionRef.current,
          p_state_data: candidate
        })
      });
    } catch {
    }
  }, [key]);
  return { data, setData, ready, flushNow };
}
function bookingSignature(b) {
  return [b.roomNumber, b.bedIndex ?? "room", b.checkIn, b.checkOut, b.status, (b.guestName || "").trim().toLowerCase()].join("|");
}
function isLegacySampleBooking(b) {
  return /^b\d+$/.test(String(b.id));
}
function normalizeBookings(input) {
  if (!Array.isArray(input)) return [];
  const byId = /* @__PURE__ */ new Map();
  for (const item of input) {
    if (!item || typeof item !== "object") continue;
    const b = item;
    if (!b.id || !b.roomNumber || !b.checkIn || !b.checkOut || !b.status) continue;
    if (isLegacySampleBooking(b)) continue;
    byId.set(String(b.id), b);
  }
  const bySig = /* @__PURE__ */ new Map();
  for (const b of byId.values()) bySig.set(bookingSignature(b), b);
  return applyAutoCheckout(Array.from(bySig.values()));
}
function bookingHalfSpan(b) {
  const base = startOfDay(parseISO("2000-01-01"));
  const inDay = differenceInCalendarDays(parseISO(b.checkIn), base);
  const outDay = differenceInCalendarDays(parseISO(b.checkOut), base);
  return [2 * inDay + 1 - (b.checkInHalfDay ? 1 : 0), 2 * outDay + 1 + (b.checkOutHalfDay ? 1 : 0)];
}
function bookingsConflict(a, b) {
  if (a.id === b.id) return false;
  if (a.roomNumber !== b.roomNumber) return false;
  const roomWide = a.status === "maintenance" || b.status === "maintenance" || a.bedIndex === void 0 || b.bedIndex === void 0;
  if (!roomWide) {
    const aBeds = /* @__PURE__ */ new Set([a.bedIndex, ...a.additionalBeds ?? []]);
    const bBeds = /* @__PURE__ */ new Set([b.bedIndex, ...b.additionalBeds ?? []]);
    let overlap = false;
    for (const bed of aBeds) if (bBeds.has(bed)) {
      overlap = true;
      break;
    }
    if (!overlap) return false;
  }
  const [aS, aE] = bookingHalfSpan(a);
  const [bS, bE] = bookingHalfSpan(b);
  return aS < bE && bS < aE;
}
function findConflict(list, candidate) {
  return list.find((b) => bookingsConflict(b, candidate));
}
function applyAutoCheckout(list) {
  return list;
}
function useBookings() {
  const { t } = useI18n();
  const { data, setData, ready } = useSharedState("bookings", []);
  reactExports.useEffect(() => {
    if (!ready) return;
    if (Array.isArray(data) && data.length === 0) {
      const seed = normalizeBookings(generateSampleBookings());
      if (seed.length) setData(seed);
    }
  }, [ready, data, setData]);
  reactExports.useEffect(() => {
    const tick = () => setData((prev) => applyAutoCheckout(Array.isArray(prev) ? prev : []));
    const id = window.setInterval(tick, 6e4);
    return () => window.clearInterval(id);
  }, [setData]);
  const bookings = Array.isArray(data) ? normalizeBookings(data) : [];
  const addBooking = reactExports.useCallback((booking) => {
    let rejected = false;
    setData((prev) => {
      const list = Array.isArray(prev) ? prev : [];
      if (findConflict(list, booking)) {
        rejected = true;
        toast$1.error(t("overlapError"));
        return list;
      }
      return [...list, booking];
    });
    return !rejected;
  }, [setData, t]);
  const removeBooking = reactExports.useCallback((id) => {
    setData((prev) => Array.isArray(prev) ? prev.filter((b) => b.id !== id) : []);
  }, [setData]);
  const updateBooking = reactExports.useCallback((id, updates) => {
    let rejected = false;
    setData((prev) => {
      const list = Array.isArray(prev) ? prev : [];
      const target = list.find((b) => b.id === id);
      if (!target) return list;
      const candidate = { ...target, ...updates };
      if (findConflict(list, candidate)) {
        rejected = true;
        toast$1.error(t("overlapError"));
        return list;
      }
      return list.map((b) => b.id === id ? candidate : b);
    });
    return !rejected;
  }, [setData, t]);
  return { bookings, addBooking, removeBooking, updateBooking };
}
const AuditContext = reactExports.createContext(void 0);
function AuditProvider({ children }) {
  const { data, setData } = useSharedState("audit", []);
  const events = reactExports.useMemo(() => Array.isArray(data) ? data : [], [data]);
  const log = reactExports.useCallback((e) => {
    const ev = { ...e, id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`, at: (/* @__PURE__ */ new Date()).toISOString() };
    setData((prev) => [ev, ...Array.isArray(prev) ? prev : []].slice(0, 2e3));
  }, [setData]);
  const clear = reactExports.useCallback(() => setData([]), [setData]);
  const value = reactExports.useMemo(() => ({ events, log, clear }), [events, log, clear]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AuditContext.Provider, { value, children });
}
function useAudit() {
  const ctx = reactExports.useContext(AuditContext);
  if (!ctx) throw new Error("useAudit must be used within AuditProvider");
  return ctx;
}
const AuthHistoryContext = reactExports.createContext(void 0);
function AuthHistoryProvider({ children }) {
  const { data, setData, flushNow: flushHistory } = useSharedState("auth-history", []);
  const history = reactExports.useMemo(
    () => Array.isArray(data) ? data : [],
    [data]
  );
  const pushHistory = reactExports.useCallback(
    (ev) => {
      const full = {
        ...ev,
        id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`
      };
      setData(
        (prev) => [full, ...Array.isArray(prev) ? prev : []].slice(0, 500)
      );
    },
    [setData]
  );
  const clearHistory = reactExports.useCallback(() => setData([]), [setData]);
  const value = reactExports.useMemo(
    () => ({ history, pushHistory, clearHistory, flushHistory }),
    [history, pushHistory, clearHistory, flushHistory]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AuthHistoryContext.Provider, { value, children });
}
function useAuthHistory() {
  const ctx = reactExports.useContext(AuthHistoryContext);
  if (!ctx)
    throw new Error("useAuthHistory must be used within AuthHistoryProvider");
  return ctx;
}
const STORAGE_KEY$3 = "hotel_shift_session";
const CHANGE_EVENT = "hotel-shift-changed";
const ShiftContext = reactExports.createContext(void 0);
function computeShiftWindow(at = /* @__PURE__ */ new Date()) {
  const h = at.getHours();
  const startOfDay6 = new Date(at);
  startOfDay6.setHours(6, 0, 0, 0);
  const startOfDay18 = new Date(at);
  startOfDay18.setHours(18, 0, 0, 0);
  if (h >= 6 && h < 18) {
    return { kind: "day", start: startOfDay6, end: startOfDay18 };
  }
  if (h >= 18) {
    const end = new Date(startOfDay6);
    end.setDate(end.getDate() + 1);
    return { kind: "night", start: startOfDay18, end };
  }
  const start = new Date(startOfDay18);
  start.setDate(start.getDate() - 1);
  return { kind: "night", start, end: startOfDay6 };
}
function loadSession() {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY$3);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (!parsed.name || !parsed.startISO || !parsed.endISO || !parsed.kind) return null;
    return parsed;
  } catch {
    return null;
  }
}
const subscribers = /* @__PURE__ */ new Set();
let tickStarted = false;
function ensureTicker() {
  if (tickStarted || typeof window === "undefined") return;
  tickStarted = true;
  window.setInterval(() => {
    const n = /* @__PURE__ */ new Date();
    subscribers.forEach((s) => s(n));
  }, 1e3);
}
function useNow() {
  const [now, setNow] = reactExports.useState(() => /* @__PURE__ */ new Date());
  reactExports.useEffect(() => {
    ensureTicker();
    subscribers.add(setNow);
    return () => {
      subscribers.delete(setNow);
    };
  }, []);
  return now;
}
function ShiftProvider({ children }) {
  const [session, setSessionState] = reactExports.useState(() => loadSession());
  const setSession = reactExports.useCallback((s) => {
    setSessionState(s);
    if (typeof window === "undefined") return;
    if (s) window.localStorage.setItem(STORAGE_KEY$3, JSON.stringify(s));
    else window.localStorage.removeItem(STORAGE_KEY$3);
    window.dispatchEvent(new Event(CHANGE_EVENT));
  }, []);
  reactExports.useEffect(() => {
    if (typeof window === "undefined") return;
    const reload = () => setSessionState(loadSession());
    const onStorage = (e) => {
      if (e.key === STORAGE_KEY$3) reload();
    };
    window.addEventListener("storage", onStorage);
    window.addEventListener(CHANGE_EVENT, reload);
    return () => {
      window.removeEventListener("storage", onStorage);
      window.removeEventListener(CHANGE_EVENT, reload);
    };
  }, []);
  const value = reactExports.useMemo(
    () => ({ session, setSession, computeWindow: computeShiftWindow }),
    [session, setSession]
  );
  reactExports.useRef(null);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ShiftContext.Provider, { value, children });
}
function useShift() {
  const ctx = reactExports.useContext(ShiftContext);
  if (!ctx) throw new Error("useShift must be used within ShiftProvider");
  return ctx;
}
function formatRemaining(ms) {
  if (ms <= 0) return "00:00:00";
  const total = Math.floor(ms / 1e3);
  const h = Math.floor(total / 3600);
  const m = Math.floor(total % 3600 / 60);
  const s = total % 60;
  return [h, m, s].map((n) => String(n).padStart(2, "0")).join(":");
}
const STORAGE_KEY$2 = "hotel_auth_user";
const AuthContext = reactExports.createContext(void 0);
function AuthProvider({ children }) {
  const { log } = useAudit();
  const { history, pushHistory, clearHistory, flushHistory } = useAuthHistory();
  const [ready, setReady] = reactExports.useState(false);
  const [user, setUser] = reactExports.useState(null);
  reactExports.useEffect(() => {
    try {
      const raw = sessionStorage.getItem(STORAGE_KEY$2);
      const parsed = raw ? JSON.parse(raw) : null;
      if (parsed && parsed.role === "admin" && parsed.loginAt) {
        const shiftEnd = computeShiftWindow(new Date(parsed.loginAt)).end;
        if ((/* @__PURE__ */ new Date()).getTime() >= shiftEnd.getTime()) {
          try {
            pushHistory({
              username: parsed.username,
              role: "admin",
              action: "logout",
              at: shiftEnd.toISOString(),
              adminId: parsed.adminId,
              displayName: parsed.displayName
            });
            log({
              actor: { username: parsed.username, role: "admin", adminId: parsed.adminId ?? null },
              category: "auth",
              action: "auth.logout",
              summary: `${parsed.displayName ?? parsed.username} was automatically signed out (shift ended)`
            });
          } catch {
          }
          setUser(null);
          try {
            sessionStorage.removeItem(STORAGE_KEY$2);
          } catch {
          }
          try {
            localStorage.removeItem(STORAGE_KEY$2);
          } catch {
          }
          setReady(true);
          return;
        }
      }
      setUser(
        parsed ? {
          ...parsed,
          canSwitchWorkspaces: parsed.canSwitchWorkspaces || parsed.username === "superuser"
        } : null
      );
      try {
        localStorage.removeItem(STORAGE_KEY$2);
      } catch {
      }
    } catch {
      setUser(null);
    } finally {
      setReady(true);
    }
  }, []);
  reactExports.useEffect(() => {
    if (user) sessionStorage.setItem(STORAGE_KEY$2, JSON.stringify(user));
    else sessionStorage.removeItem(STORAGE_KEY$2);
  }, [user]);
  reactExports.useEffect(() => {
    if (typeof window === "undefined") return;
    const handler = () => {
      if (!user) return;
      try {
        pushHistory({
          username: user.username,
          role: user.role,
          action: "logout",
          at: (/* @__PURE__ */ new Date()).toISOString(),
          adminId: user.adminId,
          displayName: user.displayName
        });
        flushHistory();
      } catch {
      }
      try {
        sessionStorage.removeItem(STORAGE_KEY$2);
      } catch {
      }
    };
    window.addEventListener("pagehide", handler);
    window.addEventListener("beforeunload", handler);
    return () => {
      window.removeEventListener("pagehide", handler);
      window.removeEventListener("beforeunload", handler);
    };
  }, [user, pushHistory, flushHistory]);
  const login = reactExports.useCallback(
    async (username, password) => {
      const { loginStaff } = await import("./auth.functions-D1ts2ogY.mjs");
      const result = await loginStaff({ data: { username, password } });
      if (!result.ok) return { ok: false, error: result.error };
      const at = (/* @__PURE__ */ new Date()).toISOString();
      const next = {
        username: result.username,
        role: result.role,
        displayName: result.username,
        canSwitchWorkspaces: result.role === "superuser",
        loginAt: at
      };
      sessionStorage.setItem("hotel_session_token", result.token);
      setUser(next);
      pushHistory({ username: result.username, role: result.role, action: "login", at });
      log({
        actor: { username: result.username, role: result.role },
        category: "auth",
        action: "auth.login",
        summary: `${result.username} signed in`
      });
      return { ok: true, role: result.role };
    },
    [pushHistory, log]
  );
  const logout = reactExports.useCallback(() => {
    if (user) {
      const at = (/* @__PURE__ */ new Date()).toISOString();
      pushHistory({
        username: user.username,
        role: user.role,
        action: "logout",
        at,
        adminId: user.adminId,
        displayName: user.displayName
      });
      log({
        actor: { username: user.username, role: user.role, adminId: user.adminId },
        category: "auth",
        action: "auth.logout",
        summary: `${user.displayName ?? user.username} signed out`
      });
    }
    sessionStorage.removeItem("hotel_session_token");
    setUser(null);
  }, [user, log, pushHistory]);
  const switchRole = reactExports.useCallback((role) => {
    if (!user?.canSwitchWorkspaces) return;
    const next = {
      username: user.username,
      role,
      displayName: role,
      canSwitchWorkspaces: true
    };
    setUser(next);
    log({
      actor: { username: user.username, role: user.role, adminId: user.adminId },
      category: "auth",
      action: "auth.role_switch",
      summary: `Switched workspace to ${role}`
    });
  }, [user, log]);
  const value = reactExports.useMemo(
    () => ({ user, ready, login, switchRole, logout, history, clearHistory }),
    [user, ready, login, switchRole, logout, history, clearHistory]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AuthContext.Provider, { value, children });
}
function useAuth() {
  const ctx = reactExports.useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
const ROLE_HOME = {
  superuser: "/superuser",
  director: "/director",
  admin: "/admin",
  manager: "/manager"
};
const BookingsContext = reactExports.createContext(null);
function describeChange(prev, updates) {
  const keys = Object.keys(updates);
  const parts = [];
  for (const k of keys) {
    const before = prev[k];
    const after = updates[k];
    if (before === after) continue;
    parts.push(`${String(k)}: "${String(before ?? "")}" → "${String(after ?? "")}"`);
  }
  return parts.length ? parts.join(", ") : "no field changes";
}
function BookingsProvider({ children }) {
  const inner = useBookings();
  const { log } = useAudit();
  const { user } = useAuth();
  const actor = reactExports.useMemo(
    () => user ? { username: user.username, role: user.role, adminId: user.adminId ?? null } : { username: "anonymous", role: "admin", adminId: null },
    [user]
  );
  const addBooking = reactExports.useCallback(
    (b) => {
      const ok = inner.addBooking(b);
      if (ok) {
        log({
          actor,
          category: "booking",
          action: "booking.created",
          summary: `Created booking for room ${b.roomNumber}${b.guestName ? ` (${b.guestName})` : ""}`,
          details: {
            bookingId: b.id,
            room: b.roomNumber,
            bedIndex: b.bedIndex,
            checkIn: b.checkIn,
            checkOut: b.checkOut,
            status: b.status,
            guestName: b.guestName
          }
        });
      }
      return ok;
    },
    [inner, log, actor]
  );
  const removeBooking = reactExports.useCallback(
    (id) => {
      const target = inner.bookings.find((b) => b.id === id);
      inner.removeBooking(id);
      log({
        actor,
        category: "booking",
        action: "booking.deleted",
        summary: target ? `Deleted booking #${target.roomNumber}${target.guestName ? ` (${target.guestName})` : ""}` : `Deleted booking ${id}`,
        details: target ? { ...target } : { id }
      });
    },
    [inner, log, actor]
  );
  const updateBooking = reactExports.useCallback(
    (id, updates) => {
      const before = inner.bookings.find((b) => b.id === id);
      const ok = inner.updateBooking(id, updates);
      if (ok && before) {
        log({
          actor,
          category: "booking",
          action: "booking.updated",
          summary: `Updated booking #${before.roomNumber} — ${describeChange(before, updates)}`,
          details: { bookingId: id, before, patch: updates }
        });
      }
      return ok;
    },
    [inner, log, actor]
  );
  const value = reactExports.useMemo(
    () => ({ bookings: inner.bookings, addBooking, removeBooking, updateBooking }),
    [inner.bookings, addBooking, removeBooking, updateBooking]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsx(BookingsContext.Provider, { value, children });
}
function useBookingsContext() {
  const ctx = reactExports.useContext(BookingsContext);
  if (!ctx) throw new Error("useBookingsContext must be used inside BookingsProvider");
  return ctx;
}
function normalizeRate(raw, maxGuests = 1) {
  const slots = Math.max(1, Math.floor(maxGuests || 1));
  const toArr = (v) => {
    if (Array.isArray(v)) {
      const arr2 = v.map((x) => Math.max(0, Number(x) || 0));
      if (arr2.length >= slots) return arr2.slice(0, slots);
      const fill = arr2[arr2.length - 1] ?? 0;
      return [...arr2, ...Array.from({ length: slots - arr2.length }, () => fill)];
    }
    const n = Math.max(0, Number(v) || 0);
    return Array.from({ length: slots }, () => n);
  };
  if (raw && typeof raw === "object" && !Array.isArray(raw)) {
    const r = raw;
    return { resident: toArr(r.resident), nonResident: toArr(r.nonResident) };
  }
  const arr = toArr(raw);
  return { resident: arr, nonResident: [...arr] };
}
const INITIAL = {
  extraCategories: [],
  removedCategoryIds: [],
  removedRoomNumbers: [],
  extraRooms: [],
  categoryRates: {}
};
const HotelGridContext = reactExports.createContext(null);
function HotelGridProvider({ children }) {
  const baseCategories = reactExports.useMemo(
    () => ROOM_CATEGORIES.map((c) => ({ id: c.id, label: c.label, short: c.short, maxGuests: c.maxGuests })),
    []
  );
  const baseRooms = reactExports.useMemo(() => {
    const rooms2 = [];
    let floor = 1;
    ROOM_CATEGORIES.forEach((cat) => {
      for (let i = 1; i <= ROOMS_PER_CATEGORY; i++) rooms2.push({ number: floor * 100 + i, category: cat.id });
      floor++;
    });
    return rooms2;
  }, []);
  const { data, setData } = useSharedState("grid", INITIAL);
  const removedCategoryIds = reactExports.useMemo(() => new Set(data.removedCategoryIds ?? []), [data.removedCategoryIds]);
  const removedRoomNumbers = reactExports.useMemo(() => new Set(data.removedRoomNumbers ?? []), [data.removedRoomNumbers]);
  const categories = reactExports.useMemo(
    () => [...baseCategories, ...data.extraCategories ?? []].filter((c) => !removedCategoryIds.has(c.id)),
    [baseCategories, data.extraCategories, removedCategoryIds]
  );
  const rooms = reactExports.useMemo(() => {
    const visibleBase = baseRooms.filter((r) => !removedRoomNumbers.has(r.number) && !removedCategoryIds.has(r.category));
    const merged = [...visibleBase, ...(data.extraRooms ?? []).filter((r) => !removedCategoryIds.has(r.category))];
    return merged.sort((a, b) => a.number - b.number);
  }, [baseRooms, removedRoomNumbers, data.extraRooms, removedCategoryIds]);
  const categoryRates = reactExports.useMemo(() => {
    const knownMax = /* @__PURE__ */ new Map();
    baseCategories.forEach((c) => knownMax.set(c.id, c.maxGuests));
    (data.extraCategories ?? []).forEach((c) => knownMax.set(c.id, c.maxGuests));
    const out = {};
    for (const [k, v] of Object.entries(data.categoryRates ?? {})) out[k] = normalizeRate(v, knownMax.get(k) ?? 1);
    return out;
  }, [baseCategories, data.extraCategories, data.categoryRates]);
  const addCategory = reactExports.useCallback(({ name, short, maxGuests }) => {
    const id = `custom-${Date.now()}`;
    setData((prev) => ({
      ...prev,
      extraCategories: [
        ...prev.extraCategories ?? [],
        {
          id,
          custom: true,
          short: short.trim() || name.slice(0, 6).toUpperCase(),
          maxGuests: Math.max(1, Math.floor(maxGuests || 1)),
          label: { ru: name, uz: name, en: name }
        }
      ]
    }));
  }, [setData]);
  const removeCategory = reactExports.useCallback((id) => {
    setData((prev) => ({
      ...prev,
      removedCategoryIds: Array.from(/* @__PURE__ */ new Set([...prev.removedCategoryIds ?? [], id])),
      extraCategories: (prev.extraCategories ?? []).filter((c) => c.id !== id),
      extraRooms: (prev.extraRooms ?? []).filter((r) => r.category !== id)
    }));
  }, [setData]);
  const addRoom = reactExports.useCallback((categoryId, roomNumber) => {
    if (!Number.isFinite(roomNumber) || roomNumber <= 0) return { ok: false, reason: "invalid" };
    const baseNumbers = new Set(baseRooms.map((r) => r.number));
    const extraNumbers = new Set((data.extraRooms ?? []).map((r) => r.number));
    const isTaken = extraNumbers.has(roomNumber) || baseNumbers.has(roomNumber) && !removedRoomNumbers.has(roomNumber);
    if (isTaken) return { ok: false, reason: "exists" };
    setData((prev) => ({
      ...prev,
      extraRooms: [...prev.extraRooms ?? [], { number: roomNumber, category: categoryId }]
    }));
    return { ok: true };
  }, [baseRooms, data.extraRooms, removedRoomNumbers, setData]);
  const removeRoom = reactExports.useCallback((roomNumber) => {
    setData((prev) => ({
      ...prev,
      extraRooms: (prev.extraRooms ?? []).filter((r) => r.number !== roomNumber),
      removedRoomNumbers: Array.from(/* @__PURE__ */ new Set([...prev.removedRoomNumbers ?? [], roomNumber]))
    }));
  }, [setData]);
  const setCategoryRate = reactExports.useCallback((categoryId, rate) => {
    const maxG = baseCategories.find((c) => c.id === categoryId)?.maxGuests ?? (data.extraCategories ?? []).find((c) => c.id === categoryId)?.maxGuests ?? Math.max(rate.resident?.length ?? 0, rate.nonResident?.length ?? 0, 1);
    setData((prev) => ({
      ...prev,
      categoryRates: { ...prev.categoryRates ?? {}, [categoryId]: normalizeRate(rate, maxG) }
    }));
  }, [baseCategories, data.extraCategories, setData]);
  const value = { categories, rooms, categoryRates, addCategory, removeCategory, addRoom, removeRoom, setCategoryRate };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(HotelGridContext.Provider, { value, children });
}
function useHotelGrid() {
  const ctx = reactExports.useContext(HotelGridContext);
  if (!ctx) throw new Error("useHotelGrid must be used inside HotelGridProvider");
  return ctx;
}
const STORAGE_KEY$1 = "sayohat-panel-theme";
const ThemeContext = reactExports.createContext(null);
function readTheme() {
  if (typeof window === "undefined") return "light";
  return window.localStorage.getItem(STORAGE_KEY$1) === "dark" ? "dark" : "light";
}
function applyTheme(theme) {
  if (typeof document === "undefined") return;
  document.documentElement.classList.toggle("dark", theme === "dark");
}
function ThemeProvider({ children }) {
  const [theme, setThemeState] = reactExports.useState(readTheme);
  reactExports.useEffect(() => {
    applyTheme(theme);
    if (typeof window !== "undefined") window.localStorage.setItem(STORAGE_KEY$1, theme);
  }, [theme]);
  reactExports.useEffect(() => {
    if (typeof window === "undefined") return;
    const onStorage = (event) => {
      if (event.key === STORAGE_KEY$1) setThemeState(event.newValue === "dark" ? "dark" : "light");
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);
  const setTheme = reactExports.useCallback((next) => setThemeState(next), []);
  const toggleTheme = reactExports.useCallback(() => setThemeState((current) => current === "dark" ? "light" : "dark"), []);
  const value = reactExports.useMemo(() => ({ theme, toggleTheme, setTheme }), [theme, toggleTheme, setTheme]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ThemeContext.Provider, { value, children });
}
function useTheme() {
  const context = reactExports.useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used inside ThemeProvider");
  return context;
}
function normalize(list) {
  if (!Array.isArray(list)) return [];
  return list.map((a) => ({
    id: a?.id ?? `adm_${Math.random().toString(36).slice(2, 9)}`,
    name: a?.name ?? "",
    surname: a?.surname ?? "",
    idNumber: a?.idNumber ?? "",
    username: a?.username ?? "",
    password: a?.password ?? "",
    fingerprintId: a?.fingerprintId ?? "",
    createdAt: a?.createdAt ?? (/* @__PURE__ */ new Date()).toISOString()
  }));
}
const AdminsContext = reactExports.createContext(void 0);
function AdminsProvider({ children }) {
  const { data, setData } = useSharedState("admins", []);
  const admins = reactExports.useMemo(() => normalize(data), [data]);
  const addAdmin = reactExports.useCallback((input) => {
    const rec = {
      id: `adm_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 7)}`,
      name: input.name.trim(),
      surname: input.surname.trim(),
      idNumber: input.idNumber.trim(),
      username: input.username.trim().toLowerCase(),
      password: input.password,
      fingerprintId: input.fingerprintId.trim(),
      createdAt: (/* @__PURE__ */ new Date()).toISOString()
    };
    setData((prev) => [rec, ...normalize(prev)]);
    return rec;
  }, [setData]);
  const updateAdmin = reactExports.useCallback((id, patch) => {
    setData((prev) => normalize(prev).map(
      (a) => a.id === id ? { ...a, ...patch, username: patch.username ? patch.username.trim().toLowerCase() : a.username } : a
    ));
  }, [setData]);
  const removeAdmin = reactExports.useCallback((id) => {
    setData((prev) => normalize(prev).filter((a) => a.id !== id));
  }, [setData]);
  const findByUsername = reactExports.useCallback((username) => {
    const u = username.trim().toLowerCase();
    return admins.find((a) => a.username.toLowerCase() === u);
  }, [admins]);
  const value = reactExports.useMemo(() => ({ admins, addAdmin, updateAdmin, removeAdmin, findByUsername }), [admins, addAdmin, updateAdmin, removeAdmin, findByUsername]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AdminsContext.Provider, { value, children });
}
function useAdmins() {
  const ctx = reactExports.useContext(AdminsContext);
  if (!ctx) throw new Error("useAdmins must be used within AdminsProvider");
  return ctx;
}
const DEFAULTS = {
  logo: "",
  hotelName: "",
  companyName: "",
  inn: "",
  raschetnyiSchet: "",
  telephone: "",
  site: "",
  email: ""
};
const STORAGE_KEY = "hotel:details:v1";
const HotelDetailsContext = reactExports.createContext(null);
function HotelDetailsProvider({ children }) {
  const [details, setState] = reactExports.useState(DEFAULTS);
  reactExports.useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) setState({ ...DEFAULTS, ...JSON.parse(raw) });
    } catch {
    }
  }, []);
  reactExports.useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(details));
    } catch {
    }
  }, [details]);
  const setDetails = reactExports.useCallback((patch) => {
    setState((prev) => ({ ...prev, ...patch }));
  }, []);
  const reset = reactExports.useCallback(() => setState(DEFAULTS), []);
  const value = reactExports.useMemo(() => ({ details, setDetails, reset }), [details, setDetails, reset]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(HotelDetailsContext.Provider, { value, children });
}
function useHotelDetails() {
  const ctx = reactExports.useContext(HotelDetailsContext);
  if (!ctx) throw new Error("useHotelDetails must be used within HotelDetailsProvider");
  return ctx;
}
const Ctx = reactExports.createContext(null);
function localGetNumber(key, fallback) {
  if (typeof window === "undefined") return fallback;
  try {
    const raw = window.localStorage.getItem(key);
    if (!raw) return fallback;
    const n = Number(raw);
    return Number.isFinite(n) && n >= 280 ? n : fallback;
  } catch {
    return fallback;
  }
}
function localGetBool(key, fallback) {
  if (typeof window === "undefined") return fallback;
  try {
    const raw = window.localStorage.getItem(key);
    if (raw === null) return fallback;
    return raw === "1";
  } catch {
    return fallback;
  }
}
function NotificationsProvider({ children }) {
  const { bookings } = useBookingsContext();
  const [panelOpen, setPanelOpen] = reactExports.useState(() => localGetBool("notif.panel.open", false));
  const [panelWidth, _setPanelWidth] = reactExports.useState(() => {
    const winW = typeof window !== "undefined" ? window.innerWidth : 0;
    const preferred = winW > 0 ? Math.round(winW / 4) : 380;
    return localGetNumber("notif.panel.width", Math.max(380, preferred));
  });
  const [focusBookingRequest, setFocusBookingRequest] = reactExports.useState(null);
  const [now, setNow] = reactExports.useState(() => /* @__PURE__ */ new Date());
  reactExports.useEffect(() => {
    let intervalId = null;
    const now0 = /* @__PURE__ */ new Date();
    const msToNextMinute = 6e4 - (now0.getSeconds() * 1e3 + now0.getMilliseconds());
    const timeoutId = window.setTimeout(() => {
      setNow(/* @__PURE__ */ new Date());
      intervalId = window.setInterval(() => setNow(/* @__PURE__ */ new Date()), 6e4);
    }, Math.max(250, msToNextMinute));
    return () => {
      window.clearTimeout(timeoutId);
      if (intervalId !== null) window.clearInterval(intervalId);
    };
  }, []);
  reactExports.useEffect(() => {
    try {
      window.localStorage.setItem("notif.panel.open", panelOpen ? "1" : "0");
    } catch {
    }
  }, [panelOpen]);
  const setPanelWidth = reactExports.useCallback((w) => {
    const clamped = Math.max(280, Math.min(typeof window !== "undefined" ? window.innerWidth - 200 : 800, w));
    _setPanelWidth(clamped);
    try {
      window.localStorage.setItem("notif.panel.width", String(clamped));
    } catch {
    }
  }, []);
  const critical = reactExports.useMemo(() => {
    const today = startOfDay(now);
    const minutesNow = now.getHours() * 60 + now.getMinutes();
    const out = [];
    for (const b of bookings) {
      if (b.status === "booked" || b.status === "confirmed" || b.status === "pending") {
        const ci = startOfDay(parseISO(b.checkIn));
        const threshold = b.checkInLateNight ? 23 * 60 : 11 * 60;
        const ciReached = !isBefore(today, ci);
        const daysLate = ciReached ? differenceInCalendarDays(today, ci) : 0;
        const pastThresholdToday = daysLate > 0 || minutesNow >= threshold;
        let overdue = false;
        let overdueMinutes = 0;
        if (ciReached && pastThresholdToday) {
          overdue = true;
          overdueMinutes = daysLate * 24 * 60 + (minutesNow - threshold);
        }
        if (overdue) {
          out.push({
            id: `ci_${b.id}`,
            bookingId: b.id,
            roomNumber: b.roomNumber,
            guestName: (b.guestName || "").trim() || `#${b.roomNumber}`,
            kind: "missed_checkin",
            scheduledISO: b.checkIn,
            overdueMinutes,
            title: "Missed check-in",
            detail: `Room ${b.roomNumber} — scheduled check-in on ${b.checkIn} (${b.checkInLateNight ? "after 22:59 late-night" : "after 10:59"}) has passed but the guest has not been checked in yet.`
          });
        }
      }
      if (b.status === "in-house") {
        const co = parseISO(b.checkOut);
        let overdue = false;
        let overdueMinutes = 0;
        if (isBefore(co, today)) {
          overdue = true;
          overdueMinutes = differenceInCalendarDays(today, co) * 24 * 60 + minutesNow;
        } else if (!isBefore(today, co) && !isBefore(co, today)) {
          const threshold = b.checkOutHalfDay ? 22 * 60 + 59 : 10 * 60 + 59;
          if (minutesNow >= threshold) {
            overdue = true;
            overdueMinutes = minutesNow - threshold;
          }
        }
        if (overdue) {
          out.push({
            id: `co_${b.id}`,
            bookingId: b.id,
            roomNumber: b.roomNumber,
            guestName: (b.guestName || "").trim() || `#${b.roomNumber}`,
            kind: "missed_checkout",
            scheduledISO: b.checkOut,
            overdueMinutes,
            title: "Missed check-out",
            detail: `Room ${b.roomNumber} — scheduled check-out on ${b.checkOut} (${b.checkOutHalfDay ? "after 22:59 late" : "after 10:59"}) has passed but the guest has not been checked out yet.`
          });
        }
      }
    }
    out.sort((a, b) => b.overdueMinutes - a.overdueMinutes);
    return out;
  }, [bookings, now]);
  const criticalBookingIds = reactExports.useMemo(() => new Set(critical.map((c) => c.bookingId)), [critical]);
  const openPanel = reactExports.useCallback(() => setPanelOpen(true), []);
  const closePanel = reactExports.useCallback(() => setPanelOpen(false), []);
  const togglePanel = reactExports.useCallback(() => setPanelOpen((v) => !v), []);
  const requestFocusBooking = reactExports.useCallback((id) => setFocusBookingRequest(id), []);
  const clearFocusRequest = reactExports.useCallback(() => setFocusBookingRequest(null), []);
  const value = reactExports.useMemo(() => ({
    panelOpen,
    openPanel,
    closePanel,
    togglePanel,
    panelWidth,
    setPanelWidth,
    critical,
    criticalBookingIds,
    criticalCount: critical.length,
    focusBookingRequest,
    requestFocusBooking,
    clearFocusRequest
  }), [panelOpen, openPanel, closePanel, togglePanel, panelWidth, setPanelWidth, critical, criticalBookingIds, focusBookingRequest, requestFocusBooking, clearFocusRequest]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Ctx.Provider, { value, children });
}
function useNotifications() {
  const v = reactExports.useContext(Ctx);
  if (!v) throw new Error("useNotifications must be used within NotificationsProvider");
  return v;
}
function NotificationPanel() {
  const { panelOpen, closePanel, panelWidth, setPanelWidth, critical, requestFocusBooking } = useNotifications();
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const asideRef = reactExports.useRef(null);
  const dragStateRef = reactExports.useRef(null);
  const draggingRef = reactExports.useRef(false);
  const onResizeStart = reactExports.useCallback((e) => {
    e.preventDefault();
    const start = asideRef.current?.getBoundingClientRect().width ?? panelWidth;
    dragStateRef.current = { startX: e.clientX, startWidth: start, latest: start };
    draggingRef.current = true;
    if (asideRef.current) {
      asideRef.current.style.willChange = "width";
      asideRef.current.style.transition = "none";
    }
    if (typeof document !== "undefined") {
      document.body.style.cursor = "ew-resize";
      document.body.style.userSelect = "none";
    }
    try {
      e.currentTarget.setPointerCapture?.(e.pointerId);
    } catch {
    }
    const clampWidth = (w) => {
      const maxW = typeof window !== "undefined" ? window.innerWidth - 200 : 800;
      return Math.max(280, Math.min(maxW, w));
    };
    const onMove = (ev) => {
      const d = dragStateRef.current;
      const el = asideRef.current;
      if (!d || !el) return;
      const next = clampWidth(d.startWidth + (d.startX - ev.clientX));
      d.latest = next;
      el.style.width = `${next}px`;
    };
    const onUp = () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("pointercancel", onUp);
      const d = dragStateRef.current;
      dragStateRef.current = null;
      draggingRef.current = false;
      if (asideRef.current) {
        asideRef.current.style.willChange = "";
        asideRef.current.style.transition = "";
      }
      if (typeof document !== "undefined") {
        document.body.style.cursor = "";
        document.body.style.userSelect = "";
      }
      if (d) setPanelWidth(d.latest);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerup", onUp);
    window.addEventListener("pointercancel", onUp);
  }, [panelWidth, setPanelWidth]);
  const handleGoToBooking = reactExports.useCallback((bookingId) => {
    const p = location.pathname;
    const onGrid = p === "/admin" || p === "/manager" || p === "/superuser" || p.startsWith("/admin") || p.startsWith("/manager") || p.startsWith("/superuser");
    requestFocusBooking(bookingId);
    if (!onGrid) {
      const dest = user?.role === "admin" ? "/admin" : user?.role === "manager" ? "/manager" : "/superuser";
      navigate({ to: dest });
    }
    if (typeof window !== "undefined") {
      window.requestAnimationFrame(() => {
        document.getElementById("hotel-main-grid")?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  }, [location.pathname, navigate, requestFocusBooking, user?.role]);
  if (!panelOpen) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "aside",
    {
      ref: asideRef,
      className: "fixed top-0 right-0 z-[60] h-screen bg-background/95 backdrop-blur-xl border-l border-border shadow-2xl flex flex-col animate-in slide-in-from-right duration-200",
      style: { width: Math.max(280, panelWidth || 380) },
      "aria-label": "Notifications",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            role: "separator",
            "aria-orientation": "vertical",
            onPointerDown: onResizeStart,
            className: "absolute left-[-4px] top-0 bottom-0 w-3 cursor-ew-resize select-none touch-none z-10",
            title: "Drag to resize",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-1 top-0 bottom-0 w-1.5 bg-transparent hover:bg-primary/40 transition-colors" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "flex items-center justify-between gap-3 px-4 py-3 border-b border-border bg-gradient-to-r from-red-500/10 via-amber-500/5 to-transparent", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex h-9 w-9 items-center justify-center rounded-xl bg-red-500/15 text-red-600 ring-1 ring-red-500/30", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Bell, { className: "h-4 w-4" }),
              critical.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 rounded-full bg-red-600 text-white text-[10px] font-black flex items-center justify-center ring-2 ring-background", children: critical.length })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm font-black tracking-tight text-foreground truncate", children: "Notifications" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground truncate", children: critical.length === 0 ? "All problems resolved" : `${critical.length} critical alert${critical.length > 1 ? "s" : ""}` })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => {
                if (typeof window !== "undefined") {
                  window.dispatchEvent(new CustomEvent("hotel:stop-focus-glow"));
                }
                closePanel();
              },
              className: "flex h-8 w-8 items-center justify-center rounded-lg hover:bg-accent text-muted-foreground hover:text-foreground transition-colors",
              "aria-label": "Close notifications",
              title: "Close",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" })
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 min-h-0 overflow-y-auto p-3 space-y-2", children: critical.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-full flex flex-col items-center justify-center text-center px-6 py-16", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500/15 text-emerald-600 ring-1 ring-emerald-500/30 mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Bell, { className: "h-7 w-7" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-bold text-foreground", children: "All problems resolved" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "No overdue check-ins or check-outs right now." })
        ] }) : critical.map((n) => {
          const Icon = n.kind === "missed_checkin" ? LogIn : LogOut;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => handleGoToBooking(n.bookingId),
              className: "group w-full text-left rounded-xl border border-red-500/40 bg-red-500/5 hover:bg-red-500/10 hover:border-red-500/60 transition-all p-3 flex gap-3 shadow-sm hover:shadow-md",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-red-600 text-white ring-1 ring-red-700/50 shadow", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-4 w-4" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-black uppercase tracking-wider text-red-600", children: "Critical" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-3 w-3 text-red-600/70" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-bold text-foreground/80", children: n.title })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-[12px] leading-snug text-foreground/90", children: n.detail }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 flex items-center gap-2 flex-wrap", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 rounded-md bg-red-600 text-white text-[11px] font-black px-2 py-0.5 shadow group-hover:scale-105 transition-transform", children: [
                      "Room ",
                      n.roomNumber
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-muted-foreground", children: n.guestName }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-auto text-[10px] text-red-600 font-bold", children: "Click to open in grid →" })
                  ] })
                ] })
              ]
            },
            n.id
          );
        }) })
      ]
    }
  );
}
const SWEEP_MS = 2e4;
function ShiftWatcher() {
  const { user, logout } = useAuth();
  const { history, pushHistory } = useAuthHistory();
  const { log } = useAudit();
  const timerRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    if (typeof window === "undefined") return;
    if (!user) return;
    if (user.role !== "admin") return;
    const scheduleNext = () => {
      const now = /* @__PURE__ */ new Date();
      const candidates = [6, 18].map((h) => {
        const d = new Date(now);
        d.setHours(h, 0, 0, 0);
        if (d.getTime() <= now.getTime()) d.setDate(d.getDate() + 1);
        return d.getTime();
      });
      const nextAt = Math.min(...candidates);
      const delay = Math.max(1e3, nextAt - now.getTime());
      timerRef.current = setTimeout(() => {
        logout();
      }, delay);
    };
    scheduleNext();
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = null;
    };
  }, [user, logout]);
  reactExports.useEffect(() => {
    if (typeof window === "undefined") return;
    const sweep = () => {
      const now = Date.now();
      const latest = /* @__PURE__ */ new Map();
      for (const ev of history) {
        if (ev.role !== "admin") continue;
        const key = ev.adminId ?? ev.username;
        const prev = latest.get(key);
        if (!prev || new Date(ev.at).getTime() > new Date(prev.at).getTime()) {
          latest.set(key, ev);
        }
      }
      for (const e of latest.values()) {
        if (e.action !== "login") continue;
        const shiftEnd = computeShiftWindow(new Date(e.at)).end;
        if (now < shiftEnd.getTime()) continue;
        pushHistory({
          username: e.username,
          role: "admin",
          action: "logout",
          at: shiftEnd.toISOString(),
          adminId: e.adminId,
          displayName: e.displayName
        });
        log({
          actor: { username: e.username, role: "admin", adminId: e.adminId ?? null },
          category: "auth",
          action: "auth.logout",
          summary: `${e.displayName ?? e.username} was automatically signed out (shift ended)`
        });
      }
    };
    sweep();
    const id = window.setInterval(sweep, SWEEP_MS);
    return () => window.clearInterval(id);
  }, [history, pushHistory, log]);
  return null;
}
function PageTransition() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "workspace-page-transition",
      style: { willChange: "opacity, transform" },
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {})
    },
    pathname
  );
}
function ToastAutoDismiss() {
  const { dismiss } = useToast();
  reactExports.useEffect(() => {
    if (typeof window === "undefined") return;
    const handler = () => {
      try {
        toast$1.dismiss();
      } catch {
      }
      try {
        dismiss();
      } catch {
      }
    };
    window.addEventListener("pointerdown", handler, true);
    return () => window.removeEventListener("pointerdown", handler, true);
  }, [dismiss]);
  return null;
}
function UserLanguageSync() {
  const { user } = useAuth();
  const { setUserScope } = useI18n();
  reactExports.useEffect(() => {
    setUserScope(user?.username ?? null);
  }, [user?.username, setUserScope]);
  return null;
}
const appCss = "/assets/styles-Bt2GXiy2.css";
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/login",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go to login"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: "/login",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go to login"
        }
      )
    ] })
  ] }) });
}
const Route$d = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Отель Саёхат — управление" },
      {
        name: "description",
        content: "Панель управления номерами, бронированиями и сменами отеля Саёхат."
      },
      { property: "og:title", content: "Отель Саёхат — управление" },
      {
        property: "og:description",
        content: "Панель управления номерами, бронированиями и сменами отеля Саёхат."
      },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: "Отель Саёхат — управление" },
      {
        name: "twitter:description",
        content: "Панель управления номерами, бронированиями и сменами отеля Саёхат."
      },
      { name: "twitter:card", content: "summary" }
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "ru", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$d.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsx(I18nProvider, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(ThemeProvider, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TooltipProvider, { delayDuration: 150, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Toaster, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Toaster$1, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ToastAutoDismiss, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(HotelDetailsProvider, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(AdminsProvider, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(AuditProvider, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(AuthHistoryProvider, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AuthProvider, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(UserLanguageSync, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(BookingsProvider, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HotelGridProvider, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(ShiftProvider, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(NotificationsProvider, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ShiftWatcher, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(PageTransition, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(NotificationPanel, {})
      ] }) }) }) })
    ] }) }) }) }) })
  ] }) }) }) });
}
const $$splitComponentImporter$c = () => import("./index-OWC4InQQ.mjs");
const Route$c = createFileRoute("/")({
  component: lazyRouteComponent($$splitComponentImporter$c, "component")
});
const $$splitComponentImporter$b = () => import("./admin-DsihG1zX.mjs");
const Route$b = createFileRoute("/admin")({
  component: lazyRouteComponent($$splitComponentImporter$b, "component")
});
const $$splitComponentImporter$a = () => import("./director-aPY3UGmK.mjs");
const Route$a = createFileRoute("/director")({
  component: lazyRouteComponent($$splitComponentImporter$a, "component")
});
const $$splitComponentImporter$9 = () => import("./login-srI9tXci.mjs");
const Route$9 = createFileRoute("/login")({
  component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
const $$splitComponentImporter$8 = () => import("./manager-BTh47tAD.mjs");
const Route$8 = createFileRoute("/manager")({
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
const $$splitComponentImporter$7 = () => import("./superuser-B-lLipvH.mjs");
const Route$7 = createFileRoute("/superuser")({
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import("./superuser.index-N1ysCeP2.mjs");
const Route$6 = createFileRoute("/superuser/")({
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./superuser.admins-BsAJg4IB.mjs");
const Route$5 = createFileRoute("/superuser/admins")({
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./superuser.bookings-history-aDb5CEjm.mjs");
const Route$4 = createFileRoute("/superuser/bookings-history")({
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./superuser.guests-CRQtgJTx.mjs");
const Route$3 = createFileRoute("/superuser/guests")({
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./superuser.history-BJfx5A4f.mjs");
const Route$2 = createFileRoute("/superuser/history")({
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./superuser.hotel-details-CQSN32_L.mjs");
const Route$1 = createFileRoute("/superuser/hotel-details")({
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./bookings._id.delete-CBqkmWBN.mjs");
const Route = createFileRoute("/bookings/$id/delete")({
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const IndexRoute = Route$c.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$d
});
const AdminRoute = Route$b.update({
  id: "/admin",
  path: "/admin",
  getParentRoute: () => Route$d
});
const DirectorRoute = Route$a.update({
  id: "/director",
  path: "/director",
  getParentRoute: () => Route$d
});
const LoginRoute = Route$9.update({
  id: "/login",
  path: "/login",
  getParentRoute: () => Route$d
});
const ManagerRoute = Route$8.update({
  id: "/manager",
  path: "/manager",
  getParentRoute: () => Route$d
});
const SuperuserRoute = Route$7.update({
  id: "/superuser",
  path: "/superuser",
  getParentRoute: () => Route$d
});
const SuperuserIndexRoute = Route$6.update({
  id: "/",
  path: "/",
  getParentRoute: () => SuperuserRoute
});
const SuperuserAdminsRoute = Route$5.update({
  id: "/admins",
  path: "/admins",
  getParentRoute: () => SuperuserRoute
});
const SuperuserBookingsHistoryRoute = Route$4.update({
  id: "/bookings-history",
  path: "/bookings-history",
  getParentRoute: () => SuperuserRoute
});
const SuperuserGuestsRoute = Route$3.update({
  id: "/guests",
  path: "/guests",
  getParentRoute: () => SuperuserRoute
});
const SuperuserHistoryRoute = Route$2.update({
  id: "/history",
  path: "/history",
  getParentRoute: () => SuperuserRoute
});
const SuperuserHotelDetailsRoute = Route$1.update({
  id: "/hotel-details",
  path: "/hotel-details",
  getParentRoute: () => SuperuserRoute
});
const BookingsIdDeleteRoute = Route.update({
  id: "/bookings/$id/delete",
  path: "/bookings/$id/delete",
  getParentRoute: () => Route$d
});
const SuperuserRouteChildren = {
  SuperuserAdminsRoute,
  SuperuserBookingsHistoryRoute,
  SuperuserGuestsRoute,
  SuperuserHistoryRoute,
  SuperuserHotelDetailsRoute,
  SuperuserIndexRoute
};
const SuperuserRouteWithChildren = SuperuserRoute._addFileChildren(
  SuperuserRouteChildren
);
const rootRouteChildren = {
  IndexRoute,
  AdminRoute,
  DirectorRoute,
  LoginRoute,
  ManagerRoute,
  SuperuserRoute: SuperuserRouteWithChildren,
  BookingsIdDeleteRoute
};
const routeTree = Route$d._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreload: "intent",
    defaultPreloadDelay: 30,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  BOOKING_STATUSES as B,
  ROOM_CATEGORIES as R,
  useAuth as a,
  useAdmins as b,
  useNow as c,
  computeShiftWindow as d,
  cn as e,
  formatRemaining as f,
  useBookingsContext as g,
  useHotelGrid as h,
  useI18n as i,
  ROLE_HOME as j,
  useAudit as k,
  useNotifications as l,
  formatGuestName as m,
  useSharedState as n,
  isRoomDirty as o,
  useHotelDetails as p,
  useTheme as q,
  Route as r,
  router as s,
  useShift as u
};
