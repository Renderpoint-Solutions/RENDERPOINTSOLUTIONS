import { useEffect, useRef, useState } from 'react';

const services = [
  {
    num: '01',
    title: 'Strategy',
    desc: 'Product strategy, research, positioning and digital roadmaps that align technology with real business goals.',
  },
  {
    num: '02',
    title: 'UI/UX Design',
    desc: 'User experience, interface design, design systems and interactive prototypes that put people first.',
  },
  {
    num: '03',
    title: 'Web Development',
    desc: 'High-performance websites and web applications built for speed, scale, and lasting quality.',
  },
  {
    num: '04',
    title: 'Product Development',
    desc: 'End-to-end development of digital products and platforms — from zero to market, and beyond.',
  },
  {
    num: '05',
    title: 'AI & Emerging Technology',
    desc: 'AI-powered products, automation, intelligent interfaces and experimental technology that changes what\'s possible.',
  },
];

export default function Services() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="services"
      ref={ref}
      style={{
        position: 'relative',
        padding: '120px 40px',
        overflow: 'hidden',
      }}
    >
      {/* Background image */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'url(https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=1080&fit=crop&auto=format)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }} />
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'rgba(245,241,235,0.93)',
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '48px',
          marginBottom: '80px',
          alignItems: 'end',
        }}>
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'opacity 0.7s, transform 0.7s',
            }}
          >
            <div style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '11px',
              letterSpacing: '0.2em',
              color: '#9e9a8e',
              textTransform: 'uppercase',
              marginBottom: '20px',
            }}>What we do</div>
            <h2 style={{
              fontFamily: 'Outfit, sans-serif',
              fontWeight: 800,
              fontSize: 'clamp(36px, 5vw, 64px)',
              letterSpacing: '-0.03em',
              lineHeight: 1.05,
              color: '#1a1a1a',
              margin: 0,
            }}>
              From first idea<br />to final product.
            </h2>
          </div>
          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '16px',
            lineHeight: 1.7,
            color: '#6B6B60',
            margin: 0,
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.7s 0.15s, transform 0.7s 0.15s',
          }}>
            We work across the full spectrum of digital product creation — from early-stage research and strategy through to development, launch and continuous improvement.
          </p>
        </div>

        {/* Services list */}
        <div style={{ borderTop: '1px solid rgba(27,94,32,0.1)' }}>
          {services.map(({ num, title, desc }, i) => (
            <div
              key={num}
              onMouseEnter={() => setHovered(num)}
              onMouseLeave={() => setHovered(null)}
              style={{
                display: 'grid',
                gridTemplateColumns: '80px 1fr auto',
                gap: '32px',
                alignItems: 'center',
                padding: '32px 0',
                borderBottom: '1px solid rgba(27,94,32,0.1)',
                cursor: 'pointer',
                opacity: visible ? (hovered !== null && hovered !== num ? 0.35 : 1) : 0,
                transform: visible ? 'translateX(0)' : 'translateX(-20px)',
                transition: `opacity 0.3s, transform 0.6s ${i * 0.08}s`,
              }}
            >
              <span style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '12px',
                color: '#1B5E20',
                letterSpacing: '0.05em',
              }}>{num}</span>

              <div>
                <div style={{
                  fontFamily: 'Outfit, sans-serif',
                  fontSize: 'clamp(20px, 3vw, 28px)',
                  fontWeight: 700,
                  letterSpacing: '-0.02em',
                  color: hovered === num ? '#1B5E20' : '#1a1a1a',
                  marginBottom: '6px',
                  transition: 'color 0.2s',
                }}>{title}</div>
                <div style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '14px',
                  color: '#6B6B60',
                  lineHeight: 1.6,
                  maxWidth: '500px',
                  height: hovered === num ? '40px' : '0',
                  overflow: 'hidden',
                  transition: 'height 0.3s',
                  opacity: hovered === num ? 1 : 0,
                }}>{desc}</div>
              </div>

              <div style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '20px',
                color: hovered === num ? '#1B5E20' : '#c4bfb4',
                transform: hovered === num ? 'translate(4px, -4px)' : 'translate(0,0)',
                transition: 'color 0.2s, transform 0.2s',
              }}>↗</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #services .header-grid { grid-template-columns: 1fr !important; }
          #services .service-row { grid-template-columns: 56px 1fr 28px !important; gap: 16px !important; }
        }
      `}</style>
    </section>
  );
}
