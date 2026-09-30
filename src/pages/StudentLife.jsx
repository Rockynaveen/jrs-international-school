import React from 'react';
import AdmissionCTA from '../components/AdmissionCTA';
import Button from '../components/Button';
import { Badge } from '../components/ui/badge';
import { Card } from '../components/ui/card';
import { images } from '../data/siteData';

const activitiesData = [
  {
    title: 'Sports & Athletics',
    category: 'PHYSICAL EXCELLENCE',
    description:
      'Football ground, professional cricket pitch, basketball and volleyball arenas. Students learn grit, leadership, healthy competition, and teamwork under seasoned athletic coaches.',
    image: images.sportsField,
    highlights: ['Inter-school leagues', 'Athletics meet', 'Football coaching', 'Cricket nets'],
    accent: '#DC2626',
  },
  {
    title: 'Fine Arts & Painting',
    category: 'VISUAL EXPRESSION',
    description:
      'Spacious art studios filled with natural sunlight. Students work with watercolors, acrylics, clay sculpture, and craft installations to give form to their imagination.',
    image: images.artPainting,
    highlights: ['Canvas painting', 'Clay modeling', 'Pottery & crafts', 'Annual art gallery exhibition'],
    accent: '#16A34A',
  },
  {
    title: 'Music & Instrumental',
    category: 'HARMONY & RHYTHM',
    description:
      'Vocal training in Indian classical ragas and contemporary choir, paired with keyboards, drums, and acoustic instruments to nurture rhythmic harmony.',
    image: images.musicPerformance,
    highlights: ['Vocal training', 'Keyboard & percussion', 'School choir band', 'Musical recitals'],
    accent: '#0B0F17',
  },
  {
    title: 'Classical & Contemporary Dance',
    category: 'MOVEMENT & GRACE',
    description:
      'Blending classical Indian dance forms with fluid contemporary movement, improving posture, rhythm, and body awareness.',
    image: images.danceDramatics,
    highlights: ['Indian classical forms', 'Contemporary choreography', 'Folk performances', 'Stage presentations'],
    accent: '#DC2626',
  },
  {
    title: 'Mindful Yoga & Wellness',
    category: 'INNER TRANQUILITY',
    description:
      'Daily morning pranayama, asanas, and guided mindfulness sessions in our serene meditation hall, fostering focus, emotional balance, and flexibility.',
    image: images.yogaZen,
    highlights: ['Morning breathing asanas', 'Meditation hall', 'Flexibility training', 'Stress management'],
    accent: '#0B0F17',
  },
  {
    title: 'Karate & Martial Arts Academy',
    category: 'SELF-DEFENSE & DISCIPLINE',
    description:
      'Structured martial arts training where black-belt certified senseis guide students through katas, sparring stances, self-defense, and inner discipline.',
    image: '/karati.webp',
    highlights: ['Belt gradation exams', 'Self-defense techniques', 'Focus & reflex drills', 'Inter-school tournaments'],
    accent: '#DC2626',
  },
  {
    title: 'STEM & Robotics Projects',
    category: 'INNOVATION LAB',
    description:
      'Hands-on experimental projects where students build eco-friendly models, circuit boards, solar kits, and beginner robotic modules.',
    image: images.stemLearning,
    highlights: ['Annual science fair', 'Robotics building', 'Coding club', 'Eco-sustainability projects'],
    accent: '#16A34A',
  },
  {
    title: 'Excursions & Nature Trips',
    category: 'LEARNING OUTDOORS',
    description:
      'Educational field trips to planetariums, agricultural farms, heritage monuments, botanical gardens, and historical museums across Telangana.',
    image: images.outdoorGarden,
    highlights: ['Birla Planetarium', 'Agricultural research farms', 'Heritage fort walks', 'Eco-trail explorations'],
    accent: '#0B0F17',
  },
];

export default function StudentLife() {
  return (
    <div className="min-h-screen bg-white">
      {/* Editorial Hero Header */}
      <section className="pt-24 sm:pt-32 pb-16 sm:pb-20 bg-white border-b border-gray-100 relative overflow-hidden">
        <div
          className="absolute top-0 right-10 w-96 h-96 rounded-full bg-[#16A34A]/10 blur-3xl -z-10"
          aria-hidden="true"
        />
        <div className="max-w-[1240px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FEF2F2] text-[#DC2626] text-xs font-bold tracking-[0.2em] uppercase border border-red-100">
              <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A]" />
              LIFE BEYOND THE CLASSROOM
            </div>

            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold sm:font-extrabold text-[#0B0F17] leading-[1.12] tracking-tight">
              Curiosity in action,
              <br />
              <em className="text-[#DC2626] not-italic italic underline decoration-[#16A34A] decoration-wavy underline-offset-4">
                JOY IN EVERY STEP.
              </em>
            </h1>

            <p className="text-lg sm:text-2xl text-gray-600 leading-relaxed font-normal pt-2">
              Sports, performing arts, scientific discovery, and outdoor excursions
              woven seamlessly into each week, keeping school life energetic and inspiring.
            </p>
          </div>
        </div>
      </section>

      {/* Image-heavy Layout for All 9 Activities */}
      <section className="py-20 sm:py-28 bg-[#F8FAFC]">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {activitiesData.map((activity, idx) => (
              <Card
                key={idx}
                className="bg-white rounded-[32px] overflow-hidden border border-gray-200/80 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col group"
              >
                {/* Image */}
                <div className="aspect-[4/3] overflow-hidden relative bg-gray-100">
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <Badge variant="secondary" className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm text-[11px] font-bold tracking-widest uppercase text-[#0B0F17] shadow-sm">
                    {activity.category}
                  </Badge>
                </div>

                {/* Body Content */}
                <div className="p-7 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="font-display text-2xl font-bold text-[#0B0F17] mb-2 group-hover:text-[#DC2626] transition-colors">
                      {activity.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {activity.description}
                    </p>
                  </div>

                  {/* Highlights list */}
                  <div className="pt-3 border-t border-gray-100">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#0B0F17] block mb-2">
                      Key Highlights:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {activity.highlights.map((h, i) => (
                        <span
                          key={i}
                          className="text-xs bg-gray-50 px-2.5 py-1 rounded-lg border border-gray-200 text-[#0B0F17] font-medium"
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* House System Feature */}
      <section className="py-20 bg-[#F0FDF4] border-t border-emerald-100">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#16A34A]">
                COLLEGIATE SPIRIT
              </span>
              <h2 className="font-display text-3xl sm:text-4xl text-[#0B0F17]">
                The Four Houses of JRS.
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
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
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                <span className="text-xs font-bold uppercase tracking-widest text-[#DC2626]">
                  HOUSE 01
                </span>
                <h4 className="font-display text-xl font-bold text-[#DC2626] mt-1">
                  Agni (Valor)
                </h4>
                <p className="text-xs text-gray-500 mt-2">
                  Cultivating courage, perseverance, and passion for excellence.
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                <span className="text-xs font-bold uppercase tracking-widest text-[#0B0F17]">
                  HOUSE 02
                </span>
                <h4 className="font-display text-xl font-bold text-[#0B0F17] mt-1">
                  Varuna (Wisdom)
                </h4>
                <p className="text-xs text-gray-500 mt-2">
                  Embodying depth of thought, clarity of mind, and scholarship.
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                <span className="text-xs font-bold uppercase tracking-widest text-[#16A34A]">
                  HOUSE 03
                </span>
                <h4 className="font-display text-xl font-bold text-[#16A34A] mt-1">
                  Vayu (Agility)
                </h4>
                <p className="text-xs text-gray-500 mt-2">
                  Inspiring swift action, sportsmanship, and mental flexibility.
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                <span className="text-xs font-bold uppercase tracking-widest text-[#DC2626]">
                  HOUSE 04
                </span>
                <h4 className="font-display text-xl font-bold text-[#DC2626] mt-1">
                  Prithvi (Harmony)
                </h4>
                <p className="text-xs text-gray-500 mt-2">
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
