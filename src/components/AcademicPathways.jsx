import React, { useState } from 'react';
import { X, Check, ArrowRight } from 'lucide-react';

const pathways = [
  {
    id: 'pre-primary',
    stageBadge: 'Early Childhood',
    title: 'Pre-Primary',
    subLevels: 'Nursery, LKG & UKG',
    image: '/pre-primary-learning.jpg',
    accentColor: '#DC2626',
    description:
      'Play, explore, and discover. Building curious and confident young learners from their very first steps in education.',
    curriculumDetails:
      'Our early childhood education provides a nurturing, creative environment where little ones develop language proficiency, sensory coordination, and foundational curiosity through interactive Montessori-inspired play.',
    features: [
      'Montessori-inspired sensory & exploratory activity zones',
      'Foundational phonics, storytelling & early numeracy',
      'Fine and gross motor skills with supervised outdoor play',
      'Joyful creative arts, music, dance and circle time',
    ],
  },
  {
    id: 'primary',
    stageBadge: 'Foundation Years',
    title: 'Primary School',
    subLevels: 'Classes I to V • NCERT Syllabus',
    image: '/primary-school-study.jpg',
    accentColor: '#16A34A',
    description:
      'Building strong scholastic foundations through hands-on inquiry, creativity, and balanced academic development.',
    curriculumDetails:
      'Rigorous CBSE curriculum infused with experiential learning. Children develop conceptual mastery in mathematics, sciences, and languages while cultivating critical thinking and public speaking confidence.',
    features: [
      'Comprehensive CBSE curriculum with NCERT standards',
      'Early IIT & NIT Foundation groundwork in math and logic',
      'Bilingual proficiency, vocabulary & reading circles',
      'Weekly sports coaching, swimming, yoga and skating',
    ],
  },
  {
    id: 'middle-school',
    stageBadge: 'Advanced Prep',
    title: 'Middle School',
    subLevels: 'Classes VI to VIII • CBSE & IIT/NIT',
    image: '/middle-school-students.jpg',
    accentColor: '#0B0F17',
    description:
      'Encouraging independent analytical thinking, teamwork, scientific inquiry, and competitive exam readiness.',
    curriculumDetails:
      'Fostering analytical acumen through dedicated laboratory experiments, coding workshops, and collaborative project assignments that connect textbook theories with real-world scientific applications.',
    features: [
      'Advanced science experiments in dedicated physics & chemistry labs',
      'Intensive IIT & NIT Foundation program for competitive edge',
      'Robotics, computer programming and digital literacy',
      'Debate clubs, Model UN, and inter-school academic fests',
    ],
  },
];

export default function AcademicPathways() {
  const [selectedPathway, setSelectedPathway] = useState(null);

  return (
    <section id="academics" className="py-12 bg-gradient-to-b from-[#EEF2F6] via-[#F8FAFC] to-[#EEF2F6] relative overflow-hidden border-y border-slate-200">
      
      {/* Subtle Brand Ambient Glows */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-gradient-to-br from-red-500/5 to-transparent rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-emerald-500/5 to-transparent rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ================= SECTION HEADER ================= */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-red-50 via-slate-50 to-emerald-50 text-[#DC2626] text-xs font-bold tracking-[0.2em] uppercase border border-red-100/80 mb-3.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]" />
            ACADEMIC PATHWAYS
          </div>

          {/* Main Title */}
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-[40px] text-[#0B0F17] leading-tight tracking-tight">
            Academic <span className="bg-gradient-to-r from-[#DC2626] to-[#EF4444] bg-clip-text text-transparent">Pathways</span>
          </h2>
        </div>

        {/* ================= 3 NEAT ACADEMIC CARDS ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {pathways.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col group relative"
            >
              {/* Subtle top accent gradient line */}
              <div className="h-1 w-full bg-gradient-to-r from-[#DC2626] via-[#16A34A] to-[#0B0F17]" />
              {/* Top Image Banner with Floating Stage Badge */}
              <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-100">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                
                {/* Floating Category Pill Badge */}
                <div className="absolute top-3.5 left-3.5 z-10">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[#0B0F17] text-xs font-bold tracking-wide shadow-sm border border-slate-200/60">
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: item.accentColor }}
                    />
                    {item.stageBadge}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex flex-col justify-between flex-grow">
                <div>
                  {/* Title and Sublevel */}
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-[#0B0F17] tracking-tight leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#DC2626] uppercase tracking-wider mt-1 mb-3">
                    {item.subLevels}
                  </p>

                  {/* Narrative Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Card Action */}
                <div className="pt-5 mt-5 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => setSelectedPathway(item)}
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-slate-50 to-slate-100/90 hover:from-[#16A34A] hover:to-[#15803D] text-[#0B0F17] hover:text-white border border-slate-200 hover:border-transparent font-semibold text-xs sm:text-sm transition-all duration-200 group/btn cursor-pointer"
                  >
                    <span>View Curriculum</span>
                    <ArrowRight className="w-4 h-4 stroke-[2.2] group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* ================= CURRICULUM MODAL ================= */}
      {selectedPathway && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setSelectedPathway(null)}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
        >
          <div
            className="relative max-w-xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-200 flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-6 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
              <div>
                <span className="inline-block text-[11px] font-bold text-[#DC2626] uppercase tracking-wider mb-1">
                  {selectedPathway.subLevels}
                </span>
                <h3 className="font-display font-bold text-2xl text-[#0B0F17]">
                  {selectedPathway.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedPathway(null)}
                className="w-9 h-9 rounded-full bg-white text-slate-600 hover:text-black hover:bg-slate-200 flex items-center justify-center transition-colors cursor-pointer border border-slate-200"
                aria-label="Close dialog"
              >
                <X className="w-4 h-4 stroke-[2.2]" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 overflow-y-auto space-y-5">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  CURRICULUM OVERVIEW
                </h4>
                <p className="text-sm text-slate-700 leading-relaxed font-sans">
                  {selectedPathway.curriculumDetails}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  KEY ACADEMIC PILLARS
                </h4>
                <ul className="space-y-2.5">
                  {selectedPathway.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-slate-700">
                      <span className="w-5 h-5 rounded-full bg-emerald-50 text-[#16A34A] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-5 bg-slate-50 border-t border-slate-200 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setSelectedPathway(null)}
                className="px-5 py-2.5 rounded-xl border border-slate-300 text-slate-700 text-xs sm:text-sm font-semibold hover:bg-slate-100 transition-colors cursor-pointer"
              >
                Close
              </button>
              <a
                href="#admissions"
                onClick={() => setSelectedPathway(null)}
                className="px-6 py-2.5 rounded-xl bg-[#DC2626] text-white text-xs sm:text-sm font-semibold hover:bg-[#16A34A] transition-colors cursor-pointer"
              >
                Enquire for Admission
              </a>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
