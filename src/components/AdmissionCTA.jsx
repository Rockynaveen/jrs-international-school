import React from 'react';
import Button from './Button';
import { schoolContact } from '../data/siteData';

export default function AdmissionCTA() {
  return (
    <section className="bg-[#FFF8ED] py-20 sm:py-28 relative overflow-hidden border-t border-slate-200/60">
      <div className="max-w-[1040px] mx-auto px-6 text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-[#06335F] text-xs font-bold tracking-[0.2em] uppercase shadow-sm border border-slate-100 mb-6">
          <span className="w-2 h-2 rounded-full bg-[#EF8750]" />
          ADMISSIONS OPEN 2026–27
        </div>

        {/* Heading */}
        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#152A40] leading-[1.12] mb-6">
          Ready for their
          <br />
          <span className="text-[#EF8750] not-italic italic">
            NEXT BIG STEP?
          </span>
        </h2>

        {/* Text */}
        <p className="text-base sm:text-xl text-[#68798B] leading-relaxed max-w-2xl mx-auto mb-10 font-normal">
          Discover the JRS approach and begin an admission enquiry. Our admissions
          counselors are ready to guide your family through campus visits, interaction
          sessions, and enrollment.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button
            href={`tel:${schoolContact.primaryPhone}`}
            variant="secondary"
            size="lg"
            arrowType="right"
            className="bg-[#F7C95E] text-[#06335F] hover:bg-[#fad04e] font-semibold px-9 py-4 shadow-md"
          >
            Call Admissions ({schoolContact.primaryPhone})
          </Button>

          <Button
            href={`mailto:${schoolContact.email}?subject=Campus%20Visit%20Enquiry`}
            variant="outline"
            size="lg"
            arrowType="diagonal"
            className="bg-white border-2 border-[#06335F]/20 text-[#06335F] hover:bg-slate-50 px-8 py-4 font-semibold"
          >
            Schedule Campus Visit
          </Button>
        </div>

        {/* Quick Contact Line */}
        <div className="mt-10 pt-8 border-t border-slate-200/80 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-[#68798B]">
          <span>
            📍 Korremula X Road, Narapally, Near Uppal Depot, Hyderabad
          </span>
          <span>•</span>
          <span>
            📞 Helpline:{' '}
            <a
              href={`tel:${schoolContact.primaryPhone}`}
              className="text-[#06335F] font-semibold hover:text-[#0B6DB7]"
            >
              +91 8367777545
            </a>
            {', '}
            <a
              href={`tel:${schoolContact.secondaryPhone}`}
              className="text-[#06335F] font-semibold hover:text-[#0B6DB7]"
            >
              8367777548
            </a>
          </span>
          <span>•</span>
          <span>
            ✉️{' '}
            <a
              href={`mailto:${schoolContact.email}`}
              className="text-[#06335F] font-semibold hover:text-[#0B6DB7]"
            >
              {schoolContact.email}
            </a>
          </span>
        </div>
      </div>
    </section>
  );
}
