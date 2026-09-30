import React, { useState } from 'react';
import AdmissionCTA from '../components/AdmissionCTA';
import Button from '../components/Button';
import { Badge } from '../components/ui/badge';
import { Card } from '../components/ui/card';
import { images, schoolContact } from '../data/siteData';

const facilitiesList = [
  {
    id: '01',
    name: 'Football Ground',
    category: 'OUTDOOR SPORTS',
    description:
      'Lush green natural turf football field standardly proportioned for inter-school tournaments, physical training, and evening coaching clinics.',
    image: images.sportsField,
    spec: 'Full-size pitch with boundary fencing',
  },
  {
    id: '02',
    name: 'Cricket Ground & Nets',
    category: 'OUTDOOR SPORTS',
    description:
      'Dedicated cricket pitch equipped with bowling nets, turf wickets, and professional coaching equipment for budding bowlers and batsmen.',
    image: images.sportsField,
    spec: 'Multiple practice nets & turf wicket',
  },
  {
    id: '03',
    name: 'Basketball Court',
    category: 'COURT SPORTS',
    description:
      'All-weather shock-absorbent synthetic surface basketball court with regulation acrylic backboards and evening floodlight systems.',
    image: images.basketballCourt,
    spec: 'Standard full-size outdoor court',
  },
  {
    id: '04',
    name: 'Volleyball Arena',
    category: 'COURT SPORTS',
    description:
      'Dedicated court with professional net systems and soft ground leveling designed for high-energy volleyball practices and matches.',
    image: images.sportsField,
    spec: 'Regulation tournament dimensions',
  },
  {
    id: '05',
    name: 'Swimming Pool',
    category: 'AQUATICS',
    description:
      'Hygienic, temperature-moderated swimming pool with certified full-time lifeguards, separate shallow learner zones, and modern filtration.',
    image: images.swimmingPool,
    spec: 'Certified lifeguards & continuous filtration',
  },
  {
    id: '06',
    name: 'Meditation & Zen Hall',
    category: 'WELLNESS & MINDFULNESS',
    description:
      'Quiet acoustic-insulated hall filled with natural ventilation for daily morning yoga, pranayama breathing, and peaceful contemplation.',
    image: images.yogaZen,
    spec: 'Peaceful timber floor & peaceful ambiance',
  },
  {
    id: '07',
    name: 'Hygienic Canteen & Dining',
    category: 'NUTRITION & HEALTH',
    description:
      'Modern, spotless cafeteria preparing wholesome, nutritionist-approved vegetarian meals and fresh drinking water RO facilities.',
    image: images.canteenDining,
    spec: 'FSSAI compliant & steam-cleaned daily',
  },
  {
    id: '08',
    name: 'GPS-Tracked Transport Fleet',
    category: 'SAFETY & COMMUTE',
    description:
      'Air-conditioned school buses covering major routes across Narapally, Uppal, Boduppal, Ghatkesar, and Pocharam with live GPS and lady attendants.',
    image: images.campusExterior,
    spec: 'Live parent app tracking & female attendants',
  },
  {
    id: '09',
    name: 'Comprehensive CCTV Coverage',
    category: 'CAMPUS SECURITY',
    description:
      '24/7 high-definition camera surveillance monitoring all corridors, gates, playground boundaries, and common learning arenas.',
    image: images.classroomModern,
    spec: '100% boundary & corridor coverage',
  },
  {
    id: '10',
    name: 'Medical Support & Infirmary',
    category: 'HEALTHCARE',
    description:
      'On-campus health bay staffed with a qualified nurse, emergency first aid equipment, and tied-up rapid hospital ambulance access.',
    image: images.prePrimaryPlay,
    spec: 'Qualified nursing staff on-site daily',
  },
  {
    id: '11',
    name: 'Modern Computing Labs',
    category: 'TECHNOLOGY',
    description:
      'Ergonomic workstation labs equipped with high-speed computers, age-appropriate educational software, coding suites, and interactive digital boards.',
    image: images.computerLab,
    spec: '1:1 computer ratio per student in sessions',
  },
  {
    id: '12',
    name: 'Campus Internet & Wi-Fi',
    category: 'CONNECTIVITY',
    description:
      'Secure, enterprise-grade firewalled high-speed Wi-Fi enabling multimedia classroom teaching, smart projectors, and online research.',
    image: images.libraryModern,
    spec: 'Child-safe filtered firewall network',
  },
];

export default function Campus() {
  const [activeFilter, setActiveFilter] = useState('ALL');

  const categories = ['ALL', 'SPORTS', 'ACADEMICS', 'WELLNESS', 'SAFETY'];

  const filteredFacilities = facilitiesList.filter((f) => {
    if (activeFilter === 'ALL') return true;
    if (activeFilter === 'SPORTS')
      return (
        f.category.includes('SPORTS') || f.category.includes('AQUATICS')
      );
    if (activeFilter === 'ACADEMICS')
      return (
        f.category.includes('TECHNOLOGY') || f.category.includes('CONNECTIVITY')
      );
    if (activeFilter === 'WELLNESS')
      return (
        f.category.includes('WELLNESS') || f.category.includes('NUTRITION')
      );
    if (activeFilter === 'SAFETY')
      return (
        f.category.includes('SAFETY') ||
        f.category.includes('SECURITY') ||
        f.category.includes('HEALTHCARE')
      );
    return true;
  });

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
              STATE-OF-THE-ART CAMPUS
            </div>

            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold sm:font-extrabold text-[#0B0F17] leading-[1.12] tracking-tight">
              Spaces that inspire,
              <br />
              <em className="text-[#DC2626] not-italic italic underline decoration-[#16A34A] decoration-wavy underline-offset-4">
                GROUNDS THAT NURTURE.
              </em>
            </h1>

            <p className="text-lg sm:text-2xl text-gray-600 leading-relaxed font-normal pt-2">
              Sprawled across expansive green grounds in Narapally, Hyderabad,
              our campus combines natural sunlight, fresh open air, and world-class
              educational and athletic facilities.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-white border-b border-gray-100 sticky top-18 sm:top-20 z-30 shadow-xs">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-12 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  activeFilter === cat
                    ? 'bg-[#DC2626] text-white shadow-sm'
                    : 'bg-gray-100 text-[#0B0F17] hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <span className="text-xs text-gray-500 font-medium hidden sm:inline-block">
            Showing {filteredFacilities.length} Campus Facilities
          </span>
        </div>
      </section>

      {/* Modern Editorial Facility Grid (12 core facilities) */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#F8FAFC]">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredFacilities.map((facility) => (
              <Card
                key={facility.id}
                className="bg-white rounded-[32px] overflow-hidden border border-gray-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-500 flex flex-col group"
              >
                {/* Image */}
                <div className="aspect-[16/10] overflow-hidden relative bg-gray-100">
                  <img
                    src={facility.image}
                    alt={facility.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm text-[#0B0F17] font-display text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                    {facility.id}
                  </div>
                  <Badge variant="black" className="absolute bottom-3 left-4 backdrop-blur-sm text-white px-3 py-1 text-[10px] font-bold tracking-widest uppercase">
                    {facility.category}
                  </Badge>
                </div>

                {/* Content */}
                <div className="p-7 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="font-display text-2xl font-bold text-[#0B0F17] mb-2 group-hover:text-[#DC2626] transition-colors">
                      {facility.name}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {facility.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-[#0B0F17] font-medium">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A]" />
                      {facility.spec}
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Safety & Campus Care Banner */}
      <section className="py-10 bg-[#F0FDF4] border-y border-emerald-100">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div className="space-y-2">
              <span className="text-3xl">🛡️</span>
              <h4 className="font-display text-xl font-bold text-[#0B0F17]">
                Safety First Protocol
              </h4>
              <p className="text-xs sm:text-sm text-gray-600">
                Secured access gates, visitor screening software, verified support staff,
                and female caretakers on every floor.
              </p>
            </div>
            <div className="space-y-2">
              <span className="text-3xl">🚌</span>
              <h4 className="font-display text-xl font-bold text-[#0B0F17]">
                Safe Transit
              </h4>
              <p className="text-xs sm:text-sm text-gray-600">
                Speed governors, CCTV cameras, and first-aid kits in every school bus,
                coupled with real-time route alerts.
              </p>
            </div>
            <div className="space-y-2">
              <span className="text-3xl">🌿</span>
              <h4 className="font-display text-xl font-bold text-[#0B0F17]">
                Green & Sustainable Campus
              </h4>
              <p className="text-xs sm:text-sm text-gray-600">
                Rainwater harvesting pits, extensive solar panels, organic vegetable
                garden patches, and natural cross-ventilation.
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
