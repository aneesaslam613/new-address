import { Link, useLocation } from "react-router";
import { Menu, X, ArrowRight } from 'lucide-react';
import { useState } from 'react';
function Logo({
  dark = false
}: {
  dark?: boolean;
}) {
  const textColor = dark ? '#ffffff' : '#0A2540';
  const subColor = dark ? 'rgba(255,255,255,0.45)' : '#1A56DB';
  const iconBg = dark ? 'rgba(255,255,255,0.1)' : '#0A2540';
  return <div className="flex items-center gap-3 select-none">
      {/* Icon mark — globe/network motif */}
      <div style={{
      width: 38,
      height: 38,
      borderRadius: 9,
      flexShrink: 0,
      background: iconBg,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          {/* Globe outline */}
          <circle cx="11" cy="11" r="8.5" stroke={dark ? '#fff' : '#fff'} strokeWidth="1.5" />
          {/* Horizontal equator */}
          <path d="M2.5 11 Q11 14.5 19.5 11" stroke={dark ? 'rgba(255,255,255,0.45)' : 'rgba(255,255,255,0.5)'} strokeWidth="1" />
          {/* Vertical meridian */}
          <path d="M11 2.5 Q14.5 11 11 19.5" stroke={dark ? 'rgba(255,255,255,0.45)' : 'rgba(255,255,255,0.5)'} strokeWidth="1" />
          {/* Arrow up-right */}
          <path d="M13 7 L16 7 L16 10" stroke="#0EA5E9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M16 7 L11.5 11.5" stroke="#0EA5E9" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      </div>
      {/* Wordmark */}
      <div>
        <div style={{
        fontFamily: 'Plus Jakarta Sans, sans-serif',
        fontWeight: 800,
        fontSize: '1rem',
        letterSpacing: '-0.025em',
        lineHeight: 1.1,
        color: textColor
      }}>
          Arseen Enterprises
        </div>
        <div style={{
        fontFamily: 'Inter, sans-serif',
        fontWeight: 600,
        fontSize: '0.58rem',
        letterSpacing: '0.14em',
        textTransform: 'uppercase' as const,
        color: subColor,
        marginTop: 2
      }}>LLC · Procurement & Fulfillment

        </div>
      </div>
    </div>;
}
const NAVY = '#0A2540';
const BLUE = '#1A56DB';
const navItems = [{
  href: '/',
  label: 'Home'
}, {
  href: '/about',
  label: 'About'
}, {
  href: '/services',
  label: 'Services'
}, {
  href: '/how-it-works',
  label: 'How It Works'
}, {
  href: '/pricing',
  label: 'Pricing'
}, {
  href: '/shipping',
  label: 'Shipping'
}, {
  href: '/blog',
  label: 'Blog'
}, {
  href: '/contact',
  label: 'Contact'
}];
export default function Header() {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  return <header className="sticky top-0 z-50 bg-white shadow-sm" style={{
    borderBottom: '1px solid #E8EDF5'
  }}>
      <div className="container mx-auto px-6">
        <div className="flex h-[72px] items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center min-w-0 shrink-0">
            <Logo />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
            {navItems.map(item => {
            const active = location.pathname === item.href;
            return <Link key={item.href} to={item.href} className="px-4 py-2 text-sm font-semibold rounded-lg transition-colors" style={{
              color: active ? NAVY : '#4A5568',
              background: active ? '#EEF2F8' : 'transparent'
            }} onMouseEnter={e => {
              if (!active) (e.currentTarget as HTMLAnchorElement).style.color = NAVY;
            }} onMouseLeave={e => {
              if (!active) (e.currentTarget as HTMLAnchorElement).style.color = '#4A5568';
            }}>
                  {item.label}
                </Link>;
          })}
            <Link to="/contact" className="ml-4 inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold rounded-lg text-white transition-all hover:brightness-110 hover:scale-[1.02]" style={{
            background: '#0A2540',
            boxShadow: '0 4px 14px rgba(10,37,64,0.25)'
          }}>
              Get Started <ArrowRight size={14} />
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-lg transition-colors" style={{
          color: NAVY
        }} aria-label="Toggle menu">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && <div className="md:hidden py-4" style={{
        borderTop: '1px solid #E8EDF5'
      }}>
            <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
              {navItems.map(item => {
            const active = location.pathname === item.href;
            return <Link key={item.href} to={item.href} className="px-4 py-3 text-sm font-semibold rounded-lg transition-colors" style={{
              color: active ? NAVY : '#4A5568',
              background: active ? '#EEF2F8' : 'transparent'
            }} onClick={() => setOpen(false)}>
                    {item.label}
                  </Link>;
          })}
              <Link to="/contact" className="mt-3 mx-0 px-5 py-3 text-sm font-bold rounded-lg text-center text-white transition-all" style={{
            background: BLUE
          }} onClick={() => setOpen(false)}>
                Get Started
              </Link>
            </nav>
          </div>}
      </div>
    </header>;
}
