import { useState } from 'react';

const folderTabs = [
  {
    id: 'services',
    num: '01',
    title: 'SERVICES',
    indianText: 'സേവനങ്ങൾ',
    lang: 'Malayalam',
    color: 'bg-emerald-600 hover:bg-emerald-700',
    borderColor: 'border-emerald-500',
    textColor: 'text-emerald-600',
    bgColor: 'bg-emerald-50',
    badge: '02 WORKS',
    desc: 'Digital Product Design, Mobile Apps, Full-Stack Web Development, AI Integration.',
  },
  {
    id: 'work',
    num: '02',
    title: 'SELECTED WORK',
    indianText: 'ഞങ്ങളുടെ പ്രോജക്ടുകൾ',
    lang: 'Malayalam',
    color: 'bg-blue-600 hover:bg-blue-700',
    borderColor: 'border-blue-500',
    textColor: 'text-blue-600',
    bgColor: 'bg-blue-50',
    badge: '06 PROJECTS',
    desc: 'Explore our latest web apps, fintech platforms, e-commerce stores, & brand systems.',
  },
  {
    id: 'process',
    num: '03',
    title: 'OUR PROCESS',
    indianText: 'പ്രവർത്തന ശൈലി',
    lang: 'Malayalam',
    color: 'bg-orange-500 hover:bg-orange-600',
    borderColor: 'border-orange-500',
    textColor: 'text-orange-600',
    bgColor: 'bg-orange-50',
    badge: '4 STEPS',
    desc: 'From initial strategy to rapid prototyping, design systems, & pixel-perfect code.',
  },
  {
    id: 'contact',
    num: '04',
    title: 'GET IN TOUCH',
    indianText: 'ബന്ധപ്പെടുക',
    lang: 'Malayalam',
    color: 'bg-amber-500 hover:bg-amber-600',
    borderColor: 'border-amber-500',
    textColor: 'text-amber-600',
    bgColor: 'bg-amber-50',
    badge: 'LET’S TALK',
    desc: 'Ready to build something ambitious? Reach out and start a project with us today.',
  },
];

export default function Hero() {
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="cover"
      className="relative min-h-screen pt-36 pb-20 px-4 md:px-8 bg-[#edf2f7] overflow-hidden flex flex-col justify-between"
    >
      {/* Background Palm Leaf Subtle Gradient */}
      <div className="absolute inset-0 bg-leaf-pattern pointer-events-none opacity-80" />

      {/* Giant Outline Double-Stroke Watermark Title */}
      <div className="absolute top-28 left-0 right-0 overflow-hidden pointer-events-none select-none z-0">
        <h1 className="text-outline-blue font-extrabold text-[12vw] leading-none tracking-tighter opacity-15 whitespace-nowrap font-display text-center">
          #2026 RENDERPOINT
        </h1>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10 my-auto">
        {/* Main Grid Header Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Left Column: Big Indian Typography & Title */}
          <div className="lg:col-span-7 flex flex-col items-start gap-4">
            {/* Indian Decorative Accent Typography */}
            <div className="indian-text text-4xl sm:text-6xl md:text-7xl font-black text-blue-600 tracking-tight flex items-baseline gap-3 flex-wrap">
              <span>ഡിസൈൻ</span>
              <span className="text-slate-800 font-extrabold text-3xl sm:text-5xl">പോർട്ട്ഫോളിയോ</span>
              <span className="w-10 h-10 rounded-full border-2 border-emerald-500 text-emerald-600 text-lg flex items-center justify-center font-sans inline-flex">
                RP
              </span>
            </div>

            {/* English Main Headline */}
            <h2 className="text-3xl sm:text-5xl font-black font-display text-slate-900 tracking-tight leading-none mt-2">
              RENDERPOINT SOLUTIONS
            </h2>

            <p className="text-slate-600 text-lg sm:text-xl font-medium max-w-xl leading-relaxed mt-2">
              A creative digital product studio crafting exceptional web & mobile experiences with high aesthetic precision.
            </p>
          </div>

          {/* Right Column: Badge Tag & Sub-Tags & Bio */}
          <div className="lg:col-span-5 flex flex-col items-start lg:items-end gap-5">
            {/* RenderPoint Pill Badge */}
            <div className="bg-blue-600 text-white font-bold text-sm px-5 py-2.5 rounded-full shadow-md flex items-center gap-2">
              <span>RenderPoint · Digital Studio</span>
              <span className="text-lg">↘</span>
            </div>

            {/* Sub Category Tags */}
            <div className="flex flex-wrap gap-2 text-xs font-mono font-semibold text-blue-700">
              <span className="bg-blue-100/80 px-3 py-1 rounded-full border border-blue-200">(Web Design)</span>
              <span className="bg-emerald-100/80 text-emerald-800 px-3 py-1 rounded-full border border-emerald-200">(App Dev)</span>
              <span className="bg-amber-100/80 text-amber-800 px-3 py-1 rounded-full border border-amber-200">(Branding)</span>
              <span className="bg-purple-100/80 text-purple-800 px-3 py-1 rounded-full border border-purple-200">(AI Apps)</span>
            </div>

            <p className="text-slate-500 text-sm leading-relaxed max-w-md text-left lg:text-right">
              We collaborate with visionary founders & teams across India and globally to turn ambitious ideas into products people love using every day.
            </p>

            {/* Indian Script Taglines (Tamil & Hindi) */}
            <div className="indian-text text-xs font-semibold text-slate-500 flex items-center gap-3">
              <span className="text-emerald-700 font-bold">வடிவமைப்பு</span>
              <span>•</span>
              <span className="text-amber-700 font-bold">उत्कृष्टता</span>
              <span>•</span>
              <span className="text-blue-700 font-bold">ഡിജിറ്റൽ ലളിതത്വം</span>
            </div>
          </div>
        </div>

        {/* Stacked Folder Tab Cards Preview Bar (Key 21stDev Portfolio Template Visual) */}
        <div className="mt-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500">
              EXPLORE CABINET BY FOLDER ({folderTabs.length})
            </h3>
            <span className="text-xs font-mono text-blue-600 font-bold">
              CLICK CARD TO JUMP TO SECTION ↘
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {folderTabs.map((tab) => {
              const isHovered = hoveredTab === tab.id;
              return (
                <div
                  key={tab.id}
                  onMouseEnter={() => setHoveredTab(tab.id)}
                  onMouseLeave={() => setHoveredTab(null)}
                  onClick={() => scrollToSection(tab.id)}
                  className={`folder-card-wrapper cursor-pointer rounded-2xl border-2 ${tab.borderColor} ${tab.bgColor} p-5 shadow-sm transition-all duration-300 ${
                    isHovered ? 'shadow-xl -translate-y-2 scale-[1.02]' : ''
                  }`}
                >
                  {/* Top Folder Handle */}
                  <div className={`folder-tab-top text-white ${tab.color} shadow-sm mb-4`}>
                    <span>{tab.title}</span>
                    <span className="bg-white/20 px-1.5 py-0.5 rounded font-mono text-[10px]">{tab.num}</span>
                    <span className="ml-auto">→</span>
                  </div>

                  {/* Indian Text Header */}
                  <div className="indian-text text-2xl font-bold text-slate-900 mb-1">
                    {tab.indianText}
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-4">
                    {tab.desc}
                  </p>

                  {/* Bottom Footer Badge */}
                  <div className="flex items-center justify-between text-[11px] font-mono font-bold text-slate-500 pt-3 border-t border-slate-200/60">
                    <span className={tab.textColor}>{tab.badge}</span>
                    <span className="text-slate-400 group-hover:text-slate-900 transition-colors">VIEW FOLDER ↗</span>
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
