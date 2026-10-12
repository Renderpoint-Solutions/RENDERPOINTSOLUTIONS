import { useState } from 'react';

const servicesList = [
  {
    num: '01',
    title: 'Product Strategy & Architecture',
    indianText: 'ഉൽപ്പന്ന തന്ത്രം',
    desc: 'Deep-dive user research, competitive analysis, technical architecture, & product roadmaps built to scale.',
    tags: ['Discovery', 'Architecture', 'Roadmap', 'UX Research'],
    color: 'bg-emerald-600',
    borderColor: 'border-emerald-500',
    bgColor: 'bg-emerald-50/70',
    badgeColor: 'bg-emerald-100 text-emerald-800',
  },
  {
    num: '02',
    title: 'UI/UX Design & Systems',
    indianText: 'രൂപകൽപ്പനയും അനുഭവവും',
    desc: 'High-fidelity wireframes, interactive prototypes, design systems, and delightful micro-interactions.',
    tags: ['Figma Systems', 'Prototyping', 'Design Tokens', 'User Flow'],
    color: 'bg-blue-600',
    borderColor: 'border-blue-500',
    bgColor: 'bg-blue-50/70',
    badgeColor: 'bg-blue-100 text-blue-800',
  },
  {
    num: '03',
    title: 'Full-Stack Web Development',
    indianText: 'വെബ് വികസനം',
    desc: 'High-performance React/Next.js web apps, Jamstack solutions, headless CMS, and fast API backends.',
    tags: ['React / Next.js', 'Node.js', 'Tailwind', 'GraphQL'],
    color: 'bg-orange-500',
    borderColor: 'border-orange-500',
    bgColor: 'bg-orange-50/70',
    badgeColor: 'bg-orange-100 text-orange-800',
  },
  {
    num: '04',
    title: 'Mobile App Engineering',
    indianText: 'മൊബൈൽ ആപ്ലിക്കേഷൻ',
    desc: 'Cross-platform iOS & Android mobile applications crafted with React Native for native fluidity.',
    tags: ['React Native', 'iOS & Android', 'Offline First', 'Push Engine'],
    color: 'bg-purple-600',
    borderColor: 'border-purple-500',
    bgColor: 'bg-purple-50/70',
    badgeColor: 'bg-purple-100 text-purple-800',
  },
  {
    num: '05',
    title: 'AI & Machine Learning Apps',
    indianText: 'കൃത്രിമബുദ്ധി ആപ്പുകൾ',
    desc: 'Custom LLM integrations, AI agents, automated workflows, and intelligent analytics dashboards.',
    tags: ['LLM APIs', 'OpenAI / Claude', 'Vector DBs', 'RAG Pipelines'],
    color: 'bg-amber-500',
    borderColor: 'border-amber-500',
    bgColor: 'bg-amber-50/70',
    badgeColor: 'bg-amber-100 text-amber-800',
  },
];

export default function Services() {
  const [activeService, setActiveService] = useState('01');

  return (
    <section id="services" className="relative py-28 px-4 md:px-8 bg-[#edf2f7] overflow-hidden">
      {/* Background Double-Line Outline Text */}
      <div className="absolute top-10 left-0 right-0 overflow-hidden pointer-events-none select-none z-0">
        <h2 className="text-outline-green font-extrabold text-[14vw] leading-none tracking-tighter opacity-15 whitespace-nowrap font-display text-center">
          #02 SERVICES
        </h2>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-slate-200 pb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-emerald-700 mb-2">
              <span className="bg-emerald-600 text-white px-2 py-0.5 rounded font-mono">02 / 07</span>
              <span>WHAT WE DO</span>
            </div>
            <div className="indian-text text-3xl sm:text-5xl font-black text-slate-900 flex items-center gap-3">
              <span>സേവനങ്ങൾ</span>
              <span className="text-emerald-600 font-sans text-2xl sm:text-4xl font-bold">/ OUR SERVICES</span>
            </div>
          </div>

          <p className="text-slate-600 text-sm sm:text-base max-w-md">
            End-to-end digital solutions designed and engineered to turn complex ideas into refined, market-ready products.
          </p>
        </div>

        {/* Folder Tab Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Left Column: Interactive Service Tabs */}
          <div className="md:col-span-5 flex flex-col gap-3">
            {servicesList.map((service) => {
              const isActive = activeService === service.num;
              return (
                <div
                  key={service.num}
                  onClick={() => setActiveService(service.num)}
                  className={`cursor-pointer rounded-2xl border-2 transition-all duration-300 p-5 ${
                    isActive
                      ? `${service.borderColor} ${service.bgColor} shadow-lg translate-x-2`
                      : 'border-slate-200 bg-white/70 hover:bg-white hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className={`w-8 h-8 rounded-lg ${service.color} text-white font-mono text-xs font-bold flex items-center justify-center shadow-sm`}>
                        {service.num}
                      </span>
                      <h3 className="font-bold font-display text-slate-900 text-base md:text-lg">
                        {service.title}
                      </h3>
                    </div>
                    <span className="text-slate-400 font-bold text-sm">
                      {isActive ? '→' : '↘'}
                    </span>
                  </div>
                  <div className="indian-text text-xs text-slate-500 font-semibold mt-2 pl-11">
                    {service.indianText}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Active Service Folder Detail Card */}
          <div className="md:col-span-7">
            {servicesList.map((service) => {
              if (service.num !== activeService) return null;
              return (
                <div
                  key={service.num}
                  className={`folder-card-wrapper rounded-3xl border-2 ${service.borderColor} bg-white p-8 md:p-10 shadow-xl relative min-h-[420px] flex flex-col justify-between`}
                >
                  {/* Top Folder Handle */}
                  <div className={`folder-tab-top text-white ${service.color} shadow-md`}>
                    <span>SERVICE DETAIL</span>
                    <span className="bg-white/20 px-2 py-0.5 rounded font-mono">{service.num} / 05</span>
                  </div>

                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                      <span className={`text-xs font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full ${service.badgeColor}`}>
                        FEATURED SERVICE
                      </span>
                      <span className="indian-text text-xl font-extrabold text-slate-800">
                        {service.indianText}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-4xl font-extrabold font-display text-slate-900 mb-4 tracking-tight">
                      {service.title}
                    </h3>

                    <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-8">
                      {service.desc}
                    </p>

                    {/* Tech Tags */}
                    <div className="mb-6">
                      <div className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-3">
                        KEY CAPABILITIES & TECH STACK
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {service.tags.map((tag) => (
                          <span
                            key={tag}
                            className="bg-slate-100 text-slate-800 text-xs font-mono font-bold px-3 py-1.5 rounded-lg border border-slate-200"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* CTA Action */}
                  <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                    <button
                      onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                      className={`${service.color} hover:opacity-90 text-white font-bold text-sm px-6 py-3 rounded-xl shadow-md transition-all flex items-center gap-2`}
                    >
                      <span>Inquire About {service.title.split(' ')[0]}</span>
                      <span>→</span>
                    </button>
                    <span className="text-xs font-mono text-slate-400">RENDERPOINT STUDIO</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
