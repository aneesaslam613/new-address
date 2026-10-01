import { Helmet } from '@dr.pogodin/react-helmet';
import { Link } from "react-router";
import { acceptable_use } from 'virtual:content';
const NAVY = '#0A2540';
const BLUE = '#1A56DB';
const LIGHT = '#F1F5F9';
const BORDER = '#E2E8F0';
const site = 'https://arseenenterprises.com';
const url = `${site}/acceptable-use`;
const title = 'Acceptable Use Policy — Arseen Enterprises LLC';
const description = 'Acceptable Use Policy for Arseen Enterprises LLC. Governs permitted and prohibited uses of our product procurement and order fulfillment services.';
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
export default function AcceptableUsePage() {
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
        backgroundColor: NAVY,
        padding: '4rem 0 3rem'
      }}>
          <div style={{
          maxWidth: '860px',
          margin: '0 auto',
          padding: '0 1.5rem'
        }}>
            {/* Breadcrumb */}
            <nav style={{
            marginBottom: '1.25rem'
          }} aria-label="Breadcrumb">
              <ol style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              listStyle: 'none',
              margin: 0,
              padding: 0
            }}>
                <li>
                  <Link to="/" style={{
                  color: 'rgba(255,255,255,0.6)',
                  fontSize: '0.875rem',
                  textDecoration: 'none'
                }}>
                    Home
                  </Link>
                </li>
                <li style={{
                color: 'rgba(255,255,255,0.4)',
                fontSize: '0.875rem'
              }}>›</li>
                <li style={{
                color: 'rgba(255,255,255,0.9)',
                fontSize: '0.875rem'
              }}>
                  Acceptable Use Policy
                </li>
              </ol>
            </nav>

            {/* Last Updated Badge */}
            <div style={{
            marginBottom: '1rem'
          }}>
              <span style={{
              display: 'inline-block',
              backgroundColor: 'rgba(26,86,219,0.25)',
              color: '#93C5FD',
              border: '1px solid rgba(26,86,219,0.5)',
              borderRadius: '9999px',
              padding: '0.25rem 0.875rem',
              fontSize: '0.8125rem',
              fontWeight: 500,
              letterSpacing: '0.02em'
            }}>
                Last Updated: {acceptable_use.lastUpdated}
              </span>
            </div>

            <h1 style={{
            color: '#ffffff',
            fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
            fontWeight: 800,
            lineHeight: 1.15,
            margin: '0 0 1.25rem'
          }}>
              {acceptable_use.heading}
            </h1>

            <p style={{
            color: 'rgba(255,255,255,0.72)',
            fontSize: '1.0625rem',
            lineHeight: 1.7,
            maxWidth: '680px',
            margin: 0
          }}>
              {acceptable_use.intro}
            </p>
          </div>
        </section>

        {/* Content */}
        <section style={{
        backgroundColor: LIGHT,
        padding: '3.5rem 0 4rem'
      }}>
          <div style={{
          maxWidth: '860px',
          margin: '0 auto',
          padding: '0 1.5rem'
        }}>

            {/* Sections */}
            <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem'
          }}>
              {acceptable_use.sections.map((section, index) => <article key={index} style={{
              backgroundColor: '#ffffff',
              border: `1px solid ${BORDER}`,
              borderLeft: `4px solid ${NAVY}`,
              borderRadius: '0.5rem',
              padding: '1.75rem 2rem',
              boxShadow: '0 1px 3px rgba(10,37,64,0.06)'
            }}>
                  <h2 style={{
                color: NAVY,
                fontSize: '1.125rem',
                fontWeight: 700,
                marginTop: 0,
                marginBottom: '0.875rem',
                letterSpacing: '-0.01em'
              }}>
                    {index + 1}. {section.title}
                  </h2>
                  <div>
                    {section.body.split('\n\n').map((paragraph, pIndex) => <p key={pIndex} style={{
                  color: '#475569',
                  fontSize: '0.9375rem',
                  lineHeight: 1.75,
                  margin: pIndex < section.body.split('\n\n').length - 1 ? '0 0 0.875rem' : 0
                }}>
                        {paragraph}
                      </p>)}
                  </div>
                </article>)}
            </div>

            {/* Contact CTA */}
            <div style={{
            marginTop: '2.5rem',
            backgroundColor: '#ffffff',
            border: `1px solid ${BORDER}`,
            borderRadius: '0.5rem',
            padding: '2rem',
            textAlign: 'center'
          }}>
              <p style={{
              color: NAVY,
              fontWeight: 600,
              fontSize: '1rem',
              marginTop: 0,
              marginBottom: '0.5rem'
            }}>
                Questions about this policy?
              </p>
              <p style={{
              color: '#64748B',
              fontSize: '0.9375rem',
              marginTop: 0,
              marginBottom: '1.25rem'
            }}>
                Our team is available to clarify any aspect of this Acceptable Use Policy.
              </p>
              <Link to="/contact" style={{
              display: 'inline-block',
              backgroundColor: BLUE,
              color: '#ffffff',
              fontWeight: 600,
              fontSize: '0.9375rem',
              padding: '0.75rem 1.75rem',
              borderRadius: '0.375rem',
              textDecoration: 'none',
              letterSpacing: '0.01em'
            }}>
                Contact Us
              </Link>
              <p style={{
              color: '#94A3B8',
              fontSize: '0.8125rem',
              marginTop: '1rem',
              marginBottom: 0
            }}>
                Arseen Enterprises LLC · US Office Address: 15 Tanguay Ave, Suite 112 #7C, Nashua, NH 03063 ·{' '}
                <a href="mailto:support@arseenenterprises.com" style={{
                color: BLUE,
                textDecoration: 'none'
              }}>
                  support@arseenenterprises.com
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>
    </>;
}
