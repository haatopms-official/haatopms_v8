import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { p as useHotelDetails } from "./router-D4A6PFi8.mjs";
import { H as HotelNavbar } from "./HotelNavbar-BoJodXQi.mjs";
import { B as Button } from "./button-Dzx3P4Vv.mjs";
import { I as Input, A as AlertDialog, a as AlertDialogContent, b as AlertDialogHeader, c as AlertDialogTitle, d as AlertDialogDescription, e as AlertDialogFooter, f as AlertDialogCancel, g as AlertDialogAction } from "./alert-dialog-q5bFbkxl.mjs";
import { L as Label } from "./label-CeB4zpI0.mjs";
import { r as Building2, aJ as RotateCcw, i as Check, ad as Save, aK as Upload, g as Trash2, I as Info, k as Hash, aL as Wallet, K as Phone, af as Globe, O as Mail, T as TriangleAlert } from "../_libs/lucide-react.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
const FIELDS = [
  { key: "hotelName", label: "Hotel name", placeholder: "Отель Саёхат", icon: Building2 },
  { key: "companyName", label: "Company name", placeholder: 'ООО "Sayohat Group"', icon: Info },
  { key: "inn", label: "INN", placeholder: "123456789", icon: Hash },
  { key: "raschetnyiSchet", label: "Расчётный счёт", placeholder: "2020 8000 0000 0000 0000", icon: Wallet, full: true },
  { key: "telephone", label: "Telephone", placeholder: "+998 71 000-00-00", icon: Phone, type: "tel" },
  { key: "site", label: "Site", placeholder: "https://sayohat.uz", icon: Globe },
  { key: "email", label: "E-mail", placeholder: "info@sayohat.uz", icon: Mail, type: "email" }
];
function HotelDetailsPage({ embedded = false }) {
  const { details, setDetails, reset } = useHotelDetails();
  const [draft, setDraft] = reactExports.useState(details);
  const [saved, setSaved] = reactExports.useState(false);
  const [confirmClear, setConfirmClear] = reactExports.useState(false);
  const fileRef = reactExports.useRef(null);
  const detailsKey = JSON.stringify(details);
  const [lastLoaded, setLastLoaded] = reactExports.useState(detailsKey);
  if (lastLoaded !== detailsKey) {
    setDraft(details);
    setLastLoaded(detailsKey);
  }
  const dirty = JSON.stringify(draft) !== JSON.stringify(details);
  const onLogoChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setDraft((p) => ({ ...p, logo: String(reader.result || "") }));
    reader.readAsDataURL(file);
  };
  const handleSave = () => {
    setDetails(draft);
    setSaved(true);
    setTimeout(() => setSaved(false), 1800);
  };
  const handleClearAll = () => {
    reset();
    setDraft({ logo: "", hotelName: "", companyName: "", inn: "", raschetnyiSchet: "", telephone: "", site: "", email: "" });
    setConfirmClear(false);
  };
  const inner = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto w-full max-w-5xl px-4 pt-8 pb-16 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 flex items-start justify-between gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-black uppercase tracking-[0.22em] text-[hsl(265_85%_55%)]", children: "Administration" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-1 flex items-center gap-2 text-2xl font-black tracking-tight text-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "h-6 w-6 text-[hsl(265_85%_55%)]" }),
          "Hotel details"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "Информация появляется в квитанциях об оплате." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            variant: "outline",
            size: "sm",
            onClick: () => {
              setDraft(details);
            },
            disabled: !dirty,
            className: "gap-1.5",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(RotateCcw, { className: "h-3.5 w-3.5" }),
              " Отменить"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            size: "sm",
            onClick: handleSave,
            disabled: !dirty,
            className: "gap-1.5 bg-gradient-to-r from-[hsl(265_85%_55%)] to-[hsl(280_85%_60%)] text-white shadow-md shadow-purple-500/30",
            children: [
              saved ? /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-3.5 w-3.5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Save, { className: "h-3.5 w-3.5" }),
              saved ? "Сохранено" : "Сохранить"
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 12 },
        animate: { opacity: 1, y: 0 },
        className: "rounded-3xl border border-slate-200/70 bg-white/70 p-6 shadow-xl shadow-purple-500/5 backdrop-blur-xl dark:border-white/10 dark:bg-white/5",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 md:grid-cols-[240px_1fr]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-slate-200/70 bg-gradient-to-b from-white to-slate-50/60 p-4 dark:border-white/10 dark:from-white/5 dark:to-white/[0.02]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-[10px] font-black uppercase tracking-[0.14em] text-muted-foreground", children: "Logo" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 flex aspect-square w-full items-center justify-center overflow-hidden rounded-xl border border-dashed border-slate-300 bg-white dark:border-white/15 dark:bg-white/5", children: draft.logo ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: draft.logo, alt: "Logo", className: "h-full w-full object-contain" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: "Нет логотипа" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    ref: fileRef,
                    type: "file",
                    accept: "image/*",
                    className: "hidden",
                    onChange: onLogoChange
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    type: "button",
                    size: "sm",
                    variant: "outline",
                    className: "flex-1 gap-1.5",
                    onClick: () => fileRef.current?.click(),
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { className: "h-3.5 w-3.5" }),
                      " Загрузить"
                    ]
                  }
                ),
                draft.logo && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    type: "button",
                    size: "sm",
                    variant: "ghost",
                    className: "text-destructive hover:text-destructive",
                    onClick: () => setDraft((p) => ({ ...p, logo: "" })),
                    title: "Удалить логотип",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-3.5 w-3.5" })
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 gap-3 sm:grid-cols-2", children: FIELDS.map((f) => {
              const Icon = f.icon;
              return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: `group rounded-2xl border border-slate-200/70 bg-white/80 p-3.5 transition hover:border-[hsl(265_85%_75%)] hover:shadow-sm dark:border-white/10 dark:bg-white/[0.03] ${f.full ? "sm:col-span-2" : ""}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      Label,
                      {
                        htmlFor: `hd-${f.key}`,
                        className: "flex items-center gap-1.5 text-[10px] font-black uppercase tracking-[0.14em] text-muted-foreground",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-3 w-3 text-[hsl(265_85%_55%)]" }),
                          f.label
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        id: `hd-${f.key}`,
                        type: f.type ?? "text",
                        placeholder: f.placeholder,
                        value: draft[f.key],
                        onChange: (e) => setDraft((p) => ({ ...p, [f.key]: e.target.value })),
                        className: "mt-1.5 border-0 bg-transparent px-0 focus-visible:ring-0 focus-visible:ring-offset-0 shadow-none text-sm font-medium"
                      }
                    )
                  ]
                },
                f.key
              );
            }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex items-center justify-between border-t border-slate-200/60 pt-4 text-xs text-muted-foreground dark:border-white/10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Данные сохраняются локально на этом устройстве." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: () => setConfirmClear(true),
                className: "inline-flex items-center gap-1.5 font-semibold text-destructive hover:underline",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-3.5 w-3.5" }),
                  "Очистить всё"
                ]
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialog, { open: confirmClear, onOpenChange: setConfirmClear, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogContent, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogTitle, { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-8 w-8 items-center justify-center rounded-full bg-destructive/10 text-destructive", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-4 w-4" }) }),
          "Очистить все реквизиты?"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogDescription, { children: "Это удалит логотип и все поля отеля (название, ИНН, счёт, контакты). Действие нельзя отменить, а информация исчезнет из будущих квитанций." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogFooter, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogCancel, { children: "Отмена" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          AlertDialogAction,
          {
            onClick: handleClearAll,
            className: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
            children: "Да, очистить всё"
          }
        )
      ] })
    ] }) })
  ] });
  if (embedded) return inner;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-gradient-to-b from-background via-background to-[hsl(265_60%_98%)] dark:to-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(HotelNavbar, { totalRooms: 0, viewMode: "timeline", onViewModeChange: () => {
    } }),
    inner
  ] });
}
export {
  HotelDetailsPage as H
};
