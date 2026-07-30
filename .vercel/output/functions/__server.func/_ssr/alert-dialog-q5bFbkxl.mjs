import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { e as cn } from "./router-D4A6PFi8.mjs";
import { R as Root2, P as Portal2, C as Content2, T as Title2, D as Description2, a as Cancel, A as Action, O as Overlay2 } from "../_libs/radix-ui__react-alert-dialog.mjs";
import { b as buttonVariants } from "./button-Dzx3P4Vv.mjs";
const DEFAULT_MAX_LENGTH = 28;
const Input = reactExports.forwardRef(
  ({ className, type, onChange, maxLength, ...props }, ref) => {
    const effectiveMax = typeof maxLength === "number" ? maxLength : DEFAULT_MAX_LENGTH;
    const handleChange = (e) => {
      const val = e.target.value;
      if (typeof val === "string" && val.length > effectiveMax) {
        e.target.value = val.slice(0, effectiveMax);
      }
      onChange?.(e);
    };
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        type,
        maxLength: effectiveMax,
        className: cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        ),
        ref,
        onChange: handleChange,
        ...props
      }
    );
  }
);
Input.displayName = "Input";
const AlertDialog = Root2;
const AlertDialogPortal = Portal2;
const AlertDialogOverlay = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Overlay2,
  {
    className: cn(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props,
    ref
  }
));
AlertDialogOverlay.displayName = Overlay2.displayName;
const AlertDialogContent = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogPortal, { children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogOverlay, {}),
  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 grid place-items-center p-3 pointer-events-none sm:p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    Content2,
    {
      ref,
      className: cn(
        "pointer-events-auto relative z-50 grid w-full max-w-lg gap-4 overflow-y-auto overscroll-contain border bg-background p-6 shadow-lg duration-200 max-h-[calc(100dvh-1.5rem)] sm:max-h-[calc(100dvh-2rem)] sm:rounded-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
        className
      ),
      ...props
    }
  ) })
] }));
AlertDialogContent.displayName = Content2.displayName;
const AlertDialogHeader = ({ className, ...props }) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("flex flex-col space-y-2 text-center sm:text-left", className), ...props });
AlertDialogHeader.displayName = "AlertDialogHeader";
const AlertDialogFooter = ({ className, ...props }) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className), ...props });
AlertDialogFooter.displayName = "AlertDialogFooter";
const AlertDialogTitle = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Title2, { ref, className: cn("text-lg font-semibold", className), ...props }));
AlertDialogTitle.displayName = Title2.displayName;
const AlertDialogDescription = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Description2, { ref, className: cn("text-sm text-muted-foreground", className), ...props }));
AlertDialogDescription.displayName = Description2.displayName;
const AlertDialogAction = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Action, { ref, className: cn(buttonVariants(), className), ...props }));
AlertDialogAction.displayName = Action.displayName;
const AlertDialogCancel = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Cancel,
  {
    ref,
    className: cn(buttonVariants({ variant: "outline" }), "mt-2 sm:mt-0", className),
    ...props
  }
));
AlertDialogCancel.displayName = Cancel.displayName;
export {
  AlertDialog as A,
  Input as I,
  AlertDialogContent as a,
  AlertDialogHeader as b,
  AlertDialogTitle as c,
  AlertDialogDescription as d,
  AlertDialogFooter as e,
  AlertDialogCancel as f,
  AlertDialogAction as g
};
