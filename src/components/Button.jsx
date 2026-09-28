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
    lg: 'text-base sm:text-lg pl-7 pr-2.5 py-2.5 gap-4 shadow-sm hover:shadow-md',
  };

  const badgeSizes = {
    sm: 'w-7 h-7 text-xs',
    md: 'w-9 h-9 text-sm',
    lg: 'w-11 h-11 text-base',
  };

  const variants = {
    primary:
      'bg-[#06335F] text-white hover:bg-[#0B6DB7] focus:ring-[#0B6DB7]',
    secondary:
      'bg-[#F7C95E] text-[#06335F] hover:bg-[#fabd36] font-semibold focus:ring-[#F7C95E]',
    orange:
      'bg-[#EF8750] text-white hover:bg-[#df7238] font-semibold focus:ring-[#EF8750]',
    outline:
      'border-2 border-[#06335F]/20 bg-white text-[#06335F] hover:border-[#06335F] hover:bg-slate-50 focus:ring-[#06335F]',
    white:
      'bg-white text-[#06335F] hover:bg-slate-100 shadow-md focus:ring-white',
    mint:
      'bg-[#E3F1EB] text-[#06335F] hover:bg-[#d0ebe0] font-semibold focus:ring-[#06335F]',
  };

  // Badge background & icon color based on button variant
  const badgeColors = {
    primary: 'bg-white text-[#06335F]',
    secondary: 'bg-[#06335F] text-[#F7C95E]',
    orange: 'bg-white text-[#EF8750]',
    outline: 'bg-[#06335F] text-white',
    white: 'bg-[#06335F] text-white',
    mint: 'bg-[#06335F] text-white',
  };

  const content = (
    <>
      <span className="font-semibold tracking-wide whitespace-nowrap">{children}</span>
      {arrow && (
        <span
          className={`lilstep-btn-arrow ${badgeSizes[size] || badgeSizes.md} ${
            badgeColors[variant] || badgeColors.primary
          } rounded-full flex items-center justify-center relative overflow-hidden shrink-0 shadow-xs`}
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
