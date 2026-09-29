import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Play, X } from 'lucide-react';

const slidesData = [
  {
    id: 'campus',
    eyebrow: 'JRS INTERNATIONAL SCHOOL',
    headline: ['Where Curiosity', 'Becomes Confidence'],
    supporting: 'A learning environment designed to help every child discover, question and grow.',
    primaryCta: { label: 'Explore JRS →', href: '#about' },
    secondaryCta: { label: 'Watch Our Story', isVideo: true },
    image: '/hero image.png',
    imageAlt: 'JRS International School full student assembly and campus building on the sports field',
    desktopPosition: 'object-[center_35%]',
    mobilePosition: 'object-[65%_35%]',
  },
  {
    id: 'students',
    eyebrow: 'LEARN • EXPLORE • GROW',
    headline: ['Learning That', 'Inspires Possibility'],
    supporting: 'Encouraging students to think independently, collaborate confidently and grow with purpose.',
    primaryCta: { label: 'Discover Student Life →', href: '/student-life' },
    secondaryCta: null,
    image: '/heroslider.jpeg',
    imageAlt: 'JRS International School students in uniform blazers engaged in library study and reading',
    desktopPosition: 'object-center lg:object-[65%_center]',
    mobilePosition: 'object-[70%_center]',
  },
  {
    id: 'beyond-classroom',
    eyebrow: 'MORE THAN EDUCATION',
    headline: ['A Journey Beyond', 'the Classroom'],
    supporting: 'From academics and sports to creativity and discovery, every experience helps students grow.',
    primaryCta: { label: 'Explore Our Approach →', href: '#academics' },
    secondaryCta: null,
    image: '/heroslider3.jpeg',
    imageAlt: 'JRS International School students smiling with thumbs up on campus grounds',
    desktopPosition: 'object-[center_55%] md:object-[65%_50%] lg:object-[70%_48%]',
    mobilePosition: 'object-[center_48%]',
  },
];

const AUTOPLAY_DURATION = 6500; // 6.5 seconds

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  const startTimeRef = useRef(0);
  const elapsedBeforePauseRef = useRef(0);
  const sectionRef = useRef(null);

  const goToSlide = useCallback((index) => {
    setCurrentSlide(index);
    setProgress(0);
    elapsedBeforePauseRef.current = 0;
    startTimeRef.current = Date.now();
  }, []);

  const handleNext = useCallback(() => {
    goToSlide((currentSlide + 1) % slidesData.length);
  }, [currentSlide, goToSlide]);

  const handlePrev = useCallback(() => {
    goToSlide((currentSlide - 1 + slidesData.length) % slidesData.length);
  }, [currentSlide, goToSlide]);

  // Autoplay timer with pause-on-hover & smooth 60fps progress update
  useEffect(() => {
    if (videoModalOpen) return;

    if (isPaused) {
      elapsedBeforePauseRef.current += Date.now() - startTimeRef.current;
      return;
    }

    startTimeRef.current = Date.now();

    const interval = setInterval(() => {
      const now = Date.now();
      const currentRunElapsed = now - startTimeRef.current;
      const totalElapsed = elapsedBeforePauseRef.current + currentRunElapsed;
      const currentProgress = Math.min(100, (totalElapsed / AUTOPLAY_DURATION) * 100);

      setProgress(currentProgress);

      if (totalElapsed >= AUTOPLAY_DURATION) {
        handleNext();
      }
    }, 40);

    return () => clearInterval(interval);
  }, [isPaused, videoModalOpen, handleNext]);

  // Keyboard navigation & accessibility
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (videoModalOpen) {
        if (e.key === 'Escape') setVideoModalOpen(false);
        return;
      }
      if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [videoModalOpen, handlePrev, handleNext]);

  return (
    <>
      <section
        id="home"
        ref={sectionRef}
        role="region"
        aria-roledescription="carousel"
        aria-label="JRS International School Showcase"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className="relative w-full h-[90vh] min-h-[640px] max-h-[960px] bg-[#0B0F17] overflow-hidden select-none"
      >
        {/* SLIDE BACKGROUNDS (Real client images with subtle Ken Burns zoom & crossfade) */}
        {slidesData.map((slide, index) => {
          const isActive = index === currentSlide;
          return (
            <div
              key={slide.id}
              role="group"
              aria-roledescription="slide"
              aria-label={`Slide ${index + 1} of ${slidesData.length}: ${slide.eyebrow}`}
              aria-hidden={!isActive}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              {/* Image with slow 1-2% Ken Burns slow zoom */}
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src={slide.image}
                  alt={slide.imageAlt}
                  loading={index === 0 ? 'eager' : 'lazy'}
                  decoding="async"
                  className={`w-full h-full object-cover ${slide.desktopPosition} transition-transform duration-[7000ms] ease-out will-change-transform ${
                    isActive ? 'scale-[1.03]' : 'scale-100'
                  }`}
                />
              </div>

              {/* REFINED EDITORIAL GRADIENT OVERLAYS */}
              {/* 1. Desktop Left Vignette (Preserves right-side faces & building while ensuring 100% text readability) */}
              <div
                className="hidden md:block absolute inset-0 bg-gradient-to-r from-[#0B0F17]/95 via-[#0B0F17]/65 to-transparent w-[78%] lg:w-[62%] pointer-events-none"
                aria-hidden="true"
              />

              {/* 2. Mobile Gradient: Gentle bottom & side gradient tailored for vertical viewport */}
              <div
                className="md:hidden absolute inset-0 bg-gradient-to-t from-[#0B0F17]/95 via-[#0B0F17]/70 to-[#0B0F17]/40 pointer-events-none"
                aria-hidden="true"
              />

              {/* 3. Top Scrim: Crisp contrast for transparent header & navigation */}
              <div
                className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-[#0B0F17]/85 via-[#0B0F17]/35 to-transparent pointer-events-none"
                aria-hidden="true"
              />

              {/* 4. Bottom Scrim: Anchors slider controls dock */}
              <div
                className="absolute bottom-0 inset-x-0 h-36 bg-gradient-to-t from-[#0B0F17]/90 via-[#0B0F17]/35 to-transparent pointer-events-none"
                aria-hidden="true"
              />
            </div>
          );
        })}

        {/* HERO CONTENT: Positioned in the left 35–45% of viewport with generous whitespace */}
        <div className="relative z-20 max-w-[1440px] h-full mx-auto px-5 sm:px-8 lg:px-12 pointer-events-none">
          {slidesData.map((slide, index) => {
            const isActive = index === currentSlide;
            return (
              <div
                key={slide.id}
                className={`absolute inset-0 px-5 sm:px-8 lg:px-12 flex flex-col justify-center transition-all duration-700 ease-out ${
                  isActive
                    ? 'opacity-100 translate-y-0 pointer-events-auto z-20'
                    : 'opacity-0 translate-y-6 pointer-events-none z-10'
                }`}
              >
                <div className="max-w-xl lg:max-w-[620px] xl:max-w-[680px] pt-24 sm:pt-28 lg:pt-32 pb-10 sm:pb-12">
                  {/* Eyebrow Label */}
                  <div className="inline-flex items-center gap-2.5 mb-3.5 sm:mb-4.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626] shadow-[0_0_10px_rgba(220,38,38,0.9)]" />
                    <span className="text-xs sm:text-[13px] font-bold tracking-[0.24em] text-white uppercase font-sans">
                      {slide.eyebrow}
                    </span>
                  </div>

                  {/* Main Display Headline (Fraunces Serif, 64–88px on desktop) */}
                  <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[70px] xl:text-[78px] font-normal text-white leading-[1.07] tracking-tight mb-4 sm:mb-6 drop-shadow-sm">
                    {slide.headline.map((line, i) => (
                      <span key={i} className="block">
                        {line}
                      </span>
                    ))}
                  </h1>

                  {/* Supporting Text */}
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-200/95 font-sans font-light leading-relaxed max-w-xl mb-7 sm:mb-9 drop-shadow-xs">
                    {slide.supporting}
                  </p>

                  {/* Call-to-Action Buttons */}
                  <div className="flex flex-wrap items-center gap-3.5 sm:gap-4.5">
                    {/* Primary CTA */}
                    <a
                      href={slide.primaryCta.href}
                      className="group inline-flex items-center gap-2.5 bg-[#DC2626] hover:bg-[#B91C1C] text-white font-bold text-[13px] sm:text-[14px] uppercase tracking-wider px-7 sm:px-8 py-3.5 sm:py-4 rounded-full transition-all duration-300 shadow-[0_10px_25px_-5px_rgba(220,38,38,0.5)] hover:shadow-[0_12px_30px_rgba(220,38,38,0.6)] hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-[#DC2626] focus:ring-offset-2 focus:ring-offset-[#0B0F17] cursor-pointer"
                    >
                      <span>{slide.primaryCta.label}</span>
                    </a>

                    {/* Secondary Optional CTA */}
                    {slide.secondaryCta && (
                      <button
                        type="button"
                        onClick={() => setVideoModalOpen(true)}
                        className="group inline-flex items-center gap-2.5 bg-white/10 hover:bg-white/20 text-white border border-white/30 hover:border-white/60 backdrop-blur-md font-semibold text-[13px] sm:text-[14px] uppercase tracking-wider px-6 sm:px-7 py-3.5 sm:py-4 rounded-full transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-white/50 cursor-pointer"
                      >
                        <span className="w-6 h-6 rounded-full bg-[#16A34A] text-white flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-sm">
                          <Play className="w-3 h-3 fill-current ml-0.5" />
                        </span>
                        <span>{slide.secondaryCta.label}</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* BOTTOM-RIGHT SLIDER CONTROLS DOCK */}
        <div className="absolute z-30 bottom-5 sm:bottom-7 lg:bottom-9 right-4 sm:right-8 lg:right-12 left-4 sm:left-auto flex items-center justify-between sm:justify-end gap-4 sm:gap-6 lg:gap-7 bg-black/40 sm:bg-transparent backdrop-blur-sm sm:backdrop-blur-none px-4 py-2.5 sm:p-0 rounded-full border border-white/10 sm:border-transparent">
          {/* 1. Slide Counter: "01 / 03" */}
          <div className="flex items-baseline font-sans text-white/90 shrink-0">
            <span className="font-display text-lg sm:text-2xl font-bold tracking-tight text-white">
              0{currentSlide + 1}
            </span>
            <span className="text-white/40 text-xs sm:text-sm mx-1.5 font-light">/</span>
            <span className="text-white/60 text-xs sm:text-sm font-medium tracking-widest">
              0{slidesData.length}
            </span>
          </div>

          {/* 2. Three Minimal Pagination Indicators with Active Thin Progress Line */}
          <div className="flex items-center gap-2 sm:gap-2.5" role="tablist" aria-label="Slider pagination">
            {slidesData.map((_, idx) => {
              const isActive = idx === currentSlide;
              return (
                <button
                  key={idx}
                  role="tab"
                  aria-selected={isActive}
                  aria-label={`Go to slide ${idx + 1}`}
                  onClick={() => goToSlide(idx)}
                  className={`h-1 sm:h-1.5 rounded-full transition-all duration-300 relative overflow-hidden cursor-pointer focus:outline-none focus:ring-1 focus:ring-[#DC2626] ${
                    isActive ? 'w-12 sm:w-20 bg-white/30' : 'w-5 sm:w-8 bg-white/20 hover:bg-white/40'
                  }`}
                >
                  {isActive && (
                    <div
                      className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#DC2626] to-[#16A34A] rounded-full transition-all duration-75"
                      style={{ width: `${progress}%` }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* 3. Circular Arrow Buttons (Previous & Next) */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous slide"
              className="w-9 h-9 sm:w-11 sm:h-11 rounded-full border border-white/25 bg-black/40 hover:bg-[#DC2626] hover:border-[#DC2626] text-white flex items-center justify-center transition-all duration-300 backdrop-blur-md hover:scale-105 active:scale-95 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#DC2626]"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.2]" />
            </button>

            <button
              type="button"
              onClick={handleNext}
              aria-label="Next slide"
              className="w-9 h-9 sm:w-11 sm:h-11 rounded-full border border-white/25 bg-black/40 hover:bg-[#DC2626] hover:border-[#DC2626] text-white flex items-center justify-center transition-all duration-300 backdrop-blur-md hover:scale-105 active:scale-95 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#DC2626]"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.2]" />
            </button>
          </div>
        </div>
      </section>

      {/* LUXURY VIDEO MODAL FOR "WATCH OUR STORY" */}
      {videoModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="JRS International School Story"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md transition-opacity duration-300"
          onClick={() => setVideoModalOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl bg-[#0B0F17] rounded-3xl overflow-hidden shadow-2xl border border-white/20 aspect-video flex flex-col justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setVideoModalOpen(false)}
              aria-label="Close video story modal"
              className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/70 hover:bg-white hover:text-black text-white transition-colors duration-200 cursor-pointer shadow-lg"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Video Player */}
            <video
              src="/campus-tour.mp4"
              controls
              autoPlay
              playsInline
              className="w-full h-full object-cover"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </>
  );
}
