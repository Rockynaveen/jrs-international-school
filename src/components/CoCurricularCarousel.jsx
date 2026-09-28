import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const activitiesData = [
  {
    id: 'art',
    title: 'Art & Painting',
    description: 'Nurturing creativity and self-expression through art.',
    badgeColor: 'bg-[#F59E0B]',
    haloBg: 'bg-[#FEF9C3]/80 border-[#FDE047]/70 hover:border-[#F59E0B]',
    shadowColor: 'hover:shadow-[#F59E0B]/20',
    shapeClass: 'rounded-[48%_52%_50%_50%_/_52%_48%_54%_46%]',
    imgShape: 'rounded-full',
    image: 'https://images.unsplash.com/photo-1560421683-6856ea585c78?auto=format&fit=crop&w=600&q=80',
    icon: (
      <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c3.31 0 6-2.69 6-6 0-4.96-4.49-9-10-9zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 8 6.5 8s1.5.67 1.5 1.5S7.33 11 6.5 11zm3-4c-.83 0-1.5-.67-1.5-1.5S8.67 4 9.5 4s1.5.67 1.5 1.5S10.33 7 9.5 7zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 4 14.5 4s1.5.67 1.5 1.5S15.33 7 14.5 7zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 8 17.5 8s1.5.67 1.5 1.5S18.33 11 17.5 11z" />
      </svg>
    ),
  },
  {
    id: 'music',
    title: 'Music',
    description: 'Building rhythm, listening skills and a love for music.',
    badgeColor: 'bg-[#EC4899]',
    haloBg: 'bg-[#FCE7F3]/80 border-[#F472B6]/50 hover:border-[#EC4899]',
    shadowColor: 'hover:shadow-[#EC4899]/20',
    shapeClass: 'rounded-[52%_48%_54%_46%_/_48%_52%_48%_52%]',
    imgShape: 'rounded-full',
    image: 'https://images.unsplash.com/photo-1612225330812-01a9c6b355ec?auto=format&fit=crop&w=600&q=80',
    icon: (
      <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
      </svg>
    ),
  },
  {
    id: 'dance',
    title: 'Dance',
    description: 'Exploring classical and modern dance forms.',
    badgeColor: 'bg-[#A855F7]',
    haloBg: 'bg-[#F3E8FF]/80 border-[#C084FC]/50 hover:border-[#A855F7]',
    shadowColor: 'hover:shadow-[#A855F7]/20',
    shapeClass: 'rounded-[50%_50%_46%_54%_/_52%_48%_52%_48%]',
    imgShape: 'rounded-full',
    image: 'https://images.unsplash.com/photo-1547153760-18fc86324498?auto=format&fit=crop&w=600&q=80',
    icon: (
      <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
        <circle cx="15" cy="4" r="2" />
        <path d="M16.5 8.5c-.3-.3-.7-.5-1.1-.5h-2.8c-.4 0-.8.2-1.1.5L9 11l1.4 1.4 1.6-1.6V16l-3.2 2.4 1.2 1.6 4-3c.6-.4 1-.1.1-1.8v-3.7l1.3 1.3 1.8-1.8-2.1-2.5z" />
        <path d="M8 8c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1zm11 8c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1z" opacity="0.6"/>
      </svg>
    ),
  },
  {
    id: 'theatre',
    title: 'Theatre & Dramatics',
    description: 'Building confidence through performance and expression.',
    badgeColor: 'bg-[#14B8A6]',
    haloBg: 'bg-[#CCFBF1]/80 border-[#5EEAD4]/50 hover:border-[#14B8A6]',
    shadowColor: 'hover:shadow-[#14B8A6]/20',
    shapeClass: 'rounded-[46%_54%_50%_50%_/_50%_50%_54%_46%]',
    imgShape: 'rounded-full',
    image: 'https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&w=600&q=80',
    icon: (
      <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.5 2 2 6.5 2 12c0 3.6 2 6.8 5 8.5v-1.7C4.6 17.3 3.6 14.8 3.6 12 3.6 7.4 7.4 3.6 12 3.6s8.4 3.8 8.4 8.4c0 2.8-1 5.3-3.4 6.8v1.7c3-1.7 5-4.9 5-8.5 0-5.5-4.5-10-10-10zm-3 8c.8 0 1.5.7 1.5 1.5S9.8 13 9 13s-1.5-.7-1.5-1.5S8.2 10 9 10zm6 0c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5-1.5-.7-1.5-1.5.7-1.5 1.5-1.5zm-3 5c2.2 0 4 1.3 4.5 3h-9c.5-1.7 2.3-3 4.5-3z" />
      </svg>
    ),
  },
  {
    id: 'yoga',
    title: 'Yoga',
    description: 'Developing focus, well-being and mindfulness.',
    badgeColor: 'bg-[#0EA5E9]',
    haloBg: 'bg-[#E0F2FE]/80 border-[#7DD3FC]/50 hover:border-[#0EA5E9]',
    shadowColor: 'hover:shadow-[#0EA5E9]/20',
    shapeClass: 'rounded-[50%_50%_48%_52%_/_48%_52%_50%_50%]',
    imgShape: 'rounded-full',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=600&q=80',
    icon: (
      <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
        <circle cx="12" cy="4" r="2" />
        <path d="M12 7c-1.1 0-2 .9-2 2v2.5l-2.2 1.3c-.5.3-.8.8-.8 1.4v1.8h2v-1.3l2-1.2v4.5l-3.3 2.5 1.2 1.6 3.1-2.3 3.1 2.3 1.2-1.6-3.3-2.5V11.5l2 1.2v1.3h2v-1.8c0-.6-.3-1.1-.8-1.4L14 9.5V9c0-1.1-.9-2-2-2z" />
      </svg>
    ),
  },
  {
    id: 'skating',
    title: 'Skating',
    description: 'Building balance, discipline and physical fitness.',
    badgeColor: 'bg-[#F97316]',
    haloBg: 'bg-[#FFEDD5]/80 border-[#FDBA74]/50 hover:border-[#F97316]',
    shadowColor: 'hover:shadow-[#F97316]/20',
    shapeClass: 'rounded-[52%_48%_46%_54%_/_48%_52%_52%_48%]',
    imgShape: 'rounded-full',
    image: 'https://images.unsplash.com/photo-1564982752979-3f7bc974d29a?auto=format&fit=crop&w=600&q=80',
    icon: (
      <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17 14c-.6 0-1.1.2-1.5.5L14 12V6c0-1.1-.9-2-2-2h-3v4h2v3l-4 3c-.6-.4-1.2-.6-1.9-.6-1.7 0-3 1.3-3 3s1.3 3 3 3c1.4 0 2.5-.9 2.9-2.2l3.4-2.6 1.4 1c.2 1.5 1.5 2.8 3.2 2.8 1.7 0 3-1.3 3-3s-1.3-3-3-3zm-12 4c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm12 0c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z" />
      </svg>
    ),
  },
  {
    id: 'sports',
    title: 'Games & Sports',
    description: 'Encouraging teamwork, sportsmanship and a healthy lifestyle.',
    badgeColor: 'bg-[#22C55E]',
    haloBg: 'bg-[#DCFCE7]/80 border-[#86EFAC]/50 hover:border-[#22C55E]',
    shadowColor: 'hover:shadow-[#22C55E]/20',
    shapeClass: 'rounded-[50%_50%_50%_50%]',
    imgShape: 'rounded-full',
    image: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=600&q=80',
    icon: (
      <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 3.1c1.8.3 3.4 1.2 4.6 2.4l-2 2.5-3.3-.5.7-4.4zm-2 0l.7 4.4-3.3.5-2-2.5c1.2-1.2 2.8-2.1 4.6-2.4zm-6.6 6.1c0-.4 0-.8.1-1.2l3.3.8.9 3.2-3.1 1.7c-.8-1.3-1.2-2.8-1.2-4.5zm2.8 6.4l2.5-1.4 2.8 1.8-.7 3.5c-1.8-.4-3.4-1.7-4.6-3.9zm9.4 3.9l-.7-3.5 2.8-1.8 2.5 1.4c-1.2 2.2-2.8 3.5-4.6 3.9zm3.5-6.4l-3.1-1.7.9-3.2 3.3-.8c.1.4.1.8.1 1.2 0 1.7-.4 3.2-1.2 4.5z" />
      </svg>
    ),
  },
  {
    id: 'science',
    title: 'Science Activities',
    description: 'Hands-on learning to spark curiosity and innovation.',
    badgeColor: 'bg-[#8B5CF6]',
    haloBg: 'bg-[#EDE9FE]/80 border-[#C4B5FD]/50 hover:border-[#8B5CF6]',
    shadowColor: 'hover:shadow-[#8B5CF6]/20',
    shapeClass: 'rounded-[48%_52%_52%_48%_/_52%_48%_48%_52%]',
    imgShape: 'rounded-full',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=600&q=80',
    icon: (
      <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.8 18.4L14 10.7V5h1c.6 0 1-.4 1-1s-.4-1-1-1H9c-.6 0-1 .4-1 1s.4 1 1 1h1v5.7L4.2 18.4c-.8 1.1-.1 2.6 1.3 2.6h13c1.4 0 2.1-1.5 1.3-2.6zM7.1 19l4.9-6.5V5h-.1v-.1h.2V5h-.1v-.1h.2V5h.1v7.5L16.9 19H7.1z" />
        <circle cx="10" cy="16" r="1" opacity="0.6"/>
        <circle cx="13" cy="14.5" r="1.2" opacity="0.6"/>
      </svg>
    ),
  },
];

export default function CoCurricularCarousel() {
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollStartLeft, setScrollStartLeft] = useState(0);

  const handleScroll = (direction) => {
    if (!scrollRef.current) return;
    const { clientWidth, scrollLeft, scrollWidth } = scrollRef.current;
    const maxScroll = scrollWidth - clientWidth;
    const scrollAmount = Math.max(220, clientWidth * 0.5);

    if (direction === 'left') {
      if (scrollLeft <= 10) {
        scrollRef.current.scrollTo({ left: maxScroll, behavior: 'smooth' });
      } else {
        scrollRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      }
    } else {
      if (scrollLeft >= maxScroll - 10) {
        scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  // Drag to scroll handlers for desktop and mobile
  const onMouseDown = (e) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollStartLeft(scrollRef.current.scrollLeft);
  };

  const onMouseMove = (e) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    scrollRef.current.scrollLeft = scrollStartLeft - walk;
  };

  const onMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  return (
    <section id="activities" className="py-16 sm:py-20 bg-gradient-to-b from-[#FFFDF9] via-[#FAF9F5] to-[#FFFFFF] relative overflow-hidden select-none">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 relative">
          {/* Eyebrow Label */}
          <div className="inline-flex flex-col items-center justify-center">
            <span className="text-xs sm:text-[13px] font-bold uppercase tracking-[0.25em] text-[#06335F] block">
              BEYOND THE CLASSROOM
            </span>
            {/* Golden Horizontal Accent Bar */}
            <div className="w-12 h-1 bg-[#F59E0B] rounded-full mt-2.5 mb-4" />
          </div>

          {/* Main Display Headline */}
          <div className="relative inline-flex items-center justify-center">
            <h2 className="font-display text-4xl sm:text-5xl lg:text-[56px] text-[#0A2540] font-bold tracking-tight leading-tight">
              Explore.{' '}
              <span className="text-[#E59819]">Create.</span>{' '}
              Grow.
            </h2>
          </div>

          {/* Subtitle Description */}
          <p className="mt-4 text-slate-600 text-sm sm:text-base lg:text-[17px] leading-relaxed max-w-2xl mx-auto px-4 font-sans">
            A wide range of co-curricular activities to help every child discover their interests,
            build confidence and develop life skills.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative group/carousel px-3 sm:px-6 lg:px-8">
          {/* Left Arrow Indicator Button */}
          <button
            onClick={() => handleScroll('left')}
            aria-label="Previous activities"
            className="absolute left-0 sm:left-1 lg:-left-2 top-[38%] -translate-y-1/2 z-20 p-3 sm:p-3.5 rounded-full bg-white/95 backdrop-blur-sm border border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.12)] flex items-center justify-center text-[#06335F] hover:bg-[#06335F] hover:text-white hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5 sm:w-5.5 sm:h-5.5 stroke-[2.4]" />
          </button>

          {/* Right Arrow Indicator Button */}
          <button
            onClick={() => handleScroll('right')}
            aria-label="Next activities"
            className="absolute right-0 sm:right-1 lg:-right-2 top-[38%] -translate-y-1/2 z-20 p-3 sm:p-3.5 rounded-full bg-white/95 backdrop-blur-sm border border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.12)] flex items-center justify-center text-[#06335F] hover:bg-[#06335F] hover:text-white hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer"
          >
            <ChevronRight className="w-5 h-5 sm:w-5.5 sm:h-5.5 stroke-[2.4]" />
          </button>

          {/* Scrollable Track */}
          <div
            ref={scrollRef}
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUpOrLeave}
            onMouseLeave={onMouseUpOrLeave}
            className={`flex items-start gap-4 sm:gap-5 lg:gap-6 overflow-x-auto scroll-smooth no-scrollbar py-6 px-3 sm:px-4 snap-x snap-mandatory ${
              isDragging ? 'cursor-grabbing select-none' : 'cursor-grab'
            }`}
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch',
            }}
          >
            {activitiesData.map((activity) => (
              <div
                key={activity.id}
                className="flex-shrink-0 w-[145px] sm:w-[155px] md:w-[165px] lg:w-[170px] xl:w-[175px] snap-start flex flex-col items-center text-center group cursor-pointer"
              >
                {/* Rounded Organic Card Frame */}
                <div
                  className={`relative w-full p-2.5 sm:p-3 border-2 transition-all duration-300 group-hover:-translate-y-2 group-hover:scale-105 group-hover:shadow-xl ${activity.shapeClass} ${activity.haloBg} ${activity.shadowColor} bg-white shadow-sm flex flex-col items-center justify-center`}
                >
                  {/* Floating Circular Badge on Top Left */}
                  <div
                    className={`absolute -top-3 -left-1.5 sm:-top-3.5 sm:-left-2 z-10 w-11 h-11 sm:w-12 sm:h-12 p-2.5 rounded-full ${activity.badgeColor} flex items-center justify-center shadow-lg border-2 border-white ring-2 ring-white/95 group-hover:scale-115 transition-transform duration-300`}
                  >
                    {activity.icon}
                  </div>

                  {/* Circular / Rounded Masked Image */}
                  <div className={`relative w-full aspect-square ${activity.imgShape} overflow-hidden bg-slate-100 shadow-inner`}>
                    <img
                      src={activity.image}
                      alt={activity.title}
                      loading="lazy"
                      className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                    {/* Soft gradient bottom overlay for depth */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent pointer-events-none" />
                  </div>
                </div>

                {/* Card Title (Serif) */}
                <h3 className="font-display font-bold text-sm sm:text-base text-[#0A2540] mt-3.5 mb-1 tracking-tight leading-snug group-hover:text-[#0B6DB7] transition-colors">
                  {activity.title}
                </h3>

                {/* Card Description */}
                <p className="text-[11px] sm:text-xs text-slate-500 font-sans leading-relaxed px-1">
                  {activity.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
