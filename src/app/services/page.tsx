'use client';

import { motion } from 'framer-motion';
import { 
  Share2, 
  Search, 
  Mail, 
  Zap, 
  Target, 
  BarChart3, 
  Users,
  ArrowRight,
  CheckCircle,
  LucideIcon
} from 'lucide-react';
import { services } from '@/constants/services';

// Icon mapping
const iconMap: Record<string, LucideIcon> = {
  Share2,
  Search,
  Mail,
  Zap,
  Target,
  BarChart3,
  Users
};

export default function ServicesPage() {
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
        type: "spring" as const,
        stiffness: 100
      }
    }
  };

  const pricingPlans = [
    {
      name: 'Starter',
      price: '2.500',
      period: 'aylık',
      features: [
        'Sosyal Medya Yönetimi',
        'Temel Google Ads',
        'Aylık 20 Post',
        'Temel Analytics',
        'Email Destek'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '5.000',
      period: 'aylık',
      features: [
        'Tüm Starter Özellikler',
        'Gelişmiş Google Ads',
        'Sınırsız Post',
        'Detaylı Analytics',
        'Influencer Marketing',
        'Öncelikli Destek'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '10.000',
      period: 'aylık',
      features: [
        'Tüm Professional Özellikler',
        'Özel Strateji Geliştirme',
        'Dedicated Account Manager',
        'Özel Raporlama',
        'Marka Danışmanlığı',
        '7/24 Destek'
      ],
      popular: false
    }
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
              HİZMETLERİMİZ
            </motion.h1>
            <motion.p 
              variants={itemVariants}
              className="text-xl text-gray-400 max-w-3xl mx-auto mb-8"
            >
              Dijital pazarlama alanında sunduğumuz kapsamlı çözümlerle markanızı zirveye taşıyoruz.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service) => {
              const Icon = iconMap[service.icon];
              return (
                <motion.div
                  key={service.id}
                  variants={itemVariants}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-indigo-500/30 transition-all duration-500 group"
                >
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-2xl mb-6 group-hover:from-indigo-500/30 group-hover:to-purple-500/30 transition-all duration-300">
                    {Icon && <Icon className="w-8 h-8 text-white/90" />}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-400 mb-6">{service.description}</p>
                  <div className="flex items-center text-indigo-400 font-semibold hover:text-indigo-300 transition-colors cursor-pointer">
                    Detaylı Bilgi
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
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
              className="text-4xl md:text-5xl font-black text-white mb-4"
            >
              Fiyatlandırma
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-xl text-gray-400 max-w-2xl mx-auto"
            >
              İhtiyaçlarınıza uygun paket seçenekleri
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className={`relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-3xl p-8 border transition-all duration-500 ${
                  plan.popular 
                    ? 'border-indigo-500/50 shadow-xl shadow-indigo-500/20' 
                    : 'border-white/10 hover:border-indigo-500/30'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      EN POPÜLER
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-center justify-center mb-2">
                    <span className="text-4xl font-black text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-2">₺/{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-indigo-400 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-4 rounded-2xl font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:from-indigo-600 hover:to-purple-600'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}>
                  Başlayın
                </button>
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
              Projenizi Konuşalım
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-xl text-gray-400 mb-8"
            >
              Size özel çözümler geliştirmek için görüşelim
            </motion.p>
            <motion.div variants={itemVariants}>
              <button className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 hover:scale-105">
                Ücretsiz Görüşme Ayarla
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 
