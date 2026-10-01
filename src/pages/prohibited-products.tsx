import { prohibited_products } from 'virtual:content';
import { Helmet } from '@dr.pogodin/react-helmet';
import { Link } from "react-router";
import { ChevronRight, ShieldX, AlertTriangle } from 'lucide-react';
import { motion } from 'motion/react';
const NAVY = '#0A2540';
const BLUE = '#1A56DB';
const LIGHT = '#F1F5F9';
const site = 'https://arseenenterprises.com';
const url = `${site}/prohibited-products`;
const title = 'Prohibited and Restricted Products — Arseen Enterprises LLC';
const description = 'Products and categories that Arseen Enterprises LLC will not procure, fulfill, or ship under any circumstances.';
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
export default function ProhibitedProductsPage() {
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
            }}>Prohibited &amp; Restricted Products</span>
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
                <ShieldX size={22} className="text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">Prohibited and Restricted Products</h1>
            <p className="text-lg max-w-2xl" style={{
            color: 'rgba(255,255,255,0.62)'
          }}>
              Products and categories that Arseen Enterprises LLC will not procure, fulfill, or ship under any circumstances.
            </p>
          </div>
        </section>

        <section style={{
        background: LIGHT,
        padding: '4rem 0'
      }}>
          <div className="container mx-auto px-6 max-w-3xl">

            <Reveal>
              <div className="rounded-xl p-5 mb-8" style={{
              background: '#FEF2F2',
              border: '1px solid #FECACA'
            }}>
                <div className="flex items-start gap-3">
                  <AlertTriangle size={16} style={{
                  color: '#DC2626',
                  flexShrink: 0,
                  marginTop: 2
                }} />
                  <p className="text-sm leading-relaxed" style={{
                  color: '#7F1D1D'
                }}>
                    Arseen Enterprises LLC complies with all applicable US export control laws and regulations, including those administered by the US Department of Commerce (BIS), the US Department of State (DDTC), and the US Treasury Department (OFAC). We do not ship to countries, entities, or individuals subject to US trade sanctions or export embargoes.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 mb-8">
                <div className="px-7 py-5 flex items-center gap-3" style={{
                background: '#DC2626'
              }}>
                  <ShieldX size={20} className="text-white" />
                  <h2 className="text-lg font-extrabold text-white">Absolutely Prohibited</h2>
                </div>
                <div className="p-7">
                  <p className="text-sm text-gray-500 mb-5">The following items will not be accepted under any circumstances:</p>
                  <div className="space-y-3">
                    {prohibited_products.prohibited.map((item, i) => <div key={i} className="flex items-start gap-3 py-2.5" style={{
                    borderBottom: '1px solid #F1F5F9'
                  }}>
                        <ShieldX size={14} style={{
                      color: '#DC2626',
                      flexShrink: 0,
                      marginTop: 2
                    }} />
                        <span className="text-sm" style={{
                      color: '#374151'
                    }}>{item}</span>
                      </div>)}
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 mb-8">
                <div className="px-7 py-5 flex items-center gap-3" style={{
                background: '#D97706'
              }}>
                  <AlertTriangle size={20} className="text-white" />
                  <h2 className="text-lg font-extrabold text-white">Restricted Items</h2>
                </div>
                <div className="p-7">
                  <p className="text-sm text-gray-500 mb-5">{'Certain regulated or higher-risk categories are not automatically accepted. Acceptance depends on applicable law, destination requirements, carrier requirements, licensing, documentation, and applicable payment-provider approval. A request may be declined even if the underlying product is legal.'}</p>
                  <div className="space-y-3">
                    {prohibited_products.restricted.map((item, i) => <div key={i} className="flex items-start gap-3 py-2.5" style={{
                    borderBottom: '1px solid #F1F5F9'
                  }}>
                        <AlertTriangle size={14} style={{
                      color: '#D97706',
                      flexShrink: 0,
                      marginTop: 2
                    }} />
                        <span className="text-sm" style={{
                      color: '#374151'
                    }}>{item}</span>
                      </div>)}
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
              }}>Not Sure About Your Product?</h2>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  If you are unsure whether your product falls within a prohibited or restricted category, please contact us before placing an order. We will review your request and advise accordingly.
                </p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Arseen Enterprises LLC reserves the right to decline any procurement or fulfillment request that may violate applicable laws, intellectual property rights, carrier requirements, destination-country restrictions, payment-provider requirements, or our internal acceptance criteria. Procurement requests are subject to applicable laws, destination-country requirements, carrier requirements, and applicable payment-provider restrictions. We do not accept every procurement request.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white text-sm font-bold" style={{
                background: NAVY
              }}>
                  Contact Us <ChevronRight size={14} />
                </Link>
                <Link to="/acceptable-use" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold border-2" style={{
                borderColor: NAVY,
                color: NAVY
              }}>
                  Acceptable Use Policy <ChevronRight size={14} />
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
    </>;
}
