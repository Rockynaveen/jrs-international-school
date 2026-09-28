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
              <span className="w-1.5 h-1.5 rounded-full bg-[#0B6DB7]" />
              GET IN TOUCH
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl text-[#152A40] leading-[1.08] tracking-tight">
              We’d love to
              <br />
              <em className="text-[#0B6DB7] not-italic italic underline decoration-[#F7C95E] decoration-wavy underline-offset-4">
                HEAR FROM YOU.
              </em>
            </h1>

            <p className="text-lg sm:text-2xl text-[#68798B] leading-relaxed font-normal pt-2">
              Whether you are exploring enrollment for the upcoming academic year
              or have questions about our curriculum, our campus team is here to assist.
            </p>
          </div>
        </div>
      </section>

      {/* Main Split Section: Contact Info & Form */}
      <section className="py-20 sm:py-28 bg-[#FFF8ED]">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Official Details */}
            <div className="lg:col-span-5 space-y-8">
              <div className="bg-white rounded-[32px] p-8 sm:p-10 shadow-lg border border-slate-100 space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#EF8750] block mb-1">
                    CAMPUS LOCATION
                  </span>
                  <h3 className="font-display text-2xl font-bold text-[#06335F]">
                    {schoolContact.name}
                  </h3>
                </div>

                <div className="space-y-4 text-sm text-[#152A40]">
                  <div className="flex items-start gap-3.5">
                    <span className="w-9 h-9 rounded-xl bg-[#E3F1EB] text-[#06335F] flex items-center justify-center font-bold shrink-0 mt-0.5">
                      📍
                    </span>
                    <div>
                      <strong className="block text-[#06335F] mb-1">
                        Postal Address
                      </strong>
                      <p className="text-[#68798B] leading-relaxed">
                        Survey No. 725, Korremula X Road, Narapally,
                        <br />
                        near Uppal Bus Depot, Hyderabad,
                        <br />
                        Telangana 500088
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 pt-2 border-t border-slate-100">
                    <span className="w-9 h-9 rounded-xl bg-[#E3F1EB] text-[#06335F] flex items-center justify-center font-bold shrink-0 mt-0.5">
                      📞
                    </span>
                    <div>
                      <strong className="block text-[#06335F] mb-1">
                        Direct Phone / WhatsApp
                      </strong>
                      <a
                        href={`tel:${schoolContact.phone}`}
                        className="text-lg font-semibold text-[#0B6DB7] hover:underline"
                      >
                        {schoolContact.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 pt-2 border-t border-slate-100">
                    <span className="w-9 h-9 rounded-xl bg-[#E3F1EB] text-[#06335F] flex items-center justify-center font-bold shrink-0 mt-0.5">
                      ✉️
                    </span>
                    <div>
                      <strong className="block text-[#06335F] mb-1">
                        Official Admissions Email
                      </strong>
                      <a
                        href={`mailto:${schoolContact.email}`}
                        className="text-[#0B6DB7] hover:underline font-medium"
                      >
                        {schoolContact.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 pt-2 border-t border-slate-100">
                    <span className="w-9 h-9 rounded-xl bg-[#E3F1EB] text-[#06335F] flex items-center justify-center font-bold shrink-0 mt-0.5">
                      ⏱
                    </span>
                    <div>
                      <strong className="block text-[#06335F] mb-1">
                        Visiting & Campus Hours
                      </strong>
                      <p className="text-[#68798B]">
                        Monday – Saturday: 8:15 AM – 3:30 PM
                        <br />
                        <span className="text-xs text-[#06335F] font-medium">
                          Admissions desk open on second Saturdays by appointment.
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Landmark & Directions Note */}
              <div className="bg-[#E3F1EB] rounded-3xl p-6 sm:p-8 border border-[#0B6DB7]/20 space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#06335F]">
                  <span>🗺️</span>
                  <span>HOW TO REACH US</span>
                </div>
                <p className="text-xs sm:text-sm text-[#152A40]/80 leading-relaxed">
                  Conveniently situated just off the Hyderabad-Warangal Highway at
                  Korremula Cross Road, Narapally, only 10 minutes from Uppal Bus Depot
                  and Uppal Metro Station.
                </p>
                <div className="pt-1">
                  <a
                    href="https://maps.google.com/?q=JRS+International+School+Narapally+Hyderabad"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#06335F] hover:text-[#0B6DB7]"
                  >
                    Open in Google Maps ↗
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Contact & Message Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-[36px] p-8 sm:p-12 shadow-xl border border-slate-100">
                {submitted ? (
                  <div className="text-center py-12 space-y-4">
                    <div className="w-16 h-16 rounded-full bg-[#E3F1EB] text-[#06335F] text-3xl flex items-center justify-center mx-auto mb-4">
                      ✓
                    </div>
                    <h3 className="font-display text-3xl font-bold text-[#06335F]">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-[#68798B] max-w-md mx-auto text-base">
                      Thank you for contacting JRS International School,{' '}
                      <strong className="text-[#152A40]">{form.name}</strong>. Our front
                      desk officer will reach out to{' '}
                      <strong className="text-[#152A40]">{form.phone || form.email}</strong>{' '}
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
                      >
                        Send Another Note
                      </Button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <h3 className="font-display text-2xl sm:text-3xl font-semibold text-[#152A40]">
                        Send Us a Message
                      </h3>
                      <p className="text-sm text-[#68798B] mt-1">
                        Fill out the form and our school team will reply promptly.
                      </p>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#152A40] mb-2">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="e.g. Ananya Sharma"
                        className="w-full px-5 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-[#152A40] focus:bg-white focus:border-[#0B6DB7] focus:ring-2 focus:ring-[#0B6DB7]/20 outline-none transition-all text-sm"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#152A40] mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+91 98765 43210"
                          className="w-full px-5 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-[#152A40] focus:bg-white focus:border-[#0B6DB7] focus:ring-2 focus:ring-[#0B6DB7]/20 outline-none transition-all text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#152A40] mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          placeholder="ananya@example.com"
                          className="w-full px-5 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-[#152A40] focus:bg-white focus:border-[#0B6DB7] focus:ring-2 focus:ring-[#0B6DB7]/20 outline-none transition-all text-sm"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#152A40] mb-2">
                        Purpose of Enquiry *
                      </label>
                      <select
                        name="subject"
                        required
                        value={form.subject}
                        onChange={handleChange}
                        className="w-full px-5 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-[#152A40] focus:bg-white focus:border-[#0B6DB7] focus:ring-2 focus:ring-[#0B6DB7]/20 outline-none transition-all text-sm"
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
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#152A40] mb-2">
                        Your Message *
                      </label>
                      <textarea
                        name="message"
                        rows="4"
                        required
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Write your query or message here..."
                        className="w-full px-5 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-[#152A40] focus:bg-white focus:border-[#0B6DB7] focus:ring-2 focus:ring-[#0B6DB7]/20 outline-none transition-all text-sm resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full bg-[#06335F] text-white hover:bg-[#0B6DB7] rounded-full py-4 text-base font-semibold transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#0B6DB7] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
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
