import { useState, useEffect } from 'react';
import PRLogo from './PRLogo';

const navItems = [
  { id: 'cover', label: 'COVER', num: '01' },
  { id: 'services', label: 'SERVICES', num: '02' },
  { id: 'about', label: 'ABOUT', num: '03' },
  { id: 'work', label: 'WORK', num: '04' },
  { id: 'process', label: 'PROCESS', num: '05' },
  { id: 'techstack', label: 'TECH', num: '06' },
  { id: 'contact', label: 'CONTACT', num: '07' },
];

export default function Navbar() {
  const [activeTab, setActiveTab] = useState('cover');
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      // Simple intersection check for active section
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPos = window.scrollY + 200;

      sections.forEach((section) => {
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveTab(section.id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setActiveTab(id);
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const activeIndex = navItems.findIndex((item) => item.id === activeTab);
  const activeNumber = activeIndex !== -1 ? navItems[activeIndex].num : '01';

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none px-4 pt-3 pb-2 transition-all duration-300">
      {/* Top Header Row */}
      <div className="max-w-7xl mx-auto flex items-center justify-between pointer-events-auto">
        {/* Left Logo Folder Tab Badge */}
        <button
          onClick={() => scrollTo('cover')}
          className="group flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-b-2xl rounded-tr-2xl shadow-md transition-all duration-200"
        >
          <PRLogo size={24} color="#ffffff" />
          <span className="font-extrabold text-lg tracking-tight font-display">
            RENDERPOINT<span className="text-blue-200 font-normal text-xs ml-0.5">®</span>
          </span>
        </button>

        {/* Center Floating Pill Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-white/80 backdrop-blur-md border border-slate-200 shadow-lg px-3 py-1.5 rounded-full">
          <span className="text-xs font-mono font-bold text-blue-600 px-2 border-r border-slate-200">
            {activeNumber} <span className="text-slate-400 font-normal">/07</span>
          </span>

          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`px-3 py-1 text-xs font-bold tracking-wide rounded-full transition-all duration-200 ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-sm scale-105'
                    : 'text-slate-600 hover:text-blue-600 hover:bg-slate-100'
                }`}
              >
                {item.label}
              </button>
            );
          })}

          <button
            title="Toggle Theme"
            className="ml-1 p-1.5 text-slate-500 hover:text-amber-500 hover:bg-amber-50 rounded-full transition-colors"
          >
            ☀️
          </button>
        </nav>

        {/* Right Indian Language Typography Bar */}
        <div className="hidden lg:flex items-center gap-2 text-xs font-semibold text-slate-500 bg-white/70 backdrop-blur-sm px-3 py-1.5 rounded-full border border-slate-200 shadow-sm indian-text">
          <span className="text-blue-600 font-bold">രൂപകൽപ്പന</span>
          <span className="text-slate-300">|</span>
          <span className="text-emerald-600 font-bold">தொழில்நுட்பம்</span>
          <span className="text-slate-300">|</span>
          <span className="text-amber-600 font-bold">उत्कृष्टता</span>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden bg-white text-slate-800 p-2.5 rounded-xl border border-slate-200 shadow-sm"
          aria-label="Toggle menu"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Top Status Bar Strip (Sub-header) */}
      <div className="max-w-7xl mx-auto mt-2 pointer-events-auto">
        <div className="bg-emerald-600 text-white text-[11px] font-mono uppercase font-bold tracking-wider px-4 py-1.5 rounded-full shadow-sm flex items-center justify-between overflow-x-auto whitespace-nowrap">
          <div className="flex items-center gap-4">
            <span className="bg-emerald-700/60 px-2 py-0.5 rounded">2025–2026</span>
            <span>VISUAL & DIGITAL STUDIO</span>
            <span className="hidden sm:inline text-emerald-200">·</span>
            <span className="hidden sm:inline">RENDERPOINT SOLUTIONS</span>
            <span className="hidden md:inline text-emerald-200">·</span>
            <span className="hidden md:inline">CREATIVE EXPERIENCE</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="bg-emerald-500/80 text-white px-2 py-0.5 rounded font-mono">
              {activeTab.toUpperCase()} PAGE
            </span>
            <span>{activeNumber} / 07</span>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div className="md:hidden mt-2 bg-white/95 backdrop-blur-xl border border-slate-200 rounded-2xl shadow-xl p-4 pointer-events-auto flex flex-col gap-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-bold ${
                activeTab === item.id ? 'bg-blue-600 text-white' : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              <span>{item.label}</span>
              <span className="font-mono text-xs opacity-75">{item.num}</span>
            </button>
          ))}
          <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-semibold px-2 indian-text">
            <span>രൂപകൽപ്പന</span>
            <span>•</span>
            <span>தொழில்நுட்பம்</span>
            <span>•</span>
            <span>उत्कृष्टता</span>
          </div>
        </div>
      )}
    </header>
  );
}
