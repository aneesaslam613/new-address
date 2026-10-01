import { tracking } from 'virtual:content';
import { Helmet } from '@dr.pogodin/react-helmet';
import { Link } from "react-router";
import { ChevronRight, Search, Clock, AlertCircle, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';
const NAVY = '#0A2540';
const BLUE = '#1A56DB';
const ACCENT = '#0EA5E9';
const LIGHT = '#F1F5F9';
const site = 'https://arseenenterprises.com';
const url = `${site}/tracking`;
const title = 'Tracking Information — Arseen Enterprises LLC';
const description = 'How to track your order with Arseen Enterprises LLC. Tracking is provided after dispatch and may take 24–72 hours to activate.';
const ogImage = `${site}/og-image.svg`;
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${url}#webpage`,
  name: title,
  url,
  description,
  isPartOf: {
    '@id': `${site}/#website`
  },
  about: {
    '@id': `${site}/#organization`
  }
};
function Reveal({
  children,
  delay = 0
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return <motion.div initial={{
    opacity: 0,
    y: 24
  }} whileInView={{
    opacity: 1,
    y: 0
  }} viewport={{
    once: true,
    margin: '-50px'
  }} transition={{
    duration: 0.6,
    delay,
    ease: [0.22, 1, 0.36, 1]
  }}>
      {children}
    </motion.div>;
}
const stepsMeta = [{
  icon: CheckCircle
}, {
  icon: Search
}, {
  icon: Clock
}, {
  icon: Search
}, {
  icon: CheckCircle
}];
export default function TrackingPage() {
  return <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={ogImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <main>
        <section style={{
        background: `linear-gradient(135deg, ${NAVY} 0%, #0d3060 100%)`,
        padding: '5rem 0 4rem'
      }}>
          <div className="container mx-auto px-6">
            <nav className="flex items-center gap-2 text-xs mb-6" aria-label="Breadcrumb" style={{
            color: 'rgba(255,255,255,0.45)'
          }}>
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight size={12} />
              <span style={{
              color: 'rgba(255,255,255,0.7)'
            }}>Tracking Information</span>
            </nav>
            <div className="flex items-center gap-3 mb-5">
              <div style={{
              width: 44,
              height: 44,
              borderRadius: 11,
              background: 'rgba(255,255,255,0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
                <Search size={22} className="text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">Tracking Information</h1>
            <p className="text-lg max-w-2xl" style={{
            color: 'rgba(255,255,255,0.62)'
          }}>
              How to track your order and what to expect after dispatch.
            </p>
          </div>
        </section>

        <section style={{
        background: LIGHT,
        padding: '4rem 0'
      }}>
          <div className="container mx-auto px-6 max-w-3xl">

            <Reveal>
              <div className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 mb-8" style={{
              borderLeft: `4px solid ${ACCENT}`
            }}>
                <h2 className="text-base font-extrabold mb-3" style={{
                color: NAVY
              }}>How Tracking Works</h2>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">
                  Tracking information is normally provided after the shipment has been accepted and processed by the applicable logistics provider. Tracking activation may take approximately <strong>24–72 hours after dispatch</strong>. Some economy services provide milestone tracking rather than continuous scans.
                </p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Once your tracking number is available, you will receive it by email. You can use it directly on the carrier's website or tracking portal to monitor your shipment's progress.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 mb-8">
                <h2 className="text-base font-extrabold mb-6" style={{
                color: NAVY
              }}>Order Journey</h2>
                <div className="space-y-5">
                  {tracking.steps.map((step, i) => {
                  const Icon = stepsMeta[i].icon;
                  return <div key={i} className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center" style={{
                      background: i === 4 ? `linear-gradient(135deg, ${NAVY}, ${BLUE})` : LIGHT
                    }}>
                          <Icon size={16} style={{
                        color: i === 4 ? '#fff' : NAVY
                      }} />
                        </div>
                        <div>
                          <p className="text-sm font-bold mb-0.5" style={{
                        color: NAVY
                      }}>{step.title}</p>
                          <p className="text-sm text-gray-500">{step.desc}</p>
                        </div>
                      </div>;
                })}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="rounded-xl p-5 mb-8" style={{
              background: '#FFF7ED',
              border: '1px solid #FED7AA'
            }}>
                <div className="flex items-start gap-3">
                  <AlertCircle size={16} style={{
                  color: '#EA580C',
                  flexShrink: 0,
                  marginTop: 2
                }} />
                  <div>
                    <p className="text-sm font-bold mb-1" style={{
                    color: '#7C2D12'
                  }}>Tracking Not Received?</p>
                    <p className="text-sm leading-relaxed" style={{
                    color: '#7C2D12'
                  }}>
                      If you have not received a tracking number within 48 hours of the expected dispatch date, please contact us at{' '}
                      <a href="mailto:support@arseenenterprises.com" className="underline font-semibold">support@arseenenterprises.com</a>{' '}
                      with your order number.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.14}>
              <div className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 mb-8" style={{
              borderLeft: `4px solid ${BLUE}`
            }}>
                <h2 className="text-base font-extrabold mb-3" style={{
                color: NAVY
              }}>Delivery Estimates</h2>
                <p className="text-sm text-gray-600 leading-relaxed">
                  All delivery periods are estimates rather than guarantees. Actual delivery may be affected by customs clearance, security inspections, carrier congestion, weather, public holidays, remote destinations, inaccurate address information, recipient unavailability, import restrictions, or events outside our reasonable control.
                  See our <Link to="/shipping" className="underline" style={{
                  color: BLUE
                }}>Shipping &amp; Delivery page</Link> for full delivery estimates by service level and destination.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="rounded-2xl p-8 text-center" style={{
              background: `linear-gradient(135deg, ${NAVY}, #0d3060)`
            }}>
                <h3 className="text-xl font-extrabold text-white mb-2">Have a Question About Your Order?</h3>
                <p className="text-sm mb-6" style={{
                color: 'rgba(255,255,255,0.6)'
              }}>
                  Our support team responds within 1–2 business days.
                </p>
                <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 font-bold rounded-xl text-white" style={{
                background: ACCENT
              }}>
                  Contact Support <ChevronRight size={16} />
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
    </>;
}
