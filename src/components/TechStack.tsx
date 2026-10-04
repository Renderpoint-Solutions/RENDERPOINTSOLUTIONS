import { useEffect, useRef, useState } from 'react';

const categories = [
  {
    name: 'Design',
    items: ['Figma', 'Framer', 'Adobe CC'],
  },
  {
    name: 'Frontend',
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    name: 'Backend',
    items: ['Node.js', 'Python', 'FastAPI', 'PostgreSQL'],
  },
  {
    name: 'AI / ML',
    items: ['PyTorch', 'OpenAI', 'Hugging Face', 'LangChain'],
  },
  {
    name: 'Cloud',
    items: ['AWS', 'Docker', 'GitHub', 'Vercel'],
  },
];

export default function TechStack() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [activeHover, setActiveHover] = useState<string | null>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="technology"
      ref={ref}
      style={{
        position: 'relative',
        padding: '120px 40px',
        overflow: 'hidden',
        borderTop: '1px solid rgba(27,94,32,0.06)',
      }}
    >
      {/* Background image */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'url(https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&h=1080&fit=crop&auto=format)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }} />
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'rgba(237,232,224,0.94)',
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
            }}>Our stack</div>
            <h2 style={{
              fontFamily: 'Outfit, sans-serif',
              fontWeight: 800,
              fontSize: 'clamp(34px, 4.5vw, 60px)',
              letterSpacing: '-0.03em',
              lineHeight: 1.05,
              color: '#1a1a1a',
              margin: 0,
            }}>
              Built with the right<br />technology.
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
            Modern tools, thoughtful architecture, and technology chosen around the problem — not the trend.
          </p>
        </div>

        {/* Tech categories */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {categories.map(({ name, items }, ci) => (
            <div
              key={name}
              style={{
                display: 'grid',
                gridTemplateColumns: '160px 1fr',
                gap: '40px',
                alignItems: 'start',
                padding: '32px 0',
                borderTop: '1px solid rgba(27,94,32,0.08)',
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(20px)',
                transition: `opacity 0.6s ${ci * 0.1}s, transform 0.6s ${ci * 0.1}s`,
              }}
            >
              <div style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '11px',
                letterSpacing: '0.12em',
                color: '#9e9a8e',
                textTransform: 'uppercase',
                paddingTop: '6px',
              }}>{name}</div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {items.map((tech) => {
                  const isHov = activeHover === `${name}-${tech}`;
                  return (
                    <button
                      key={tech}
                      onMouseEnter={() => setActiveHover(`${name}-${tech}`)}
                      onMouseLeave={() => setActiveHover(null)}
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '13px',
                        fontWeight: 500,
                        color: isHov ? '#F5F1EB' : '#6B6B60',
                        background: isHov ? '#1B5E20' : 'rgba(27,94,32,0.05)',
                        border: `1px solid ${isHov ? '#1B5E20' : 'rgba(27,94,32,0.12)'}`,
                        borderRadius: '100px',
                        padding: '8px 18px',
                        cursor: 'default',
                        transition: 'all 0.2s',
                        letterSpacing: '0.01em',
                      }}
                    >
                      {tech}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #technology .header-grid { grid-template-columns: 1fr !important; }
          #technology .cat-row { grid-template-columns: 1fr !important; gap: 12px !important; }
        }
      `}</style>
    </section>
  );
}
