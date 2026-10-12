import { useState } from 'react';

const workProjects = [
  {
    id: 'kora',
    title: 'KORA Enterprise',
    indianText: 'ഡിജിറ്റൽ പ്ലാറ്റ്‌ഫോം',
    category: 'Digital Platform',
    categoryTag: 'DETAILS 01',
    desc: 'Unified workspace for enterprise consulting — streamlining client communications, projects, and AI insights.',
    year: '2025',
    color: 'bg-emerald-600',
    borderColor: 'border-emerald-500',
    bgColor: 'bg-emerald-50/80',
    badge: '01 / 05',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop&auto=format',
    tags: ['React', 'Node.js', 'AI Agents'],
  },
  {
    id: 'nexus',
    title: 'NEXUS AI Ops',
    indianText: 'കൃത്രിമബുദ്ധി പ്ലാറ്റ്‌ഫോം',
    category: 'AI Platform',
    categoryTag: 'DETAILS 02',
    desc: 'Intelligent infrastructure monitoring with real-time automated anomaly detection and visual analytics.',
    year: '2025',
    color: 'bg-blue-600',
    borderColor: 'border-blue-500',
    bgColor: 'bg-blue-50/80',
    badge: '02 / 05',
    img: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&h=500&fit=crop&auto=format',
    tags: ['Python', 'Vector DB', 'Next.js'],
  },
  {
    id: 'guardian',
    title: 'GUARDIAN Threat Intelligence',
    indianText: 'സൈബർ സുരക്ഷ',
    category: 'Cybersecurity',
    categoryTag: 'POSTERS 03',
    desc: 'Zero-trust enterprise threat intelligence platform engineered for speed and high vulnerability visibility.',
    year: '2024',
    color: 'bg-orange-500',
    borderColor: 'border-orange-500',
    bgColor: 'bg-orange-50/80',
    badge: '03 / 05',
    img: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=500&fit=crop&auto=format',
    tags: ['Rust', 'GraphQL', 'Tailwind'],
  },
  {
    id: 'motion',
    title: 'MOTION Storefront',
    indianText: 'വാണിജ്യ വെബ്സൈറ്റ്',
    category: 'E-commerce',
    categoryTag: 'DETAILS 04',
    desc: 'High-conversion interactive e-commerce store with instant cart synchronization and bespoke product 3D view.',
    year: '2024',
    color: 'bg-amber-500',
    borderColor: 'border-amber-500',
    bgColor: 'bg-amber-50/80',
    badge: '04 / 05',
    img: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&h=500&fit=crop&auto=format',
    tags: ['Shopify', 'Three.js', 'React'],
  },
  {
    id: 'atlas',
    title: 'ATLAS Analytics',
    indianText: 'വിവരവിശകലനം',
    category: 'Data Platform',
    categoryTag: 'POSTERS 05',
    desc: 'Business intelligence dashboard reimagined — transforming unstructured raw data into clear actionable strategy.',
    year: '2024',
    color: 'bg-purple-600',
    borderColor: 'border-purple-500',
    bgColor: 'bg-purple-50/80',
    badge: '05 / 05',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop&auto=format',
    tags: ['Data Viz', 'D3.js', 'PostgreSQL'],
  },
];

const categories = ['ALL (05)', 'DETAILS (03)', 'POSTERS (02)', 'AI & TECH (02)'];

export default function SelectedWork() {
  const [filter, setFilter] = useState('ALL (05)');

  return (
    <section id="work" className="relative py-28 px-4 md:px-8 bg-[#edf2f7] overflow-hidden">
      {/* Outline Watermark Title */}
      <div className="absolute top-10 left-0 right-0 overflow-hidden pointer-events-none select-none z-0">
        <h2 className="text-outline-blue font-extrabold text-[14vw] leading-none tracking-tighter opacity-15 whitespace-nowrap font-display text-center">
          #04 WORKS
        </h2>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-slate-200 pb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-blue-700 mb-2">
              <span className="bg-blue-600 text-white px-2 py-0.5 rounded font-mono">04 / 07</span>
              <span>SELECTED PROJECTS</span>
            </div>
            <div className="indian-text text-3xl sm:text-5xl font-black text-slate-900 flex items-center gap-3">
              <span>ഞങ്ങളുടെ പ്രോജക്ടുകൾ</span>
              <span className="text-blue-600 font-sans text-2xl sm:text-4xl font-bold">/ OUR WORKS</span>
            </div>
          </div>

          <p className="text-slate-600 text-sm sm:text-base max-w-md">
            Filter the cabinet by folder. Explore digital products engineered for speed, aesthetics, and high user conversion.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 text-xs font-mono font-bold rounded-full transition-all duration-200 ${
                filter === cat
                  ? 'bg-blue-600 text-white shadow-sm scale-105'
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-blue-300 hover:text-blue-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Folder Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {workProjects.map((project) => (
            <div
              key={project.id}
              className={`folder-card-wrapper rounded-3xl border-2 ${project.borderColor} ${project.bgColor} p-6 shadow-md transition-all duration-300 flex flex-col justify-between group`}
            >
              {/* Folder Handle */}
              <div className={`folder-tab-top text-white ${project.color} shadow-sm mb-4`}>
                <span>{project.categoryTag}</span>
                <span className="bg-white/20 px-1.5 py-0.5 rounded font-mono text-[10px]">{project.year}</span>
              </div>

              <div>
                {/* Project Image Box */}
                <div className="relative h-48 rounded-2xl overflow-hidden mb-5 border border-slate-200/80 shadow-sm">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-mono font-bold text-slate-800 shadow-sm">
                    {project.badge}
                  </div>
                </div>

                {/* Indian Language Title */}
                <div className="indian-text text-lg font-extrabold text-slate-800 mb-1">
                  {project.indianText}
                </div>

                {/* Main English Title */}
                <h3 className="text-xl font-extrabold font-display text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>

                <p className="text-slate-600 text-xs sm:text-sm line-clamp-2 leading-relaxed mb-4">
                  {project.desc}
                </p>
              </div>

              {/* Tags and CTA */}
              <div>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-white/90 text-slate-700 text-[10px] font-mono font-bold px-2.5 py-1 rounded-md border border-slate-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="pt-3 border-t border-slate-200/80 flex items-center justify-between text-xs font-mono font-bold text-blue-600">
                  <span>EXPLORE CASE STUDY</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
