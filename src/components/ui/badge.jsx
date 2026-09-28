import * as React from "react";
import { cn } from "../../lib/utils";

function Badge({ className, variant = "default", ...props }) {
  const variantStyles = {
    default: "bg-[#06335F] text-white border-transparent",
    secondary: "bg-slate-100 text-slate-800 border-transparent",
    outline: "text-slate-700 border-slate-200",
    amber: "bg-amber-100 text-amber-800 border-amber-200",
    blue: "bg-sky-100 text-sky-800 border-sky-200",
    emerald: "bg-emerald-100 text-emerald-800 border-emerald-200",
  };

  return (
    <div
      data-slot="badge"
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors select-none",
        variantStyles[variant] || variantStyles.default,
        className
      )}
      {...props}
    />
  );
}

export { Badge };
