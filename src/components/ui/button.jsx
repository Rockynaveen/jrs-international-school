import * as React from "react";
import { cva } from "class-variance-authority";
import { cn } from "../../lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 select-none cursor-pointer",
  {
    variants: {
      variant: {
        default:
          "btn-pointed bg-gradient-to-r from-[#DC2626] to-[#B91C1C] hover:from-[#16A34A] hover:to-[#15803D] text-white font-bold tracking-wide focus-visible:ring-[#16A34A] shadow-md hover:shadow-lg",
        primary:
          "btn-pointed bg-gradient-to-r from-[#DC2626] to-[#B91C1C] hover:from-[#16A34A] hover:to-[#15803D] text-white font-bold tracking-wide focus-visible:ring-[#16A34A] shadow-md hover:shadow-lg",
        secondary:
          "btn-pointed bg-gradient-to-r from-[#16A34A] to-[#15803D] hover:from-[#DC2626] hover:to-[#B91C1C] text-white font-bold tracking-wide focus-visible:ring-[#16A34A] shadow-md hover:shadow-lg",
        destructive:
          "btn-pointed bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-500",
        outline:
          "btn-pointed bg-white text-[#0B0F17] hover:bg-[#16A34A] hover:text-white border-2 border-[#0B0F17]/20 hover:border-[#16A34A] focus-visible:ring-[#0B0F17]",
        ghost:
          "rounded-xl hover:bg-slate-100 text-slate-700 hover:text-slate-900",
        link:
          "text-[#DC2626] underline-offset-4 hover:underline",
        pointed:
          "btn-pointed bg-[#DC2626] hover:bg-[#16A34A] text-white font-bold tracking-wide",
      },
      size: {
        default: "text-sm sm:text-base px-8 py-3 min-h-[44px]",
        sm: "text-xs sm:text-[13px] px-6 py-2 min-h-[36px]",
        lg: "text-base sm:text-lg px-10 py-3.5 min-h-[50px]",
        icon: "h-10 w-10 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  );
});
Button.displayName = "Button";

export { Button, buttonVariants };
