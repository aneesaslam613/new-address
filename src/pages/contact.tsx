import { Helmet } from '@dr.pogodin/react-helmet';
import { Link } from "react-router";
import { Mail, MapPin, Clock, Building2, Globe, Shield, Package, ChevronRight, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { contact } from 'virtual:content';
const NAVY = '#0A2540';
const BLUE = '#1A56DB';
const ACCENT = '#0EA5E9';
const LIGHT = '#F1F5F9';
const site = 'https://arseenenterprises.com';
const url = `${site}/contact`;
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  '@id': `${url}#webpage`,
  name: 'Contact — Arseen Enterprises LLC',
  url,
  isPartOf: {
    '@id': `${site}/#website`
  },
  about: {
    '@id': `${site}/#organization`
  }
};
const inquiryTypesMeta = [{
  icon: Package
}, {
  icon: Globe
}, {
  icon: Mail
}];
export default function ContactPage() {
  return <>
      <Helmet>
        <title>Contact — Arseen Enterprises LLC</title>
        <meta name="description" content="Contact Arseen Enterprises LLC for procurement requests, fulfillment inquiries, and custom quotations. Response time: 1–2 business days." />
        <link rel="canonical" href={url} />
        <meta property="og:title" content="Contact Arseen Enterprises LLC" />
        <meta property="og:description" content="Get in touch for fulfillment service requests and business inquiries." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={`${site}/og-image.svg`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Arseen Enterprises LLC" />
        <meta name="twitter:description" content="Get in touch for fulfillment service requests and business inquiries." />
        <meta name="twitter:image" content={`${site}/og-image.svg`} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <main>

        {/* ─── HERO ─── */}
        <section className="relative overflow-hidden py-20" style={{
        background: NAVY
      }}>
          <div className="absolute inset-0 pointer-events-none" style={{
          background: `linear-gradient(135deg, ${NAVY} 0%, #0A3D6B 60%, ${BLUE} 100%)`
        }} />
          <div className="absolute -right-40 -top-40 w-96 h-96 rounded-full pointer-events-none" style={{
          background: `radial-gradient(circle, rgba(14,165,233,0.1) 0%, transparent 70%)`
        }} />

          <div className="relative container mx-auto px-6">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-xs mb-8" aria-label="Breadcrumb" style={{
            color: 'rgba(255,255,255,0.45)'
          }}>
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight size={12} />
              <span style={{
              color: 'rgba(255,255,255,0.7)'
            }}>Contact</span>
            </nav>

            <motion.div initial={{
            opacity: 0,
            y: 20
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
                Get In Touch
              </span>
              <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
                {contact.heading}
              </h1>
              <p className="text-lg max-w-xl" style={{
              color: 'rgba(255,255,255,0.6)'
            }}>
                {contact.subheading}
              </p>
            </motion.div>
          </div>
        </section>

        {/* ─── MAIN CONTACT SECTION ─── */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

              {/* LEFT — Main contact card (wider) */}
              <motion.div initial={{
              opacity: 0,
              x: -20
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.5,
              ease: 'easeOut' as const
            }} className="lg:col-span-3 rounded-2xl overflow-hidden shadow-xl border border-gray-100">

                {/* Card header */}
                <div className="px-8 py-6 flex items-center justify-between" style={{
                background: NAVY
              }}>
                  <div>
                    <p className="text-white font-extrabold text-lg">{contact.companyName}</p>
                    <p className="text-xs mt-0.5" style={{
                    color: 'rgba(255,255,255,0.5)'
                  }}>Wyoming Registered LLC · Nashua, NH</p>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-bold" style={{
                  background: 'rgba(16,185,129,0.2)',
                  color: '#4ade80'
                }}>
                    Active
                  </span>
                </div>

                {/* Accent bar */}
                <div className="h-1" style={{
                background: `linear-gradient(90deg, ${ACCENT}, ${BLUE})`
              }} />

                {/* Card body */}
                <div className="px-8 py-8 bg-white">
                  <div className="space-y-6">

                    {/* Address */}
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{
                      background: LIGHT
                    }}>
                        <MapPin size={18} style={{
                        color: NAVY
                      }} />
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{
                        color: ACCENT
                      }}>Address</p>
                        <p className="text-sm font-semibold" style={{
                        color: NAVY
                      }}>15 Tanguay Ave, Suite 112 #7C</p>
                        <p className="text-sm text-gray-500">Nashua, NH 03063, United States</p>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{
                      background: LIGHT
                    }}>
                        <Mail size={18} style={{
                        color: NAVY
                      }} />
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{
                        color: ACCENT
                      }}>Email</p>
                        <a href={`mailto:${contact.email}`} className="text-sm font-semibold transition-colors hover:underline" style={{
                        color: BLUE
                      }}>
                          <span>{contact.email}</span>
                        </a>
                        <p className="text-xs text-gray-400 mt-0.5">Primary business contact</p>
                      </div>
                    </div>

                    {/* Response time */}
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{
                      background: LIGHT
                    }}>
                        <Clock size={18} style={{
                        color: NAVY
                      }} />
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{
                        color: ACCENT
                      }}>Response Time</p>
                        <p className="text-sm font-semibold" style={{
                        color: NAVY
                      }}>{contact.responseTime}</p>
                        <p className="text-xs text-gray-400 mt-0.5">Monday – Friday, business hours</p>
                      </div>
                    </div>

                    {/* Entity type */}
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{
                      background: LIGHT
                    }}>
                        <Building2 size={18} style={{
                        color: NAVY
                      }} />
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{
                        color: ACCENT
                      }}>Entity Type</p>
                        <p className="text-sm font-semibold" style={{
                        color: NAVY
                      }}>Limited Liability Company (LLC)</p>
                        <p className="text-xs text-gray-400 mt-0.5">Registered — State of Wyoming, USA</p>
                      </div>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="my-8 border-t border-gray-100" />

                  {/* Inquiries block */}
                  <div className="mb-6">
                    <h2 className="font-bold text-base mb-2" style={{
                    color: NAVY
                  }}>{contact.inquiriesHeading}</h2>
                    <p className="text-sm text-gray-500 leading-relaxed">{contact.inquiriesBody}</p>
                  </div>

                  <a href={`mailto:${contact.email}`} className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-white transition-all hover:brightness-110 hover:scale-[1.02] shadow-lg" style={{
                  background: ACCENT,
                  boxShadow: '0 6px 20px rgba(14,165,233,0.3)'
                }}>
                    <Mail size={15} />
                    <span>{contact.emailButtonLabel}</span>
                  </a>
                </div>
              </motion.div>

              {/* RIGHT — Info cards */}
              <div className="lg:col-span-2 flex flex-col gap-5">

                {/* Business Hours */}
                <motion.div initial={{
                opacity: 0,
                x: 20
              }} whileInView={{
                opacity: 1,
                x: 0
              }} viewport={{
                once: true
              }} transition={{
                duration: 0.4,
                delay: 0.05,
                ease: 'easeOut' as const
              }} className="rounded-2xl border border-gray-100 p-6 shadow-sm bg-white">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{
                    background: `linear-gradient(135deg, ${NAVY}, ${BLUE})`
                  }}>
                      <Clock size={17} className="text-white" />
                    </div>
                    <h3 className="font-bold text-sm" style={{
                    color: NAVY
                  }}>Business Hours</h3>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Monday – Friday</span>
                      <span className="font-semibold" style={{
                      color: NAVY
                    }}>9:00 AM – 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Saturday – Sunday</span>
                      <span className="font-semibold text-gray-400">Closed</span>
                    </div>
                    <div className="mt-3 pt-3 border-t border-gray-100">
                      <p className="text-xs text-gray-400">Email responses within {contact.responseTime}</p>
                    </div>
                  </div>
                </motion.div>

                {/* Service Area */}
                <motion.div initial={{
                opacity: 0,
                x: 20
              }} whileInView={{
                opacity: 1,
                x: 0
              }} viewport={{
                once: true
              }} transition={{
                duration: 0.4,
                delay: 0.1,
                ease: 'easeOut' as const
              }} className="rounded-2xl border border-gray-100 p-6 shadow-sm bg-white">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{
                    background: `linear-gradient(135deg, ${NAVY}, ${BLUE})`
                  }}>
                      <Globe size={17} className="text-white" />
                    </div>
                    <h3 className="font-bold text-sm" style={{
                    color: NAVY
                  }}>Service Area</h3>
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    International — we coordinate customer-specific product procurement, order fulfillment, and shipment support for business clients and selected individual customers.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {['North America', 'Europe', 'Middle East', 'Asia Pacific'].map(r => <span key={r} className="text-xs px-2.5 py-1 rounded-full font-semibold" style={{
                    background: LIGHT,
                    color: NAVY
                  }}>{r}</span>)}
                  </div>
                </motion.div>

                {/* Entity Status */}
                <motion.div initial={{
                opacity: 0,
                x: 20
              }} whileInView={{
                opacity: 1,
                x: 0
              }} viewport={{
                once: true
              }} transition={{
                duration: 0.4,
                delay: 0.15,
                ease: 'easeOut' as const
              }} className="rounded-2xl border border-gray-100 p-6 shadow-sm bg-white">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{
                    background: `linear-gradient(135deg, ${NAVY}, ${BLUE})`
                  }}>
                      <Shield size={17} className="text-white" />
                    </div>
                    <h3 className="font-bold text-sm" style={{
                    color: NAVY
                  }}>Entity Status</h3>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-500">Status</span>
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-bold" style={{
                      background: 'rgba(16,185,129,0.1)',
                      color: '#059669'
                    }}>Active</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Type</span>
                      <span className="font-semibold" style={{
                      color: NAVY
                    }}>LLC</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">State</span>
                      <span className="font-semibold" style={{
                      color: NAVY
                    }}>Wyoming, USA</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── INQUIRY TYPES ─── */}
        <section className="py-16" style={{
        background: LIGHT
      }}>
          <div className="container mx-auto px-6">
            <div className="text-center mb-10">
              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="w-8 h-0.5 rounded" style={{
                background: ACCENT
              }} />
                <span className="text-xs font-bold uppercase tracking-widest" style={{
                color: ACCENT
              }}>How We Can Help</span>
                <div className="w-8 h-0.5 rounded" style={{
                background: ACCENT
              }} />
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight" style={{
              color: NAVY
            }}>
                Types of Inquiries We Handle
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {contact.inquiryTypes.map((item, i) => {
              const Icon = inquiryTypesMeta[i].icon;
              return <motion.div key={item.title} initial={{
                opacity: 0,
                y: 16
              }} whileInView={{
                opacity: 1,
                y: 0
              }} viewport={{
                once: true
              }} transition={{
                duration: 0.4,
                delay: i * 0.08,
                ease: 'easeOut' as const
              }} className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 text-center">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5" style={{
                  background: `linear-gradient(135deg, ${NAVY}, ${BLUE})`
                }}>
                      <Icon size={22} className="text-white" />
                    </div>
                    <h3 className="font-bold text-base mb-2" style={{
                  color: NAVY
                }}>{item.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                  </motion.div>;
            })}
            </div>
          </div>
        </section>

        {/* ─── COMPLIANCE NOTE ─── */}
        <section className="py-10 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto flex items-start gap-4 rounded-2xl p-6" style={{
            background: LIGHT,
            border: '1px solid #DDE3EE'
          }}>
              <Shield size={20} className="flex-shrink-0 mt-0.5" style={{
              color: NAVY
            }} />
              <div>
                <p className="text-sm font-bold mb-1" style={{
                color: NAVY
              }}>Business Compliance Statement</p>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Arseen Enterprises LLC is a registered Wyoming Limited Liability Company. All business communications are handled professionally and confidentially. Arseen Enterprises LLC conducts its operations subject to applicable legal, customs, sanctions, export-control, carrier, destination-country, and payment-provider requirements. Orders may be declined where applicable compliance requirements cannot be satisfied.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── CTA ─── */}
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
          }} className="rounded-3xl p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8" style={{
            background: `linear-gradient(120deg, ${NAVY} 0%, #0A4080 60%, ${BLUE} 100%)`
          }}>
              <div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight mb-3">
                  Ready to Start a Conversation?
                </h2>
                <p className="text-base" style={{
                color: 'rgba(255,255,255,0.6)'
              }}>
                  Email us directly and our team will respond within 1–2 business days.
                </p>
              </div>
              <div className="flex flex-col items-center gap-3 flex-shrink-0">
                <a href={`mailto:${contact.email}`} className="inline-flex items-center gap-2 px-8 py-4 font-extrabold rounded-xl text-white transition-all hover:brightness-110 hover:scale-[1.02] whitespace-nowrap shadow-xl" style={{
                background: ACCENT,
                boxShadow: '0 10px 30px rgba(14,165,233,0.4)'
              }}>
                  <Mail size={16} /> Send an Email
                </a>
                <Link to="/services" className="text-xs font-semibold flex items-center gap-1 transition-colors hover:underline" style={{
                color: 'rgba(255,255,255,0.5)'
              }}>
                  View our services <ArrowRight size={11} />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

      </main>
    </>;
}
