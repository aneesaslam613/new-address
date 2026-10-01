import { ShieldCheck, Globe, Package, Truck, BarChart3, Clock, CheckCircle2 } from 'lucide-react';

const ACCENT = '#0EA5E9';
const NAVY   = '#0A2540';

const items = [
  { icon: Globe,        text: 'International Procurement' },
  { icon: ShieldCheck,  text: 'Regulatory Compliance' },
  { icon: Package,      text: 'Custom Order Fulfillment' },
  { icon: Truck,        text: 'Shipment Coordination' },
  { icon: BarChart3,    text: 'Written Quotations' },
  { icon: Clock,        text: '1–2 Day Response Time' },
  { icon: CheckCircle2, text: 'Wyoming Registered LLC' },
  { icon: Globe,        text: 'B2B & B2C Services' },
  { icon: ShieldCheck,  text: 'Legally Registered Business' },
  { icon: Package,      text: 'Product Inspection Coordination' },
];

// Duplicate for seamless loop
const doubled = [...items, ...items];

export default function MarqueeTicker() {
  return (
    <div
      className="overflow-hidden py-3.5"
      style={{ background: NAVY, borderTop: '1px solid rgba(255,255,255,0.07)', borderBottom: '1px solid rgba(255,255,255,0.07)' }}
    >
      <div className="flex" style={{ animation: 'marquee 32s linear infinite', width: 'max-content' }}>
        {doubled.map((item, i) => {
          const Icon = item.icon;
          return (
            <div key={i} className="flex items-center gap-2.5 px-8 flex-shrink-0">
              <Icon size={13} style={{ color: ACCENT }} />
              <span style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 600,
                fontSize: '0.72rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.55)',
                whiteSpace: 'nowrap',
              }}>
                {item.text}
              </span>
              <span style={{ color: 'rgba(14,165,233,0.3)', fontSize: '0.5rem', marginLeft: 8 }}>✦</span>
            </div>
          );
        })}
      </div>

      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
