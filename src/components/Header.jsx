import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const navItems = [
  { name: 'HOME', path: '/', sectionId: 'home' },
  { name: 'ABOUT', path: '/about', sectionId: 'about' },
  { name: 'ACADEMICS', path: '/academics', sectionId: 'academics' },
  { name: 'ADMISSIONS', path: '/admissions', sectionId: 'admissions' },
  { name: 'STUDENT LIFE', path: '/student-life', sectionId: 'activities' },
  { name: 'CAMPUS', path: '/campus', sectionId: 'campus' },
  { name: 'EVENTS', path: '/events', sectionId: 'events' },
  { name: 'CONTACT', path: '/contact', sectionId: 'admissions' },
];

export default function Header({ heroMode = 'home-1', setHeroMode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [homeDropdownOpen, setHomeDropdownOpen] = useState(false);
  const [mobileHomeExpanded, setMobileHomeExpanded] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  const isHomePage =
    location.pathname === '/' ||
    location.pathname === '' ||
    location.pathname === '/home-1' ||
    location.pathname === '/home-2';

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

  // Track scroll position for header glassmorphism transition
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleHomeSelect = (mode, path, e) => {
    if (e) e.preventDefault();
    setHeroMode?.(mode);
    setHomeDropdownOpen(false);
    setMobileMenuOpen(false);

    if (
      location.pathname === path ||
      (path === '/' && (location.pathname === '/home-1' || location.pathname === '/'))
    ) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate(path);
    }
  };

  const handleNavClick = (item, e) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (item.name === 'HOME') {
      if (isHomePage) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        navigate('/');
      }
      return;
    }

    if (isHomePage) {
      const el = document.getElementById(item.sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        navigate(item.path);
      }
    } else {
      navigate(item.path);
    }
  };

  const isItemActive = (item) => {
    if (item.path === '/') {
      return isHomePage;
    }
    return location.pathname === item.path;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || !isHomePage
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm py-2'
          : 'bg-gradient-to-b from-black/60 via-black/20 to-transparent border-b border-white/10 py-3.5'
      }`}
    >
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#DC2626] via-[#16A34A] to-[#DC2626]" />
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-between">
        
        {/* LEFT: Official JRS Logo */}
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            if (isHomePage) {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
              navigate('/');
            }
          }}
          className="flex items-center group focus:outline-none transition-transform"
          aria-label="JRS International School Homepage"
        >
          <div
            className={`transition-all duration-300 ${
              isScrolled || !isHomePage
                ? 'p-0'
                : 'bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-2xl shadow-xs border border-white/50 group-hover:bg-white'
            }`}
          >
            <img
              src="/jrs-logo.png"
              alt="JRS International School"
              className="h-10 sm:h-12 md:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </div>
        </a>

        {/* CENTER: Clean Minimal Editorial Navigation */}
        <nav
          className="hidden xl:flex items-center gap-7 2xl:gap-8"
          aria-label="Primary Navigation"
        >
          {navItems.map((item) => {
            const active = isItemActive(item);

            // Special Dropdown for HOME item
            if (item.name === 'HOME') {
              return (
                <div
                  key={item.name}
                  ref={dropdownRef}
                  className="relative py-2"
                  onMouseEnter={() => setHomeDropdownOpen(true)}
                  onMouseLeave={() => setHomeDropdownOpen(false)}
                >
                  <button
                    type="button"
                    onClick={() => setHomeDropdownOpen((prev) => !prev)}
                    className={`inline-flex items-center gap-1.5 text-[13px] font-sans font-semibold tracking-[0.14em] uppercase transition-all duration-200 relative cursor-pointer ${
                      isScrolled || !isHomePage
                        ? active
                          ? 'text-[#DC2626] font-bold after:content-[""] after:absolute after:bottom-[-2px] after:left-0 after:right-0 after:h-[2.5px] after:bg-[#DC2626] after:rounded-full'
                          : 'text-[#111827] hover:text-[#DC2626]'
                        : active
                        ? 'text-white font-bold after:content-[""] after:absolute after:bottom-[-2px] after:left-0 after:right-0 after:h-[2.5px] after:bg-[#DC2626] after:rounded-full drop-shadow-sm'
                        : 'text-white/90 hover:text-white drop-shadow-xs'
                    }`}
                    aria-expanded={homeDropdownOpen}
                    aria-haspopup="true"
                  >
                    <span>{item.name}</span>
                    <svg
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        homeDropdownOpen ? 'rotate-180 text-[#DC2626]' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {/* Desktop Dropdown Menu Card */}
                  <div
                    className={`absolute top-full left-0 pt-2 w-72 transition-all duration-200 z-50 ${
                      homeDropdownOpen
                        ? 'opacity-100 translate-y-0 visible pointer-events-auto'
                        : 'opacity-0 -translate-y-2 invisible pointer-events-none'
                    }`}
                  >
                    <div className="bg-white/98 backdrop-blur-xl border border-slate-200/90 rounded-2xl shadow-[0_20px_45px_rgba(0,0,0,0.18)] p-2">
                      {/* Option 1: Home 1 (Image Slider) */}
                      <button
                        type="button"
                        onClick={(e) => handleHomeSelect('home-1', '/', e)}
                        className={`w-full text-left p-3 rounded-xl transition-all flex items-start gap-3.5 cursor-pointer ${
                          heroMode === 'home-1' && isHomePage
                            ? 'bg-red-50/80 border border-red-200/80 text-[#DC2626]'
                            : 'hover:bg-slate-50 text-slate-800'
                        }`}
                      >
                        <div
                          className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${
                            heroMode === 'home-1' && isHomePage
                              ? 'bg-[#DC2626] text-white shadow-xs'
                              : 'bg-slate-100 text-slate-600'
                          }`}
                        >
                          <svg
                            className="w-5 h-5 fill-none stroke-currentColor stroke-2"
                            viewBox="0 0 24 24"
                          >
                            <rect x="3" y="3" width="18" height="18" rx="2" />
                            <circle cx="8.5" cy="8.5" r="1.5" />
                            <path d="M21 15l-5-5L5 21" />
                          </svg>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <span className="font-bold text-xs font-sans tracking-wide">
                              Home 1 (Image Slider)
                            </span>
                            {heroMode === 'home-1' && isHomePage && (
                              <span className="text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-full bg-red-100 text-[#DC2626]">
                                Active
                              </span>
                            )}
                          </div>
                          <p className="text-[11px] text-slate-500 font-sans mt-0.5 leading-snug">
                            Interactive photo carousel hero
                          </p>
                        </div>
                      </button>

                      {/* Option 2: Home 2 (Video Showcase) */}
                      <button
                        type="button"
                        onClick={(e) => handleHomeSelect('home-2', '/home-2', e)}
                        className={`w-full text-left p-3 rounded-xl transition-all flex items-start gap-3.5 cursor-pointer mt-1 ${
                          heroMode === 'home-2' && isHomePage
                            ? 'bg-red-50/80 border border-red-200/80 text-[#DC2626]'
                            : 'hover:bg-slate-50 text-slate-800'
                        }`}
                      >
                        <div
                          className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${
                            heroMode === 'home-2' && isHomePage
                              ? 'bg-[#DC2626] text-white shadow-xs'
                              : 'bg-slate-100 text-slate-600'
                          }`}
                        >
                          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                            <polygon points="5 3 19 12 5 21 5 3" />
                          </svg>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <span className="font-bold text-xs font-sans tracking-wide">
                              Home 2 (Video Hero)
                            </span>
                            <span className="text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-full bg-emerald-100 text-emerald-700">
                              HD Video
                            </span>
                          </div>
                          <p className="text-[11px] text-slate-500 font-sans mt-0.5 leading-snug">
                            Official campus walkthrough video
                          </p>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <a
                key={item.name}
                href={item.path}
                onClick={(e) => handleNavClick(item, e)}
                className={`text-[13px] font-sans font-semibold tracking-[0.14em] uppercase transition-all duration-200 relative py-2 ${
                  isScrolled || !isHomePage
                    ? active
                      ? 'text-[#DC2626] font-bold after:content-[""] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2.5px] after:bg-[#DC2626] after:rounded-full'
                      : 'text-[#111827] hover:text-[#DC2626]'
                    : active
                    ? 'text-white font-bold after:content-[""] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2.5px] after:bg-[#DC2626] after:rounded-full drop-shadow-sm'
                    : 'text-white/90 hover:text-white drop-shadow-xs'
                }`}
              >
                {item.name}
              </a>
            );
          })}
        </nav>

        {/* RIGHT: Apply Now Button & Mobile Hamburger */}
        <div className="flex items-center gap-3 sm:gap-4">
          <a
            href={isHomePage ? '#admissions' : '/admissions'}
            onClick={(e) => {
              if (isHomePage) {
                e.preventDefault();
                const el = document.getElementById('admissions');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
                else navigate('/admissions');
              }
            }}
            className="inline-flex items-center gap-2 px-6 sm:px-7 py-2.5 sm:py-3 rounded-full text-xs sm:text-[13px] font-bold tracking-wider uppercase transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer bg-gradient-to-r from-[#DC2626] to-[#B91C1C] hover:from-[#16A34A] hover:to-[#15803D] text-white"
          >
            <span>Apply Now</span>
            <span className="text-xs font-normal">→</span>
          </a>

          {/* Modern Mobile Menu Hamburger Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`xl:hidden p-2.5 rounded-xl transition-colors cursor-pointer ${
              isScrolled || !isHomePage
                ? 'text-[#111827] hover:bg-slate-100'
                : 'text-white bg-black/30 hover:bg-black/50 border border-white/20 backdrop-blur-md'
            }`}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            <div className="w-5 h-4 relative flex flex-col justify-between">
              <span
                className={`w-full h-0.5 rounded-full transition-all duration-300 ${
                  isScrolled || !isHomePage ? 'bg-[#111827]' : 'bg-white'
                } ${mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}
              />
              <span
                className={`w-full h-0.5 rounded-full transition-all duration-300 ${
                  isScrolled || !isHomePage ? 'bg-[#111827]' : 'bg-white'
                } ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}
              />
              <span
                className={`w-full h-0.5 rounded-full transition-all duration-300 ${
                  isScrolled || !isHomePage ? 'bg-[#111827]' : 'bg-white'
                } ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* MOBILE OVERLAY NAVIGATION DRAWER */}
      <div
        className={`xl:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          mobileMenuOpen ? 'max-h-[680px] border-b border-slate-200 shadow-2xl' : 'max-h-0'
        } bg-white text-[#111827]`}
      >
        <div className="px-6 py-5 space-y-1 divide-y divide-slate-100">
          <div className="space-y-1 pb-3">
            {/* Mobile HOME item with sub-options */}
            <div className="rounded-xl overflow-hidden bg-slate-50/80 border border-slate-100 mb-2">
              <button
                type="button"
                onClick={() => setMobileHomeExpanded((prev) => !prev)}
                className="w-full flex items-center justify-between px-4 py-3 text-sm font-semibold tracking-wider text-[#111827] cursor-pointer"
              >
                <span className="flex items-center gap-2">
                  <span className={isHomePage ? 'text-[#DC2626] font-bold' : ''}>HOME</span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-red-100 text-[#DC2626] uppercase">
                    {heroMode === 'home-2' ? 'Home 2 (Video)' : 'Home 1 (Slider)'}
                  </span>
                </span>
                <svg
                  className={`w-4 h-4 text-slate-500 transition-transform ${
                    mobileHomeExpanded ? 'rotate-180 text-[#DC2626]' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {mobileHomeExpanded && (
                <div className="px-3 pb-3 space-y-1.5 border-t border-slate-200/60 pt-2.5">
                  <button
                    type="button"
                    onClick={(e) => handleHomeSelect('home-1', '/', e)}
                    className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-xs font-semibold cursor-pointer transition-colors ${
                      heroMode === 'home-1' && isHomePage
                        ? 'bg-[#DC2626] text-white shadow-xs'
                        : 'bg-white text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <span>🖼️ Home 1 (Image Slider)</span>
                    {heroMode === 'home-1' && isHomePage && <span className="font-bold">✓</span>}
                  </button>
                  <button
                    type="button"
                    onClick={(e) => handleHomeSelect('home-2', '/home-2', e)}
                    className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-xs font-semibold cursor-pointer transition-colors ${
                      heroMode === 'home-2' && isHomePage
                        ? 'bg-[#DC2626] text-white shadow-xs'
                        : 'bg-white text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <span>▶️ Home 2 (Video Showcase)</span>
                    {heroMode === 'home-2' && isHomePage && <span className="font-bold">✓</span>}
                  </button>
                </div>
              )}
            </div>

            {/* Other Nav Items */}
            {navItems
              .filter((item) => item.name !== 'HOME')
              .map((item) => {
                const active = isItemActive(item);
                return (
                  <a
                    key={item.name}
                    href={item.path}
                    onClick={(e) => handleNavClick(item, e)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold tracking-wider transition-colors ${
                      active
                        ? 'bg-[#FEF2F2] text-[#DC2626] font-bold'
                        : 'text-[#111827] hover:bg-slate-50 hover:text-[#DC2626]'
                    }`}
                  >
                    <span>{item.name}</span>
                    {active && <span className="w-2 h-2 rounded-full bg-[#DC2626]" />}
                  </a>
                );
              })}
          </div>

          <div className="pt-4 space-y-3">
            <a
              href="/admissions"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center block bg-gradient-to-r from-[#DC2626] to-[#B91C1C] hover:from-[#16A34A] hover:to-[#15803D] text-white py-3.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all"
            >
              Apply Now →
            </a>
            <div className="text-center text-xs text-slate-500 font-sans leading-relaxed">
              Korremula X Road, Narapally, Near Uppal Depot, Hyderabad
              <br />
              <span className="font-semibold text-[#111827]">+91 8367777545, 8367777548</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
