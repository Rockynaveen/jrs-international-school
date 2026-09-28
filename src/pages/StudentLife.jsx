import React from 'react';
import AdmissionCTA from '../components/AdmissionCTA';
import Button from '../components/Button';
import { images } from '../data/siteData';

const activitiesData = [
  {
    title: 'Sports & Athletics',
    category: 'PHYSICAL EXCELLENCE',
    description:
      'Football ground, professional cricket pitch, basketball and volleyball arenas. Students learn grit, leadership, healthy competition, and teamwork under seasoned athletic coaches.',
    image: images.sportsField,
    highlights: ['Inter-school leagues', 'Athletics meet', 'Football coaching', 'Cricket nets'],
    accent: '#06335F',
  },
  {
    title: 'Fine Arts & Painting',
    category: 'VISUAL EXPRESSION',
    description:
      'Spacious art studios filled with natural sunlight. Students work with watercolors, acrylics, clay sculpture, and craft installations to give form to their imagination.',
    image: images.artPainting,
    highlights: ['Canvas painting', 'Clay modeling', 'Pottery & crafts', 'Annual art gallery exhibition'],
    accent: '#F7C95E',
  },
  {
    title: 'Music & Instrumental',
    category: 'HARMONY & RHYTHM',
    description:
      'Vocal training in Indian classical ragas and contemporary choir, paired with keyboards, drums, and acoustic instruments to nurture rhythmic harmony.',
    image: images.musicPerformance,
    highlights: ['Vocal training', 'Keyboard & percussion', 'School choir band', 'Musical recitals'],
    accent: '#0B6DB7',
  },
  {
    title: 'Classical & Contemporary Dance',
    category: 'MOVEMENT & GRACE',
    description:
      'Blending classical Indian dance forms with fluid contemporary movement, improving posture, rhythm, and body awareness.',
    image: images.danceDramatics,
    highlights: ['Indian classical forms', 'Contemporary choreography', 'Folk performances', 'Stage presentations'],
    accent: '#EF8750',
  },
  {
    title: 'Theatre & Dramatics',
    category: 'STAGE PRESENCE',
    description:
      'Speech, elocution, role-playing, and full-length annual stage plays that dissolve stage fear and instill magnetic communication skills.',
    image: images.danceDramatics,
    highlights: ['Speech & debate club', 'Shakespeare & Indian plays', 'Scriptwriting', 'Annual day drama'],
    accent: '#06335F',
  },
  {
    title: 'Mindful Yoga & Wellness',
    category: 'INNER TRANQUILITY',
    description:
      'Daily morning pranayama, asanas, and guided mindfulness sessions in our serene meditation hall, fostering focus, emotional balance, and flexibility.',
    image: images.yogaZen,
    highlights: ['Morning breathing asanas', 'Meditation hall', 'Flexibility training', 'Stress management'],
    accent: '#0B6DB7',
  },
  {
    title: 'Skating & Agility Academy',
    category: 'BALANCE & SPEED',
    description:
      'Smooth outdoor skating rink where certified instructors guide learners through balance, speed control, and agility drills.',
    image: images.skatingAndGames,
    highlights: ['Safety gear protocols', 'Speed skating', 'Balance development', 'Skating showcases'],
    accent: '#F7C95E',
  },
  {
    title: 'STEM & Robotics Projects',
    category: 'INNOVATION LAB',
    description:
      'Hands-on experimental projects where students build eco-friendly models, circuit boards, solar kits, and beginner robotic modules.',
    image: images.stemLearning,
    highlights: ['Annual science fair', 'Robotics building', 'Coding club', 'Eco-sustainability projects'],
    accent: '#EF8750',
  },
  {
    title: 'Excursions & Nature Trips',
    category: 'LEARNING OUTDOORS',
    description:
      'Educational field trips to planetariums, agricultural farms, heritage monuments, botanical gardens, and historical museums across Telangana.',
    image: images.outdoorGarden,
    highlights: ['Birla Planetarium', 'Agricultural research farms', 'Heritage fort walks', 'Eco-trail explorations'],
    accent: '#06335F',
  },
];

export default function StudentLife() {
  return (
    <div className="min-h-screen bg-[#FFF8ED]">
      {/* Editorial Hero Header */}
      <section className="pt-12 sm:pt-20 pb-16 bg-[#FFF8ED] border-b border-slate-200/60 relative overflow-hidden">
        <div
          className="absolute top-0 right-10 w-96 h-96 rounded-full bg-[#E3F1EB] blur-3xl -z-10"
          aria-hidden="true"
        />
        <div className="max-w-[1240px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E3F1EB] text-[#06335F] text-xs font-bold tracking-[0.2em] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#EF8750]" />
              LIFE BEYOND THE CLASSROOM
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl text-[#152A40] leading-[1.08] tracking-tight">
              Curiosity in action,
              <br />
              <em className="text-[#EF8750] not-italic italic underline decoration-[#F7C95E] decoration-wavy underline-offset-4">
                JOY IN EVERY STEP.
              </em>
            </h1>

            <p className="text-lg sm:text-2xl text-[#68798B] leading-relaxed font-normal pt-2">
              Sports, performing arts, scientific discovery, and outdoor excursions
              woven seamlessly into each week, keeping school life energetic and inspiring.
            </p>
          </div>
        </div>
      </section>

      {/* Image-heavy Layout for All 9 Activities */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {activitiesData.map((activity, idx) => (
              <div
                key={idx}
                className="bg-[#FFF8ED] rounded-[32px] overflow-hidden border border-slate-200/70 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col group"
              >
                {/* Image */}
                <div className="aspect-[4/3] overflow-hidden relative bg-slate-100">
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3.5 py-1 rounded-full text-[11px] font-bold tracking-widest uppercase text-[#06335F] shadow-sm">
                    {activity.category}
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-7 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="font-display text-2xl font-bold text-[#152A40] mb-2 group-hover:text-[#0B6DB7] transition-colors">
                      {activity.title}
                    </h3>
                    <p className="text-sm text-[#68798B] leading-relaxed">
                      {activity.description}
                    </p>
                  </div>

                  {/* Highlights list */}
                  <div className="pt-3 border-t border-slate-200/70">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#152A40] block mb-2">
                      Key Highlights:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {activity.highlights.map((h, i) => (
                        <span
                          key={i}
                          className="text-xs bg-white px-2.5 py-1 rounded-lg border border-slate-200 text-[#06335F] font-medium"
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* House System Feature */}
      <section className="py-20 bg-[#E3F1EB] border-t border-[#0B6DB7]/10">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#06335F]">
                COLLEGIATE SPIRIT
              </span>
              <h2 className="font-display text-3xl sm:text-4xl text-[#152A40]">
                The Four Houses of JRS.
              </h2>
              <p className="text-sm sm:text-base text-[#68798B] leading-relaxed">
                Every student belongs to one of four student houses fostering healthy
                camaraderie, house leagues, inter-house debates, sports championships,
                and community initiatives.
              </p>
              <div className="pt-2">
                <Button to="/admissions" variant="primary" size="sm">
                  Apply for Enrollment ↗
                </Button>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                <span className="text-xs font-bold uppercase tracking-widest text-[#06335F]">
                  HOUSE 01
                </span>
                <h4 className="font-display text-xl font-bold text-[#06335F] mt-1">
                  Agni (Valor)
                </h4>
                <p className="text-xs text-slate-500 mt-2">
                  Cultivating courage, perseverance, and passion for excellence.
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                <span className="text-xs font-bold uppercase tracking-widest text-[#0B6DB7]">
                  HOUSE 02
                </span>
                <h4 className="font-display text-xl font-bold text-[#0B6DB7] mt-1">
                  Varuna (Wisdom)
                </h4>
                <p className="text-xs text-slate-500 mt-2">
                  Embodying depth of thought, clarity of mind, and scholarship.
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                <span className="text-xs font-bold uppercase tracking-widest text-[#EF8750]">
                  HOUSE 03
                </span>
                <h4 className="font-display text-xl font-bold text-[#EF8750] mt-1">
                  Vayu (Agility)
                </h4>
                <p className="text-xs text-slate-500 mt-2">
                  Inspiring swift action, sportsmanship, and mental flexibility.
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                <span className="text-xs font-bold uppercase tracking-widest text-[#F7C95E]">
                  HOUSE 04
                </span>
                <h4 className="font-display text-xl font-bold text-[#b88c1c] mt-1">
                  Prithvi (Harmony)
                </h4>
                <p className="text-xs text-slate-500 mt-2">
                  Rooted in humility, environmental protection, and empathy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Admission CTA */}
      <AdmissionCTA />
    </div>
  );
}
