import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function WhyJRS() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const features = [
    {
      title: 'International Curriculum',
      icon: (
        <svg className="w-5 h-5 text-[#0B6DB7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      ),
    },
    {
      title: 'Expert Faculty',
      icon: (
        <svg className="w-5 h-5 text-[#0B6DB7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      ),
    },
    {
      title: 'Modern Infrastructure',
      icon: (
        <svg className="w-5 h-5 text-[#0B6DB7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
      ),
    },
    {
      title: 'Global Exposure',
      icon: (
        <svg className="w-5 h-5 text-[#0B6DB7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="2" x2="12" y2="22" />
          <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
          <line x1="4.93" y1="19.07" x2="19.07" y2="4.93" />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative w-full bg-[#f8fafc] py-16 sm:py-24 overflow-hidden border-t border-slate-100">
      <div className="max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* ================= LEFT COLUMN ================= */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-7">
            {/* Label */}
            <div className="font-modern text-xs font-bold uppercase tracking-[0.25em] text-[#0B6DB7]">
              WHY JRS?
            </div>

            {/* Headline matching screenshot */}
            <h2 className="font-modern text-4xl sm:text-5xl lg:text-[52px] font-extrabold text-[#072B4F] leading-[1.12] tracking-tight">
              More Than Education.
              <br />
              <span className="text-[#0B6DB7]">A World of Opportunities.</span>
            </h2>

            {/* Paragraph */}
            <p className="font-modern text-base sm:text-lg text-[#475569] leading-relaxed max-w-xl font-normal">
              We provide a dynamic learning environment where academic excellence,
              personal growth and global exposure come together to shape future leaders.
            </p>

            {/* CTA Link */}
            <div className="pt-2">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#072B4F] hover:text-[#0B6DB7] transition-colors group cursor-pointer"
              >
                <span>Discover Our Approach</span>
                <span className="transform group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </Link>
            </div>

            {/* 4 Feature Columns at Bottom */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-200/80">
              {features.map((feat, idx) => (
                <div key={idx} className="space-y-2.5">
                  <div className="w-10 h-10 rounded-xl bg-white shadow-xs border border-slate-200 flex items-center justify-center">
                    {feat.icon}
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#072B4F] leading-snug">
                    {feat.title}
                  </h4>
                </div>
              ))}
            </div>
          </div>

          {/* ================= RIGHT COLUMN: Image & Quote Card ================= */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-[560px] lg:max-w-none">
              
              {/* Campus Building Image Frame */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[16/11] bg-slate-100">
                <img
                  src="/hero-building.jpg"
                  alt="JRS International School Modern Campus Architecture"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />

                {/* Floating Watch Campus Tour Button on Image */}
                <button
                  type="button"
                  onClick={() => setIsVideoModalOpen(true)}
                  className="absolute bottom-5 right-5 bg-white/95 hover:bg-white text-[#072B4F] px-4 py-2.5 rounded-full text-xs font-bold tracking-wide shadow-lg flex items-center gap-2 transition-all duration-200 hover:scale-105 cursor-pointer z-20"
                >
                  <span className="w-6 h-6 rounded-full bg-[#072B4F] text-white flex items-center justify-center text-[10px] pl-0.5">
                    ▶
                  </span>
                  <span>Watch Campus Tour</span>
                </button>
              </div>

              {/* Overlapping Dark Navy Quote Card on Top Right (Exact match to screenshot) */}
              <div className="relative lg:absolute -top-6 lg:-top-8 lg:-right-6 bg-[#072B4F] text-white p-6 sm:p-7 rounded-2xl sm:rounded-3xl shadow-2xl max-w-sm border-2 border-white mt-4 lg:mt-0 z-20 space-y-3">
                <div className="w-6 h-1 bg-[#0B6DB7] rounded-full" />
                <p className="text-sm sm:text-base font-normal text-slate-100 leading-relaxed italic">
                  “Education is not preparation for life; education is life itself.”
                </p>
                <span className="text-xs font-semibold text-slate-400 block tracking-wide">
                  — JRS Philosophy
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Campus Video Tour Modal */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-4 relative shadow-2xl">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <h3 className="text-lg font-bold text-[#072B4F]">
                JRS International School Campus Tour
              </h3>
              <button
                onClick={() => setIsVideoModalOpen(false)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center font-bold"
              >
                ✕
              </button>
            </div>
            <div className="aspect-[16/9] rounded-2xl overflow-hidden bg-slate-900 relative">
              <img
                src="/hero-building.jpg"
                alt="JRS Campus Video"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white text-center p-6 space-y-3">
                <span className="w-16 h-16 rounded-full bg-white text-[#072B4F] flex items-center justify-center text-2xl shadow-xl pl-1">
                  ▶
                </span>
                <p className="text-sm font-semibold max-w-md">
                  Welcome to JRS International School, Narapally, Hyderabad. Contact us at +91 95426 64980 to book an in-person guided tour!
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
