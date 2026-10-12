const processSteps = [
  {
    num: '01',
    title: 'Discover & Research',
    indianText: 'കണ്ടെത്തൽ',
    desc: 'Deep user research, stakeholder alignment, market mapping, and setting high-impact KPIs.',
    color: 'bg-emerald-600',
    borderColor: 'border-emerald-500',
    bgColor: 'bg-emerald-50/80',
    badge: 'STEP 01',
  },
  {
    num: '02',
    title: 'Define & Strategy',
    indianText: 'നിർവ്വചനം',
    desc: 'Translating insights into clear product requirements, technical architecture, and interactive sitemaps.',
    color: 'bg-blue-600',
    borderColor: 'border-blue-500',
    bgColor: 'bg-blue-50/80',
    badge: 'STEP 02',
  },
  {
    num: '03',
    title: 'Design & Prototype',
    indianText: 'രൂപകൽപ്പന',
    desc: 'Crafting pixel-perfect design systems, interactive prototypes, micro-animations, and visual polish.',
    color: 'bg-orange-500',
    borderColor: 'border-orange-500',
    bgColor: 'bg-orange-50/80',
    badge: 'STEP 03',
  },
  {
    num: '04',
    title: 'Engineering & Build',
    indianText: 'നിർമ്മാണം',
    desc: 'Full-stack development with clean modular architecture, automated testing, and sub-second load times.',
    color: 'bg-amber-500',
    borderColor: 'border-amber-500',
    bgColor: 'bg-amber-50/80',
    badge: 'STEP 04',
  },
  {
    num: '05',
    title: 'Launch & Evolution',
    indianText: 'പ്രകാശനം',
    desc: 'Production deployment, real-time analytics monitoring, feedback loops, and ongoing iterations.',
    color: 'bg-purple-600',
    borderColor: 'border-purple-500',
    bgColor: 'bg-purple-50/80',
    badge: 'STEP 05',
  },
];

export default function Process() {
  return (
    <section id="process" className="relative py-28 px-4 md:px-8 bg-[#edf2f7] overflow-hidden">
      {/* Outline Watermark Title */}
      <div className="absolute top-10 left-0 right-0 overflow-hidden pointer-events-none select-none z-0">
        <h2 className="text-outline-green font-extrabold text-[14vw] leading-none tracking-tighter opacity-15 whitespace-nowrap font-display text-center">
          #05 PROCESS
        </h2>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-slate-200 pb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-emerald-700 mb-2">
              <span className="bg-emerald-600 text-white px-2 py-0.5 rounded font-mono">05 / 07</span>
              <span>HOW WE WORK</span>
            </div>
            <div className="indian-text text-3xl sm:text-5xl font-black text-slate-900 flex items-center gap-3">
              <span>പ്രവർത്തന ശൈലി</span>
              <span className="text-emerald-600 font-sans text-2xl sm:text-4xl font-bold">/ OUR PROCESS</span>
            </div>
          </div>

          <p className="text-slate-600 text-sm sm:text-base max-w-md">
            A battle-tested 5-step methodology that turns complex product ideas into high-performing, market-ready digital experiences.
          </p>
        </div>

        {/* Horizontal Process Folder Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {processSteps.map((step) => (
            <div
              key={step.num}
              className={`folder-card-wrapper rounded-2xl border-2 ${step.borderColor} ${step.bgColor} p-5 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between`}
            >
              {/* Folder Top Tab Handle */}
              <div className={`folder-tab-top text-white ${step.color} shadow-sm mb-4`}>
                <span>{step.badge}</span>
                <span className="bg-white/20 px-1.5 py-0.5 rounded font-mono text-[10px]">{step.num}</span>
              </div>

              <div>
                {/* Indian Script Step Title */}
                <div className="indian-text text-xl font-extrabold text-slate-800 mb-1">
                  {step.indianText}
                </div>

                <h3 className="font-extrabold font-display text-slate-900 text-base mb-2">
                  {step.title}
                </h3>

                <p className="text-slate-600 text-xs leading-relaxed mb-6">
                  {step.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-200/60 text-right">
                <span className="font-mono text-[11px] font-bold text-slate-400">STAGE {step.num} / 05</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
