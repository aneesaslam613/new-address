import { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router';
import { Helmet } from '@dr.pogodin/react-helmet';
import { CheckCircle, Package, Search, FileText, Truck, HeadphonesIcon, ArrowRight, Globe, ShieldCheck, ClipboardList } from 'lucide-react';

function useCountdown(targetDate: string) {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft(targetDate));
  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeLeft(targetDate)), 1000);
    return () => clearInterval(timer);
  }, [targetDate]);
  return timeLeft;
}

function parseDateMs(raw: string): number | null {
  const t = new Date(raw).getTime();
  return Number.isNaN(t) ? null : t;
}

function getTimeLeft(targetDate: string) {
  if (!targetDate) return { days: 0, hours: 0, minutes: 0, seconds: 0, ended: true };
  const end = parseDateMs(targetDate);
  if (end === null) return { days: 0, hours: 0, minutes: 0, seconds: 0, ended: true };
  const diff = end - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, ended: true };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    ended: false,
  };
}

const services = [
  {
    icon: Search,
    title: 'Custom Product Procurement',
    desc: 'We source the products you need based on your specifications, quantities, and requirements — and provide a written quotation before anything begins.',
  },
  {
    icon: Package,
    title: 'Custom Order Fulfillment',
    desc: 'From order preparation to packaging and dispatch coordination, we manage the fulfillment process on your behalf.',
  },
  {
    icon: ClipboardList,
    title: 'Product Inspection Coordination',
    desc: 'We coordinate pre-shipment product inspection to help verify quality and condition before your order is dispatched.',
  },
  {
    icon: ShieldCheck,
    title: 'Packaging & Order Preparation',
    desc: 'We oversee packaging and order preparation to ensure your goods are ready for international shipment.',
  },
  {
    icon: Globe,
    title: 'International Shipment Coordination',
    desc: 'We arrange international shipment through independent logistics providers. Physical transportation is performed by those providers, not by Arseen Enterprises LLC.',
  },
  {
    icon: HeadphonesIcon,
    title: 'Tracking & Delivery Support',
    desc: 'We keep you informed throughout the process, providing updates on your order status from procurement through to delivery.',
  },
];

const steps = [
  { num: '01', title: 'Submit Your Requirements', desc: 'Tell us what you need — product details, quantities, destination, and any specific requirements. B2B clients and selected individual customers are welcome.' },
  { num: '02', title: 'Receive a Written Quotation', desc: 'We review your request and prepare a detailed written quotation covering procurement, fulfillment, and shipment coordination.' },
  { num: '03', title: 'Approve & Pay', desc: 'Once you approve the quotation, we issue an invoice. Payment is required before procurement or fulfillment begins, unless alternative terms are agreed in writing.' },
  { num: '04', title: 'Procurement & Fulfillment', desc: 'We source your products, coordinate inspection where applicable, prepare your order, and arrange international shipment through independent logistics providers.' },
  { num: '05', title: 'Tracking & Delivery Support', desc: 'We provide updates throughout the process until your order reaches its destination.' },
];

function CountdownUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <span className="font-mono text-3xl font-bold text-primary-foreground leading-none">
        {String(value).padStart(2, '0')}
      </span>
      <span className="text-xs text-primary-foreground/60 mt-1 uppercase tracking-widest">{label}</span>
    </div>
  );
}

export default function ProcurementFulfillmentPage({ startDate, endDate }: { startDate?: string; endDate?: string }) {
  const [searchParams] = useSearchParams();
  const saleStart = startDate ? `${startDate}T00:00:00Z` : '';
  const saleEnd = endDate ? `${endDate}T23:59:59Z` : '';
  const effectiveSaleStart = (import.meta.env.VITE_PARENT_ORIGIN ? searchParams.get('__preview_start') : null) ?? saleStart;
  const effectiveSaleEnd = (import.meta.env.VITE_PARENT_ORIGIN ? searchParams.get('__preview_end') : null) ?? saleEnd;
  const now = Date.now();
  const startMs = effectiveSaleStart ? parseDateMs(effectiveSaleStart) : null;
  const endMs = effectiveSaleEnd ? parseDateMs(effectiveSaleEnd) : null;
  const hasStarted = startMs !== null ? now >= startMs : true;
  const hasEnded = endMs !== null ? now >= endMs : false;
  const saleCountdown = useCountdown(effectiveSaleEnd);
  const startCountdown = useCountdown(effectiveSaleStart);

  const site = 'https://arseenenterprises.com';
  const pageUrl = `${site}/lp/procurement-fulfillment`;

  // SALE ENDED
  if (hasEnded) {
    return (
      <>
        <Helmet>
          <title>Procurement & Fulfillment Services — Arseen Enterprises LLC</title>
          <meta name="description" content="Custom product procurement and international order fulfillment services from Arseen Enterprises LLC. Submit your requirements and receive a written quotation." />
        </Helmet>
        <section className="min-h-screen flex items-center justify-center bg-primary">
          <div className="text-center px-6 py-20 max-w-lg">
            <div className="w-16 h-16 rounded-full bg-primary-foreground/10 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-primary-foreground" />
            </div>
            <h1 className="text-3xl font-bold text-primary-foreground mb-4">This Campaign Has Ended</h1>
            <p className="text-primary-foreground/70 mb-8">Our procurement and fulfillment services are still available. Visit our services page or contact us directly to submit your requirements.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/services" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold text-primary-foreground border border-primary-foreground/30 hover:bg-primary-foreground/10 transition-colors">
                View Services
              </Link>
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold bg-secondary text-secondary-foreground hover:opacity-90 transition-opacity">
                Contact Us <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </>
    );
  }

  // COMING SOON
  if (!hasStarted) {
    return (
      <>
        <Helmet>
          <title>Coming Soon — Procurement & Fulfillment Quotations | Arseen Enterprises LLC</title>
          <meta name="description" content="Custom product procurement and international order fulfillment services launching soon. Submit your requirements and receive a written quotation." />
        </Helmet>
        <section className="min-h-screen flex items-center justify-center bg-primary">
          <div className="text-center px-6 py-20 max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-widest mb-4 text-accent">Coming Soon</p>
            <h1 className="text-4xl font-bold text-primary-foreground mb-4">Procurement & Fulfillment Quotations</h1>
            <p className="text-primary-foreground/70 mb-10">We're preparing our procurement and fulfillment quotation service. Check back shortly — or contact us now to submit your requirements early.</p>
            <div className="flex justify-center gap-6 mb-10">
              <CountdownUnit value={startCountdown.days} label="days" />
              <CountdownUnit value={startCountdown.hours} label="hours" />
              <CountdownUnit value={startCountdown.minutes} label="min" />
              <CountdownUnit value={startCountdown.seconds} label="sec" />
            </div>
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-3 rounded-lg font-semibold bg-secondary text-secondary-foreground hover:opacity-90 transition-opacity">
              Contact Us Early <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </>
    );
  }

  // ACTIVE
  return (
    <>
      <Helmet>
        <title>Request a Procurement & Fulfillment Quotation | Arseen Enterprises LLC</title>
        <meta name="description" content="Custom product procurement, order fulfillment, and international shipment coordination. Submit your requirements and receive a written quotation from Arseen Enterprises LLC." />
        <link rel="canonical" href={pageUrl} />
        <meta property="og:title" content="Request a Procurement & Fulfillment Quotation | Arseen Enterprises LLC" />
        <meta property="og:description" content="Custom product procurement, order fulfillment, and international shipment coordination. Submit your requirements and receive a written quotation." />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <div className="min-h-screen bg-background">

        {/* Countdown Banner */}
        <div className="bg-primary py-3 text-center text-sm font-medium text-primary-foreground">
          <span>Quotation requests open — </span>
          <span className="font-mono">
            {saleCountdown.days}d {saleCountdown.hours}h {saleCountdown.minutes}m {saleCountdown.seconds}s
          </span>
          <span> remaining</span>
        </div>

        {/* Hero */}
        <section className="relative overflow-hidden bg-primary">
          <div className="absolute inset-0 pointer-events-none">
            <img
              src="/airo-assets/images/pages/lp/procurement-fulfillment/hero"
              alt=""
              className="w-full h-full object-cover opacity-20"
              loading="eager"
              fetchPriority="high"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/80" />
          </div>
          <div className="relative max-w-4xl mx-auto px-6 py-24 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest mb-4 text-accent">
              Arseen Enterprises LLC
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-primary-foreground mb-6 leading-tight">
              Custom Product Procurement<br className="hidden md:block" /> & Order Fulfillment
            </h1>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-10">
              Submit your product requirements, receive a written quotation, and let us coordinate procurement, fulfillment, and international shipment on your behalf. B2B clients and selected individual customers welcome.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-bold text-secondary-foreground text-lg bg-secondary hover:opacity-90 transition-opacity"
              >
                Request a Quotation <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold text-primary-foreground border border-primary-foreground/30 hover:bg-primary-foreground/10 transition-colors"
              >
                How It Works
              </Link>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 px-6 bg-background">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-sm font-semibold uppercase tracking-widest mb-3 text-accent">What We Offer</p>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-primary">
                End-to-End Procurement & Fulfillment Coordination
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We coordinate the full process — from sourcing and inspection to packaging, shipment arrangement, and delivery support. Physical transportation is performed by independent logistics providers.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((s) => (
                <div key={s.title} className="rounded-xl border border-border p-6 hover:shadow-md transition-shadow bg-card">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 bg-secondary/10">
                    <s.icon className="w-5 h-5 text-secondary" />
                  </div>
                  <h3 className="font-bold text-base mb-2 text-primary">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 px-6 bg-muted">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-sm font-semibold uppercase tracking-widest mb-3 text-accent">The Process</p>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-primary">
                From Requirements to Delivery
              </h2>
              <p className="text-muted-foreground">A clear, quotation-first process with no surprises.</p>
            </div>
            <div className="space-y-6">
              {steps.map((step, i) => (
                <div key={step.num} className="flex gap-5">
                  <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm text-primary-foreground ${i === 0 ? 'bg-secondary' : 'bg-primary'}`}>
                    {step.num}
                  </div>
                  <div className="pt-1">
                    <h3 className="font-bold mb-1 text-primary">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust signals */}
        <section className="py-16 px-6 bg-background">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 bg-secondary/10">
                  <FileText className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-bold mb-2 text-primary">Quotation Before Payment</h3>
                <p className="text-sm text-muted-foreground">You receive a written quotation and approve it before any invoice is issued or payment is required.</p>
              </div>
              <div>
                <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 bg-secondary/10">
                  <Globe className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-bold mb-2 text-primary">International Reach</h3>
                <p className="text-sm text-muted-foreground">We coordinate procurement and fulfillment for clients globally, working with independent logistics providers for international shipment.</p>
              </div>
              <div>
                <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 bg-secondary/10">
                  <Truck className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-bold mb-2 text-primary">B2B & Selected B2C</h3>
                <p className="text-sm text-muted-foreground">We primarily serve business clients, and also accept selected individual customers on a project basis.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-6 bg-primary">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary-foreground mb-4">
              Ready to Submit Your Requirements?
            </h2>
            <p className="text-primary-foreground/70 mb-8 text-lg">
              Contact us with your product details, quantities, and destination. We'll review your request and prepare a written quotation at no obligation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-bold text-secondary-foreground text-lg bg-secondary hover:opacity-90 transition-opacity"
              >
                Request a Quotation <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold text-primary-foreground border border-primary-foreground/30 hover:bg-primary-foreground/10 transition-colors"
              >
                View Pricing
              </Link>
            </div>
            <p className="text-primary-foreground/40 text-xs mt-6">
              Arseen Enterprises LLC · support@arseenenterprises.com · Response within 1–2 business days
            </p>
          </div>
        </section>

      </div>
    </>
  );
}
