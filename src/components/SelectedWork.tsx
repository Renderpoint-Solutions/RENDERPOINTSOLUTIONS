import { useEffect, useRef, useState } from 'react';

const projects = [
  {
    id: 'kora',
    name: 'KORA',
    category: 'Digital Consulting Platform',
    desc: 'A unified workspace for enterprise consulting — streamlining projects, clients, and insights.',
    year: '2025',
    color: '#1a1a2e',
    accent: '#00d4ff',
    span: 'full',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop&auto=format',
  },
  {
    id: 'nexus',
    name: 'NEXUS',
    category: 'AI Operations Platform',
    desc: 'Intelligent infrastructure monitoring with real-time anomaly detection.',
    year: '2025',
    color: '#0d1117',
    accent: '#7c3aed',
    span: 'half',
    img: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=700&h=500&fit=crop&auto=format',
  },
  {
    id: 'guardian',
    name: 'GUARDIAN',
    category: 'Cybersecurity Product',
    desc: 'Enterprise threat intelligence with a zero-trust security architecture.',
    year: '2024',
    color: '#0a0f08',
    accent: '#22c55e',
    span: 'half',
    img: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=700&h=500&fit=crop&auto=format',
  },
  {
    id: 'atlas',
    name: 'ATLAS',
    category: 'Data Intelligence Platform',
    desc: 'Business intelligence reimagined — from raw data to strategic clarity.',
    year: '2024',
    color: '#12100e',
    accent: '#f59e0b',
    span: 'third',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=420&fit=crop&auto=format',
  },
  {
    id: 'motion',
    name: 'MOTION',
    category: 'E-commerce Experience',
    desc: 'A high-conversion storefront that turns browsing into buying.',
    year: '2024',
    color: '#111',
    accent: '#ec4899',
    span: 'twothird',
    img: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=900&h=420&fit=crop&auto=format',
  },
];

export default function SelectedWork() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.05 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="work"
      ref={ref}
      style={{
        padding: '120px 40px',
        background: '#0d0d0d',
        borderTop: '1px solid rgba(255,255,255,0.05)',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          marginBottom: '64px',
          flexWrap: 'wrap',
          gap: '24px',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'opacity 0.7s, transform 0.7s',
        }}>
          <div>
            <div style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '11px',
              letterSpacing: '0.2em',
              color: '#444',
              textTransform: 'uppercase',
              marginBottom: '20px',
            }}>Our work</div>
            <h2 style={{
              fontFamily: 'Outfit, sans-serif',
              fontWeight: 800,
              fontSize: 'clamp(34px, 5vw, 64px)',
              letterSpacing: '-0.03em',
              lineHeight: 1.05,
              color: '#f0f0f0',
              margin: 0,
            }}>Selected work.</h2>
          </div>
          <button
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '13px',
              fontWeight: 500,
              color: '#888',
              background: 'none',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '100px',
              padding: '10px 20px',
              cursor: 'pointer',
              letterSpacing: '0.01em',
              transition: 'color 0.2s, border-color 0.2s',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.color = '#f0f0f0';
              (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.3)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.color = '#888';
              (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.1)';
            }}
          >
            View all projects →
          </button>
        </div>

        {/* Project grid */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>

          {/* Row 1 — full width */}
          {projects.filter(p => p.span === 'full').map((proj, i) => (
            <ProjectCard
              key={proj.id}
              proj={proj}
              visible={visible}
              delay={i * 0.1}
              hovered={hovered}
              setHovered={setHovered}
              height="420px"
            />
          ))}

          {/* Row 2 — two halves */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            {projects.filter(p => p.span === 'half').map((proj, i) => (
              <ProjectCard
                key={proj.id}
                proj={proj}
                visible={visible}
                delay={0.2 + i * 0.1}
                hovered={hovered}
                setHovered={setHovered}
                height="340px"
              />
            ))}
          </div>

          {/* Row 3 — asymmetric 1/3 + 2/3 */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.7fr', gap: '16px' }}>
            {projects.filter(p => p.span === 'third' || p.span === 'twothird').map((proj, i) => (
              <ProjectCard
                key={proj.id}
                proj={proj}
                visible={visible}
                delay={0.3 + i * 0.1}
                hovered={hovered}
                setHovered={setHovered}
                height="300px"
              />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #work .two-col, #work .asym-col { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

function ProjectCard({
  proj, visible, delay, hovered, setHovered, height,
}: {
  proj: typeof projects[0];
  visible: boolean;
  delay: number;
  hovered: string | null;
  setHovered: (v: string | null) => void;
  height: string;
}) {
  const isHov = hovered === proj.id;
  const otherHov = hovered !== null && !isHov;

  return (
    <div
      onMouseEnter={() => setHovered(proj.id)}
      onMouseLeave={() => setHovered(null)}
      style={{
        position: 'relative',
        height,
        borderRadius: '16px',
        overflow: 'hidden',
        cursor: 'pointer',
        opacity: visible ? (otherHov ? 0.45 : 1) : 0,
        transform: visible ? 'translateY(0)' : 'translateY(40px)',
        transition: `opacity 0.4s, transform 0.7s ${delay}s`,
        background: proj.color,
        border: '1px solid rgba(255,255,255,0.07)',
      }}
    >
      {/* Background image */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `url(${proj.img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transform: isHov ? 'scale(1.04)' : 'scale(1)',
        transition: 'transform 0.6s cubic-bezier(0.25,0.46,0.45,0.94)',
        filter: 'brightness(0.35)',
      }} />

      {/* Accent gradient overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        background: `linear-gradient(135deg, ${proj.accent}18 0%, transparent 60%)`,
        opacity: isHov ? 1 : 0.4,
        transition: 'opacity 0.4s',
      }} />

      {/* Bottom gradient */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: '60%',
        background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 100%)',
      }} />

      {/* Content */}
      <div style={{
        position: 'absolute', inset: 0,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '28px 32px',
      }}>
        {/* Top row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <span style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '10px',
            color: proj.accent,
            letterSpacing: '0.1em',
            background: `${proj.accent}18`,
            border: `1px solid ${proj.accent}40`,
            borderRadius: '100px',
            padding: '4px 10px',
          }}>
            {proj.category}
          </span>
          <span style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '10px',
            color: 'rgba(255,255,255,0.3)',
          }}>
            {proj.year}
          </span>
        </div>

        {/* Bottom content */}
        <div>
          <div style={{
            fontFamily: 'Outfit, sans-serif',
            fontWeight: 800,
            fontSize: 'clamp(22px, 3vw, 38px)',
            letterSpacing: '-0.03em',
            color: isHov ? '#fff' : '#ddd',
            marginBottom: '8px',
            transition: 'color 0.3s',
          }}>
            {proj.name}
          </div>
          <div style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '13px',
            color: 'rgba(255,255,255,0.45)',
            lineHeight: 1.5,
            maxWidth: '400px',
            height: isHov ? '40px' : '0',
            overflow: 'hidden',
            transition: 'height 0.3s',
            opacity: isHov ? 1 : 0,
          }}>
            {proj.desc}
          </div>
          <div style={{
            marginTop: '12px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            opacity: isHov ? 1 : 0,
            transform: isHov ? 'translateX(0)' : 'translateX(-8px)',
            transition: 'opacity 0.3s, transform 0.3s',
          }}>
            <span style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '13px',
              fontWeight: 600,
              color: proj.accent,
            }}>
              View project →
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
