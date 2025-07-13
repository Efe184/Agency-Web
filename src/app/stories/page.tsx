'use client';

import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Award, 
  ArrowRight,
  Target,
  Star,
  CheckCircle
} from 'lucide-react';

export default function StoriesPage() {
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

  const stories = [
    {
      id: 1,
      title: 'E-Ticaret Devi: 500% Büyüme',
      client: 'TechnoMart',
      industry: 'E-Ticaret',
      duration: '12 Ay',
      results: {
        growth: '+500%',
        conversion: '+250%',
        revenue: '+1.2M₺'
      },
      description: 'Dijital pazarlama stratejileri ile e-ticaret sitesini sektörün liderine dönüştürdük.',
      challenge: 'Düşük dönüşüm oranları ve sınırlı online görünürlük',
      solution: 'SEO optimizasyonu, Google Ads kampanyaları ve sosyal medya pazarlama',
      tags: ['SEO', 'Google Ads', 'Sosyal Medya', 'E-Ticaret'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 2,
      title: 'Fintech Startupu: Sıfırdan Zirve',
      client: 'PaymentPro',
      industry: 'Fintech',
      duration: '18 Ay',
      results: {
        growth: '+800%',
        conversion: '+180%',
        revenue: '+2.5M₺'
      },
      description: 'Yeni bir fintech şirketini sektörün öncü markalarından biri haline getirdik.',
      challenge: 'Marka bilinirliği sıfır, güven problemi ve rekabetçi pazar',
      solution: 'Marka kimliği geliştirme, content marketing ve influencer ortaklıkları',
      tags: ['Branding', 'Content Marketing', 'Influencer', 'PR'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 3,
      title: 'Sağlık Sektörü: Dijital Dönüşüm',
      client: 'HealthPlus',
      industry: 'Sağlık',
      duration: '24 Ay',
      results: {
        growth: '+300%',
        conversion: '+120%',
        revenue: '+800K₺'
      },
      description: 'Geleneksel sağlık hizmetlerini dijital dünyaya başarıyla taşıdık.',
      challenge: 'Düşük dijital farkındalık ve hasta güveninin kazanılması',
      solution: 'Eğitici content, telehealth platformu ve hasta deneyimi optimizasyonu',
      tags: ['Digital Health', 'Content', 'UX/UI', 'Telehealth'],
      color: 'from-purple-500 to-indigo-500'
    },
    {
      id: 4,
      title: 'Moda Markası: Global Expanse',
      client: 'StyleHub',
      industry: 'Moda',
      duration: '15 Ay',
      results: {
        growth: '+600%',
        conversion: '+200%',
        revenue: '+1.8M₺'
      },
      description: 'Yerel moda markasını uluslararası pazarda tanınan bir isim haline getirdik.',
      challenge: 'Sınırlı pazar payı ve uluslararası rekabet',
      solution: 'Global SEO, çok dilli kampanyalar ve influencer pazarlama',
      tags: ['Global SEO', 'Influencer', 'Fashion', 'International'],
      color: 'from-pink-500 to-rose-500'
    },
    {
      id: 5,
      title: 'Eğitim Platformu: Online Devrim',
      client: 'EduTech',
      industry: 'Eğitim',
      duration: '20 Ay',
      results: {
        growth: '+400%',
        conversion: '+150%',
        revenue: '+1.5M₺'
      },
      description: 'Online eğitim platformunu sektörün en büyük oyuncularından biri yaptık.',
      challenge: 'Yoğun rekabet ve öğrenci kazanma maliyetleri',
      solution: 'Performance marketing, retargeting ve öğrenci deneyimi optimizasyonu',
      tags: ['EdTech', 'Performance Marketing', 'Retargeting', 'CRO'],
      color: 'from-orange-500 to-amber-500'
    },
    {
      id: 6,
      title: 'Emlak Sektörü: Dijital İnovasyon',
      client: 'PropertyMax',
      industry: 'Emlak',
      duration: '16 Ay',
      results: {
        growth: '+350%',
        conversion: '+180%',
        revenue: '+900K₺'
      },
      description: 'Geleneksel emlak acentesini dijital çağın lideri haline getirdik.',
      challenge: 'Eski tarz satış yaklaşımları ve düşük online görünürlük',
      solution: 'VR turlar, sosyal medya pazarlama ve lead generation optimizasyonu',
      tags: ['PropTech', 'VR/AR', 'Lead Generation', 'Social Media'],
      color: 'from-teal-500 to-cyan-500'
    }
  ];

  const stats = [
    { number: '500+', label: 'Başarılı Proje', icon: Award },
    { number: '€50M+', label: 'Toplam Gelir Artışı', icon: TrendingUp },
    { number: '15+', label: 'Sektör Deneyimi', icon: Target },
    { number: '99%', label: 'Müşteri Memnuniyeti', icon: Star }
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
              MARKA HİKAYELERİ
            </motion.h1>
            <motion.p 
              variants={itemVariants}
              className="text-xl text-gray-400 max-w-3xl mx-auto mb-8"
            >
              Markaları zirvede tutmak için gerçekleştirdiğimiz başarı hikayelerini keşfedin. 
              Her projede yaratıcı çözümler ve ölçülebilir sonuçlar.
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

      {/* Success Stories Grid */}
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
              Başarı Hikayeleri
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-xl text-gray-400 max-w-3xl mx-auto"
            >
              Müşterilerimizle birlikte yarattığımız büyüme hikayelerini okuyun
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stories.map((story, index) => (
              <motion.div
                key={story.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-indigo-500/30 transition-all duration-500 group"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-br ${story.color} rounded-xl flex items-center justify-center`}>
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-gray-400 text-sm">{story.industry}</div>
                    <div className="text-gray-400 text-sm">{story.duration}</div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors">
                  {story.title}
                </h3>
                
                <p className="text-gray-400 mb-6 line-clamp-3">
                  {story.description}
                </p>

                {/* Results */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400">{story.results.growth}</div>
                    <div className="text-gray-400 text-xs">Büyüme</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-400">{story.results.conversion}</div>
                    <div className="text-gray-400 text-xs">Dönüşüm</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-400">{story.results.revenue}</div>
                    <div className="text-gray-400 text-xs">Gelir</div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {story.tags.slice(0, 3).map((tag, i) => (
                    <span
                      key={i}
                      className="bg-white/10 text-gray-300 px-3 py-1 rounded-full text-xs"
                    >
                      {tag}
                    </span>
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

      {/* Detailed Case Study */}
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
              Detaylı Vaka Analizi
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-xl text-gray-400 max-w-3xl mx-auto"
            >
              En başarılı projemizden birini derinlemesine inceleyelim
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Column - Story Details */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-4">Meydan Okuma</h3>
                <p className="text-gray-400">
                  TechnoMart, geleneksel satış kanallarına bağımlı bir e-ticaret sitesiydi. 
                  Online görünürlüğü düşük, dönüşüm oranları %1&apos;in altında ve rekabette gerideydi.
                </p>
              </div>

              <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-4">Çözüm</h3>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
                    <span>Kapsamlı SEO optimizasyonu ve teknik altyapı iyileştirmesi</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
                    <span>Hedeflenmiş Google Ads kampanyaları ve remarketing</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
                    <span>Sosyal medya pazarlama ve influencer ortaklıkları</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
                    <span>Conversion rate optimization ve UX iyileştirmeleri</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Right Column - Results */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-6">Sonuçlar</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-black text-green-400 mb-2">500%</div>
                    <div className="text-gray-400">Trafik Artışı</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-black text-blue-400 mb-2">250%</div>
                    <div className="text-gray-400">Dönüşüm Artışı</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-black text-purple-400 mb-2">1.2M₺</div>
                    <div className="text-gray-400">Ek Gelir</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-black text-orange-400 mb-2">85%</div>
                    <div className="text-gray-400">Maliyet Düşüşü</div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-4">Müşteri Yorumu</h3>
                <div className="relative">
                  <div className="text-6xl text-indigo-400/20 font-bold absolute -top-2 -left-2">&quot;</div>
                  <p className="text-gray-400 italic pl-8">
                    OZANTARIK ekibi sayesinde işimizi tamamen dönüştürdük. 
                    Sadece 12 ayda 500% büyüme yakaladık ve sektörün lideri olduk.
                  </p>
                  <div className="mt-4 pl-8">
                    <div className="font-semibold text-white">Ahmet Kaya</div>
                    <div className="text-gray-400 text-sm">CEO, TechnoMart</div>
                  </div>
                </div>
              </div>
            </motion.div>
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
              Sizin Hikayenizi Yazalım
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-xl text-gray-400 mb-8"
            >
              Markanızın başarı hikayesini birlikte yazmaya hazır mısınız?
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
