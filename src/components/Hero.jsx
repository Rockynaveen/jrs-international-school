import React from 'react';

export default function Hero() {
  return (
    <section
      id="home-1"
      className="relative w-full h-[100dvh] min-h-[640px] max-h-[1080px] bg-[#f8fafc] overflow-hidden flex items-end"
    >
      {/* Background Campus Students Image (Pure, No Overlays) */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero image.png"
          alt="JRS International School Students on Campus"
          className="w-full h-full object-cover object-[center_right] xl:object-right filter contrast-[1.04] saturate-[1.08] brightness-[1.01]"
        />
      </div>

      {/* Bottom Action Buttons Container (Positioned at the bottom of hero section) */}
      <div className="relative z-10 max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12 w-full pb-10 sm:pb-14 flex items-center justify-start">
        <div className="flex flex-wrap items-center gap-4">
          <a
            href="#about"
            className="group inline-flex items-center gap-2.5 bg-gradient-to-r from-[#072B4F] to-[#0A3D70] hover:from-[#0066B2] hover:to-[#0284C7] text-white px-8 py-4 rounded-full text-[15px] font-bold transition-all duration-300 shadow-[0_12px_28px_-6px_rgba(7,43,79,0.4)] hover:shadow-[0_16px_36px_-6px_rgba(2,132,199,0.5)] hover:-translate-y-0.5 cursor-pointer"
          >
            <span>Explore Our World</span>
            <span className="text-base font-normal leading-none transition-transform duration-200 group-hover:translate-x-1">›</span>
          </a>

          <a
            href="#admissions"
            className="group inline-flex items-center gap-2.5 bg-white/95 hover:bg-white text-[#072B4F] hover:text-[#0066B2] border-2 border-slate-300 hover:border-[#0066B2] px-8 py-4 rounded-full text-[15px] font-bold transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 cursor-pointer backdrop-blur-sm"
          >
            <span>Admissions</span>
            <span className="text-base font-normal leading-none transition-transform duration-200 group-hover:translate-x-1">›</span>
          </a>
        </div>
      </div>
    </section>
  );
}
