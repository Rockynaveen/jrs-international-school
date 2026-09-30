import * as React from "react";
import { cn } from "../../lib/utils";

const Textarea = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[110px] w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-[#0B0F17] shadow-xs transition-colors placeholder:text-slate-400 focus-visible:outline-none focus-visible:border-[#DC2626] focus-visible:bg-white focus-visible:ring-2 focus-visible:ring-[#DC2626]/20 disabled:cursor-not-allowed disabled:opacity-50 resize-none",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

export { Textarea };
