import React from 'react';

const statsData = [
  {
    id: 'stat-1',
    number: '#3630478',
    label: 'CBSE Affiliation',
    description: 'Central Board of Secondary Education with NCERT syllabus.',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    badgeBg: 'bg-[#DC2626]',
    ringColor: 'ring-red-400/40',
  },
  {
    id: 'stat-2',
    number: '2021',
    label: 'Committed Since',
    description: 'Dedicated educators shaping brighter futures in Hyderabad.',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
    badgeBg: 'bg-[#16A34A]',
    ringColor: 'ring-emerald-400/40',
  },
  {
    id: 'stat-3',
    number: 'IIT / NIT',
    label: 'Foundation Program',
    description: 'Advanced STEM and competitive exam groundwork.',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" />
        <path d="M6 6h10" />
        <path d="M6 10h10" />
      </svg>
    ),
    badgeBg: 'bg-[#DC2626]',
    ringColor: 'ring-red-400/40',
  },
  {
    id: 'stat-4',
    number: '100%',
    label: 'Pollution-Free Campus',
    description: 'Expansive green infrastructure meeting global standards.',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="6" />
        <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
      </svg>
    ),
    badgeBg: 'bg-[#16A34A]',
    ringColor: 'ring-emerald-400/40',
  },
];

export default function Stats() {
  return (
    <section className="relative overflow-hidden py-12 bg-[#0B0F17] text-white">
      
      {/* ─────────────────────────────────────────────────────────────
          WHITE BUILDING CAMPUS BACKGROUND IMAGE & GRADIENT OVERLAY
      ───────────────────────────────────────────────────────────── */}
      <div className="absolute inset-0 z-0">
        <img
          src="/contact-school-building.jpg"
          alt="JRS International School White Building Campus"
          className="w-full h-full object-cover object-center"
        />
        {/* Cinematic dark black transparent gradient for crystal-clear readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#05070B]/92 via-[#0B0F17]/80 to-[#0A101D]/70" />
      </div>

      {/* ─────────────────────────────────────────────────────────────
          MAIN CONTENT CONTAINER
      ───────────────────────────────────────────────────────────── */}
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column (Hero Content & Call-to-Action) */}
          <div className="lg:col-span-4 flex flex-col justify-center pr-0 lg:pr-4">
            
            {/* Tag: OUR COMMUNITY ─── */}
            <div className="flex items-center gap-3 mb-3.5">
              <span className="text-xs font-semibold tracking-[0.25em] uppercase text-white/90">
                OUR COMMUNITY
              </span>
              <span className="w-12 h-[2px] bg-gradient-to-r from-[#DC2626] to-[#16A34A]" />
            </div>

            {/* Headline */}
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-[42px] text-white leading-[1.18] tracking-tight mb-6">
              Built on People, <br />
              <span className="font-bold bg-gradient-to-r from-[#16A34A] to-[#4ADE80] bg-clip-text text-transparent">
                Driven by Possibilities
              </span>
            </h2>

            {/* Discover Our Community Action Button */}
            <div>
              <a
                href="#about"
                className="btn-pointed inline-flex items-center justify-center gap-2.5 px-8 py-3 border border-white/20 text-white bg-gradient-to-r from-black/60 to-black/30 hover:from-[#16A34A] hover:to-[#15803D] hover:border-transparent text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer group"
              >
                <span>Discover Our Community</span>
                <span className="text-base group-hover:translate-x-1 transition-transform duration-200">→</span>
              </a>
            </div>
          </div>

          {/* Right Column: 4 Stat Pillars Separated by Subtle Vertical Dividers */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-y-8 sm:gap-y-6">
              {statsData.map((stat, idx) => (
                <div
                  key={stat.id}
                  className={`flex flex-col items-center text-center px-2 sm:px-3 lg:px-4 group ${
                    idx !== 0 ? 'lg:border-l lg:border-white/15' : ''
                  }`}
                >
                  {/* Round Icon Badge with Colorful Glowing Ring */}
                  <div className="relative mb-3 flex items-center justify-center">
                    <div
                      className={`w-12 h-12 rounded-full ${stat.badgeBg} text-white flex items-center justify-center shadow-lg ring-4 ${stat.ringColor} transition-all duration-300 group-hover:scale-110 group-hover:ring-8`}
                    >
                      {stat.icon}
                    </div>
                  </div>

                  {/* Big Bold Stat Value */}
                  <div className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight leading-tight group-hover:text-[#DC2626] transition-colors">
                    {stat.number}
                  </div>

                  {/* Stat Label */}
                  <div className="text-xs sm:text-sm font-semibold text-slate-200 mt-1.5 leading-snug">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

      {/* ─────────────────────────────────────────────────────────────
          BOTTOM WAVE CUTOUT TO SEAMLESSLY BLEND INTO NEXT SECTION
      ───────────────────────────────────────────────────────────── */}
      <div className="absolute -bottom-1 left-0 right-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
        <svg
          className="relative block w-full h-10 sm:h-14 lg:h-18 text-white"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          {/* Red ribbon wave */}
          <path
            d="M0,0 C150,85 400,95 600,35 C800,-15 1000,75 1200,20 L1200,120 L0,120 Z"
            fill="#DC2626"
            opacity="0.3"
          />
          {/* Green ribbon wave */}
          <path
            d="M0,15 C200,95 450,75 650,40 C850,10 1050,85 1200,35 L1200,120 L0,120 Z"
            fill="#16A34A"
            opacity="0.25"
          />
          {/* Solid fill matching the next section's background (#FFFFFF) */}
          <path
            d="M0,35 C180,105 420,90 620,50 C820,15 1020,80 1200,45 L1200,120 L0,120 Z"
            fill="#FFFFFF"
          />
        </svg>
      </div>

    </section>
  );
}
