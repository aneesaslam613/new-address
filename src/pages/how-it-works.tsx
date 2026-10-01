import { useState } from 'react';
import { Helmet } from '@dr.pogodin/react-helmet';
import { Link } from "react-router";
import { motion } from 'motion/react';
import { MessageSquare, FileText, ClipboardCheck, Package, Truck, MapPin, PackageCheck, ArrowRight, ChevronDown, ChevronRight } from 'lucide-react';
import { how_it_works } from 'virtual:content';

// ─── Design tokens ────────────────────────────────────────────────────────────
const NAVY = '#0A2540';
const BLUE = '#1A56DB';
const ACCENT = '#0EA5E9';
const LIGHT = '#F1F5F9';

// ─── Constants ────────────────────────────────────────────────────────────────
const site = 'https://arseenenterprises.com';
const url = `${site}/how-it-works`;
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${url}#webpage`,
  name: 'How It Works — Arseen Enterprises LLC',
  url,
  isPartOf: {
    '@id': `${site}/#website`
  },
  about: {
    '@id': `${site}/#organization`
  }
};

// ─── Step icons (7 steps: submit, quote, pay, procure, prepare, ship, track) ──
const STEP_ICONS = [MessageSquare, FileText, ClipboardCheck, Package, Truck, MapPin, PackageCheck];

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function HowItWorksPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  return <>
      <Helmet>
        <title>How It Works — Arseen Enterprises LLC</title>
        <meta name="description" content="Learn how Arseen Enterprises LLC processes your procurement and fulfillment requests — from product requirements through quotation, payment, procurement, preparation, shipment and delivery." />
        <link rel="canonical" href={url} />
        <meta property="og:title" content="How It Works — Arseen Enterprises LLC" />
        <meta property="og:description" content="A clear 7-step process from product requirements to delivery." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={`${site}/og-image.svg`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="How It Works — Arseen Enterprises LLC" />
        <meta name="twitter:description" content="A simple 6-step fulfillment process from inquiry to delivery." />
        <meta name="twitter:image" content={`${site}/og-image.svg`} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <main style={{
      fontFamily: 'inherit'
    }}>

        {/* ── 1. HERO ─────────────────────────────────────────────────────── */}
        <section style={{
        background: `linear-gradient(135deg, ${NAVY} 0%, ${BLUE} 100%)`,
        padding: '5rem 1.5rem 4rem',
        position: 'relative',
        overflow: 'hidden'
      }}>
          <div aria-hidden style={{
          position: 'absolute',
          top: '-80px',
          right: '-80px',
          width: '360px',
          height: '360px',
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.04)',
          pointerEvents: 'none'
        }} />
          <div aria-hidden style={{
          position: 'absolute',
          bottom: '-60px',
          left: '-60px',
          width: '260px',
          height: '260px',
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.03)',
          pointerEvents: 'none'
        }} />

          <div style={{
          maxWidth: '1100px',
          margin: '0 auto',
          position: 'relative'
        }}>
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.375rem',
            marginBottom: '1.75rem',
            fontSize: '0.8125rem',
            color: 'rgba(255,255,255,0.55)'
          }}>
              <Link to="/" style={{
              color: 'rgba(255,255,255,0.55)',
              textDecoration: 'none'
            }} onMouseEnter={e => (e.target as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.9)'} onMouseLeave={e => (e.target as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.55)'}>
                Home
              </Link>
              <ChevronRight size={13} />
              <span style={{
              color: 'rgba(255,255,255,0.85)'
            }}>How It Works</span>
            </nav>

            <motion.div initial={{
            opacity: 0,
            y: 16
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            ease: 'easeOut' as const
          }}>
              <span style={{
              display: 'inline-block',
              background: `rgba(14,165,233,0.18)`,
              color: ACCENT,
              border: `1px solid rgba(14,165,233,0.35)`,
              borderRadius: '999px',
              padding: '0.25rem 0.875rem',
              fontSize: '0.75rem',
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              marginBottom: '1.25rem'
            }}>
                The Process
              </span>
            </motion.div>

            <motion.h1 initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.55,
            delay: 0.08,
            ease: 'easeOut' as const
          }} style={{
            fontSize: 'clamp(2rem, 5vw, 3.25rem)',
            fontWeight: 800,
            color: '#fff',
            lineHeight: 1.15,
            marginBottom: '1.25rem',
            maxWidth: '700px'
          }}>
              {how_it_works.heading}
            </motion.h1>

            <motion.p initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.55,
            delay: 0.16,
            ease: 'easeOut' as const
          }} style={{
            fontSize: '1.125rem',
            color: 'rgba(255,255,255,0.72)',
            maxWidth: '560px',
            lineHeight: 1.7
          }}>
              {how_it_works.subheading}
            </motion.p>
          </div>
        </section>

        {/* ── 2. STEPS (zigzag) ───────────────────────────────────────────── */}
        <section style={{
        background: '#fff',
        padding: '5rem 1.5rem'
      }}>
          <div style={{
          maxWidth: '1100px',
          margin: '0 auto'
        }}>
            <div style={{
            textAlign: 'center',
            marginBottom: '3.5rem'
          }}>
              <h2 style={{
              fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
              fontWeight: 800,
              color: NAVY,
              marginBottom: '0.75rem'
            }}>
                Seven Steps to Seamless Fulfillment
              </h2>
              <p style={{
              color: '#64748B',
              fontSize: '1rem',
              maxWidth: '500px',
              margin: '0 auto'
            }}>
                Every order follows the same proven path — transparent, efficient, and trackable.
              </p>
            </div>

            {/* Zigzag container */}
            <div className="steps-container" style={{
            position: 'relative'
          }}>
              {/* Vertical spine line */}
              <div aria-hidden className="spine-line" style={{
              position: 'absolute',
              left: '50%',
              top: '20px',
              bottom: '20px',
              width: '2px',
              transform: 'translateX(-50%)',
              background: `linear-gradient(to bottom, ${NAVY}33, ${BLUE}66, ${NAVY}33)`,
              zIndex: 0
            }} />

              {how_it_works.steps.map((step, idx) => {
              const Icon = STEP_ICONS[idx];
              const isEven = idx % 2 === 0;
              return <motion.div key={step.id} initial={{
                opacity: 0,
                x: isEven ? -40 : 40
              }} whileInView={{
                opacity: 1,
                x: 0
              }} viewport={{
                once: true,
                margin: '-60px'
              }} transition={{
                duration: 0.55,
                delay: 0.05,
                ease: 'easeOut' as const
              }} className="step-row" style={{
                display: 'grid',
                gridTemplateColumns: '1fr 56px 1fr',
                alignItems: 'center',
                gap: '0 1.5rem',
                marginBottom: '2rem',
                position: 'relative'
              }}>
                    {/* Left slot */}
                    <div style={{
                  gridColumn: 1,
                  gridRow: 1
                }}>
                      {isEven && <div style={{
                    padding: '2rem',
                    background: LIGHT,
                    borderRadius: '1rem',
                    border: `1px solid #D1DCF0`
                  }}>
                          <span style={{
                      display: 'block',
                      fontSize: '3.5rem',
                      fontWeight: 900,
                      color: ACCENT,
                      lineHeight: 1,
                      marginBottom: '0.75rem',
                      opacity: 0.9
                    }}>
                            {step.number}
                          </span>
                          <div style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '48px',
                      height: '48px',
                      borderRadius: '0.625rem',
                      background: `linear-gradient(135deg, ${NAVY} 0%, ${BLUE} 100%)`,
                      marginBottom: '1rem'
                    }}>
                            <Icon size={22} color="#fff" strokeWidth={1.75} />
                          </div>
                          <h3 style={{
                      fontSize: '1.1875rem',
                      fontWeight: 700,
                      color: NAVY,
                      marginBottom: '0.5rem'
                    }}>
                            {step.title}
                          </h3>
                          <p style={{
                      color: '#4A5568',
                      lineHeight: 1.7,
                      fontSize: '0.9375rem'
                    }}>
                            {step.description}
                          </p>
                        </div>}
                    </div>

                    {/* Centre dot */}
                    <div style={{
                  gridColumn: 2,
                  gridRow: 1,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  zIndex: 1
                }}>
                      <div style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    background: `linear-gradient(135deg, ${NAVY} 0%, ${BLUE} 100%)`,
                    border: `3px solid ${ACCENT}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    fontWeight: 800,
                    fontSize: '0.75rem',
                    boxShadow: `0 0 0 4px ${ACCENT}22`
                  }}>
                        {step.number}
                      </div>
                    </div>

                    {/* Right slot */}
                    <div style={{
                  gridColumn: 3,
                  gridRow: 1
                }}>
                      {!isEven && <div style={{
                    padding: '2rem',
                    background: LIGHT,
                    borderRadius: '1rem',
                    border: `1px solid #D1DCF0`
                  }}>
                          <span style={{
                      display: 'block',
                      fontSize: '3.5rem',
                      fontWeight: 900,
                      color: ACCENT,
                      lineHeight: 1,
                      marginBottom: '0.75rem',
                      opacity: 0.9
                    }}>
                            {step.number}
                          </span>
                          <div style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '48px',
                      height: '48px',
                      borderRadius: '0.625rem',
                      background: `linear-gradient(135deg, ${NAVY} 0%, ${BLUE} 100%)`,
                      marginBottom: '1rem'
                    }}>
                            <Icon size={22} color="#fff" strokeWidth={1.75} />
                          </div>
                          <h3 style={{
                      fontSize: '1.1875rem',
                      fontWeight: 700,
                      color: NAVY,
                      marginBottom: '0.5rem'
                    }}>
                            {step.title}
                          </h3>
                          <p style={{
                      color: '#4A5568',
                      lineHeight: 1.7,
                      fontSize: '0.9375rem'
                    }}>
                            {step.description}
                          </p>
                        </div>}
                    </div>
                  </motion.div>;
            })}
            </div>
          </div>
        </section>

        {/* ── 3. TIMELINE VISUAL ──────────────────────────────────────────── */}
        <section style={{
        background: LIGHT,
        padding: '5rem 1.5rem'
      }}>
          <div style={{
          maxWidth: '1100px',
          margin: '0 auto'
        }}>
            <div style={{
            textAlign: 'center',
            marginBottom: '3rem'
          }}>
              <h2 style={{
              fontSize: 'clamp(1.375rem, 3vw, 2rem)',
              fontWeight: 800,
              color: NAVY,
              marginBottom: '0.5rem'
            }}>
                Your Order's Journey at a Glance
              </h2>
              <p style={{
              color: '#64748B',
              fontSize: '0.9375rem'
            }}>
                From first contact to final delivery — seven clear milestones.
              </p>
            </div>

            {/* Desktop timeline */}
            <div className="timeline-desktop" style={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            position: 'relative',
            gap: '0.5rem'
          }}>
              {/* Connecting line */}
              <div aria-hidden style={{
              position: 'absolute',
              top: '20px',
              left: '40px',
              right: '40px',
              height: '3px',
              background: `linear-gradient(to right, ${NAVY}, ${BLUE})`,
              borderRadius: '2px',
              zIndex: 0
            }} />

              {how_it_works.steps.map((step, idx) => {
              const Icon = STEP_ICONS[idx];
              return <motion.div key={step.id} initial={{
                opacity: 0,
                y: 20
              }} whileInView={{
                opacity: 1,
                y: 0
              }} viewport={{
                once: true
              }} transition={{
                duration: 0.45,
                delay: idx * 0.08,
                ease: 'easeOut' as const
              }} style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                flex: '1 1 0',
                position: 'relative',
                zIndex: 1
              }}>
                    <div style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  background: ACCENT,
                  border: `3px solid #fff`,
                  boxShadow: `0 0 0 3px ${ACCENT}55`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  fontWeight: 800,
                  fontSize: '0.8125rem',
                  marginBottom: '0.875rem',
                  flexShrink: 0
                }}>
                      {step.number}
                    </div>
                    <div style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '0.5rem',
                  background: `linear-gradient(135deg, ${NAVY} 0%, ${BLUE} 100%)`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '0.625rem'
                }}>
                      <Icon size={17} color="#fff" strokeWidth={1.75} />
                    </div>
                    <span style={{
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  color: NAVY,
                  textAlign: 'center',
                  lineHeight: 1.3,
                  maxWidth: '80px'
                }}>
                      {step.title}
                    </span>
                  </motion.div>;
            })}
            </div>

            {/* Mobile timeline (vertical) */}
            <div className="timeline-mobile" style={{
            display: 'none',
            flexDirection: 'column',
            gap: 0
          }}>
              {how_it_works.steps.map((step, idx) => {
              const Icon = STEP_ICONS[idx];
              return <div key={step.id} style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '1rem',
                position: 'relative',
                paddingBottom: idx < how_it_works.steps.length - 1 ? '1.5rem' : '0'
              }}>
                    {idx < how_it_works.steps.length - 1 && <div aria-hidden style={{
                  position: 'absolute',
                  left: '20px',
                  top: '42px',
                  bottom: 0,
                  width: '2px',
                  background: `linear-gradient(to bottom, ${ACCENT}88, ${BLUE}44)`,
                  borderRadius: '2px'
                }} />}
                    <div style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  background: ACCENT,
                  border: `3px solid #fff`,
                  boxShadow: `0 0 0 3px ${ACCENT}44`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  fontWeight: 800,
                  fontSize: '0.8125rem',
                  flexShrink: 0,
                  zIndex: 1
                }}>
                      {step.number}
                    </div>
                    <div style={{
                  paddingTop: '0.5rem'
                }}>
                      <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    marginBottom: '0.25rem'
                  }}>
                        <div style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '0.375rem',
                      background: `linear-gradient(135deg, ${NAVY} 0%, ${BLUE} 100%)`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                          <Icon size={14} color="#fff" strokeWidth={1.75} />
                        </div>
                        <span style={{
                      fontWeight: 700,
                      color: NAVY,
                      fontSize: '0.9375rem'
                    }}>
                          {step.title}
                        </span>
                      </div>
                    </div>
                  </div>;
            })}
            </div>
          </div>
        </section>

        {/* ── 4. FAQ STRIP ────────────────────────────────────────────────── */}
        <section style={{
        background: '#fff',
        padding: '5rem 1.5rem'
      }}>
          <div style={{
          maxWidth: '760px',
          margin: '0 auto'
        }}>
            <div style={{
            textAlign: 'center',
            marginBottom: '2.75rem'
          }}>
              <h2 style={{
              fontSize: 'clamp(1.375rem, 3vw, 2rem)',
              fontWeight: 800,
              color: NAVY,
              marginBottom: '0.5rem'
            }}>
                Frequently Asked Questions
              </h2>
              <p style={{
              color: '#64748B',
              fontSize: '0.9375rem'
            }}>
                Quick answers to common questions about our fulfillment process.
              </p>
            </div>

            <div>
              {how_it_works.FAQS.map((faq, faqIdx) => <div key={faq.id} style={{
              borderBottom: `1px solid #D1DCF0`,
              paddingBottom: '1.25rem',
              marginBottom: '1.25rem'
            }}>
                  <button onClick={() => setOpenFaq(openFaq === faqIdx ? null : faqIdx)} style={{
                display: 'flex',
                width: '100%',
                alignItems: 'center',
                justifyContent: 'space-between',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
                textAlign: 'left',
                gap: '1rem'
              }} aria-expanded={openFaq === faqIdx}>
                    <span style={{
                  fontWeight: 600,
                  fontSize: '1.0625rem',
                  color: NAVY
                }}>
                      {faq.q}
                    </span>
                    <span style={{
                  flexShrink: 0,
                  color: ACCENT,
                  display: 'flex',
                  transition: 'transform 0.25s',
                  transform: openFaq === faqIdx ? 'rotate(180deg)' : 'rotate(0deg)'
                }}>
                      <ChevronDown size={20} />
                    </span>
                  </button>
                  {openFaq === faqIdx && <motion.p initial={{
                opacity: 0,
                y: -6
              }} animate={{
                opacity: 1,
                y: 0
              }} transition={{
                duration: 0.22,
                ease: 'easeOut' as const
              }} style={{
                marginTop: '0.75rem',
                color: '#4A5568',
                lineHeight: 1.7,
                fontSize: '0.9375rem'
              }}>
                      {faq.a}
                    </motion.p>}
                </div>)}
            </div>
          </div>
        </section>

        {/* ── 5. CTA ──────────────────────────────────────────────────────── */}
        <section style={{
        background: LIGHT,
        padding: '4rem 1.5rem'
      }}>
          <div style={{
          maxWidth: '860px',
          margin: '0 auto'
        }}>
            <motion.div initial={{
            opacity: 0,
            y: 24
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.55,
            ease: 'easeOut' as const
          }} style={{
            background: `linear-gradient(135deg, ${NAVY} 0%, ${BLUE} 100%)`,
            borderRadius: '1.25rem',
            padding: 'clamp(2.5rem, 5vw, 4rem) clamp(2rem, 5vw, 4rem)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden'
          }}>
              <div aria-hidden style={{
              position: 'absolute',
              top: '-60px',
              right: '-60px',
              width: '280px',
              height: '280px',
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.05)',
              pointerEvents: 'none'
            }} />
              <div aria-hidden style={{
              position: 'absolute',
              bottom: '-40px',
              left: '-40px',
              width: '200px',
              height: '200px',
              borderRadius: '50%',
              background: 'rgba(14,165,233,0.08)',
              pointerEvents: 'none'
            }} />

              <span style={{
              display: 'inline-block',
              background: `rgba(14,165,233,0.18)`,
              color: ACCENT,
              border: `1px solid rgba(14,165,233,0.35)`,
              borderRadius: '999px',
              padding: '0.25rem 0.875rem',
              fontSize: '0.75rem',
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              marginBottom: '1.25rem',
              position: 'relative'
            }}>
                Ready to Begin?
              </span>

              <h2 style={{
              fontSize: 'clamp(1.625rem, 4vw, 2.5rem)',
              fontWeight: 800,
              color: '#fff',
              lineHeight: 1.2,
              marginBottom: '1rem',
              maxWidth: '560px',
              position: 'relative'
            }}>
                Start Your Fulfillment Journey
              </h2>

              <p style={{
              color: 'rgba(255,255,255,0.7)',
              fontSize: '1.0625rem',
              lineHeight: 1.65,
              maxWidth: '480px',
              marginBottom: '2rem',
              position: 'relative'
            }}>
                {how_it_works.ctaText}
              </p>

              <Link to="/contact" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: ACCENT,
              color: '#fff',
              fontWeight: 700,
              fontSize: '1rem',
              padding: '0.875rem 2rem',
              borderRadius: '0.625rem',
              textDecoration: 'none',
              position: 'relative',
              boxShadow: `0 4px 20px rgba(14,165,233,0.45)`,
              transition: 'transform 0.18s ease, box-shadow 0.18s ease'
            }} onMouseEnter={e => {
              (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-2px)';
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = `0 8px 28px rgba(14,165,233,0.55)`;
            }} onMouseLeave={e => {
              (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)';
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = `0 4px 20px rgba(14,165,233,0.45)`;
            }}>
                Get in Touch
                <ArrowRight size={18} strokeWidth={2.25} />
              </Link>
            </motion.div>
          </div>
        </section>

      </main>

      {/* ── Responsive overrides ─────────────────────────────────────────── */}
      <style>{`
        @media (max-width: 768px) {
          .step-row {
            display: flex !important;
            flex-direction: column !important;
            gap: 0.75rem !important;
          }
          .spine-line { display: none !important; }
          .timeline-desktop { display: none !important; }
          .timeline-mobile  { display: flex !important; }
        }
      `}</style>
    </>;
}
