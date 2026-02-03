'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Zap, Shield, Box, Palette } from 'lucide-react';

export function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 pt-32 pb-20">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20"
          >
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 bg-primary rounded-full"
            />
            <span className="text-sm font-semibold text-primary">React 19 Ready</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-5xl md:text-6xl font-bold tracking-tight text-slate-900 leading-tight"
          >
            Build Better{' '}
            <span className="gradient-text">React Apps</span>{' '}
            Faster
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-lg text-slate-600 max-w-lg leading-relaxed"
          >
            A production-ready boilerplate with TypeScript, Vite, and Tailwind CSS.
            Start your next project with confidence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.02, boxShadow: '0 10px 30px rgba(37, 99, 235, 0.3)' }}
              whileTap={{ scale: 0.98 }}
              className="btn-primary px-8 py-4 text-base"
            >
              Get Started
              <ArrowRight className="w-5 h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-secondary px-8 py-4 text-base"
            >
              View Documentation
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="flex items-center gap-6 pt-4"
          >
            <div className="flex -space-x-2">
              {['bg-blue-500', 'bg-violet-500', 'bg-emerald-500', 'bg-amber-500'].map((color, i) => (
                <div key={i} className={`w-8 h-8 rounded-full ${color} border-2 border-white`} />
              ))}
            </div>
            <p className="text-sm text-slate-500">
              Trusted by <span className="font-semibold text-slate-900">2,000+</span> developers
            </p>
          </motion.div>
        </motion.div>

        {/* Right Content - Feature Cards */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="grid grid-cols-2 gap-4"
        >
          {[
            {
              icon: Zap,
              title: 'Lightning Fast',
              desc: 'Vite 6 powered',
              color: 'from-amber-400 to-orange-500',
              bgColor: 'bg-amber-50'
            },
            {
              icon: Shield,
              title: 'Type Safe',
              desc: 'TypeScript 5.9+',
              color: 'from-blue-500 to-cyan-500',
              bgColor: 'bg-blue-50'
            },
            {
              icon: Box,
              title: 'Modular',
              desc: 'Feature-based',
              color: 'from-violet-500 to-purple-500',
              bgColor: 'bg-violet-50'
            },
            {
              icon: Palette,
              title: 'Beautiful UI',
              desc: 'Tailwind v4',
              color: 'from-emerald-400 to-teal-500',
              bgColor: 'bg-emerald-50'
            },
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
              whileHover={{ y: -4, boxShadow: '0 12px 24px rgba(0,0,0,0.08)' }}
              className="card card-hover p-6 cursor-pointer"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 shadow-lg`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-slate-900 mb-1">{feature.title}</h3>
              <p className="text-sm text-slate-500">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
