const links = ['Work', 'Services', 'Technology', 'About', 'Contact'];

export default function Footer() {
  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer style={{
      background: '#080808',
      borderTop: '1px solid rgba(255,255,255,0.06)',
      padding: '64px 40px 32px',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Top row */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr auto 1fr',
          gap: '48px',
          alignItems: 'start',
          marginBottom: '64px',
        }}>
          {/* Brand + tagline */}
          <div>
            <div style={{
              fontFamily: 'Outfit, sans-serif',
              fontWeight: 700,
              fontSize: '20px',
              color: '#f0f0f0',
              letterSpacing: '-0.5px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              marginBottom: '12px',
            }}>
              <span style={{ color: '#00d4ff' }}>◆</span> Studio
            </div>
            <p style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '13px',
              color: '#444',
              lineHeight: 1.65,
              maxWidth: '260px',
              margin: 0,
            }}>
              Building digital experiences for ambitious ideas.
            </p>
          </div>

          {/* Nav */}
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center' }}>
            {links.map((link) => (
              <button
                key={link}
                onClick={() => scrollTo(link)}
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '13px',
                  fontWeight: 500,
                  color: '#444',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '2px 0',
                  letterSpacing: '0.01em',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#888')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#444')}
              >
                {link}
              </button>
            ))}
          </nav>

          {/* Right — email + socials */}
          <div style={{ textAlign: 'right' }}>
            <div style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '10px',
              letterSpacing: '0.1em',
              color: '#333',
              marginBottom: '6px',
            }}>EMAIL</div>
            <a
              href="mailto:hello@yourstudio.com"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '13px',
                fontWeight: 500,
                color: '#555',
                textDecoration: 'none',
                display: 'block',
                marginBottom: '24px',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#00d4ff')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#555')}
            >
              hello@yourstudio.com
            </a>
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end', flexWrap: 'wrap' }}>
              {['LinkedIn', 'Instagram', 'GitHub', 'Behance'].map((s) => (
                <a
                  key={s}
                  href="#"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '11px',
                    fontWeight: 500,
                    color: '#333',
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#888')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#333')}
                >
                  {s}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: '1px', background: 'rgba(255,255,255,0.05)', marginBottom: '24px' }} />

        {/* Bottom row */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
        }}>
          <span style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '11px',
            color: '#2e2e2e',
          }}>
            © 2026 Studio. All rights reserved.
          </span>
          <span style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '11px',
            color: '#2e2e2e',
          }}>
            Design & development by Studio
          </span>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          footer .footer-grid { grid-template-columns: 1fr !important; text-align: left !important; }
          footer .footer-socials { justify-content: flex-start !important; }
        }
      `}</style>
    </footer>
  );
}
