'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-10 py-40 space-y-16">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="max-w-3xl space-y-8"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-gradient-to-r from-violet-500/10 to-fuchsia-500/10 border border-violet-500/20"
        >
          <motion.span
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-2.5 h-2.5 bg-violet-500 rounded-full"
          />
          <span className="text-[10px] font-black uppercase tracking-[0.25em] text-violet-400">Motion First Platform</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-7xl md:text-9xl font-black tracking-tighter leading-[0.85] uppercase"
        >
          Ship <br />
          <motion.span
            animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
            className="italic font-light bg-gradient-to-r from-violet-400 via-fuchsia-400 to-violet-400 bg-clip-text text-transparent bg-[length:200%_auto]"
          >
            Animated
          </motion.span> <br />
          Applications.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-xl leading-relaxed max-w-xl text-white/40"
        >
          A battle-tested React boilerplate engineered for production-ready, heavily animated interfaces. Modular, type-safe, and stunning by default.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="flex flex-wrap gap-5 pt-6"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(139, 92, 246, 0.4)' }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-5 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white font-black rounded-2xl text-lg flex items-center gap-3 group cursor-pointer"
          >
            Get Started
            <motion.span
              whileHover={{ x: 10 }}
              transition={{ type: 'spring', stiffness: 200 }}
            >
              <ArrowRight className="w-5 h-5" />
            </motion.span>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-5 border border-white/20 rounded-2xl font-black text-lg backdrop-blur-sm transition-all"
          >
            Documentation
          </motion.button>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        role="list"
        aria-label="Features"
      >
        {[
          { title: 'Framer Motion', desc: 'Production-ready animation primitives with spring physics.', delay: 0 },
          { title: 'Type Safe', desc: 'End-to-end type safety with TypeScript 5.', delay: 0.1 },
          { title: 'Modular', desc: 'Domain-driven feature structure for scalability.', delay: 0.2 },
          { title: 'Tailwind v4', desc: 'Next-gen CSS with @theme and native nesting.', delay: 0.3 },
        ].map((feature) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: feature.delay + 1.2, duration: 0.5 }}
            whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(139, 92, 246, 0.2)' }}
            className="group p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 hover:border-violet-500/50 transition-all cursor-pointer"
            role="listitem"
          >
            <motion.div
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.5 }}
              className="w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 flex items-center justify-center mb-6 group-hover:from-violet-500/30 group-hover:to-fuchsia-500/30 transition-all"
            >
              <div className="w-5 h-5 bg-gradient-to-r from-violet-400 to-fuchsia-400 rounded-sm" />
            </motion.div>
            <h3 className="text-lg font-bold uppercase tracking-tight mb-3 text-white">{feature.title}</h3>
            <p className="text-sm leading-relaxed text-white/40 group-hover:text-white/60 transition-colors">{feature.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
