import React, { useState, useEffect, useCallback } from 'react';
import { Badge } from './ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';

const galleryItems = [
  // ── ROW 1 (Feature Cards) ──
  {
    id: 'academics',
    title: 'Academics',
    badge: 'Academics',
    categories: ['Academics'],
    image: '/primary-school-study.jpg',
    description: 'Engaging classroom learning, interactive NCERT curriculum, and foundational scholastic discovery.',
    icon: (
      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    id: 'sports',
    title: 'Sports',
    badge: 'Sports',
    categories: ['Sports', 'Beyond the Classroom'],
    image: '/games-and-sports-track.jpg',
    description: 'Students competing in running track athletics, football, and inter-house sporting championships.',
    icon: (
      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3h14v4a5 5 0 01-5 5h-4a5 5 0 01-5-5V3zm0 2H3a2 2 0 00-2 2v1a4 4 0 004 4h0m14-7h2a2 2 0 012 2v1a4 4 0 01-4 4h0M10 14.5V18m4-3.5V18m-6 3h8" />
      </svg>
    ),
  },

  // ── ROW 2 (3 items) ──
  {
    id: 'art-painting',
    title: 'Art & Painting',
    badge: 'Art & Painting',
    categories: ['Arts & Culture', 'Beyond the Classroom'],
    image: '/art-and-painting.jpg',
    description: 'Canvas painting, creative sketchcraft, and visual arts nurturing imagination and creative flair.',
    icon: (
      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4 11.97 11.97 0 012.24-6.66l6.83-9.56a1.5 1.5 0 012.38 0l2.42 3.38a1.5 1.5 0 01-.19 2.05L12 11.5M7 21h10a4 4 0 004-4 11.97 11.97 0 00-2.24-6.66L15 4" />
      </svg>
    ),
  },
  {
    id: 'dance',
    title: 'Dance',
    badge: 'Dance',
    categories: ['Arts & Culture', 'Beyond the Classroom'],
    image: '/classical-dance-activity.jpg',
    description: 'Graceful Bharatanatyam mudras, folk traditions, and vibrant stage dance choreography.',
    icon: (
      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
      </svg>
    ),
  },
  {
    id: 'music',
    title: 'Music',
    badge: 'Music',
    categories: ['Arts & Culture', 'Beyond the Classroom'],
    image: '/music-band-activity.jpg',
    description: 'Ceremonial brass band, percussion ensembles, and instrumental music coaching.',
    icon: (
      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
      </svg>
    ),
  },

  // ── ROW 3 (3 items) ──
  {
    id: 'karate',
    title: 'Karate',
    badge: 'Karate',
    categories: ['Sports', 'Beyond the Classroom'],
    image: '/karati.webp',
    description: 'Certified martial arts training building self-defense, discipline, reflexes, and inner focus.',
    icon: (
      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    id: 'yoga',
    title: 'Yoga',
    badge: 'Yoga',
    categories: ['Sports', 'Beyond the Classroom'],
    image: '/yoga-activity.jpg',
    description: 'Daily morning pranayama, mindfulness asanas, and emotional wellness in our meditation hall.',
    icon: (
      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="5" r="2.5" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 19c1.5-3 4-5 8-5s6.5 2 8 5M12 10v4" />
      </svg>
    ),
  },
  {
    id: 'science-activities',
    title: 'Science Activities',
    badge: 'Science Activities',
    categories: ['Academics', 'Beyond the Classroom'],
    image: '/science-lab-activity.jpg',
    description: 'Hands-on laboratory experiments, chemistry flask demonstrations, and practical scientific inquiry.',
    icon: (
      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },

  // ── ROW 4 (3 items) ──
  {
    id: 'events',
    title: 'Events',
    badge: 'Events',
    categories: ['Events'],
    image: '/hero image.png',
    description: 'Annual sports meets, patriotic parades, flag hosting ceremonies, and whole-school milestones.',
    icon: (
      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 2v4M8 2v4M3 10h18" />
      </svg>
    ),
  },
  {
    id: 'celebrations',
    title: 'Celebrations',
    badge: 'Celebrations',
    categories: ['Celebrations', 'Events'],
    image: '/cocurricular-fest.jpg',
    description: 'Joyous cultural fests, fancy dress annual days, festive pageants, and campus carnivals.',
    icon: (
      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    id: 'field-trips',
    title: 'Field Trips',
    badge: 'Field Trips',
    categories: ['Beyond the Classroom', 'Events'],
    image: '/school-bus-transit.jpg',
    description: 'Safe GPS-enabled bus transit taking students on exciting heritage walks and nature expeditions.',
    icon: (
      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
        <circle cx="12" cy="13" r="3" strokeWidth="2" />
      </svg>
    ),
  },
];

export default function Gallery() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [showFullModal, setShowFullModal] = useState(false);

  // Lightbox keyboard navigation
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

  const academicsItem = galleryItems.find((i) => i.id === 'academics') || galleryItems[0];
  const sportsItem = galleryItems.find((i) => i.id === 'sports') || galleryItems[1];
  const gridItems = galleryItems.slice(2); // Remaining 9 items (3 rows of 3)

  return (
    <section
      id="gallery"
      className="py-16 sm:py-20 lg:py-24 bg-[#FCFAF7] relative overflow-hidden border-b border-slate-200/80"
    >
      {/* Decorative Soft Ambient Blobs */}
      <div
        className="w-80 h-80 rounded-full bg-[#E5F2E8]/70 blur-3xl absolute -top-20 -left-20 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="w-80 h-80 rounded-full bg-[#FCECE8]/70 blur-3xl absolute -bottom-20 -right-20 pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ── HEADER ── */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50/80 text-[#DC2626] text-xs font-semibold tracking-[0.2em] uppercase border border-red-100 mb-3.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]" />
            GALLERY
          </div>
          
          <h2 className="font-serif text-3xl sm:text-4xl md:text-[42px] lg:text-[46px] font-bold text-[#1E293B] tracking-tight leading-tight">
            Moments at <span className="text-[#B91C1C] font-extrabold">JRS</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 font-sans max-w-2xl mx-auto mt-3.5 font-normal leading-relaxed">
            A glimpse into the vibrant life at JRS International School — where learning, creativity and growth come together.
          </p>
        </div>

        {/* ── GALLERY GRID (Matches User Reference Image Exactly) ── */}
        <div className="space-y-3.5 sm:space-y-4">
          
          {/* ── ROW 1: 2 FEATURED WIDE CARDS (1 image per card) ── */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3.5 sm:gap-4">
            
            {/* Card 1: Academics (1 image only) */}
            <div
              onClick={() => setSelectedItem(academicsItem)}
              className="group relative h-[230px] sm:h-[260px] lg:h-[280px] rounded-2xl overflow-hidden shadow-[0_4px_18px_rgba(0,0,0,0.07)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.18)] transition-all duration-500 cursor-pointer border border-slate-200/60 bg-slate-900 select-none"
            >
              <img
                src={academicsItem.image}
                alt={academicsItem.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/35 group-hover:bg-black/45 transition-colors duration-300 pointer-events-none" />
              <div className="absolute inset-0 flex items-center justify-center p-4 text-center z-10 pointer-events-none">
                <h3 className="font-serif text-2xl sm:text-3xl lg:text-[32px] font-bold text-white tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] group-hover:scale-105 transition-transform duration-300">
                  {academicsItem.title}
                </h3>
              </div>
            </div>

            {/* Card 2: Sports (1 image only) */}
            <div
              onClick={() => setSelectedItem(sportsItem)}
              className="group relative h-[230px] sm:h-[260px] lg:h-[280px] rounded-2xl overflow-hidden shadow-[0_4px_18px_rgba(0,0,0,0.07)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.18)] transition-all duration-500 cursor-pointer border border-slate-200/60 bg-slate-900 select-none"
            >
              <img
                src={sportsItem.image}
                alt={sportsItem.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/35 group-hover:bg-black/45 transition-colors duration-300 pointer-events-none" />
              <div className="absolute inset-0 flex items-center justify-center p-4 text-center z-10 pointer-events-none">
                <h3 className="font-serif text-2xl sm:text-3xl lg:text-[32px] font-bold text-white tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] group-hover:scale-105 transition-transform duration-300">
                  {sportsItem.title}
                </h3>
              </div>
            </div>

          </div>

          {/* ── ROWS 2, 3, 4: 3-COLUMN RECTANGULAR CARDS (Makeup, Planning & Decor, Mehndi Style) ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
            {gridItems.map((item) => (
              <SingleGalleryCard key={item.id} item={item} onSelect={setSelectedItem} />
            ))}
          </div>

        </div>

        {/* ── BOTTOM BUTTON: "View More Photos →" (With Sunburst Spark Accents) ── */}
        <div className="text-center mt-12 sm:mt-16 flex items-center justify-center">
          <div className="relative inline-flex items-center justify-center">
            {/* Left Sunburst Sparks */}
            <span className="hidden sm:inline-block text-[#DC2626]/70 mr-3 text-sm select-none" aria-hidden="true">
              ╲ ─ ╱
            </span>

            <button
              type="button"
              onClick={() => setShowFullModal(true)}
              className="btn-pointed inline-flex items-center justify-center gap-2 bg-[#B91C1C] hover:bg-[#16A34A] text-white px-8 sm:px-9 py-3.5 text-xs sm:text-[13px] font-bold tracking-wider transition-all duration-300 cursor-pointer"
            >
              <span>View More Photos</span>
              <span className="text-sm font-normal">→</span>
            </button>

            {/* Right Sunburst Sparks */}
            <span className="hidden sm:inline-block text-[#DC2626]/70 ml-3 text-sm select-none" aria-hidden="true">
              ╲ ─ ╱
            </span>
          </div>
        </div>

      </div>

      {/* ── LIGHTBOX MODAL (On click of any card) using shadcn Dialog ── */}
      <Dialog open={!!selectedItem} onOpenChange={(open) => !open && setSelectedItem(null)}>
        {selectedItem && (
          <DialogContent className="max-w-4xl bg-[#0B0F17] border-white/20 text-white p-0">
            {/* Modal Header */}
            <DialogHeader className="px-5 py-4 border-b border-white/10 flex-row items-center justify-between">
              <div className="flex items-center gap-3">
                <Badge variant="red" className="px-3 py-1 uppercase tracking-wider gap-2">
                  <span className="w-4 h-4 flex items-center justify-center">{selectedItem.icon}</span>
                  <span>{selectedItem.badge}</span>
                </Badge>
                <span className="text-xs text-gray-300 font-medium">
                  {galleryItems.findIndex((i) => i.id === selectedItem.id) + 1} of {galleryItems.length}
                </span>
              </div>
            </DialogHeader>

            {/* Modal Image Area */}
            <div className="relative flex-grow min-h-[260px] max-h-[62vh] bg-black/50 flex items-center justify-center overflow-hidden">
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="w-full h-full max-h-[62vh] object-contain"
              />

              {/* Prev Button */}
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

              {/* Next Button */}
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
                <DialogTitle className="text-white text-base sm:text-lg">
                  {selectedItem.title}
                </DialogTitle>
                <p className="text-xs text-gray-300 leading-relaxed font-sans">
                  {selectedItem.description}
                </p>
              </div>

              <a
                href="#admissions"
                onClick={() => setSelectedItem(null)}
                className="btn-pointed inline-flex items-center justify-center gap-1.5 bg-[#B91C1C] hover:bg-[#16A34A] text-white px-6 sm:px-7 py-2.5 text-xs font-semibold transition-colors cursor-pointer shrink-0"
              >
                <span>Book Campus Tour</span>
                <span>›</span>
              </a>
            </div>
          </DialogContent>
        )}
      </Dialog>

      {/* ── "VIEW MORE PHOTOS" FULL ARCHIVE MODAL using shadcn Dialog ── */}
      <Dialog open={showFullModal} onOpenChange={setShowFullModal}>
        <DialogContent className="max-w-5xl bg-[#FAF8F5] border-gray-200 p-0">
          {/* Modal Header */}
          <DialogHeader className="px-6 py-5 bg-white border-b border-gray-200">
            <div>
              <span className="text-[11px] font-bold tracking-widest uppercase text-[#B91C1C]">
                PHOTO ARCHIVE
              </span>
              <DialogTitle className="text-xl sm:text-2xl text-[#0B0F17]">
                Moments at JRS International School
              </DialogTitle>
            </div>
          </DialogHeader>

          {/* Grid of All Photos */}
          <div className="p-6 overflow-y-auto max-h-[calc(92vh-140px)]">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {galleryItems.map((item) => (
                <div
                  key={item.id}
                  onClick={() => {
                    setShowFullModal(false);
                    setSelectedItem(item);
                  }}
                  className="group relative rounded-2xl overflow-hidden border border-gray-200 shadow-xs hover:shadow-lg transition-all duration-300 cursor-pointer bg-white"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-gray-100 relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute inset-0 flex items-center justify-center p-3 text-center pointer-events-none">
                      <span className="font-serif text-lg font-bold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                        {item.title}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Modal Footer */}
          <div className="p-4 bg-white border-t border-gray-200 flex items-center justify-between text-xs text-gray-500 shrink-0">
            <span>Showing all 11 curated campus photo moments</span>
            <a
              href="#admissions"
              onClick={() => setShowFullModal(false)}
              className="btn-pointed bg-[#B91C1C] hover:bg-[#16A34A] text-white px-6 py-2 text-xs font-semibold transition-all inline-flex items-center justify-center"
            >
              Apply for Admission
            </a>
          </div>
        </DialogContent>
      </Dialog>

    </section>
  );
}

// ── SUB-COMPONENT: Single Gallery Card (Centered White Serif Typography - Makeup / Decor / Mehndi Style) ──
function SingleGalleryCard({ item, onSelect }) {
  return (
    <div
      onClick={() => onSelect(item)}
      className="group relative h-[190px] sm:h-[210px] lg:h-[225px] rounded-2xl overflow-hidden shadow-[0_4px_18px_rgba(0,0,0,0.07)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.18)] transition-all duration-500 cursor-pointer border border-slate-200/60 bg-slate-900 select-none"
    >
      {/* Background Image */}
      <img
        src={item.image}
        alt={item.title}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
      />

      {/* Dark Scrim Overlay for Crystal-Clear Text Legibility */}
      <div className="absolute inset-0 bg-black/35 group-hover:bg-black/45 transition-colors duration-300 pointer-events-none" />

      {/* Prominent Centered White Serif Typography */}
      <div className="absolute inset-0 flex items-center justify-center p-4 text-center z-10 pointer-events-none">
        <h3 className="font-serif text-xl sm:text-2xl lg:text-[25px] font-bold text-white tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] group-hover:scale-105 transition-transform duration-300">
          {item.title}
        </h3>
      </div>
    </div>
  );
}
