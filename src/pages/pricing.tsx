import { Helmet } from '@dr.pogodin/react-helmet';
import { Link } from "react-router";
import { useState } from 'react';
import { ChevronRight, DollarSign, Building2, User, ArrowRight, CheckCircle, AlertCircle, Send } from 'lucide-react';
import { motion } from 'motion/react';
import { pricing } from 'virtual:content';
const NAVY = '#0A2540';
const BLUE = '#1A56DB';
const ACCENT = '#0EA5E9';
const LIGHT = '#F1F5F9';
const site = 'https://arseenenterprises.com';
const url = `${site}/pricing`;
const title = 'Pricing & Custom Quotations — Arseen Enterprises LLC';
const description = 'Estimated service fee ranges for international procurement, fulfillment, and logistics. Every order receives a written quotation before payment.';
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
type FormData = {
  name: string;
  email: string;
  customerType: 'Business' | 'Individual' | '';
  productDescription: string;
  quantity: string;
  destinationCountry: string;
  postalCode: string;
  estimatedWeight: string;
  shippingSpeed: string;
  additionalInstructions: string;
};
export default function PricingPage() {
  const [form, setForm] = useState<FormData>({
    name: '',
    email: '',
    customerType: '',
    productDescription: '',
    quantity: '',
    destinationCountry: '',
    postalCode: '',
    estimatedWeight: '',
    shippingSpeed: '',
    additionalInstructions: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [agreed, setAgreed] = useState(false);
  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  }
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!agreed) return;
    const subject = encodeURIComponent(`Quote Request — ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\nCustomer Type: ${form.customerType}\n\nProduct Description:\n${form.productDescription}\n\nQuantity: ${form.quantity}\nDestination Country: ${form.destinationCountry}\nPostal Code: ${form.postalCode}\nEstimated Weight: ${form.estimatedWeight}\nPreferred Shipping Speed: ${form.shippingSpeed}\n\nAdditional Instructions:\n${form.additionalInstructions}`);
    window.location.href = `mailto:support@arseenenterprises.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }
  const inputClass = 'w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all focus:ring-2';
  const inputStyle = {
    borderColor: '#E2E8F0',
    color: NAVY
  };
  const inputFocusStyle = {
    '--tw-ring-color': ACCENT
  } as React.CSSProperties;
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
            }}>Pricing &amp; Quotes</span>
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
                <DollarSign size={22} className="text-white" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full" style={{
              background: 'rgba(14,165,233,0.15)',
              color: ACCENT,
              border: '1px solid rgba(14,165,233,0.3)'
            }}>
                Written Quotation Before Payment
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">{pricing.hero.title}</h1>
            <p className="text-lg max-w-2xl" style={{
            color: 'rgba(255,255,255,0.62)'
          }}>{pricing.hero.subtitle}</p>
          </div>
        </section>

        {/* ── Important Notice ── */}
        <section style={{
        background: '#FFF7ED',
        borderBottom: '1px solid #FED7AA'
      }}>
          <div className="container mx-auto px-6 py-5">
            <div className="flex items-start gap-3">
              <AlertCircle size={18} style={{
              color: '#EA580C',
              flexShrink: 0,
              marginTop: 2
            }} />
              <p className="text-sm leading-relaxed" style={{
              color: '#7C2D12'
            }}>
                <strong>Important:</strong> {pricing.notice}
              </p>
            </div>
          </div>
        </section>

        {/* ── Pricing Tables ── */}
        <section style={{
        background: LIGHT,
        padding: '4rem 0'
      }}>
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">

              {/* Individual */}
              <Reveal>
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
                  <div className="px-7 py-5 flex items-center gap-3" style={{
                  background: `linear-gradient(135deg, ${NAVY}, #0d3060)`
                }}>
                    <div style={{
                    width: 36,
                    height: 36,
                    borderRadius: 9,
                    background: 'rgba(255,255,255,0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                      <User size={18} className="text-white" />
                    </div>
                    <h2 className="text-lg font-extrabold text-white">{pricing.individualTitle}</h2>
                  </div>
                  <div className="p-7">
                    <div className="space-y-3">
                      {pricing.individualItems.map(item => <div key={item.id} className="flex items-start justify-between gap-4 py-3" style={{
                      borderBottom: '1px solid #F1F5F9'
                    }}>
                          <div className="flex items-start gap-2">
                            <CheckCircle size={15} style={{
                          color: ACCENT,
                          flexShrink: 0,
                          marginTop: 2
                        }} />
                            <span className="text-sm" style={{
                          color: '#374151'
                        }}>{item.service}</span>
                          </div>
                          <span className="text-sm font-bold whitespace-nowrap" style={{
                        color: NAVY
                      }}>{item.range}</span>
                        </div>)}
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* Business */}
              <Reveal delay={0.1}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
                  <div className="px-7 py-5 flex items-center gap-3" style={{
                  background: `linear-gradient(135deg, ${BLUE}, #1244b0)`
                }}>
                    <div style={{
                    width: 36,
                    height: 36,
                    borderRadius: 9,
                    background: 'rgba(255,255,255,0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                      <Building2 size={18} className="text-white" />
                    </div>
                    <h2 className="text-lg font-extrabold text-white">{pricing.businessTitle}</h2>
                  </div>
                  <div className="p-7">
                    <div className="space-y-3">
                      {pricing.businessItems.map(item => <div key={item.id} className="flex items-start justify-between gap-4 py-3" style={{
                      borderBottom: '1px solid #F1F5F9'
                    }}>
                          <div className="flex items-start gap-2">
                            <CheckCircle size={15} style={{
                          color: BLUE,
                          flexShrink: 0,
                          marginTop: 2
                        }} />
                            <span className="text-sm" style={{
                          color: '#374151'
                        }}>{item.service}</span>
                          </div>
                          <span className="text-sm font-bold whitespace-nowrap" style={{
                        color: NAVY
                      }}>{item.range}</span>
                        </div>)}
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Pricing factors */}
            <Reveal delay={0.15}>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mb-12">
                <h3 className="text-base font-extrabold mb-5" style={{
                color: NAVY
              }}>{pricing.factorsTitle}:</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {pricing.factors.map(f => <div key={f.id} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{
                    background: ACCENT
                  }} />
                      <span className="text-sm" style={{
                    color: '#4B5563'
                  }}>{f.text}</span>
                    </div>)}
                </div>
              </div>
            </Reveal>

            {/* Quote Form */}
            <Reveal delay={0.2}>
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
                <div className="px-8 py-6" style={{
                background: `linear-gradient(135deg, ${NAVY}, #0d3060)`
              }}>
                  <h2 className="text-2xl font-extrabold text-white mb-1">{pricing.formTitle}</h2>
                  <p style={{
                  color: 'rgba(255,255,255,0.6)',
                  fontSize: '0.9rem'
                }}>{pricing.formSubtitle}</p>
                </div>

                {submitted ? <div className="p-10 text-center">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{
                  background: 'rgba(14,165,233,0.1)'
                }}>
                      <CheckCircle size={32} style={{
                    color: ACCENT
                  }} />
                    </div>
                    <h3 className="text-xl font-extrabold mb-2" style={{
                  color: NAVY
                }}>Quote Request Sent</h3>
                    <p className="text-sm text-gray-500 mb-6">Your email client has opened with the pre-filled request. We will respond within 1–2 business days with a written quotation.</p>
                    <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white text-sm font-bold" style={{
                  background: NAVY
                }}>
                      Contact Us Directly <ArrowRight size={14} />
                    </Link>
                  </div> : <form onSubmit={handleSubmit} className="p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                      <div>
                        <label className="block text-xs font-bold mb-1.5" style={{
                      color: NAVY
                    }}>Full Name *</label>
                        <input name="name" required value={form.name} onChange={handleChange} className={inputClass} style={{
                      ...inputStyle,
                      ...inputFocusStyle
                    }} placeholder="Your full name" />
                      </div>
                      <div>
                        <label className="block text-xs font-bold mb-1.5" style={{
                      color: NAVY
                    }}>Email Address *</label>
                        <input name="email" type="email" required value={form.email} onChange={handleChange} className={inputClass} style={{
                      ...inputStyle,
                      ...inputFocusStyle
                    }} placeholder="your@email.com" />
                      </div>
                      <div>
                        <label className="block text-xs font-bold mb-1.5" style={{
                      color: NAVY
                    }}>Customer Type *</label>
                        <select name="customerType" required value={form.customerType} onChange={handleChange} className={inputClass} style={{
                      ...inputStyle,
                      ...inputFocusStyle
                    }}>
                          <option value="">Select type…</option>
                          <option value="Business">Business</option>
                          <option value="Individual">Individual</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-bold mb-1.5" style={{
                      color: NAVY
                    }}>Quantity *</label>
                        <input name="quantity" required value={form.quantity} onChange={handleChange} className={inputClass} style={{
                      ...inputStyle,
                      ...inputFocusStyle
                    }} placeholder="e.g. 50 units" />
                      </div>
                      <div>
                        <label className="block text-xs font-bold mb-1.5" style={{
                      color: NAVY
                    }}>Destination Country *</label>
                        <input name="destinationCountry" required value={form.destinationCountry} onChange={handleChange} className={inputClass} style={{
                      ...inputStyle,
                      ...inputFocusStyle
                    }} placeholder="e.g. United States" />
                      </div>
                      <div>
                        <label className="block text-xs font-bold mb-1.5" style={{
                      color: NAVY
                    }}>Postal Code</label>
                        <input name="postalCode" value={form.postalCode} onChange={handleChange} className={inputClass} style={{
                      ...inputStyle,
                      ...inputFocusStyle
                    }} placeholder="Destination postal code" />
                      </div>
                      <div>
                        <label className="block text-xs font-bold mb-1.5" style={{
                      color: NAVY
                    }}>Estimated Weight (if known)</label>
                        <input name="estimatedWeight" value={form.estimatedWeight} onChange={handleChange} className={inputClass} style={{
                      ...inputStyle,
                      ...inputFocusStyle
                    }} placeholder="e.g. 2 kg" />
                      </div>
                      <div>
                        <label className="block text-xs font-bold mb-1.5" style={{
                      color: NAVY
                    }}>Preferred Shipping Speed</label>
                        <select name="shippingSpeed" value={form.shippingSpeed} onChange={handleChange} className={inputClass} style={{
                      ...inputStyle,
                      ...inputFocusStyle
                    }}>
                          <option value="">Select speed…</option>
                          <option value="Express (3–10 business days)">Express (3–10 business days)</option>
                          <option value="Standard (7–20 business days)">Standard (7–20 business days)</option>
                          <option value="Economy (10–35 business days)">Economy (10–35 business days)</option>
                          <option value="No preference">No preference</option>
                        </select>
                      </div>
                    </div>

                    <div className="mb-5">
                      <label className="block text-xs font-bold mb-1.5" style={{
                    color: NAVY
                  }}>Product Description or Product Link *</label>
                      <textarea name="productDescription" required value={form.productDescription} onChange={handleChange} rows={3} className={inputClass} style={{
                    ...inputStyle,
                    ...inputFocusStyle,
                    resize: 'vertical'
                  }} placeholder="Describe the product(s) or paste a product link. Include specifications, materials, or any relevant details." />
                    </div>

                    <div className="mb-6">
                      <label className="block text-xs font-bold mb-1.5" style={{
                    color: NAVY
                  }}>Additional Instructions</label>
                      <textarea name="additionalInstructions" value={form.additionalInstructions} onChange={handleChange} rows={3} className={inputClass} style={{
                    ...inputStyle,
                    ...inputFocusStyle,
                    resize: 'vertical'
                  }} placeholder="Any special requirements, inspection needs, packaging preferences, or other instructions." />
                    </div>

                    {/* Consent checkbox */}
                    <div className="mb-6 p-4 rounded-xl" style={{
                  background: LIGHT,
                  border: '1px solid #E2E8F0'
                }}>
                      <label className="flex items-start gap-3 cursor-pointer">
                        <input type="checkbox" checked={agreed} onChange={e => setAgreed(e.target.checked)} className="mt-0.5 flex-shrink-0 w-4 h-4 rounded" style={{
                      accentColor: BLUE
                    }} />
                        <span className="text-xs leading-relaxed" style={{
                      color: '#374151'
                    }}>
                          I confirm that I have reviewed the product or service description, estimated processing and delivery times,{' '}
                          <Link to="/shipping-policy" className="underline" style={{
                        color: BLUE
                      }}>Shipping Policy</Link>,{' '}
                          <Link to="/terms" className="underline" style={{
                        color: BLUE
                      }}>Terms of Service</Link>, and{' '}
                          <Link to="/refund-policy" className="underline" style={{
                        color: BLUE
                      }}>Refund, Return and Replacement Policy</Link>.
                        </span>
                      </label>
                    </div>

                    <motion.button type="submit" disabled={!agreed} className="inline-flex items-center gap-2 px-8 py-4 font-bold rounded-xl text-white transition-all disabled:opacity-40 disabled:cursor-not-allowed" style={{
                  background: NAVY
                }} whileHover={agreed ? {
                  scale: 1.03
                } : {}} whileTap={agreed ? {
                  scale: 0.97
                } : {}}>
                      <Send size={16} /> Send Quote Request
                    </motion.button>
                    <p className="text-xs mt-3" style={{
                  color: '#9CA3AF'
                }}>
                      This will open your email client with the pre-filled request. We respond within 1–2 business days.
                    </p>
                  </form>}
              </div>
            </Reveal>
          </div>
        </section>
      </main>
    </>;
}
