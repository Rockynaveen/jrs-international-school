import React, { useState, useEffect } from 'react';
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

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isHomePage = location.pathname === '/' || location.pathname === '';

  // Track scroll position for header glassmorphism transition
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (item, e) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (isHomePage) {
      if (item.path === '/') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
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
          : 'bg-transparent border-b border-transparent py-4'
      }`}
    >
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
            className={`inline-flex items-center gap-2 px-6 sm:px-7 py-2.5 sm:py-3 rounded-full text-xs sm:text-[13px] font-bold tracking-wider uppercase transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 cursor-pointer ${
              isScrolled || !isHomePage
                ? 'bg-[#DC2626] text-white hover:bg-[#B91C1C]'
                : 'bg-[#DC2626] text-white hover:bg-white hover:text-[#DC2626]'
            }`}
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
          mobileMenuOpen ? 'max-h-[600px] border-b border-slate-200 shadow-2xl' : 'max-h-0'
        } bg-white text-[#111827]`}
      >
        <div className="px-6 py-5 space-y-1 divide-y divide-slate-100">
          <div className="space-y-1 pb-3">
            {navItems.map((item) => {
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
              className="w-full text-center block bg-[#DC2626] text-white py-3.5 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-[#B91C1C] transition-colors shadow-sm"
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
