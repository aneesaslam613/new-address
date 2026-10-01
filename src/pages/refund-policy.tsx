import { Helmet } from '@dr.pogodin/react-helmet';
import { Link } from "react-router";
import { ChevronRight, RefreshCw } from 'lucide-react';
import { refund_policy } from 'virtual:content';
const NAVY = '#0A2540';
const LIGHT = '#F1F5F9';
const site = 'https://arseenenterprises.com';
const url = `${site}/refund-policy`;
const title = 'Refund Policy — Arseen Enterprises LLC';
const description = 'Refund Policy for Arseen Enterprises LLC. Refund requests reviewed within 10 business days. Processing time 5–10 business days.';
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
export default function RefundPolicyPage() {
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
        {/* Hero */}
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
            }}>Refund Policy</span>
            </nav>
            <div className="flex items-center gap-3 mb-4">
              <div style={{
              width: 40,
              height: 40,
              borderRadius: 10,
              background: 'rgba(255,255,255,0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
                <RefreshCw size={20} className="text-white" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full" style={{
              background: 'rgba(14,165,233,0.15)',
              color: '#0EA5E9',
              border: '1px solid rgba(14,165,233,0.3)'
            }}>
                Last Updated: {refund_policy.lastUpdated}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">{refund_policy.heading}</h1>
          </div>
        </section>

        {/* Content */}
        <section style={{
        background: LIGHT,
        padding: '4rem 0'
      }}>
          <div className="container mx-auto px-6 max-w-3xl">
            <div className="space-y-4">
              {refund_policy.paragraphs.map((para, i) => <div key={i} className="bg-white rounded-xl p-6" style={{
              borderLeft: `4px solid ${NAVY}`,
              boxShadow: '0 1px 4px rgba(0,0,0,0.05)'
            }}>
                  <p style={{
                color: '#374151',
                lineHeight: 1.75,
                fontSize: '0.95rem'
              }}>{para}</p>
                </div>)}
            </div>
            <div className="mt-10 text-center">
              <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white text-sm font-bold transition-all hover:brightness-110" style={{
              background: NAVY
            }}>
                {refund_policy.ctaButton}
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>;
}
