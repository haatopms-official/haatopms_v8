import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { r as reactDomExports } from "../_libs/react-dom.mjs";
import { a as useAuth, b as useAdmins, k as useAudit } from "./router-D4A6PFi8.mjs";
import { H as HotelNavbar } from "./HotelNavbar-BoJodXQi.mjs";
import { U as Users, P as Plus, ag as Search, a5 as Fingerprint, aE as AtSign, a9 as IdCard, a6 as ShieldCheck, l as Pencil, g as Trash2, X, aH as KeyRound, at as EyeOff, au as Eye, i as Check, aI as ScanLine } from "../_libs/lucide-react.mjs";
import { m as motion, A as AnimatePresence } from "../_libs/framer-motion.mjs";
function formatFingerprint() {
  const part = () => Math.random().toString(16).slice(2, 6).toUpperCase();
  return `FP-${part()}-${part()}`;
}
function genPassword() {
  const alphabet = "ABCDEFGHJKMNPQRSTUVWXYZ23456789";
  let out = "";
  for (let i = 0; i < 10; i++) out += alphabet[Math.floor(Math.random() * alphabet.length)];
  return out;
}
function SuperuserAdmins({ embedded = false } = {}) {
  const { user } = useAuth();
  const { admins, addAdmin, updateAdmin, removeAdmin } = useAdmins();
  const { log } = useAudit();
  const [openForm, setOpenForm] = reactExports.useState(false);
  const [editing, setEditing] = reactExports.useState(null);
  const [query, setQuery] = reactExports.useState("");
  const canEdit = user?.role === "superuser" || user?.role === "manager";
  const actor = user ? { username: user.username, role: user.role, adminId: user.adminId ?? null } : { username: "system", role: "superuser" };
  const filtered = admins.filter((a) => {
    const q = query.trim().toLowerCase();
    if (!q) return true;
    return a.name.toLowerCase().includes(q) || a.surname.toLowerCase().includes(q) || a.username.toLowerCase().includes(q) || a.idNumber.toLowerCase().includes(q) || a.fingerprintId.toLowerCase().includes(q);
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: embedded ? "flex flex-col" : "flex min-h-screen flex-col bg-gradient-to-br from-slate-50 to-slate-100", children: [
    !embedded && /* @__PURE__ */ jsxRuntimeExports.jsx(HotelNavbar, { totalRooms: 0, viewMode: "tiles", onViewModeChange: () => {
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "flex-1 px-4 sm:px-8 py-8 max-w-6xl w-full mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "flex flex-wrap items-end justify-between gap-4 mb-7", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-[hsl(265_85%_55%)] text-xs font-bold tracking-widest uppercase", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-3.5 w-3.5" }),
            "Registered administrators"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-1 text-3xl font-black tracking-tight text-slate-900", children: "Administrators directory" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-slate-500 max-w-xl", children: "Onboard staff, capture their fingerprint, ID number, and login credentials. Each admin signs into the shared admin dashboard with their own username and password." })
        ] }),
        canEdit && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.button,
          {
            whileHover: { scale: 1.03 },
            whileTap: { scale: 0.97 },
            onClick: () => {
              setEditing(null);
              setOpenForm(true);
            },
            className: "flex items-center gap-2 rounded-xl bg-gradient-to-r from-[hsl(265_85%_60%)] to-[hsl(280_85%_55%)] px-4 py-2.5 text-sm font-bold text-white shadow-lg shadow-purple-500/30",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4" }),
              "Register administrator"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mb-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            value: query,
            onChange: (e) => setQuery(e.target.value.slice(0, 28)),
            placeholder: "Search by name, username, ID or fingerprint…",
            maxLength: 28,
            className: "w-full rounded-xl border border-slate-200 bg-white py-2.5 pl-9 pr-3 text-sm outline-none focus:border-[hsl(265_85%_55%)] focus:ring-4 focus:ring-[hsl(265_85%_55%)]/15"
          }
        )
      ] }),
      filtered.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border-2 border-dashed border-slate-200 bg-white/60 py-14 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Fingerprint, { className: "mx-auto h-10 w-10 text-slate-300" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm font-bold text-slate-700", children: "No administrators yet" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-slate-500", children: "Register your first administrator to start tracking activity." })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "grid gap-3 sm:grid-cols-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { initial: false, children: filtered.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.li,
        {
          layout: true,
          initial: { opacity: 0, y: 10 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, scale: 0.95 },
          className: "group rounded-2xl bg-white border border-slate-200 p-4 shadow-sm hover:shadow-md transition-shadow",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[hsl(265_85%_60%)] to-[hsl(280_85%_55%)] text-white shadow-md shadow-purple-500/30", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Fingerprint, { className: "h-5 w-5" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-base font-black text-slate-900 truncate", children: [
                a.name,
                " ",
                a.surname
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-0.5 flex flex-wrap items-center gap-x-3 gap-y-0.5 text-[11px] font-medium text-slate-500", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(AtSign, { className: "h-3 w-3" }),
                  a.username || "—"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(IdCard, { className: "h-3 w-3" }),
                  a.idNumber || "—"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 inline-flex items-center gap-1.5 text-[11px] font-mono font-bold tracking-wider text-[hsl(265_85%_45%)]", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "h-3 w-3" }),
                a.fingerprintId
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 text-[11px] text-slate-400", children: [
                "Registered ",
                new Date(a.createdAt).toLocaleString()
              ] })
            ] }),
            canEdit && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1 opacity-0 group-hover:opacity-100 transition-opacity", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => {
                    setEditing(a);
                    setOpenForm(true);
                  },
                  className: "rounded-lg p-1.5 text-slate-500 hover:text-[hsl(265_85%_55%)] hover:bg-slate-100",
                  "aria-label": "Edit",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Pencil, { className: "h-4 w-4" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => {
                    if (confirm(`Remove ${a.name} ${a.surname}?`)) {
                      removeAdmin(a.id);
                      log({
                        actor,
                        category: "admin",
                        action: "admin.deleted",
                        summary: `Removed administrator ${a.name} ${a.surname} (${a.username})`,
                        details: { adminId: a.id, username: a.username, idNumber: a.idNumber }
                      });
                    }
                  },
                  className: "rounded-lg p-1.5 text-red-500 hover:text-red-600 hover:bg-red-50",
                  "aria-label": "Delete",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-4 w-4" })
                }
              )
            ] })
          ] })
        },
        a.id
      )) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: openForm && /* @__PURE__ */ jsxRuntimeExports.jsx(
      AdminForm,
      {
        initial: editing,
        existing: admins,
        onClose: () => setOpenForm(false),
        onSave: (data) => {
          if (editing) {
            updateAdmin(editing.id, data);
            log({
              actor,
              category: "admin",
              action: "admin.updated",
              summary: `Updated administrator ${data.name} ${data.surname} (${data.username})`,
              details: { adminId: editing.id, before: editing, patch: data }
            });
          } else {
            const rec = addAdmin(data);
            log({
              actor,
              category: "admin",
              action: "admin.created",
              summary: `Registered new administrator ${data.name} ${data.surname} (${data.username})`,
              details: { adminId: rec.id, username: data.username, idNumber: data.idNumber }
            });
          }
          setOpenForm(false);
        }
      }
    ) })
  ] });
}
function AdminForm({
  initial,
  existing,
  onClose,
  onSave
}) {
  const [name, setName] = reactExports.useState(initial?.name ?? "");
  const [surname, setSurname] = reactExports.useState(initial?.surname ?? "");
  const [idNumber, setIdNumber] = reactExports.useState(initial?.idNumber ?? "");
  const [username, setUsername] = reactExports.useState(initial?.username ?? "");
  const [password, setPassword] = reactExports.useState(initial?.password ?? "");
  const [showPassword, setShowPassword] = reactExports.useState(false);
  const [fingerprintId, setFingerprintId] = reactExports.useState(initial?.fingerprintId ?? "");
  const [scanning, setScanning] = reactExports.useState(false);
  const [captured, setCaptured] = reactExports.useState(!!initial?.fingerprintId);
  const usernameTrim = username.trim().toLowerCase();
  const usernameTaken = usernameTrim.length > 0 && existing.some(
    (a) => a.username.toLowerCase() === usernameTrim && a.id !== initial?.id
  );
  const valid = name.trim() && surname.trim() && idNumber.trim() && usernameTrim.length >= 3 && !usernameTaken && password.length >= 4 && fingerprintId.trim();
  const startCapture = () => {
    setScanning(true);
    window.setTimeout(() => {
      setFingerprintId(formatFingerprint());
      setCaptured(true);
      setScanning(false);
    }, 1600);
  };
  reactExports.useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);
  if (typeof document === "undefined") return null;
  return reactDomExports.createPortal(
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        className: "fixed inset-0 z-[2147483600] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 overflow-y-auto",
        onClick: onClose,
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { scale: 0.96, opacity: 0, filter: "blur(2px)" },
            animate: { scale: 1, opacity: 1, filter: "blur(0px)" },
            exit: { scale: 0.96, opacity: 0, filter: "blur(2px)" },
            transition: { duration: 0.2, ease: "easeOut" },
            onClick: (e) => e.stopPropagation(),
            className: "w-full max-w-lg rounded-3xl bg-card p-6 shadow-2xl my-8 text-card-foreground",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-black text-foreground", children: initial ? "Edit administrator" : "Register administrator" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: onClose, className: "text-slate-400 hover:text-slate-600", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-5 w-5" }) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Name", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    autoFocus: true,
                    value: name,
                    onChange: (e) => setName(e.target.value.slice(0, 28)),
                    placeholder: "Akmal",
                    maxLength: 28,
                    className: "w-full rounded-xl border border-slate-200 bg-white py-2.5 px-3 text-sm outline-none focus:border-[hsl(265_85%_55%)] focus:ring-4 focus:ring-[hsl(265_85%_55%)]/15"
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Surname", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    value: surname,
                    onChange: (e) => setSurname(e.target.value.slice(0, 28)),
                    placeholder: "Karimov",
                    maxLength: 28,
                    className: "w-full rounded-xl border border-slate-200 bg-white py-2.5 px-3 text-sm outline-none focus:border-[hsl(265_85%_55%)] focus:ring-4 focus:ring-[hsl(265_85%_55%)]/15"
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "ID number", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(IdCard, { className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      value: idNumber,
                      onChange: (e) => setIdNumber(e.target.value.slice(0, 28)),
                      placeholder: "AA1234567",
                      maxLength: 28,
                      className: "w-full rounded-xl border border-slate-200 bg-white py-2.5 pl-9 pr-3 text-sm outline-none focus:border-[hsl(265_85%_55%)] focus:ring-4 focus:ring-[hsl(265_85%_55%)]/15"
                    }
                  )
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Field, { label: "Login username", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(AtSign, { className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "input",
                      {
                        value: username,
                        onChange: (e) => setUsername(e.target.value.toLowerCase().replace(/\s+/g, "").slice(0, 28)),
                        placeholder: "akmal.k",
                        maxLength: 28,
                        className: `w-full rounded-xl border bg-white py-2.5 pl-9 pr-3 text-sm outline-none focus:ring-4 ${usernameTaken ? "border-red-300 focus:border-red-400 focus:ring-red-200" : "border-slate-200 focus:border-[hsl(265_85%_55%)] focus:ring-[hsl(265_85%_55%)]/15"}`
                      }
                    )
                  ] }),
                  usernameTaken && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-[11px] font-semibold text-red-600", children: "This username is already taken." })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sm:col-span-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Field, { label: "Password", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(KeyRound, { className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "input",
                        {
                          type: showPassword ? "text" : "password",
                          value: password,
                          onChange: (e) => setPassword(e.target.value.slice(0, 28)),
                          placeholder: "At least 4 characters",
                          maxLength: 28,
                          className: "w-full rounded-xl border border-slate-200 bg-white py-2.5 pl-9 pr-10 text-sm outline-none focus:border-[hsl(265_85%_55%)] focus:ring-4 focus:ring-[hsl(265_85%_55%)]/15"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "button",
                        {
                          type: "button",
                          tabIndex: -1,
                          onClick: () => setShowPassword((s) => !s),
                          className: "absolute right-2 top-1/2 -translate-y-1/2 rounded-lg p-1.5 text-slate-400 hover:text-[hsl(265_85%_55%)] hover:bg-slate-100",
                          "aria-label": "Toggle password visibility",
                          children: showPassword ? /* @__PURE__ */ jsxRuntimeExports.jsx(EyeOff, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "h-4 w-4" })
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: () => {
                          setPassword(genPassword());
                          setShowPassword(true);
                        },
                        className: "rounded-xl border border-slate-200 bg-white px-3 text-xs font-bold text-slate-600 hover:bg-slate-50",
                        title: "Generate strong password",
                        children: "Generate"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-[11px] text-slate-500", children: "The admin uses this username and password to sign into the shared admin dashboard." })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sm:col-span-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Fingerprint", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 rounded-xl border-2 border-dashed border-slate-200 bg-slate-50 p-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: startCapture,
                      disabled: scanning,
                      className: `relative flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border-2 overflow-hidden transition-colors ${captured ? "border-emerald-400 bg-emerald-50" : scanning ? "border-[hsl(265_85%_55%)] bg-[hsl(265_85%_97%)]" : "border-slate-300 bg-white hover:border-[hsl(265_85%_55%)]"}`,
                      children: [
                        captured && !scanning ? /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-7 w-7 text-emerald-600", strokeWidth: 3 }) : scanning ? /* @__PURE__ */ jsxRuntimeExports.jsx(ScanLine, { className: "h-7 w-7 text-[hsl(265_85%_55%)] animate-pulse" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Fingerprint, { className: "h-7 w-7 text-slate-400" }),
                        scanning && /* @__PURE__ */ jsxRuntimeExports.jsx(
                          motion.div,
                          {
                            initial: { y: -22 },
                            animate: { y: 22 },
                            transition: { duration: 0.7, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" },
                            className: "pointer-events-none absolute left-1 right-1 h-1 rounded-full bg-gradient-to-r from-transparent via-[hsl(265_85%_55%)] to-transparent shadow-[0_0_12px_hsl(265_85%_55%)]"
                          }
                        )
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-w-0 flex-1", children: captured ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-bold text-emerald-700", children: "Captured" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-xs font-bold tracking-wider text-slate-700 truncate", children: fingerprintId }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: startCapture, className: "mt-1 text-[11px] font-semibold text-[hsl(265_85%_55%)] hover:underline", children: "Re-scan" })
                  ] }) : scanning ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-bold text-[hsl(265_85%_45%)]", children: "Scanning…" }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-bold text-slate-700", children: "Tap to capture fingerprint" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-slate-500", children: "Sensor permission will be requested." })
                  ] }) })
                ] }) }) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex gap-3 justify-end", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: onClose, className: "rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-700 hover:bg-slate-50", children: "Cancel" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    disabled: !valid,
                    onClick: () => onSave({
                      name: name.trim(),
                      surname: surname.trim(),
                      idNumber: idNumber.trim(),
                      username: usernameTrim,
                      password,
                      fingerprintId: fingerprintId.trim()
                    }),
                    className: "rounded-xl bg-gradient-to-r from-[hsl(265_85%_60%)] to-[hsl(280_85%_55%)] px-4 py-2 text-sm font-bold text-white shadow-md shadow-purple-500/30 disabled:opacity-50 disabled:cursor-not-allowed",
                    children: initial ? "Save changes" : "Register"
                  }
                )
              ] })
            ]
          }
        )
      }
    ),
    document.body
  );
}
function Field({ label, children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "mb-1.5 block text-[11px] font-bold tracking-wider text-slate-600", children: label.toUpperCase() }),
    children
  ] });
}
export {
  SuperuserAdmins as S
};
