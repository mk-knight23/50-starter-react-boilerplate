import { motion } from 'framer-motion';
import { Github } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-20 px-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6 max-w-xs"
        >
          <div className="flex items-center gap-3">
            <motion.div
              whileHover={{ rotate: 180 }}
              transition={{ type: 'spring', stiffness: 200 }}
              className="bg-gradient-to-br from-violet-500 to-fuchsia-500 p-2 rounded-xl"
            >
              <svg className="text-white" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
                <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
              </svg>
            </motion.div>
            <span className="font-black text-lg tracking-tighter uppercase text-white">
              Motion<span className="text-violet-400">Prime</span>
            </span>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-sm leading-relaxed font-medium italic text-white/40"
          >
            Redefining the standard for animated React development environments.
          </motion.p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="https://github.com"
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg text-sm text-white/60 hover:text-white transition-colors"
          >
            <Github className="w-4 h-4" />
            View on GitHub
          </motion.a>
        </motion.div>

        <motion.nav
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 gap-16 uppercase tracking-widest text-[10px] font-black"
          aria-label="Footer navigation"
        >
          <div className="space-y-4">
            <p className="text-white/40">Framework</p>
            <div className="flex flex-col gap-3">
              <a href="#" className="text-white/60 hover:text-violet-400 transition-colors">Components</a>
              <a href="#" className="text-white/60 hover:text-violet-400 transition-colors">Animation</a>
              <a href="#" className="text-white/60 hover:text-violet-400 transition-colors">Hooks</a>
            </div>
          </div>
          <div className="space-y-4">
            <p className="text-white/40">Resources</p>
            <div className="flex flex-col gap-3">
              <a href="#" className="text-white/60 hover:text-violet-400 transition-colors">Docs</a>
              <a href="#" className="text-white/60 hover:text-violet-400 transition-colors">Examples</a>
              <a href="#" className="text-white/60 hover:text-violet-400 transition-colors">Guide</a>
            </div>
          </div>
          <div className="space-y-4">
            <p className="text-white/40">Project</p>
            <div className="flex flex-col gap-3">
              <a href="#" className="text-white/60 hover:text-violet-400 transition-colors">Github</a>
              <a href="#" className="text-white/60 hover:text-violet-400 transition-colors">License</a>
              <a href="#" className="text-white/60 hover:text-violet-400 transition-colors">Author</a>
            </div>
          </div>
        </motion.nav>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 text-center text-white/30 text-sm"
      >
        <p>© 2026 MotionPrime. Built for creators who demand excellence.</p>
      </motion.div>
    </footer>
  );
}
