import { Helmet } from '@dr.pogodin/react-helmet';
import { Link } from "react-router";
import { ChevronRight, Building2, MapPin, Mail, Globe, Shield } from 'lucide-react';
import { motion } from 'motion/react';
import { company_info } from 'virtual:content';

const site = 'https://arseenenterprises.com';
const url = `${site}/company-info`;
const title = 'Company Information — Arseen Enterprises LLC';
const description = 'Legal registration details, addresses, and business information for Arseen Enterprises LLC, a Wyoming limited liability company.';
const ogImage = `${site}/og-image.svg`;
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  '@id': `${url}#webpage`,
  name: title,
  url,
  description,
  isPartOf: { '@id': `${site}/#website` },
  about: { '@id': `${site}/#organization` }
};

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const }}
    >
      {children}
    </motion.div>
  );
}

export default function CompanyInfoPage() {
  return (
    <>
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
        <script type="application/ld+json">{JSON.stringify(jsonLd).replace(/</g, '\\u003c')}</script>
      </Helmet>

      <main>
        {/* Hero */}
        <section className="py-20 pb-16" style={{ background: `linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--primary-dark)) 100%)` }}>
          <div className="container mx-auto px-6">
            <nav className="flex items-center gap-2 text-xs mb-6" aria-label="Breadcrumb" style={{ color: 'hsl(var(--white-45))' }}>
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight size={12} />
              <span style={{ color: 'hsl(var(--white-70))' }}>{company_info.breadcrumb}</span>
            </nav>
            <div className="flex items-center gap-3 mb-5">
              <div className="flex items-center justify-center rounded-xl" style={{ width: 44, height: 44, background: 'hsl(var(--white-10))' }}>
                <Building2 size={22} className="text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">{company_info.pageTitle}</h1>
            <p className="text-lg max-w-2xl" style={{ color: 'hsl(var(--white-62))' }}>
              {company_info.pageSubtitle}
            </p>
          </div>
        </section>

        <section className="py-16" style={{ background: 'hsl(var(--muted))' }}>
          <div className="container mx-auto px-6 max-w-3xl">

            {/* Legal identity */}
            <Reveal>
              <div className="bg-card rounded-2xl p-8 shadow-sm border border-border mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex items-center justify-center rounded-xl" style={{ width: 40, height: 40, background: `linear-gradient(135deg, hsl(var(--primary)), hsl(var(--secondary)))` }}>
                    <Shield size={18} className="text-white" />
                  </div>
                  <h2 className="text-lg font-extrabold text-primary">{company_info.legalEntity.heading}</h2>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 py-3" style={{ borderBottom: '1px solid hsl(var(--row-divider))' }}>
                    <span className="text-xs font-bold uppercase tracking-wide w-40 flex-shrink-0 mt-0.5 text-accent">Company Name</span>
                    <span className="text-sm font-semibold text-primary">{company_info.legalEntity.companyName}</span>
                  </div>
                  <div className="flex items-start gap-3 py-3" style={{ borderBottom: '1px solid hsl(var(--row-divider))' }}>
                    <span className="text-xs font-bold uppercase tracking-wide w-40 flex-shrink-0 mt-0.5 text-accent">Entity Type</span>
                    <span className="text-sm" style={{ color: 'hsl(var(--body-text))' }}>{company_info.legalEntity.entityType}</span>
                  </div>
                  <div className="flex items-start gap-3 py-3" style={{ borderBottom: '1px solid hsl(var(--row-divider))' }}>
                    <span className="text-xs font-bold uppercase tracking-wide w-40 flex-shrink-0 mt-0.5 text-accent">Wyoming Entity ID</span>
                    <span className="text-sm" style={{ color: 'hsl(var(--body-text))' }}>{company_info.legalEntity.wyomingEntityId}</span>
                  </div>
                  <div className="flex items-start gap-3 py-3" style={{ borderBottom: '1px solid hsl(var(--row-divider))' }}>
                    <span className="text-xs font-bold uppercase tracking-wide w-40 flex-shrink-0 mt-0.5 text-accent">Established</span>
                    <span className="text-sm" style={{ color: 'hsl(var(--body-text))' }}>{company_info.legalEntity.established}</span>
                  </div>
                  <div className="flex items-start gap-3 py-3">
                    <span className="text-xs font-bold uppercase tracking-wide w-40 flex-shrink-0 mt-0.5 text-accent">Federal EIN</span>
                    <span className="text-sm" style={{ color: 'hsl(var(--body-text))' }}>{company_info.legalEntity.federalEin}</span>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Addresses */}
            <Reveal delay={0.08}>
              <div className="bg-card rounded-2xl p-8 shadow-sm border border-border mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex items-center justify-center rounded-xl" style={{ width: 40, height: 40, background: `linear-gradient(135deg, hsl(var(--secondary)), hsl(var(--secondary-dark)))` }}>
                    <MapPin size={18} className="text-white" />
                  </div>
                  <h2 className="text-lg font-extrabold text-primary">{company_info.addresses.heading}</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="rounded-xl p-5" style={{ background: 'hsl(var(--muted))', border: '1px solid hsl(var(--address-border))' }}>
                    <p className="text-xs font-bold uppercase tracking-wide mb-3 text-accent">{company_info.addresses.usOffice.label}</p>
                    <p className="text-sm leading-relaxed font-semibold mb-1 text-primary">{company_info.legalEntity.companyName}</p>
                    <p className="text-sm leading-relaxed" style={{ color: 'hsl(var(--body-text))' }}>
                      <span>{company_info.addresses.usOffice.line1}</span><br />
                      <span>{company_info.addresses.usOffice.line2}</span><br />
                      <span>{company_info.addresses.usOffice.country}</span>
                    </p>
                    <p className="text-xs mt-3 italic" style={{ color: 'hsl(var(--muted-note))' }}>
                      {company_info.addresses.usOffice.note}
                    </p>
                  </div>
                  <div className="rounded-xl p-5" style={{ background: 'hsl(var(--muted))', border: '1px solid hsl(var(--address-border))' }}>
                    <p className="text-xs font-bold uppercase tracking-wide mb-3 text-accent">{company_info.addresses.principalOffice.label}</p>
                    <p className="text-sm leading-relaxed font-semibold mb-1 text-primary">{company_info.legalEntity.companyName}</p>
                    <p className="text-sm leading-relaxed" style={{ color: 'hsl(var(--body-text))' }}>
                      <span>{company_info.addresses.principalOffice.line1}</span><br />
                      <span>{company_info.addresses.principalOffice.line2}</span><br />
                      <span>{company_info.addresses.principalOffice.country}</span>
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Business description */}
            <Reveal delay={0.12}>
              <div className="bg-card rounded-2xl p-8 shadow-sm border border-border mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex items-center justify-center rounded-xl" style={{ width: 40, height: 40, background: `linear-gradient(135deg, hsl(var(--primary-dark)), hsl(var(--secondary)))` }}>
                    <Globe size={18} className="text-white" />
                  </div>
                  <h2 className="text-lg font-extrabold text-primary">{company_info.businessDescription.heading}</h2>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {company_info.businessDescription.para1}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {company_info.businessDescription.para2}
                </p>
              </div>
            </Reveal>

            {/* Contact */}
            <Reveal delay={0.14}>
              <div className="bg-card rounded-2xl p-8 shadow-sm border border-border mb-8">
                <div className="flex items-center gap-3 mb-5">
                  <div className="flex items-center justify-center rounded-xl" style={{ width: 40, height: 40, background: `linear-gradient(135deg, hsl(var(--primary)), hsl(var(--secondary)))` }}>
                    <Mail size={18} className="text-white" />
                  </div>
                  <h2 className="text-lg font-extrabold text-primary">{company_info.contact.heading}</h2>
                </div>
                <p className="text-sm text-muted-foreground mb-2">
                  Email:{' '}
                  <a href={`mailto:${company_info.contact.email}`} className="font-semibold underline text-secondary">
                    {company_info.contact.email}
                  </a>
                </p>
                <p className="text-sm text-muted-foreground">{company_info.contact.responseTime}</p>
              </div>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-primary-foreground text-sm font-bold bg-primary hover:brightness-110 transition-all"
                >
                  {company_info.ctaContact} <ChevronRight size={14} />
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all"
                >
                  {company_info.ctaAbout} <ChevronRight size={14} />
                </Link>
              </div>
            </Reveal>

          </div>
        </section>
      </main>
    </>
  );
}
