import { useEffect, useRef } from 'react';

// Organic bubbles using Canvas with mouse parallax interaction
export default function BubblesSection() {
  const canvasRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let rafId;

    const DPR = Math.min(window.devicePixelRatio || 1, 2);
    let width = 0;
    let height = 0;

    function resize() {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = Math.floor(width * DPR);
      canvas.height = Math.floor(height * DPR);
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    }

    function handleMouseMove(e) {
      const rect = canvas.getBoundingClientRect();
      mouse.current.x = (e.clientX - rect.left) / rect.width - 0.5;
      mouse.current.y = (e.clientY - rect.top) / rect.height - 0.5;
    }

    window.addEventListener('mousemove', handleMouseMove);
    const observer = new ResizeObserver(resize);
    observer.observe(canvas);

    const bubbles = Array.from({ length: 24 }).map((_, i) => ({
      x: Math.random(),
      y: Math.random(),
      r: 40 + Math.random() * 120,
      depth: 0.3 + Math.random() * 0.7, // depth controls parallax and blur
      hue: 160 + Math.random() * 60, // cyan/emerald range
      phase: Math.random() * Math.PI * 2,
      speed: 0.2 + Math.random() * 0.6,
    }));

    function draw(ts) {
      const t = ts / 1000;
      ctx.clearRect(0, 0, width, height);

      // subtle background noise
      const grad = ctx.createLinearGradient(0, 0, 0, height);
      grad.addColorStop(0, 'rgba(0,0,0,1)');
      grad.addColorStop(1, 'rgba(3,8,8,1)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      for (const b of bubbles) {
        const mx = mouse.current.x * 40 * b.depth;
        const my = mouse.current.y * 40 * b.depth;
        const px = b.x * width + mx + Math.sin(t * b.speed + b.phase) * 20 * b.depth;
        const py = b.y * height + my + Math.cos(t * b.speed + b.phase) * 20 * b.depth;

        const radial = ctx.createRadialGradient(px - b.r * 0.3, py - b.r * 0.3, b.r * 0.2, px, py, b.r * 1.2);
        radial.addColorStop(0, `hsla(${b.hue}, 80%, 70%, ${0.25 * b.depth})`);
        radial.addColorStop(0.5, `hsla(${b.hue + 20}, 90%, 60%, ${0.18 * b.depth})`);
        radial.addColorStop(1, 'rgba(0,0,0,0)');

        ctx.globalCompositeOperation = 'lighter';
        ctx.filter = `blur(${(1 - b.depth) * 6}px)`;
        ctx.fillStyle = radial;
        ctx.beginPath();
        ctx.arc(px, py, b.r, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.filter = 'none';
      ctx.globalCompositeOperation = 'source-over';

      rafId = requestAnimationFrame(draw);
    }

    rafId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafId);
      observer.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section id="explore" className="relative w-full bg-black py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.06)_0%,transparent_60%)]" />
      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 md:grid-cols-2">
        <div className="relative order-2 md:order-1">
          <h2 className="bg-gradient-to-b from-emerald-200 to-cyan-200 bg-clip-text text-3xl font-semibold text-transparent sm:text-4xl">
            A living, breathing background
          </h2>
          <p className="mt-4 text-zinc-300/90">
            Organic, liquid-like bubbles drift in a deep space canvas. They subtly react to your cursor, creating a
            sense of depth and presence without distracting from your content.
          </p>
          <ul className="mt-6 space-y-2 text-zinc-300/80">
            <li>• Parallax motion based on depth</li>
            <li>• Soft glow and additive blending for a neon feel</li>
            <li>• Efficient rendering via requestAnimationFrame</li>
          </ul>
        </div>
        <div className="order-1 h-[360px] rounded-xl border border-white/5 bg-black/50 backdrop-blur md:order-2">
          <canvas ref={canvasRef} className="h-full w-full" />
        </div>
      </div>
    </section>
  );
}
