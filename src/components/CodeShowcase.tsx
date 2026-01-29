'use client';

import { motion } from 'framer-motion';

export function CodeShowcase() {
  return (
    <section className="py-40 bg-gradient-to-b from-transparent via-violet-500/5 to-transparent">
      <div className="max-w-7xl mx-auto px-10 grid lg:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-black uppercase tracking-tighter italic"
          >
            From Static to <br /> <span className="text-violet-400 not-italic">Spectacular.</span>
          </motion.h3>

          <div className="space-y-6">
            {[
              { label: 'Animation', text: '60fps smooth transitions with Framer Motion spring physics.' },
              { label: 'Bundle', text: 'Tree-shaken imports for minimal production payload.' },
              { label: 'DX', text: 'Hot Module Replacement with instant feedback loops.' },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-4"
              >
                <motion.div
                  animate={{ rotate: [0, 90, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  className="p-3 bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 rounded-lg text-violet-400"
                >
                  <div className="w-4 h-4 bg-violet-400 rounded-sm" />
                </motion.div>
                <div>
                  <span className="font-bold text-white">{item.label}:</span>{' '}
                  <span className="text-white/40">{item.text}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 blur-[120px] rounded-full"
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative glass border border-white/10 p-10 rounded-[3rem] space-y-8 backdrop-blur-2xl bg-white/5"
          >
            <div className="flex items-center gap-4 pb-8 border-b border-white/5">
              <div className="flex gap-2">
                <motion.div
                  animate={{ scale: [1, 0.8, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-3 h-3 rounded-full bg-red-500/50"
                />
                <motion.div
                  animate={{ scale: [1, 0.8, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                  className="w-3 h-3 rounded-full bg-amber-500/50"
                />
                <motion.div
                  animate={{ scale: [1, 0.8, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                  className="w-3 h-3 rounded-full bg-green-500/50"
                />
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="space-y-4 font-mono text-sm"
            >
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="text-violet-400/60"
              >
                // Reactive State Management
              </motion.p>
              <motion.code
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="block text-white"
              >
                <span className="text-fuchsia-400">const</span> count ={' '}
                <span className="text-violet-400">signal</span>(0);
              </motion.code>
              <motion.code
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="block text-white"
              >
                <span className="text-fuchsia-400">const</span> double ={' '}
                <span className="text-violet-400">computed</span>(() =&gt; count() * 2);
              </motion.code>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="h-20"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
