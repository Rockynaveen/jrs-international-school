import React, { useEffect, useRef, useState } from 'react';

const activitiesData = [
  {
    id: 'art',
    tag: 'CREATIVITY & EXPRESSION',
    title: 'Art & Painting',
    description:
      'Nurturing creativity and self-expression through drawing, watercolours, sketch work, and studio canvas painting.',
    image: 'https://images.unsplash.com/photo-1560421683-6856ea585c78?auto=format&fit=crop&w=1200&q=80',
    link: '/student-life',
    accent: '#DC2626',
  },
  {
    id: 'music',
    tag: 'RHYTHM & SOUND',
    title: 'Music',
    description:
      'Building rhythm, listening skills and a lifelong love for Indian classical and contemporary music.',
    image: '/music-band-activity.jpg',
    link: '/student-life',
    accent: '#16A34A',
  },
  {
    id: 'dance',
    tag: 'PERFORMING ARTS',
    title: 'Dance',
    description:
      'Exploring classical, folk and modern dance forms to cultivate poise, rhythm and graceful artistic confidence.',
    image: 'https://images.unsplash.com/photo-1547153760-18fc86324498?auto=format&fit=crop&w=1200&q=80',
    link: '/student-life',
    accent: '#DC2626',
  },
  {
    id: 'theatre',
    tag: 'DRAMATICS & STAGE',
    title: 'Theatre & Dramatics',
    description:
      'Building confidence through performance, voice modulation, creative improvisation and dramatic expression.',
    image: 'https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&w=1200&q=80',
    link: '/student-life',
    accent: '#16A34A',
  },
  {
    id: 'yoga',
    tag: 'WELLNESS & MINDFULNESS',
    title: 'Yoga',
    description:
      'Developing focus, inner well-being, healthy posture, breath awareness and mental calmness.',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80',
    link: '/student-life',
    accent: '#DC2626',
  },
  {
    id: 'skating',
    tag: 'AGILITY & FITNESS',
    title: 'Skating',
    description:
      'Building balance, discipline, sharp coordination and physical fitness on our dedicated campus skating rink.',
    image: 'https://images.unsplash.com/photo-1564982752979-3f7bc974d29a?auto=format&fit=crop&w=1200&q=80',
    link: '/student-life',
    accent: '#16A34A',
  },
  {
    id: 'sports',
    tag: 'ATHLETICS & TEAMWORK',
    title: 'Games & Sports',
    description:
      'Encouraging teamwork, sportsmanship, strategic thinking and a healthy active lifestyle across multiple sports.',
    image: '/games-and-sports-track.jpg',
    link: '/student-life',
    accent: '#DC2626',
  },
  {
    id: 'science',
    tag: 'INQUIRY & INNOVATION',
    title: 'Science Activities',
    description:
      'Hands-on experimental learning and robotics to spark scientific curiosity, analytical reasoning and innovation.',
    image: '/science-lab-activity.jpg',
    link: '/academics',
    accent: '#16A34A',
  },
];

// 4-petal geometric watermark motif matching Anurag's design
function WatermarkPattern({ className = '' }) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={`pointer-events-none select-none text-white/10 ${className}`}
      fill="currentColor"
      aria-hidden="true"
    >
      <g opacity="0.14">
        {/* Main 4-point rounded star / petals */}
        <path d="M100 15 C75 55 55 75 15 100 C55 125 75 145 100 185 C125 145 145 125 185 100 C145 75 125 55 100 15 Z" />
        {/* Four circular petal lobes */}
        <circle cx="100" cy="58" r="32" />
        <circle cx="100" cy="142" r="32" />
        <circle cx="58" cy="100" r="32" />
        <circle cx="142" cy="100" r="32" />
        {/* Inner geometric core */}
        <circle cx="100" cy="100" r="18" fill="#182032" />
        <circle cx="100" cy="100" r="10" fill="currentColor" opacity="0.8" />
      </g>
    </svg>
  );
}

export default function CoCurricularCarousel() {
  const cardRefs = useRef([]);
  const [activeCovered, setActiveCovered] = useState({});

  // Dynamic scroll listener that detects when a card is being overlapped by the next card
  useEffect(() => {
    let ticking = false;

    const checkOverlap = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const coveredMap = {};
          activitiesData.forEach((_, i) => {
            if (i === activitiesData.length - 1) return;
            const nextEl = cardRefs.current[i + 1];
            if (!nextEl) return;

            const rect = nextEl.getBoundingClientRect();
            const currentStickyTop = 90 + i * 16;

            // When next card approaches within 250px of current card's top
            const distance = rect.top - currentStickyTop;
            if (distance <= 180) {
              coveredMap[i] = true;
            } else {
              coveredMap[i] = false;
            }
          });

          setActiveCovered(coveredMap);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', checkOverlap, { passive: true });
    window.addEventListener('resize', checkOverlap, { passive: true });
    checkOverlap();

    return () => {
      window.removeEventListener('scroll', checkOverlap);
      window.removeEventListener('resize', checkOverlap);
    };
  }, []);

  return (
    <section
      id="activities"
      className="py-12 bg-white relative border-b border-slate-200"
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ================= SECTION HEADER ================= */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 relative">
          {/* Eyebrow Label */}
          <div className="inline-flex flex-col items-center justify-center">
            <span className="text-xs sm:text-[13px] font-bold uppercase tracking-[0.25em] text-[#DC2626] block">
              BEYOND THE CLASSROOM
            </span>
            {/* Red to Green Horizontal Accent Bar */}
            <div className="w-12 h-1 bg-gradient-to-r from-[#DC2626] to-[#16A34A] rounded-full mt-2 mb-3.5" />
          </div>

          {/* Main Display Headline */}
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-[40px] text-[#0B0F17] leading-tight tracking-tight">
            Explore.{' '}
            <span className="bg-gradient-to-r from-[#16A34A] to-[#22C55E] bg-clip-text text-transparent">Create.</span>{' '}
            Grow.
          </h2>
        </div>

        {/* ================= ON-SCROLL CARD STACKING CONTAINER ================= */}
        <div className="relative max-w-[1080px] mx-auto pb-32">
          {activitiesData.map((activity, index) => {
            const isLast = index === activitiesData.length - 1;
            const isCovered = !!activeCovered[index];
            // Sticky top position: each card pins with a 16px offset to form a physical card deck
            const topOffset = `calc(90px + ${index * 16}px)`;
            // 45vh scroll runway between cards ensures a slow, progressive overlap
            const marginBottom = isLast ? '0px' : '45vh';

            return (
              <div
                key={activity.id}
                ref={(el) => (cardRefs.current[index] = el)}
                className="sticky will-change-transform"
                style={{
                  top: topOffset,
                  marginBottom: marginBottom,
                  zIndex: index + 10,
                }}
              >
                {/* 
                  Card Box:
                  - Top shadow (shadow-[0_-16px_36px_-8px_...]) creates real 3D shadow as below card overlaps above card
                  - Smooth CSS scale and brightness transitions when covered by the next card
                */}
                <div
                  className={`w-full bg-[#182032] rounded-2xl sm:rounded-3xl lg:rounded-[32px] overflow-hidden border border-slate-700/50 grid grid-cols-1 md:grid-cols-12 items-stretch transition-all duration-500 ease-out ${
                    isCovered ? 'scale-[0.96] brightness-90 -translate-y-1' : 'scale-100 brightness-100 translate-y-0'
                  }`}
                  style={{
                    transformOrigin: 'top center',
                  }}
                >
                  {/* LEFT: Activity Photography */}
                  <div className="md:col-span-6 relative h-[240px] sm:h-[300px] md:h-[400px] lg:h-[440px] overflow-hidden bg-slate-900">
                    <img
                      src={activity.image}
                      alt={activity.title}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent md:hidden" />
                  </div>

                  {/* RIGHT: Editorial Content with Watermark & Pill Button */}
                  <div className="md:col-span-6 relative p-6 sm:p-8 lg:p-10 flex flex-col justify-center bg-[#182032] text-white overflow-hidden space-y-4 sm:space-y-5">
                    {/* Corner Decorative Watermark Pattern */}
                    <WatermarkPattern className="absolute -top-10 -right-10 w-44 h-44 text-white opacity-80" />
                    <WatermarkPattern className="absolute -bottom-10 -right-10 w-40 h-40 text-white opacity-80" />

                    {/* Content */}
                    <div className="relative z-10 space-y-2.5 sm:space-y-3">
                      {/* Category Label */}
                      <span className="inline-block text-xs sm:text-sm font-bold tracking-[0.22em] text-[#DC2626] uppercase">
                        {activity.tag}
                      </span>

                      {/* Main Title */}
                      <h3 className="font-display text-2xl sm:text-3xl lg:text-[32px] font-bold text-white tracking-tight leading-tight">
                        {activity.title}
                      </h3>

                      {/* Paragraph Copy */}
                      <p className="font-sans text-sm sm:text-base lg:text-[16px] text-slate-200 leading-relaxed font-normal max-w-lg">
                        {activity.description}
                      </p>
                    </div>

                    {/* Explore More Pill Button (Demo / Dummy - Stays on Index Page) */}
                    <div className="relative z-10 pt-1 sm:pt-2">
                      <button
                        type="button"
                        onClick={(e) => e.preventDefault()}
                        className="inline-flex items-center justify-center px-8 sm:px-9 py-3 sm:py-3.5 rounded-full bg-gradient-to-r from-white to-slate-100 hover:from-[#16A34A] hover:to-[#15803D] text-[#0B0F17] hover:text-white border border-white/60 hover:border-transparent font-semibold text-sm sm:text-base transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
                      >
                        Explore More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
