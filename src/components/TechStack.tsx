const techCategories = [
  {
    category: 'Design & Prototyping',
    indianText: 'ഡിസൈൻ ടൂളുകൾ',
    color: 'bg-emerald-600',
    borderColor: 'border-emerald-500',
    bgColor: 'bg-emerald-50/80',
    badge: '01 / DESIGN',
    tools: ['Figma Systems', 'Framer', 'Adobe Creative Cloud', 'Spline 3D', 'Rive Animation'],
  },
  {
    category: 'Frontend Engineering',
    indianText: 'ഫ്രണ്ട്എൻഡ് വികസനം',
    color: 'bg-blue-600',
    borderColor: 'border-blue-500',
    bgColor: 'bg-blue-50/80',
    badge: '02 / FRONTEND',
    tools: ['React 19', 'Next.js 15', 'TypeScript', 'Tailwind CSS v4', 'Vite', 'GSAP Motion'],
  },
  {
    category: 'Backend & Cloud',
    indianText: 'ബാക്കെൻഡ് & ക്ലൗഡ്',
    color: 'bg-orange-500',
    borderColor: 'border-orange-500',
    bgColor: 'bg-orange-50/80',
    badge: '03 / BACKEND',
    tools: ['Node.js', 'Python FastAPI', 'PostgreSQL', 'Prisma ORM', 'Docker', 'AWS / Vercel'],
  },
  {
    category: 'AI & Machine Learning',
    indianText: 'കൃത്രിമബുദ്ധി ടൂളുകൾ',
    color: 'bg-purple-600',
    borderColor: 'border-purple-500',
    bgColor: 'bg-purple-50/80',
    badge: '04 / AI & ML',
    tools: ['OpenAI APIs', 'Claude 3.7', 'Vector DBs (Pinecone)', 'LangChain', 'PyTorch'],
  },
];

export default function TechStack() {
  return (
    <section id="techstack" className="relative py-28 px-4 md:px-8 bg-[#edf2f7] overflow-hidden">
      {/* Outline Watermark Title */}
      <div className="absolute top-10 left-0 right-0 overflow-hidden pointer-events-none select-none z-0">
        <h2 className="text-outline-blue font-extrabold text-[14vw] leading-none tracking-tighter opacity-15 whitespace-nowrap font-display text-center">
          #06 TECH STACK
        </h2>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-slate-200 pb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-blue-700 mb-2">
              <span className="bg-blue-600 text-white px-2 py-0.5 rounded font-mono">06 / 07</span>
              <span>OUR STACK</span>
            </div>
            <div className="indian-text text-3xl sm:text-5xl font-black text-slate-900 flex items-center gap-3">
              <span>സാങ്കേതികവിദ്യ</span>
              <span className="text-blue-600 font-sans text-2xl sm:text-4xl font-bold">/ TECH STACK</span>
            </div>
          </div>

          <p className="text-slate-600 text-sm sm:text-base max-w-md">
            Modern tools, resilient architecture, and technologies chosen specifically for performance, scale, and longevity.
          </p>
        </div>

        {/* Tech Stack Folder Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {techCategories.map((cat) => (
            <div
              key={cat.category}
              className={`folder-card-wrapper rounded-3xl border-2 ${cat.borderColor} ${cat.bgColor} p-6 md:p-8 shadow-md transition-all duration-300 flex flex-col justify-between`}
            >
              {/* Top Handle */}
              <div className={`folder-tab-top text-white ${cat.color} shadow-sm mb-4`}>
                <span>{cat.badge}</span>
              </div>

              <div>
                <div className="indian-text text-xl font-extrabold text-slate-800 mb-1">
                  {cat.indianText}
                </div>

                <h3 className="text-2xl font-extrabold font-display text-slate-900 mb-6">
                  {cat.category}
                </h3>

                {/* Tool Pills */}
                <div className="flex flex-wrap gap-2.5 mb-6">
                  {cat.tools.map((tool) => (
                    <span
                      key={tool}
                      className="bg-white text-slate-800 text-xs sm:text-sm font-mono font-bold px-4 py-2 rounded-xl border border-slate-200 shadow-sm hover:border-blue-400 hover:text-blue-600 transition-all"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200/80 text-right">
                <span className="font-mono text-xs font-bold text-slate-400">ENGINEERED FOR PRODUCTION</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
