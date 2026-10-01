import { Helmet } from '@dr.pogodin/react-helmet';
import { Link } from "react-router";
import { ChevronRight, Truck, Clock, Globe, Package, AlertCircle, CheckCircle, MapPin } from 'lucide-react';
import { motion } from 'motion/react';
import { shipping } from 'virtual:content';
const NAVY = '#0A2540';
const BLUE = '#1A56DB';
const ACCENT = '#0EA5E9';
const LIGHT = '#F1F5F9';
const site = 'https://arseenenterprises.com';
const url = `${site}/shipping`;
const title = 'International Shipping & Delivery — Arseen Enterprises LLC';
const description = 'Processing times, delivery estimates, carrier information, customs guidance, and tracking details for international orders fulfilled by Arseen Enterprises LLC.';
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
  delay = 0,
  className = ''
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
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
  }} className={className}>
      {children}
    </motion.div>;
}
export default function ShippingPage() {
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
        {/* ── Hero ── */}
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
            }}>Shipping &amp; Delivery</span>
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
                <Truck size={22} className="text-white" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full" style={{
              background: 'rgba(14,165,233,0.15)',
              color: ACCENT,
              border: '1px solid rgba(14,165,233,0.3)'
            }}>
                Estimates — Not Guarantees
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">{shipping.hero.title}</h1>
            <p className="text-lg max-w-2xl" style={{
            color: 'rgba(255,255,255,0.62)'
          }}>{shipping.hero.subtitle}</p>
          </div>
        </section>

        {/* ── Fulfillment disclosure ── */}
        <section style={{
        background: '#EFF6FF',
        borderBottom: '1px solid #BFDBFE'
      }}>
          <div className="container mx-auto px-6 py-5">
            <div className="flex items-start gap-3">
              <Globe size={18} style={{
              color: BLUE,
              flexShrink: 0,
              marginTop: 2
            }} />
              <p className="text-sm leading-relaxed" style={{
              color: '#1E3A5F'
            }}>
                Orders may be sourced or fulfilled through independent suppliers and fulfillment partners in China and other approved sourcing locations. The final shipping method is selected based on destination, product characteristics, weight, package dimensions, carrier availability, customer preference, and the approved quotation. Arseen Enterprises LLC does not claim ownership of every warehouse, shipping facility, courier network, or fulfillment location used to complete an order.
              </p>
            </div>
          </div>
        </section>

        <section style={{
        background: LIGHT,
        padding: '4rem 0'
      }}>
          <div className="container mx-auto px-6 max-w-4xl">

            {/* Processing times */}
            <Reveal>
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 mb-8">
                <div className="px-7 py-5 flex items-center gap-3" style={{
                background: `linear-gradient(135deg, ${NAVY}, #0d3060)`
              }}>
                  <Clock size={20} className="text-white" />
                  <h2 className="text-lg font-extrabold text-white">Order Processing Before Dispatch</h2>
                </div>
                <div className="p-7">
                  <p className="text-sm text-gray-500 mb-5">Processing time is separate from delivery time. Delivery estimates begin after the parcel has been dispatched.</p>
                  <div className="space-y-3">
                    {shipping.processingRows.map((row, i) => <div key={i} className="flex items-start justify-between gap-4 py-3" style={{
                    borderBottom: '1px solid #F1F5F9'
                  }}>
                        <div className="flex items-start gap-2">
                          <CheckCircle size={14} style={{
                        color: ACCENT,
                        flexShrink: 0,
                        marginTop: 2
                      }} />
                          <span className="text-sm" style={{
                        color: '#374151'
                      }}>{row.type}</span>
                        </div>
                        <span className="text-sm font-semibold whitespace-nowrap" style={{
                      color: NAVY
                    }}>{row.time}</span>
                      </div>)}
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Delivery estimates */}
            <Reveal delay={0.08}>
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 mb-8">
                <div className="px-7 py-5 flex items-center gap-3" style={{
                background: `linear-gradient(135deg, ${BLUE}, #1244b0)`
              }}>
                  <Truck size={20} className="text-white" />
                  <h2 className="text-lg font-extrabold text-white">Estimated Delivery After Dispatch</h2>
                </div>
                <div className="p-7">
                  <div className="space-y-3 mb-8">
                    {shipping.deliveryRows.map((row, i) => <div key={i} className="flex items-start justify-between gap-4 py-3" style={{
                    borderBottom: '1px solid #F1F5F9'
                  }}>
                        <div className="flex items-start gap-2">
                          <CheckCircle size={14} style={{
                        color: BLUE,
                        flexShrink: 0,
                        marginTop: 2
                      }} />
                          <span className="text-sm" style={{
                        color: '#374151'
                      }}>{row.service}</span>
                        </div>
                        <span className="text-sm font-semibold whitespace-nowrap" style={{
                      color: NAVY
                    }}>{row.time}</span>
                      </div>)}
                  </div>
                  <h3 className="text-sm font-extrabold mb-4" style={{
                  color: NAVY
                }}>Typical Destination Estimates</h3>
                  <div className="space-y-3">
                    {shipping.destinationRows.map((row, i) => <div key={i} className="flex items-start justify-between gap-4 py-2.5" style={{
                    borderBottom: '1px solid #F1F5F9'
                  }}>
                        <div className="flex items-start gap-2">
                          <MapPin size={13} style={{
                        color: ACCENT,
                        flexShrink: 0,
                        marginTop: 2
                      }} />
                          <span className="text-sm" style={{
                        color: '#374151'
                      }}>{row.route}</span>
                        </div>
                        <span className="text-sm font-semibold whitespace-nowrap" style={{
                      color: NAVY
                    }}>{row.time}</span>
                      </div>)}
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Carriers */}
            <Reveal delay={0.12}>
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 mb-8">
                <div className="px-7 py-5 flex items-center gap-3" style={{
                background: `linear-gradient(135deg, #0d3060, ${BLUE})`
              }}>
                  <Package size={20} className="text-white" />
                  <h2 className="text-lg font-extrabold text-white">Carrier Information</h2>
                </div>
                <div className="p-7">
                  <p className="text-sm text-gray-600 mb-5">
                    Depending on the shipment, parcels may be transported by, transferred to, or delivered through established international or regional carrier networks, including:
                  </p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {shipping.carriers.map((c, i) => <span key={i} className="text-xs px-3 py-1.5 rounded-full font-medium" style={{
                    background: LIGHT,
                    color: NAVY,
                    border: '1px solid #E2E8F0'
                  }}>{c}</span>)}
                  </div>
                  <p className="text-xs text-gray-400 italic">
                    The availability of a carrier varies by route and order. Listing a carrier does not necessarily mean that Arseen Enterprises LLC has a direct contractual partnership with that carrier.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Tracking */}
            <Reveal delay={0.14}>
              <div className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 mb-8" style={{
              borderLeft: `4px solid ${ACCENT}`
            }}>
                <h2 className="text-base font-extrabold mb-3" style={{
                color: NAVY
              }}>Tracking Information</h2>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Tracking information is normally provided after the shipment has been accepted and processed by the applicable logistics provider. Tracking activation may take approximately 24–72 hours after dispatch. Some economy services provide milestone tracking rather than continuous scans. If a tracking number has not been received within 48 hours of the expected dispatch date, please contact us at{' '}
                  <a href="mailto:support@arseenenterprises.com" className="underline" style={{
                  color: BLUE
                }}>support@arseenenterprises.com</a>.
                </p>
              </div>
            </Reveal>

            {/* Customs */}
            <Reveal delay={0.16}>
              <div className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 mb-8" style={{
              borderLeft: `4px solid ${BLUE}`
            }}>
                <h2 className="text-base font-extrabold mb-3" style={{
                color: NAVY
              }}>Customs and Import Charges</h2>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">
                  Customers are responsible for reviewing the import requirements of their destination country. Unless expressly included in the written quotation, customs duties, import taxes, brokerage fees, remote-area charges, and government assessments are payable by the recipient.
                </p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Arseen Enterprises LLC may assist with reasonable shipment documentation but does not control customs authorities and cannot guarantee customs clearance.
                </p>
              </div>
            </Reveal>

            {/* Disclaimer */}
            <Reveal delay={0.18}>
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
                  <p className="text-sm leading-relaxed" style={{
                  color: '#7C2D12'
                }}>
                    All delivery periods are estimates rather than guarantees. Actual delivery may be affected by customs clearance, security inspections, carrier congestion, weather, public holidays, remote destinations, inaccurate address information, recipient unavailability, import restrictions, or events outside our reasonable control.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* CTA */}
            <Reveal delay={0.2}>
              <div className="rounded-2xl p-8 text-center" style={{
              background: `linear-gradient(135deg, ${NAVY}, #0d3060)`
            }}>
                <h3 className="text-xl font-extrabold text-white mb-2">Need a Shipping Estimate?</h3>
                <p className="text-sm mb-6" style={{
                color: 'rgba(255,255,255,0.6)'
              }}>
                  Request a custom quotation and we will provide specific processing and delivery estimates for your order.
                </p>
                <Link to="/pricing" className="inline-flex items-center gap-2 px-7 py-3.5 font-bold rounded-xl text-white" style={{
                background: ACCENT,
                boxShadow: '0 8px 24px rgba(14,165,233,0.35)'
              }}>
                  Request a Quote <ChevronRight size={16} />
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
    </>;
}
