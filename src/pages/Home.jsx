import React from 'react';
import Hero from '../components/Hero';
import VideoHero from '../components/VideoHero';
import WhyJRS from '../components/WhyJRS';
import AcademicPathways from '../components/AcademicPathways';
import Stats from '../components/Stats';
import ContactSection from '../components/ContactSection';
import Gallery from '../components/Gallery';
import Button from '../components/Button';
import CoCurricularCarousel from '../components/CoCurricularCarousel';
import LatestEvents from '../components/LatestEvents';

export default function Home({ heroMode = 'home-1' }) {

  return (
    <div className="min-h-screen bg-white">
      {/* 1. HERO BANNER */}
      {heroMode === 'home-2' ? <VideoHero /> : <Hero />}

      {/* 2. ABOUT US (School Identity & Academic Vision) */}
      <WhyJRS />

      {/* 3. ACADEMIC PATHWAYS (Pre-Primary, Primary, Middle School) */}
      <AcademicPathways />

      {/* 4. BEYOND THE CLASSROOM (Co-Curricular, Sports, Arts & STEM) */}
      <CoCurricularCarousel />

      {/* 5. CAMPUS LIFE GALLERY (Facilities, Sports Grounds & Classrooms) */}
      <div id="campus">
        <Gallery />
      </div>

      {/* 6. LATEST EVENTS & CELEBRATIONS (Happenings, Sports Meet & Culture) */}
      <LatestEvents />

      {/* 7. OUR COMMUNITY & CREDIBILITY (Stats, 1:15 Ratio, Pass Rate & Campus Scale) */}
      <Stats />

      {/* 8. ADMISSION & CONTACT ENQUIRY (Campus Image & Fast Enquiry Form) */}
      <div id="admissions">
        <ContactSection />
      </div>
    </div>
  );
}
