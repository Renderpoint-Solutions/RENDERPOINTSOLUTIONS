import { useEffect, useRef, useState } from 'react';

const stats = [
  { value: '30+', label: 'Digital products', sub: 'shipped to market' },
  { value: '20+', label: 'Brands launched', sub: 'globally' },
  { value: '12+', label: 'Industries', sub: 'served' },
  { value: '99%', label: 'Client satisfaction', sub: 'consistently' },
];

const clients = [
  'KORA', 'NEXUS', 'ATLAS', 'GUARDIAN', 'MOTION', 'LUMIS', 'PRISM', 'VOLTA',
];

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      style={{
        position: 'relative',
        borderTop: '1px solid rgba(27,94,32,0.08)',
        padding: '80px 40px',
        overflow: 'hidden',
      }}
    >
      {/* Background image */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'url(https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1920&h=1080&fit=crop&auto=format)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }} />
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'rgba(245,241,235,0.92)',
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Eyebrow */}
        <div style={{
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: '11px',
          letterSpacing: '0.2em',
          color: '#9e9a8e',
          textTransform: 'uppercase',
          marginBottom: '48px',
          textAlign: 'center',
        }}>
          Built for ambitious teams.
        </div>

        {/* Stats grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '1px',
          background: 'rgba(27,94,32,0.08)',
          border: '1px solid rgba(27,94,32,0.08)',
          borderRadius: '16px',
          overflow: 'hidden',
          marginBottom: '64px',
        }}>
          {stats.map(({ value, label, sub }, i) => (
            <div
              key={label}
              style={{
                background: 'rgba(245,241,235,0.95)',
                padding: '40px 32px',
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(20px)',
                transition: `opacity 0.6s ${i * 0.1}s, transform 0.6s ${i * 0.1}s`,
              }}
            >
              <div style={{
                fontFamily: 'Outfit, sans-serif',
                fontSize: 'clamp(36px, 4vw, 52px)',
                fontWeight: 900,
                letterSpacing: '-0.03em',
                color: '#1B5E20',
                lineHeight: 1,
                marginBottom: '8px',
              }}>
                {value}
              </div>
              <div style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '13px',
                fontWeight: 600,
                color: '#1a1a1a',
                marginBottom: '4px',
              }}>{label}</div>
              <div style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '11px',
                color: '#9e9a8e',
              }}>{sub}</div>
            </div>
          ))}
        </div>

        {/* Client logos marquee */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
          overflow: 'hidden',
        }}>
          <div style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '10px',
            color: '#9e9a8e',
            letterSpacing: '0.1em',
            whiteSpace: 'nowrap',
          }}>TRUSTED BY</div>
          <div style={{
            display: 'flex',
            gap: '40px',
            flex: 1,
            overflowX: 'auto',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}>
            {[...clients, ...clients].map((name, i) => (
              <span
                key={i}
                style={{
                  fontFamily: 'Outfit, sans-serif',
                  fontWeight: 700,
                  fontSize: '14px',
                  color: '#c4bfb4',
                  letterSpacing: '0.08em',
                  whiteSpace: 'nowrap',
                  transition: 'color 0.2s',
                  cursor: 'default',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#1B5E20')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#c4bfb4')}
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
