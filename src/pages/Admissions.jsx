import React, { useState } from 'react';
import Button from '../components/Button';
import { schoolContact } from '../data/siteData';

const admissionSteps = [
  {
    step: '01',
    title: 'Enquire',
    subtitle: 'Submit an online form or visit our campus',
    description:
      'Fill in the simple enquiry form below or call our admissions team. Receive a personalized brochure and tour confirmation.',
    color: '#DC2626',
  },
  {
    step: '02',
    title: 'Interact',
    subtitle: 'Campus visit & parent dialogue',
    description:
      'Tour our sunlit classrooms, athletic fields, and science labs. Meet our leadership team to understand our child-centric philosophy.',
    color: '#16A34A',
  },
  {
    step: '03',
    title: 'Evaluate',
    subtitle: 'Friendly, stress-free interaction',
    description:
      'An informal readiness session for pre-primary learners, or basic diagnostic interaction for primary and middle school applicants.',
    color: '#0B0F17',
  },
  {
    step: '04',
    title: 'Join',
    subtitle: 'Document verification & welcome',
    description:
      'Complete enrollment formalities, receive the uniform & books kit, and welcome your child to the vibrant JRS family.',
    color: '#DC2626',
  },
];

export default function Admissions() {
  const [formData, setFormData] = useState({
    parentName: '',
    phone: '',
    email: '',
    grade: '',
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
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
              ADMISSIONS OPEN 2026–27
            </div>

            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold sm:font-extrabold text-[#0B0F17] leading-[1.12] tracking-tight">
              A bright beginning
              <br />
              <em className="text-[#DC2626] not-italic italic underline decoration-[#16A34A] decoration-wavy underline-offset-4">
                STARTS HERE.
              </em>
            </h1>

            <p className="text-lg sm:text-2xl text-gray-600 leading-relaxed font-normal pt-2">
              Choosing the right school is an important family decision. We are here to
              make every step transparent, welcoming, and reassuring.
            </p>
          </div>
        </div>
      </section>

      {/* 4 Steps Section */}
      <section className="py-10 bg-white border-b border-gray-100">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#DC2626]">
              OUR 4-STEP ADMISSION PROCESS
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[#0B0F17]">
              Simple, transparent & <em className="text-[#16A34A] not-italic italic">welcoming.</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {admissionSteps.map((step) => (
              <div
                key={step.step}
                className="bg-[#F8FAFC] rounded-[32px] p-8 border border-gray-200/80 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-gray-200 flex items-center justify-center font-display text-2xl font-bold text-[#0B0F17] mb-6">
                    {step.step}
                  </div>
                  <h3 className="font-display text-2xl font-bold text-[#0B0F17] mb-1">
                    {step.title}
                  </h3>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#DC2626] block mb-3">
                    {step.subtitle}
                  </span>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-gray-200 flex items-center gap-2 text-xs font-bold text-[#0B0F17]">
                  <span>Step {step.step} of 04</span>
                  <span>→</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry Form Section with Editorial Split */}
      <section className="py-10 bg-[#F8FAFC]" id="enquiry-form">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Context & Helpline */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#DC2626]">
                  DIRECT ADMISSIONS DESK
                </span>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[#0B0F17] leading-tight">
                  Speak with our{' '}
                  <em className="text-[#DC2626] not-italic italic">counselors.</em>
                </h2>
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                  Have questions about class sizes, transport routes, CBSE syllabus,
                  or co-curricular fees? Submit your details and our team will get in
                  touch within 24 hours.
                </p>
              </div>

              {/* Quick Contact Card */}
              <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-md space-y-4">
                <h3 className="font-display text-xl font-bold text-[#0B0F17]">
                  Admissions Helpline
                </h3>
                <div className="space-y-3 text-sm text-[#0B0F17]">
                  <p className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-[#F0FDF4] text-[#16A34A] flex items-center justify-center font-bold">
                      📞
                    </span>
                    <a
                      href={`tel:${schoolContact.phone}`}
                      className="font-semibold text-lg hover:text-[#DC2626]"
                    >
                      {schoolContact.phone}
                    </a>
                  </p>
                  <p className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-[#F0FDF4] text-[#16A34A] flex items-center justify-center font-bold">
                      ✉️
                    </span>
                    <a
                      href={`mailto:${schoolContact.email}`}
                      className="text-gray-600 hover:text-[#DC2626]"
                    >
                      {schoolContact.email}
                    </a>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-[#F0FDF4] text-[#16A34A] flex items-center justify-center font-bold shrink-0">
                      📍
                    </span>
                    <span className="text-xs text-gray-600 leading-relaxed">
                      {schoolContact.address}
                    </span>
                  </p>
                </div>
              </div>

              {/* Age Eligibility Quick Reference */}
              <div className="bg-[#FEF2F2] rounded-3xl p-6 border border-red-100 space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#DC2626]">
                  Age Criterion (as on May 31, 2026):
                </span>
                <ul className="text-xs text-[#0B0F17] space-y-1">
                  <li>• <strong>Young Buddies:</strong> 2.5 to 3.5 Years</li>
                  <li>• <strong>Butterflies (Nursery):</strong> 3.5 to 4.5 Years</li>
                  <li>• <strong>Honey Bees (PP1/PP2):</strong> 4.5 to 5.5 Years</li>
                  <li>• <strong>Grade 1:</strong> 5.5+ to 6.5 Years</li>
                </ul>
              </div>
            </div>

            {/* Right Column: Beautiful Tailwind Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-[36px] p-8 sm:p-12 shadow-xl border border-gray-100 relative">
                {submitted ? (
                  <div className="text-center py-12 space-y-4">
                    <div className="w-16 h-16 rounded-full bg-[#F0FDF4] text-[#16A34A] text-3xl flex items-center justify-center mx-auto mb-4">
                      ✓
                    </div>
                    <h3 className="font-display text-3xl font-bold text-[#0B0F17]">
                      Enquiry Received!
                    </h3>
                    <p className="text-gray-600 max-w-md mx-auto text-base">
                      Thank you, <strong className="text-[#0B0F17]">{formData.parentName}</strong>.
                      Our admissions team will call you at{' '}
                      <strong className="text-[#0B0F17]">{formData.phone}</strong> shortly to discuss
                      admissions for {formData.grade || 'your child'}.
                    </p>
                    <div className="pt-4">
                      <Button
                        onClick={() => {
                          setSubmitted(false);
                          setFormData({
                            parentName: '',
                            phone: '',
                            email: '',
                            grade: '',
                            message: '',
                          });
                        }}
                        variant="primary"
                        arrow={false}
                        className="bg-[#DC2626] text-white hover:bg-[#16A34A]"
                      >
                        Submit Another Enquiry
                      </Button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="border-b border-gray-100 pb-4 mb-2">
                      <h3 className="font-display text-2xl sm:text-3xl font-semibold text-[#0B0F17]">
                        Online Admission Enquiry
                      </h3>
                      <p className="text-sm text-gray-500 mt-1">
                        Please provide your details below. Fields with * are required.
                      </p>
                    </div>

                    {/* Parent Name */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#0B0F17] mb-2">
                        Parent / Guardian Name *
                      </label>
                      <input
                        type="text"
                        name="parentName"
                        required
                        value={formData.parentName}
                        onChange={handleChange}
                        placeholder="e.g. Rajesh Kumar"
                        className="w-full px-5 py-3.5 rounded-2xl bg-slate-50 border border-gray-200 text-[#0B0F17] focus:bg-white focus:border-[#DC2626] focus:ring-2 focus:ring-[#DC2626]/20 outline-none transition-all text-sm"
                      />
                    </div>

                    {/* Phone & Email Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#0B0F17] mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
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
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="rajesh@example.com"
                          className="w-full px-5 py-3.5 rounded-2xl bg-slate-50 border border-gray-200 text-[#0B0F17] focus:bg-white focus:border-[#DC2626] focus:ring-2 focus:ring-[#DC2626]/20 outline-none transition-all text-sm"
                        />
                      </div>
                    </div>

                    {/* Grade Seeking */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#0B0F17] mb-2">
                        Grade / Programme Seeking Admission For *
                      </label>
                      <select
                        name="grade"
                        required
                        value={formData.grade}
                        onChange={handleChange}
                        className="w-full px-5 py-3.5 rounded-2xl bg-slate-50 border border-gray-200 text-[#0B0F17] focus:bg-white focus:border-[#DC2626] focus:ring-2 focus:ring-[#DC2626]/20 outline-none transition-all text-sm"
                      >
                        <option value="">Select Grade Level</option>
                        <option value="Young Buddies (Age 2.5–3.5)">Young Buddies (Age 2.5–3.5)</option>
                        <option value="Butterflies (Nursery)">Butterflies (Nursery)</option>
                        <option value="Honey Bees (Kindergarten)">Honey Bees (Kindergarten)</option>
                        <option value="Primary - Grade 1">Primary - Grade 1</option>
                        <option value="Primary - Grade 2">Primary - Grade 2</option>
                        <option value="Primary - Grade 3">Primary - Grade 3</option>
                        <option value="Primary - Grade 4">Primary - Grade 4</option>
                        <option value="Middle School - Grade 5">Middle School - Grade 5</option>
                        <option value="Middle School - Grade 6">Middle School - Grade 6</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#0B0F17] mb-2">
                        Message or Specific Questions
                      </label>
                      <textarea
                        name="message"
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your child’s interests, current school, or any specific questions..."
                        className="w-full px-5 py-3.5 rounded-2xl bg-slate-50 border border-gray-200 text-[#0B0F17] focus:bg-white focus:border-[#DC2626] focus:ring-2 focus:ring-[#DC2626]/20 outline-none transition-all text-sm resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full bg-[#DC2626] text-white hover:bg-[#16A34A] rounded-full py-4 text-base font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#16A34A] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      {submitting ? (
                        <span>Processing enquiry...</span>
                      ) : (
                        <>
                          <span>Send enquiry</span>
                          <span className="font-normal">→</span>
                        </>
                      )}
                    </button>

                    <p className="text-center text-xs text-gray-400">
                      🔒 Your information is secure and will only be used for admission communication.
                    </p>
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
