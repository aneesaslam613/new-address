import { services } from 'virtual:content';
import { Helmet } from '@dr.pogodin/react-helmet';
import { Link } from "react-router";
import { motion } from 'motion/react';
import { Globe, Truck, BarChart3, Package, ClipboardList, ArrowRight, CheckCircle2, Building2, Users, FileCheck, ChevronRight } from 'lucide-react';

// ─── Design tokens ───────────────────────────────────────────────────────────

// ─── Design tokens ───────────────────────────────────────────────────────────
const NAVY = '#0A2540';
const BLUE = '#1A56DB';
const ACCENT = '#0EA5E9';
const LIGHT = '#F1F5F9';

// ─── SEO ─────────────────────────────────────────────────────────────────────
const site = 'https://arseenenterprises.com';
const url = `${site}/services`;
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${url}#webpage`,
  name: 'Services — Arseen Enterprises LLC',
  url,
  isPartOf: {
    '@id': `${site}/#website`
  },
  about: {
    '@id': `${site}/#organization`
  }
};

// ─── Per-service icon map ─────────────────────────────────────────────────────
const SERVICE_ICONS = [Package, ClipboardList, FileCheck, Truck, Globe, BarChart3];

// ─── Process steps ────────────────────────────────────────────────────────────
const PROCESS_STEPS = [{
  number: '01',
  title: 'Submit Requirements',
  description: 'Provide your product specifications, quantity, destination and fulfillment requirements.'
}, {
  number: '02',
  title: 'Receive a Quotation',
  description: 'We review availability and provide a written quotation covering order and shipping details.'
}, {
  number: '03',
  title: 'Approve, Pay & Receive',
  description: 'Approve the quotation, pay Arseen Enterprises LLC, and we coordinate procurement, preparation and delivery.'
}];

// ─── Trust signal icon map (parallel to services.TRUST_SIGNALS order) ─────────
const TRUST_ICONS = [Building2, Users, Globe, FileCheck];

// ─── Animation variants ───────────────────────────────────────────────────────
const fadeUp = {
  hidden: {
    opacity: 0,
    y: 28
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      delay: i * 0.08,
      ease: 'easeOut' as const
    }
  })
};
const fadeIn = {
  hidden: {
    opacity: 0,
    y: 16
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut' as const
    }
  }
};

// ─── Component ────────────────────────────────────────────────────────────────
export default function ServicesPage() {
  return <>
      <Helmet>
        <title>Services — Arseen Enterprises LLC</title>
        <meta name="description" content="Arseen Enterprises LLC provides custom product procurement, order fulfillment, inspection coordination, packaging, international shipment coordination, and tracking support." />
        
        <link rel="canonical" href={url} />
        <meta property="og:title" content="Services — Arseen Enterprises LLC" />
        <meta property="og:description" content="Custom product procurement and international order fulfillment for businesses and individual consumers." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={`${site}/og-image.svg`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Services — Arseen Enterprises LLC" />
        <meta name="twitter:description" content="Custom product procurement and international order fulfillment for businesses and individual consumers." />
        <meta name="twitter:image" content={`${site}/og-image.svg`} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <main>
        {/* ── 1. HERO ─────────────────────────────────────────────────────── */}
        <section style={{
        background: `linear-gradient(135deg, ${NAVY} 0%, #0a3d6b 60%, #0d4f8a 100%)`,
        position: 'relative',
        overflow: 'hidden'
      }}>
          
          {/* Decorative circles */}
          <div aria-hidden style={{
          position: 'absolute',
          top: '-80px',
          right: '-80px',
          width: '420px',
          height: '420px',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${BLUE}33 0%, transparent 70%)`,
          pointerEvents: 'none'
        }} />
          
          <div aria-hidden style={{
          position: 'absolute',
          bottom: '-60px',
          left: '10%',
          width: '280px',
          height: '280px',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${ACCENT}22 0%, transparent 70%)`,
          pointerEvents: 'none'
        }} />
          

          <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '72px 24px 80px'
        }}>
            {/* Breadcrumb */}
            <motion.nav initial="hidden" animate="visible" variants={fadeIn} aria-label="Breadcrumb" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            marginBottom: '28px'
          }}>
              
              <Link to="/" style={{
              color: 'rgba(255,255,255,0.6)',
              fontSize: '13px',
              textDecoration: 'none',
              transition: 'color 0.2s'
            }} onMouseEnter={e => e.currentTarget.style.color = 'rgba(255,255,255,0.9)'} onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}>
                
                Home
              </Link>
              <ChevronRight size={13} style={{
              color: 'rgba(255,255,255,0.4)'
            }} />
              <span style={{
              color: 'rgba(255,255,255,0.9)',
              fontSize: '13px'
            }}>Services</span>
            </motion.nav>

            {/* Eyebrow */}
            <motion.div initial="hidden" animate="visible" variants={{
            ...fadeIn,
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.5,
                delay: 0.05,
                ease: 'easeOut' as const
              }
            }
          }} style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            marginBottom: '18px'
          }}>
              
              <span style={{
              display: 'inline-block',
              background: `${ACCENT}22`,
              border: `1px solid ${ACCENT}55`,
              color: ACCENT,
              fontSize: '12px',
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              padding: '4px 14px',
              borderRadius: '999px'
            }}>
                
                What We Offer
              </span>
            </motion.div>

            {/* H1 */}
            <motion.h1 initial={{
            opacity: 0,
            y: 24
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.1,
            ease: 'easeOut' as const
          }} style={{
            fontSize: 'clamp(2.4rem, 5vw, 3.6rem)',
            fontWeight: 800,
            color: '#ffffff',
            lineHeight: 1.1,
            marginBottom: '20px',
            letterSpacing: '-0.02em'
          }}>
              
              Our Services
            </motion.h1>

            {/* Subtitle */}
            <motion.p initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.18,
            ease: 'easeOut' as const
          }} style={{
            fontSize: '1.15rem',
            color: 'rgba(255,255,255,0.72)',
            maxWidth: '560px',
            lineHeight: 1.7
          }}>Custom product procurement and international order fulfillment for business clients (B2B) and individual consumers (B2C) — coordinated from requirements to delivery.



            </motion.p>

            {/* Stat pills */}
            <motion.div initial={{
            opacity: 0,
            y: 16
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.55,
            delay: 0.28,
            ease: 'easeOut' as const
          }} style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '12px',
            marginTop: '36px'
          }}>
              
              {['6 Core Services', 'International Shipment', 'Written Quotations'].map(pill => <span key={pill} style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.15)',
              color: 'rgba(255,255,255,0.85)',
              fontSize: '13px',
              fontWeight: 500,
              padding: '6px 16px',
              borderRadius: '999px'
            }}>
                
                  <CheckCircle2 size={13} style={{
                color: ACCENT
              }} />
                  {pill}
                </span>)}
            </motion.div>
          </div>
        </section>

        {/* ── 2. SERVICES GRID ─────────────────────────────────────────────── */}
        <section style={{
        background: '#ffffff',
        padding: '96px 24px'
      }}>
          <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
            {/* Section header */}
            <motion.div initial="hidden" whileInView="visible" viewport={{
            once: true,
            margin: '-60px'
          }} variants={fadeIn} style={{
            textAlign: 'center',
            marginBottom: '56px'
          }}>
              
              <span style={{
              display: 'inline-block',
              color: BLUE,
              fontSize: '12px',
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              marginBottom: '12px'
            }}>
                
                What We Do
              </span>
              <h2 style={{
              fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)',
              fontWeight: 800,
              color: NAVY,
              letterSpacing: '-0.02em',
              lineHeight: 1.15,
              marginBottom: '16px'
            }}>
                
                Comprehensive Fulfillment Solutions
              </h2>
              <p style={{
              color: '#64748b',
              fontSize: '1.05rem',
              maxWidth: '520px',
              margin: '0 auto',
              lineHeight: 1.7
            }}>
                Every service is designed to reduce friction, increase visibility, and help your
                business scale without operational bottlenecks.
              </p>
            </motion.div>

            {/* Grid */}
            <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '24px'
          }}>
              
              {services.services.map((service, i) => {
              const Icon = SERVICE_ICONS[i] ?? Package;
              return <motion.div key={service.id ?? service.title} initial="hidden" whileInView="visible" viewport={{
                once: true,
                margin: '-40px'
              }} custom={i} variants={fadeUp} style={{
                background: '#ffffff',
                borderRadius: '16px',
                border: '1px solid #f1f5f9',
                boxShadow: '0 1px 6px rgba(5,45,90,0.06)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                transition: 'box-shadow 0.22s ease, transform 0.22s ease',
                cursor: 'default'
              }} whileHover={{
                y: -4,
                boxShadow: '0 16px 40px rgba(5,45,90,0.13)',
                transition: {
                  duration: 0.22,
                  ease: 'easeOut' as const
                }
              }}>
                    
                    {/* Gradient accent bar */}
                    <div style={{
                  height: '4px',
                  background: `linear-gradient(90deg, ${ACCENT}, ${BLUE})`
                }} />
                    
                    <div style={{
                  padding: '28px 28px 24px',
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column'
                }}>
                      {/* Icon */}
                      <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    background: LIGHT,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '20px',
                    flexShrink: 0
                  }}>
                        
                        <Icon size={22} style={{
                      color: NAVY
                    }} />
                      </div>
                      {/* Title */}
                      <h3 style={{
                    fontSize: '1.05rem',
                    fontWeight: 700,
                    color: NAVY,
                    marginBottom: '10px',
                    lineHeight: 1.3
                  }}>
                        
                        {service.title}
                      </h3>
                      {/* Description */}
                      <p style={{
                    color: '#64748b',
                    fontSize: '0.9rem',
                    lineHeight: 1.7,
                    flex: 1,
                    marginBottom: '20px'
                  }}>
                        
                        {service.description}
                      </p>
                      {/* Learn More */}
                      <Link to="/contact" style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                    color: BLUE,
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    textDecoration: 'none'
                  }}>
                        
                        Learn More <ArrowRight size={13} />
                      </Link>
                    </div>
                  </motion.div>;
            })}
            </div>
          </div>
        </section>

        {/* ── 3. PROCESS SNAPSHOT ──────────────────────────────────────────── */}
        <section style={{
        background: LIGHT,
        padding: '88px 24px'
      }}>
          <div style={{
          maxWidth: '1100px',
          margin: '0 auto'
        }}>
            <motion.div initial="hidden" whileInView="visible" viewport={{
            once: true,
            margin: '-60px'
          }} variants={fadeIn} style={{
            textAlign: 'center',
            marginBottom: '56px'
          }}>
              
              <span style={{
              display: 'inline-block',
              color: BLUE,
              fontSize: '12px',
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              marginBottom: '12px'
            }}>
                
                How It Works
              </span>
              <h2 style={{
              fontSize: 'clamp(1.7rem, 3vw, 2.4rem)',
              fontWeight: 800,
              color: NAVY,
              letterSpacing: '-0.02em'
            }}>
                
                Simple. Reliable. Scalable.
              </h2>
            </motion.div>

            {/* Steps row */}
            <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'flex-start',
            justifyContent: 'center',
            gap: '0'
          }}>
              
              {PROCESS_STEPS.map((step, i) => <div key={step.number} style={{
              display: 'flex',
              alignItems: 'flex-start',
              flexWrap: 'wrap'
            }}>
                
                  <motion.div initial="hidden" whileInView="visible" viewport={{
                once: true,
                margin: '-40px'
              }} custom={i} variants={fadeUp} style={{
                background: '#ffffff',
                borderRadius: '20px',
                padding: '36px 32px',
                width: '260px',
                boxShadow: '0 2px 16px rgba(5,45,90,0.07)',
                textAlign: 'center',
                position: 'relative'
              }}>
                  
                    {/* Numbered badge */}
                    <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  background: ACCENT,
                  color: '#ffffff',
                  fontWeight: 800,
                  fontSize: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px',
                  boxShadow: `0 4px 14px ${ACCENT}55`
                }}>
                    
                      {step.number}
                    </div>
                    <h3 style={{
                  fontSize: '1.05rem',
                  fontWeight: 700,
                  color: NAVY,
                  marginBottom: '10px'
                }}>
                    
                      {step.title}
                    </h3>
                    <p style={{
                  color: '#64748b',
                  fontSize: '0.9rem',
                  lineHeight: 1.65
                }}>
                      {step.description}
                    </p>
                  </motion.div>

                  {/* Arrow connector */}
                  {i < PROCESS_STEPS.length - 1 && <div aria-hidden style={{
                display: 'flex',
                alignItems: 'center',
                padding: '0 12px',
                marginTop: '60px',
                color: BLUE,
                opacity: 0.45
              }}>
                  
                      <ArrowRight size={28} strokeWidth={1.8} />
                    </div>}
                </div>)}
            </div>
          </div>
        </section>

        {/* ── 4. TRUST SIGNALS BAR ─────────────────────────────────────────── */}
        <section style={{
        background: '#ffffff',
        padding: '72px 24px',
        borderTop: '1px solid #e8edf5',
        borderBottom: '1px solid #e8edf5'
      }}>
          <div style={{
          maxWidth: '1100px',
          margin: '0 auto'
        }}>
            <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '32px'
          }}>
              
              {services.TRUST_SIGNALS.map((signal, i) => {
              const Icon = TRUST_ICONS[i] ?? Building2;
              return <motion.div key={signal.label} initial="hidden" whileInView="visible" viewport={{
                once: true,
                margin: '-40px'
              }} custom={i} variants={fadeUp} style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                gap: '12px'
              }}>
                    
                    <div style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '14px',
                  background: LIGHT,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                      
                      <Icon size={22} style={{
                    color: NAVY
                  }} />
                    </div>
                    <div>
                      <div style={{
                    fontWeight: 700,
                    color: NAVY,
                    fontSize: '0.95rem',
                    marginBottom: '4px'
                  }}>
                        {signal.label}
                      </div>
                      <div style={{
                    color: '#64748b',
                    fontSize: '0.82rem'
                  }}>{signal.sub}</div>
                    </div>
                  </motion.div>;
            })}
            </div>
          </div>
        </section>

        {/* ── 5. CTA ───────────────────────────────────────────────────────── */}
        <section style={{
        background: LIGHT,
        padding: '96px 24px'
      }}>
          <div style={{
          maxWidth: '860px',
          margin: '0 auto'
        }}>
            <motion.div initial="hidden" whileInView="visible" viewport={{
            once: true,
            margin: '-60px'
          }} variants={fadeIn} style={{
            background: `linear-gradient(135deg, ${NAVY} 0%, #0a3d6b 55%, #0d4f8a 100%)`,
            borderRadius: '28px',
            padding: 'clamp(40px, 6vw, 72px) clamp(28px, 6vw, 72px)',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden'
          }}>
              
              {/* Decorative glow */}
              <div aria-hidden style={{
              position: 'absolute',
              top: '-60px',
              right: '-60px',
              width: '300px',
              height: '300px',
              borderRadius: '50%',
              background: `radial-gradient(circle, ${BLUE}44 0%, transparent 70%)`,
              pointerEvents: 'none'
            }} />
              
              <div aria-hidden style={{
              position: 'absolute',
              bottom: '-40px',
              left: '5%',
              width: '200px',
              height: '200px',
              borderRadius: '50%',
              background: `radial-gradient(circle, ${ACCENT}22 0%, transparent 70%)`,
              pointerEvents: 'none'
            }} />
              

              <span style={{
              display: 'inline-block',
              background: `${ACCENT}22`,
              border: `1px solid ${ACCENT}55`,
              color: ACCENT,
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              padding: '4px 14px',
              borderRadius: '999px',
              marginBottom: '20px'
            }}>
                
                Get Started Today
              </span>

              <h2 style={{
              fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
              fontWeight: 800,
              color: '#ffffff',
              letterSpacing: '-0.02em',
              lineHeight: 1.15,
              marginBottom: '16px'
            }}>
                
                Ready to Get Started?
              </h2>

              <p style={{
              color: 'rgba(255,255,255,0.72)',
              fontSize: '1.05rem',
              maxWidth: '480px',
              margin: '0 auto 36px',
              lineHeight: 1.7
            }}>
                
                Tell us about your requirements and our team will review them and prepare a tailored
                procurement, fulfillment, and shipment-coordination quotation.
              </p>

              <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '14px',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
                
                <Link to="/contact" style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: ACCENT,
                color: '#ffffff',
                fontWeight: 700,
                fontSize: '0.95rem',
                padding: '14px 30px',
                borderRadius: '10px',
                textDecoration: 'none',
                boxShadow: `0 4px 20px ${ACCENT}55`,
                transition: 'transform 0.18s ease, box-shadow 0.18s ease'
              }} onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = `0 8px 28px ${ACCENT}77`;
              }} onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = `0 4px 20px ${ACCENT}55`;
              }}>
                  
                  Contact Our Team <ArrowRight size={16} />
                </Link>

                <Link to="/how-it-works" style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                color: 'rgba(255,255,255,0.8)',
                fontWeight: 600,
                fontSize: '0.95rem',
                textDecoration: 'none',
                padding: '14px 20px',
                borderRadius: '10px',
                border: '1px solid rgba(255,255,255,0.2)',
                transition: 'color 0.18s ease, border-color 0.18s ease'
              }} onMouseEnter={e => {
                e.currentTarget.style.color = '#ffffff';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.45)';
              }} onMouseLeave={e => {
                e.currentTarget.style.color = 'rgba(255,255,255,0.8)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
              }}>
                  
                  View How It Works <ChevronRight size={15} />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>;
}
