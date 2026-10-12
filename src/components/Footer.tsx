import PRLogo from './PRLogo';

const navItems = [
  { id: 'cover', label: 'Cover' },
  { id: 'services', label: 'Services' },
  { id: 'about', label: 'About' },
  { id: 'work', label: 'Selected Work' },
  { id: 'process', label: 'Process' },
  { id: 'techstack', label: 'Tech Stack' },
  { id: 'contact', label: 'Contact' },
];

export default function Footer() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 py-16 px-4 md:px-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          {/* Brand Info */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-blue-600 p-2 rounded-xl text-white">
                  <PRLogo size={24} color="#ffffff" />
                </div>
                <span className="font-extrabold text-xl text-white font-display tracking-tight">
                  RENDERPOINT<span className="text-blue-400 font-normal text-xs ml-0.5">®</span>
                </span>
              </div>

              <p className="text-slate-400 text-sm max-w-sm leading-relaxed mb-4">
                A digital product studio engineering high-impact web apps, mobile solutions, & AI platforms for ambitious founders worldwide.
              </p>

              {/* Indian Script Tagline */}
              <div className="indian-text text-sm font-semibold text-emerald-400">
                വടിവமைப்பு • സാങ്കേതികവിദ്യ • ഡിജിറ്റൽ ലളിതത്വം
              </div>
            </div>
          </div>

          {/* Nav Links */}
          <div className="md:col-span-3">
            <div className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider mb-4">
              NAVIGATION
            </div>
            <ul className="space-y-2 text-sm font-medium">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollTo(item.id)}
                    className="hover:text-blue-400 transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Contact */}
          <div className="md:col-span-4 flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider mb-4">
                INQUIRIES
              </div>
              <a
                href="mailto:hello@renderpoint.com"
                className="text-lg font-bold text-white hover:text-blue-400 transition-colors block mb-4"
              >
                hello@renderpoint.com
              </a>
              <div className="text-xs text-slate-400 mb-4">
                Kochi & Bengaluru, India
              </div>
            </div>

            <div className="flex gap-4 text-xs font-mono text-slate-400">
              <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-white transition-colors">GitHub</a>
              <a href="#" className="hover:text-white transition-colors">Twitter</a>
              <a href="#" className="hover:text-white transition-colors">Dribbble</a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-slate-500 gap-4">
          <div>
            © 2026 RenderPoint Solutions. All rights reserved.
          </div>
          <div>
            Built with React & Tailwind CSS • Folder Tab Portfolio Edition
          </div>
        </div>
      </div>
    </footer>
  );
}
