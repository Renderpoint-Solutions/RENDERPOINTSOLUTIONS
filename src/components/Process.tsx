import { useEffect, useRef, useState } from 'react';

const steps = [
  {
    num: '01',
    title: 'Discover',
    desc: 'Understand the problem, users and business. We immerse in your world before writing a single line.',
  },
  {
    num: '02',
    title: 'Define',
    desc: 'Turn the idea into a clear product strategy. A precise north star so every decision points somewhere.',
  },
  {
    num: '03',
    title: 'Design',
    desc: 'Create the experience, interface and visual system. Beautiful, functional, and rooted in real user needs.',
  },
  {
    num: '04',
    title: 'Build',
    desc: 'Develop the product using modern technology. Clean code, scalable architecture, and no shortcuts.',
  },
  {
    num: '05',
    title: 'Launch',
    desc: 'Ship, measure and continuously improve. The work continues long after the first release.',
  },
];

export default function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [activeStep, setActiveStep] = useState<string | null>(null);

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
      style={{
        padding: '120px 40px',
        background: '#0a0a0a',
        borderTop: '1px solid rgba(255,255,255,0.05)',
      }}
      ref={ref}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{
          textAlign: 'center',
          marginBottom: '80px',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'opacity 0.7s, transform 0.7s',
        }}>
          <div style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '11px',
            letterSpacing: '0.2em',
            color: '#444',
            textTransform: 'uppercase',
            marginBottom: '20px',
          }}>Our process</div>
          <h2 style={{
            fontFamily: 'Outfit, sans-serif',
            fontWeight: 800,
            fontSize: 'clamp(34px, 5vw, 60px)',
            letterSpacing: '-0.03em',
            lineHeight: 1.05,
            color: '#f0f0f0',
            margin: '0 auto',
            maxWidth: '600px',
          }}>
            How we bring ideas to life.
          </h2>
        </div>

        {/* Steps — horizontal on desktop, vertical on mobile */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          gap: '0',
          position: 'relative',
        }}>
          {/* Connecting line */}
          <div style={{
            position: 'absolute',
            top: '32px',
            left: '10%',
            right: '10%',
            height: '1px',
            background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.08) 10%, rgba(255,255,255,0.08) 90%, transparent)',
            zIndex: 0,
          }}>
            {/* Animated fill */}
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to right, #00d4ff, #7c3aed)',
              transformOrigin: 'left',
              transform: `scaleX(${visible ? 1 : 0})`,
              transition: 'transform 1.8s cubic-bezier(0.25,0.46,0.45,0.94) 0.3s',
              opacity: 0.5,
            }} />
          </div>

          {steps.map(({ num, title, desc }, i) => {
            const isActive = activeStep === num;
            return (
              <div
                key={num}
                onMouseEnter={() => setActiveStep(num)}
                onMouseLeave={() => setActiveStep(null)}
                style={{
                  position: 'relative',
                  zIndex: 1,
                  padding: '0 20px',
                  paddingTop: '0',
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'translateY(0)' : 'translateY(24px)',
                  transition: `opacity 0.6s ${i * 0.12}s, transform 0.6s ${i * 0.12}s`,
                  cursor: 'default',
                }}
              >
                {/* Node */}
                <div style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  border: `1px solid ${isActive ? '#00d4ff' : 'rgba(255,255,255,0.1)'}`,
                  background: isActive ? 'rgba(0,212,255,0.1)' : 'rgba(255,255,255,0.03)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '28px',
                  transition: 'border-color 0.3s, background 0.3s',
                }}>
                  <span style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '13px',
                    fontWeight: 500,
                    color: isActive ? '#00d4ff' : '#444',
                    transition: 'color 0.3s',
                  }}>{num}</span>
                </div>

                <div style={{
                  fontFamily: 'Outfit, sans-serif',
                  fontWeight: 700,
                  fontSize: '20px',
                  letterSpacing: '-0.02em',
                  color: isActive ? '#f0f0f0' : '#888',
                  marginBottom: '10px',
                  transition: 'color 0.3s',
                }}>
                  {title}
                </div>
                <div style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '13px',
                  lineHeight: 1.65,
                  color: '#444',
                  maxWidth: '180px',
                }}>
                  {desc}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .process-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .process-line { display: none !important; }
        }
      `}</style>
    </section>
  );
}
