import { motion } from 'motion/react';

const ACCENT = '#0EA5E9';
const BLUE   = '#1A56DB';
const NAVY   = '#0A2540';

// Node positions on the globe (x,y as % of 400x400 viewBox)
const nodes = [
  { id: 'n1', cx: 200, cy: 80  },  // top
  { id: 'n2', cx: 320, cy: 140 },  // top-right
  { id: 'n3', cx: 350, cy: 240 },  // right
  { id: 'n4', cx: 290, cy: 330 },  // bottom-right
  { id: 'n5', cx: 200, cy: 360 },  // bottom
  { id: 'n6', cx: 110, cy: 330 },  // bottom-left
  { id: 'n7', cx:  60, cy: 240 },  // left
  { id: 'n8', cx: 100, cy: 140 },  // top-left
  { id: 'n9', cx: 200, cy: 200 },  // center
];

const edges = [
  ['n1','n2'],['n2','n3'],['n3','n4'],['n4','n5'],
  ['n5','n6'],['n6','n7'],['n7','n8'],['n8','n1'],
  ['n1','n9'],['n3','n9'],['n5','n9'],['n7','n9'],
  ['n2','n9'],['n4','n9'],['n6','n9'],['n8','n9'],
];

function getNode(id: string) { return nodes.find(n => n.id === id)!; }

// Animated packet along a path
function Packet({ from, to, delay }: { from: string; to: string; delay: number }) {
  const a = getNode(from);
  const b = getNode(to);
  return (
    <motion.circle
      r={3}
      fill="#fff"
      filter="url(#glow)"
      initial={{ offsetDistance: '0%', opacity: 0 }}
      animate={{ offsetDistance: ['0%', '100%'], opacity: [0, 1, 1, 0] }}
      transition={{ duration: 2.2, delay, repeat: Infinity, repeatDelay: Math.random() * 3 + 1, ease: 'easeInOut' as const }}
      style={{
        offsetPath: `path("M ${a.cx} ${a.cy} L ${b.cx} ${b.cy}")`,
      } as React.CSSProperties}
    />
  );
}

export default function HeroGlobe() {
  return (
    <div className="relative w-full max-w-[420px] mx-auto select-none" style={{ aspectRatio: '1/1' }}>
      {/* Outer ambient ring */}
      <motion.div
        className="absolute inset-0 rounded-full pointer-events-none"
        style={{ background: `radial-gradient(circle, rgba(14,165,233,0.08) 0%, transparent 70%)` }}
        animate={{ scale: [1, 1.07, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' as const }}
      />

      <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <defs>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <filter id="nodeGlow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <radialGradient id="sphereGrad" cx="40%" cy="35%" r="60%">
            <stop offset="0%" stopColor={BLUE} stopOpacity="0.18" />
            <stop offset="100%" stopColor={NAVY} stopOpacity="0.05" />
          </radialGradient>
        </defs>

        {/* Sphere base */}
        <motion.circle
          cx="200" cy="200" r="170"
          fill="url(#sphereGrad)"
          stroke={ACCENT} strokeWidth="0.5" strokeOpacity="0.2"
          animate={{ r: [170, 173, 170] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' as const }}
        />

        {/* Orbit rings */}
        {[130, 160, 190].map((r, i) => (
          <motion.ellipse
            key={r}
            cx="200" cy="200"
            rx={r} ry={r * 0.35}
            stroke={ACCENT} strokeWidth="0.6" strokeOpacity="0.15"
            fill="none"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 18 + i * 6, repeat: Infinity, ease: 'linear' as const }}
            style={{ transformOrigin: '200px 200px' }}
          />
        ))}

        {/* Meridian lines */}
        {[0, 45, 90, 135].map((angle, i) => (
          <motion.ellipse
            key={i}
            cx="200" cy="200"
            rx="170" ry={170 * 0.4}
            stroke={ACCENT} strokeWidth="0.5" strokeOpacity="0.1"
            fill="none"
            style={{ transformOrigin: '200px 200px', transform: `rotate(${angle}deg)` }}
          />
        ))}

        {/* Edges */}
        {edges.map(([from, to], i) => {
          const a = getNode(from);
          const b = getNode(to);
          return (
            <motion.line
              key={i}
              x1={a.cx} y1={a.cy} x2={b.cx} y2={b.cy}
              stroke={ACCENT} strokeWidth="0.8" strokeOpacity="0.25"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 + i * 0.04, ease: 'easeOut' as const }}
            />
          );
        })}

        {/* Animated packets */}
        {edges.slice(0, 8).map(([from, to], i) => (
          <Packet key={i} from={from} to={to} delay={i * 0.7} />
        ))}

        {/* Nodes */}
        {nodes.map((n, i) => (
          <g key={n.id}>
            {/* Outer pulse ring */}
            <motion.circle
              cx={n.cx} cy={n.cy}
              r={n.id === 'n9' ? 14 : 9}
              fill="none"
              stroke={ACCENT} strokeWidth="1"
              animate={{ r: [n.id === 'n9' ? 14 : 9, n.id === 'n9' ? 20 : 14, n.id === 'n9' ? 14 : 9], opacity: [0.4, 0, 0.4] }}
              transition={{ duration: 2.5, delay: i * 0.3, repeat: Infinity, ease: 'easeOut' as const }}
            />
            {/* Node dot */}
            <motion.circle
              cx={n.cx} cy={n.cy}
              r={n.id === 'n9' ? 6 : 4}
              fill={n.id === 'n9' ? ACCENT : BLUE}
              filter="url(#nodeGlow)"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.8 + i * 0.06, ease: 'backOut' as const }}
              style={{ transformOrigin: `${n.cx}px ${n.cy}px` }}
            />
          </g>
        ))}

        {/* Rotating satellite dot */}
        <motion.g
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'linear' as const }}
          style={{ transformOrigin: '200px 200px' }}
        >
          <circle cx="200" cy="30" r="4" fill={ACCENT} filter="url(#glow)" />
        </motion.g>

        {/* Counter-rotating satellite */}
        <motion.g
          animate={{ rotate: [360, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'linear' as const }}
          style={{ transformOrigin: '200px 200px' }}
        >
          <circle cx="370" cy="200" r="3" fill={BLUE} filter="url(#glow)" />
        </motion.g>
      </svg>

      {/* Floating label chips */}
      {[
        { label: 'Global Network',  top: '8%',  left: '60%', delay: 1.2 },
        { label: 'Order Fulfillment', top: '72%', left: '62%', delay: 1.5 },
        { label: 'Procurement',     top: '40%', left: '-8%', delay: 1.8 },
      ].map(chip => (
        <motion.div
          key={chip.label}
          className="absolute text-[10px] font-semibold px-2.5 py-1 rounded-full whitespace-nowrap"
          style={{
            top: chip.top, left: chip.left,
            background: 'rgba(14,165,233,0.12)',
            border: '1px solid rgba(14,165,233,0.3)',
            color: ACCENT,
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1, y: [0, -4, 0] }}
          transition={{
            opacity: { duration: 0.4, delay: chip.delay },
            scale:   { duration: 0.4, delay: chip.delay },
            y:       { duration: 3.5, repeat: Infinity, ease: 'easeInOut' as const, delay: chip.delay },
          }}
        >
          {chip.label}
        </motion.div>
      ))}
    </div>
  );
}
