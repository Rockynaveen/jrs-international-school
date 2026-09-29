import React, { useState } from 'react';
import { schoolContact } from '../data/siteData';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    phone: '',
    email: '',
    grade: 'Grade 1',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#F8FAFC] relative overflow-hidden border-t border-slate-100">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white text-[#DC2626] text-xs font-bold tracking-[0.2em] uppercase shadow-xs border border-slate-200">
            <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
            GET IN TOUCH • ADMISSIONS 2026–27
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[#0B0F17] leading-tight">
            Connect with our{' '}
            <span className="text-[#DC2626] not-italic italic">
              admissions team.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-[#4B5563] leading-relaxed max-w-lg mx-auto">
            Schedule a personal campus tour, discuss CBSE curriculum &amp; IIT/NIT foundation,
            or enquire about seat availability.
          </p>
        </div>

        {/* 2-Column Card: Left Side Image, Right Side Simple Form */}
        <div className="bg-white rounded-[32px] sm:rounded-[36px] shadow-xl border border-slate-100 overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          
          {/* LEFT COLUMN: School Campus Image & Quick Details */}
          <div className="lg:col-span-5 relative min-h-[340px] sm:min-h-[420px] lg:min-h-full bg-[#0B0F17] overflow-hidden flex flex-col justify-between p-6 sm:p-8 text-white">
            {/* Campus Background Image */}
            <img
              src="/hero-building.jpg"
              alt="JRS International School Campus Building"
              className="absolute inset-0 w-full h-full object-cover z-0 filter brightness-[0.55] contrast-[1.1] transition-transform duration-700 hover:scale-105"
            />
            
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F17]/95 via-[#0B0F17]/50 to-[#0B0F17]/30 z-10 pointer-events-none" />

            {/* Top Badge */}
            <div className="relative z-20">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-bold tracking-wider uppercase">
                <span>📍 Narapally, Hyderabad</span>
              </div>
            </div>

            {/* Bottom Contact Card Content */}
            <div className="relative z-20 space-y-4 pt-20">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-widest text-[#16A34A]">
                  CBSE Affiliation # 3630478
                </p>
                <h3 className="font-modern font-bold text-xl sm:text-2xl text-white mt-1">
                  JRS International School
                </h3>
                <p className="text-xs sm:text-sm text-slate-200 mt-1 leading-snug">
                  {schoolContact.address}
                </p>
              </div>

              {/* Direct Info Pills */}
              <div className="space-y-2 pt-2 border-t border-white/20 text-xs sm:text-sm">
                <a
                  href={`tel:${schoolContact.primaryPhone}`}
                  className="flex items-center gap-2.5 text-slate-200 hover:text-[#DC2626] transition-colors"
                >
                  <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-xs shrink-0">
                    📞
                  </span>
                  <span>+91 8367777545 / 8367777548</span>
                </a>

                <a
                  href={`mailto:${schoolContact.email}`}
                  className="flex items-center gap-2.5 text-slate-200 hover:text-[#DC2626] transition-colors"
                >
                  <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-xs shrink-0">
                    ✉️
                  </span>
                  <span className="truncate">{schoolContact.email}</span>
                </a>

                <div className="flex items-center gap-2.5 text-slate-300">
                  <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-xs shrink-0">
                    ⏰
                  </span>
                  <span>8:15 AM – 3:30 PM (Mon – Sat)</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Clean Simple Form */}
          <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-center">
            {isSubmitted ? (
              <div className="text-center py-10 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#F0FDF4] text-[#16A34A] flex items-center justify-center text-3xl mx-auto shadow-sm">
                  ✓
                </div>
                <h3 className="font-modern text-2xl font-bold text-[#0B0F17]">
                  Enquiry Received!
                </h3>
                <p className="text-slate-600 max-w-md mx-auto text-sm leading-relaxed">
                  Thank you for your interest in JRS International School. Our admissions
                  counselor will get in touch with you shortly on{' '}
                  <strong className="text-[#0B0F17]">{formData.phone || 'your phone number'}</strong>.
                </p>
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        studentName: '',
                        parentName: '',
                        phone: '',
                        email: '',
                        grade: 'Grade 1',
                        message: '',
                      });
                    }}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#0B0F17] text-white hover:bg-[#DC2626] text-xs font-semibold transition-colors cursor-pointer"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <div className="space-y-1">
                  <h3 className="font-modern font-bold text-2xl text-[#0B0F17]">
                    Admission &amp; Campus Enquiry
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500">
                    Fill out this simple form and we will call you back with admission guidelines and fee structure.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Student Name */}
                  <div>
                    <label
                      htmlFor="studentName"
                      className="block text-xs font-bold uppercase tracking-wider text-[#0B0F17] mb-1.5"
                    >
                      Student Name *
                    </label>
                    <input
                      type="text"
                      id="studentName"
                      name="studentName"
                      required
                      placeholder="e.g. Aarav Sharma"
                      value={formData.studentName}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-[#DC2626] focus:ring-2 focus:ring-[#DC2626]/10 outline-none text-sm text-[#0B0F17] transition-colors"
                    />
                  </div>

                  {/* Parent Name */}
                  <div>
                    <label
                      htmlFor="parentName"
                      className="block text-xs font-bold uppercase tracking-wider text-[#0B0F17] mb-1.5"
                    >
                      Parent / Guardian Name *
                    </label>
                    <input
                      type="text"
                      id="parentName"
                      name="parentName"
                      required
                      placeholder="e.g. Rajesh Sharma"
                      value={formData.parentName}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-[#DC2626] focus:ring-2 focus:ring-[#DC2626]/10 outline-none text-sm text-[#0B0F17] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Phone Number */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-xs font-bold uppercase tracking-wider text-[#0B0F17] mb-1.5"
                    >
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-[#DC2626] focus:ring-2 focus:ring-[#DC2626]/10 outline-none text-sm text-[#0B0F17] transition-colors"
                    />
                  </div>

                  {/* Email Address */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-bold uppercase tracking-wider text-[#0B0F17] mb-1.5"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-[#DC2626] focus:ring-2 focus:ring-[#DC2626]/10 outline-none text-sm text-[#0B0F17] transition-colors"
                    />
                  </div>
                </div>

                {/* Grade Seeking Admission */}
                <div>
                  <label
                    htmlFor="grade"
                    className="block text-xs font-bold uppercase tracking-wider text-[#0B0F17] mb-1.5"
                  >
                    Grade Seeking Admission *
                  </label>
                  <select
                    id="grade"
                    name="grade"
                    value={formData.grade}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-[#DC2626] focus:ring-2 focus:ring-[#DC2626]/10 outline-none text-sm text-[#0B0F17] transition-colors bg-white cursor-pointer"
                  >
                    <option value="Pre-Primary (Nursery / PP1 / PP2)">Pre-Primary (Nursery / PP1 / PP2)</option>
                    <option value="Grade 1">Grade 1</option>
                    <option value="Grade 2">Grade 2</option>
                    <option value="Grade 3">Grade 3</option>
                    <option value="Grade 4">Grade 4</option>
                    <option value="Grade 5">Grade 5</option>
                    <option value="Grade 6 (Middle School)">Grade 6 (Middle School)</option>
                    <option value="Grade 7">Grade 7</option>
                    <option value="Grade 8">Grade 8</option>
                    <option value="Grade 9">Grade 9</option>
                    <option value="Grade 10">Grade 10</option>
                  </select>
                </div>

                {/* Message / Questions */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-bold uppercase tracking-wider text-[#0B0F17] mb-1.5"
                  >
                    Questions or Message (Optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="3"
                    placeholder="Ask about school timings, transport routes, curriculum or schedule a campus tour..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-[#DC2626] focus:ring-2 focus:ring-[#DC2626]/10 outline-none text-sm text-[#0B0F17] transition-colors resize-none"
                  />
                </div>

                {/* Submit Action */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#DC2626] text-white hover:bg-[#B91C1C] px-8 py-3 rounded-full text-sm font-semibold transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 cursor-pointer disabled:opacity-70"
                  >
                    <span>{isSubmitting ? 'Submitting...' : 'Submit Enquiry'}</span>
                    <span className="text-xs">›</span>
                  </button>

                  <span className="text-xs text-slate-400 text-center sm:text-right">
                    🔒 All information is kept strictly confidential.
                  </span>
                </div>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
