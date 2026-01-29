'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Menu, X, Github, Sun, Moon } from 'lucide-react';

const navLinks = [
  { label: 'Manifesto', href: '#manifesto' },
  { label: 'Architecture', href: '#architecture' },
  { label: 'UI Kit', href: '#uikit' },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        className={`fixed top-0 left-0 right-0 h-24 px-10 flex items-center justify-between sticky top-0 z-50 backdrop-blur-xl transition-all duration-500 ${
          isScrolled ? 'bg-slate-950/80 border-b border-white/10' : 'bg-transparent'
        }`}
      >
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-3"
        >
          <motion.div
            whileHover={{ rotate: 180, scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 200 }}
            className="bg-gradient-to-br from-violet-500 to-fuchsia-500 p-2.5 rounded-xl flex items-center justify-center"
          >
            <svg className="text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
              <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
            </svg>
          </motion.div>
          <h1 className="text-xl font-black tracking-tight uppercase bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
            Motion<span className="text-violet-400">Prime</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity  : 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="hidden lg:flex items-center gap-12"
        >
          {navLinks.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * (i + 1) }}
              className="text-xs font-black uppercase tracking-[0.2em] text-white/40 hover:text-white transition-colors duration-300"
            >
              {link.label}
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="flex items-center gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.1, rotate: 10 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsDark(!isDark)}
            className="p-2.5 rounded-xl transition-colors bg-white/5 hover:bg-white/10"
          >
            {isDark ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-slate-400" />}
          </motion.button>

          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com"
            target="_blank"
            className="p-2.5 rounded-xl transition-colors bg-white/5 hover:bg-white/10"
          >
            <Github className="w-5 h-5 text-white/60" />
          </motion.a>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white font-black rounded-xl text-sm hover:shadow-lg hover:shadow-violet-500/30 transition-all"
          >
            Download v2.0
          </motion.button>
        </motion.div>

        <button
          className="lg:hidden p-2.5 rounded-xl bg-white/5"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </motion.nav>

      <motion.div
        initial={{ opacity: 0, x: '100%' }}
        animate={{ opacity: isMenuOpen ? 1 : 0, x: isMenuOpen ? '0%' : '100%' }}
        transition={{ type: 'spring', damping: 20 }}
        className="fixed inset-0 bg-slate-950 z-40 lg:hidden pt-32 px-6"
      >
        <div className="flex flex-col gap-8 text-center">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * i }}
              className="text-4xl font-black bg-gradient-to-r from-white to-white/40 bg-clip-text text-transparent"
            >
              {link.label}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </>
  );
}
