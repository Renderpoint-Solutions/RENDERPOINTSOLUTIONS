import { useEffect, useRef, useState } from 'react';
import {
  AIPlatformMockup,
  FinTechMockup,
  EcommerceMockup,
  CyberMockup,
  MobileMockup,
  BrandMockup,
} from './ProjectMockup';

interface CardDef {
  id: string;
  label: string;
  Component: () => JSX.Element;
  top: string;
  left: string;
  width: number;
  initRot: number;
  initScale: number;
  initOpacity: number;
  initBlur: number;
  driftY: number;
  driftX: number;
  aspect: number;
}

const cards: CardDef[] = [
  {
    id: 'ai',
    label: '01 — AI Platform',
    Component: AIPlatformMockup,
    top: '6%', left: '1%',
    width: 240, initRot: -6, initScale: 0.82, initOpacity: 0.32, initBlur: 14, driftY: -24, driftX: -10, aspect: 0.625,
  },
  {
    id: 'fin',
    label: '02 — FinTech',
    Component: FinTechMockup,
    top: '3%', left: '64%',
    width: 210, initRot: 5, initScale: 0.85, initOpacity: 0.28, initBlur: 16, driftY: -30, driftX: 12, aspect: 0.633,
  },
  {
    id: 'ecom',
    label: '03 — E-commerce',
    Component: EcommerceMockup,
    top: '42%', left: '-2%',
    width: 200, initRot: 7, initScale: 0.8, initOpacity: 0.25, initBlur: 18, driftY: 20, driftX: -14, aspect: 0.643,
  },
  {
    id: 'cyber',
    label: '04 — Cybersecurity',
    Component: CyberMockup,
    top: '44%', left: '68%',
    width: 220, initRot: -5, initScale: 0.83, initOpacity: 0.3, initBlur: 15, driftY: 22, driftX: 14, aspect: 0.633,
  },
  {
    id: 'mobile',
    label: '05 — Mobile App',
    Component: MobileMockup,
    top: '10%', left: '36%',
    width: 80, initRot: -8, initScale: 0.78, initOpacity: 0.2, initBlur: 20, driftY: -40, driftX: 0, aspect: 1.833,
  },
  {
    id: 'brand',
    label: '06 — Brand Website',
    Component: BrandMockup,
    top: '62%', left: '28%',
    width: 200, initRot: 4, initScale: 0.84, initOpacity: 0.22, initBlur: 17, driftY: 30, driftX: 4, aspect: 0.625,
  },
];

const mobileCards: CardDef[] = [
  { ...cards[0], top: '4%', left: '-4%', width: 160, initOpacity: 0.28, initBlur: 12, initRot: -5 },
  { ...cards[1], top: '4%', left: '62%', width: 148, initOpacity: 0.25, initBlur: 13, initRot: 4 },
  { ...cards[5], top: '62%', left: '18%', width: 180, initOpacity: 0.22, initBlur: 14, initRot: 3 },
];

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const section = sectionRef.current;
      if (!section) return;
      const h = section.offsetHeight;
      const p = Math.min(Math.max(window.scrollY / (h * 0.75), 0), 1);
      setProgress(p);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const activeCards = isMobile ? mobileCards : cards;

  const getCardStyle = (card: CardDef): React.CSSProperties => {
    const blur = card.initBlur * (1 - progress);
    const opacity = card.initOpacity + (0.82 - card.initOpacity) * progress;
    const scale = card.initScale + (1 - card.initScale) * progress;
    const rot = card.initRot * (1 - progress);
    const translateY = card.driftY * (1 - progress);
    const translateX = card.driftX * (1 - progress);
    const grayscale = 60 * (1 - progress);

    return {
      position: 'absolute',
      top: card.top,
      left: card.left,
      width: `${card.width}px`,
      height: `${Math.round(card.width * card.aspect)}px`,
      zIndex: 1,
      transform: `translate(${translateX}px, ${translateY}px) rotate(${rot}deg) scale(${scale})`,
      filter: `blur(${blur}px) grayscale(${grayscale}%)`,
      opacity,
      borderRadius: '12px',
      overflow: 'hidden',
      border: '1px solid rgba(27,94,32,0.08)',
      boxShadow: `0 20px 60px rgba(27,94,32,0.12), 0 0 0 1px rgba(27,94,32,0.04)`,
      transition: 'none',
      willChange: 'transform, filter, opacity',
    };
  };

  return (
    <section
      ref={sectionRef}
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Background image with parallax */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'url(https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1920&h=1080&fit=crop&auto=format)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        transform: `translateY(${progress * 40}px)`,
        transition: 'none',
        willChange: 'transform',
      }} />
      {/* Cream overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(245,241,235,0.88) 0%, rgba(245,241,235,0.94) 70%)',
      }} />

      {/* Floating cards layer */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 1 }}>
        {activeCards.map((card) => (
          <div key={card.id} style={getCardStyle(card)}>
            {/* Card label */}
            <div style={{
              position: 'absolute',
              bottom: 0, left: 0, right: 0,
              padding: '8px 10px',
              background: 'linear-gradient(to top, rgba(27,94,32,0.15) 0%, transparent 100%)',
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '9px',
              color: 'rgba(27,94,32,0.5)',
              letterSpacing: '0.05em',
              zIndex: 2,
            }}>
              {card.label}
            </div>
            <card.Component />
          </div>
        ))}
      </div>

      {/* Hero content */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          textAlign: 'center',
          padding: '0 24px',
          maxWidth: '800px',
        }}
      >
        {/* Availability pill */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          background: 'rgba(27,94,32,0.08)',
          border: '1px solid rgba(27,94,32,0.18)',
          borderRadius: '100px',
          padding: '6px 14px',
          marginBottom: '32px',
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: '11px',
          color: '#1B5E20',
          letterSpacing: '0.03em',
        }}>
          <span style={{
            width: '6px', height: '6px', borderRadius: '50%',
            background: '#2E7D32',
            boxShadow: '0 0 6px #2E7D32',
            animation: 'pulse-dot 2s ease-in-out infinite',
          }} />
          Available for new projects
        </div>

        {/* Eyebrow */}
        <div style={{
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: '11px',
          letterSpacing: '0.2em',
          color: '#9e9a8e',
          textTransform: 'uppercase',
          marginBottom: '24px',
        }}>
          Digital Product Studio
        </div>

        {/* Headline */}
        <h1 style={{
          fontFamily: 'Outfit, sans-serif',
          fontWeight: 900,
          lineHeight: 1.0,
          letterSpacing: '-0.04em',
          margin: '0 0 24px',
          fontSize: 'clamp(52px, 8vw, 110px)',
          color: '#1a1a1a',
        }}>
          We bring your ideas
          <br />
          <span style={{ color: '#1B5E20' }}>to digital life.</span>
        </h1>

        {/* Supporting copy */}
        <p style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: 'clamp(15px, 1.8vw, 18px)',
          fontWeight: 400,
          lineHeight: 1.65,
          color: '#6B6B60',
          maxWidth: '520px',
          margin: '0 auto 40px',
        }}>
          We design, build, and launch digital experiences that turn ambitious
          ideas into products people actually want to use.
        </p>

        {/* CTAs */}
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '14px',
              fontWeight: 600,
              color: '#F5F1EB',
              background: '#1B5E20',
              border: 'none',
              borderRadius: '10px',
              padding: '14px 28px',
              cursor: 'pointer',
              letterSpacing: '0.01em',
              transition: 'background 0.2s, transform 0.15s',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = '#2E7D32';
              (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = '#1B5E20';
              (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
            }}
          >
            Start a project
          </button>
          <button
            onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '14px',
              fontWeight: 500,
              color: '#6B6B60',
              background: 'rgba(27,94,32,0.06)',
              border: '1px solid rgba(27,94,32,0.15)',
              borderRadius: '10px',
              padding: '14px 28px',
              cursor: 'pointer',
              letterSpacing: '0.01em',
              transition: 'color 0.2s, border-color 0.2s, transform 0.15s',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.color = '#1B5E20';
              (e.currentTarget as HTMLElement).style.borderColor = 'rgba(27,94,32,0.35)';
              (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.color = '#6B6B60';
              (e.currentTarget as HTMLElement).style.borderColor = 'rgba(27,94,32,0.15)';
              (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
            }}
          >
            Explore our work
          </button>
        </div>

        {/* Scroll hint */}
        <div style={{
          marginTop: '72px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
          opacity: Math.max(0, 1 - progress * 3),
        }}>
          <div style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '10px',
            letterSpacing: '0.12em',
            color: '#9e9a8e',
            textTransform: 'uppercase',
          }}>Scroll to discover</div>
          <div style={{
            width: '1px', height: '40px',
            background: 'linear-gradient(to bottom, #1B5E20, transparent)',
            animation: 'scroll-hint 1.8s ease-in-out infinite',
          }} />
        </div>
      </div>

      <style>{`
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        @keyframes scroll-hint {
          0% { transform: scaleY(0); transform-origin: top; opacity: 0; }
          50% { transform: scaleY(1); transform-origin: top; opacity: 1; }
          100% { transform: scaleY(0); transform-origin: bottom; opacity: 0; }
        }
      `}</style>
    </section>
  );
}
