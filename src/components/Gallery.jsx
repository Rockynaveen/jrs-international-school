import React, { useState, useEffect, useCallback } from 'react';
import { images } from '../data/siteData';

const galleryItems = [
  {
    id: 'campus',
    title: 'Modern World-Class Campus',
    category: 'Campus',
    icon: '🏛️',
    badgeText: 'Campus',
    image: '/gallery/campus.jpg',
    highRes: images.campusExterior || '/gallery/campus.jpg',
    description: 'Expansive pollution-free campus in Narapally featuring state-of-the-art infrastructure, landscaped courtyards, and safe walkways.',
  },
  {
    id: 'learning',
    title: 'Interactive Smart Classrooms',
    category: 'Learning',
    icon: '📖',
    badgeText: 'Learning',
    image: '/gallery/learning.jpg',
    highRes: images.learningJoy || '/gallery/learning.jpg',
    description: 'Curiosity-led learning spaces blending CBSE curriculum rigor with multimedia interactivity and individual attention.',
  },
  {
    id: 'sports',
    title: 'Athletic Turf & Sports Fields',
    category: 'Sports',
    icon: '⚽',
    badgeText: 'Sports',
    image: '/gallery/sports.jpg',
    highRes: images.sportsField || '/gallery/sports.jpg',
    description: 'Full-size football turf, cricket practice nets, and track athletics coaching young champions in agility, stamina, and team spirit.',
  },
  {
    id: 'arts',
    title: 'Classical & Contemporary Arts',
    category: 'Arts & Culture',
    icon: '🎨',
    badgeText: 'Arts & Culture',
    image: '/gallery/arts.jpg',
    highRes: images.danceDramatics || '/gallery/arts.jpg',
    description: 'Nurturing cultural heritage and expressive creativity through Kuchipudi dance, fine art painting, and dramatic stage theatre.',
  },
  {
    id: 'activities',
    title: 'Advanced Science & STEM Discovery',
    category: 'Activities',
    icon: '⚗️',
    badgeText: 'Activities',
    image: '/gallery/activities.jpg',
    highRes: images.scienceLab || '/gallery/activities.jpg',
    description: 'Hands-on experimentation in physics, chemistry, and robotics supporting our premier IIT & NIT Foundation program.',
  },
  {
    id: 'events',
    title: 'Milestone Events & Celebrations',
    category: 'Events',
    icon: '📅',
    badgeText: 'Events',
    image: '/gallery/events.jpg',
    highRes: images.heroStudent || '/gallery/events.jpg',
    description: 'Annual Sports Meets, graduation triumphs, and cultural carnivals celebrating our students’ achievements with proud families.',
  },
  {
    id: 'library',
    title: 'Collaborative Reading Plaza',
    category: 'Library',
    icon: '📖',
    badgeText: 'Library',
    image: '/gallery/library.jpg',
    highRes: images.libraryModern || '/gallery/library.jpg',
    description: 'Extensive print volumes, journals, and digital research archives inspiring lifelong curiosity and independent scholarship.',
  },
  {
    id: 'student-life',
    title: 'Safe Campus Transit & Student Life',
    category: 'Student Life',
    icon: '🚌',
    badgeText: 'Student Life',
    image: '/gallery/student-life.jpg',
    highRes: images.campusExterior || '/gallery/student-life.jpg',
    description: 'GPS-enabled comfortable school bus fleet covering Uppal, Narapally, and surrounding areas ensuring secure daily commutes.',
  },
];

export default function Gallery() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [showFullModal, setShowFullModal] = useState(false);

  // Keyboard navigation for lightbox
  const handleKeyDown = useCallback(
    (e) => {
      if (!selectedItem) return;
      if (e.key === 'Escape') {
        setSelectedItem(null);
      } else if (e.key === 'ArrowRight') {
        const currIdx = galleryItems.findIndex((i) => i.id === selectedItem.id);
        const nextIdx = (currIdx + 1) % galleryItems.length;
        setSelectedItem(galleryItems[nextIdx]);
      } else if (e.key === 'ArrowLeft') {
        const currIdx = galleryItems.findIndex((i) => i.id === selectedItem.id);
        const prevIdx = (currIdx - 1 + galleryItems.length) % galleryItems.length;
        setSelectedItem(galleryItems[prevIdx]);
      }
    },
    [selectedItem]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  const campusItem = galleryItems.find((i) => i.id === 'campus');
  const learningItem = galleryItems.find((i) => i.id === 'learning');
  const sportsItem = galleryItems.find((i) => i.id === 'sports');
  const bottomItems = galleryItems.filter(
    (i) => i.id !== 'campus' && i.id !== 'learning' && i.id !== 'sports'
  );

  return (
    <section id="gallery" className="py-10 bg-[#FAF8F5] relative overflow-hidden">
      {/* ─────────────────────────────────────────────────────────────
          MAIN CONTENT CONTAINER
      ───────────────────────────────────────────────────────────── */}
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* TOP ROW: Intro Heading + Campus Feature + Stacked Learning/Sports */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-stretch mb-5 lg:mb-6">
          
          {/* Left Column: Intro Heading & Action */}
          <div className="lg:col-span-4 flex flex-col justify-center pr-0 lg:pr-4 py-2 sm:py-4">
            
            {/* Tag: GALLERY ─── */}
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#0B2545]">
                GALLERY
              </span>
              <span className="w-12 h-[2px] bg-[#E5A83B]" />
            </div>

            {/* Main Headline */}
            <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-[3.25rem] text-[#0B2545] leading-[1.08] tracking-tight mb-5">
              A glimpse <br />
              of{' '}
              <span className="font-display italic font-normal text-[#E25C34]">
                life at JRS
              </span>
            </h2>

            {/* Description Paragraph */}
            <p className="text-sm sm:text-base text-[#5A6E82] leading-relaxed max-w-sm mb-7">
              From classrooms to playgrounds, from celebrations to everyday moments — explore the stories that make JRS a vibrant place to learn, grow and belong.
            </p>

            {/* Button */}
            <div>
              <button
                type="button"
                onClick={() => setShowFullModal(true)}
                className="inline-flex items-center gap-3 bg-[#072B4F] hover:bg-[#0B3B6D] text-white px-7 py-3.5 rounded-full text-sm font-semibold shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer group"
              >
                <span>View Full Gallery</span>
                <span className="text-base group-hover:translate-x-1 transition-transform duration-200">→</span>
              </button>
            </div>
          </div>

          {/* Center Column: Big Campus Card */}
          <div className="lg:col-span-5">
            <div
              onClick={() => setSelectedItem(campusItem)}
              className="group relative rounded-[28px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer h-[260px] sm:h-[320px] lg:h-full min-h-[280px] bg-slate-100 border border-slate-200/60"
            >
              <img
                src={campusItem.image}
                alt={campusItem.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>

          {/* Right Column: Stacked Learning & Sports Cards */}
          <div className="lg:col-span-3 flex flex-col gap-4 sm:gap-5 justify-between">
            {/* Card 1: Learning */}
            <div
              onClick={() => setSelectedItem(learningItem)}
              className="group relative rounded-[26px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer h-[150px] sm:h-[165px] lg:h-[calc(50%-10px)] bg-slate-100 border border-slate-200/60"
            >
              <img
                src={learningItem.image}
                alt={learningItem.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Card 2: Sports */}
            <div
              onClick={() => setSelectedItem(sportsItem)}
              className="group relative rounded-[26px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer h-[150px] sm:h-[165px] lg:h-[calc(50%-10px)] bg-slate-100 border border-slate-200/60"
            >
              <img
                src={sportsItem.image}
                alt={sportsItem.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>

        </div>

        {/* BOTTOM ROW: 5 Cards (Arts & Culture, Activities, Events, Library, Student Life) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4 lg:gap-5">
          {bottomItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group relative rounded-[22px] sm:rounded-[24px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer aspect-[4/3] bg-slate-100 border border-slate-200/60"
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

      </div>

      {/* ─────────────────────────────────────────────────────────────
          LIGHTBOX MODAL (On click of any card)
      ───────────────────────────────────────────────────────────── */}
      {selectedItem && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setSelectedItem(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
        >
          <div
            className="relative max-w-4xl w-full bg-[#072B4F] rounded-3xl overflow-hidden shadow-2xl border border-white/20 flex flex-col max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-5 py-4 bg-[#062446] border-b border-white/10 text-white shrink-0">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#F7C95E] text-[#072B4F] flex items-center gap-1.5">
                  <span>{selectedItem.icon}</span>
                  <span>{selectedItem.badgeText}</span>
                </span>
                <span className="text-xs text-slate-300 font-medium">
                  {galleryItems.findIndex((i) => i.id === selectedItem.id) + 1} of {galleryItems.length}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setSelectedItem(null)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white text-white hover:text-[#072B4F] flex items-center justify-center text-xs font-bold transition-all cursor-pointer"
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>

            {/* Modal Image Area with Navigation Buttons */}
            <div className="relative flex-grow min-h-[260px] max-h-[62vh] bg-black/50 flex items-center justify-center overflow-hidden">
              <img
                src={selectedItem.highRes || selectedItem.image}
                alt={selectedItem.title}
                className="w-full h-full max-h-[62vh] object-contain"
              />

              {/* Previous Photo Button */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  const currIdx = galleryItems.findIndex((i) => i.id === selectedItem.id);
                  const prevIdx = (currIdx - 1 + galleryItems.length) % galleryItems.length;
                  setSelectedItem(galleryItems[prevIdx]);
                }}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-white text-white hover:text-[#072B4F] flex items-center justify-center text-xl transition-colors cursor-pointer"
                aria-label="Previous image"
              >
                ‹
              </button>

              {/* Next Photo Button */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  const currIdx = galleryItems.findIndex((i) => i.id === selectedItem.id);
                  const nextIdx = (currIdx + 1) % galleryItems.length;
                  setSelectedItem(galleryItems[nextIdx]);
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-white text-white hover:text-[#072B4F] flex items-center justify-center text-xl transition-colors cursor-pointer"
                aria-label="Next image"
              >
                ›
              </button>
            </div>

            {/* Modal Description Footer */}
            <div className="p-5 bg-[#062446] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-white shrink-0">
              <div className="space-y-1 max-w-xl">
                <h3 className="font-modern font-bold text-base sm:text-lg">
                  {selectedItem.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {selectedItem.description}
                </p>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <a
                  href="#contact"
                  onClick={() => setSelectedItem(null)}
                  className="inline-flex items-center gap-1.5 bg-[#0B6DB7] hover:bg-[#38BDF8] text-white px-5 py-2.5 rounded-full text-xs font-semibold transition-colors cursor-pointer"
                >
                  <span>Enquire for 2026–27</span>
                  <span>›</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────
          "VIEW FULL GALLERY" EXPANDED MODAL
      ───────────────────────────────────────────────────────────── */}
      {showFullModal && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setShowFullModal(false)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
        >
          <div
            className="relative max-w-5xl w-full bg-[#FAF8F5] rounded-3xl overflow-hidden shadow-2xl border border-slate-200 flex flex-col max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-5 bg-white border-b border-slate-200 shrink-0">
              <div>
                <span className="text-[11px] font-bold tracking-widest uppercase text-[#0B6DB7]">
                  COMPLETE PHOTO ARCHIVE
                </span>
                <h3 className="font-display font-bold text-xl sm:text-2xl text-[#0B2545]">
                  Life at JRS International School
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setShowFullModal(false)}
                className="w-9 h-9 rounded-full bg-slate-100 hover:bg-[#072B4F] text-[#072B4F] hover:text-white flex items-center justify-center text-sm font-bold transition-all cursor-pointer"
                aria-label="Close full gallery modal"
              >
                ✕
              </button>
            </div>

            {/* Grid of All Photos */}
            <div className="p-6 overflow-y-auto max-h-[calc(92vh-140px)]">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {galleryItems.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => {
                      setShowFullModal(false);
                      setSelectedItem(item);
                    }}
                    className="group relative rounded-2xl overflow-hidden border border-slate-200 shadow-xs hover:shadow-lg transition-all duration-300 cursor-pointer bg-white"
                  >
                    <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-3">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#0B6DB7] block mb-1">
                        {item.badgeText}
                      </span>
                      <h4 className="font-semibold text-xs text-[#0B2545] leading-snug line-clamp-1">
                        {item.title}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 bg-white border-t border-slate-200 flex items-center justify-between text-xs text-[#5A6E82] shrink-0">
              <span>Showing {galleryItems.length} curated highlights of JRS International School</span>
              <a
                href="#contact"
                onClick={() => setShowFullModal(false)}
                className="bg-[#072B4F] hover:bg-[#0B3B6D] text-white px-5 py-2 rounded-full font-semibold transition-colors"
              >
                Book a Campus Tour
              </a>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
