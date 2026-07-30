import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { e as cn } from "./router-D4A6PFi8.mjs";
import { C as Checkbox$1, a as CheckboxIndicator } from "../_libs/radix-ui__react-checkbox.mjs";
import { i as Check } from "../_libs/lucide-react.mjs";
const DEFAULT_MAX_LENGTH = 28;
const Textarea = reactExports.forwardRef(
  ({ className, onChange, maxLength, ...props }, ref) => {
    const effectiveMax = typeof maxLength === "number" ? maxLength : DEFAULT_MAX_LENGTH;
    const handleChange = (e) => {
      const val = e.target.value;
      if (typeof val === "string" && val.length > effectiveMax) {
        e.target.value = val.slice(0, effectiveMax);
      }
      onChange?.(e);
    };
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "textarea",
      {
        maxLength: effectiveMax,
        className: cn(
          "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        ),
        ref,
        onChange: handleChange,
        ...props
      }
    );
  }
);
Textarea.displayName = "Textarea";
const Checkbox = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Checkbox$1,
  {
    ref,
    className: cn(
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(CheckboxIndicator, { className: cn("flex items-center justify-center text-current"), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-4 w-4" }) })
  }
));
Checkbox.displayName = Checkbox$1.displayName;
export {
  Checkbox as C,
  Textarea as T
};
