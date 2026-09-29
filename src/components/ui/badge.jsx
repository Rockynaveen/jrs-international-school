import * as React from "react";
import { cn } from "../../lib/utils";

function Badge({ className, variant = "default", ...props }) {
  const variantStyles = {
    default: "bg-[#0B0F17] text-white border-transparent",
    secondary: "bg-slate-100 text-slate-800 border-transparent",
    outline: "text-slate-700 border-slate-200",
    red: "bg-red-100 text-red-800 border-red-200",
    amber: "bg-red-100 text-red-800 border-red-200",
    blue: "bg-emerald-100 text-emerald-800 border-emerald-200",
    emerald: "bg-emerald-100 text-emerald-800 border-emerald-200",
    black: "bg-[#0B0F17] text-white border-transparent",
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
