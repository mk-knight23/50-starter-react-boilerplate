'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Menu, X, Github, Sparkles } from 'lucide-react';
import { SearchComponent } from './Search';

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'Documentation', href: '#docs' },
  { label: 'GitHub', href: '#github' },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => { setIsScrolled(window.scrollY > 50); };
    window.addEventListener('scroll', handleScroll);
    return () => { window.removeEventListener('scroll', handleScroll); };
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        className={`fixed top-0 left-0 right-0 h-16 px-6 flex items-center justify-between z-50 backdrop-blur-xl transition-all duration-300 ${
          isScrolled ? 'bg-white/90 border-b border-slate-200 shadow-sm' : 'bg-transparent'
        }`}
      >
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-3"
        >
          <motion.div
            whileHover={{ rotate: 10, scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 200 }}
            className="bg-gradient-to-br from-primary to-violet p-2 rounded-xl flex items-center justify-center shadow-lg shadow-primary/25"
          >
            <Sparkles className="text-white w-5 h-5" />
          </motion.div>
          <h1 className="text-xl font-bold tracking-tight text-slate-900">
            React<span className="text-primary">Prime</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="hidden lg:flex items-center gap-8"
        >
          {navLinks.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * (i + 1) }}
              className="text-sm font-medium text-slate-600 hover:text-primary transition-colors duration-200"
            >
              {link.label}
            </motion.a>
          ))}

          <SearchComponent
            onResultSelect={(result) => {
              window.location.href = result.url;
            }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="flex items-center gap-3"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com"
            target="_blank"
            className="hidden sm:flex p-2.5 rounded-xl transition-colors hover:bg-slate-100"
          >
            <Github className="w-5 h-5 text-slate-600" />
          </motion.a>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-5 py-2.5 bg-gradient-to-r from-primary to-violet text-white font-semibold rounded-xl text-sm shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all"
          >
            Get Started
          </motion.button>
        </motion.div>

        <button
          className="lg:hidden p-2.5 rounded-xl hover:bg-slate-100"
          onClick={() => { setIsMenuOpen(!isMenuOpen); }}
        >
          {isMenuOpen ? <X className="w-5 h-5 text-slate-600" /> : <Menu className="w-5 h-5 text-slate-600" />}
        </button>
      </motion.nav>

      <motion.div
        initial={{ opacity: 0, x: '100%' }}
        animate={{ opacity: isMenuOpen ? 1 : 0, x: isMenuOpen ? '0%' : '100%' }}
        transition={{ type: 'spring', damping: 20 }}
        className="fixed inset-0 bg-white z-40 lg:hidden pt-24 px-6"
      >
        <div className="flex flex-col gap-6">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              onClick={() => { setIsMenuOpen(false); }}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * i }}
              className="text-2xl font-bold text-slate-900"
            >
              {link.label}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </>
  );
}
