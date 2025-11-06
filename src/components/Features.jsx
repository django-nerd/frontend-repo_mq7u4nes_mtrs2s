import { motion } from 'framer-motion';
import { Shield, Zap, Layers } from 'lucide-react';

const items = [
  {
    icon: Shield,
    title: 'Smooth Performance',
    desc: 'GPU-accelerated animations and efficient canvas rendering keep interactions fluid at 60fps.',
  },
  {
    icon: Zap,
    title: 'Interactive Depth',
    desc: 'Subtle parallax and cursor proximity create a sense of space without overwhelming the UI.',
  },
  {
    icon: Layers,
    title: 'Modular Design',
    desc: 'A minimal, component-driven architecture makes it easy to extend and remix the experience.',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative w-full bg-black py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(6,182,212,0.05)_0%,transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <h3 className="text-center text-sm font-medium tracking-widest text-emerald-300/80">ENGINEERED MOTION</h3>
        <h2 className="mt-2 text-center text-3xl font-semibold text-white sm:text-4xl">Built for immersion</h2>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="relative overflow-hidden rounded-xl border border-white/5 bg-white/[0.03] p-6 backdrop-blur"
            >
              <div className="mb-4 inline-flex items-center justify-center rounded-lg border border-emerald-400/30 bg-emerald-400/10 p-2 text-emerald-300">
                <it.icon className="h-5 w-5" />
              </div>
              <h4 className="text-lg font-semibold text-white">{it.title}</h4>
              <p className="mt-2 text-sm text-zinc-300/90">{it.desc}</p>
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-emerald-400/10 blur-3xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
