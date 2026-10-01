import { Helmet } from '@dr.pogodin/react-helmet';
import { Link } from "react-router";
import { useRef } from 'react';
import { ArrowRight, CheckCircle, Globe, Package, Truck, BarChart3, RefreshCw, ClipboardList, ShieldCheck, Zap, HeadphonesIcon } from 'lucide-react';
import { motion, useInView } from 'motion/react';
import { home } from 'virtual:content';
import HeroParticles from '@/components/HeroParticles';
import HeroGlobe from '@/components/HeroGlobe';
import MarqueeTicker from '@/components/MarqueeTicker';
const serviceIcons = [Globe, Truck, BarChart3, Package, ClipboardList, RefreshCw];
const NAVY = '#0A2540';
const BLUE = '#1A56DB';
const ACCENT = '#0EA5E9';
const LIGHT = '#F1F5F9';
const site = 'https://arseenenterprises.com';
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [{
    '@type': 'WebSite',
    '@id': `${site}/#website`,
    name: 'Arseen Enterprises LLC',
    url: `${site}/`
  }, {
    '@type': 'Organization',
    '@id': `${site}/#organization`,
    name: 'Arseen Enterprises LLC',
    url: `${site}/`,
    email: 'support@arseenenterprises.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '15 Tanguay Ave, Suite 112 #7C', // US office address
      addressLocality: 'Nashua',
      addressRegion: 'NH',
      postalCode: '03063',
      addressCountry: 'US'
    },
    description: 'Wyoming-registered company providing custom product procurement and international order fulfillment for business clients (B2B) and individual consumers (B2C).'
  }, {
    '@type': 'WebPage',
    '@id': `${site}/#webpage`,
    url: `${site}/`,
    name: 'Arseen Enterprises LLC — Product Procurement & Order Fulfillment',
    isPartOf: {
      '@id': `${site}/#website`
    },
    about: {
      '@id': `${site}/#organization`
    },
    datePublished: '2026-07-18',
    dateModified: '2026-07-18'
  }]
};
const stats = [{
  value: 'Global',
  label: 'Order Delivery Network',
  numeric: null
}, {
  value: 'B2B & B2C',
  label: 'Fulfillment Solutions',
  numeric: null
}, {
  value: '1–2 days',
  label: 'Support Response Time',
  numeric: null
}, {
  value: 'WY LLC',
  label: 'US Registered Entity',
  numeric: null
}];
const pillars = [{
  icon: ShieldCheck,
  title: 'Regulatory Compliance',
  desc: 'Orders and shipments are coordinated subject to applicable legal, customs, carrier, and destination-country requirements.'
}, {
  icon: Zap,
  title: 'Operational Efficiency',
  desc: 'Streamlined workflows that reduce delays and maximize throughput.'
}, {
  icon: HeadphonesIcon,
  title: 'Client-First Support',
  desc: 'Dedicated coordination and transparent communication at every step.'
}];

/* ── Clip-path wipe reveal ── */
function Reveal({
  children,
  delay = 0,
  direction = 'up',
  className = ''
}: {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'left' | 'right' | 'none';
  className?: string;
}) {
  const initial = direction === 'up' ? {
    opacity: 0,
    y: 36,
    clipPath: 'inset(0 0 100% 0)'
  } : direction === 'left' ? {
    opacity: 0,
    x: -36,
    clipPath: 'inset(0 100% 0 0)'
  } : direction === 'right' ? {
    opacity: 0,
    x: 36,
    clipPath: 'inset(0 0 0 100%)'
  } : {
    opacity: 0
  };
  const animate = direction === 'up' ? {
    opacity: 1,
    y: 0,
    clipPath: 'inset(0 0 0% 0)'
  } : direction === 'left' ? {
    opacity: 1,
    x: 0,
    clipPath: 'inset(0 0% 0 0)'
  } : direction === 'right' ? {
    opacity: 1,
    x: 0,
    clipPath: 'inset(0 0 0 0%)'
  } : {
    opacity: 1
  };
  return <motion.div initial={initial} whileInView={animate} viewport={{
    once: true,
    margin: '-50px'
  }} transition={{
    duration: 0.65,
    delay,
    ease: [0.22, 1, 0.36, 1]
  }} className={className}>
      {children}
    </motion.div>;
}

/* ── Stagger container ── */
const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.1
    }
  }
};
const staggerItem = {
  hidden: {
    opacity: 0,
    y: 28,
    filter: 'blur(4px)'
  },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number]
    }
  }
};

/* ── Animated section label line ── */
function SectionLabel({
  text,
  light = false
}: {
  text: string;
  light?: boolean;
}) {
  return <div className="flex items-center gap-3 mb-4">
      <motion.div className="h-0.5 rounded" style={{
      background: ACCENT
    }} initial={{
      width: 0
    }} whileInView={{
      width: 32
    }} viewport={{
      once: true
    }} transition={{
      duration: 0.5,
      ease: 'easeOut' as const
    }} />
      <span className="text-xs font-bold uppercase tracking-widest" style={{
      color: ACCENT
    }}>
        {text}
      </span>
      {light && <motion.div className="h-0.5 rounded" style={{
      background: ACCENT
    }} initial={{
      width: 0
    }} whileInView={{
      width: 32
    }} viewport={{
      once: true
    }} transition={{
      duration: 0.5,
      delay: 0.1,
      ease: 'easeOut' as const
    }} />}
    </div>;
}

/* ── Stat item (text-only, no count-up for non-numeric) ── */
function StatItem({
  value,
  label,
  index
}: {
  value: string;
  label: string;
  index: number;
}) {
  return <motion.div initial={{
    opacity: 0,
    y: 16
  }} whileInView={{
    opacity: 1,
    y: 0
  }} viewport={{
    once: true
  }} transition={{
    duration: 0.5,
    delay: index * 0.1
  }} className="py-8 px-6 text-center group cursor-default" style={{
    borderRight: index < 3 ? '1px solid rgba(255,255,255,0.07)' : 'none'
  }}>
      <motion.p className="text-2xl font-extrabold mb-1" style={{
      color: ACCENT
    }} whileHover={{
      scale: 1.08
    }} transition={{
      type: 'spring',
      stiffness: 300
    }}>
        {value}
      </motion.p>
      <p className="text-xs font-medium tracking-wide" style={{
      color: 'rgba(255,255,255,0.4)'
    }}>{label}</p>
    </motion.div>;
}

/* ── Step connector line ── */
function StepConnector() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, {
    once: true,
    margin: '-80px'
  });
  return <div ref={ref} className="hidden lg:flex items-center justify-center col-span-3 mb-8 px-8">
      <div className="relative w-full h-px" style={{
      background: 'rgba(255,255,255,0.08)'
    }}>
        <motion.div className="absolute inset-y-0 left-0 h-full rounded-full" style={{
        background: `linear-gradient(90deg, ${BLUE}, ${ACCENT})`
      }} initial={{
        width: '0%'
      }} animate={inView ? {
        width: '100%'
      } : {
        width: '0%'
      }} transition={{
        duration: 1.2,
        ease: 'easeInOut' as const,
        delay: 0.3
      }} />
        {/* Travelling dot */}
        {inView && <motion.div className="absolute top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full shadow-lg" style={{
        background: ACCENT,
        boxShadow: `0 0 10px ${ACCENT}`
      }} initial={{
        left: '0%'
      }} animate={{
        left: '100%'
      }} transition={{
        duration: 1.2,
        ease: 'easeInOut' as const,
        delay: 0.3
      }} />}
      </div>
    </div>;
}
export default function HomePage() {
  return <>
      <Helmet>
        <title>Arseen Enterprises LLC — Product Procurement & Order Fulfillment</title>
        <meta name="description" content="Arseen Enterprises LLC provides custom product procurement and international order fulfillment for business clients (B2B) and individual consumers (B2C) worldwide." />
        <link rel="canonical" href={site} />
        <meta property="og:title" content="Arseen Enterprises LLC — Product Procurement & Order Fulfillment" />
        <meta property="og:description" content="Transparent, efficient, and scalable procurement and fulfillment solutions for businesses and consumers worldwide." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={site} />
        <meta property="og:image" content={`${site}/og-image.svg`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Arseen Enterprises LLC — Product Procurement & Order Fulfillment" />
        <meta name="twitter:description" content="Transparent, efficient, and scalable procurement and fulfillment solutions for businesses and consumers worldwide." />
        <meta name="twitter:image" content={`${site}/og-image.svg`} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <main>

        {/* ─── HERO ─── */}
        <section className="relative overflow-hidden" style={{
        background: NAVY,
        minHeight: 720
      }}>
          <HeroParticles />

          <img src="/airo-assets/images/pages/home/hero" alt="International procurement and fulfillment operations" className="absolute inset-0 w-full h-full object-cover pointer-events-none" style={{
          opacity: 0.1,
          zIndex: 0
        }} width={1440} height={720} loading="eager" fetchPriority="high" />
          <div className="absolute inset-0 pointer-events-none" style={{
          zIndex: 2,
          background: `linear-gradient(110deg, ${NAVY} 38%, rgba(10,37,64,0.45) 100%)`
        }} />

          {/* Ambient orbs */}
          <motion.div className="absolute -right-40 -top-40 w-[700px] h-[700px] rounded-full pointer-events-none" style={{
          zIndex: 1,
          background: `radial-gradient(circle, rgba(14,165,233,0.07) 0%, transparent 65%)`
        }} animate={{
          scale: [1, 1.07, 1],
          opacity: [0.5, 1, 0.5]
        }} transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut' as const
        }} />
          <motion.div className="absolute -left-20 bottom-0 w-[400px] h-[400px] rounded-full pointer-events-none" style={{
          zIndex: 1,
          background: `radial-gradient(circle, rgba(26,86,219,0.1) 0%, transparent 70%)`
        }} animate={{
          scale: [1, 1.09, 1]
        }} transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut' as const,
          delay: 2
        }} />

          <div className="relative container mx-auto px-6 py-20 lg:py-24" style={{
          zIndex: 3
        }}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

              {/* Left — text */}
              <div className="max-w-xl">
                {/* Eyebrow */}
                <motion.div initial={{
                opacity: 0,
                y: 10
              }} animate={{
                opacity: 1,
                y: 0
              }} transition={{
                duration: 0.45,
                delay: 0.3,
                ease: 'easeOut' as const
              }}>
                  <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-8" style={{
                  background: 'rgba(14,165,233,0.12)',
                  color: ACCENT,
                  border: '1px solid rgba(14,165,233,0.3)'
                }}>
                    <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{
                    background: ACCENT
                  }} />
                    Wyoming Registered LLC · Established 2026
                  </span>
                </motion.div>

                {/* Word-by-word headline */}
                <h1 className="text-4xl md:text-5xl lg:text-[3.2rem] font-extrabold text-white leading-[1.1] mb-6 tracking-tight">
                  {home.hero.headline.split(' ').map((word: string, i: number) => <motion.span key={i} initial={{
                  opacity: 0,
                  y: 30,
                  filter: 'blur(8px)'
                }} animate={{
                  opacity: 1,
                  y: 0,
                  filter: 'blur(0px)'
                }} transition={{
                  duration: 0.6,
                  delay: 0.5 + i * 0.075,
                  ease: [0.22, 1, 0.36, 1]
                }} className="inline-block mr-[0.26em]">
                      {word}
                    </motion.span>)}
                </h1>

                {/* Sub */}
                <motion.p initial={{
                opacity: 0,
                y: 16
              }} animate={{
                opacity: 1,
                y: 0
              }} transition={{
                duration: 0.6,
                delay: 1.0,
                ease: 'easeOut' as const
              }} className="text-lg leading-relaxed mb-10 max-w-lg" style={{
                color: 'rgba(255,255,255,0.6)'
              }}>
                  {home.hero.subheadline}
                </motion.p>

                {/* CTAs */}
                <motion.div initial={{
                opacity: 0,
                y: 14
              }} animate={{
                opacity: 1,
                y: 0
              }} transition={{
                duration: 0.5,
                delay: 1.15,
                ease: 'easeOut' as const
              }} className="flex flex-wrap gap-4">
                  <motion.div whileHover={{
                  scale: 1.04
                }} whileTap={{
                  scale: 0.97
                }}>
                    <Link to="/pricing" className="inline-flex items-center gap-2 px-8 py-4 font-bold rounded-xl text-white shadow-lg" style={{
                    background: BLUE,
                    boxShadow: '0 8px 28px rgba(26,86,219,0.45)'
                  }}>
                      {home.hero.cta} <ArrowRight size={17} />
                    </Link>
                  </motion.div>
                  <motion.div whileHover={{
                  scale: 1.03
                }} whileTap={{
                  scale: 0.97
                }}>
                    <Link to="/services" className="inline-flex items-center gap-2 px-8 py-4 font-semibold rounded-xl transition-all hover:bg-white/10" style={{
                    border: '1.5px solid rgba(255,255,255,0.25)',
                    color: 'rgba(255,255,255,0.85)'
                  }}>
                      {home.hero.ctaSecondary}
                    </Link>
                  </motion.div>
                </motion.div>

                {/* Scroll hint */}
                <motion.div initial={{
                opacity: 0
              }} animate={{
                opacity: 1
              }} transition={{
                delay: 1.6
              }} className="mt-14 flex items-center gap-3">
                  <motion.div animate={{
                  y: [0, 7, 0]
                }} transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  ease: 'easeInOut' as const
                }} className="flex flex-col items-center gap-1">
                    <div className="w-px h-8 rounded-full" style={{
                    background: 'rgba(255,255,255,0.18)'
                  }} />
                    <div className="w-1.5 h-1.5 rounded-full" style={{
                    background: ACCENT
                  }} />
                  </motion.div>
                  <span className="text-xs tracking-widest uppercase" style={{
                  color: 'rgba(255,255,255,0.28)'
                }}>Scroll</span>
                </motion.div>
              </div>

              {/* Right — animated globe */}
              <motion.div initial={{
              opacity: 0,
              scale: 0.88
            }} animate={{
              opacity: 1,
              scale: 1
            }} transition={{
              duration: 0.9,
              delay: 0.6,
              ease: [0.22, 1, 0.36, 1]
            }} className="hidden lg:flex items-center justify-center">
                <HeroGlobe />
              </motion.div>
            </div>
          </div>
        </section>

        {/* ─── MARQUEE TICKER ─── */}
        <MarqueeTicker />

        {/* ─── STATS BAR ─── */}
        <section style={{
        background: '#071A2E',
        borderBottom: '1px solid rgba(255,255,255,0.07)'
      }}>
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4">
              {stats.map((s, i) => <StatItem key={s.label} value={s.value} label={s.label} index={i} />)}
            </div>
          </div>
        </section>

        {/* ─── INTRO / MISSION ─── */}
        <section className="py-28 bg-white overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

              {/* Text */}
              <Reveal direction="left">
                <SectionLabel text="Who We Are" />
                <h2 className="text-3xl md:text-4xl font-extrabold mb-6 leading-snug tracking-tight" style={{
                color: NAVY
              }}>
                  {home.intro.heading}
                </h2>
                <p className="text-base leading-relaxed mb-5 text-gray-600">{home.intro.body}</p>
                <p className="text-base leading-relaxed mb-8 text-gray-600">{home.intro.commitment}</p>
                <motion.div whileHover={{
                x: 4
              }} transition={{
                type: 'spring',
                stiffness: 300
              }}>
                  <Link to="/about" className="inline-flex items-center gap-2 font-bold text-sm" style={{
                  color: BLUE
                }}>
                    About Our Company <ArrowRight size={15} />
                  </Link>
                </motion.div>
              </Reveal>

              {/* Image */}
              <Reveal direction="right" delay={0.12}>
                <div className="relative">
                  <div className="absolute -bottom-5 -right-5 w-full h-full rounded-2xl hidden md:block" style={{
                  background: LIGHT,
                  zIndex: 0
                }} />
                  <img src="/airo-assets/images/pages/home/about" alt="Global procurement coordination" className="relative w-full h-80 object-cover rounded-2xl shadow-2xl" style={{
                  zIndex: 1
                }} width={700} height={500} loading="lazy" />
                  {/* Floating badge */}
                  <motion.div animate={{
                  y: [0, -7, 0]
                }} transition={{
                  duration: 3.8,
                  repeat: Infinity,
                  ease: 'easeInOut' as const
                }} className="absolute -bottom-4 -left-4 text-white px-6 py-4 rounded-xl shadow-xl hidden md:block" style={{
                  background: NAVY,
                  zIndex: 2
                }}>
                    <p className="text-xl font-extrabold">B2B</p>
                    <p className="text-xs mt-0.5" style={{
                    color: 'rgba(255,255,255,0.55)'
                  }}>Fulfillment Solutions</p>
                  </motion.div>
                  {/* Animated border ring */}
                  <motion.div className="absolute inset-0 rounded-2xl pointer-events-none hidden md:block" style={{
                  zIndex: 1,
                  border: `1.5px solid rgba(14,165,233,0.25)`
                }} animate={{
                  opacity: [0.3, 0.8, 0.3]
                }} transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut' as const
                }} />
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ─── THREE PILLARS ─── */}
        <section className="py-16 overflow-hidden" style={{
        background: LIGHT
      }}>
          <div className="container mx-auto px-6">
            <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6" variants={staggerContainer} initial="hidden" whileInView="show" viewport={{
            once: true,
            margin: '-60px'
          }}>
              {pillars.map(p => {
              const Icon = p.icon;
              return <motion.div key={p.title} variants={staggerItem} className="group flex gap-5 items-start bg-white rounded-2xl p-7 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300 cursor-default" whileHover={{
                y: -4
              }} transition={{
                type: 'spring',
                stiffness: 250
              }}>
                    <motion.div className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center" style={{
                  background: `linear-gradient(135deg, ${NAVY}, ${BLUE})`
                }} whileHover={{
                  rotate: 8,
                  scale: 1.1
                }} transition={{
                  type: 'spring',
                  stiffness: 300
                }}>
                      <Icon size={22} className="text-white" />
                    </motion.div>
                    <div>
                      <h3 className="font-bold text-base mb-1.5" style={{
                    color: NAVY
                  }}>{p.title}</h3>
                      <p className="text-sm text-gray-500 leading-relaxed">{p.desc}</p>
                    </div>
                  </motion.div>;
            })}
            </motion.div>
          </div>
        </section>

        {/* ─── SERVICES ─── */}
        <section className="py-28 bg-white overflow-hidden">
          <div className="container mx-auto px-6">
            <Reveal>
              <div className="max-w-xl mb-14">
                <SectionLabel text="What We Offer" />
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4" style={{
                color: NAVY
              }}>
                  {home.services.heading}
                </h2>
                <p className="text-gray-500 leading-relaxed">
                  Custom product procurement and international order fulfillment for business clients (B2B) and individual consumers (B2C).
                </p>
              </div>
            </Reveal>

            <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" variants={staggerContainer} initial="hidden" whileInView="show" viewport={{
            once: true,
            margin: '-60px'
          }}>
              {home.services.items.map((item, index) => {
              const Icon = serviceIcons[index % serviceIcons.length];
              return <motion.div key={item.id} variants={staggerItem} className="group relative bg-white border border-gray-100 rounded-2xl p-7 overflow-hidden cursor-default" whileHover={{
                y: -6,
                boxShadow: '0 20px 40px rgba(10,37,64,0.12)'
              }} transition={{
                type: 'spring',
                stiffness: 250
              }}>
                    {/* Animated top accent */}
                    <motion.div className="absolute top-0 left-0 right-0 h-0.5" style={{
                  background: `linear-gradient(90deg, ${ACCENT}, ${BLUE})`
                }} initial={{
                  scaleX: 0,
                  transformOrigin: 'left'
                }} whileInView={{
                  scaleX: 1
                }} viewport={{
                  once: true
                }} transition={{
                  duration: 0.6,
                  delay: index * 0.08
                }} />
                    {/* Hover glow */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl" style={{
                  background: `radial-gradient(ellipse at top left, rgba(14,165,233,0.05) 0%, transparent 60%)`
                }} />
                    <motion.div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{
                  background: LIGHT
                }} whileHover={{
                  rotate: 6,
                  scale: 1.12
                }} transition={{
                  type: 'spring',
                  stiffness: 300
                }}>
                      <Icon size={22} style={{
                    color: NAVY
                  }} />
                    </motion.div>
                    <h3 className="text-base font-bold mb-3" style={{
                  color: NAVY
                }}>{item.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
                  </motion.div>;
            })}
            </motion.div>

            <Reveal delay={0.2}>
              <div className="mt-12">
                <motion.div whileHover={{
                scale: 1.03
              }} whileTap={{
                scale: 0.97
              }}>
                  <Link to="/services" className="inline-flex items-center gap-2 px-7 py-3.5 font-bold rounded-xl border-2 transition-all hover:text-white hover:shadow-lg" style={{
                  borderColor: NAVY,
                  color: NAVY
                }} onMouseEnter={e => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.background = NAVY;
                  el.style.color = '#fff';
                }} onMouseLeave={e => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.background = 'transparent';
                  el.style.color = NAVY;
                }}>
                    View All Services <ArrowRight size={15} />
                  </Link>
                </motion.div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ─── HOW IT WORKS ─── */}
        <section className="py-28 relative overflow-hidden" style={{
        background: NAVY
      }}>
          {/* Breathing glow */}
          <motion.div className="absolute inset-0 pointer-events-none" style={{
          background: `radial-gradient(ellipse at 75% 50%, rgba(14,165,233,0.07) 0%, transparent 60%)`
        }} animate={{
          opacity: [0.4, 1, 0.4]
        }} transition={{
          duration: 7,
          repeat: Infinity,
          ease: 'easeInOut' as const
        }} />
          {/* Bottom-left orb */}
          <motion.div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full pointer-events-none" style={{
          background: `radial-gradient(circle, rgba(26,86,219,0.12) 0%, transparent 70%)`
        }} animate={{
          scale: [1, 1.15, 1]
        }} transition={{
          duration: 9,
          repeat: Infinity,
          ease: 'easeInOut' as const
        }} />

          <div className="relative container mx-auto px-6">
            <Reveal>
              <div className="text-center mb-6">
                <SectionLabel text="The Process" light />
                <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">
                  {home.howItWorks.heading}
                </h2>
                <p className="max-w-xl mx-auto text-base" style={{
                color: 'rgba(255,255,255,0.48)'
              }}>
                  A straightforward process from inquiry to delivery — designed for efficiency and transparency.
                </p>
              </div>
            </Reveal>

            {/* Connector line (desktop only) */}
            <StepConnector />

            <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" variants={staggerContainer} initial="hidden" whileInView="show" viewport={{
            once: true,
            margin: '-60px'
          }}>
              {home.howItWorks.steps.map(step => <motion.div key={step.id} variants={staggerItem} className="group rounded-2xl p-7 relative overflow-hidden cursor-default" style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)'
            }} whileHover={{
              y: -5,
              background: 'rgba(255,255,255,0.07)',
              borderColor: 'rgba(14,165,233,0.25)'
            }} transition={{
              type: 'spring',
              stiffness: 220
            }}>
                  {/* Hover glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{
                background: `radial-gradient(ellipse at top left, rgba(14,165,233,0.1) 0%, transparent 60%)`
              }} />
                  {/* Watermark */}
                  <div className="absolute -top-3 -right-2 text-8xl font-extrabold select-none pointer-events-none" style={{
                color: 'rgba(255,255,255,0.03)',
                lineHeight: 1
              }}>
                    {step.number}
                  </div>
                  {/* Step badge */}
                  <motion.div className="inline-flex items-center justify-center w-9 h-9 rounded-lg text-sm font-extrabold text-white mb-5" style={{
                background: BLUE
              }} whileHover={{
                scale: 1.15,
                rotate: 5
              }} transition={{
                type: 'spring',
                stiffness: 300
              }}>
                    {step.number}
                  </motion.div>
                  <h3 className="font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-sm leading-relaxed" style={{
                color: 'rgba(255,255,255,0.48)'
              }}>
                    {step.description}
                  </p>
                </motion.div>)}
            </motion.div>
          </div>
        </section>

        {/* ─── FULL-BLEED BANNER ─── */}
        <section className="relative h-72 overflow-hidden">
          <motion.img src="/airo-assets/images/pages/home/fulfillment" alt="E-commerce fulfillment operations" className="w-full h-full object-cover" width={1440} height={400} loading="lazy" initial={{
          scale: 1.08
        }} whileInView={{
          scale: 1
        }} viewport={{
          once: true
        }} transition={{
          duration: 1.2,
          ease: 'easeOut' as const
        }} />
          <div className="absolute inset-0 pointer-events-none" style={{
          background: `linear-gradient(90deg, rgba(10,37,64,0.95) 0%, rgba(10,37,64,0.72) 55%, rgba(26,86,219,0.38) 100%)`
        }} />
          <div className="absolute inset-0 flex items-center pointer-events-none">
            <div className="container mx-auto px-6 pointer-events-auto">
              <Reveal direction="left">
                <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{
                color: ACCENT
              }}>
                  Supporting International Procurement & Fulfillment
                </p>
                <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-5">
                  Transparent. Efficient. Scalable.
                </h2>
                <motion.div whileHover={{
                x: 4
              }} transition={{
                type: 'spring',
                stiffness: 300
              }}>
                  <Link to="/how-it-works" className="inline-flex items-center gap-2 text-sm font-bold" style={{
                  color: ACCENT
                }}>
                    See how it works <ArrowRight size={14} />
                  </Link>
                </motion.div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section className="py-28 bg-white overflow-hidden">
          <div className="container mx-auto px-6">
            <Reveal>
              <div className="rounded-3xl overflow-hidden relative" style={{
              background: `linear-gradient(120deg, ${NAVY} 0%, #0A4080 60%, ${BLUE} 100%)`
            }}>
                {/* Animated blobs */}
                <motion.div className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none" style={{
                background: `radial-gradient(circle, rgba(14,165,233,0.14) 0%, transparent 70%)`,
                transform: 'translate(30%, -30%)'
              }} animate={{
                scale: [1, 1.12, 1],
                opacity: [0.6, 1, 0.6]
              }} transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut' as const
              }} />
                <motion.div className="absolute bottom-0 left-0 w-64 h-64 rounded-full pointer-events-none" style={{
                background: `radial-gradient(circle, rgba(26,86,219,0.3) 0%, transparent 70%)`,
                transform: 'translate(-30%, 30%)'
              }} animate={{
                scale: [1, 1.08, 1]
              }} transition={{
                duration: 8,
                repeat: Infinity,
                ease: 'easeInOut' as const,
                delay: 1.5
              }} />

                {/* Animated grid overlay */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.03]" style={{
                backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
                backgroundSize: '40px 40px'
              }} />

                <div className="relative px-10 py-16 md:px-16 flex flex-col md:flex-row items-center justify-between gap-10">
                  <div className="max-w-xl">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">
                      {home.cta.heading}
                    </h2>
                    <p className="text-base leading-relaxed" style={{
                    color: 'rgba(255,255,255,0.6)'
                  }}>
                      {home.cta.body}
                    </p>
                  </div>
                  <div className="flex flex-col items-center md:items-end gap-4 flex-shrink-0">
                    <motion.div whileHover={{
                    scale: 1.05
                  }} whileTap={{
                    scale: 0.97
                  }}>
                      <Link to="/pricing" className="inline-flex items-center gap-2 px-10 py-4 font-extrabold rounded-xl text-white whitespace-nowrap shadow-xl" style={{
                      background: ACCENT,
                      boxShadow: '0 10px 30px rgba(14,165,233,0.45)'
                    }}>
                        {home.cta.button} <ArrowRight size={17} />
                      </Link>
                    </motion.div>
                    <p className="text-xs flex items-center gap-1.5" style={{
                    color: 'rgba(255,255,255,0.36)'
                  }}>
                      <CheckCircle size={12} /> {home.cta.note}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

      </main>
    </>;
}
