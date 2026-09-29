import React, { useState } from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from './ui/card';
import { Badge } from './ui/badge';

const pathways = [
  {
    id: 'pre-primary',
    title: 'Pre-Primary',
    subLevels: 'Nursery, LKG & UKG',
    badgeVariant: 'red',
    image: '/pre-primary.png',
    highRes: '/pre-primary.png',
    cardBg: 'bg-[#FEF2F2]/70',
    borderColor: 'border-red-200',
    iconBg: 'bg-red-100 text-[#DC2626]',
    lineBg: 'bg-[#DC2626]',
    accentColor: '#DC2626',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="13" width="8" height="8" rx="1.5" />
        <rect x="13" y="13" width="8" height="8" rx="1.5" />
        <rect x="8" y="3" width="8" height="8" rx="1.5" />
      </svg>
    ),
    description: 'Play, explore and discover. Building curious and confident learners from the very beginning.',
    curriculumDetails: 'Our early childhood education provides a nurturing, creative environment where little ones develop language proficiency, sensory coordination, and foundational curiosity through interactive Montessori-inspired play.',
    features: [
      'Montessori-inspired sensory & exploratory activity zones',
      'Foundational phonics, storytelling & early numeracy',
      'Fine and gross motor skills with supervised outdoor play',
      'Art, music, dance and joyful creative expression',
    ],
  },
  {
    id: 'primary',
    title: 'Primary',
    subLevels: 'Classes I to V • NCERT Syllabus',
    badgeVariant: 'emerald',
    image: '/primary.png',
    highRes: '/primary.png',
    cardBg: 'bg-[#F0FDF4]/70',
    borderColor: 'border-emerald-200',
    iconBg: 'bg-emerald-100 text-[#16A34A]',
    lineBg: 'bg-[#16A34A]',
    accentColor: '#16A34A',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" />
        <path d="M6 6h10" />
        <path d="M6 10h10" />
      </svg>
    ),
    description: 'Building strong foundations through inquiry, creativity and holistic learning.',
    curriculumDetails: 'Rigorous CBSE curriculum infused with experiential learning. Children develop conceptual mastery in mathematics, sciences, and languages while cultivating critical thinking and public speaking confidence.',
    features: [
      'Comprehensive CBSE curriculum with NCERT standards',
      'IIT & NIT Foundation groundwork introduced early',
      'Bilingual proficiency, spelling bee & literature circles',
      'Weekly physical education, swimming, yoga and skating',
    ],
  },
  {
    id: 'middle-school',
    title: 'Middle School',
    subLevels: 'Classes VI to VIII • CBSE Curriculum',
    badgeVariant: 'default',
    image: '/middle.png',
    highRes: '/middle.png',
    cardBg: 'bg-[#F9FAFB]',
    borderColor: 'border-slate-200',
    iconBg: 'bg-slate-200 text-[#111827]',
    lineBg: 'bg-[#111827]',
    accentColor: '#111827',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-1 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
        <path d="M9 18h6" />
        <path d="M10 22h4" />
      </svg>
    ),
    description: 'Encouraging independent thinking, collaboration and real-world problem solving.',
    curriculumDetails: 'Fostering analytical acumen through dedicated laboratory experiments, coding workshops, and collaborative project assignments that connect textbook theories with real-world scientific applications.',
    features: [
      'Advanced science experiments in dedicated physics & chemistry labs',
      'Intensive IIT & NIT Foundation program for competitive edge',
      'Robotics, applied computing and technology projects',
      'Debate clubs, model UN, and intra-school competitions',
    ],
  },
];

export default function AcademicPathways() {
  const [selectedPathway, setSelectedPathway] = useState(null);

  return (
    <section id="academics" className="py-12 bg-white relative overflow-hidden">

      {/* Main Content Container */}
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          {/* Centered Red Dash */}
          <div className="w-12 h-[2.5px] bg-[#DC2626] mx-auto mb-3" />

          {/* Title: ACADEMIC PATHWAYS */}
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-[2.85rem] leading-tight tracking-tight mb-3">
            <span className="text-[#0B0F17]">ACADEMIC </span>
            <span className="text-[#DC2626]">PATHWAYS</span>
          </h2>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed max-w-xl mx-auto">
            A progressive learning journey designed to nurture curiosity, build strong foundations and prepare students for a brighter tomorrow.
          </p>
        </div>

        {/* 3 Academic Pathway Cards Grid using shadcn UI Cards (Reduced Card Width) */}
        <div className="max-w-[1000px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 items-stretch justify-center">
            {pathways.map((item) => (
              <Card
                key={item.id}
                className="group overflow-hidden rounded-[22px] bg-white border border-slate-200/80 shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between py-0 gap-0 max-w-[330px] w-full mx-auto"
              >
              {/* Top Image Showcase (Reduced Height) */}
              <div className="relative h-36 sm:h-40 md:h-44 w-full overflow-hidden bg-slate-100">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>

              {/* Bottom Card Content Section with Balanced Padding */}
              <div className={`p-4 sm:p-5 ${item.cardBg} flex flex-col justify-between flex-grow rounded-b-[22px]`}>
                <div>
                  <CardHeader className="p-0 mb-3">
                    <div className="flex items-center gap-3">
                      <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full ${item.iconBg} flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-110 transition-transform duration-300`}>
                        {item.icon}
                      </div>
                      <div className="space-y-0.5">
                        <CardTitle className="font-display font-bold text-base sm:text-lg text-[#0B0F17] leading-snug">
                          {item.title}
                        </CardTitle>
                        <Badge variant={item.badgeVariant} className="text-[10px] uppercase tracking-wider font-semibold py-0.5 px-2 leading-tight">
                          {item.subLevels}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="p-0 mb-4">
                    <CardDescription className="text-sm sm:text-[14.5px] text-[#374151] leading-relaxed font-normal">
                      {item.description}
                    </CardDescription>
                  </CardContent>
                </div>

                <CardFooter className="p-0 pt-1">
                  <button
                    type="button"
                    onClick={() => setSelectedPathway(item)}
                    className="group/btn inline-flex flex-col items-start cursor-pointer text-left focus:outline-none"
                  >
                    <span className="inline-flex items-center gap-1.5 text-xs sm:text-[13px] font-bold text-[#0B0F17] group-hover/btn:text-[#DC2626] transition-colors">
                      <span>Learn More</span>
                      <span className="text-sm group-hover/btn:translate-x-1 transition-transform duration-200">→</span>
                    </span>
                    <span className={`w-8 h-[2px] ${item.lineBg} mt-1 transition-all duration-300 group-hover/btn:w-16`} />
                  </button>
                </CardFooter>
              </div>
            </Card>
          ))}
          </div>
        </div>

      </div>

      {/* Curriculum Modal */}
      {selectedPathway && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setSelectedPathway(null)}
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
        >
          <div
            className="relative max-w-2xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-200 flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className={`p-6 ${selectedPathway.cardBg} border-b border-slate-200 flex items-center justify-between`}>
              <div className="flex items-center gap-3.5">
                <div className={`w-12 h-12 rounded-full ${selectedPathway.iconBg} flex items-center justify-center text-xl shadow-xs`}>
                  {selectedPathway.icon}
                </div>
                <div>
                  <Badge variant={selectedPathway.badgeVariant} className="text-[10px] uppercase tracking-wider font-semibold py-0.5 px-2 mb-1">
                    {selectedPathway.subLevels}
                  </Badge>
                  <h3 className="font-display font-bold text-2xl text-[#0B0F17]">
                    {selectedPathway.title}
                  </h3>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setSelectedPathway(null)}
                className="w-9 h-9 rounded-full bg-white text-[#0B0F17] hover:bg-[#DC2626] hover:text-white flex items-center justify-center text-sm font-bold transition-all shadow-xs cursor-pointer"
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-6">
              {/* HD Image Showcase */}
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-slate-100 shadow-sm border border-slate-100">
                <img
                  src={selectedPathway.highRes}
                  alt={selectedPathway.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <h4 className="font-bold text-xs uppercase tracking-wider text-[#0B0F17] mb-2">
                  Academic Philosophy & Approach
                </h4>
                <p className="text-sm text-[#4B5563] leading-relaxed">
                  {selectedPathway.curriculumDetails}
                </p>
              </div>

              <div>
                <h4 className="font-bold text-xs uppercase tracking-wider text-[#0B0F17] mb-3">
                  Key Curriculum Highlights
                </h4>
                <ul className="space-y-2.5">
                  {selectedPathway.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#0B0F17]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626] mt-1.5 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-5 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-[#4B5563]">
                Admissions open for Academic Year 2026–27
              </span>
              <a
                href="#contact"
                onClick={() => setSelectedPathway(null)}
                className="inline-flex items-center gap-2 bg-[#DC2626] hover:bg-[#B91C1C] text-white px-5 py-2.5 rounded-full text-xs font-semibold transition-all shadow-xs cursor-pointer"
              >
                <span>Enquire for Admissions</span>
                <span>›</span>
              </a>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
