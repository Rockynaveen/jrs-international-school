import React, { useState } from 'react';
import AdmissionCTA from '../components/AdmissionCTA';
import Button from '../components/Button';
import { images } from '../data/siteData';

const eventsList = [
  {
    number: '01',
    title: 'Annual Sports Day & Athletics Olympiad',
    month: 'DECEMBER',
    date: '18 Dec',
    category: 'ATHLETICS',
    summary:
      'A high-voltage athletic celebration featuring march pasts, sprint races, long jump, relay challenges, and inter-house championship trophies.',
    image: images.sportsField,
    timing: '8:30 AM – 2:00 PM',
    venue: 'Main School Football & Athletics Grounds',
  },
  {
    number: '02',
    title: 'Flavors & Fun: Food Carnival',
    month: 'JANUARY',
    date: '24 Jan',
    category: 'COMMUNITY & CULTURE',
    summary:
      'A cheerful family weekend festival where students run entrepreneurship food kiosks, culinary stalls, traditional recipes, and lively live-music stages.',
    image: images.canteenDining,
    timing: '10:00 AM – 4:00 PM',
    venue: 'Open Courtyard & Dining Plaza',
  },
  {
    number: '03',
    title: 'Inter-School Science Quiz & STEM Expo',
    month: 'FEBRUARY',
    date: '12 Feb',
    category: 'ACADEMIC COMPETITION',
    summary:
      'Young scientists demonstrate working robotics models, hydraulic lifts, renewable energy experiments, and participate in a fast-paced buzzer quiz.',
    image: images.stemLearning,
    timing: '9:30 AM – 1:30 PM',
    venue: 'Auditorium & STEM Innovation Lab',
  },
  {
    number: '04',
    title: 'Academic Achievers Gala',
    month: 'MARCH',
    date: '05 Mar',
    category: 'HONORS & RECOGNITION',
    summary:
      'Honoring scholastic brilliance, 100% attendance, stellar olympiad ranks, and subject toppers in the presence of esteemed chief guests.',
    image: images.classroomModern,
    timing: '11:00 AM – 1:30 PM',
    venue: 'School Amphitheatre',
  },
  {
    number: '05',
    title: 'Pre-Primary Graduation Day',
    month: 'MARCH',
    date: '28 Mar',
    category: 'CELEBRATION',
    summary:
      'A heartwarming celebration as our Honey Bees kindergarteners don cap and gown, perform graduation choral songs, and step up to Grade 1.',
    image: images.honeyBeesExplore,
    timing: '9:00 AM – 12:00 PM',
    venue: 'Primary Wing Central Hall',
  },
  {
    number: '06',
    title: 'Continuous Teacher Training & NEP Workshops',
    month: 'MAY',
    date: '15–18 May',
    category: 'FACULTY EXCELLENCE',
    summary:
      'Four days of intensive pedagogy seminars on inquiry-based learning, inclusive education, educational neuroscience, and classroom tech integration.',
    image: images.computerLab,
    timing: '9:00 AM – 4:00 PM',
    venue: 'Faculty Conference Suites',
  },
  {
    number: '07',
    title: 'Co-curricular Activities Fest (Tarang)',
    month: 'AUGUST',
    date: '14 Aug',
    category: 'PERFORMING ARTS',
    summary:
      'An explosion of talent including classical dance, modern orchestra, elocution debates, sand art, and street-theatre skits celebrating Indian culture.',
    image: images.danceDramatics,
    timing: '9:00 AM – 3:00 PM',
    venue: 'Main Campus Quadrangle',
  },
  {
    number: '08',
    title: 'School Celebrations & National Festivals',
    month: 'YEAR-ROUND',
    date: 'Ongoing',
    category: 'VALUES & TRADITION',
    summary:
      'Vibrant assemblies marking Independence Day, Republic Day, Gandhi Jayanti, Teacher’s Day, Children’s Day, Sankranti, and Diwali with traditional reverence.',
    image: images.artPainting,
    timing: 'Morning Assembly Sessions',
    venue: 'Assembly Amphitheatre',
  },
];

export default function Events() {
  const [filter, setFilter] = useState('ALL');

  const filtered = eventsList.filter((ev) => {
    if (filter === 'ALL') return true;
    if (filter === 'ACADEMIC') return ev.category.includes('ACADEMIC') || ev.category.includes('FACULTY');
    if (filter === 'SPORTS') return ev.category.includes('ATHLETICS');
    if (filter === 'CULTURE') return ev.category.includes('COMMUNITY') || ev.category.includes('PERFORMING') || ev.category.includes('VALUES') || ev.category.includes('CELEBRATION');
    return true;
  });

  return (
    <div className="min-h-screen bg-[#FFF8ED]">
      {/* Editorial Hero Header */}
      <section className="pt-12 sm:pt-20 pb-16 bg-[#FFF8ED] border-b border-slate-200/60 relative overflow-hidden">
        <div
          className="absolute top-0 right-10 w-96 h-96 rounded-full bg-[#F7C95E]/20 blur-3xl -z-10"
          aria-hidden="true"
        />
        <div className="max-w-[1240px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E3F1EB] text-[#06335F] text-xs font-bold tracking-[0.2em] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#EF8750]" />
              ANNUAL CALENDAR & HAPPENINGS
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl text-[#152A40] leading-[1.08] tracking-tight">
              Milestones celebrated,
              <br />
              <em className="text-[#EF8750] not-italic italic underline decoration-[#F7C95E] decoration-wavy underline-offset-4">
                MEMORIES MADE.
              </em>
            </h1>

            <p className="text-lg sm:text-2xl text-[#68798B] leading-relaxed font-normal pt-2">
              Every season at JRS brings festivals of sport, science exhibitions,
              music carnivals, and cherished school celebrations.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-6 bg-white border-b border-slate-200 sticky top-18 sm:top-20 z-30 shadow-xs">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-12 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'ALL', label: 'All Happenings' },
              { id: 'CULTURE', label: 'Cultural & Festivals' },
              { id: 'ACADEMIC', label: 'Academic & STEM' },
              { id: 'SPORTS', label: 'Sports & Olympiads' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold tracking-wider uppercase transition-all cursor-pointer ${
                  filter === tab.id
                    ? 'bg-[#06335F] text-white shadow-sm'
                    : 'bg-slate-100 text-[#152A40] hover:bg-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <span className="text-xs font-medium text-slate-500">
            {filtered.length} Signature Events Listed
          </span>
        </div>
      </section>

      {/* Large Numbered Rows Section (NOT standard cards!) */}
      <section className="py-16 sm:py-24 bg-[#FFF8ED]">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-12 space-y-6">
          {filtered.map((item) => (
            <div
              key={item.number}
              className="bg-white rounded-[32px] p-6 sm:p-10 border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
                {/* Left Number & Date */}
                <div className="lg:col-span-3 flex lg:flex-col items-center lg:items-start justify-between border-b lg:border-b-0 lg:border-r border-slate-100 pb-4 lg:pb-0 lg:pr-6">
                  <span className="font-display text-4xl sm:text-6xl font-normal text-[#06335F] group-hover:text-[#0B6DB7] transition-colors">
                    {item.number}
                  </span>
                  <div className="text-right lg:text-left mt-2">
                    <span className="inline-block px-3 py-1 rounded-full bg-[#E3F1EB] text-[#06335F] text-xs font-bold uppercase tracking-wider">
                      {item.date}
                    </span>
                    <span className="text-xs text-slate-400 block mt-1 uppercase font-semibold">
                      {item.month}
                    </span>
                  </div>
                </div>

                {/* Middle Content */}
                <div className="lg:col-span-6 space-y-3">
                  <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-[#EF8750]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#EF8750]" />
                    {item.category}
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl text-[#152A40] group-hover:text-[#06335F] transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-sm sm:text-base text-[#68798B] leading-relaxed">
                    {item.summary}
                  </p>

                  <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-slate-500">
                    <span className="flex items-center gap-1.5">
                      ⏱ {item.timing}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1.5">
                      📍 {item.venue}
                    </span>
                  </div>
                </div>

                {/* Right Image Thumbnail */}
                <div className="lg:col-span-3">
                  <div className="rounded-2xl overflow-hidden aspect-[16/10] sm:aspect-[4/3] relative shadow-sm border-2 border-slate-100">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final Admission CTA */}
      <AdmissionCTA />
    </div>
  );
}
