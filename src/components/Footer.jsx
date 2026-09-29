import React from 'react';
import { schoolContact } from '../data/siteData';

export default function Footer({ setHeroMode }) {
  return (
    <footer className="bg-[#0B0F17] text-white pt-16 pb-12 border-t border-white/10">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-12">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-white/10">
          {/* Brand & About */}
          <div className="lg:col-span-4 space-y-6">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setHeroMode?.('home-1');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-block bg-white p-2.5 rounded-2xl shadow-md"
            >
              <img
                src="/jrs-logo.png"
                alt="JRS International School"
                className="h-14 sm:h-16 w-auto object-contain"
              />
            </a>
            <p className="text-slate-300 text-sm leading-relaxed max-w-sm">
              JRS International School features comprehensive coverage of the CBSE curriculum with IIT and NIT Foundation, blending traditional Indian ethos with global educational standards.
            </p>
            <div className="flex items-center gap-3 text-sm">
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#DC2626]"></span>
              <span className="text-[#16A34A] font-semibold text-xs tracking-wider uppercase">
                CBSE Affiliation # 3630478
              </span>
            </div>
          </div>

          {/* Explore Links */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-white font-semibold text-base tracking-wide uppercase font-sans text-xs">
              Explore
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setHeroMode?.('home-1');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#DC2626] transition-colors cursor-pointer"
                >
                  Home 1 (Image Hero)
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setHeroMode?.('home-2');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#DC2626] transition-colors cursor-pointer"
                >
                  Home 2 (Video Hero)
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#DC2626] transition-colors">
                  About JRS
                </a>
              </li>
              <li>
                <a href="#academics" className="hover:text-[#DC2626] transition-colors">
                  CBSE & IIT/NIT Foundation
                </a>
              </li>
              <li>
                <a href="#activities" className="hover:text-[#DC2626] transition-colors">
                  Co-Curricular & Sports
                </a>
              </li>
              <li>
                <a href="#campus" className="hover:text-[#DC2626] transition-colors">
                  Campus Facilities
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#DC2626] transition-colors">
                  Campus Gallery
                </a>
              </li>
              <li>
                <a
                  href={schoolContact.brochureUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#DC2626] transition-colors inline-flex items-center gap-1 font-semibold text-[#DC2626]"
                >
                  Download Brochure ↗
                </a>
              </li>
            </ul>
          </div>

          {/* Admissions Links */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-white font-semibold text-base tracking-wide uppercase font-sans text-xs">
              Admissions
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <a href="#admissions" className="hover:text-[#DC2626] transition-colors">
                  Admissions Open 2026–27
                </a>
              </li>
              <li>
                <a href="#admissions" className="hover:text-[#DC2626] transition-colors">
                  Online Enquiry Form
                </a>
              </li>
              <li>
                <a
                  href={`tel:${schoolContact.primaryPhone}`}
                  className="hover:text-[#DC2626] transition-colors inline-flex items-center gap-1"
                >
                  Call: +91 8367777545
                </a>
              </li>
              <li>
                <a
                  href={`tel:${schoolContact.secondaryPhone}`}
                  className="hover:text-[#DC2626] transition-colors inline-flex items-center gap-1"
                >
                  Call: +91 8367777548
                </a>
              </li>
              <li>
                <a href="#campus" className="hover:text-[#DC2626] transition-colors">
                  Schedule Campus Walk
                </a>
              </li>
              <li>
                <a
                  href="https://jrsinternationalschooluppal.com/cbse/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#DC2626] transition-colors text-xs text-slate-400"
                >
                  Mandatory Public Disclosure ↗
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-white font-semibold text-base tracking-wide uppercase font-sans text-xs">
              Get in Touch
            </h3>
            <div className="space-y-3 text-sm text-slate-300">
              <p className="leading-relaxed">
                {schoolContact.address}
              </p>
              <div className="space-y-1.5 pt-1">
                <p>
                  <strong className="text-white font-medium">Phone: </strong>
                  <a href={`tel:${schoolContact.primaryPhone}`} className="hover:text-[#DC2626]">
                    +91 8367777545
                  </a>
                  {', '}
                  <a href={`tel:${schoolContact.secondaryPhone}`} className="hover:text-[#DC2626]">
                    8367777548
                  </a>
                </p>
                <p>
                  <strong className="text-white font-medium">Email: </strong>
                  <a href={`mailto:${schoolContact.email}`} className="hover:text-[#DC2626]">
                    {schoolContact.email}
                  </a>
                </p>
                <p>
                  <strong className="text-white font-medium">Alt Email: </strong>
                  <a href={`mailto:${schoolContact.secondaryEmail}`} className="hover:text-[#DC2626]">
                    {schoolContact.secondaryEmail}
                  </a>
                </p>
                <p>
                  <strong className="text-white font-medium">Hours: </strong>
                  {schoolContact.timing}
                </p>
              </div>
            </div>

            {/* Social Icons */}
            <div className="pt-2 flex items-center gap-3">
              {[
                { label: 'Facebook', href: schoolContact.social.facebook, icon: 'f' },
                { label: 'Twitter', href: schoolContact.social.twitter, icon: '𝕏' },
                { label: 'Instagram', href: schoolContact.social.instagram, icon: '📸' },
                { label: 'YouTube', href: schoolContact.social.youtube, icon: '▶' },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#DC2626] hover:text-white text-slate-200 flex items-center justify-center text-xs font-bold transition-all duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} JRS International School (CBSE Affiliation # 3630478). All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-6">
            <a
              href="https://jrsinternationalschooluppal.com/cbse/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Mandatory Disclosure
            </a>
            <span className="text-slate-600">•</span>
            <a
              href="https://jrsinternationalschooluppal.com/careers/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Careers
            </a>
            <span className="text-slate-600">•</span>
            <a
              href={schoolContact.brochureUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              School Prospectus
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
