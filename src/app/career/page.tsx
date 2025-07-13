'use client';

import { motion } from 'framer-motion';
import { 
  MapPin, 
  Clock, 
  Users, 
  Briefcase, 
  Heart, 
  Award, 
  Coffee, 
  Zap,
  ArrowRight,
  CheckCircle,
  Globe,
  TrendingUp,
  Star,
  Target,
  Lightbulb,
  BookOpen
} from 'lucide-react';

export default function CareerPage() {
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

  const jobOpenings = [
    {
      id: 1,
      title: 'Senior Digital Marketing Specialist',
      department: 'Marketing',
      type: 'Full-time',
      location: 'İstanbul, Türkiye',
      experience: '3-5 yıl',
      salary: '15.000-25.000 ₺',
      description: 'Dijital pazarlama kampanyalarını yönetecek ve stratejiler geliştirecek deneyimli uzman arıyoruz.',
      requirements: [
        'Google Ads ve Facebook Ads deneyimi',
        'SEO/SEM bilgisi',
        'Analitik düşünce yeteneği',
        'İngilizce bilgisi'
      ],
      benefits: ['Esnek çalışma saatleri', 'Uzaktan çalışma', 'Eğitim fırsatları', 'Sağlık sigortası'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 2,
      title: 'Social Media Manager',
      department: 'Creative',
      type: 'Full-time',
      location: 'İstanbul, Türkiye',
      experience: '2-4 yıl',
      salary: '12.000-18.000 ₺',
      description: 'Sosyal medya hesaplarını yönetecek ve yaratıcı içerikler geliştirecek uzman arıyoruz.',
      requirements: [
        'Sosyal medya platformları deneyimi',
        'İçerik üretimi becerisi',
        'Grafik tasarım bilgisi',
        'Trend takibi'
      ],
      benefits: ['Yaratıcı özgürlük', 'Genç ekip', 'Sosyal etkinlikler', 'Performans primi'],
      color: 'from-pink-500 to-rose-500'
    },
    {
      id: 3,
      title: 'Data Analyst',
      department: 'Analytics',
      type: 'Full-time',
      location: 'İstanbul, Türkiye',
      experience: '1-3 yıl',
      salary: '10.000-15.000 ₺',
      description: 'Veri analizleri yapacak ve raporlar hazırlayacak analitik düşünce yeteneği olan uzman arıyoruz.',
      requirements: [
        'Google Analytics deneyimi',
        'Excel/Google Sheets bilgisi',
        'SQL bilgisi artı',
        'Veri görselleştirme'
      ],
      benefits: ['Kariyer gelişimi', 'Mentorship', 'Teknoloji eğitimleri', 'Esnek mesai'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 4,
      title: 'Content Writer',
      department: 'Content',
      type: 'Full-time',
      location: 'İstanbul, Türkiye',
      experience: '1-2 yıl',
      salary: '8.000-12.000 ₺',
      description: 'Blog yazıları, web içerikleri ve sosyal medya metinleri yazacak kreatif yazar arıyoruz.',
      requirements: [
        'Mükemmel Türkçe yazım',
        'SEO bilgisi',
        'Araştırma becerileri',
        'Çok platformlu yazım'
      ],
      benefits: ['Yaratıcı çalışma ortamı', 'Yayın imkanları', 'Editörlük deneyimi', 'Kitap hediyesi'],
      color: 'from-purple-500 to-indigo-500'
    },
    {
      id: 5,
      title: 'Account Manager',
      department: 'Client Services',
      type: 'Full-time',
      location: 'İstanbul, Türkiye',
      experience: '2-4 yıl',
      salary: '13.000-20.000 ₺',
      description: 'Müşteri ilişkilerini yönetecek ve proje süreçlerini koordine edecek deneyimli uzman arıyoruz.',
      requirements: [
        'Müşteri yönetimi deneyimi',
        'Proje yönetimi bilgisi',
        'Sunum becerileri',
        'Problem çözme yeteneği'
      ],
      benefits: ['Müşteri bonusu', 'Profesyonel gelişim', 'Networking fırsatları', 'Liderlik eğitimi'],
      color: 'from-orange-500 to-amber-500'
    },
    {
      id: 6,
      title: 'Junior Graphic Designer',
      department: 'Creative',
      type: 'Full-time',
      location: 'İstanbul, Türkiye',
      experience: '0-2 yıl',
      salary: '7.000-10.000 ₺',
      description: 'Kreatif tasarımlar yapacak ve görsel kimlik projelerinde çalışacak genç tasarımcı arıyoruz.',
      requirements: [
        'Adobe Creative Suite',
        'Tasarım portföyü',
        'Web tasarımı bilgisi',
        'Yaratıcı düşünce'
      ],
      benefits: ['Mentorship programı', 'Tasarım eğitimleri', 'Konferans katılımı', 'Staj imkanları'],
      color: 'from-teal-500 to-cyan-500'
    }
  ];

  const values = [
    {
      icon: Target,
      title: 'Sonuç Odaklı',
      description: 'Her projede ölçülebilir sonuçlar üretmeye odaklanıyoruz'
    },
    {
      icon: Users,
      title: 'Takım Ruhu',
      description: 'Birlikte çalışarak daha büyük başarılar elde ediyoruz'
    },
    {
      icon: Lightbulb,
      title: 'İnovasyona Açık',
      description: 'Yeni teknolojiler ve yaklaşımlarla sınırları zorluyoruz'
    },
    {
      icon: BookOpen,
      title: 'Sürekli Öğrenme',
      description: 'Gelişen sektörde kendimizi sürekli geliştiriyoruz'
    }
  ];

  const benefits = [
    {
      icon: Heart,
      title: 'Sağlık & Wellness',
      description: 'Özel sağlık sigortası ve wellness programları'
    },
    {
      icon: Coffee,
      title: 'Esnek Çalışma',
      description: 'Hibrit çalışma modeli ve esnek mesai saatleri'
    },
    {
      icon: Award,
      title: 'Kariyer Gelişimi',
      description: 'Eğitim fırsatları ve kariyer planlama desteği'
    },
    {
      icon: Globe,
      title: 'Global Projeler',
      description: 'Uluslararası müşteriler ve çeşitli sektör deneyimi'
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
              KARİYER
            </motion.h1>
            <motion.p 
              variants={itemVariants}
              className="text-xl text-gray-400 max-w-3xl mx-auto mb-8"
            >
              Dijital pazarlama dünyasının en dinamik takımına katılın. 
              Yaratıcı projelerde çalışarak kariyerinizi bir üst seviyeye taşıyın.
            </motion.p>
            <motion.div variants={itemVariants}>
              <button className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 hover:scale-105">
                Açık Pozisyonları Gör
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Company Values */}
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
              Bizi bir arada tutan ve başarıya götüren temel değerler
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

      {/* Benefits Section */}
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
              Neden Bizimle Çalışmalısınız?
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-xl text-gray-400 max-w-3xl mx-auto"
            >
              Çalışanlarımıza sunduğumuz avantajlar ve fırsatlar
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-indigo-500/30 transition-all duration-500 group text-center"
              >
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-2xl flex items-center justify-center group-hover:from-green-500/30 group-hover:to-emerald-500/30 transition-all duration-300">
                    <benefit.icon className="w-8 h-8 text-white/90" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
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
              Açık Pozisyonlar
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-xl text-gray-400 max-w-3xl mx-auto"
            >
              Takımımıza katılmak için mevcut fırsatları keşfedin
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {jobOpenings.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-indigo-500/30 transition-all duration-500 group"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-br ${job.color} rounded-xl flex items-center justify-center`}>
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                  <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm">
                    {job.type}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                  {job.title}
                </h3>
                
                <p className="text-gray-400 mb-4">{job.description}</p>

                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-gray-400 text-sm">
                    <MapPin className="w-4 h-4 mr-2" />
                    {job.location}
                  </div>
                  <div className="flex items-center text-gray-400 text-sm">
                    <Clock className="w-4 h-4 mr-2" />
                    {job.experience}
                  </div>
                  <div className="flex items-center text-gray-400 text-sm">
                    <TrendingUp className="w-4 h-4 mr-2" />
                    {job.salary}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-2">Aranan Özellikler:</h4>
                  <ul className="space-y-1">
                    {job.requirements.slice(0, 3).map((req, i) => (
                      <li key={i} className="flex items-center text-gray-400 text-sm">
                        <CheckCircle className="w-3 h-3 mr-2 text-green-400" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center text-indigo-400 font-semibold hover:text-indigo-300 transition-colors cursor-pointer">
                  Başvuru Yap
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
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
              Başvuru Süreci
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-xl text-gray-400 max-w-3xl mx-auto"
            >
              4 adımda takımımıza katılın
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Başvuru', description: 'CV ve kapak mektubunuzu gönderin' },
              { step: '2', title: 'Değerlendirme', description: 'Başvurularınızı detaylı olarak inceliyoruz' },
              { step: '3', title: 'Görüşme', description: 'Online veya yüz yüze görüşme yapıyoruz' },
              { step: '4', title: 'Karar', description: 'Sonuç bildirimini 1 hafta içinde alın' }
            ].map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">{process.step}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{process.title}</h3>
                <p className="text-gray-400">{process.description}</p>
              </motion.div>
            ))}
          </div>
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
              Kariyerinizin Sonraki Adımı
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-xl text-gray-400 mb-8"
            >
              Dijital pazarlama dünyasında fark yaratmaya hazır mısınız?
            </motion.p>
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 hover:scale-105">
                Açık Pozisyonlara Başvur
              </button>
              <button className="bg-transparent border-2 border-indigo-500 text-indigo-400 px-8 py-4 rounded-full font-semibold text-lg hover:bg-indigo-500 hover:text-white transition-all duration-300">
                Spontan Başvuru
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 