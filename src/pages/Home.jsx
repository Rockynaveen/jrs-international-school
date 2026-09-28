import React from 'react';
import Hero from '../components/Hero';
import VideoHero from '../components/VideoHero';
import AcademicPathways from '../components/AcademicPathways';
import Stats from '../components/Stats';
import ImageStory from '../components/ImageStory';
import ContactSection from '../components/ContactSection';
import Gallery from '../components/Gallery';
import Button from '../components/Button';
import CoCurricularCarousel from '../components/CoCurricularCarousel';

export default function Home({ heroMode = 'home-1' }) {

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      {/* CONDITIONAL HERO: Home 1 (Image Hero) or Home 2 (Video Hero) */}
      {heroMode === 'home-2' ? <VideoHero /> : <Hero />}

      {/* 3. ABOUT JRS SECTION */}
      <section id="about" className="py-10 bg-[#FFF8ED] relative overflow-hidden">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Asymmetric Split Heading & Text */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Left: Heading */}
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-[#0B6DB7] uppercase">
                <span className="w-2 h-2 rounded-full bg-[#0B6DB7]" />
                ABOUT JRS • CBSE AFFILIATION # 3630478
              </div>

              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#152A40] leading-[1.12]">
                Little steps.
                <br />
                <span className="text-[#EF8750] not-italic italic">
                  BIG possibilities.
                </span>
              </h2>
            </div>

            {/* Right: Editorial Narrative & Button */}
            <div className="lg:col-span-7 space-y-6 lg:pl-6 border-l-0 lg:border-l-2 border-slate-200">
              <p className="text-xl sm:text-2xl text-[#152A40] font-normal leading-relaxed">
                JRS International School features comprehensive coverage of the{' '}
                <span className="font-semibold text-[#06335F]">
                  CBSE curriculum with IIT &amp; NIT Foundation
                </span>. Our dedicated staff doesn’t teach out of necessity, but rather out of an inspired passion for teaching and learning.
              </p>
              <p className="text-base sm:text-lg text-[#68798B] leading-relaxed">
                Committed since 2021 to the promotion of education and human values, our acres of pollution-free campus at Korremula X Road, Narapally, near Uppal Bus Depot, Hyderabad meets all international standards for holistic education.
              </p>
              <div className="pt-2">
                <Button
                  href="#admissions"
                  variant="primary"
                  size="md"
                  className="bg-[#06335F] text-white hover:bg-[#0B6DB7]"
                >
                  Admissions Enquiry
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. IMAGE STORY SECTION (Overlapping joy, yellow & navy cards) */}
      <ImageStory />

      {/* 4. STATISTICS SECTION */}
      <Stats />

      {/* 5. ACADEMIC PATHWAYS */}
      <AcademicPathways />

      {/* 6. CO-CURRICULAR ACTIVITIES CAROUSEL (Beyond the Classroom) */}
      <CoCurricularCarousel />

      {/* 7. CAMPUS LIFE GALLERY */}
      <div id="campus">
        <Gallery />
      </div>


      {/* 9. CONTACT & ADMISSION FORM (Left Side Image, Right Side Simple Form) */}
      <div id="admissions">
        <ContactSection />
      </div>
    </div>
  );
}
