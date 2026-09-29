import React, { useState } from 'react';
import Button from '../components/Button';
import { schoolContact } from '../data/siteData';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Editorial Hero Header */}
      <section className="pt-12 sm:pt-20 pb-16 bg-white border-b border-gray-100 relative overflow-hidden">
        <div
          className="absolute top-0 right-10 w-96 h-96 rounded-full bg-[#DC2626]/10 blur-3xl -z-10"
          aria-hidden="true"
        />
        <div className="max-w-[1240px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FEF2F2] text-[#DC2626] text-xs font-bold tracking-[0.2em] uppercase border border-red-100">
              <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A]" />
              GET IN TOUCH
            </div>

            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold sm:font-extrabold text-[#0B0F17] leading-[1.12] tracking-tight">
              We’d love to
              <br />
              <em className="text-[#DC2626] not-italic italic underline decoration-[#16A34A] decoration-wavy underline-offset-4">
                HEAR FROM YOU.
              </em>
            </h1>

            <p className="text-lg sm:text-2xl text-gray-600 leading-relaxed font-normal pt-2">
              Whether you are exploring enrollment for the upcoming academic year
              or have questions about our curriculum, our campus team is here to assist.
            </p>
          </div>
        </div>
      </section>

      {/* Main Split Section: Contact Info & Form */}
      <section className="py-10 bg-[#F8FAFC]">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Official Details */}
            <div className="lg:col-span-5 space-y-8">
              <div className="bg-white rounded-[32px] p-8 sm:p-10 shadow-lg border border-gray-200/80 space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#DC2626] block mb-1">
                    CAMPUS LOCATION
                  </span>
                  <h3 className="font-display text-2xl font-bold text-[#0B0F17]">
                    {schoolContact.name}
                  </h3>
                </div>

                <div className="space-y-4 text-sm text-[#0B0F17]">
                  <div className="flex items-start gap-3.5">
                    <span className="w-9 h-9 rounded-xl bg-[#F0FDF4] text-[#16A34A] flex items-center justify-center font-bold shrink-0 mt-0.5">
                      📍
                    </span>
                    <div>
                      <strong className="block text-[#0B0F17] mb-1">
                        Postal Address
                      </strong>
                      <p className="text-gray-600 leading-relaxed">
                        Survey No. 725, Korremula X Road, Narapally,
                        <br />
                        near Uppal Bus Depot, Hyderabad,
                        <br />
                        Telangana 500088
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 pt-2 border-t border-gray-100">
                    <span className="w-9 h-9 rounded-xl bg-[#F0FDF4] text-[#16A34A] flex items-center justify-center font-bold shrink-0 mt-0.5">
                      📞
                    </span>
                    <div>
                      <strong className="block text-[#0B0F17] mb-1">
                        Direct Phone / WhatsApp
                      </strong>
                      <a
                        href={`tel:${schoolContact.phone}`}
                        className="text-lg font-semibold text-[#0B0F17] hover:text-[#DC2626] transition-colors"
                      >
                        {schoolContact.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 pt-2 border-t border-gray-100">
                    <span className="w-9 h-9 rounded-xl bg-[#F0FDF4] text-[#16A34A] flex items-center justify-center font-bold shrink-0 mt-0.5">
                      ✉️
                    </span>
                    <div>
                      <strong className="block text-[#0B0F17] mb-1">
                        Official Admissions Email
                      </strong>
                      <a
                        href={`mailto:${schoolContact.email}`}
                        className="text-[#0B0F17] hover:text-[#DC2626] transition-colors font-medium"
                      >
                        {schoolContact.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 pt-2 border-t border-gray-100">
                    <span className="w-9 h-9 rounded-xl bg-[#F0FDF4] text-[#16A34A] flex items-center justify-center font-bold shrink-0 mt-0.5">
                      ⏱
                    </span>
                    <div>
                      <strong className="block text-[#0B0F17] mb-1">
                        Visiting & Campus Hours
                      </strong>
                      <p className="text-gray-600">
                        Monday – Saturday: 8:15 AM – 3:30 PM
                        <br />
                        <span className="text-xs text-[#DC2626] font-medium">
                          Admissions desk open on second Saturdays by appointment.
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Landmark & Directions Note */}
              <div className="bg-[#FEF2F2] rounded-3xl p-6 sm:p-8 border border-red-100 space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#DC2626]">
                  <span>🗺️</span>
                  <span>HOW TO REACH US</span>
                </div>
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                  Conveniently situated just off the Hyderabad-Warangal Highway at
                  Korremula Cross Road, Narapally, only 10 minutes from Uppal Bus Depot
                  and Uppal Metro Station.
                </p>
                <div className="pt-1">
                  <a
                    href="https://maps.google.com/?q=JRS+International+School+Narapally+Hyderabad"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#DC2626] hover:text-[#16A34A]"
                  >
                    Open in Google Maps ↗
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Contact & Message Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-[36px] p-8 sm:p-12 shadow-xl border border-gray-100">
                {submitted ? (
                  <div className="text-center py-12 space-y-4">
                    <div className="w-16 h-16 rounded-full bg-[#F0FDF4] text-[#16A34A] text-3xl flex items-center justify-center mx-auto mb-4">
                      ✓
                    </div>
                    <h3 className="font-display text-3xl font-bold text-[#0B0F17]">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-gray-600 max-w-md mx-auto text-base">
                      Thank you for contacting JRS International School,{' '}
                      <strong className="text-[#0B0F17]">{form.name}</strong>. Our front
                      desk officer will reach out to{' '}
                      <strong className="text-[#0B0F17]">{form.phone || form.email}</strong>{' '}
                      promptly.
                    </p>
                    <div className="pt-4">
                      <Button
                        onClick={() => {
                          setSubmitted(false);
                          setForm({
                            name: '',
                            phone: '',
                            email: '',
                            subject: '',
                            message: '',
                          });
                        }}
                        variant="primary"
                        arrow={false}
                        className="bg-[#DC2626] text-white hover:bg-[#16A34A]"
                      >
                        Send Another Note
                      </Button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <h3 className="font-display text-2xl sm:text-3xl font-semibold text-[#0B0F17]">
                        Send Us a Message
                      </h3>
                      <p className="text-sm text-gray-500 mt-1">
                        Fill out the form and our school team will reply promptly.
                      </p>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#0B0F17] mb-2">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="e.g. Ananya Sharma"
                        className="w-full px-5 py-3.5 rounded-2xl bg-slate-50 border border-gray-200 text-[#0B0F17] focus:bg-white focus:border-[#DC2626] focus:ring-2 focus:ring-[#DC2626]/20 outline-none transition-all text-sm"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#0B0F17] mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+91 98765 43210"
                          className="w-full px-5 py-3.5 rounded-2xl bg-slate-50 border border-gray-200 text-[#0B0F17] focus:bg-white focus:border-[#DC2626] focus:ring-2 focus:ring-[#DC2626]/20 outline-none transition-all text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#0B0F17] mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          placeholder="ananya@example.com"
                          className="w-full px-5 py-3.5 rounded-2xl bg-slate-50 border border-gray-200 text-[#0B0F17] focus:bg-white focus:border-[#DC2626] focus:ring-2 focus:ring-[#DC2626]/20 outline-none transition-all text-sm"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#0B0F17] mb-2">
                        Purpose of Enquiry *
                      </label>
                      <select
                        name="subject"
                        required
                        value={form.subject}
                        onChange={handleChange}
                        className="w-full px-5 py-3.5 rounded-2xl bg-slate-50 border border-gray-200 text-[#0B0F17] focus:bg-white focus:border-[#DC2626] focus:ring-2 focus:ring-[#DC2626]/20 outline-none transition-all text-sm"
                      >
                        <option value="">Select an option</option>
                        <option value="New Admission Enquiry (2026–27)">New Admission Enquiry (2026–27)</option>
                        <option value="Schedule a Campus Visit">Schedule a Campus Visit</option>
                        <option value="Curriculum & Fee Details">Curriculum & Fee Details</option>
                        <option value="Transport & Bus Routes">Transport & Bus Routes</option>
                        <option value="Careers / Faculty Opportunities">Careers / Faculty Opportunities</option>
                        <option value="General Information">General Information</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#0B0F17] mb-2">
                        Your Message *
                      </label>
                      <textarea
                        name="message"
                        rows="4"
                        required
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Write your query or message here..."
                        className="w-full px-5 py-3.5 rounded-2xl bg-slate-50 border border-gray-200 text-[#0B0F17] focus:bg-white focus:border-[#DC2626] focus:ring-2 focus:ring-[#DC2626]/20 outline-none transition-all text-sm resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full bg-[#DC2626] text-white hover:bg-[#16A34A] rounded-full py-4 text-base font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#16A34A] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      {submitting ? 'Transmitting message...' : 'Send Message →'}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
