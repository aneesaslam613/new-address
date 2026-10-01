import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const NAVY   = '#0A2540';
const ACCENT = '#0EA5E9';
const BLUE   = '#1A56DB';

export default function LoadingScreen({ onDone }: { onDone: () => void }) {
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const DURATION = 1600; // ms — feels deliberate, not rushed
    const start = performance.now();

    function tick(now: number) {
      const elapsed = now - start;
      const t = Math.min(1, elapsed / DURATION);
      // Cubic ease-in-out: fast middle, slows at both ends
      const eased = t < 0.5
        ? 4 * t * t * t
        : 1 - Math.pow(-2 * t + 2, 3) / 2;
      const p = Math.min(100, Math.round(eased * 100));
      setProgress(p);

      if (p < 100) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        // Hold at 100 briefly, then exit
        setTimeout(() => {
          setExiting(true);
          setTimeout(onDone, 1000);
        }, 500);
      }
    }

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [onDone]);

  return (
    <AnimatePresence>
      {!exiting && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
          style={{
            position: 'fixed', inset: 0, zIndex: 9999,
            background: NAVY,
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center',
            userSelect: 'none', overflow: 'hidden',
          }}
        >
          {/* Ambient glow — very subtle */}
          <div style={{
            position: 'absolute', inset: 0, pointerEvents: 'none',
            background: `radial-gradient(ellipse 55% 45% at 50% 55%, rgba(14,165,233,0.06) 0%, transparent 65%)`,
          }} />

          {/* ── Top accent line ── */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'absolute', top: 0, left: 0, right: 0,
              height: 2, transformOrigin: 'left center',
              background: `linear-gradient(90deg, ${BLUE} 0%, ${ACCENT} 60%, transparent 100%)`,
            }}
          />

          {/* ── Centre content ── */}
          <div style={{
            display: 'flex', flexDirection: 'column',
            alignItems: 'center',
            width: '100%', maxWidth: 520, padding: '0 40px',
          }}>

            {/* Company name */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              style={{
                margin: 0, marginBottom: 48,
                fontFamily: 'Inter, sans-serif',
                fontWeight: 500,
                fontSize: '0.625rem',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.35)',
              }}
            >
              Arseen Enterprises LLC
            </motion.p>

            {/* Counter — always fully visible, no opacity trick */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontFamily: 'Plus Jakarta Sans, sans-serif',
                fontWeight: 700,
                fontSize: 'clamp(4.5rem, 16vw, 8rem)',
                letterSpacing: '-0.04em',
                lineHeight: 1,
                color: '#ffffff',
                marginBottom: 36,
                fontVariantNumeric: 'tabular-nums',
                minWidth: '3ch',
                textAlign: 'center',
              }}
            >
              {progress}
              <span style={{
                fontSize: '0.35em',
                fontWeight: 400,
                color: 'rgba(255,255,255,0.4)',
                letterSpacing: '0.05em',
                marginLeft: '0.1em',
                verticalAlign: 'super',
              }}>%</span>
            </motion.div>

            {/* Progress bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{
                width: '100%', height: 1,
                background: 'rgba(255,255,255,0.08)',
                borderRadius: 999,
                overflow: 'hidden',
                marginBottom: 18,
              }}
            >
              <div
                style={{
                  height: '100%',
                  width: `${progress}%`,
                  background: `linear-gradient(90deg, ${BLUE} 0%, ${ACCENT} 100%)`,
                  borderRadius: 999,
                  transition: 'width 0.05s linear',
                  boxShadow: `0 0 8px ${ACCENT}80`,
                }}
              />
            </motion.div>

            {/* Status label */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              style={{
                margin: 0,
                fontFamily: 'Inter, sans-serif',
                fontWeight: 400,
                fontSize: '0.6rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.22)',
              }}
            >
              {progress < 100 ? 'Loading' : 'Ready'}
            </motion.p>
          </div>

          {/* ── Bottom accent line ── */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'absolute', bottom: 0, left: 0, right: 0,
              height: 1, transformOrigin: 'right center',
              background: `linear-gradient(90deg, transparent 0%, rgba(26,86,219,0.45) 60%, ${ACCENT}60 100%)`,
            }}
          />

          {/* Corner marks — subtle corporate detail */}
          {[
            { top: 20, left: 24 },
            { top: 20, right: 24 },
            { bottom: 20, left: 24 },
            { bottom: 20, right: 24 },
          ].map((pos, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.05 }}
              style={{
                position: 'absolute', ...pos,
                width: 12, height: 12,
                borderTop: pos.top !== undefined ? `1px solid rgba(14,165,233,0.3)` : 'none',
                borderBottom: pos.bottom !== undefined ? `1px solid rgba(14,165,233,0.3)` : 'none',
                borderLeft: pos.left !== undefined ? `1px solid rgba(14,165,233,0.3)` : 'none',
                borderRight: pos.right !== undefined ? `1px solid rgba(14,165,233,0.3)` : 'none',
              }}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
