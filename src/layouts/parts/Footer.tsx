import { Link } from "react-router";
import { Mail, MapPin, ArrowRight, ShieldCheck, Building2, Globe, Clock, Instagram } from 'lucide-react';
function FooterLogo() {
  return <div className="flex items-center gap-3 select-none mb-5">
      <div style={{
      width: 38,
      height: 38,
      borderRadius: 9,
      flexShrink: 0,
      background: 'rgba(255,255,255,0.08)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <circle cx="11" cy="11" r="8.5" stroke="#fff" strokeWidth="1.5" />
          <path d="M2.5 11 Q11 14.5 19.5 11" stroke="rgba(255,255,255,0.35)" strokeWidth="1" />
          <path d="M11 2.5 Q14.5 11 11 19.5" stroke="rgba(255,255,255,0.35)" strokeWidth="1" />
          <path d="M13 7 L16 7 L16 10" stroke="#0EA5E9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M16 7 L11.5 11.5" stroke="#0EA5E9" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      </div>
      <div>
        <div style={{
        fontFamily: 'Plus Jakarta Sans, sans-serif',
        fontWeight: 800,
        fontSize: '1rem',
        letterSpacing: '-0.025em',
        lineHeight: 1.1,
        color: '#ffffff'
      }}>
          Arseen Enterprises
        </div>
        <div style={{
        fontFamily: 'Inter, sans-serif',
        fontWeight: 600,
        fontSize: '0.58rem',
        letterSpacing: '0.14em',
        textTransform: 'uppercase' as const,
        color: '#0EA5E9',
        marginTop: 2
      }}>
          LLC · Procurement &amp; Fulfillment
        </div>
      </div>
    </div>;
}
const NAVY = '#0A2540';
const BLUE = '#1A56DB';
const ACCENT = '#0EA5E9';
export default function Footer() {
  const year = new Date().getFullYear();
  const trustSignals = [{
    icon: Building2,
    label: 'Wyoming LLC',
    sub: 'Legally Registered Entity'
  }, {
    icon: ShieldCheck,
    label: 'Legally Registered',
    sub: 'Federal EIN on File'
  }, {
    icon: Globe,
    label: 'International',
    sub: 'B2B & B2C Services'
  }, {
    icon: Clock,
    label: '1–2 Business Days',
    sub: 'Support Response Time'
  }];
  const legalLinks = [{
    href: '/privacy',
    label: 'Privacy Policy'
  }, {
    href: '/terms',
    label: 'Terms of Service'
  }, {
    href: '/refund-policy',
    label: 'Refund, Return & Replacement'
  }, {
    href: '/acceptable-use',
    label: 'Acceptable Use'
  }, {
    href: '/shipping-policy',
    label: 'Shipping Policy'
  }, {
    href: '/cancellation-policy',
    label: 'Cancellation Policy'
  }, {
    href: '/billing-policy',
    label: 'Billing Policy'
  }, {
    href: '/prohibited-products',
    label: 'Prohibited Products'
  }];
  return <footer style={{
    background: NAVY
  }}>
      {/* Accent top border */}
      <div style={{
      height: 3,
      background: `linear-gradient(90deg, transparent, ${ACCENT} 30%, ${ACCENT} 70%, transparent)`
    }} />

      {/* Trust / compliance badge strip */}
      <div style={{
      background: 'rgba(0,0,0,0.2)',
      borderBottom: '1px solid rgba(255,255,255,0.06)'
    }}>
        <div className="container mx-auto px-6 py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {trustSignals.map(({
            icon: Icon,
            label,
            sub
          }) => <div key={label} className="flex items-center gap-3">
                <div style={{
              width: 34,
              height: 34,
              borderRadius: 8,
              background: 'rgba(14,165,233,0.12)',
              border: '1px solid rgba(14,165,233,0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
                  <Icon size={15} style={{
                color: ACCENT
              }} />
                </div>
                <div>
                  <p style={{
                color: '#fff',
                fontSize: '0.75rem',
                fontWeight: 700,
                lineHeight: 1.2
              }}>{label}</p>
                  <p style={{
                color: 'rgba(255,255,255,0.4)',
                fontSize: '0.65rem',
                lineHeight: 1.2
              }}>{sub}</p>
                </div>
              </div>)}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">

          {/* Brand column */}
          <div className="md:col-span-4">
            <FooterLogo />
            <p className="text-sm leading-relaxed mb-1" style={{
            color: 'rgba(255,255,255,0.55)'
          }}>
              Wyoming Limited Liability Company
            </p>
            <p className="text-sm mb-2" style={{
            color: 'rgba(255,255,255,0.55)'
          }}>
              International Procurement &amp; Fulfillment — B2B &amp; B2C
            </p>
            {/* Entity verification block */}
            <div className="mt-4 mb-6 rounded-lg p-3" style={{
            background: 'rgba(14,165,233,0.07)',
            border: '1px solid rgba(14,165,233,0.15)'
          }}>
              <p className="text-xs font-bold mb-2" style={{
              color: ACCENT
            }}>Entity Verification</p>
              <p className="text-xs leading-relaxed mb-2" style={{
              color: 'rgba(255,255,255,0.45)'
            }}>
                Arseen Enterprises LLC is a legally organized Wyoming limited liability company. Its US office address is 15 Tanguay Ave, Suite 112 #7C, Nashua, NH 03063, United States.
              </p>
              <p className="text-xs" style={{
              color: 'rgba(255,255,255,0.35)'
            }}>
                Wyoming Entity ID: 2026-002008340 · Federal EIN on File
              </p>
            </div>
            <Link to="/contact" className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold rounded-lg text-white transition-all hover:brightness-110" style={{
            background: BLUE
          }}>
              Get in Touch <ArrowRight size={14} />
            </Link>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h3 className="text-xs font-extrabold uppercase tracking-widest mb-5" style={{
            color: ACCENT
          }}>
              Quick Links
            </h3>
            <nav className="flex flex-col gap-3" aria-label="Footer quick links">
              {[{
              href: '/',
              label: 'Home'
            }, {
              href: '/about',
              label: 'About Us'
            }, {
              href: '/services',
              label: 'Services'
            }, {
              href: '/how-it-works',
              label: 'How It Works'
            }, {
              href: '/pricing',
              label: 'Pricing & Quotes'
            }, {
              href: '/shipping',
              label: 'Shipping & Delivery'
            }, {
              href: '/tracking',
              label: 'Tracking Information'
            }, {
              href: '/proof-of-delivery',
              label: 'Proof of Delivery'
            }, {
              href: '/company-info',
              label: 'Company Information'
            }, {
              href: '/contact',
              label: 'Contact Us'
            }].map(item => <Link key={item.href} to={item.href} className="text-sm transition-colors hover:underline" style={{
              color: 'rgba(255,255,255,0.55)'
            }} onMouseEnter={e => {
              (e.currentTarget as HTMLAnchorElement).style.color = '#fff';
            }} onMouseLeave={e => {
              (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.55)';
            }}>
                  {item.label}
                </Link>)}
            </nav>
          </div>

          {/* Contact & Legal */}
          <div className="md:col-span-5">
            <h3 className="text-xs font-extrabold uppercase tracking-widest mb-5" style={{
            color: ACCENT
          }}>
              Contact
            </h3>
            <div className="space-y-3 mb-8">
              <div className="flex items-start gap-3">
                <MapPin size={15} className="mt-0.5 flex-shrink-0" style={{
                color: ACCENT
              }} />
                <div className="text-sm leading-relaxed" style={{
                color: 'rgba(255,255,255,0.55)'
              }}>
                  <p className="font-semibold text-xs mb-1" style={{
                  color: 'rgba(255,255,255,0.7)'
                }}>US Office Address:</p>
                  <p>15 Tanguay Ave, Suite 112 #7C<br />Nashua, NH 03063, USA</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={15} className="flex-shrink-0" style={{
                color: ACCENT
              }} />
                <a href="mailto:support@arseenenterprises.com" className="text-sm transition-colors hover:underline" style={{
                color: 'rgba(255,255,255,0.55)'
              }} onMouseEnter={e => {
                (e.currentTarget as HTMLAnchorElement).style.color = '#fff';
              }} onMouseLeave={e => {
                (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.55)';
              }}>
                  support@arseenenterprises.com
                </a>
              </div>
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center gap-3">
                  <Instagram size={15} className="flex-shrink-0" style={{
                  color: ACCENT
                }} />
                  <a href="https://www.instagram.com/arseenenterprises" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold transition-colors hover:underline" style={{
                  color: 'rgba(255,255,255,0.55)'
                }} onMouseEnter={e => {
                  (e.currentTarget as HTMLAnchorElement).style.color = '#fff';
                }} onMouseLeave={e => {
                  (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.55)';
                }}>
                    @arseenenterprises
                  </a>
                </div>
                <p className="text-xs pl-6" style={{
                color: 'rgba(255,255,255,0.35)'
              }}>
                  Browse our Customized Diamond Simulants Jewelry Collection — or contact us via Instagram for custom jewelry inquiries.
                </p>
              </div>
              <p className="text-xs pl-6" style={{
              color: 'rgba(255,255,255,0.3)'
            }}>Customer-support inquiries are normally answered within 1–2 business days.</p>
            </div>

            <h3 className="text-xs font-extrabold uppercase tracking-widest mb-3" style={{
            color: ACCENT
          }}>Legal &amp; Policies</h3>
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              {legalLinks.map(item => <Link key={item.href} to={item.href} className="text-xs transition-colors hover:underline" style={{
              color: 'rgba(255,255,255,0.45)'
            }} onMouseEnter={e => {
              (e.currentTarget as HTMLAnchorElement).style.color = '#fff';
            }} onMouseLeave={e => {
              (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.45)';
            }}>
                  {item.label}
                </Link>)}
            </div>
          </div>
        </div>

        {/* Bottom compliance bar */}
        <div className="mt-14 pt-6" style={{
        borderTop: '1px solid rgba(255,255,255,0.08)'
      }}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs" style={{
            color: 'rgba(255,255,255,0.35)'
          }}>
              © {year} Arseen Enterprises LLC. All Rights Reserved.
            </p>
            {/* Payment processor compliance statement */}
            <p className="text-xs text-center md:text-right max-w-md" style={{
            color: 'rgba(255,255,255,0.22)'
          }}>
              We maintain transparent business, billing, shipping, refund, privacy, and customer-support practices designed to support secure international commerce. Wyoming LLC · Federal EIN on File · Established 2026.
            </p>
          </div>
        </div>
      </div>
    </footer>;
}
