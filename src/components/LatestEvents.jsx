import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { images } from '../data/siteData';

const eventsData = [
  {
    id: '01',
    number: '01',
    title: 'Annual Sports Meet',
    category: 'Athletics & Games',
    description:
      'A spirited athletic meet with march pasts, sprint races, relays, and championship trophies.',
    tags: ['Athletics', 'Sports'],
    image: '/annual-sports-meet.jpeg',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="5" r="3" />
        <path d="m19 21-4.5-6L12 18l-3-4.5L5 21" />
        <path d="M7 11.5 12 7l5 4.5" />
      </svg>
    ),
    badgeColor: 'bg-red-50 text-[#DC2626] border border-red-100',
    numberColor: 'text-[#DC2626]',
  },
  {
    id: '02',
    number: '02',
    title: 'Science & STEM Expo',
    category: 'Robotics & Innovation',
    description:
      'Students showcase working robotics models, renewable energy projects, and science experiments.',
    tags: ['Robotics', 'STEM'],
    image: images.stemLearning,
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 2v7.31L4.15 19.5a2 2 0 0 0 1.7 3h12.3a2 2 0 0 0 1.7-3L14 9.31V2" />
        <path d="M8.5 2h7" />
        <path d="M14 9.3h-4" />
      </svg>
    ),
    badgeColor: 'bg-emerald-50 text-[#16A34A] border border-emerald-100',
    numberColor: 'text-[#16A34A]',
  },
  {
    id: '03',
    number: '03',
    title: 'Co-Curricular Fest',
    category: 'Dance, Music & Drama',
    description:
      'Celebration of performing arts featuring student bands, classical dances, and theatrical skits.',
    tags: ['Music', 'Dance', 'Drama'],
    image: '/cocurricular-fest.jpg',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 12a4 4 0 0 0 8 0" />
        <path d="M9 9h.01" />
        <path d="M15 9h.01" />
      </svg>
    ),
    badgeColor: 'bg-red-50 text-[#DC2626] border border-red-100',
    numberColor: 'text-[#DC2626]',
  },
  {
    id: '04',
    number: '04',
    title: 'Art Exhibition',
    category: 'Visual Arts & Painting',
    description:
      'Nurturing visual creativity through canvas painting, clay pottery, sketches, and handicrafts.',
    tags: ['Arts', 'Painting'],
    image: images.artPainting,
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
        <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
        <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
        <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
      </svg>
    ),
    badgeColor: 'bg-emerald-50 text-[#16A34A] border border-emerald-100',
    numberColor: 'text-[#16A34A]',
  },
  {
    id: '05',
    number: '05',
    title: 'Food Carnival',
    category: 'Community & Culture',
    description:
      'A fun weekend festival where students set up culinary stalls and family food kiosks.',
    tags: ['Carnival', 'Community'],
    image: images.canteenDining,
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 2v4M8 2v4M3 10h18M5 10v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V10" />
      </svg>
    ),
    badgeColor: 'bg-red-50 text-[#DC2626] border border-red-100',
    numberColor: 'text-[#DC2626]',
  },
  {
    id: '06',
    number: '06',
    title: 'Achievers Day',
    category: 'Honors & Awards',
    description:
      'Recognizing academic toppers, 100% attendance, and olympiad winners with merit awards.',
    tags: ['Awards', 'Honors'],
    image: images.classroomModern,
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
    badgeColor: 'bg-emerald-50 text-[#16A34A] border border-emerald-100',
    numberColor: 'text-[#16A34A]',
  },
];

export default function LatestEvents() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeEvent = eventsData[activeIndex];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? eventsData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === eventsData.length - 1 ? 0 : prev + 1));
  };

  // 4 thumbnails under the main card
  const thumbnailItems = eventsData.slice(0, 4);

  return (
    <section id="events" className="py-12 bg-white relative overflow-hidden border-b border-slate-200">
      
      {/* Decorative Subtle Curve Background Glow */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-amber-100/40 via-red-50/30 to-transparent rounded-full blur-3xl pointer-events-none -z-0"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-emerald-50/40 to-transparent rounded-full blur-3xl pointer-events-none -z-0"
        aria-hidden="true"
      />

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        
        {/* ================= SECTION HEADER ================= */}
        <div className="max-w-3xl mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50/80 text-[#DC2626] text-xs font-semibold tracking-[0.2em] uppercase border border-red-100 mb-3.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]" />
            LATEST EVENTS &amp; HAPPENINGS
          </div>

          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-[42px] text-[#0B0F17] leading-[1.18] tracking-tight">
            Latest Events &amp; <span className="bg-gradient-to-r from-[#DC2626] to-[#16A34A] bg-clip-text text-transparent">Celebrations</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-sans mt-3 max-w-xl">
            From annual sports meets and science fests to cultural celebrations, discover our lively calendar.
          </p>
        </div>

        {/* ================= 2-COLUMN SPLIT SHOWCASE ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* ================= LEFT COLUMN: Interactive Events List ================= */}
          <div className="lg:col-span-6 space-y-2 sm:space-y-2.5">
            {eventsData.map((event, index) => {
              const isActive = index === activeIndex;

              return (
                <div
                  key={event.id}
                  onClick={() => setActiveIndex(index)}
                  className={`w-full flex items-center justify-between p-3.5 sm:p-4 rounded-2xl cursor-pointer transition-all duration-300 border ${
                    isActive
                      ? (index % 2 === 0 ? 'bg-white border-red-200 ring-2 ring-red-100' : 'bg-white border-emerald-200 ring-2 ring-emerald-100')
                      : 'bg-transparent border-transparent hover:bg-white/80 hover:border-slate-200/60'
                  }`}
                >
                  <div className="flex items-center gap-3.5 sm:gap-4 min-w-0">
                    {/* Icon Badge */}
                    <div
                      className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center shrink-0 shadow-sm transition-transform duration-300 ${
                        event.badgeColor
                      } ${isActive ? 'scale-110' : ''}`}
                    >
                      {event.icon}
                    </div>

                    {/* Number */}
                    <span className={`font-display text-base sm:text-lg font-bold shrink-0 ${event.numberColor}`}>
                      {event.number}
                    </span>

                    {/* Text info */}
                    <div className="min-w-0 text-left">
                      <h3
                        className={`font-display text-sm sm:text-base lg:text-[17px] font-bold truncate leading-snug transition-colors ${
                          isActive ? 'text-[#0B0F17]' : 'text-slate-800'
                        }`}
                      >
                        {event.title}
                      </h3>
                      <p className="text-xs sm:text-[13px] text-slate-500 font-sans truncate">
                        {event.category}
                      </p>
                    </div>
                  </div>

                  {/* Right Arrow Button */}
                  <div className="shrink-0 ml-3">
                    <div
                      className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center transition-all duration-300 border ${
                        isActive
                          ? (index % 2 === 0 ? 'bg-[#DC2626] text-white border-[#DC2626]' : 'bg-[#16A34A] text-white border-[#16A34A]')
                          : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <ArrowRight className="w-4 h-4 stroke-[2.2]" />
                    </div>
                  </div>
                </div>
              );
            })}

            {/* View More Button at the end of the list */}
            <div className="pt-3 sm:pt-4">
              <Link
                to="/events"
                className="btn-pointed inline-flex items-center justify-center gap-2.5 px-9 py-3.5 bg-gradient-to-r from-[#DC2626] to-[#B91C1C] hover:from-[#16A34A] hover:to-[#15803D] text-white font-semibold text-sm sm:text-base transition-all duration-300 cursor-pointer group"
              >
                <span>View More</span>
                <ArrowRight className="w-4 h-4 stroke-[2.2] group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* ================= RIGHT COLUMN: Featured Card + Bottom Thumbnails ================= */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-5">
            
            {/* Top Main Featured Showcase Card */}
            <div className="relative w-full h-[380px] sm:h-[460px] lg:h-[500px] rounded-3xl lg:rounded-[36px] overflow-hidden shadow-2xl bg-slate-900 border border-slate-200/50 group">
              {/* Event Image */}
              <img
                key={activeEvent.id}
                src={activeEvent.image}
                alt={activeEvent.title}
                className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105"
              />

              {/* Dark Gradient Overlay for Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent" />

              {/* Bottom Content Overlay */}
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 lg:p-10 flex flex-col justify-end text-white z-10">
                {/* Number */}
                <span className="font-display text-sm sm:text-base font-bold text-amber-400 block mb-1">
                  {activeEvent.number}
                </span>

                {/* Title */}
                <h3 className="font-display text-xl sm:text-2xl lg:text-[26px] font-bold text-white leading-tight tracking-tight mb-1.5 sm:mb-2">
                  {activeEvent.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm lg:text-[15px] text-slate-200 font-sans font-light leading-relaxed max-w-xl mb-4 sm:mb-5 line-clamp-3 sm:line-clamp-2">
                  {activeEvent.description}
                </p>

                {/* Tags & Controls Row */}
                <div className="flex items-center justify-between gap-4 pt-1">
                  {/* Tags */}
                  <div className="flex flex-wrap items-center gap-2">
                    {activeEvent.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3.5 py-1 rounded-full text-xs font-medium text-white border border-white/40 bg-white/10 backdrop-blur-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Navigation Arrows */}
                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      type="button"
                      onClick={handlePrev}
                      aria-label="Previous event"
                      className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/50 hover:bg-[#DC2626] border border-white/30 text-white flex items-center justify-center transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95"
                    >
                      <ChevronLeft className="w-5 h-5 stroke-[2.2]" />
                    </button>
                    <button
                      type="button"
                      onClick={handleNext}
                      aria-label="Next event"
                      className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#16A34A] hover:bg-[#15803D] text-white flex items-center justify-center transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95"
                    >
                      <ChevronRight className="w-5 h-5 stroke-[2.2]" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom 4 Thumbnails Row */}
            <div className="grid grid-cols-4 gap-3 sm:gap-4">
              {thumbnailItems.map((item, idx) => {
                const isCurrent = idx === activeIndex;

                return (
                  <div
                    key={item.id}
                    onClick={() => setActiveIndex(idx)}
                    className={`relative rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer transition-all duration-300 border-2 ${
                      isCurrent
                        ? 'border-[#DC2626] ring-2 ring-[#DC2626]/40 shadow-md scale-[1.02]'
                        : 'border-white/80 opacity-80 hover:opacity-100 hover:scale-105 shadow-sm'
                    }`}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/15 hover:bg-transparent transition-colors" />
                  </div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
