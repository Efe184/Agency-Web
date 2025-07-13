'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Target, 
  Users, 
  Award, 
  Globe, 
  TrendingUp, 
  Heart,
  Eye,
  Zap,
  Shield,
  CheckCircle
} from 'lucide-react';
import { teamMembers } from '@/constants/team';
import Image from 'next/image';

export default function AboutPage() {
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 1000], [0, -100]);

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

  const stats = [
    { number: '500+', label: 'Mutlu Müşteri', icon: Heart },
    { number: '1000+', label: 'Tamamlanan Proje', icon: CheckCircle },
    { number: '15+', label: 'Yıllık Tecrübe', icon: Award },
    { number: '50+', label: 'Ekip Üyesi', icon: Users }
  ];

  const values = [
    {
      icon: Target,
      title: 'Hedef Odaklı',
      description: 'Her projede müşterilerimizin iş hedeflerine ulaşmasını sağlıyoruz.'
    },
    {
      icon: Shield,
      title: 'Güvenilir',
      description: 'Şeffaf süreçler ve güvenilir çözümlerle uzun vadeli ortaklıklar kuruyoruz.'
    },
    {
      icon: Zap,
      title: 'Hızlı',
      description: 'Dinamik pazar koşullarına hızla adapte olarak çevik çözümler üretiyoruz.'
    },
    {
      icon: Globe,
      title: 'Global',
      description: 'Türkiye ve dünya çapında markalar için başarılı kampanyalar gerçekleştiriyoruz.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-blue-500/10"
          style={{ y: backgroundY }}
        />
        
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
              OZANTARIK
            </motion.h1>
            <motion.p 
              variants={itemVariants}
              className="text-xl text-gray-400 max-w-4xl mx-auto mb-8"
            >
              Dijital dünyada markaları geleceğe taşıyan yaratıcı çözümlerin öncüsü. 
              2008'den beri güçlü stratejiler ve yenilikçi yaklaşımlarla sektörde lider konumdayız.
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

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
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
                Hikayemiz
              </motion.h2>
              <motion.p 
                variants={itemVariants}
                className="text-gray-400 text-lg mb-6"
              >
                2008 yılında dijital pazarlama alanında yenilikçi çözümler üretmek amacıyla kurulan OZANTARIK, 
                bugün Türkiye'nin en güvenilir dijital ajanslarından biri haline geldi.
              </motion.p>
              <motion.p 
                variants={itemVariants}
                className="text-gray-400 text-lg mb-6"
              >
                15 yılı aşkın tecrübemizle, 500'den fazla markaya dijital dönüşüm yolculuklarında rehberlik ettik. 
                Müşteri memnuniyetini ön planda tutan yaklaşımımızla, sadece hizmet sunmakla kalmıyor, 
                uzun vadeli ortaklıklar kuruyoruz.
              </motion.p>
              <motion.p 
                variants={itemVariants}
                className="text-gray-400 text-lg"
              >
                Vizyonumuz, dijital dünyada markaları zirvede tutmak ve sürekli büyüyen bir ekosistem yaratmaktır.
              </motion.p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-3xl p-8 backdrop-blur-sm border border-white/10">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">15+</div>
                    <div className="text-gray-400">Yıllık Tecrübe</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">500+</div>
                    <div className="text-gray-400">Proje</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">50+</div>
                    <div className="text-gray-400">Ekip Üyesi</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">25+</div>
                    <div className="text-gray-400">Ödül</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
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
              Değerlerimiz
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-xl text-gray-400 max-w-3xl mx-auto"
            >
              Başarıya ulaşmamızı sağlayan temel değerler
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-indigo-500/30 transition-all duration-500 group text-center"
              >
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center group-hover:from-indigo-500/30 group-hover:to-purple-500/30 transition-all duration-300">
                    <value.icon className="w-8 h-8 text-white/90" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
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
              Ekibimiz
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-xl text-gray-400 max-w-3xl mx-auto"
            >
              Alanında uzman, yaratıcı ve tutkulu ekibimizle büyük işlere imza atıyoruz
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.slice(0, 6).map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-indigo-500/30 transition-all duration-500 group text-center"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:from-indigo-500/30 group-hover:to-purple-500/30 transition-all duration-300">
                  <Users className="w-12 h-12 text-white/90" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-indigo-400 mb-4">{member.role}</p>
                <p className="text-gray-400 text-sm">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-r from-indigo-500/5 to-purple-500/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-3xl p-8 border border-white/10"
            >
              <div className="flex items-center mb-6">
                <Eye className="w-8 h-8 text-indigo-400 mr-4" />
                <h3 className="text-3xl font-bold text-white">Vizyonumuz</h3>
              </div>
              <p className="text-gray-400 text-lg">
                Dijital dünyada markaları zirvede tutmak ve sürekli büyüyen bir ekosistem yaratmak. 
                Türkiye'nin en güvenilir dijital ajansı olarak, global standartlarda hizmet sunmak.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-3xl p-8 border border-white/10"
            >
              <div className="flex items-center mb-6">
                <Target className="w-8 h-8 text-purple-400 mr-4" />
                <h3 className="text-3xl font-bold text-white">Misyonumuz</h3>
              </div>
              <p className="text-gray-400 text-lg">
                Yaratıcı çözümler ve güçlü stratejilerle markaları dijital dönüşüm yolculuklarında desteklemek. 
                Müşteri memnuniyetini ön planda tutarak uzun vadeli ortaklıklar kurmak.
              </p>
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
              Bizimle Çalışın
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-xl text-gray-400 mb-8"
            >
              Markanızı dijital dünyada zirveye taşımak için bugün harekete geçin
            </motion.p>
            <motion.div variants={itemVariants}>
              <button className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 hover:scale-105">
                İletişime Geçin
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 