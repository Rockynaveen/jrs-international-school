import React from 'react';
import { Link } from 'react-router-dom';
import { images } from '../data/siteData';

export default function ImageStory() {
  return (
    <section className="bg-[#FFF8ED] py-10 overflow-hidden relative">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E3F1EB] text-[#06335F] text-xs font-bold tracking-[0.2em] uppercase shadow-xs">
            <span>✦</span> STORYTELLING THROUGH EXPERIENCE
          </div>

          <h2 className="font-display text-3xl sm:text-5xl text-[#152A40] leading-tight">
            Joyful environment where children learn{' '}
            <span className="text-[#EF8750] not-italic italic">
              confidently.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-[#68798B] pt-1">
            A welcoming space nurtures confidence, curiosity, and creativity as children
            learn, explore, and grow every day.
          </p>
        </div>

        {/* Asymmetric Overlapping Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative">
          {/* Main Large Image with Overlay White Card (cols 1 to 7) */}
          <div className="lg:col-span-7 relative">
            <div className="relative rounded-[36px] sm:rounded-[48px] overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] sm:aspect-[16/11] group">
              <img
                src={images.learningJoy}
                alt="Students learning with joy in modern classroom"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Overlapping White Floating Card (01 Learning with joy) */}
            <div className="relative lg:absolute -bottom-8 sm:-bottom-10 sm:left-8 bg-white/95 backdrop-blur-md p-6 sm:p-8 rounded-[28px] shadow-2xl border border-slate-100 max-w-sm mt-4 lg:mt-0 z-20 group hover:-translate-y-1 transition-transform duration-300">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-10 h-10 rounded-full bg-[#E3F1EB] text-[#06335F] font-display text-base font-bold flex items-center justify-center">
                  01
                </span>
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#0B6DB7] font-bold block">
                    Daily Rhythm
                  </span>
                  <span className="text-xs font-semibold text-[#152A40]">
                    Interactive & Practical
                  </span>
                </div>
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-semibold text-[#152A40] mb-2">
                Learning with joy
              </h3>
              <p className="text-xs sm:text-sm text-[#68798B] leading-relaxed">
                Every question opens a new door. Children learn best when they are active
                explorers of their environment rather than passive listeners.
              </p>
            </div>
          </div>

          {/* Beside it: Yellow Card & Navy Card (cols 8 to 12) */}
          <div className="lg:col-span-5 flex flex-col gap-6 pt-6 lg:pt-0">
            {/* Yellow Card: Growing confident */}
            <div className="bg-[#F7C95E] text-[#06335F] rounded-[32px] sm:rounded-[36px] p-8 sm:p-10 shadow-lg border-2 border-white relative overflow-hidden group hover:-translate-y-1.5 transition-all duration-300">
              <div className="relative z-10 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#06335F]/80">
                    ✦ CHARACTER & LEADERSHIP
                  </span>
                  <span className="w-8 h-8 rounded-full bg-white/70 flex items-center justify-center text-sm font-bold text-[#06335F]">
                    ✓
                  </span>
                </div>
                <h3 className="font-display text-3xl sm:text-4xl font-normal leading-tight">
                  Growing
                  <br />
                  <span className="font-bold underline decoration-[#06335F]/30 decoration-wavy">
                    confident.
                  </span>
                </h3>
                <p className="text-sm text-[#06335F]/90 leading-relaxed pt-1">
                  From elocution to team sports, every student is encouraged
                  to speak up, voice their perspective, and lead with empathy.
                </p>
                <div className="pt-2">
                  <Link
                    to="/student-life"
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#06335F] hover:text-[#0B6DB7] transition-colors"
                  >
                    <span>Discover Student Life</span>
                    <span className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-xs">
                      ↗
                    </span>
                  </Link>
                </div>
              </div>
              <div
                className="absolute -right-6 -bottom-6 w-32 h-32 rounded-full bg-white/20 pointer-events-none group-hover:scale-125 transition-transform duration-500"
                aria-hidden="true"
              />
            </div>

            {/* Navy Card: Curious minds */}
            <div className="bg-[#06335F] text-white rounded-[32px] sm:rounded-[36px] p-8 sm:p-10 shadow-lg border-2 border-[#0B6DB7]/40 relative overflow-hidden group hover:-translate-y-1.5 transition-all duration-300">
              <div className="relative z-10 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#F7C95E]">
                    ✦ SCIENTIFIC INQUIRY
                  </span>
                  <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-sm font-bold text-[#F7C95E]">
                    🔬
                  </span>
                </div>
                <h3 className="font-display text-3xl sm:text-4xl font-normal leading-tight text-white">
                  Curious
                  <br />
                  <span className="font-bold text-[#E3F1EB]">minds.</span>
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed pt-1">
                  Hands-on science labs, creative math workshops, and robotics labs
                  where hypothesis testing replaces rote memorization.
                </p>
                <div className="pt-2">
                  <Link
                    to="/academics"
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#F7C95E] hover:text-white transition-colors"
                  >
                    <span>View Academic Pathways</span>
                    <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-xs">
                      ↗
                    </span>
                  </Link>
                </div>
              </div>
              <div
                className="absolute -right-6 -bottom-6 w-32 h-32 rounded-full bg-[#0B6DB7]/30 pointer-events-none group-hover:scale-125 transition-transform duration-500"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
