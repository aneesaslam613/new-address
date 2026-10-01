import { Helmet } from '@dr.pogodin/react-helmet';
import { Link } from "react-router";
import { ExternalLink, CheckCircle2, Package, ArrowRight, Info } from 'lucide-react';
import { motion } from 'motion/react';
import { proof_of_delivery } from 'virtual:content';
const NAVY = '#0A2540';
const BLUE = '#1A56DB';
const ACCENT = '#0EA5E9';
const LIGHT = '#F1F5F9';
const site = 'https://arseenenterprises.com';
const url = `${site}/proof-of-delivery`;
export default function ProofOfDeliveryPage() {
  return <>
      <Helmet>
        <title>Proof of Delivery — Arseen Enterprises LLC</title>
        <meta name="description" content="View delivery confirmation records for fulfilled orders. Each entry links to a Google Drive folder with proof of delivery screenshots." />
        <link rel="canonical" href={url} />
        <meta property="og:title" content="Proof of Delivery — Arseen Enterprises LLC" />
        <meta property="og:description" content="Transparent delivery records with Google Drive proof for every fulfilled order." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={`${site}/og-image.svg`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Proof of Delivery — Arseen Enterprises LLC" />
        <meta name="twitter:description" content="Transparent delivery records with Google Drive proof for every fulfilled order." />
        <meta name="twitter:image" content={`${site}/og-image.svg`} />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          '@id': `${url}#webpage`,
          name: 'Proof of Delivery — Arseen Enterprises LLC',
          url,
          isPartOf: {
            '@id': `${site}/#website`
          },
          about: {
            '@id': `${site}/#organization`
          }
        })}</script>
      </Helmet>

      <main>

        {/* ─── HERO ─── */}
        <section className="py-20" style={{
        background: NAVY
      }}>
          <div className="container mx-auto px-6 text-center">
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
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6" style={{
              background: 'rgba(14,165,233,0.15)',
              color: ACCENT,
              border: '1px solid rgba(14,165,233,0.3)'
            }}>
                {proof_of_delivery.hero.eyebrow}
              </span>
              <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-5">
                {proof_of_delivery.hero.heading}
              </h1>
              <p className="max-w-xl mx-auto text-base leading-relaxed" style={{
              color: 'rgba(255,255,255,0.6)'
            }}>
                {proof_of_delivery.hero.subheading}
              </p>
            </motion.div>
          </div>
        </section>

        {/* ─── CARD SECTION ─── */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">

            {/* Section header */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-0.5 rounded" style={{
                background: ACCENT
              }} />
                <span className="text-xs font-bold uppercase tracking-widest" style={{
                color: ACCENT
              }}>
                  Delivery Records
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-2" style={{
              color: NAVY
            }}>
                {proof_of_delivery.table.heading}
              </h2>
              <p className="text-sm text-gray-500 max-w-lg">
                {proof_of_delivery.table.description}
              </p>
            </div>

            {/* Info banner */}
            <div className="flex items-start gap-3 rounded-xl p-4 mb-8 text-sm" style={{
            background: LIGHT,
            border: '1px solid #DDE3EE'
          }}>
              <Info size={16} className="mt-0.5 flex-shrink-0" style={{
              color: BLUE
            }} />
              <p style={{
              color: '#4A5568'
            }}>
                All proof documents open in Google Drive. Make sure you're signed in to Google if the folder requires access.
              </p>
            </div>

            {/* Single entry card */}
            {proof_of_delivery.table.entries.map(entry => <motion.div key={entry.id} initial={{
            opacity: 0,
            y: 12
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.4,
            ease: 'easeOut' as const
          }} className="rounded-2xl border border-gray-100 shadow-sm overflow-hidden">

                {/* Card header */}
                <div className="flex items-center justify-between px-8 py-5" style={{
              background: NAVY
            }}>
                  <span className="flex items-center gap-3 text-white font-bold text-base">
                    <Package size={18} style={{
                  color: ACCENT
                }} />
                    <span>{entry.orderId}</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold" style={{
                background: 'rgba(16,185,129,0.18)',
                color: '#4ade80'
              }}>
                    <CheckCircle2 size={12} />
                    <span>{entry.status}</span>
                  </span>
                </div>

                {/* Card body */}
                <div className="px-8 py-7 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 bg-white">
                  <div className="flex flex-col sm:flex-row gap-8">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{
                    color: ACCENT
                  }}>Coverage</p>
                      <p className="text-sm font-semibold" style={{
                    color: NAVY
                  }}>{entry.destination}</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{
                    color: ACCENT
                  }}>Contents</p>
                      <p className="text-sm font-semibold text-gray-600">Delivery screenshots organized by month</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{
                    color: ACCENT
                  }}>Hosted on</p>
                      <p className="text-sm font-semibold text-gray-600">Google Drive</p>
                    </div>
                  </div>
                  <a href={entry.driveLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-white transition-all hover:brightness-110 hover:scale-[1.02] flex-shrink-0 shadow-lg" style={{
                background: BLUE,
                boxShadow: '0 6px 20px rgba(21,101,192,0.3)'
              }}>
                    View Proof on Drive <ExternalLink size={14} />
                  </a>
                </div>

              </motion.div>)}
          </div>
        </section>

        {/* ─── BOTTOM NOTE ─── */}
        <section className="py-16" style={{
        background: LIGHT
      }}>
          <div className="container mx-auto px-6">
            <motion.div initial={{
            opacity: 0,
            y: 16
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.45,
            ease: 'easeOut' as const
          }} className="rounded-3xl p-10 md:p-14 text-center" style={{
            background: `linear-gradient(120deg, ${NAVY} 0%, #0A4080 60%, ${BLUE} 100%)`
          }}>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight mb-4">
                {proof_of_delivery.note.heading}
              </h2>
              <p className="text-base max-w-md mx-auto mb-8" style={{
              color: 'rgba(255,255,255,0.65)'
            }}>
                {proof_of_delivery.note.body}
              </p>
              <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 font-extrabold rounded-xl text-white transition-all hover:brightness-110 hover:scale-[1.02] shadow-xl" style={{
              background: ACCENT,
              boxShadow: '0 10px 30px rgba(14,165,233,0.4)'
            }}>
                {proof_of_delivery.note.cta} <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </section>

      </main>
    </>;
}
