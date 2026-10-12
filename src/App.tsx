import { useEffect, useRef, useState } from 'react';

const services = [
  { number: '01', title: 'Website design', detail: 'Clear layouts and useful journeys that make a strong first impression.', icon: '✳' },
  { number: '02', title: 'Website development', detail: 'Responsive, accessible websites built around your goals and content.', icon: '▣' },
  { number: '03', title: 'CMS setup', detail: 'A simple content system so your team can update pages without code.', icon: '▤' },
  { number: '04', title: 'Build + maintenance', detail: 'Launch your site, then keep it updated, healthy, and running smoothly.', icon: '↻' },
  { number: '05', title: 'Website security', detail: 'Practical protection through secure setup, updates, and backups.', icon: '⌑' },
  { number: '06', title: 'SEO foundations', detail: 'Technical setup that helps search engines understand your website.', icon: '⌕' },
  { number: '07', title: 'Local SEO', detail: 'Local search setup, including your Google Business Profile.', icon: '⌖' },
];

const steps = [
  { number: '01', title: 'Listen', detail: 'We learn about your people, goals, and constraints.' },
  { number: '02', title: 'Plan', detail: 'We map your pages and agree on a clear direction before we build.' },
  { number: '03', title: 'Build', detail: 'We build the site, test it across devices, and refine it.' },
  { number: '04', title: 'Launch', detail: 'We launch your site and help it stay healthy over time.' },
];

const teamMembers = [
  { initial: 'S', name: 'Shachin Kailaash J', role: 'Managing partner', focus: 'Business planning, client support, and helping websites get found online.' },
  { initial: 'P', name: 'Pradosh', role: 'Partner · Website testing', focus: 'Checks pages and features so everything works as it should.' },
  { initial: 'A', name: 'Adarsh S', role: 'Partner · Website design', focus: 'Designs and builds the parts people see, tap, and use.' },
  { initial: 'M', name: 'Manoj Kumar G', role: 'Partner · Website features', focus: 'Builds useful features and connects your site to other tools.' },
  { initial: 'J', name: 'Jeffery Robin I', role: 'Partner · Writing & marketing', focus: 'Writes clear website content and helps more people find your business.' },
];

function HeroArtwork() {
  return <img className="hero-art-image" src="/images/renderpoint-architecture-collage.png" alt="A modern architectural collage representing ideas, planning, building, and launching digital work." />;
}

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function TechStackSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const tools = ['Figma', 'React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'Vercel'];

  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;
    if (!section || !video) return;

    const observer = new IntersectionObserver(([entry]) => {
      const visible = entry.isIntersecting;
      setIsVisible(visible);
      if (visible && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        video.play().catch(() => undefined);
      } else {
        video.pause();
      }
    }, { threshold: 0.25 });

    observer.observe(section);
    return () => {
      observer.disconnect();
      video.pause();
    };
  }, []);

  return (
    <section ref={sectionRef} className={`tech-section ${isVisible ? 'is-visible' : ''}`} id="stack" aria-labelledby="stack-title">
      <video ref={videoRef} className="tech-video" muted playsInline loop preload="metadata" aria-hidden="true">
        <source src="/videos/tech-stack-background.mp4" type="video/mp4" />
      </video>
      <div className="tech-video-overlay" />
      <div className="tech-content">
        <div className="tech-heading">
          <div><span className="section-number">03 — OUR TOOLKIT</span><h2 id="stack-title">Built with tools<br />that <span>fit the job.</span></h2></div>
          <p>We choose a practical stack for your website, then build it to be fast, easy to use, and simple to maintain.</p>
        </div>
        <div className="tech-marquee" aria-label="Technologies we work with">
          <div className="tech-track">
            {[...tools, ...tools].map((tool, index) => <span className="tech-name" key={`${index}-${tool}`} aria-hidden={index >= tools.length}><i>0{(index % tools.length) + 1}</i>{tool}</span>)}
          </div>
        </div>
        <div className="tech-footer"><span>DESIGN · DEVELOPMENT · DEPLOYMENT</span><span>SCROLL INTO VIEW TO PLAY</span></div>
      </div>
    </section>
  );
}

function ScrollGuide() {
  const [activeSection, setActiveSection] = useState('top');
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let scrollTimer = 0;
    const sections = [
      { id: 'top' },
      { id: 'process' },
      { id: 'services' },
      { id: 'stack' },
      { id: 'team' },
      { id: 'contact' },
    ];

    const updateGuide = () => {
      const marker = window.scrollY + window.innerHeight * 0.48;
      let current = sections[0];
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element && element.offsetTop <= marker) current = section;
      }
      setActiveSection((previous) => previous === current.id ? previous : current.id);
      setIsScrolling(true);
      window.clearTimeout(scrollTimer);
      scrollTimer = window.setTimeout(() => setIsScrolling(false), 180);
    };

    updateGuide();
    window.addEventListener('scroll', updateGuide, { passive: true });
    window.addEventListener('resize', updateGuide);
    return () => {
      window.clearTimeout(scrollTimer);
      window.removeEventListener('scroll', updateGuide);
      window.removeEventListener('resize', updateGuide);
    };
  }, []);

  const guides: Record<string, { text: string; label: string }> = {
    top: { text: 'Welcome to RenderPoint! Tell us what you need, and we’ll help turn it into a website that works.', label: 'HEY, WELCOME!' },
    process: { text: 'First, we’ll learn about your goals, make a plan, build the site, and launch it together.', label: 'HERE’S THE PLAN' },
    services: { text: 'We care about the whole thing: design, development, security, SEO, and support after launch.', label: 'WE’VE GOT YOU' },
    stack: { text: 'We’ll pick tools that keep your site fast, easy to update, and ready to grow.', label: 'THE RIGHT TOOLS' },
    team: { text: 'Meet the five people who help plan, create, check, and share your website.', label: 'THAT’S OUR TEAM' },
    contact: { text: 'Have a website idea? Tell us about it. We’ll help you figure out the next step.', label: 'LET’S TALK' },
  };
  const guide = guides[activeSection];

  return (
    <aside className="scroll-guide" aria-label="Page guide">
      <div className="guide-bubble" aria-live="polite"><span>{guide.label}</span><p>{guide.text}</p></div>
      <svg className={`guide-character ${isScrolling ? 'is-walking' : ''}`} viewBox="0 0 52 86" role="img" aria-label="A little stick figure guide">
        <circle cx="26" cy="11" r="8" fill="#3567f6" stroke="#f6f3e9" strokeWidth="2.5" />
        <path d="M26 20v27m0-19-14 13m14-13 14 13" fill="none" stroke="#f6f3e9" strokeWidth="3" strokeLinecap="round" />
        <path className="guide-leg guide-leg-left" d="m26 47-13 19-2 13" fill="none" stroke="#f6f3e9" strokeWidth="3" strokeLinecap="round" />
        <path className="guide-leg guide-leg-right" d="m26 47 13 18 3 13" fill="none" stroke="#f6f3e9" strokeWidth="3" strokeLinecap="round" />
        <path d="m7 81 8 1m22 0 8-1" fill="none" stroke="#3567f6" strokeWidth="3" strokeLinecap="round" />
        <path d="m39 10 3-5 3 5 5 2-5 2-3 5-3-5-5-2z" fill="#3567f6" />
      </svg>
    </aside>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = [
    { href: '#services', label: 'What we do' },
    { href: '#stack', label: 'Our toolkit' },
    { href: '#team', label: 'Meet the team' },
    { href: '#process', label: 'Our process' },
  ];

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="RenderPoint home">
          <span className="wordmark-icon">r<span>.</span></span>
          <span>renderpoint</span>
        </a>
        <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? 'CLOSE' : 'MENU'} <span>{menuOpen ? '×' : '+'}</span>
        </button>
        <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Main navigation">
          {navItems.map((item) => <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>)}
          <a className="nav-contact" href="#contact" onClick={() => setMenuOpen(false)}>Start a project <Arrow /></a>
        </nav>
      </header>

      <main id="top">
        <section className="hero bento-grid" aria-labelledby="hero-title">
          <div className="hero-copy tile">
            <div className="eyebrow"><span className="status-dot" /> Independent digital studio <span className="eyebrow-year">· 2026</span></div>
            <h1 id="hero-title">Good ideas<br />deserve <span className="headline-highlight">great</span><br />digital homes<span className="period">.</span></h1>
            <p>We design, build, and care for websites that help ambitious businesses move forward.</p>
            <a className="button button-dark" href="#services">Explore our services <Arrow /></a>
            <div className="hero-index"><span>01 / 03</span><span>Design · Build · Support</span></div>
          </div>
          <div className="hero-art tile" aria-label="Creative coding studio artwork">
            <div className="art-label"><span>PRODUCT CONCEPT / 01</span><span>✳</span></div>
            <HeroArtwork />
            <div className="art-caption"><span>WIREFRAME → EXPERIENCE</span><span>✦ ✦ ✦</span></div>
          </div>
          <div className="service-stickers" aria-label="Website services">
            <div className="service-sticker-list">
              <span className="service-sticker sticker-seo"><i>01</i>SEO</span>
              <span className="service-sticker sticker-cms"><i>02</i>CMS</span>
              <span className="service-sticker sticker-security"><i>03</i>SECURITY</span>
              <span className="service-sticker sticker-care"><i>04</i>SITE CARE</span>
              <span className="service-sticker sticker-local"><i>05</i>LOCAL SEO</span>
            </div>
            <div className="instagram-badge" aria-label="Instagram client badge"><span>Instagram</span><small>CLIENT</small></div>
          </div>
          <div className="hero-note tile">
            <span className="sketch-star" aria-hidden="true">✳</span>
            <div><span className="tile-kicker">SMALL TEAM. BIG PICTURE.</span><p>Strategy, design, and engineering in one thoughtful team.</p></div>
          </div>
          <a className="hero-work tile" href="#stack">
            <span className="tile-kicker">OUR WEB TOOLKIT</span>
            <span className="stack-preview"><i>React</i><i>Next.js</i><i>TS</i></span>
            <span className="mini-arrow"><Arrow /></span>
            <strong>See our tools</strong>
          </a>
        </section>

        <section className="section-block process-section" id="process" aria-labelledby="process-title">
          <div className="section-heading process-heading">
            <div><span className="section-number">01 — HOW WE WORK</span><h2 id="process-title">From first sketch.<br /><span>To launch day.</span></h2></div>
            <p>You’ll always know what we’re doing, why we’re doing it, and what comes next.</p>
          </div>
          <div className="process-steps">
            {steps.map((step) => <article className="process-step" key={step.number}><span>{step.number}</span><div><h3>{step.title}</h3><p>{step.detail}</p></div></article>)}
          </div>
        </section>

        <section className="section-block" id="services" aria-labelledby="services-title">
          <div className="section-heading">
            <div><span className="section-number">02 — WEBSITE SERVICES</span><h2 id="services-title">Your website,<br /><span>well taken care of.</span></h2></div>
            <p>From a first build to ongoing improvements, get the web services your business needs in one place.</p>
          </div>
          <div className="services-grid">
            {services.map((service) => (
              <article className="service-card" key={service.number}>
                <div className="service-top"><span className="service-number">{service.number}</span><span className="service-icon" aria-hidden="true">{service.icon}</span></div>
                <div><h3>{service.title}</h3><p>{service.detail}</p></div>
                <a href="#contact" aria-label={`Discuss ${service.title}`}><Arrow /></a>
              </article>
            ))}
          </div>
        </section>

        <TechStackSection />

        <section className="team-section" id="team" aria-labelledby="team-title">
          <div className="team-section-heading">
            <div><span className="section-number">04 — THE PEOPLE BEHIND RENDERPOINT</span><h2 id="team-title">Meet our team.</h2></div>
            <p>Five people, working together to make your website clear, useful, and ready to grow.</p>
          </div>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <article className="team-card" key={member.name}>
                <div className={`team-card-head team-card-head-${index % 3}`}><span>HELLO</span><small>MY NAME IS</small></div>
                <div className="team-card-body">
                  <span className={`team-card-avatar team-card-avatar-${index % 3}`} aria-hidden="true">{member.initial}</span>
                  <h3>{member.name}</h3>
                  <p className="team-card-role">{member.role}</p>
                  <p className="team-card-focus">{member.focus}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="contact-section tile" id="contact" aria-labelledby="contact-title">
          <div className="contact-copy"><span className="section-number">05 — YOUR MOVE</span><h2 id="contact-title">Let’s make<br />your website <span>work.</span></h2><p>Tell us what you need. We’ll help you figure out the next step.</p></div>
          <a className="contact-link" href="mailto:hello@renderpoint.com"><span>hello@renderpoint.com</span><b><Arrow /></b></a>
          <span className="contact-spark" aria-hidden="true">✳</span>
        </section>
      </main>

      <footer className="site-footer"><a className="wordmark" href="#top"><span className="wordmark-icon">r<span>.</span></span><span>renderpoint</span></a><p>Independent digital studio · Kochi & Bengaluru</p><span>© 2026 RenderPoint</span></footer>
      <ScrollGuide />
    </div>
  );
}
