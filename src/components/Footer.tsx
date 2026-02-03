import { motion } from 'framer-motion';
import { Github, Sparkles } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-16 px-6 border-t border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center gap-2">
              <div className="bg-gradient-to-br from-primary to-violet p-2 rounded-xl">
                <Sparkles className="text-white w-5 h-5" />
              </div>
              <span className="font-bold text-lg text-slate-900">
                React<span className="text-primary">Prime</span>
              </span>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed">
              A production-ready React 19 boilerplate with TypeScript, Vite, and Tailwind CSS.
            </p>
            <a
              href="https://github.com"
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-primary transition-colors"
            >
              <Github className="w-4 h-4" />
              View on GitHub
            </a>
          </motion.div>

          {/* Resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-semibold text-slate-900 mb-4">Resources</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="text-slate-500 hover:text-primary transition-colors">Documentation</a>
              </li>
              <li>
                <a href="#" className="text-slate-500 hover:text-primary transition-colors">API Reference</a>
              </li>
              <li>
                <a href="#" className="text-slate-500 hover:text-primary transition-colors">Examples</a>
              </li>
              <li>
                <a href="#" className="text-slate-500 hover:text-primary transition-colors">Changelog</a>
              </li>
            </ul>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-semibold text-slate-900 mb-4">Features</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="text-slate-500 hover:text-primary transition-colors">TypeScript</a>
              </li>
              <li>
                <a href="#" className="text-slate-500 hover:text-primary transition-colors">Vite</a>
              </li>
              <li>
                <a href="#" className="text-slate-500 hover:text-primary transition-colors">Tailwind CSS</a>
              </li>
              <li>
                <a href="#" className="text-slate-500 hover:text-primary transition-colors">Testing</a>
              </li>
            </ul>
          </motion.div>

          {/* Community */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="font-semibold text-slate-900 mb-4">Community</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="text-slate-500 hover:text-primary transition-colors">GitHub</a>
              </li>
              <li>
                <a href="#" className="text-slate-500 hover:text-primary transition-colors">Discord</a>
              </li>
              <li>
                <a href="#" className="text-slate-500 hover:text-primary transition-colors">Twitter</a>
              </li>
              <li>
                <a href="#" className="text-slate-500 hover:text-primary transition-colors">Contributing</a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-sm text-slate-500">
            © 2026 ReactPrime. Built with ❤️ for the React community.
          </p>
          <div className="flex items-center gap-6 text-sm text-slate-500">
            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms</a>
            <a href="#" className="hover:text-primary transition-colors">License</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
