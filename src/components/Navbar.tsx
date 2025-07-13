'use client';

import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  
  // Smooth scroll-based opacity for premium effect
  const navbarOpacity = useTransform(scrollY, [0, 100], [0.8, 0.95]);
  const navbarBlur = useTransform(scrollY, [0, 100], [8, 20]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Ana Sayfa', href: '/' },
    { name: 'Hakkımızda', href: '/about' },
    { name: 'Hizmetler', href: '/services' },
    { name: 'Referanslar', href: '/references' },
    { name: 'İletişim', href: '/contact' },
  ];

  return (
    <motion.nav 
      style={{ 
        backgroundColor: isScrolled ? 'rgba(30, 41, 59, 0.9)' : 'rgba(30, 41, 59, 0.6)',
        backdropFilter: `blur(${isScrolled ? '20px' : '8px'})`,
        opacity: navbarOpacity
      }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'border-b border-indigo-500/10 shadow-lg shadow-indigo-500/5' 
          : 'border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Premium Logo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            className="flex-shrink-0"
          >
            <Link href="/" className="group flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/25 group-hover:shadow-xl group-hover:shadow-indigo-500/40 transition-all duration-300">
                <span className="text-white font-black text-lg">O</span>
              </div>
              <span className="text-2xl font-black bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent tracking-wider">
                OZANTARIK
              </span>
            </Link>
          </motion.div>

          {/* Premium Desktop Navigation */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden md:block"
          >
            <div className="flex items-center space-x-1">
              {navigation.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <Link
                    href={item.href}
                    className="group relative text-white/80 hover:text-white px-4 py-2 text-sm font-medium tracking-wide transition-all duration-300 rounded-lg hover:bg-white/5"
                  >
                    <span className="relative z-10">{item.name}</span>
                    {/* Smooth hover indicator */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      whileHover={{ scale: 1.05 }}
                    />
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Premium CTA Button */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden md:block"
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/contact"
                className="group bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-6 py-3 rounded-full text-sm font-semibold tracking-wide hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 flex items-center space-x-2 shadow-lg shadow-indigo-500/25 hover:shadow-xl hover:shadow-indigo-500/40"
              >
                <span>Görüşme Ayarla</span>
                <motion.div
                  className="w-2 h-2 bg-white/80 rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </Link>
            </motion.div>
          </motion.div>

          {/* Premium Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="text-white/80 hover:text-white focus:outline-none transition-colors duration-300 p-2 rounded-lg hover:bg-white/5"
            >
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </motion.div>
            </motion.button>
          </div>
        </div>

        {/* Premium Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
            className="md:hidden bg-gradient-to-br from-slate-800/95 to-slate-900/95 backdrop-blur-xl rounded-2xl m-4 p-4 border border-white/10 shadow-xl shadow-indigo-500/10"
          >
            <div className="space-y-2">
              {navigation.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                >
                  <Link
                    href={item.href}
                    className="group flex items-center text-white/80 hover:text-white px-4 py-3 text-base font-medium tracking-wide transition-all duration-300 rounded-xl hover:bg-white/5"
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="relative z-10">{item.name}</span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      whileHover={{ scale: 1.02 }}
                    />
                  </Link>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                className="pt-4"
              >
                <Link
                  href="/contact"
                  className="group bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-6 py-3 rounded-full text-sm font-semibold tracking-wide hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-indigo-500/25 hover:shadow-xl hover:shadow-indigo-500/40"
                  onClick={() => setIsOpen(false)}
                >
                  <span>Görüşme Ayarla</span>
                  <motion.div
                    className="w-2 h-2 bg-white/80 rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
} 