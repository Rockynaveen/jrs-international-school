import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import AdmissionCTA from '../components/AdmissionCTA';
import { images } from '../data/siteData';

const corePillars = [
  {
    title: 'Our Philosophy',
    eyebrow: 'FOUNDATION',
    description:
      'We believe every child is born curious. Our purpose is to nurture that innate wonder into disciplined intellect, moral clarity, and enduring self-confidence.',
    image: images.learningJoy,
    accent: '#06335F',
  },
  {
    title: 'Interactive Learning',
    eyebrow: 'PEDAGOGY',
    description:
      'Replacing passive rote memorization with experiential science labs, collaborative group problem solving, and hands-on math investigations.',
    image: images.stemLearning,
    accent: '#0B6DB7',
  },
  {
    title: 'Indian Values',
    eyebrow: 'HERITAGE',
    description:
      'Deeply rooted in respect, humility, gratitude, and moral consciousness. Sanskrit shlokas, community service, and cultural reverence enrich daily campus life.',
    image: images.yogaZen,
    accent: '#EF8750',
  },
  {
    title: 'Global Perspective',
    eyebrow: 'HORIZONS',
    description:
      'Fostering intercultural fluency, multilingual communication, United Nations Sustainable Development Goals awareness, and worldwide technological readiness.',
    image: images.classroomModern,
    accent: '#F7C95E',
  },
  {
    title: 'Holistic Development',
    eyebrow: 'BALANCE',
    description:
      'Balancing scholastic achievements with performing arts, visual arts, skating, team athletics, and emotional wellbeing.',
    image: images.artPainting,
    accent: '#06335F',
  },
  {
    title: 'Future-ready Learning',
    eyebrow: 'INNOVATION',
    description:
      'Early computational literacy, design thinking frameworks, ecological stewardship, and critical media literacy to thrive in tomorrow’s world.',
    image: images.computerLab,
    accent: '#0B6DB7',
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-[#FFF8ED]">
      {/* Editorial Hero Header */}
      <section className="pt-12 sm:pt-20 pb-16 bg-[#FFF8ED] border-b border-slate-200/60 relative overflow-hidden">
        {/* Soft pastel background circles */}
        <div
          className="absolute top-0 right-10 w-96 h-96 rounded-full bg-[#E3F1EB] blur-3xl -z-10"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-0 left-10 w-80 h-80 rounded-full bg-[#F7C95E]/20 blur-3xl -z-10"
          aria-hidden="true"
        />

        <div className="max-w-[1240px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E3F1EB] text-[#06335F] text-xs font-bold tracking-[0.2em] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#EF8750]" />
              ABOUT JRS INTERNATIONAL SCHOOL
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl text-[#152A40] leading-[1.08] tracking-tight">
              Growing minds,
              <br />
              <em className="text-[#EF8750] not-italic italic">
                SHAPING FUTURES.
              </em>
            </h1>

            <p className="text-lg sm:text-2xl text-[#68798B] leading-relaxed font-normal pt-2">
              Founded on the belief that meaningful education nurtures character as
              deeply as intellect, JRS International School is Hyderabad’s vibrant
              sanctuary for holistic learning and creative leadership.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership / Vision Split Section */}
      <section className="py-20 sm:py-28 bg-white border-b border-slate-100">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Image Collage */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-[40px] overflow-hidden shadow-2xl border-4 border-white aspect-[4/3]">
                <img
                  src={images.campusExterior}
                  alt="JRS International School Campus"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-4 sm:-bottom-8 sm:-right-6 bg-[#06335F] text-white p-6 sm:p-8 rounded-[28px] shadow-xl max-w-xs border-2 border-white">
                <span className="text-[#F7C95E] font-display text-2xl font-bold block mb-1">
                  CBSE Affiliated
                </span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Narapally, Hyderabad • Comprehensive academic program from Nursery to Middle School.
                </p>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-[#0B6DB7] uppercase">
                <span className="w-2 h-2 rounded-full bg-[#0B6DB7]" />
                OUR GUIDING VISION
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[#152A40] leading-tight">
                Where Indian ethos meets{' '}
                <em className="text-[#0B6DB7] not-italic italic">global rigor.</em>
              </h2>
              <p className="text-base sm:text-lg text-[#68798B] leading-relaxed">
                At JRS, education is an inspiring journey of personal transformation.
                We recognize that modern children require cognitive flexibility,
                technological proficiency, and above all, rooted empathy to navigate
                an unpredictable world.
              </p>
              <div className="bg-[#FFF8ED] rounded-2xl p-6 border border-[#F7C95E]/40 space-y-2">
                <h3 className="font-display font-bold text-lg text-[#06335F]">
                  The JRS Promise
                </h3>
                <p className="text-sm text-[#152A40]/80 leading-relaxed">
                  Every child receives individual mentorship in small classrooms,
                  encouraging active inquiry, spirited sports participation, and moral
                  integrity at every turn.
                </p>
              </div>
              <div className="pt-2 flex items-center gap-4">
                <Button to="/admissions" variant="primary" size="md">
                  Join Our Community ↗
                </Button>
                <Button to="/campus" variant="outline" size="md">
                  View Campus Facilities
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Six Pillars Editorial Grid */}
      <section className="py-20 sm:py-28 bg-[#FFF8ED]">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#EF8750]">
              CORE PILLARS
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[#152A40]">
              Designed around <em>the learner.</em>
            </h2>
            <p className="text-[#68798B] text-base sm:text-lg">
              Six foundational principles guide every syllabus unit, extracurricular club,
              and teacher-student mentorship session.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {corePillars.map((pillar, idx) => (
              <div
                key={idx}
                className="bg-white rounded-[32px] overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 flex flex-col group"
              >
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img
                    src={pillar.image}
                    alt={pillar.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-[11px] font-bold tracking-widest uppercase text-[#06335F]">
                    {pillar.eyebrow}
                  </div>
                </div>
                <div className="p-7 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="font-display text-2xl font-bold text-[#152A40] mb-2 group-hover:text-[#0B6DB7] transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-[#68798B] text-sm leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#06335F]">
                    <span>Learn how we teach</span>
                    <span className="group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <AdmissionCTA />
    </div>
  );
}
