import { about } from 'virtual:content';
import { Helmet } from '@dr.pogodin/react-helmet';
import { Link } from "react-router";
import { motion } from 'motion/react';
import { CheckCircle2, ShieldCheck, Eye, Globe, ChevronRight, ArrowRight, Building2, MapPin, BadgeCheck, Package } from 'lucide-react';

// ─── Design tokens ────────────────────────────────────────────────────────────
const NAVY = '#0A2540';
const BLUE = '#1A56DB';
const ACCENT = '#0EA5E9';
const LIGHT = '#F1F5F9';

// ─── SEO / JSON-LD ────────────────────────────────────────────────────────────
const site = 'https://arseenenterprises.com';
const url = `${site}/about`;
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  '@id': `${url}#webpage`,
  name: 'About Arseen Enterprises LLC',
  url,
  isPartOf: {
    '@id': `${site}/#website`
  },
  about: {
    '@id': `${site}/#organization`
  }
};

// ─── Animation helpers ────────────────────────────────────────────────────────
const fadeUp = (delay = 0) => ({
  initial: {
    opacity: 0,
    y: 28
  },
  whileInView: {
    opacity: 1,
    y: 0
  },
  viewport: {
    once: true,
    margin: '-60px'
  },
  transition: {
    duration: 0.55,
    delay,
    ease: 'easeOut' as const
  }
});
const fadeIn = (delay = 0) => ({
  initial: {
    opacity: 0
  },
  whileInView: {
    opacity: 1
  },
  viewport: {
    once: true,
    margin: '-60px'
  },
  transition: {
    duration: 0.5,
    delay,
    ease: 'easeOut' as const
  }
});

// ─── Static content ───────────────────────────────────────────────────────────
const WHY_CARDS = [{
  icon: ShieldCheck,
  title: 'Regulatory Compliance',
  body: 'We operate under a formally registered Wyoming LLC structure, maintaining full legal and financial transparency. Procurement and fulfillment activities are conducted subject to applicable U.S. and international legal, sanctions, customs, export-control, carrier, and destination requirements.'
}, {
  icon: Eye,
  title: 'Operational Transparency',
  body: 'Customers receive written quotations before payment, clear order documentation, and honest communication at every stage. We believe trust is built through consistent, verifiable action — not promises.'
}, {
  icon: Globe,
  title: 'International Reach',
  body: 'We coordinate procurement and fulfillment across international sourcing and logistics networks, helping business clients (B2B) and individual consumers (B2C) receive their orders worldwide.'
}];
const INFO_ROWS = [{
  icon: Building2,
  label: 'Entity Type',
  value: 'Limited Liability Company (LLC)'
}, {
  icon: MapPin,
  label: 'State',
  value: 'Wyoming, United States'
}, {
  icon: BadgeCheck,
  label: 'Registration',
  value: 'Active — Good Standing'
}, {
  icon: Package,
  label: 'Services',
  value: 'Product Procurement & Order Fulfillment'
}];

// ─── Component ────────────────────────────────────────────────────────────────
export default function AboutPage() {
  return <>
      <Helmet>
        <title>About Us — Arseen Enterprises LLC</title>
        <meta name="description" content="Arseen Enterprises LLC is a Wyoming-registered company providing custom product procurement and international order fulfillment services for business clients (B2B) and individual consumers (B2C)." />
        
        <link rel="canonical" href={url} />
        <meta property="og:title" content="About Arseen Enterprises LLC" />
        <meta property="og:description" content="Wyoming-registered custom product procurement and international order fulfillment." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={`${site}/og-image.svg`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Arseen Enterprises LLC" />
        <meta name="twitter:description" content="Wyoming-registered custom product procurement and international order fulfillment." />
        <meta name="twitter:image" content={`${site}/og-image.svg`} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <main style={{
      fontFamily: 'inherit'
    }}>

        {/* ── 1. HERO ─────────────────────────────────────────────────────── */}
        <section style={{
        background: `linear-gradient(135deg, ${NAVY} 0%, #0a3d7a 100%)`,
        padding: '80px 0 72px',
        position: 'relative',
        overflow: 'hidden'
      }}>
          
          {/* decorative circles */}
          <div style={{
          position: 'absolute',
          top: -80,
          right: -80,
          width: 360,
          height: 360,
          borderRadius: '50%',
          background: `${BLUE}22`,
          pointerEvents: 'none'
        }} />
          <div style={{
          position: 'absolute',
          bottom: -60,
          left: '40%',
          width: 240,
          height: 240,
          borderRadius: '50%',
          background: `${ACCENT}18`,
          pointerEvents: 'none'
        }} />

          <div style={{
          maxWidth: 1100,
          margin: '0 auto',
          padding: '0 24px',
          position: 'relative'
        }}>
            {/* Breadcrumb */}
            <motion.nav {...fadeIn(0)} aria-label="Breadcrumb" style={{
            marginBottom: 28
          }}>
              <ol style={{
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              listStyle: 'none',
              margin: 0,
              padding: 0
            }}>
                <li>
                  <Link to="/" style={{
                  color: 'rgba(255,255,255,0.6)',
                  fontSize: 13,
                  textDecoration: 'none'
                }}>
                    Home
                  </Link>
                </li>
                <li style={{
                display: 'flex',
                alignItems: 'center'
              }}>
                  <ChevronRight size={13} color="rgba(255,255,255,0.4)" />
                </li>
                <li style={{
                color: 'rgba(255,255,255,0.9)',
                fontSize: 13,
                fontWeight: 500
              }}>
                  About
                </li>
              </ol>
            </motion.nav>

            {/* Eyebrow pill */}
            <motion.div {...fadeUp(0.05)}>
              <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              background: `${ACCENT}22`,
              border: `1px solid ${ACCENT}55`,
              color: ACCENT,
              borderRadius: 999,
              padding: '5px 14px',
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              marginBottom: 20
            }}>
                Wyoming LLC · Est. 2026
              </span>
            </motion.div>

            {/* H1 */}
            <motion.h1 {...fadeUp(0.1)} style={{
            color: '#fff',
            fontSize: 'clamp(2rem, 4.5vw, 3.25rem)',
            fontWeight: 800,
            lineHeight: 1.15,
            margin: '0 0 20px',
            maxWidth: 720
          }}>
              About Arseen Enterprises LLC
            </motion.h1>

            {/* Subtitle */}
            <motion.p {...fadeUp(0.18)} style={{
            color: 'rgba(255,255,255,0.72)',
            fontSize: 'clamp(1rem, 2vw, 1.2rem)',
            lineHeight: 1.65,
            maxWidth: 580,
            margin: 0
          }}>Arseen Enterprises LLC is a Wyoming-registered company providing custom product procurement and international order fulfillment services for business clients (B2B) and individual consumers (B2C).

            </motion.p>
          </div>
        </section>

        {/* ── 2. COMPANY OVERVIEW ─────────────────────────────────────────── */}
        <section style={{
        background: '#fff',
        padding: '80px 0'
      }}>
          <div style={{
          maxWidth: 1100,
          margin: '0 auto',
          padding: '0 24px'
        }}>
            <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 56,
            alignItems: 'start'
          }}>
              {/* Left — rich text */}
              <motion.div {...fadeUp(0)}>
                <span style={{
                display: 'inline-block',
                background: `${LIGHT}`,
                color: BLUE,
                fontWeight: 700,
                fontSize: 11,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                padding: '4px 12px',
                borderRadius: 4,
                marginBottom: 18
              }}>
                  Who We Are
                </span>
                <h2 style={{
                color: NAVY,
                fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                fontWeight: 800,
                lineHeight: 1.25,
                margin: '0 0 24px'
              }}>
                  Custom Procurement & Order Fulfillment
                </h2>
                <p style={{
                color: '#374151',
                lineHeight: 1.75,
                marginBottom: 18,
                fontSize: 15.5
              }}>{about.description}</p>
                <p style={{
                color: '#374151',
                lineHeight: 1.75,
                marginBottom: 18,
                fontSize: 15.5
              }}>
                  {about.commercialRelationship.body}
                </p>
                <p style={{
                color: '#374151',
                lineHeight: 1.75,
                fontSize: 15.5
              }}>
                  {about.customOrderModel.body}
                </p>
              </motion.div>

              {/* Right — info card */}
              <motion.div {...fadeUp(0.12)}>
                <div style={{
                borderRadius: 12,
                overflow: 'hidden',
                boxShadow: '0 4px 32px rgba(5,45,90,0.13)',
                border: `1px solid ${LIGHT}`
              }}>
                  {/* Card header */}
                  <div style={{
                  background: NAVY,
                  padding: '20px 28px',
                  borderTop: `4px solid ${ACCENT}`
                }}>
                    <p style={{
                    color: 'rgba(255,255,255,0.55)',
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    margin: '0 0 4px'
                  }}>
                      Company Details
                    </p>
                    <p style={{
                    color: '#fff',
                    fontWeight: 700,
                    fontSize: 17,
                    margin: 0
                  }}>
                      Arseen Enterprises LLC
                    </p>
                  </div>
                  {/* Card body */}
                  <div style={{
                  background: '#fff',
                  padding: '8px 0'
                }}>
                    {INFO_ROWS.map(({
                    icon: Icon,
                    label,
                    value
                  }, i) => <div key={label} style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 16,
                    padding: '16px 28px',
                    borderBottom: i < INFO_ROWS.length - 1 ? `1px solid ${LIGHT}` : 'none'
                  }}>
                        <div style={{
                      width: 36,
                      height: 36,
                      borderRadius: 8,
                      background: LIGHT,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                          <Icon size={17} color={BLUE} />
                        </div>
                        <div>
                          <p style={{
                        color: '#6B7280',
                        fontSize: 11,
                        fontWeight: 600,
                        letterSpacing: '0.06em',
                        textTransform: 'uppercase',
                        margin: '0 0 2px'
                      }}>
                            {label}
                          </p>
                          <p style={{
                        color: NAVY,
                        fontWeight: 600,
                        fontSize: 14.5,
                        margin: 0
                      }}>
                            {value}
                          </p>
                        </div>
                      </div>)}
                  </div>
                  {/* Card footer accent */}
                  <div style={{
                  background: LIGHT,
                  padding: '14px 28px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8
                }}>
                    <BadgeCheck size={15} color={ACCENT} />
                    <span style={{
                    color: '#374151',
                    fontSize: 13,
                    fontWeight: 500
                  }}>
                      Verified active entity — Wyoming Secretary of State
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── 3. PROCUREMENT SCOPE & VALUES ─────────────────────────────── */}
        <section style={{
        background: LIGHT,
        padding: '80px 0'
      }}>
          <div style={{
          maxWidth: 1100,
          margin: '0 auto',
          padding: '0 24px'
        }}>
            <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 56,
            alignItems: 'start'
          }}>
              {/* Left — what we procure */}
              <motion.div {...fadeUp(0)}>
                <span style={{
                display: 'inline-block',
                background: ACCENT + '18',
                color: ACCENT,
                fontWeight: 700,
                fontSize: 11,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                padding: '4px 12px',
                borderRadius: 4,
                marginBottom: 18
              }}>Procurement Scope</span>
                <h2 style={{
                color: NAVY,
                fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                fontWeight: 800,
                lineHeight: 1.25,
                margin: '0 0 20px'
              }}>What We Procure</h2>
                <p style={{
                color: '#374151',
                fontSize: 15,
                lineHeight: 1.75,
                marginBottom: 16
              }}>We assist customers with procurement across general merchandise categories according to their specific requirements and applicable regulations. Examples may include:</p>
                <ul style={{
                listStyle: 'none',
                margin: '0 0 16px',
                padding: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: 8
              }}>
                  {['Consumer goods', 'Home & lifestyle products', 'Office & business supplies', 'Packaging materials', 'Promotional merchandise', 'Fashion & accessories where legally permitted', 'General merchandise', 'Custom sourcing requests'].map(item => <li key={item} style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 10
                }}>
                      <CheckCircle2 size={15} color={ACCENT} style={{
                    flexShrink: 0,
                    marginTop: 3
                  }} />
                      <span style={{
                    color: '#374151',
                    fontSize: 14.5,
                    lineHeight: 1.6
                  }}>{item}</span>
                    </li>)}
                </ul>
                <p style={{
                color: '#6B7280',
                fontSize: 13.5,
                fontStyle: 'italic',
                lineHeight: 1.6
              }}>Product sourcing is subject to supplier availability, destination-country requirements, applicable laws and our internal acceptance criteria.</p>
              </motion.div>
              {/* Right — values list */}
              <motion.div {...fadeUp(0.1)}>
                <span style={{
                display: 'inline-block',
                background: BLUE + '15',
                color: BLUE,
                fontWeight: 700,
                fontSize: 11,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                padding: '4px 12px',
                borderRadius: 4,
                marginBottom: 18
              }}>Core Values</span>
                <h3 style={{
                color: NAVY,
                fontSize: '1.35rem',
                fontWeight: 700,
                margin: '0 0 24px'
              }}>What We Stand For</h3>
                <ul style={{
                listStyle: 'none',
                margin: 0,
                padding: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: 16
              }}>
                  {about.values.map((value: string, i: number) => <motion.li key={i} initial={{
                  opacity: 0,
                  x: -16
                }} whileInView={{
                  opacity: 1,
                  x: 0
                }} viewport={{
                  once: true,
                  margin: '-40px'
                }} transition={{
                  duration: 0.45,
                  delay: i * 0.08,
                  ease: 'easeOut' as const
                }} style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 14,
                  background: '#fff',
                  borderRadius: 10,
                  padding: '14px 18px',
                  boxShadow: '0 1px 6px rgba(5,45,90,0.07)',
                  border: '1px solid rgba(5,45,90,0.07)'
                }}>
                      <CheckCircle2 size={20} color={ACCENT} style={{
                    flexShrink: 0,
                    marginTop: 1
                  }} />
                      <span style={{
                    color: '#1F2937',
                    fontSize: 14.5,
                    lineHeight: 1.6,
                    fontWeight: 500
                  }}>{value}</span>
                    </motion.li>)}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>
        {/* ── 4. WHY CHOOSE US ────────────────────────────────────────────── */}
        <section style={{
        background: '#fff',
        padding: '80px 0'
      }}>
          <div style={{
          maxWidth: 1100,
          margin: '0 auto',
          padding: '0 24px'
        }}>
            <motion.div {...fadeUp(0)} style={{
            textAlign: 'center',
            marginBottom: 52
          }}>
              <span style={{
              display: 'inline-block',
              background: LIGHT,
              color: BLUE,
              fontWeight: 700,
              fontSize: 11,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              padding: '4px 12px',
              borderRadius: 4,
              marginBottom: 14
            }}>
                Why Arseen
              </span>
              <h2 style={{
              color: NAVY,
              fontSize: 'clamp(1.5rem, 3vw, 2.1rem)',
              fontWeight: 800,
              lineHeight: 1.25,
              margin: '0 0 14px'
            }}>
                Why Choose Us
              </h2>
              <p style={{
              color: '#6B7280',
              fontSize: 15.5,
              maxWidth: 520,
              margin: '0 auto',
              lineHeight: 1.7
            }}>
                We focus on transparent customer relationships, accurate documentation, responsible procurement, and reliable international order fulfillment.
              </p>
            </motion.div>

            <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: 28
          }}>
              {WHY_CARDS.map(({
              icon: Icon,
              title,
              body
            }, i) => <motion.div key={title} {...fadeUp(i * 0.1)} style={{
              background: '#fff',
              border: `1px solid ${LIGHT}`,
              borderRadius: 14,
              padding: '32px 28px',
              boxShadow: '0 2px 20px rgba(5,45,90,0.07)',
              transition: 'box-shadow 0.2s'
            }}>
                
                  {/* Icon box */}
                  <div style={{
                width: 52,
                height: 52,
                borderRadius: 12,
                background: NAVY,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 22
              }}>
                    <Icon size={24} color="#fff" />
                  </div>
                  <h3 style={{
                color: NAVY,
                fontSize: '1.1rem',
                fontWeight: 700,
                margin: '0 0 12px'
              }}>
                    {title}
                  </h3>
                  <p style={{
                color: '#4B5563',
                fontSize: 14.5,
                lineHeight: 1.75,
                margin: 0
              }}>
                    {body}
                  </p>
                </motion.div>)}
            </div>
          </div>
        </section>

        {/* ── 5. CTA STRIP ────────────────────────────────────────────────── */}
        <section style={{
        background: `linear-gradient(135deg, ${NAVY} 0%, #0a3d7a 100%)`,
        padding: '64px 0',
        position: 'relative',
        overflow: 'hidden'
      }}>
          {/* decorative blob */}
          <div style={{
          position: 'absolute',
          top: -40,
          right: '10%',
          width: 280,
          height: 280,
          borderRadius: '50%',
          background: `${ACCENT}14`,
          pointerEvents: 'none'
        }} />

          <div style={{
          maxWidth: 1100,
          margin: '0 auto',
          padding: '0 24px',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 28,
          position: 'relative'
        }}>
            <motion.div {...fadeUp(0)}>
              <h2 style={{
              color: '#fff',
              fontSize: 'clamp(1.4rem, 3vw, 2rem)',
              fontWeight: 800,
              margin: '0 0 8px'
            }}>
                Ready to Work With Us?
              </h2>
              <p style={{
              color: 'rgba(255,255,255,0.65)',
              fontSize: 15.5,
              margin: 0
            }}>
                Let's discuss how Arseen Enterprises can support your fulfillment needs.
              </p>
            </motion.div>

            <motion.div {...fadeUp(0.1)}>
              <Link to="/contact" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              background: ACCENT,
              color: '#fff',
              fontWeight: 700,
              fontSize: 15,
              padding: '14px 28px',
              borderRadius: 8,
              textDecoration: 'none',
              boxShadow: `0 4px 20px ${ACCENT}55`,
              transition: 'opacity 0.2s',
              whiteSpace: 'nowrap'
            }}>
                
                Contact Us <ArrowRight size={17} />
              </Link>
            </motion.div>
          </div>
        </section>

      </main>
    </>;
}
