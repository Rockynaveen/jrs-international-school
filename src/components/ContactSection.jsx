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
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-[#EEF2F6] via-[#F8FAFC] to-[#EEF2F6] relative overflow-hidden border-t border-slate-200">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Clean & Simple, No Sub-paragraph */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50/80 text-[#DC2626] text-xs font-semibold tracking-[0.2em] uppercase border border-red-100 mb-3.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]" />
            GET IN TOUCH • ADMISSIONS 2026–27
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-[42px] text-[#0B0F17] leading-[1.18] tracking-tight">
            Connect with our{' '}
            <span className="bg-gradient-to-r from-[#DC2626] to-[#EF4444] bg-clip-text text-transparent">
              admissions team.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-sans mt-3 max-w-lg mx-auto">
            Book a campus walkthrough, explore scholarship details, and register for 2026–27 admissions.
          </p>
        </div>

        {/* Simple 2-Column Layout: School Image on Left, Form on Right */}
        <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden grid grid-cols-1 lg:grid-cols-12 shadow-sm">
          
          {/* LEFT: School Image & Direct Info */}
          <div className="lg:col-span-5 relative flex flex-col justify-between min-h-[380px] lg:min-h-[540px] overflow-hidden">
            {/* Campus Image */}
            <img
              src="/contact-school-building.jpg"
              alt="JRS International School Campus"
              className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
            />
            {/* Soft gradient overlay at bottom for readable text */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent pointer-events-none" />

            {/* Top Pill */}
            <div className="relative z-10 p-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#0B0F17] text-xs font-semibold border border-white/40">
                <span className="w-2 h-2 rounded-full bg-[#16A34A]" />
                Admissions Open 2026–27
              </span>
            </div>

            {/* Bottom Info Card */}
            <div className="relative z-10 p-6 text-white space-y-3">
              <div>
                <h3 className="font-modern text-xl font-bold text-white leading-snug">
                  JRS International School
                </h3>
                <p className="text-xs text-slate-200 mt-1 leading-relaxed">
                  {schoolContact.address}
                </p>
              </div>

              <div className="pt-2 border-t border-white/20 flex flex-col sm:flex-row lg:flex-col gap-2 text-xs">
                <a
                  href={`tel:${schoolContact.primaryPhone}`}
                  className="inline-flex items-center gap-2 text-white hover:text-red-300 transition-colors"
                >
                  <span className="w-5 h-5 rounded-full bg-red-600/80 flex items-center justify-center text-[10px]">
                    📞
                  </span>
                  <span>+91 8367777545 / 8367777548</span>
                </a>
                <a
                  href={`mailto:${schoolContact.email}`}
                  className="inline-flex items-center gap-2 text-white hover:text-red-300 transition-colors"
                >
                  <span className="w-5 h-5 rounded-full bg-emerald-600/80 flex items-center justify-center text-[10px]">
                    ✉️
                  </span>
                  <span>{schoolContact.email}</span>
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT: Simple Contact & Enquiry Form */}
          <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-center bg-white">
            {isSubmitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-50 text-[#16A34A] flex items-center justify-center text-2xl mx-auto border border-emerald-100">
                  ✓
                </div>
                <h3 className="font-modern text-2xl font-bold text-[#0B0F17]">
                  Enquiry Submitted!
                </h3>
                <p className="text-slate-600 text-sm max-w-md mx-auto">
                  Thank you for contacting JRS International School. Our team will reach out to you shortly.
                </p>
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
                  className="mt-4 px-6 py-2.5 rounded-full bg-slate-900 text-white hover:bg-[#16A34A] text-xs font-semibold transition-colors cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Student Name */}
                  <div>
                    <label
                      htmlFor="studentName"
                      className="block text-xs font-bold text-[#0B0F17] uppercase tracking-wider mb-1"
                    >
                      Student Name *
                    </label>
                    <input
                      type="text"
                      id="studentName"
                      name="studentName"
                      required
                      placeholder="Student full name"
                      value={formData.studentName}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-[#DC2626] focus:ring-2 focus:ring-[#DC2626]/10 outline-none text-sm text-[#0B0F17] transition-colors"
                    />
                  </div>

                  {/* Parent Name */}
                  <div>
                    <label
                      htmlFor="parentName"
                      className="block text-xs font-bold text-[#0B0F17] uppercase tracking-wider mb-1"
                    >
                      Parent / Guardian Name *
                    </label>
                    <input
                      type="text"
                      id="parentName"
                      name="parentName"
                      required
                      placeholder="Parent full name"
                      value={formData.parentName}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-[#DC2626] focus:ring-2 focus:ring-[#DC2626]/10 outline-none text-sm text-[#0B0F17] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-xs font-bold text-[#0B0F17] uppercase tracking-wider mb-1"
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
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-[#DC2626] focus:ring-2 focus:ring-[#DC2626]/10 outline-none text-sm text-[#0B0F17] transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-bold text-[#0B0F17] uppercase tracking-wider mb-1"
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
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-[#DC2626] focus:ring-2 focus:ring-[#DC2626]/10 outline-none text-sm text-[#0B0F17] transition-colors"
                    />
                  </div>
                </div>

                {/* Grade */}
                <div>
                  <label
                    htmlFor="grade"
                    className="block text-xs font-bold text-[#0B0F17] uppercase tracking-wider mb-1"
                  >
                    Grade Seeking Admission *
                  </label>
                  <select
                    id="grade"
                    name="grade"
                    value={formData.grade}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-[#DC2626] focus:ring-2 focus:ring-[#DC2626]/10 outline-none text-sm text-[#0B0F17] transition-colors bg-white cursor-pointer"
                  >
                    <option value="Pre-Primary (Nursery / PP1 / PP2)">Pre-Primary (Nursery / PP1 / PP2)</option>
                    <option value="Grade 1">Grade 1</option>
                    <option value="Grade 2">Grade 2</option>
                    <option value="Grade 3">Grade 3</option>
                    <option value="Grade 4">Grade 4</option>
                    <option value="Grade 5">Grade 5</option>
                    <option value="Grade 6">Grade 6</option>
                    <option value="Grade 7">Grade 7</option>
                    <option value="Grade 8">Grade 8</option>
                    <option value="Grade 9">Grade 9</option>
                    <option value="Grade 10">Grade 10</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-bold text-[#0B0F17] uppercase tracking-wider mb-1"
                  >
                    Message (Optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="3"
                    placeholder="Any specific questions about admissions, transportation, or fee structure..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-[#DC2626] focus:ring-2 focus:ring-[#DC2626]/10 outline-none text-sm text-[#0B0F17] transition-colors resize-none"
                  />
                </div>

                {/* Submit Button - Red gradient to Green hover, no shadow */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#DC2626] to-[#B91C1C] text-white hover:from-[#16A34A] hover:to-[#15803D] px-8 py-3 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer disabled:opacity-70"
                  >
                    <span>{isSubmitting ? 'Submitting...' : 'Submit Enquiry'}</span>
                    <span>→</span>
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}

