import React, { useState, useEffect, useRef } from 'react';

const otherNavItems = [
  { name: 'About', id: 'about', href: '#about' },
  { name: 'Academics', id: 'academics', href: '#academics' },
  { name: 'Campus', id: 'campus', href: '#campus' },
  { name: 'Gallery', id: 'gallery', href: '#gallery' },
  { name: 'Contact', id: 'contact', href: '#contact' },
];

export default function Header({ heroMode = 'home-1', setHeroMode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home-1');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [homeDropdownOpen, setHomeDropdownOpen] = useState(false);
  const [mobileHomeExpanded, setMobileHomeExpanded] = useState(true);
  const dropdownRef = useRef(null);

  // Since video section starts directly below the header on home-2, header remains on a clean white background
  const isDarkHeader = false;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sectionIds = ['about', 'academics', 'campus', 'gallery', 'contact'];
      let found = false;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(id);
            found = true;
            break;
          }
        }
      }
      if (!found && window.scrollY < 400) {
        setActiveSection(heroMode);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [heroMode]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setHomeDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelectHero = (mode) => {
    if (setHeroMode) {
      setHeroMode(mode);
    }
    setActiveSection(mode);
    setHomeDropdownOpen(false);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isHomeActive = activeSection === 'home-1' || activeSection === 'home-2';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || heroMode === 'home-2'
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-xs'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 h-22 sm:h-24 flex items-center justify-between">
        
        {/* LEFT: JRS Logo (Enlarged with zero py) */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center p-0 py-0 group focus:outline-none transition-transform shrink-0"
          aria-label="JRS International School Homepage"
        >
          <img
            src="/jrs-logo.png"
            alt="JRS International School"
            className="h-14 sm:h-16 md:h-[68px] w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
          />
        </a>

        {/* CENTER: Clean Navigation Links with Home Dropdown */}
        <nav
          className="hidden md:flex items-center gap-6 lg:gap-8"
          aria-label="Primary Navigation"
        >
          {/* HOME DROPDOWN TRIGGER */}
          <div
            className="relative"
            ref={dropdownRef}
            onMouseEnter={() => setHomeDropdownOpen(true)}
            onMouseLeave={() => setHomeDropdownOpen(false)}
          >
            <button
              type="button"
              onClick={() => setHomeDropdownOpen(!homeDropdownOpen)}
              className={`inline-flex items-center gap-1.5 text-[15px] font-modern font-semibold transition-all duration-150 py-2 cursor-pointer relative ${
                isDarkHeader
                  ? isHomeActive
                    ? 'text-[#F7C95E] after:content-[""] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2.5px] after:bg-[#F7C95E] after:rounded-full'
                    : 'text-white/90 hover:text-white'
                  : isHomeActive
                  ? 'text-[#0B6DB7] after:content-[""] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2.5px] after:bg-[#0B6DB7] after:rounded-full'
                  : 'text-[#072B4F] hover:text-[#0B6DB7]'
              }`}
              aria-expanded={homeDropdownOpen}
              aria-haspopup="true"
            >
              <span>Home</span>
              <svg
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  homeDropdownOpen ? 'rotate-180' : ''
                }`}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {/* FLOATING DROPDOWN MENU */}
            <div
              className={`absolute top-full left-0 pt-2 w-72 transition-all duration-200 z-50 ${
                homeDropdownOpen
                  ? 'opacity-100 translate-y-0 pointer-events-auto visible'
                  : 'opacity-0 -translate-y-2 pointer-events-none invisible'
              }`}
            >
              <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-2 text-[#072B4F]">
                {/* Option 1: Home 1 (Image Hero) */}
                <button
                  type="button"
                  onClick={() => handleSelectHero('home-1')}
                  className={`w-full flex items-start gap-3 p-3 rounded-xl transition-colors text-left cursor-pointer ${
                    heroMode === 'home-1'
                      ? 'bg-[#E3F1EB]/70 border border-[#0B6DB7]/20'
                      : 'hover:bg-slate-50 border border-transparent'
                  }`}
                >
                  <div
                    className={`w-9 h-9 rounded-lg flex items-center justify-center text-lg shrink-0 mt-0.5 ${
                      heroMode === 'home-1' ? 'bg-[#0B6DB7] text-white' : 'bg-slate-100 text-slate-700'
                    }`}
                  >
                    🖼️
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-sm text-[#072B4F]">Home 1</span>
                      {heroMode === 'home-1' && (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#0B6DB7] text-white">
                          Active
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-500 mt-0.5 leading-snug">
                      Background Image Hero Section
                    </p>
                  </div>
                </button>

                {/* Option 2: Home 2 (Video Hero) */}
                <button
                  type="button"
                  onClick={() => handleSelectHero('home-2')}
                  className={`w-full flex items-start gap-3 p-3 rounded-xl transition-colors text-left cursor-pointer mt-1 ${
                    heroMode === 'home-2'
                      ? 'bg-[#E3F1EB]/70 border border-[#0B6DB7]/20'
                      : 'hover:bg-slate-50 border border-transparent'
                  }`}
                >
                  <div
                    className={`w-9 h-9 rounded-lg flex items-center justify-center text-lg shrink-0 mt-0.5 ${
                      heroMode === 'home-2' ? 'bg-[#0B6DB7] text-white' : 'bg-slate-100 text-slate-700'
                    }`}
                  >
                    🎬
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-sm text-[#072B4F]">Home 2</span>
                      {heroMode === 'home-2' && (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#0B6DB7] text-white">
                          Active
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-500 mt-0.5 leading-snug">
                      Cinematic Video Hero Section
                    </p>
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* OTHER NAV ITEMS */}
          {otherNavItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setActiveSection(item.id)}
                className={`text-[15px] font-modern font-semibold transition-all duration-150 relative py-2 ${
                  isDarkHeader
                    ? isActive
                      ? 'text-[#F7C95E] after:content-[""] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2.5px] after:bg-[#F7C95E] after:rounded-full'
                      : 'text-white/90 hover:text-white'
                    : isActive
                    ? 'text-[#0B6DB7] after:content-[""] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2.5px] after:bg-[#0B6DB7] after:rounded-full'
                    : 'text-[#072B4F] hover:text-[#0B6DB7]'
                }`}
              >
                <span>{item.name}</span>
              </a>
            );
          })}
        </nav>

        {/* RIGHT: Apply Now & Search Icon */}
        <div className="flex items-center gap-3 sm:gap-4 shrink-0">
          <a
            href="#admissions"
            className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer ${
              isDarkHeader
                ? 'bg-[#F7C95E] text-[#072B4F] hover:bg-white'
                : 'bg-[#072B4F] text-white hover:bg-[#0B6DB7]'
            }`}
          >
            <span>Apply Now</span>
            <span className="text-xs font-normal">›</span>
          </a>

          {/* Search Button */}
          <button
            type="button"
            onClick={() => setSearchOpen(!searchOpen)}
            className={`p-2 rounded-full transition-colors cursor-pointer ${
              isDarkHeader
                ? 'text-white hover:text-[#F7C95E] hover:bg-white/10'
                : 'text-[#072B4F] hover:text-[#0B6DB7] hover:bg-slate-100/70'
            }`}
            aria-label="Search website"
          >
            <svg
              className="w-4 h-4 fill-none stroke-current stroke-2"
              viewBox="0 0 24 24"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-2 rounded-xl transition-colors ${
              isDarkHeader
                ? 'text-white hover:bg-white/10'
                : 'text-[#072B4F] hover:bg-slate-100/70'
            }`}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <div className="w-5 h-4 relative flex flex-col justify-between">
              <span
                className={`w-full h-0.5 rounded-full transition-all duration-300 ${
                  isDarkHeader ? 'bg-white' : 'bg-[#072B4F]'
                } ${mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}
              />
              <span
                className={`w-full h-0.5 rounded-full transition-all duration-300 ${
                  isDarkHeader ? 'bg-white' : 'bg-[#072B4F]'
                } ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}
              />
              <span
                className={`w-full h-0.5 rounded-full transition-all duration-300 ${
                  isDarkHeader ? 'bg-white' : 'bg-[#072B4F]'
                } ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Quick Search Drawer */}
      {searchOpen && (
        <div className="bg-white/95 backdrop-blur-md border-t border-slate-100 py-3 px-6 shadow-md">
          <div className="max-w-[800px] mx-auto flex items-center gap-3">
            <input
              type="text"
              placeholder="Search curriculum, admissions, campus facilities, events..."
              className="w-full px-4 py-2 bg-slate-50 rounded-full border border-slate-200 text-sm text-[#152A40] outline-none focus:border-[#0B6DB7] focus:bg-white"
              autoFocus
            />
            <button
              onClick={() => setSearchOpen(false)}
              className="text-xs font-semibold text-slate-500 hover:text-slate-700 px-3 py-1.5"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Mobile Drawer Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          mobileMenuOpen ? 'max-h-[600px] border-b border-slate-200' : 'max-h-0'
        } bg-white shadow-xl`}
      >
        <div className="px-6 py-4 space-y-1">
          {/* Mobile Home Expandable Group */}
          <div className="rounded-xl border border-slate-100 overflow-hidden mb-2">
            <button
              type="button"
              onClick={() => setMobileHomeExpanded(!mobileHomeExpanded)}
              className="w-full flex items-center justify-between px-4 py-2.5 bg-slate-50 text-sm font-semibold text-[#072B4F]"
            >
              <span className="flex items-center gap-2">
                <span>🏠</span>
                <span>Home Hero Versions</span>
              </span>
              <svg
                className={`w-4 h-4 text-slate-500 transition-transform ${
                  mobileHomeExpanded ? 'rotate-180' : ''
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {mobileHomeExpanded && (
              <div className="p-2 space-y-1 bg-white">
                <button
                  type="button"
                  onClick={() => handleSelectHero('home-1')}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors text-left ${
                    heroMode === 'home-1'
                      ? 'bg-[#E3F1EB] text-[#0B6DB7] font-semibold'
                      : 'text-[#152A40] hover:bg-slate-50'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span>🖼️</span>
                    <span>Home 1 (Image Hero)</span>
                  </span>
                  {heroMode === 'home-1' && (
                    <span className="text-xs bg-[#0B6DB7] text-white px-2 py-0.5 rounded-full">
                      ✓
                    </span>
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => handleSelectHero('home-2')}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors text-left ${
                    heroMode === 'home-2'
                      ? 'bg-[#E3F1EB] text-[#0B6DB7] font-semibold'
                      : 'text-[#152A40] hover:bg-slate-50'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span>🎬</span>
                    <span>Home 2 (Video Hero)</span>
                  </span>
                  {heroMode === 'home-2' && (
                    <span className="text-xs bg-[#0B6DB7] text-white px-2 py-0.5 rounded-full">
                      ✓
                    </span>
                  )}
                </button>
              </div>
            )}
          </div>

          {/* Other Nav Items */}
          {otherNavItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={() => {
                  setActiveSection(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`block px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                  isActive
                    ? 'text-[#0B6DB7] bg-[#E3F1EB]'
                    : 'text-[#152A40] hover:text-[#0B6DB7] hover:bg-slate-50'
                }`}
              >
                {item.name}
              </a>
            );
          })}

          <div className="pt-4 border-t border-slate-100 flex flex-col gap-2">
            <a
              href="#admissions"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center bg-[#072B4F] text-white py-3 rounded-full text-sm font-semibold hover:bg-[#0B6DB7]"
            >
              Apply Now ›
            </a>
            <div className="text-xs text-center text-slate-400 pt-1">
              Korremula X Road, Narapally, Near Uppal Depot, Hyderabad • +91 8367777545, 8367777548
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
