'use client';

import { motion } from 'framer-motion';
import { 
  Globe, 
  Building, 
  ShoppingCart, 
  Heart, 
  GraduationCap, 
  Car, 
  Home, 
  Smartphone,
  Briefcase,
  Users,
  TrendingUp,
  MapPin,
  Star,
  CheckCircle
} from 'lucide-react';

export default function SectorsPage() {
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
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        type: "spring",
        stiffness: 100
      }
    }
  };

  const sectors = [
    {
      icon: ShoppingCart,
      title: 'E-Ticaret',
      description: 'Online satış kanallarınızı güçlendirin',
      projects: '150+',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Heart,
      title: 'Sağlık',
      description: 'Hasta deneyimini dijitalleştirin',
      projects: '80+',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: GraduationCap,
      title: 'Eğitim',
      description: 'Öğrenme deneyimini geliştirin',
      projects: '120+',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Building,
      title: 'Finans',
      description: 'Güvenilir fintech çözümleri',
      projects: '90+',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Car,
      title: 'Otomotiv',
      description: 'Mobility geleceğini şekillendirin',
      projects: '60+',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      icon: Home,
      title: 'Emlak',
      description: 'Proptech inovasyonları',
      projects: '70+',
      color: 'from-teal-500 to-cyan-500'
    },
    {
      icon: Smartphone,
      title: 'Teknoloji',
      description: 'Cutting-edge tech solutions',
      projects: '200+',
      color: 'from-indigo-500 to-blue-500'
    },
    {
      icon: Briefcase,
      title: 'B2B Hizmetler',
      description: 'Kurumsal çözümler',
      projects: '110+',
      color: 'from-gray-500 to-slate-500'
    }
  ];

  const countries = [
    {
      name: 'Türkiye',
      flag: '🇹🇷',
      projects: '500+',
      description: 'Ana pazarımız'
    },
    {
      name: 'Almanya',
      flag: '🇩🇪',
      projects: '80+',
      description: 'Avrupa hub'
    },
    {
      name: 'Hollanda',
      flag: '🇳🇱',
      projects: '45+',
      description: 'Batı Avrupa'
    },
    {
      name: 'İngiltere',
      flag: '🇬🇧',
      projects: '35+',
      description: 'İngilizce pazar'
    },
    {
      name: 'Fransa',
      flag: '🇫🇷',
      projects: '25+',
      description: 'Frankofon pazar'
    },
    {
      name: 'İtalya',
      flag: '🇮🇹',
      projects: '20+',
      description: 'Güney Avrupa'
    },
    {
      name: 'İspanya',
      flag: '🇪🇸',
      projects: '30+',
      description: 'İspanyolca pazar'
    },
    {
      name: 'ABD',
      flag: '🇺🇸',
      projects: '15+',
      description: 'Kuzey Amerika'
    }
  ];

  const stats = [
    { number: '25+', label: 'Farklı Sektör', icon: Building },
    { number: '40+', label: 'Ülke Deneyimi', icon: Globe },
    { number: '500+', label: 'Başarılı Proje', icon: TrendingUp },
    { number: '15+', label: 'Yıllık Tecrübe', icon: Star }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-blue-500/10" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="text-center"
          >
            <motion.h1 
              variants={itemVariants}
              className="text-5xl md:text-7xl font-black bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent leading-tight mb-6"
            >
              SEKTÖRLER & ÜLKELER
            </motion.h1>
            <motion.p 
              variants={itemVariants}
              className="text-xl text-gray-400 max-w-3xl mx-auto mb-8"
            >
              25+ farklı sektörde, 40+ ülkede başarılı projeler gerçekleştirdik. 
              Global deneyimimiz ve yerel uzmanlığımızla markanızı her yerde büyütüyoruz.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-500/5 to-purple-500/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center group-hover:from-indigo-500/30 group-hover:to-purple-500/30 transition-all duration-300">
                    <stat.icon className="w-8 h-8 text-white/90" />
                  </div>
                </div>
                <div className="text-4xl font-black text-white mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="text-center mb-16"
          >
            <motion.h2 
              variants={itemVariants}
              className="text-4xl md:text-5xl font-black text-white mb-6"
            >
              Sektörlerimiz
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-xl text-gray-400 max-w-3xl mx-auto"
            >
              Farklı sektörlerdeki derin uzmanlığımızla markanızı öne çıkarıyoruz
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sectors.map((sector, index) => (
              <motion.div
                key={sector.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-indigo-500/30 transition-all duration-500 group text-center"
              >
                <div className="flex justify-center mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${sector.color} rounded-2xl flex items-center justify-center opacity-80 group-hover:opacity-100 transition-all duration-300`}>
                    <sector.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{sector.title}</h3>
                <p className="text-gray-400 mb-4">{sector.description}</p>
                <div className="text-2xl font-black text-indigo-400">{sector.projects}</div>
                <div className="text-gray-400 text-sm">Proje</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Countries Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-500/5 to-purple-500/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="text-center mb-16"
          >
            <motion.h2 
              variants={itemVariants}
              className="text-4xl md:text-5xl font-black text-white mb-6"
            >
              Global Erişim
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-xl text-gray-400 max-w-3xl mx-auto"
            >
              Dünya çapında 40+ ülkede başarılı projeler gerçekleştirdik
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {countries.map((country, index) => (
              <motion.div
                key={country.name}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-3xl p-6 border border-white/10 hover:border-indigo-500/30 transition-all duration-500 group text-center"
              >
                <div className="text-4xl mb-4">{country.flag}</div>
                <h3 className="text-lg font-bold text-white mb-2">{country.name}</h3>
                <p className="text-gray-400 text-sm mb-3">{country.description}</p>
                <div className="text-xl font-black text-indigo-400">{country.projects}</div>
                <div className="text-gray-400 text-xs">Proje</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2 
              variants={itemVariants}
              className="text-4xl md:text-5xl font-black text-white mb-6"
            >
              Sektörünüzde Lider Olun
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-xl text-gray-400 mb-8"
            >
              Hangi sektörde olursanız olun, global deneyimimizle yanınızdayız
            </motion.p>
            <motion.div variants={itemVariants}>
              <button className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 hover:scale-105">
                Sektörünüz İçin Çözüm Alın
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 