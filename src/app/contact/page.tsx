'use client';

import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  CheckCircle
} from 'lucide-react';
import ContactForm from '@/features/contact/ContactForm';

export default function ContactPage() {
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

  const contactInfo = [
    {
      icon: Mail,
      title: 'E-posta',
      info: 'info@ozantarik.com',
      subInfo: 'Projeleriniz için',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Phone,
      title: 'Telefon',
      info: '+90 (212) 555 0123',
      subInfo: 'Pazartesi - Cuma 09:00-18:00',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: MapPin,
      title: 'Adres',
      info: 'Maslak Mahallesi, Büyükdere Caddesi No:123',
      subInfo: 'Şişli, İstanbul',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Clock,
      title: 'Yanıt Süresi',
      info: '24 Saat İçinde',
      subInfo: 'Hızlı ve profesyonel',
      color: 'from-purple-500 to-indigo-500'
    }
  ];

  const faqs = [
    {
      question: 'Projem için ne kadar süre gerekiyor?',
      answer: 'Proje kapsamına göre değişkenlik gösterir. Detaylı bir analiz sonrası size net bir zaman çizelgesi sunuyoruz.'
    },
    {
      question: 'Hangi sektörlerle çalışıyorsunuz?',
      answer: 'E-ticaret, finans, sağlık, eğitim, teknoloji ve daha birçok sektörde 15+ yıllık deneyimimiz bulunmaktadır.'
    },
    {
      question: 'Fiyatlandırma nasıl yapılıyor?',
      answer: 'Her proje kendine özel değerlendirilir. İhtiyaçlarınıza uygun paket seçenekleri sunuyoruz.'
    },
    {
      question: 'Raporlama nasıl yapılıyor?',
      answer: 'Aylık detaylı raporlar ve haftalık özet raporlarla projenizin durumunu takip edebilirsiniz.'
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
              İLETİŞİM
            </motion.h1>
            <motion.p 
              variants={itemVariants}
              className="text-xl text-gray-400 max-w-3xl mx-auto mb-8"
            >
              Projenizi hayata geçirmek için bizimle iletişime geçin. 
              Uzman ekibimiz size en iyi çözümleri sunmaya hazır.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-gradient-to-r from-indigo-500/5 to-purple-500/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-indigo-500/30 transition-all duration-500 group text-center"
              >
                <div className="flex justify-center mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${info.color} rounded-2xl flex items-center justify-center opacity-80 group-hover:opacity-100 transition-all duration-300`}>
                    <info.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{info.title}</h3>
                <p className="text-gray-300 font-medium mb-1">{info.info}</p>
                <p className="text-gray-400 text-sm">{info.subInfo}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-8">
                <h2 className="text-4xl font-black text-white mb-4">
                  Projenizi Konuşalım
                </h2>
                <p className="text-gray-400 text-lg">
                  Detaylı bilgi almak ve teklif almak için formu doldurun.
                </p>
              </div>
              <ContactForm />
            </motion.div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-6">Neden Bizi Seçmelisiniz?</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-green-400 mt-1" />
                    <div>
                      <h4 className="font-semibold text-white">15+ Yıllık Tecrübe</h4>
                      <p className="text-gray-400 text-sm">Sektörde köklü deneyim ve uzman ekip</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-green-400 mt-1" />
                    <div>
                      <h4 className="font-semibold text-white">500+ Başarılı Proje</h4>
                      <p className="text-gray-400 text-sm">Kanıtlanmış başarı ve müşteri memnuniyeti</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-green-400 mt-1" />
                    <div>
                      <h4 className="font-semibold text-white">24/7 Destek</h4>
                      <p className="text-gray-400 text-sm">İhtiyacınız olduğunda yanınızdayız</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-green-400 mt-1" />
                    <div>
                      <h4 className="font-semibold text-white">Şeffaf Süreç</h4>
                      <p className="text-gray-400 text-sm">Her adımda bilgilendirme ve raporlama</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-6">Çalışma Sürecimiz</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                    <div>
                      <h4 className="font-semibold text-white">Analiz & Strateji</h4>
                      <p className="text-gray-400 text-sm">Detaylı analiz ve strateji belirleme</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                    <div>
                      <h4 className="font-semibold text-white">Uygulama</h4>
                      <p className="text-gray-400 text-sm">Planları hayata geçirme</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                    <div>
                      <h4 className="font-semibold text-white">Optimizasyon</h4>
                      <p className="text-gray-400 text-sm">Sürekli iyileştirme ve optimizasyon</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">4</div>
                    <div>
                      <h4 className="font-semibold text-white">Raporlama</h4>
                      <p className="text-gray-400 text-sm">Detaylı analiz ve raporlama</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-500/5 to-purple-500/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
              Sıkça Sorulan Sorular
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-xl text-gray-400"
            >
              Merak ettiğiniz konular hakkında cevaplar
            </motion.p>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-3xl p-8 border border-white/10"
              >
                <h3 className="text-xl font-bold text-white mb-4">{faq.question}</h3>
                <p className="text-gray-400">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
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
              Ofisimiz
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-xl text-gray-400"
            >
              İstanbul Maslak&apos;taki ofisimizde sizi ağırlamaktan memnuniyet duyarız
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-3xl p-8 border border-white/10 h-96 flex items-center justify-center"
          >
            <div className="text-center">
              <MapPin className="w-16 h-16 text-indigo-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Ofis Konumumuz</h3>
              <p className="text-gray-400 mb-4">
                Maslak Mahallesi, Büyükdere Caddesi No:123<br />
                Şişli, İstanbul, Türkiye
              </p>
              <button className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-6 py-3 rounded-full font-semibold hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 hover:scale-105">
                Haritada Görüntüle
              </button>
            </div>
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
              Hemen Başlayalım
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-xl text-gray-400 mb-8"
            >
              Dijital dönüşüm yolculuğunuza bugün başlayın
            </motion.p>
            <motion.div variants={itemVariants}>
              <button className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 hover:scale-105 mr-4">
                Ücretsiz Konsültasyon
              </button>
              <button className="bg-transparent border-2 border-indigo-500 text-indigo-400 px-8 py-4 rounded-full font-semibold text-lg hover:bg-indigo-500 hover:text-white transition-all duration-300">
                Telefon Et
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 
