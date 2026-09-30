import React from 'react';
import Button from './Button';

export default function FeatureSection({
  tag,
  title,
  highlight,
  description,
  bullets = [],
  ctaText = 'Learn More',
  ctaTo = '/about',
  image,
  imageAlt,
  reversed = false,
  badgeText,
  bgClass = 'bg-white',
}) {
  return (
    <section className={`py-12 ${bgClass} overflow-hidden`}>
      <div className="max-w-[1240px] mx-auto px-6 lg:px-12">
        <div
          className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center ${
            reversed ? 'lg:flex-row-reverse' : ''
          }`}
        >
          {/* Text Content */}
          <div
            className={`space-y-6 lg:col-span-6 ${
              reversed ? 'lg:order-2' : 'lg:order-1'
            }`}
          >
            {tag && (
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FEF2F2] text-[#DC2626] text-xs font-bold tracking-[0.2em] uppercase border border-red-100">
                <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]" />
                <span>{tag}</span>
              </div>
            )}

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[#0B0F17] leading-[1.15]">
              {title}
            </h2>

            <p className="text-base sm:text-lg text-[#4B5563] leading-relaxed">
              {description}
            </p>

            {bullets.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {bullets.map((bullet, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-[#DCFCE7] text-[#16A34A] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      ✓
                    </span>
                    <span className="text-sm text-[#0B0F17] font-medium">
                      {bullet}
                    </span>
                  </div>
                ))}
              </div>
            )}

            <div className="pt-4">
              <Button
                to={ctaTo}
                variant="primary"
                size="md"
                arrowType="right"
                className="bg-[#DC2626] text-white hover:bg-[#16A34A]"
              >
                {ctaText}
              </Button>
            </div>
          </div>

          {/* Rounded Editorial Image */}
          <div
            className={`lg:col-span-6 relative ${
              reversed ? 'lg:order-1' : 'lg:order-2'
            }`}
          >
            <div className="relative mx-auto max-w-[540px] lg:max-w-none">
              {/* Decorative pastel offset frame */}
              <div
                className={`absolute -bottom-4 ${
                  reversed ? '-left-4' : '-right-4'
                } w-full h-full rounded-[48px] bg-[#FEF2F2] -z-10`}
                aria-hidden="true"
              />

              {/* Main Image Frame */}
              <div className="relative rounded-[48px] overflow-hidden shadow-xl border-4 border-white aspect-[4/3] sm:aspect-[16/11]">
                <img
                  src={image}
                  alt={imageAlt || 'JRS School Feature'}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating badge if available */}
              {badgeText && (
                <div
                  className={`absolute -bottom-4 ${
                    reversed ? 'right-6' : 'left-6'
                  } bg-[#0B0F17] text-white px-5 py-3 rounded-2xl shadow-lg border-2 border-white flex items-center gap-2`}
                >
                  <span className="font-display font-bold text-sm text-[#DC2626]">✦</span>
                  <span className="text-xs font-bold uppercase tracking-wider">
                    {badgeText}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
