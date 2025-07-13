'use client';

import { motion } from 'framer-motion';
import { 
  Star, 
  Quote, 
  TrendingUp, 
  ArrowRight,
  Building,
  CheckCircle, 
  Heart
} from 'lucide-react';

export default function ReferencesPage() {
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

  const testimonials = [
    {
      id: 1,
      name: 'Mehmet Özkan',
      role: 'CEO',
      company: 'TechnoMart',
      content: 'OZANTARIK ekibi ile çalışmak harika bir deneyimdi. 12 ayda %500 büyüme elde ettik ve sektörün lideri olduk. Profesyonel yaklaşımları ve yaratıcı çözümleri takdire şayan.',
      rating: 5,
      industry: 'E-Ticaret',
      results: '+500% Büyüme',
      avatar: 'MÖ'
    },
    {
      id: 2,
      name: 'Ayşe Demir',
      role: 'Marketing Director',
      company: 'HealthPlus',
      content: 'Sağlık sektöründeki dijital dönüşüm sürecimizde OZANTARIK\'in uzmanlığı kritik rol oynadı. Hasta memnuniyetimiz %90\'a yükseldi ve dijital kanallarımız güçlendi.',
      rating: 5,
      industry: 'Sağlık',
      results: '+300% Dijital Trafik',
      avatar: 'AD'
    },
    {
      id: 3,
      name: 'Can Yılmaz',
      role: 'Founder',
      company: 'EduTech',
      content: 'Online eğitim platformumuz için geliştirdikleri strateji mükemmeldi. Öğrenci sayımız 10 katına çıktı ve platform kullanıcı deneyimi çok gelişti.',
      rating: 5,
      industry: 'Eğitim',
      results: '+1000% Öğrenci',
      avatar: 'CY'
    },
    {
      id: 4,
      name: 'Zeynep Kara',
      role: 'CMO',
      company: 'StyleHub',
      content: 'Moda markamızı uluslararası pazarda konumlandırmak için aldığımız destek harikaydı. Şimdi 15 ülkede satış yapıyoruz ve marka bilinirliğimiz çok arttı.',
      rating: 5,
      industry: 'Moda',
      results: '+600% Global Reach',
      avatar: 'ZK'
    },
    {
      id: 5,
      name: 'Ahmet Tunç',
      role: 'CEO',
      company: 'PropertyMax',
      content: 'Emlak sektöründe dijital pazarlama konusunda çok başarılı olduk. VR turlar ve sosyal medya kampanyaları satışlarımızı ikiye katladı.',
      rating: 5,
      industry: 'Emlak',
      results: '+350% Satış',
      avatar: 'AT'
    },
    {
      id: 6,
      name: 'Fatma Şen',
      role: 'Founder',
      company: 'PaymentPro',
      content: 'Fintech startup\'ımızı sıfırdan zirveye taşıdılar. Marka güvenilirliği ve müşteri kazanımı konusunda mükemmel sonuçlar aldık.',
      rating: 5,
      industry: 'Fintech',
      results: '+800% Müşteri',
      avatar: 'FS'
    }
  ];

  const portfolio = [
    {
      title: 'E-Ticaret Devinin Dönüşümü',
      client: 'TechnoMart',
      category: 'E-Ticaret',
      description: 'Kapsamlı dijital dönüşüm projesi ile %500 büyüme',
      results: ['%500 Trafik Artışı', '%250 Dönüşüm Artışı', '1.2M₺ Ek Gelir'],
      image: 'gradient-to-br from-blue-500 to-cyan-500'
    },
    {
      title: 'Sağlık Sektöründe İnovasyon',
      client: 'HealthPlus',
      category: 'Sağlık',
      description: 'Dijital hasta deneyimi ve telehealth platformu',
      results: ['%300 Dijital Trafik', '%120 Hasta Memnuniyeti', '800K₺ Gelir'],
      image: 'gradient-to-br from-green-500 to-emerald-500'
    },
    {
      title: 'Eğitim Platformu Büyümesi',
      client: 'EduTech',
      category: 'Eğitim',
      description: 'Online eğitim platformu optimizasyonu',
      results: ['%1000 Öğrenci Artışı', '%200 Engagement', '1.5M₺ Gelir'],
      image: 'gradient-to-br from-purple-500 to-indigo-500'
    },
    {
      title: 'Global Moda Markası',
      client: 'StyleHub',
      category: 'Moda',
      description: 'Uluslararası pazarda marka konumlandırma',
      results: ['15 Ülke Erişimi', '%600 Global Reach', '1.8M₺ Gelir'],
      image: 'gradient-to-br from-pink-500 to-rose-500'
    },
    {
      title: 'Emlak Dijital Dönüşümü',
      client: 'PropertyMax',
      category: 'Emlak',
      description: 'VR teknolojisi ve dijital pazarlama',
      results: ['%350 Satış Artışı', '%180 Lead Artışı', '900K₺ Gelir'],
      image: 'gradient-to-br from-orange-500 to-amber-500'
    },
    {
      title: 'Fintech Startup Başarısı',
      client: 'PaymentPro',
      category: 'Fintech',
      description: 'Sıfırdan marka inşası ve müşteri kazanımı',
      results: ['%800 Müşteri Artışı', '%180 Güven Skoru', '2.5M₺ Gelir'],
      image: 'gradient-to-br from-teal-500 to-cyan-500'
    }
  ];

  const stats = [
    { number: '98%', label: 'Müşteri Memnuniyeti', icon: Heart },
    { number: '500+', label: 'Başarılı Proje', icon: CheckCircle },
    { number: '€50M+', label: 'Toplam ROI', icon: TrendingUp },
    { number: '4.9/5', label: 'Ortalama Puan', icon: Star }
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
              REFERANSLAR
            </motion.h1>
            <motion.p 
              variants={itemVariants}
              className="text-xl text-gray-400 max-w-3xl mx-auto mb-8"
            >
              Müşterilerimizin başarı hikayelerini ve görüşlerini keşfedin. 
              500+ projede yarattığımız değer ve aldığımız sonuçlar.
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

      {/* Testimonials Section */}
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
              Müşteri Görüşleri
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-xl text-gray-400 max-w-3xl mx-auto"
            >
              Birlikte çalıştığımız markaların deneyimlerini ve görüşlerini okuyun
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-indigo-500/30 transition-all duration-500 group"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-sm">{testimonial.avatar}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center mb-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <div className="text-gray-400 text-sm">{testimonial.industry}</div>
                  </div>
                </div>

                <div className="relative mb-6">
                  <Quote className="w-8 h-8 text-indigo-400/30 absolute -top-2 -left-2" />
                  <p className="text-gray-300 leading-relaxed pl-6">
                    &quot;{testimonial.content}&quot;
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-gray-400 text-sm">{testimonial.role}</div>
                    <div className="text-gray-400 text-sm">{testimonial.company}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-green-400 font-bold text-sm">{testimonial.results}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
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
              Proje Portföyü
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-xl text-gray-400 max-w-3xl mx-auto"
            >
              Gerçekleştirdiğimiz başarılı projeler ve elde edilen sonuçlar
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolio.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-indigo-500/30 transition-all duration-500 group"
              >
                <div className={`w-full h-48 bg-${project.image} rounded-2xl mb-6 flex items-center justify-center`}>
                  <Building className="w-16 h-16 text-white/90" />
                </div>

                <div className="mb-2">
                  <span className="bg-indigo-500/20 text-indigo-300 px-3 py-1 rounded-full text-sm">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 mb-4">{project.description}</p>

                <div className="space-y-2 mb-6">
                  {project.results.map((result, i) => (
                    <div key={i} className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      <span className="text-gray-300">{result}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center text-indigo-400 font-semibold hover:text-indigo-300 transition-colors cursor-pointer">
                  Detayları Gör
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
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
              Siz de Referansımız Olun
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-xl text-gray-400 mb-8"
            >
              Başarılı projelerimize katılın ve markanızı zirveye taşıyın
            </motion.p>
            <motion.div variants={itemVariants}>
              <button className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 hover:scale-105">
                Projenizi Başlatalım
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 
