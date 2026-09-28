import React from 'react';
import Button from '../components/Button';
import AdmissionCTA from '../components/AdmissionCTA';
import { images } from '../data/siteData';

const academicProgrammes = [
  {
    stage: '01',
    name: 'Young Buddies',
    age: 'Age 2.5 – 3.5',
    tag: 'EARLY PLAYGROUP',
    color: '#F7C95E',
    description:
      'A gentle, secure transition from home to school. Focuses on sensory stimulation, speech development, joyful rhythm, motor coordination, and self-expression through natural tactile play.',
    keyLearnings: [
      'Sensory sand & water exploration',
      'Music, nursery rhymes & phonemic awareness',
      'Basic social sharing & circle routines',
      'Gross & fine motor dexterity development',
    ],
    image: images.prePrimaryPlay,
  },
  {
    stage: '02',
    name: 'Butterflies',
    age: 'Age 3.5 – 4.5',
    tag: 'NURSERY EXPLORATION',
    color: '#0B6DB7',
    description:
      'Expanding curiosity through picture walks, foundational phonetic patterns, number concepts, colorful storytelling, and expressive arts in open, collaborative classrooms.',
    keyLearnings: [
      'Phonics recognition & vocabulary building',
      'Numeracy, patterns & classification',
      'Visual arts, coloring & clay modeling',
      'Expressive dialogue & group storytelling',
    ],
    image: images.butterfliesGroup,
  },
  {
    stage: '03',
    name: 'Honey Bees',
    age: 'Age 4.5 – 5.5',
    tag: 'KINDERGARTEN READINESS',
    color: '#EF8750',
    description:
      'Nurturing budding independence, pre-reading fluency, elementary logical reasoning, science wonder walks, and joyful collaboration to prepare learners for primary school.',
    keyLearnings: [
      'Early sentence construction & spelling',
      'Hands-on counting, sums & logic games',
      'Nature observation & environmental care',
      'Physical athletics & stage confidence',
    ],
    image: images.honeyBeesExplore,
  },
  {
    stage: '04',
    name: 'Primary School',
    age: 'Classes I – IV (Ages 6 – 10)',
    tag: 'FOUNDATIONAL CBSE',
    color: '#06335F',
    description:
      'Building strong scholastic competence in English, Mathematics, Environmental Studies, Second Languages (Hindi/Telugu), and Computer Studies, complemented by sports and performing arts.',
    keyLearnings: [
      'Conceptual inquiry & experiential science',
      'Creative writing, reading clubs & debating',
      'Math lab puzzles & practical applications',
      'Weekly physical education, swimming & skating',
    ],
    image: images.classroomModern,
  },
  {
    stage: '05',
    name: 'Middle School',
    age: 'Classes V – VI (Ages 10 – 12+)',
    tag: 'PREPARATORY & MIDDLE CBSE',
    color: '#0B6DB7',
    description:
      'Fostering analytical rigor, formal scientific experimentation, advanced computational logic, historical inquiry, and leadership initiatives aligned with the National Education Policy (NEP 2020).',
    keyLearnings: [
      'Dedicated Physics, Chemistry & Biology lab work',
      'Robotics, coding & digital literacy',
      'Social sciences, current affairs & model UN',
      'House leagues, fine arts & drama productions',
    ],
    image: images.stemLearning,
  },
];

export default function Academics() {
  return (
    <div className="min-h-screen bg-[#FFF8ED]">
      {/* Editorial Hero Header */}
      <section className="pt-12 sm:pt-20 pb-16 bg-[#FFF8ED] border-b border-slate-200/60 relative overflow-hidden">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E3F1EB] text-[#06335F] text-xs font-bold tracking-[0.2em] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0B6DB7]" />
              ACADEMIC PHILOSOPHY & PROGRAMMES
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl text-[#152A40] leading-[1.08] tracking-tight">
              Learning for
              <br />
              <em className="text-[#0B6DB7] not-italic italic underline decoration-[#F7C95E] decoration-wavy underline-offset-4">
                REAL LIFE.
              </em>
            </h1>

            <p className="text-lg sm:text-2xl text-[#68798B] leading-relaxed font-normal pt-2">
              From our tender pre-primary discovery rooms to rigorous middle school
              laboratories, education at JRS sparks a lifelong delight in learning.
            </p>
          </div>
        </div>
      </section>

      {/* Editorial Horizontal Programme Rows */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-12 space-y-16 sm:space-y-24">
          <div className="border-b border-slate-200 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#EF8750] block mb-1">
                OUR FIVE-STAGE JOURNEY
              </span>
              <h2 className="font-display text-3xl sm:text-4xl text-[#152A40]">
                Every age. Every milestone.
              </h2>
            </div>
            <span className="text-sm text-[#68798B]">
              Aligned with CBSE Standards & NEP 2020 Pedagogical Framework
            </span>
          </div>

          {/* List of Horizontal Editorial Rows */}
          <div className="space-y-16">
            {academicProgrammes.map((prog, index) => {
              const isEven = index % 2 === 1;
              return (
                <div
                  key={prog.stage}
                  className="bg-[#FFF8ED] rounded-[36px] p-6 sm:p-10 lg:p-12 border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-500 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
                >
                  {/* Left/Right Text Column */}
                  <div
                    className={`space-y-6 lg:col-span-7 ${
                      isEven ? 'lg:order-2' : 'lg:order-1'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-12 h-12 rounded-2xl bg-[#06335F] text-[#F7C95E] font-display text-xl font-bold flex items-center justify-center shadow-sm">
                        {prog.stage}
                      </span>
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-[#0B6DB7] block">
                          {prog.tag}
                        </span>
                        <span className="text-sm font-semibold text-[#152A40]">
                          {prog.age}
                        </span>
                      </div>
                    </div>

                    <h3 className="font-display text-3xl sm:text-4xl text-[#152A40] font-normal leading-tight">
                      {prog.name}
                    </h3>

                    <p className="text-base sm:text-lg text-[#68798B] leading-relaxed">
                      {prog.description}
                    </p>

                    {/* Key Learnings List */}
                    <div className="space-y-2 pt-2 border-t border-slate-200/80">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#152A40] block">
                        Focus Areas & Competencies:
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-[#152A40]/80">
                        {prog.keyLearnings.map((item, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#EF8750] shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 flex items-center gap-4">
                      <Button
                        to="/admissions"
                        variant="primary"
                        size="sm"
                        arrowType="right"
                        className="bg-[#06335F] text-white hover:bg-[#0B6DB7]"
                      >
                        Enquire for {prog.name}
                      </Button>
                    </div>
                  </div>

                  {/* Image Column */}
                  <div
                    className={`lg:col-span-5 relative ${
                      isEven ? 'lg:order-1' : 'lg:order-2'
                    }`}
                  >
                    <div className="relative rounded-[28px] overflow-hidden shadow-lg border-4 border-white aspect-[4/3] group">
                      <img
                        src={prog.image}
                        alt={prog.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
                      <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-bold text-[#06335F]">
                        {prog.age}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Curriculum Highlights Banner */}
      <section className="py-16 bg-[#E3F1EB] border-t border-[#0B6DB7]/10">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
              <span className="text-3xl mb-3 block">📚</span>
              <h4 className="font-display text-xl font-bold text-[#06335F] mb-2">
                CBSE & NEP 2020 Aligned
              </h4>
              <p className="text-sm text-[#68798B] leading-relaxed">
                Seamless progression following National Curriculum Framework
                guidelines with experiential learning methods.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
              <span className="text-3xl mb-3 block">🔬</span>
              <h4 className="font-display text-xl font-bold text-[#06335F] mb-2">
                Experiential STEM Labs
              </h4>
              <p className="text-sm text-[#68798B] leading-relaxed">
                Applied mathematics, computer programming, and physical science
                investigations from early years.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
              <span className="text-3xl mb-3 block">🌱</span>
              <h4 className="font-display text-xl font-bold text-[#06335F] mb-2">
                Continuous Evaluation
              </h4>
              <p className="text-sm text-[#68798B] leading-relaxed">
                Holistic progress reports focusing on conceptual grasp, creativity,
                and social-emotional maturation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Admission CTA */}
      <AdmissionCTA />
    </div>
  );
}
