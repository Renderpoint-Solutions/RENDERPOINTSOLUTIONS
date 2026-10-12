const stats = [
  { value: '40+', label: 'Products Shipped', sub: 'across India & global', color: 'text-emerald-600', border: 'border-emerald-400' },
  { value: '99%', label: 'Client Satisfaction', sub: 'on-time delivery', color: 'text-blue-600', border: 'border-blue-400' },
  { value: '15+', label: 'Industries Served', sub: 'FinTech, Healthcare, AI', color: 'text-orange-500', border: 'border-orange-400' },
  { value: '5+', label: 'Years Experience', sub: 'creative engineering', color: 'text-amber-500', border: 'border-amber-400' },
];

const clientLogos = ['KORA', 'NEXUS', 'ATLAS', 'GUARDIAN', 'MOTION', 'LUMIS', 'PRISM', 'VOLTA'];

export default function Stats() {
  return (
    <section className="relative py-16 px-4 md:px-8 bg-[#edf2f7] border-y border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map(({ value, label, sub, color, border }) => (
            <div
              key={label}
              className={`folder-card-wrapper bg-white rounded-2xl border-2 ${border} p-6 shadow-sm flex flex-col justify-between`}
            >
              <div>
                <div className={`font-black font-display text-4xl sm:text-5xl ${color} mb-1 tracking-tight`}>
                  {value}
                </div>
                <div className="font-bold text-slate-900 text-sm mb-1 font-display">
                  {label}
                </div>
              </div>
              <div className="text-xs font-mono text-slate-500 pt-2 border-t border-slate-100">
                {sub}
              </div>
            </div>
          ))}
        </div>

        {/* Indian Language Marquee Strip & Client Logos */}
        <div className="bg-white rounded-full border border-slate-200 px-6 py-3 shadow-sm flex items-center gap-6 overflow-hidden">
          <div className="text-xs font-mono font-bold text-blue-600 uppercase whitespace-nowrap border-r border-slate-200 pr-4">
            TRUSTED PARTNERS
          </div>
          <div className="overflow-hidden w-full relative">
            <div className="flex gap-8 animate-marquee whitespace-nowrap items-center text-xs font-mono font-bold text-slate-500">
              {[...clientLogos, ...clientLogos, ...clientLogos, ...clientLogos].map((client, i) => (
                <span key={i} className="hover:text-blue-600 transition-colors flex items-center gap-4">
                  <span>{client}</span>
                  <span className="indian-text text-emerald-600 font-sans text-xs">ഡിസൈൻ</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
