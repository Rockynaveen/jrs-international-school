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
    accent: '#DC2626',
  },
  {
    title: 'Interactive Learning',
    eyebrow: 'PEDAGOGY',
    description:
      'Replacing passive rote memorization with experiential science labs, collaborative group problem solving, and hands-on math investigations.',
    image: images.stemLearning,
    accent: '#16A34A',
  },
  {
    title: 'Indian Values',
    eyebrow: 'HERITAGE',
    description:
      'Deeply rooted in respect, humility, gratitude, and moral consciousness. Sanskrit shlokas, community service, and cultural reverence enrich daily campus life.',
    image: images.yogaZen,
    accent: '#0B0F17',
  },
  {
    title: 'Global Perspective',
    eyebrow: 'HORIZONS',
    description:
      'Fostering intercultural fluency, multilingual communication, United Nations Sustainable Development Goals awareness, and worldwide technological readiness.',
    image: images.classroomModern,
    accent: '#DC2626',
  },
  {
    title: 'Holistic Development',
    eyebrow: 'BALANCE',
    description:
      'Balancing scholastic achievements with performing arts, visual arts, skating, team athletics, and emotional wellbeing.',
    image: images.artPainting,
    accent: '#16A34A',
  },
  {
    title: 'Future-ready Learning',
    eyebrow: 'INNOVATION',
    description:
      'Early computational literacy, design thinking frameworks, ecological stewardship, and critical media literacy to thrive in tomorrow’s world.',
    image: images.computerLab,
    accent: '#0B0F17',
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Editorial Hero Header */}
      <section className="pt-12 sm:pt-20 pb-16 bg-white border-b border-gray-100 relative overflow-hidden">
        {/* Soft subtle background circles */}
        <div
          className="absolute top-0 right-10 w-96 h-96 rounded-full bg-[#16A34A]/10 blur-3xl -z-10"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-0 left-10 w-80 h-80 rounded-full bg-[#DC2626]/10 blur-3xl -z-10"
          aria-hidden="true"
        />

        <div className="max-w-[1240px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FEF2F2] text-[#DC2626] text-xs font-bold tracking-[0.2em] uppercase border border-red-100">
              <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A]" />
              ABOUT JRS INTERNATIONAL SCHOOL
            </div>

            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold sm:font-extrabold text-[#0B0F17] leading-[1.12] tracking-tight">
              Growing minds,
              <br />
              <em className="text-[#DC2626] not-italic italic">
                SHAPING FUTURES.
              </em>
            </h1>

            <p className="text-lg sm:text-2xl text-gray-600 leading-relaxed font-normal pt-2">
              Founded on the belief that meaningful education nurtures character as
              deeply as intellect, JRS International School is Hyderabad’s vibrant
              sanctuary for holistic learning and creative leadership.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership / Vision Split Section */}
      <section className="py-10 bg-white border-b border-gray-100">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
            {/* Image Collage */}
            <div className="lg:col-span-6 relative flex flex-col">
              <div className="relative flex-1 min-h-[340px] sm:min-h-[400px] rounded-[40px] overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src={images.campusExterior}
                  alt="JRS International School Campus"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-4 sm:-bottom-8 sm:-right-6 bg-[#0B0F17] text-white p-6 sm:p-8 rounded-[28px] shadow-xl max-w-xs border-2 border-white z-10">
                <span className="text-[#DC2626] font-display text-2xl font-bold block mb-1">
                  CBSE Affiliated
                </span>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Narapally, Hyderabad • Comprehensive academic program from Nursery to Middle School.
                </p>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-[#DC2626] uppercase">
                <span className="w-2 h-2 rounded-full bg-[#16A34A]" />
                OUR GUIDING VISION
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[#0B0F17] leading-tight">
                Where Indian ethos meets{' '}
                <em className="text-[#16A34A] not-italic italic">global rigor.</em>
              </h2>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                At JRS, education is an inspiring journey of personal transformation.
                We recognize that modern children require cognitive flexibility,
                technological proficiency, and above all, rooted empathy to navigate
                an unpredictable world.
              </p>
              <div className="bg-[#F8FAFC] rounded-2xl p-6 border border-gray-200 space-y-2">
                <h3 className="font-display font-bold text-lg text-[#0B0F17]">
                  The JRS Promise
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
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
      <section className="py-10 bg-[#F8FAFC]">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#DC2626]">
              CORE PILLARS
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[#0B0F17]">
              Designed around <em className="text-[#DC2626] not-italic italic">the learner.</em>
            </h2>
            <p className="text-gray-600 text-base sm:text-lg">
              Six foundational principles guide every syllabus unit, extracurricular club,
              and teacher-student mentorship session.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {corePillars.map((pillar, idx) => (
              <div
                key={idx}
                className="bg-white rounded-[32px] overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 flex flex-col group"
              >
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img
                    src={pillar.image}
                    alt={pillar.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-[11px] font-bold tracking-widest uppercase text-[#0B0F17]">
                    {pillar.eyebrow}
                  </div>
                </div>
                <div className="p-7 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="font-display text-2xl font-bold text-[#0B0F17] mb-2 group-hover:text-[#DC2626] transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                  <div className="pt-2 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-[#0B0F17] group-hover:text-[#DC2626] transition-colors">
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
