import React, { useState, useEffect, useCallback } from 'react';

const galleryItems = [
  {
    id: 'campus',
    title: 'Modern World-Class Campus',
    category: 'Campus',
    icon: '🏛️',
    badgeText: 'Campus',
    image: '/WhatsApp Image 2026-09-28 at 7.24.42 PM.jpeg',
    highRes: '/WhatsApp Image 2026-09-28 at 7.24.42 PM.jpeg',
    description: 'Expansive pollution-free campus in Narapally featuring state-of-the-art infrastructure, landscaped courtyards, amphitheater steps, and safe bus transit.',
  },
  {
    id: 'learning',
    title: 'Interactive STEM & Innovation Labs',
    category: 'Learning',
    icon: '🔬',
    badgeText: 'Learning',
    image: '/WhatsApp Image 2026-09-28 at 7.32.11 PM.jpeg',
    highRes: '/WhatsApp Image 2026-09-28 at 7.32.11 PM.jpeg',
    description: 'Hands-on experiential learning where students design and build working scientific models, explore physics concepts, and nurture creative thinking.',
  },
  {
    id: 'sports',
    title: 'Track Athletics & Sports Championships',
    category: 'Sports',
    icon: '🏃',
    badgeText: 'Sports',
    image: '/WhatsApp Image 2026-09-28 at 7.32.47 PM.jpeg',
    highRes: '/WhatsApp Image 2026-09-28 at 7.32.47 PM.jpeg',
    description: 'Students competing in track sprinting and athletics across inter-house teams on our dedicated international standard running track.',
  },
  {
    id: 'arts',
    title: 'School Brass Band & Music Ensemble',
    category: 'Arts & Culture',
    icon: '🥁',
    badgeText: 'Arts & Culture',
    image: '/WhatsApp Image 2026-09-28 at 7.33.00 PM.jpeg',
    highRes: '/WhatsApp Image 2026-09-28 at 7.33.00 PM.jpeg',
    description: 'Nurturing musical discipline, rhythm, and collaborative teamwork through our distinguished marching band and ceremonial percussion performances.',
  },
  {
    id: 'activities',
    title: 'Outdoor Experiential Activities',
    category: 'Activities',
    icon: '🌱',
    badgeText: 'Activities',
    image: '/WhatsApp Image 2026-09-28 at 7.33.04 PM.jpeg',
    highRes: '/WhatsApp Image 2026-09-28 at 7.33.04 PM.jpeg',
    description: 'Primary learners discovering nature, developing social coordination, and enjoying guided outdoor recreation on the open campus grounds.',
  },
  {
    id: 'student-life',
    title: 'Joyful Daily Student Life',
    category: 'Student Life',
    icon: '✨',
    badgeText: 'Student Life',
    image: '/WhatsApp Image 2026-09-28 at 7.32.45 PM.jpeg',
    highRes: '/WhatsApp Image 2026-09-28 at 7.32.45 PM.jpeg',
    description: 'A welcoming, positive school environment where every student is encouraged to walk with confidence, form lifelong friendships, and thrive.',
  },
  {
    id: 'events',
    title: 'School Assembly & Celebrations',
    category: 'Events',
    icon: '🏫',
    badgeText: 'Events',
    image: '/hero image.png',
    highRes: '/hero image.png',
    description: 'Whole-school morning drills, national festivals, and milestone assemblies bringing our complete student body and faculty together.',
  },
  {
    id: 'library',
    title: 'Collaborative Reading Plaza',
    category: 'Library',
    icon: '📖',
    badgeText: 'Library',
    image: '/heroslider.jpeg',
    highRes: '/heroslider.jpeg',
    description: 'Extensive print volumes, journals, and quiet research study tables inspiring lifelong scholarly discipline and curiosity.',
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
    <section id="gallery" className="py-12 bg-gradient-to-b from-[#EEF2F6] via-[#F8FAFC] to-[#EEF2F6] relative overflow-hidden border-b border-slate-200">
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
              <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#DC2626]">
                GALLERY
              </span>
              <span className="w-12 h-[2px] bg-gradient-to-r from-[#DC2626] to-[#16A34A]" />
            </div>

            {/* Main Headline */}
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-[40px] text-[#0B0F17] leading-tight tracking-tight mb-6">
              A glimpse <br />
              of{' '}
              <span className="font-bold bg-gradient-to-r from-[#DC2626] to-[#EF4444] bg-clip-text text-transparent">
                life at JRS
              </span>
            </h2>

            {/* Button */}
            <div>
              <button
                type="button"
                onClick={() => setShowFullModal(true)}
                className="inline-flex items-center gap-3 bg-gradient-to-r from-[#0B0F17] to-[#1E293B] hover:from-[#16A34A] hover:to-[#15803D] text-white px-7 py-3.5 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer group"
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
            className="relative max-w-4xl w-full bg-[#0B0F17] rounded-3xl overflow-hidden shadow-2xl border border-white/20 flex flex-col max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-5 py-4 bg-[#0B0F17] border-b border-white/10 text-white shrink-0">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#DC2626] text-white flex items-center gap-1.5">
                  <span>{selectedItem.icon}</span>
                  <span>{selectedItem.badgeText}</span>
                </span>
                <span className="text-xs text-gray-300 font-medium">
                  {galleryItems.findIndex((i) => i.id === selectedItem.id) + 1} of {galleryItems.length}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setSelectedItem(null)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white text-white hover:text-[#0B0F17] flex items-center justify-center text-xs font-bold transition-all cursor-pointer"
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
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-white text-white hover:text-[#0B0F17] flex items-center justify-center text-xl transition-colors cursor-pointer"
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
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-white text-white hover:text-[#0B0F17] flex items-center justify-center text-xl transition-colors cursor-pointer"
                aria-label="Next image"
              >
                ›
              </button>
            </div>

            {/* Modal Description Footer */}
            <div className="p-5 bg-[#0B0F17] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-white shrink-0">
              <div className="space-y-1 max-w-xl">
                <h3 className="font-modern font-bold text-base sm:text-lg">
                  {selectedItem.title}
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed">
                  {selectedItem.description}
                </p>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <a
                  href="#admissions"
                  onClick={() => setSelectedItem(null)}
                  className="inline-flex items-center gap-1.5 bg-[#DC2626] hover:bg-[#16A34A] text-white px-5 py-2.5 rounded-full text-xs font-semibold transition-colors cursor-pointer"
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
            className="relative max-w-5xl w-full bg-[#FAF8F5] rounded-3xl overflow-hidden shadow-2xl border border-gray-200 flex flex-col max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-5 bg-white border-b border-gray-200 shrink-0">
              <div>
                <span className="text-[11px] font-bold tracking-widest uppercase text-[#DC2626]">
                  COMPLETE PHOTO ARCHIVE
                </span>
                <h3 className="font-display font-bold text-xl sm:text-2xl text-[#0B0F17]">
                  Life at JRS International School
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setShowFullModal(false)}
                className="w-9 h-9 rounded-full bg-gray-100 hover:bg-[#0B0F17] text-[#0B0F17] hover:text-white flex items-center justify-center text-sm font-bold transition-all cursor-pointer"
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
                    className="group relative rounded-2xl overflow-hidden border border-gray-200 shadow-xs hover:shadow-lg transition-all duration-300 cursor-pointer bg-white"
                  >
                    <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-3">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#DC2626] block mb-1">
                        {item.badgeText}
                      </span>
                      <h4 className="font-semibold text-xs text-[#0B0F17] leading-snug line-clamp-1">
                        {item.title}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 bg-white border-t border-gray-200 flex items-center justify-between text-xs text-gray-500 shrink-0">
              <span>Showing {galleryItems.length} curated highlights of JRS International School</span>
              <a
                href="#admissions"
                onClick={() => setShowFullModal(false)}
                className="bg-gradient-to-r from-[#DC2626] to-[#B91C1C] hover:from-[#16A34A] hover:to-[#15803D] text-white px-5 py-2 rounded-full font-semibold transition-all"
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
