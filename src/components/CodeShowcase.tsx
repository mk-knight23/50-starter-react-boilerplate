'use client';

import { motion } from 'framer-motion';
import { Code2, Zap, Package, Terminal } from 'lucide-react';

export function CodeShowcase() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Everything You Need to{' '}
            <span className="gradient-text">Ship Faster</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A complete development environment with modern tooling and best practices built-in.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {[
            {
              icon: Code2,
              title: 'TypeScript First',
              desc: 'Full type safety with strict configuration and no any types allowed.',
              color: 'from-blue-500 to-cyan-500',
            },
            {
              icon: Zap,
              title: 'Vite Powered',
              desc: 'Lightning fast HMR and optimized builds for production.',
              color: 'from-amber-400 to-orange-500',
            },
            {
              icon: Package,
              title: 'Feature Based',
              desc: 'Scalable architecture with domain-driven folder structure.',
              color: 'from-violet-500 to-purple-500',
            },
            {
              icon: Terminal,
              title: 'Testing Ready',
              desc: 'Vitest + Testing Library setup with coverage reporting.',
              color: 'from-emerald-400 to-teal-500',
            },
            {
              icon: Code2,
              title: 'ESLint + Prettier',
              desc: 'Consistent code style with automated formatting and linting.',
              color: 'from-rose-400 to-pink-500',
            },
            {
              icon: Zap,
              title: 'Git Hooks',
              desc: 'Husky pre-commit hooks to ensure code quality.',
              color: 'from-indigo-400 to-blue-500',
            },
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="card card-hover p-6"
            >
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 shadow-lg`}
              >
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">{feature.title}</h3>
              <p className="text-sm text-slate-500">{feature.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Code Preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="card overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 bg-slate-900 border-b border-slate-700">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500" />
                <div className="w-3 h-3 rounded-full bg-amber-500" />
                <div className="w-3 h-3 rounded-full bg-emerald-500" />
              </div>
              <span className="ml-4 text-xs text-slate-400">App.tsx</span>
            </div>
            <div className="p-6 bg-slate-900 overflow-x-auto">
              <pre className="text-sm font-mono">
                <code>
                  <span className="text-purple-400">import</span>
                  <span className="text-slate-300"> {'{ useState }'} </span>
                  <span className="text-purple-400">from</span>
                  <span className="text-green-400"> 'react'</span>
                  <span className="text-slate-300">;</span>
                  {'\n'}
                  {'\n'}
                  <span className="text-purple-400">export function</span>
                  <span className="text-blue-400"> Counter</span>
                  <span className="text-slate-300">() {'{'}</span>
                  {'\n'}
                  <span className="text-slate-300"> {'  '}const [count, setCount] = </span>
                  <span className="text-blue-400">useState</span>
                  <span className="text-slate-300">(0);</span>
                  {'\n'}
                  {'\n'}
                  <span className="text-slate-300"> {'  '}return (</span>
                  {'\n'}
                  <span className="text-slate-300"> {'    '}&lt;</span>
                  <span className="text-blue-400">button</span>
                  {'\n'}
                  <span className="text-slate-300"> {'      '}onClick={'{'}() =&gt;</span>
                  <span className="text-blue-400">setCount</span>
                  <span className="text-slate-300">(c =&gt; c + 1){'}'}</span>
                  {'\n'}
                  <span className="text-slate-300"> {'    '}&gt;</span>
                  {'\n'}
                  <span className="text-slate-300"> {'      '}Count: {'{count}'}</span>
                  {'\n'}
                  <span className="text-slate-300"> {'    '}&lt;/</span>
                  <span className="text-blue-400">button</span>
                  <span className="text-slate-300">&gt;</span>
                  {'\n'}
                  <span className="text-slate-300"> {'  '});</span>
                  {'\n'}
                  <span className="text-slate-300">{'}'}</span>
                </code>
              </pre>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
