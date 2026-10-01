import { Helmet } from '@dr.pogodin/react-helmet';
import { Link } from "react-router";
import { shipping_policy } from 'virtual:content';
const NAVY = '#0A2540';
const BLUE = '#1A56DB';
const LIGHT = '#F1F5F9';
const BORDER = '#E2E8F0';
const site = 'https://arseenenterprises.com';
const url = `${site}/shipping-policy`;
const title = 'Shipping Policy — Arseen Enterprises LLC';
const description = 'Shipping Policy for Arseen Enterprises LLC. Learn how we handle order fulfillment, carrier selection, international shipping, customs, and claims.';
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
export default function ShippingPolicyPage() {
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
        padding: '64px 0 56px'
      }}>
          <div style={{
          maxWidth: 900,
          margin: '0 auto',
          padding: '0 24px'
        }}>
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            marginBottom: 20,
            fontSize: 13
          }}>
              <Link to="/" style={{
              color: 'rgba(255,255,255,0.65)',
              textDecoration: 'none',
              transition: 'color 0.15s'
            }} onMouseEnter={e => (e.target as HTMLAnchorElement).style.color = '#fff'} onMouseLeave={e => (e.target as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.65)'}>
                Home
              </Link>
              <span style={{
              color: 'rgba(255,255,255,0.35)',
              fontSize: 11
            }}>›</span>
              <span style={{
              color: 'rgba(255,255,255,0.85)'
            }}>Shipping Policy</span>
            </nav>

            {/* Heading */}
            <h1 style={{
            fontSize: 'clamp(28px, 5vw, 42px)',
            fontWeight: 800,
            color: '#ffffff',
            margin: '0 0 16px',
            lineHeight: 1.15,
            letterSpacing: '-0.5px'
          }}>
              {shipping_policy.heading}
            </h1>

            {/* Last Updated badge */}
            <span style={{
            display: 'inline-block',
            background: 'rgba(255,255,255,0.12)',
            border: '1px solid rgba(255,255,255,0.2)',
            color: 'rgba(255,255,255,0.85)',
            borderRadius: 20,
            padding: '4px 14px',
            fontSize: 13,
            fontWeight: 500
          }}>
              Last Updated: {shipping_policy.lastUpdated}
            </span>
          </div>
        </section>

        {/* ── Content ── */}
        <section style={{
        background: LIGHT,
        padding: '56px 0 80px'
      }}>
          <div style={{
          maxWidth: 900,
          margin: '0 auto',
          padding: '0 24px'
        }}>
            {/* Intro card */}
            <div style={{
            background: '#ffffff',
            border: `1px solid ${BORDER}`,
            borderRadius: 12,
            padding: '28px 32px',
            marginBottom: 32,
            boxShadow: '0 1px 4px rgba(10,37,64,0.06)'
          }}>
              <p style={{
              color: '#475569',
              lineHeight: 1.75,
              fontSize: 15,
              margin: 0
            }}>
                {shipping_policy.intro}
              </p>
            </div>

            {/* Section cards */}
            <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 20
          }}>
              {shipping_policy.sections.map((section, i) => <div key={i} style={{
              background: '#ffffff',
              border: `1px solid ${BORDER}`,
              borderLeft: `4px solid ${NAVY}`,
              borderRadius: 12,
              padding: '24px 28px',
              boxShadow: '0 1px 4px rgba(10,37,64,0.06)'
            }}>
                  <h2 style={{
                fontSize: 17,
                fontWeight: 700,
                color: NAVY,
                margin: '0 0 12px',
                lineHeight: 1.3
              }}>
                    {section.title}
                  </h2>
                  <p style={{
                color: '#475569',
                lineHeight: 1.75,
                fontSize: 15,
                margin: 0
              }}>
                    {section.body}
                  </p>
                </div>)}
            </div>

            {/* Footer note */}
            <div style={{
            marginTop: 40,
            padding: '20px 28px',
            background: `rgba(26,86,219,0.06)`,
            border: `1px solid rgba(26,86,219,0.18)`,
            borderRadius: 10,
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            flexWrap: 'wrap'
          }}>
              <p style={{
              color: '#334155',
              fontSize: 14,
              margin: 0,
              flex: 1,
              minWidth: 200
            }}>
                Have a question about a shipment or need to file a claim?
              </p>
              <a href="mailto:support@arseenenterprises.com" style={{
              display: 'inline-block',
              background: BLUE,
              color: '#ffffff',
              padding: '10px 22px',
              borderRadius: 8,
              fontSize: 14,
              fontWeight: 600,
              textDecoration: 'none',
              whiteSpace: 'nowrap',
              transition: 'opacity 0.15s'
            }} onMouseEnter={e => (e.target as HTMLAnchorElement).style.opacity = '0.85'} onMouseLeave={e => (e.target as HTMLAnchorElement).style.opacity = '1'}>
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </main>
    </>;
}
