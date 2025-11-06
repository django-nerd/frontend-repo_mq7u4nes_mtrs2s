import { useRef } from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { Rocket } from 'lucide-react';

export default function Hero() {
  const containerRef = useRef(null);

  return (
    <section ref={containerRef} className="relative h-[90vh] w-full overflow-hidden bg-black">
      {/* 3D Spline Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/jdTN4VDCXmSY8utE/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Soft radial vignette overlay to deepen the scene without blocking pointer */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,255,200,0.08)_0%,rgba(0,0,0,0.6)_70%,black_100%)]" />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-black/40 px-4 py-2 text-emerald-300 backdrop-blur"
        >
          <Rocket className="h-4 w-4" />
          <span className="text-xs font-medium tracking-wide">Hyperliquid Atmosphere</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }}
          className="mt-6 bg-gradient-to-b from-zinc-50 via-zinc-200 to-zinc-400 bg-clip-text text-5xl font-bold text-transparent sm:text-6xl md:text-7xl"
        >
          Futuristic Liquid Interface
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
          className="mx-auto mt-5 max-w-2xl text-base text-zinc-300/90 sm:text-lg"
        >
          An immersive, living background inspired by crypto-native aesthetics. Subtle, reactive motion meets
          minimalist design.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.3 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#explore"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-md border border-emerald-500/30 bg-emerald-500/10 px-5 py-2.5 text-sm font-medium text-emerald-200 backdrop-blur transition hover:border-emerald-400/60 hover:bg-emerald-500/20"
          >
            <span className="relative z-10">Explore the Atmosphere</span>
            <span className="pointer-events-none absolute inset-0 -translate-y-full bg-gradient-to-b from-emerald-400/20 to-transparent transition group-hover:translate-y-0" />
          </a>
          <a
            href="#features"
            className="inline-flex items-center rounded-md bg-white/10 px-5 py-2.5 text-sm font-medium text-white/90 backdrop-blur transition hover:bg-white/15"
          >
            Learn more
          </a>
        </motion.div>
      </div>
    </section>
  );
}
