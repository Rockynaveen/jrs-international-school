import React, { useState, useEffect, useCallback } from 'react';

const galleryItems = [
  // ── ROW 1 (4 items) ──
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

  // ── ROW 2 (4 items) ──
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
    image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=1200&q=80',
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

  // ── ROW 3 (3 wider items) ──
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

  const row1 = galleryItems.slice(0, 4);
  const row2 = galleryItems.slice(4, 8);
  const row3 = galleryItems.slice(8, 11);

  return (
    <section
      id="gallery"
      className="py-14 sm:py-18 lg:py-20 bg-[#FCFAF7] relative overflow-hidden border-b border-slate-200/80"
    >
      {/* Decorative Soft Ambient Blobs (Matches screenshot atmosphere) */}
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
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <p className="text-[11px] sm:text-xs font-sans font-bold tracking-[0.26em] text-slate-500 uppercase">
            GALLERY
          </p>
          <div className="w-7 h-[2.5px] bg-[#B91C1C] mx-auto mt-1.5 mb-3 rounded-full" />
          
          <h2 className="font-serif text-3xl sm:text-4xl md:text-[42px] lg:text-[46px] font-bold text-[#1E293B] tracking-tight leading-tight">
            Moments at <span className="text-[#B91C1C] font-extrabold">JRS</span>
          </h2>

          <p className="text-sm sm:text-[15px] lg:text-base text-slate-600 font-sans max-w-2xl mx-auto mt-3 font-normal leading-relaxed">
            A glimpse into the vibrant life at JRS International School — where learning, creativity and growth come together.
          </p>
        </div>

        {/* ── PHOTO GRID (4 + 4 + 3 Exact Screenshot Match) ── */}
        <div className="space-y-3.5 sm:space-y-4">
          {/* ROW 1: 4 Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
            {row1.map((item) => (
              <CardItem key={item.id} item={item} onSelect={setSelectedItem} heightClass="h-[210px] sm:h-[225px] lg:h-[235px]" />
            ))}
          </div>

          {/* ROW 2: 4 Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
            {row2.map((item) => (
              <CardItem key={item.id} item={item} onSelect={setSelectedItem} heightClass="h-[210px] sm:h-[225px] lg:h-[235px]" />
            ))}
          </div>

          {/* ROW 3: 3 Wider Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4">
            {row3.map((item) => (
              <CardItem key={item.id} item={item} onSelect={setSelectedItem} heightClass="h-[220px] sm:h-[240px] lg:h-[255px]" />
            ))}
          </div>
        </div>

        {/* ── BOTTOM BUTTON: "View More Photos →" (With Sunburst Spark Accents) ── */}
        <div className="text-center mt-10 sm:mt-12 flex items-center justify-center">
          <div className="relative inline-flex items-center justify-center">
            {/* Left Sunburst Sparks */}
            <span className="hidden sm:inline-block text-[#DC2626]/70 mr-3 text-sm select-none" aria-hidden="true">
              ╲ ─ ╱
            </span>

            <button
              type="button"
              onClick={() => setShowFullModal(true)}
              className="inline-flex items-center gap-2 bg-[#B91C1C] hover:bg-[#16A34A] text-white px-7 sm:px-8 py-3.5 rounded-full text-xs sm:text-[13px] font-bold tracking-wider transition-all duration-300 shadow-md hover:-translate-y-0.5 cursor-pointer"
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

      {/* ── LIGHTBOX MODAL (On click of any card) ── */}
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
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#B91C1C] text-white flex items-center gap-2">
                  <span className="w-4 h-4 flex items-center justify-center">{selectedItem.icon}</span>
                  <span>{selectedItem.badge}</span>
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
                <h3 className="font-bold text-base sm:text-lg">
                  {selectedItem.title}
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed">
                  {selectedItem.description}
                </p>
              </div>

              <a
                href="#admissions"
                onClick={() => setSelectedItem(null)}
                className="inline-flex items-center gap-1.5 bg-[#B91C1C] hover:bg-[#16A34A] text-white px-5 py-2.5 rounded-full text-xs font-semibold transition-colors cursor-pointer shrink-0"
              >
                <span>Book Campus Tour</span>
                <span>›</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* ── "VIEW MORE PHOTOS" FULL ARCHIVE MODAL ── */}
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
                <span className="text-[11px] font-bold tracking-widest uppercase text-[#B91C1C]">
                  PHOTO ARCHIVE
                </span>
                <h3 className="font-serif font-bold text-xl sm:text-2xl text-[#0B0F17]">
                  Moments at JRS International School
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
                      <div className="absolute bottom-3 left-3 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-white text-xs font-semibold">
                        <span className="w-4 h-4 flex items-center justify-center">{item.icon}</span>
                        <span>{item.badge}</span>
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
                className="bg-[#B91C1C] hover:bg-[#16A34A] text-white px-5 py-2 rounded-full font-semibold transition-all"
              >
                Apply for Admission
              </a>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}

// ── SUB-COMPONENT: Individual Gallery Card (Pixel-Perfect Reference Match) ──
function CardItem({ item, onSelect, heightClass }) {
  return (
    <div
      onClick={() => onSelect(item)}
      className={`group relative w-full ${heightClass} rounded-2xl overflow-hidden shadow-[0_4px_16px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.16)] transition-all duration-300 cursor-pointer bg-slate-100 border border-slate-200/60`}
    >
      {/* Background Image */}
      <img
        src={item.image}
        alt={item.title}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />

      {/* Gentle Bottom Gradient Scrim */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent pointer-events-none" />

      {/* Bottom-Left Floating Glassmorphism Pill Badge */}
      <div className="absolute bottom-3 left-3 sm:bottom-3.5 sm:left-3.5 z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/45 hover:bg-black/60 backdrop-blur-md border border-white/25 text-white shadow-xs transition-colors">
          {/* Circular Icon Container */}
          <div className="w-5 h-5 rounded-full border border-white/40 flex items-center justify-center shrink-0 text-white/95">
            {item.icon}
          </div>
          {/* Title */}
          <span className="text-xs sm:text-[13px] font-sans font-semibold tracking-wide text-white drop-shadow-xs">
            {item.badge}
          </span>
        </div>
      </div>
    </div>
  );
}
