'use client';

import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Linkedin, Instagram, ArrowUpRight, Mail, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

export default function Footer() {
  const { scrollY } = useScroll();
  
  // Parallax effects
  const backgroundY = useTransform(scrollY, [0, 1000], [0, -50]);
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    website: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Footer form submission:', formData);
  };

  const navigation = [
    { name: 'Ana Sayfa', href: '/' },
    { name: 'Hakkımızda', href: '/about' },
    { name: 'Hizmetler', href: '/services' },
    { name: 'Referanslar', href: '/references' },
    { name: 'İletişim', href: '/contact' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 40
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 text-white overflow-hidden">
      
      {/* Premium Animated Background */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        style={{ y: backgroundY }}
      >
        {/* Soft gradient base */}
        <motion.div
          className="absolute inset-0 opacity-20"
          animate={{
            background: [
              'radial-gradient(circle at 25% 25%, rgba(99, 102, 241, 0.08) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(168, 85, 247, 0.06) 0%, transparent 50%)',
              'radial-gradient(circle at 75% 25%, rgba(168, 85, 247, 0.08) 0%, transparent 50%), radial-gradient(circle at 25% 75%, rgba(59, 130, 246, 0.06) 0%, transparent 50%)',
              'radial-gradient(circle at 25% 25%, rgba(99, 102, 241, 0.08) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(168, 85, 247, 0.06) 0%, transparent 50%)'
            ]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut" as const
          }}
        />
        
        {/* Floating particles */}
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/5 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -80, 0],
              opacity: [0.05, 0.15, 0.05],
              scale: [1, 2.5, 1]
            }}
            transition={{
              duration: 20 + i * 2,
              repeat: Infinity,
              ease: "easeInOut" as const,
              delay: i * 1.5
            }}
          />
        ))}
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-3 gap-16"
        >
          {/* Brand and Contact */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <motion.div 
                className="flex items-center gap-3 mb-6"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/25">
                  <span className="text-white font-black text-xl">O</span>
                </div>
                <h3 className="text-3xl font-black bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent tracking-tight">
                  OZANTARIK
                </h3>
              </motion.div>
              <p className="text-gray-400 leading-relaxed text-lg font-light">
                8 yıldır markaların dijital dönüşümünde öncü rol oynuyoruz. 
                Satışı artıran, karlılığı yükselten ve markanızı güçlendiren 
                çözümlerle yanınızdayız.
              </p>
            </div>
            
            {/* Premium Contact Cards */}
            <div className="space-y-4">
              {/* Email */}
              <motion.div 
                className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 group"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500/20 to-indigo-500/20 rounded-xl flex items-center justify-center group-hover:from-purple-500/30 group-hover:to-indigo-500/30 transition-all duration-300">
                  <Mail className="w-5 h-5 text-white/80" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm font-medium">Email</p>
                  <a 
                    href="mailto:to@ozantarik.com" 
                    className="text-white hover:text-purple-300 transition-colors text-lg font-semibold"
                  >
                    to@ozantarik.com
                  </a>
                </div>
              </motion.div>

              {/* Address */}
              <motion.div 
                className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 group"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center group-hover:from-blue-500/30 group-hover:to-cyan-500/30 transition-all duration-300">
                  <MapPin className="w-5 h-5 text-white/80" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm font-medium">Adres</p>
                  <p className="text-white font-semibold">ATER TOWER İZMİR, TÜRKİYE</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Navigation Links */}
          <motion.div variants={itemVariants} className="space-y-8">
            <h4 className="text-xl font-bold text-white">Sayfalar</h4>
            <nav className="grid grid-cols-1 gap-3">
              {navigation.map((link) => (
                <motion.div
                  key={link.href}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    href={link.href}
                    className="group flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-300 text-base font-medium py-2 px-3 rounded-xl hover:bg-white/5"
                  >
                    <span className="w-2 h-2 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Social Links */}
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-white">Sosyal Medya</h4>
              <div className="flex gap-4">
                <motion.a 
                  href="#" 
                  className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center hover:bg-blue-500/20 transition-all duration-300 group border border-white/10"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Linkedin className="w-6 h-6 text-white/60 group-hover:text-blue-400 transition-colors duration-300" />
                </motion.a>
                <motion.a 
                  href="#" 
                  className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center hover:bg-pink-500/20 transition-all duration-300 group border border-white/10"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Instagram className="w-6 h-6 text-white/60 group-hover:text-pink-400 transition-colors duration-300" />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Premium Contact Form */}
          <motion.div variants={itemVariants} className="space-y-8">
            <h4 className="text-xl font-bold text-white">Hızlı İletişim</h4>
            <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-3xl p-6 border border-white/10">
              
              {/* Background Effects */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/5 via-blue-500/5 to-indigo-500/5 opacity-50" />
              
              <form onSubmit={handleSubmit} className="relative space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Adınız*"
                    className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/20 transition-all duration-300 backdrop-blur-sm text-sm"
                  />
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Soyadınız"
                    className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/20 transition-all duration-300 backdrop-blur-sm text-sm"
                  />
                </div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="E-posta*"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/20 transition-all duration-300 backdrop-blur-sm text-sm"
                />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Telefon*"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/20 transition-all duration-300 backdrop-blur-sm text-sm"
                />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Mesajınız*"
                  rows={3}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/20 transition-all duration-300 resize-none backdrop-blur-sm text-sm"
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white py-3 rounded-xl font-semibold hover:from-purple-600 hover:to-indigo-600 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-purple-500/25"
                >
                  <Send className="w-4 h-4" />
                  Gönder
                </motion.button>
              </form>
            </div>
          </motion.div>
        </motion.div>

        {/* Premium Bottom Section */}
        <motion.div 
          className="border-t border-white/10 mt-16 pt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-8 lg:space-y-0">
            <div className="flex items-center gap-8">
              <div className="text-gray-400 text-lg font-light">
                © 2024 ozantarık
              </div>
              <div className="hidden lg:flex items-center gap-6 text-gray-400 text-sm">
                <Link href="/privacy" className="hover:text-white transition-colors">Gizlilik Politikası</Link>
                <Link href="/terms" className="hover:text-white transition-colors">Kullanım Şartları</Link>
              </div>
            </div>
            
            {/* Premium CTA */}
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                href="/contact"
                className="group bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-8 py-3 rounded-full font-semibold hover:from-purple-600 hover:to-indigo-600 transition-all duration-300 flex items-center gap-2 shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/40"
              >
                Projeni Başlat
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
} 
