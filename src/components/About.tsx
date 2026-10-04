import { useEffect, useRef, useState } from 'react';

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

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
      id="about"
      ref={ref}
      style={{
        padding: '120px 40px',
        background: '#0d0d0d',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        overflow: 'hidden',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Eyebrow */}
        <div style={{
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: '11px',
          letterSpacing: '0.2em',
          color: '#444',
          textTransform: 'uppercase',
          marginBottom: '40px',
          opacity: visible ? 1 : 0,
          transition: 'opacity 0.7s',
        }}>About</div>

        {/* Main editorial layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px',
          alignItems: 'start',
          marginBottom: '80px',
        }}>
          {/* Left — big headline */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateX(0)' : 'translateX(-30px)',
              transition: 'opacity 0.8s, transform 0.8s',
            }}
          >
            <h2 style={{
              fontFamily: 'Outfit, sans-serif',
              fontWeight: 800,
              fontSize: 'clamp(28px, 4vw, 52px)',
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
              color: '#f0f0f0',
              margin: '0 0 32px',
            }}>
              We care about<br />the idea behind<br />the interface.
            </h2>

            <p style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '16px',
              lineHeight: 1.75,
              color: '#555',
              margin: '0 0 24px',
            }}>
              We combine design, technology and strategy to create digital products
              that are useful, memorable and built to perform.
            </p>
            <p style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '16px',
              lineHeight: 1.75,
              color: '#555',
              margin: '0 0 40px',
            }}>
              Founded on the belief that great products come from the intersection of
              clarity of thought, craft in execution, and genuine curiosity about the
              humans who use them.
            </p>

            {/* Highlight quote */}
            <blockquote style={{
              fontFamily: 'Outfit, sans-serif',
              fontWeight: 600,
              fontSize: '18px',
              letterSpacing: '-0.01em',
              lineHeight: 1.5,
              color: '#00d4ff',
              borderLeft: '2px solid #00d4ff',
              paddingLeft: '20px',
              margin: 0,
            }}>
              "We don't just build things. We bring them to life."
            </blockquote>
          </div>

          {/* Right — image collage */}
          <div
            style={{
              position: 'relative',
              height: '480px',
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateX(0)' : 'translateX(30px)',
              transition: 'opacity 0.8s 0.2s, transform 0.8s 0.2s',
            }}
          >
            {/* Main image */}
            <div style={{
              position: 'absolute',
              top: 0, left: 0,
              width: '75%',
              height: '65%',
              borderRadius: '12px',
              overflow: 'hidden',
              background: '#141414',
            }}>
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=700&h=420&fit=crop&auto=format"
                alt="Studio team collaborating"
                style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.7)' }}
              />
            </div>

            {/* Secondary image */}
            <div style={{
              position: 'absolute',
              bottom: 0, right: 0,
              width: '55%',
              height: '50%',
              borderRadius: '12px',
              overflow: 'hidden',
              background: '#141414',
              border: '3px solid #0d0d0d',
            }}>
              <img
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=500&h=360&fit=crop&auto=format"
                alt="Studio workspace"
                style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.6)' }}
              />
            </div>

            {/* Small accent card */}
            <div style={{
              position: 'absolute',
              top: '58%',
              left: '4%',
              background: 'rgba(0,212,255,0.08)',
              border: '1px solid rgba(0,212,255,0.2)',
              borderRadius: '10px',
              padding: '16px 20px',
            }}>
              <div style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '10px',
                color: '#00d4ff',
                letterSpacing: '0.1em',
                marginBottom: '4px',
              }}>FOUNDED</div>
              <div style={{
                fontFamily: 'Outfit, sans-serif',
                fontWeight: 800,
                fontSize: '24px',
                color: '#f0f0f0',
                letterSpacing: '-0.03em',
              }}>2020</div>
            </div>
          </div>
        </div>

        {/* Values strip */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1px',
          background: 'rgba(255,255,255,0.06)',
          border: '1px solid rgba(255,255,255,0.06)',
          borderRadius: '16px',
          overflow: 'hidden',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.7s 0.4s, transform 0.7s 0.4s',
        }}>
          {[
            { label: 'Craft', desc: 'We obsess over the details because details are what separates good from great.' },
            { label: 'Clarity', desc: 'Simple ideas executed well beat complex ones executed poorly.' },
            { label: 'Courage', desc: 'We challenge briefs, push back when needed, and do what is right, not just easy.' },
          ].map(({ label, desc }) => (
            <div key={label} style={{ background: '#0d0d0d', padding: '36px 32px' }}>
              <div style={{
                fontFamily: 'Outfit, sans-serif',
                fontWeight: 700,
                fontSize: '20px',
                letterSpacing: '-0.02em',
                color: '#f0f0f0',
                marginBottom: '10px',
              }}>{label}</div>
              <div style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '13px',
                lineHeight: 1.65,
                color: '#555',
              }}>{desc}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #about .about-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          #about .about-image { height: 280px !important; }
          #about .values-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
