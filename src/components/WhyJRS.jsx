import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';

export default function WhyJRS() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <section id="about" className="relative w-full bg-white py-12 overflow-hidden border-b border-slate-200">
      {/* Subtle Ambient Brand Glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-red-500/5 to-transparent rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-emerald-500/5 to-transparent rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          
          {/* ================= LEFT COLUMN: School Building Image (Same height as content) ================= */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="relative w-full flex-1 min-h-[360px] sm:min-h-[440px] lg:min-h-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border border-slate-100 bg-slate-50">
              <img
                src="/about-campus-main.jpeg"
                alt="JRS International School Modern Campus Building"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
            </div>
          </div>

          {/* ================= RIGHT COLUMN: About Us Editorial Content ================= */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-4 sm:space-y-6">
            {/* Tag / Eyebrow: Graduation Cap Icon + "About Us" */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50/80 border border-red-100 text-[#DC2626] font-semibold text-xs uppercase tracking-[0.2em] w-fit">
              <svg
                className="w-4 h-4 text-[#DC2626] shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                <path d="M6 12v5c3 3 9 3 12 0v-5" />
              </svg>
              <span>About Us</span>
            </div>

            {/* Main Heading */}
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-[42px] text-[#0B0F17] leading-[1.18] tracking-tight">
              Welcome to <span className="bg-gradient-to-r from-[#DC2626] to-[#EF4444] bg-clip-text text-transparent">JRS International School</span>
            </h2>

            {/* Subheading */}
            <h3 className="font-display text-lg sm:text-xl font-bold text-slate-800 leading-snug">
              Best CBSE School with <span className="bg-gradient-to-r from-[#16A34A] to-[#15803D] bg-clip-text text-transparent">IIT &amp; NIT Foundation</span> in Narapally, Hyderabad
            </h3>

            {/* Description Paragraph */}
            <p className="font-sans text-sm sm:text-[15px] lg:text-base text-slate-600 leading-relaxed font-normal">
              Where dreams take flight and possibilities are limitless. Step into a world of
              boundless learning at JRS International School, the premier CBSE International School in
              Narapally, Hyderabad, where each day brings new discoveries and opportunities for growth,
              and the corridors echo with the whispers of tomorrow’s leaders. We nurture not just
              scholars but pioneers of the future. Experience a realm where innovation blends with
              timeless wisdom, setting the stage for a transformative learning journey.
            </p>

            {/* Two Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                type="button"
                className="btn-pointed group inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#DC2626] to-[#B91C1C] hover:from-[#16A34A] hover:to-[#15803D] text-white px-8 sm:px-9 py-3.5 sm:py-4 font-semibold text-sm sm:text-base transition-all duration-300 cursor-pointer"
              >
                <span>Learn More</span>
                <span className="text-lg leading-none transition-transform duration-200 group-hover:translate-x-1">→</span>
              </button>

              <button
                type="button"
                onClick={() => setIsVideoModalOpen(true)}
                className="btn-pointed group inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#0B0F17] to-[#1E293B] hover:from-[#16A34A] hover:to-[#15803D] text-white px-8 sm:px-9 py-3.5 sm:py-4 font-semibold text-sm sm:text-base transition-all duration-300 cursor-pointer border border-slate-700/50"
              >
                <span className="w-5 h-5 rounded-full bg-white text-[#DC2626] group-hover:text-[#16A34A] flex items-center justify-center text-[10px] font-bold pl-0.5 transition-colors">
                  ▶
                </span>
                <span>Virtual Tour</span>
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Campus Video Tour Modal using shadcn Dialog */}
      <Dialog open={isVideoModalOpen} onOpenChange={setIsVideoModalOpen}>
        <DialogContent className="max-w-4xl bg-[#0B0F17] border-white/20 text-white p-0">
          <DialogHeader className="p-4 sm:p-5 border-b border-white/10 flex-row items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-[#DC2626] animate-pulse" />
              <DialogTitle className="text-white text-base sm:text-lg">
                JRS International School Campus Tour
              </DialogTitle>
            </div>
          </DialogHeader>

          <div className="aspect-video w-full bg-black">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/LBvByB-S0O4?autoplay=1&rel=0&modestbranding=1"
              title="JRS International School Campus Tour"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
