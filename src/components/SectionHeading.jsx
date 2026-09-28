import React from 'react';

export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  subtitle,
  centered = false,
  dark = false,
  className = '',
  eyebrowColor = 'text-[#0B6DB7]',
  size = 'lg', // 'md', 'lg', 'xl'
}) {
  const sizeMap = {
    md: 'text-2xl sm:text-3xl lg:text-4xl',
    lg: 'text-3xl sm:text-4xl lg:text-5xl',
    xl: 'text-4xl sm:text-5xl lg:text-6xl',
  };

  return (
    <div
      className={`space-y-4 ${centered ? 'text-center mx-auto' : 'text-left'} ${className}`}
    >
      {eyebrow && (
        <div
          className={`inline-flex items-center gap-2 text-xs sm:text-sm font-bold tracking-[0.2em] uppercase ${eyebrowColor}`}
        >
          <span className="w-2 h-2 rounded-full bg-current inline-block opacity-75"></span>
          <span>{eyebrow}</span>
        </div>
      )}

      {title && (
        <h2
          className={`font-display font-medium tracking-tight leading-[1.15] ${
            sizeMap[size]
          } ${dark ? 'text-white' : 'text-[#152A40]'}`}
        >
          {title}
        </h2>
      )}

      {subtitle && (
        <p
          className={`text-base sm:text-lg leading-relaxed max-w-2xl font-normal ${
            centered ? 'mx-auto' : ''
          } ${dark ? 'text-slate-200' : 'text-[#68798B]'}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
