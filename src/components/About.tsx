export default function About() {
  return (
    <section id="about" className="relative py-28 px-4 md:px-8 bg-[#edf2f7] overflow-hidden">
      {/* Outline Watermark Title */}
      <div className="absolute top-10 left-0 right-0 overflow-hidden pointer-events-none select-none z-0">
        <h2 className="text-outline-green font-extrabold text-[14vw] leading-none tracking-tighter opacity-15 whitespace-nowrap font-display text-center">
          #03 ABOUT US
        </h2>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-slate-200 pb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-emerald-700 mb-2">
              <span className="bg-emerald-600 text-white px-2 py-0.5 rounded font-mono">03 / 07</span>
              <span>ABOUT THE STUDIO</span>
            </div>
            <div className="indian-text text-3xl sm:text-5xl font-black text-slate-900 flex items-center gap-3">
              <span>ഞങ്ങളെക്കുറിച്ച്</span>
              <span className="text-emerald-600 font-sans text-2xl sm:text-4xl font-bold">/ ABOUT RENDERPOINT</span>
            </div>
          </div>

          <p className="text-slate-600 text-sm sm:text-base max-w-md">
            We care deeply about the idea behind every interface. Founded on clarity of thought, craft in execution, and genuine curiosity.
          </p>
        </div>

        {/* Main Grid Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Team Folder Card (Key 21stDev Portfolio feature) */}
          <div className="lg:col-span-5">
            <div className="folder-card-wrapper rounded-3xl border-2 border-emerald-500 bg-white p-6 md:p-8 shadow-lg h-full flex flex-col justify-between">
              {/* Folder Top Handle */}
              <div className="folder-tab-top bg-emerald-600 text-white shadow-sm mb-6">
                <span>STUDIO PROFILE</span>
                <span className="bg-white/20 px-2 py-0.5 rounded font-mono">2020–2026</span>
              </div>

              <div>
                {/* Team Image Box */}
                <div className="relative h-64 rounded-2xl overflow-hidden mb-6 border border-slate-200 shadow-sm">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=700&h=420&fit=crop&auto=format"
                    alt="RenderPoint Studio Team"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-3 left-3 bg-emerald-600/90 text-white backdrop-blur-md px-3 py-1 rounded-full text-xs font-mono font-bold">
                    RENDERPOINT CREATIVE LAB
                  </div>
                </div>

                <div className="indian-text text-2xl font-extrabold text-slate-900 mb-2">
                  നമസ്കാരം! Hi, We are RenderPoint!
                </div>

                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  A passionate collective of visual designers, full-stack engineers, and product strategists building next-generation digital experiences across India and global markets.
                </p>
              </div>

              {/* Quick Key Badges */}
              <div className="grid grid-cols-3 gap-2 pt-4 border-t border-slate-100 text-center">
                <div className="bg-emerald-50 p-2.5 rounded-xl border border-emerald-100">
                  <div className="text-xs font-mono font-bold text-emerald-700">EXPERIENCE</div>
                  <div className="text-sm font-extrabold font-display text-slate-900">5+ Years</div>
                </div>
                <div className="bg-blue-50 p-2.5 rounded-xl border border-blue-100">
                  <div className="text-xs font-mono font-bold text-blue-700">PROJECTS</div>
                  <div className="text-sm font-extrabold font-display text-slate-900">40+ Shipped</div>
                </div>
                <div className="bg-amber-50 p-2.5 rounded-xl border border-amber-100">
                  <div className="text-xs font-mono font-bold text-amber-700">CLIENTS</div>
                  <div className="text-sm font-extrabold font-display text-slate-900">Global</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Values & Editorial Highlights */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-6">
            {/* Top Highlight Quote */}
            <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm">
              <div className="indian-text text-xl font-bold text-emerald-600 mb-3">
                "മികച്ച ആശയങ്ങൾ, വ്യക്തമായ പ്രവർത്തനം"
              </div>
              <blockquote className="text-2xl md:text-3xl font-extrabold font-display text-slate-900 leading-snug mb-4">
                "We don't just build websites. We create digital ecosystems that elevate brands and engage users."
              </blockquote>
              <p className="text-slate-600 text-sm leading-relaxed">
                Whether creating a high-performance web platform, an AI-powered enterprise tool, or an interactive brand system, we bring precision, speed, and aesthetic excellence to every line of code.
              </p>
            </div>

            {/* Core Pillars Stack */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="folder-card-wrapper bg-emerald-50/90 rounded-2xl border-2 border-emerald-400 p-5 shadow-sm">
                <div className="folder-tab-top bg-emerald-600 text-white text-[10px] mb-3">
                  <span>CRAFT</span>
                </div>
                <h4 className="font-extrabold font-display text-slate-900 text-base mb-1">Obsessive Craft</h4>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Micro-interactions, typography hierarchy, and sub-millisecond page speed.
                </p>
              </div>

              <div className="folder-card-wrapper bg-blue-50/90 rounded-2xl border-2 border-blue-400 p-5 shadow-sm">
                <div className="folder-tab-top bg-blue-600 text-white text-[10px] mb-3">
                  <span>CLARITY</span>
                </div>
                <h4 className="font-extrabold font-display text-slate-900 text-base mb-1">Pure Clarity</h4>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Streamlined user journeys and transparent engineering roadmaps.
                </p>
              </div>

              <div className="folder-card-wrapper bg-orange-50/90 rounded-2xl border-2 border-orange-400 p-5 shadow-sm">
                <div className="folder-tab-top bg-orange-500 text-white text-[10px] mb-3">
                  <span>COURAGE</span>
                </div>
                <h4 className="font-extrabold font-display text-slate-900 text-base mb-1">Bold Innovation</h4>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Pushing boundaries with AI integrations and cutting-edge web tools.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
