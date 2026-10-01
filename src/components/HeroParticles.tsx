import { useEffect, useRef } from 'react';

interface Particle {
  x: number; y: number;
  vx: number; vy: number;
  size: number; opacity: number;
  pulse: number; pulseSpeed: number;
  hue: number;
}

interface DataPacket {
  fromIdx: number; toIdx: number;
  progress: number; speed: number;
}

export default function HeroParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef  = useRef({ x: -9999, y: -9999 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let raf: number;
    const particles: Particle[] = [];
    const packets: DataPacket[]  = [];
    const COUNT = 65;

    function resize() {
      if (!canvas) return;
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    }

    function spawn(): Particle {
      return {
        x: Math.random() * (canvas?.width ?? 1200),
        y: Math.random() * (canvas?.height ?? 700),
        vx: (Math.random() - 0.5) * 0.22,
        vy: (Math.random() - 0.5) * 0.16,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.4 + 0.06,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: Math.random() * 0.014 + 0.006,
        hue: Math.random() > 0.7 ? 210 : 199, // mix blue + sky
      };
    }

    resize();
    for (let i = 0; i < COUNT; i++) particles.push(spawn());

    // Seed a few data packets
    function spawnPacket() {
      if (particles.length < 2) return;
      const from = Math.floor(Math.random() * particles.length);
      let to = Math.floor(Math.random() * particles.length);
      while (to === from) to = Math.floor(Math.random() * particles.length);
      packets.push({ fromIdx: from, toIdx: to, progress: 0, speed: 0.004 + Math.random() * 0.006 });
    }
    for (let i = 0; i < 6; i++) spawnPacket();

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    function onMouseMove(e: MouseEvent) {
      const rect = canvas!.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    }
    function onMouseLeave() { mouseRef.current = { x: -9999, y: -9999 }; }
    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('mouseleave', onMouseLeave);

    function draw() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      // ── Faint grid ──
      ctx.strokeStyle = 'rgba(14,165,233,0.035)';
      ctx.lineWidth = 1;
      const gs = 90;
      for (let x = 0; x < canvas.width; x += gs) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, canvas.height); ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += gs) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(canvas.width, y); ctx.stroke();
      }

      // ── Connection lines ──
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 130) {
            const alpha = 0.09 * (1 - dist / 130);
            ctx.strokeStyle = `rgba(14,165,233,${alpha})`;
            ctx.lineWidth = 0.7;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // ── Data packets (glowing dots travelling along edges) ──
      for (let k = packets.length - 1; k >= 0; k--) {
        const pkt = packets[k];
        pkt.progress += pkt.speed;
        if (pkt.progress >= 1) {
          packets.splice(k, 1);
          spawnPacket();
          continue;
        }
        const a = particles[pkt.fromIdx];
        const b = particles[pkt.toIdx];
        const dx = b.x - a.x;
        const dy = b.y - a.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist > 160) { packets.splice(k, 1); spawnPacket(); continue; }

        const px = a.x + dx * pkt.progress;
        const py = a.y + dy * pkt.progress;

        // Glow
        const grad = ctx.createRadialGradient(px, py, 0, px, py, 5);
        grad.addColorStop(0, 'rgba(14,165,233,0.9)');
        grad.addColorStop(1, 'rgba(14,165,233,0)');
        ctx.beginPath();
        ctx.arc(px, py, 5, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();

        // Core dot
        ctx.beginPath();
        ctx.arc(px, py, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = '#fff';
        ctx.fill();
      }

      // ── Particles ──
      for (const p of particles) {
        // Mouse repel
        const dxm = p.x - mx;
        const dym = p.y - my;
        const dm  = Math.sqrt(dxm * dxm + dym * dym);
        if (dm < 90 && dm > 0) {
          const force = (90 - dm) / 90 * 0.6;
          p.vx += (dxm / dm) * force;
          p.vy += (dym / dm) * force;
        }

        // Dampen velocity
        p.vx *= 0.98;
        p.vy *= 0.98;

        // Clamp speed
        const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
        if (speed > 1.2) { p.vx = (p.vx / speed) * 1.2; p.vy = (p.vy / speed) * 1.2; }

        p.pulse += p.pulseSpeed;
        const alpha = p.opacity * (0.65 + 0.35 * Math.sin(p.pulse));

        // Outer glow ring
        const glow = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 4);
        glow.addColorStop(0, `hsla(${p.hue},90%,60%,${alpha * 0.5})`);
        glow.addColorStop(1, `hsla(${p.hue},90%,60%,0)`);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 4, 0, Math.PI * 2);
        ctx.fillStyle = glow;
        ctx.fill();

        // Core
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue},90%,70%,${alpha})`;
        ctx.fill();

        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
      }

      raf = requestAnimationFrame(draw);
    }

    draw();
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      canvas.removeEventListener('mousemove', onMouseMove);
      canvas.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 0.85, pointerEvents: 'none', zIndex: 1 }}
    />
  );
}
