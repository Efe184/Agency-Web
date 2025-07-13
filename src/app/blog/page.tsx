'use client';

import { motion } from 'framer-motion';
import { 
  Calendar, 
  User, 
  Clock, 
  ArrowRight, 
  BookOpen, 
  Eye,
  Search
} from 'lucide-react';

export default function BlogPage() {
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

  const featuredPost = {
    id: 1,
    title: '2024 Dijital Pazarlama Trendleri: Geleceğin Stratejileri',
    excerpt: 'Yapay zeka, ses aramaları ve kişiselleştirme teknolojilerinin dijital pazarlama dünyasını nasıl şekillendireceğini keşfedin.',
    content: 'Dijital pazarlama dünyası hızla değişiyor. 2024 yılında markalar için en önemli trendler...',
    author: 'Ozan Tarık',
    date: '15 Aralık 2024',
    readTime: '8 dk',
    category: 'Trend',
    tags: ['AI', 'Dijital Pazarlama', 'Trend', 'SEO'],
    views: '2.5K',
    image: 'gradient-to-br from-purple-500 to-indigo-500'
  };

  const blogPosts = [
    {
      id: 2,
      title: 'Google Analytics 4: Yeni Nesil Analitik Rehberi',
      excerpt: 'GA4\'ün sunduğu yeni özellikler ve veri analizi yaklaşımları ile işinizi nasıl büyüteceğinizi öğrenin.',
      author: 'Ayşe Kara',
      date: '12 Aralık 2024',
      readTime: '6 dk',
      category: 'Analitik',
      tags: ['GA4', 'Analytics', 'Veri'],
      views: '1.8K',
      image: 'gradient-to-br from-blue-500 to-cyan-500'
    },
    {
      id: 3,
      title: 'E-Ticaret SEO: Ürün Sayfaları Optimizasyonu',
      excerpt: 'E-ticaret sitelerinizde ürün sayfalarını SEO için nasıl optimize edeceğinizi adım adım öğrenin.',
      author: 'Mehmet Demir',
      date: '10 Aralık 2024',
      readTime: '10 dk',
      category: 'SEO',
      tags: ['SEO', 'E-Ticaret', 'Optimizasyon'],
      views: '3.2K',
      image: 'gradient-to-br from-green-500 to-emerald-500'
    },
    {
      id: 4,
      title: 'Sosyal Medya Pazarlama: 2024 Stratejileri',
      excerpt: 'Instagram, TikTok ve LinkedIn\'de etkili içerik stratejileri ile markanızı büyütün.',
      author: 'Zeynep Yılmaz',
      date: '8 Aralık 2024',
      readTime: '7 dk',
      category: 'Sosyal Medya',
      tags: ['Social Media', 'Content', 'Strategy'],
      views: '2.1K',
      image: 'gradient-to-br from-pink-500 to-rose-500'
    },
    {
      id: 5,
      title: 'Google Ads Optimizasyonu: ROI Artırma Teknikleri',
      excerpt: 'Google Ads kampanyalarınızda maliyetleri düşürürken dönüşüm oranlarını artırma yöntemleri.',
      author: 'Can Özkan',
      date: '5 Aralık 2024',
      readTime: '9 dk',
      category: 'PPC',
      tags: ['Google Ads', 'PPC', 'ROI'],
      views: '2.7K',
      image: 'gradient-to-br from-yellow-500 to-orange-500'
    },
    {
      id: 6,
      title: 'Email Pazarlama: Kişiselleştirme ve Otomasyon',
      excerpt: 'Email kampanyalarınızı kişiselleştirerek açılma oranlarını %300 artırın.',
      author: 'Fatma Şen',
      date: '3 Aralık 2024',
      readTime: '5 dk',
      category: 'Email Marketing',
      tags: ['Email', 'Personalization', 'Automation'],
      views: '1.5K',
      image: 'gradient-to-br from-teal-500 to-cyan-500'
    },
    {
      id: 7,
      title: 'Influencer Marketing: Doğru Partnerleri Seçme',
      excerpt: 'Markanız için en uygun influencer\'ları nasıl bulacağınız ve işbirliği yapacağınız.',
      author: 'Ozan Tarık',
      date: '1 Aralık 2024',
      readTime: '6 dk',
      category: 'Influencer',
      tags: ['Influencer', 'Partnership', 'Branding'],
      views: '1.9K',
      image: 'gradient-to-br from-indigo-500 to-purple-500'
    }
  ];

  const categories = [
    { name: 'Tümü', count: 25 },
    { name: 'SEO', count: 8 },
    { name: 'PPC', count: 6 },
    { name: 'Sosyal Medya', count: 5 },
    { name: 'Analitik', count: 4 },
    { name: 'Email Marketing', count: 2 }
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
              BLOG
            </motion.h1>
            <motion.p 
              variants={itemVariants}
              className="text-xl text-gray-400 max-w-3xl mx-auto mb-8"
            >
              Dijital pazarlama dünyasındaki en son trendler, stratejiler ve ipuçları. 
              Uzman ekibimizden güncel içerikler ve derinlemesine analizler.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 bg-gradient-to-r from-indigo-500/5 to-purple-500/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="flex flex-col md:flex-row gap-6 items-center justify-between"
          >
            <motion.div variants={itemVariants} className="flex-1">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Makaleler içinde ara..."
                  className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500/50 transition-all duration-300"
                />
              </div>
            </motion.div>
            <motion.div variants={itemVariants} className="flex gap-2">
              {categories.map((category) => (
                <button
                  key={category.name}
                  className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-gray-300 hover:bg-indigo-500/20 hover:border-indigo-500/30 transition-all duration-300 text-sm"
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="mb-16"
          >
            <motion.h2 
              variants={itemVariants}
              className="text-3xl md:text-4xl font-black text-white mb-2"
            >
              Öne Çıkan Makale
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-gray-400"
            >
              Editörün seçimi
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            whileHover={{ y: -10, scale: 1.02 }}
            className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-indigo-500/30 transition-all duration-500 group"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className={`h-64 bg-${featuredPost.image} rounded-2xl flex items-center justify-center`}>
                <BookOpen className="w-16 h-16 text-white/90" />
              </div>
              
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-indigo-500/20 text-indigo-300 px-3 py-1 rounded-full text-sm">
                    {featuredPost.category}
                  </span>
                  <div className="flex items-center text-gray-400 text-sm">
                    <Calendar className="w-4 h-4 mr-1" />
                    {featuredPost.date}
                  </div>
                  <div className="flex items-center text-gray-400 text-sm">
                    <Clock className="w-4 h-4 mr-1" />
                    {featuredPost.readTime}
                  </div>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-indigo-300 transition-colors">
                  {featuredPost.title}
                </h3>

                <p className="text-gray-400 mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-full flex items-center justify-center mr-3">
                      <User className="w-5 h-5 text-white/90" />
                    </div>
                    <div>
                      <div className="text-white text-sm font-medium">{featuredPost.author}</div>
                      <div className="text-gray-400 text-xs">{featuredPost.views} görüntüleme</div>
                    </div>
                  </div>
                  <div className="flex items-center text-indigo-400 font-semibold hover:text-indigo-300 transition-colors cursor-pointer">
                    Devamını Oku
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
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
              Son Yazılar
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-xl text-gray-400 max-w-3xl mx-auto"
            >
              Dijital pazarlama dünyasındaki en güncel içerikler
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-3xl p-6 border border-white/10 hover:border-indigo-500/30 transition-all duration-500 group"
              >
                <div className={`w-full h-48 bg-${post.image} rounded-2xl mb-6 flex items-center justify-center`}>
                  <BookOpen className="w-12 h-12 text-white/90" />
                </div>

                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-indigo-500/20 text-indigo-300 px-3 py-1 rounded-full text-xs">
                    {post.category}
                  </span>
                  <div className="flex items-center text-gray-400 text-xs">
                    <Eye className="w-3 h-3 mr-1" />
                    {post.views}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                  <div className="flex items-center">
                    <Calendar className="w-3 h-3 mr-1" />
                    {post.date}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    {post.readTime}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-full flex items-center justify-center mr-2">
                      <User className="w-4 h-4 text-white/90" />
                    </div>
                    <span className="text-white text-sm">{post.author}</span>
                  </div>
                  <div className="flex items-center text-indigo-400 hover:text-indigo-300 transition-colors cursor-pointer">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-3xl p-8 border border-white/10 text-center"
          >
            <motion.h2 
              variants={itemVariants}
              className="text-3xl md:text-4xl font-black text-white mb-4"
            >
              Haftalık Bülten
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-gray-400 mb-8 max-w-2xl mx-auto"
            >
              Dijital pazarlama dünyasındaki en son gelişmeleri ve uzman ipuçlarını e-posta kutunuza alın.
            </motion.p>
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="E-posta adresiniz"
                className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500/50 transition-all duration-300"
              />
              <button className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-6 py-3 rounded-2xl font-semibold hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 hover:scale-105">
                Abone Ol
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-500/5 to-purple-500/5">
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
              Uzman Desteği Alın
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-xl text-gray-400 mb-8"
            >
              Dijital pazarlama stratejilerinizi bir üst seviyeye taşıyın
            </motion.p>
            <motion.div variants={itemVariants}>
              <button className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 hover:scale-105">
                Ücretsiz Konsültasyon
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 
