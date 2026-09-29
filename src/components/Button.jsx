import React from 'react';
import { Link } from 'react-router-dom';

export default function Button({
  children,
  to,
  href,
  variant = 'primary', // 'primary', 'secondary', 'orange', 'white', 'outline', 'mint'
  size = 'md', // 'sm', 'md', 'lg'
  className = '',
  arrow = true,
  ...props
}) {
  const baseStyles =
    'group inline-flex items-center justify-between font-medium rounded-full transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-95 cursor-pointer select-none';

  const sizeStyles = {
    sm: 'text-xs pl-4 pr-1.5 py-1.5 gap-2.5',
    md: 'text-sm sm:text-base pl-6 pr-2 py-2 gap-3.5',
    lg: 'text-base sm:text-lg pl-7 pr-2.5 py-2.5 gap-4',
  };

  const badgeSizes = {
    sm: 'w-7 h-7 text-xs',
    md: 'w-9 h-9 text-sm',
    lg: 'w-11 h-11 text-base',
  };

  const variants = {
    primary:
      'bg-gradient-to-r from-[#DC2626] to-[#B91C1C] hover:from-[#16A34A] hover:to-[#15803D] text-white focus:ring-[#16A34A]',
    secondary:
      'bg-gradient-to-r from-[#16A34A] to-[#15803D] hover:from-[#DC2626] hover:to-[#B91C1C] text-white font-semibold focus:ring-[#16A34A]',
    orange:
      'bg-gradient-to-r from-[#DC2626] to-[#B91C1C] hover:from-[#16A34A] hover:to-[#15803D] text-white font-semibold focus:ring-[#16A34A]',
    outline:
      'border-2 border-[#0B0F17]/20 bg-white text-[#0B0F17] hover:border-[#16A34A] hover:text-[#16A34A] hover:bg-slate-50 focus:ring-[#0B0F17]',
    white:
      'bg-gradient-to-r from-white to-slate-50 text-[#0B0F17] hover:from-[#16A34A] hover:to-[#15803D] hover:text-white border border-slate-200 focus:ring-white',
    mint:
      'bg-gradient-to-r from-[#F0FDF4] to-[#DCFCE7] text-[#16A34A] hover:from-[#16A34A] hover:to-[#15803D] hover:text-white font-semibold focus:ring-[#16A34A]',
    black:
      'bg-gradient-to-r from-[#0B0F17] to-[#1E293B] text-white hover:from-[#16A34A] hover:to-[#15803D] focus:ring-[#0B0F17]',
  };

  // Badge background & icon color based on button variant
  const badgeColors = {
    primary: 'bg-white text-[#DC2626] group-hover:text-[#16A34A]',
    secondary: 'bg-white text-[#16A34A]',
    orange: 'bg-white text-[#DC2626] group-hover:text-[#16A34A]',
    outline: 'bg-[#0B0F17] text-white group-hover:bg-[#16A34A]',
    white: 'bg-[#DC2626] text-white group-hover:bg-white group-hover:text-[#16A34A]',
    mint: 'bg-[#16A34A] text-white',
    black: 'bg-[#DC2626] text-white group-hover:bg-white group-hover:text-[#16A34A]',
  };

  const content = (
    <>
      <span className="font-semibold tracking-wide whitespace-nowrap">{children}</span>
      {arrow && (
        <span
          className={`lilstep-btn-arrow ${badgeSizes[size] || badgeSizes.md} ${
            badgeColors[variant] || badgeColors.primary
          } rounded-full flex items-center justify-center relative overflow-hidden shrink-0`}
          aria-hidden="true"
        >
          {/* Arrow 1: moves up-right on hover */}
          <span className="lilstep-arrow-1 absolute transition-transform duration-300 ease-out group-hover:translate-x-4 group-hover:-translate-y-4">
            <svg
              className="w-3.5 h-3.5 fill-none stroke-current stroke-2"
              viewBox="0 0 24 24"
            >
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </span>

          {/* Arrow 2: enters from bottom-left on hover */}
          <span className="lilstep-arrow-2 absolute transition-transform duration-300 ease-out -translate-x-4 translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0">
            <svg
              className="w-3.5 h-3.5 fill-none stroke-current stroke-2"
              viewBox="0 0 24 24"
            >
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </span>
        </span>
      )}
    </>
  );

  const combinedClasses = `${baseStyles} ${sizeStyles[size] || sizeStyles.md} ${
    variants[variant] || variants.primary
  } ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedClasses} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={combinedClasses} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {content}
    </button>
  );
}
