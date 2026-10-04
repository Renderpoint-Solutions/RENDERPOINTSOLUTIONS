import { useEffect, useRef, useState } from 'react';

const budgets = ['< $10k', '$10k – $25k', '$25k – $50k', '$50k – $100k', '$100k+'];
const projectTypes = ['Web Design', 'Web Development', 'Product Design', 'Mobile App', 'Branding', 'AI / ML', 'Strategy', 'Other'];

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [form, setForm] = useState({
    name: '', email: '', company: '', type: '', budget: '', message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      ref={ref}
      style={{
        position: 'relative',
        padding: '120px 40px',
        background: '#080808',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        overflow: 'hidden',
      }}
    >
      {/* Ambient background blobs */}
      <div style={{
        position: 'absolute',
        top: '-20%', left: '-10%',
        width: '500px', height: '500px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0,212,255,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        bottom: '-20%', right: '-5%',
        width: '400px', height: '400px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(124,58,237,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.2fr',
          gap: '80px',
          alignItems: 'start',
        }}>
          {/* Left — CTA copy */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateX(0)' : 'translateX(-30px)',
              transition: 'opacity 0.8s, transform 0.8s',
            }}
          >
            <div style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '11px',
              letterSpacing: '0.2em',
              color: '#444',
              textTransform: 'uppercase',
              marginBottom: '24px',
            }}>Let's talk</div>

            <div style={{
              fontFamily: 'Outfit, sans-serif',
              fontWeight: 300,
              fontSize: 'clamp(28px, 3vw, 42px)',
              letterSpacing: '-0.02em',
              color: '#666',
              lineHeight: 1.2,
              marginBottom: '8px',
            }}>Have an idea?</div>
            <div style={{
              fontFamily: 'Outfit, sans-serif',
              fontWeight: 900,
              fontSize: 'clamp(36px, 5vw, 64px)',
              letterSpacing: '-0.04em',
              lineHeight: 1.0,
              color: '#f0f0f0',
              marginBottom: '32px',
            }}>
              Let's bring it<br />
              <span style={{ color: '#00d4ff' }}>to digital life.</span>
            </div>

            <p style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '15px',
              lineHeight: 1.7,
              color: '#555',
              marginBottom: '48px',
              maxWidth: '380px',
            }}>
              Tell us what you're building, what you're trying to solve, or simply where you want to go.
            </p>

            {/* Contact details */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <div style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '10px',
                  letterSpacing: '0.12em',
                  color: '#444',
                  marginBottom: '4px',
                }}>EMAIL</div>
                <a
                  href="mailto:hello@yourstudio.com"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '15px',
                    fontWeight: 500,
                    color: '#f0f0f0',
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#00d4ff')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#f0f0f0')}
                >
                  hello@yourstudio.com
                </a>
              </div>

              <div>
                <div style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '10px',
                  letterSpacing: '0.12em',
                  color: '#444',
                  marginBottom: '10px',
                }}>SOCIAL</div>
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                  {['LinkedIn', 'Instagram', 'GitHub', 'Behance', 'Dribbble'].map((s) => (
                    <a
                      key={s}
                      href="#"
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '12px',
                        fontWeight: 500,
                        color: '#555',
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        borderRadius: '100px',
                        padding: '6px 14px',
                        textDecoration: 'none',
                        transition: 'color 0.2s, border-color 0.2s, background 0.2s',
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.color = '#f0f0f0';
                        (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.2)';
                        (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.06)';
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.color = '#555';
                        (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.08)';
                        (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.04)';
                      }}
                    >
                      {s}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateX(0)' : 'translateX(30px)',
              transition: 'opacity 0.8s 0.2s, transform 0.8s 0.2s',
            }}
          >
            {submitted ? (
              <div style={{
                background: 'rgba(0,212,255,0.08)',
                border: '1px solid rgba(0,212,255,0.2)',
                borderRadius: '16px',
                padding: '60px 40px',
                textAlign: 'center',
              }}>
                <div style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '32px',
                  marginBottom: '16px',
                }}>✓</div>
                <div style={{
                  fontFamily: 'Outfit, sans-serif',
                  fontWeight: 700,
                  fontSize: '24px',
                  letterSpacing: '-0.02em',
                  color: '#f0f0f0',
                  marginBottom: '12px',
                }}>We've got your message.</div>
                <div style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '14px',
                  color: '#555',
                }}>
                  We'll review your project and get back to you within 1–2 business days.
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {/* Row 1 */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                  <FormField
                    label="Name"
                    value={form.name}
                    onChange={(v) => setForm({ ...form, name: v })}
                    placeholder="Your name"
                  />
                  <FormField
                    label="Email"
                    type="email"
                    value={form.email}
                    onChange={(v) => setForm({ ...form, email: v })}
                    placeholder="you@company.com"
                    required
                  />
                </div>

                <FormField
                  label="Company"
                  value={form.company}
                  onChange={(v) => setForm({ ...form, company: v })}
                  placeholder="Your company or project name"
                />

                {/* Project type pills */}
                <div>
                  <div style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '10px',
                    letterSpacing: '0.1em',
                    color: '#444',
                    textTransform: 'uppercase',
                    marginBottom: '10px',
                  }}>Project type</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {projectTypes.map((t) => (
                      <button
                        type="button"
                        key={t}
                        onClick={() => setForm({ ...form, type: form.type === t ? '' : t })}
                        style={{
                          fontFamily: 'Inter, sans-serif',
                          fontSize: '12px',
                          fontWeight: 500,
                          color: form.type === t ? '#0d0d0d' : '#666',
                          background: form.type === t ? '#00d4ff' : 'rgba(255,255,255,0.04)',
                          border: `1px solid ${form.type === t ? '#00d4ff' : 'rgba(255,255,255,0.08)'}`,
                          borderRadius: '100px',
                          padding: '7px 14px',
                          cursor: 'pointer',
                          transition: 'all 0.2s',
                        }}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Budget */}
                <div>
                  <div style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '10px',
                    letterSpacing: '0.1em',
                    color: '#444',
                    textTransform: 'uppercase',
                    marginBottom: '10px',
                  }}>Budget range</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {budgets.map((b) => (
                      <button
                        type="button"
                        key={b}
                        onClick={() => setForm({ ...form, budget: form.budget === b ? '' : b })}
                        style={{
                          fontFamily: 'JetBrains Mono, monospace',
                          fontSize: '11px',
                          color: form.budget === b ? '#0d0d0d' : '#555',
                          background: form.budget === b ? '#00d4ff' : 'rgba(255,255,255,0.04)',
                          border: `1px solid ${form.budget === b ? '#00d4ff' : 'rgba(255,255,255,0.08)'}`,
                          borderRadius: '100px',
                          padding: '7px 14px',
                          cursor: 'pointer',
                          transition: 'all 0.2s',
                        }}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <div style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '10px',
                    letterSpacing: '0.1em',
                    color: '#444',
                    textTransform: 'uppercase',
                    marginBottom: '8px',
                  }}>Tell us about your project</div>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Describe your idea, goals, timeline, or anything relevant..."
                    rows={4}
                    style={{
                      width: '100%',
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '14px',
                      color: '#f0f0f0',
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      borderRadius: '10px',
                      padding: '14px 16px',
                      resize: 'vertical',
                      outline: 'none',
                      transition: 'border-color 0.2s',
                      lineHeight: 1.6,
                    }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = 'rgba(0,212,255,0.4)')}
                    onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)')}
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '14px',
                    fontWeight: 600,
                    color: '#0d0d0d',
                    background: '#f0f0f0',
                    border: 'none',
                    borderRadius: '10px',
                    padding: '16px 28px',
                    cursor: 'pointer',
                    letterSpacing: '0.01em',
                    transition: 'background 0.2s, transform 0.15s',
                    alignSelf: 'flex-start',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = '#00d4ff';
                    (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = '#f0f0f0';
                    (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                  }}
                >
                  Start the conversation →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #contact .contact-grid { grid-template-columns: 1fr !important; gap: 60px !important; }
          #contact .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

function FormField({
  label, value, onChange, placeholder, type = 'text', required = false,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <div style={{
        fontFamily: 'JetBrains Mono, monospace',
        fontSize: '10px',
        letterSpacing: '0.1em',
        color: '#444',
        textTransform: 'uppercase',
        marginBottom: '8px',
      }}>{label}</div>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        style={{
          width: '100%',
          fontFamily: 'Inter, sans-serif',
          fontSize: '14px',
          color: '#f0f0f0',
          background: 'rgba(255,255,255,0.04)',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: '10px',
          padding: '13px 16px',
          outline: 'none',
          transition: 'border-color 0.2s',
        }}
        onFocus={(e) => (e.currentTarget.style.borderColor = 'rgba(0,212,255,0.4)')}
        onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)')}
      />
    </div>
  );
}
