import { useState, useEffect } from 'react';
import PRLogo from './PRLogo';

const links = ['Work', 'Services', 'Technology', 'About', 'Contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    const el = document.getElementById(id.toLowerCase());
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav
        style={{
          fontFamily: 'Inter, sans-serif',
          position: 'fixed',
          top: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 100,
          width: 'calc(100% - 48px)',
          maxWidth: '1200px',
          background: scrolled ? 'rgba(245,241,235,0.92)' : 'rgba(245,241,235,0.7)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(27,94,32,0.08)',
          borderRadius: '14px',
          padding: '12px 20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          transition: 'background 0.3s',
          boxShadow: scrolled ? '0 4px 30px rgba(27,94,32,0.06)' : 'none',
        }}
      >
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: 0,
          }}
        >
          <PRLogo size={36} />
          <span style={{
            fontFamily: 'Outfit, sans-serif',
            fontWeight: 700,
            fontSize: '16px',
            color: '#1B5E20',
            letterSpacing: '-0.5px',
          }}>RenderPoint</span>
        </button>

        {/* Desktop links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }} className="nav-links-desktop">
          {links.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '13px',
                fontWeight: 500,
                color: '#6B6B60',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '6px 12px',
                borderRadius: '8px',
                letterSpacing: '0.01em',
                transition: 'color 0.2s, background 0.2s',
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.color = '#1B5E20';
                (e.target as HTMLElement).style.background = 'rgba(27,94,32,0.06)';
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.color = '#6B6B60';
                (e.target as HTMLElement).style.background = 'none';
              }}
            >
              {link}
            </button>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          {/* CTA */}
          <button
            onClick={() => scrollTo('Contact')}
            className="nav-cta"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '13px',
              fontWeight: 600,
              color: '#F5F1EB',
              background: '#1B5E20',
              border: 'none',
              borderRadius: '8px',
              padding: '8px 16px',
              cursor: 'pointer',
              letterSpacing: '0.01em',
              transition: 'background 0.2s, transform 0.15s',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLElement).style.background = '#2E7D32';
              (e.target as HTMLElement).style.transform = 'scale(1.02)';
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLElement).style.background = '#1B5E20';
              (e.target as HTMLElement).style.transform = 'scale(1)';
            }}
          >
            Start a project
          </button>

          {/* Mobile hamburger */}
          <button
            className="nav-hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '4px',
              color: '#1a1a1a',
              flexDirection: 'column',
              gap: '4px',
            }}
            aria-label="Menu"
          >
            <span style={{ display: 'block', width: '20px', height: '1.5px', background: '#1a1a1a', transition: 'transform 0.2s', transform: menuOpen ? 'rotate(45deg) translateY(5.5px)' : 'none' }} />
            <span style={{ display: 'block', width: '20px', height: '1.5px', background: '#1a1a1a', opacity: menuOpen ? 0 : 1, transition: 'opacity 0.2s' }} />
            <span style={{ display: 'block', width: '20px', height: '1.5px', background: '#1a1a1a', transition: 'transform 0.2s', transform: menuOpen ? 'rotate(-45deg) translateY(-5.5px)' : 'none' }} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            position: 'fixed',
            top: '80px',
            left: '24px',
            right: '24px',
            zIndex: 99,
            background: 'rgba(245,241,235,0.97)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(27,94,32,0.08)',
            borderRadius: '14px',
            padding: '16px',
            display: 'flex',
            flexDirection: 'column',
            gap: '4px',
            boxShadow: '0 8px 40px rgba(27,94,32,0.08)',
          }}
          className="mobile-menu"
        >
          {links.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '15px',
                fontWeight: 500,
                color: '#6B6B60',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '12px 16px',
                borderRadius: '8px',
                textAlign: 'left',
                letterSpacing: '0.01em',
                transition: 'color 0.2s, background 0.2s',
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.color = '#1B5E20';
                (e.target as HTMLElement).style.background = 'rgba(27,94,32,0.06)';
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.color = '#6B6B60';
                (e.target as HTMLElement).style.background = 'none';
              }}
            >
              {link}
            </button>
          ))}
          <button
            onClick={() => scrollTo('Contact')}
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '14px',
              fontWeight: 600,
              color: '#F5F1EB',
              background: '#1B5E20',
              border: 'none',
              borderRadius: '8px',
              padding: '12px 16px',
              cursor: 'pointer',
              marginTop: '8px',
              transition: 'background 0.2s',
            }}
          >
            Start a project
          </button>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-links-desktop { display: none !important; }
          .nav-hamburger { display: flex !important; }
          .nav-cta { display: none !important; }
        }
      `}</style>
    </>
  );
}
