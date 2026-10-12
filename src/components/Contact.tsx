import { useState } from 'react';

const projectTypes = ['Web Design', 'Full-Stack Web App', 'Mobile App', 'AI Solution', 'Design System', 'Branding'];
const budgetRanges = ['< $10k', '$10k – $25k', '$25k – $50k', '$50k+'];

export default function Contact() {
  const [selectedType, setSelectedType] = useState('Full-Stack Web App');
  const [selectedBudget, setSelectedBudget] = useState('$10k – $25k');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-28 px-4 md:px-8 bg-[#edf2f7] overflow-hidden">
      {/* Outline Watermark Title */}
      <div className="absolute top-10 left-0 right-0 overflow-hidden pointer-events-none select-none z-0">
        <h2 className="text-outline-blue font-extrabold text-[14vw] leading-none tracking-tighter opacity-15 whitespace-nowrap font-display text-center">
          #07 CONTACT
        </h2>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-slate-200 pb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-blue-700 mb-2">
              <span className="bg-blue-600 text-white px-2 py-0.5 rounded font-mono">07 / 07</span>
              <span>GET IN TOUCH</span>
            </div>
            <div className="indian-text text-3xl sm:text-5xl font-black text-slate-900 flex items-center gap-3">
              <span>ബന്ധപ്പെടുക</span>
              <span className="text-blue-600 font-sans text-2xl sm:text-4xl font-bold">/ START A PROJECT</span>
            </div>
          </div>

          <p className="text-slate-600 text-sm sm:text-base max-w-md">
            Have an ambitious digital product idea? Let’s turn it into reality. Reach out today and receive a detailed project timeline.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Info Card */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="folder-card-wrapper rounded-3xl border-2 border-amber-500 bg-white p-8 shadow-md">
              <div className="folder-tab-top bg-amber-500 text-white shadow-sm mb-6">
                <span>DIRECT INQUIRIES</span>
              </div>

              <div className="indian-text text-2xl font-extrabold text-slate-900 mb-2">
                നമുക്ക് സംസാരിക്കാം! (Let's Talk)
              </div>

              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Directly connect with our strategy & engineering leads for consultations, project estimates, or partnership inquiries.
              </p>

              <div className="space-y-4 pt-4 border-t border-slate-100">
                <div>
                  <div className="text-[11px] font-mono font-bold text-slate-400 uppercase">EMAIL US</div>
                  <a
                    href="mailto:hello@renderpoint.com"
                    className="text-lg font-bold font-display text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    hello@renderpoint.com
                  </a>
                </div>

                <div>
                  <div className="text-[11px] font-mono font-bold text-slate-400 uppercase">LOCATION</div>
                  <div className="text-sm font-semibold text-slate-800">
                    Kochi & Bengaluru, India (Global Remote)
                  </div>
                </div>

                <div>
                  <div className="text-[11px] font-mono font-bold text-slate-400 uppercase mb-2">CONNECT</div>
                  <div className="flex flex-wrap gap-2 text-xs font-mono font-bold text-slate-700">
                    <span className="bg-slate-100 px-3 py-1 rounded-lg border border-slate-200">LinkedIn</span>
                    <span className="bg-slate-100 px-3 py-1 rounded-lg border border-slate-200">GitHub</span>
                    <span className="bg-slate-100 px-3 py-1 rounded-lg border border-slate-200">Twitter / X</span>
                    <span className="bg-slate-100 px-3 py-1 rounded-lg border border-slate-200">Dribbble</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Folder Form */}
          <div className="lg:col-span-7">
            <div className="folder-card-wrapper rounded-3xl border-2 border-blue-600 bg-white p-8 md:p-10 shadow-xl">
              <div className="folder-tab-top bg-blue-600 text-white shadow-sm mb-6">
                <span>PROJECT INQUIRY FORM</span>
                <span className="bg-white/20 px-2 py-0.5 rounded font-mono">ESTIMATE</span>
              </div>

              {submitted ? (
                <div className="py-12 text-center">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto text-2xl font-bold mb-4">
                    ✓
                  </div>
                  <h3 className="text-2xl font-extrabold font-display text-slate-900 mb-2">
                    Inquiry Received!
                  </h3>
                  <div className="indian-text text-lg text-emerald-700 font-bold mb-3">
                    നന്ദി! ഞങ്ങൾ ഉടൻ ബന്ധപ്പെടും.
                  </div>
                  <p className="text-slate-600 text-sm max-w-sm mx-auto">
                    Thank you for reaching out to RenderPoint Solutions. Our team will review your project and get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono font-bold text-slate-600 uppercase mb-2">YOUR NAME *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rahul Sharma"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-blue-600 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono font-bold text-slate-600 uppercase mb-2">WORK EMAIL *</label>
                      <input
                        type="email"
                        required
                        placeholder="rahul@company.com"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-blue-600 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Project Type */}
                  <div>
                    <label className="block text-xs font-mono font-bold text-slate-600 uppercase mb-2">PROJECT TYPE</label>
                    <div className="flex flex-wrap gap-2">
                      {projectTypes.map((type) => (
                        <button
                          type="button"
                          key={type}
                          onClick={() => setSelectedType(type)}
                          className={`px-3.5 py-1.5 text-xs font-mono font-bold rounded-xl transition-all ${
                            selectedType === type
                              ? 'bg-blue-600 text-white shadow-sm'
                              : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Budget */}
                  <div>
                    <label className="block text-xs font-mono font-bold text-slate-600 uppercase mb-2">ESTIMATED BUDGET</label>
                    <div className="flex flex-wrap gap-2">
                      {budgetRanges.map((b) => (
                        <button
                          type="button"
                          key={b}
                          onClick={() => setSelectedBudget(b)}
                          className={`px-3.5 py-1.5 text-xs font-mono font-bold rounded-xl transition-all ${
                            selectedBudget === b
                              ? 'bg-emerald-600 text-white shadow-sm'
                              : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                          }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Details */}
                  <div>
                    <label className="block text-xs font-mono font-bold text-slate-600 uppercase mb-2">PROJECT DETAILS</label>
                    <textarea
                      rows={4}
                      placeholder="Tell us about your product goals, timeline, and key features..."
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-blue-600 transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold font-display text-sm py-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"
                  >
                    <span>Send Project Inquiry</span>
                    <span>→</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
