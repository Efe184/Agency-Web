'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { Linkedin, Twitter, Github, ArrowRight } from 'lucide-react';

export default function Team() {
  const { scrollY } = useScroll();
  
  // Parallax effects
  const backgroundY = useTransform(scrollY, [0, 1000], [0, -100]);
  const orb1Y = useTransform(scrollY, [0, 1000], [0, 150]);
  const orb2Y = useTransform(scrollY, [0, 1000], [0, -120]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2
      }
    }
  };

  const titleVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.8,
        type: "spring",
        stiffness: 100
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 80,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.8,
        type: "spring",
        stiffness: 80
      }
    }
  };

  const teamMembers = [
    {
      name: "Ozan Tarık",
      role: "Kurucu & CEO",
      description: "8+ yıllık deneyimle dijital pazarlama stratejilerinde uzman. Markaları büyütmekte lider.",
      image: "/assets/team/ozan.jpg",
      linkedinUrl: "https://linkedin.com/in/ozantarik",
      twitterUrl: "https://twitter.com/ozantarik",
      githubUrl: "https://github.com/ozantarik"
    },
    {
      name: "Ayşe Kaya",
      role: "Dijital Strateji Uzmanı",
      description: "Veri analizi ve dijital kampanya optimizasyonunda 6 yıllık tecrübe. ROI odaklı çözümler.",
      image: "/assets/team/ayse.jpg",
      linkedinUrl: "https://linkedin.com/in/aysekaya",
      twitterUrl: "https://twitter.com/aysekaya",
      githubUrl: "https://github.com/aysekaya"
    },
    {
      name: "Mehmet Demir",
      role: "Kreatif Direktör",
      description: "Görsel iletişim ve marka kimliği tasarımında 7 yıllık deneyim. Yaratıcı çözümler üretir.",
      image: "/assets/team/mehmet.jpg",
      linkedinUrl: "https://linkedin.com/in/mehmetdemir",
      twitterUrl: "https://twitter.com/mehmetdemir",
      githubUrl: "https://github.com/mehmetdemir"
    }
  ];

  return (
    <section className="relative py-32 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 overflow-hidden">
      
      {/* Premium Animated Background */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        style={{ y: backgroundY }}
      >
        {/* Soft gradient base */}
        <motion.div
          className="absolute inset-0 opacity-50"
          animate={{
            background: [
              'radial-gradient(circle at 25% 25%, rgba(168, 85, 247, 0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(99, 102, 241, 0.08) 0%, transparent 50%)',
              'radial-gradient(circle at 75% 25%, rgba(59, 130, 246, 0.1) 0%, transparent 50%), radial-gradient(circle at 25% 75%, rgba(168, 85, 247, 0.08) 0%, transparent 50%)',
              'radial-gradient(circle at 25% 25%, rgba(168, 85, 247, 0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(99, 102, 241, 0.08) 0%, transparent 50%)'
            ]
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Floating orbs */}
        <motion.div 
          className="absolute top-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-purple-500/8 to-indigo-500/8 rounded-full blur-3xl"
          style={{ y: orb1Y }}
          animate={{
            x: [0, 50, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-1/4 w-60 h-60 bg-gradient-to-br from-blue-500/8 to-purple-500/8 rounded-full blur-3xl"
          style={{ y: orb2Y }}
          animate={{
            x: [0, -30, 0],
            scale: [1.1, 1, 1.1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        />
        
        {/* Floating particles */}
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/15 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.1, 0.4, 0.1],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: 10 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.4
            }}
          />
        ))}
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px", amount: 0.3 }}
          variants={containerVariants}
        >
          {/* Premium Section Header */}
          <motion.div 
            variants={titleVariants}
            className="text-center mb-20"
          >
            <motion.div 
              className="text-purple-400 font-semibold text-lg mb-4 uppercase tracking-wider"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: "spring", stiffness: 200 }}
            >
              EKIBIMIZ
            </motion.div>
            
            <motion.h2 
              className="text-4xl sm:text-5xl md:text-6xl font-black bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent mb-6"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.span 
                className="block"
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Takımımızla
              </motion.span>
              <motion.span 
                className="block"
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                tanışın
              </motion.span>
            </motion.h2>
            
            <motion.p 
              className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              8+ yıllık deneyimimizle, her projede fark yaratan profesyonel ekibimiz. 
              Her biri alanında uzman, tutkulu ve yenilikçi.
            </motion.p>
          </motion.div>

          {/* Premium Team Cards */}
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12"
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                variants={cardVariants}
                className="group"
                whileHover={{ 
                  y: -15,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-3xl p-8 text-center border border-white/10 hover:border-purple-500/20 transition-all duration-500 group-hover:shadow-xl group-hover:shadow-purple-500/10">
                  
                  {/* Premium Avatar Container */}
                  <motion.div 
                    className="relative w-32 h-32 mx-auto mb-6"
                    whileHover={{ 
                      scale: 1.05,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <div className="relative w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-purple-500/20 to-indigo-500/20 backdrop-blur-sm border-2 border-white/10 group-hover:border-purple-500/30 transition-all duration-300">
                      {/* Placeholder for actual images */}
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-indigo-500/30 flex items-center justify-center">
                        <span className="text-3xl font-bold text-white/90">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                    </div>
                    
                    {/* Animated border ring */}
                    <motion.div 
                      className="absolute inset-0 rounded-full border-2 border-transparent"
                      animate={{
                        borderColor: ["rgba(168, 85, 247, 0)", "rgba(168, 85, 247, 0.3)", "rgba(168, 85, 247, 0)"]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  </motion.div>

                  {/* Premium Content */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                  >
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
                      {member.name}
                    </h3>
                    
                    <p className="text-purple-400 font-medium mb-4 group-hover:text-purple-300 transition-colors duration-300">
                      {member.role}
                    </p>
                    
                    <p className="text-gray-400 text-sm leading-relaxed mb-6 group-hover:text-gray-300 transition-colors duration-300">
                      {member.description}
                    </p>

                    {/* Social Links */}
                    <div className="flex items-center justify-center gap-4">
                      <motion.a
                        href={member.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-blue-500/20 transition-all duration-300 group/social"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Linkedin className="w-5 h-5 text-white/60 group-hover/social:text-blue-400 transition-colors duration-300" />
                      </motion.a>
                      
                      <motion.a
                        href={member.twitterUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-blue-400/20 transition-all duration-300 group/social"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Twitter className="w-5 h-5 text-white/60 group-hover/social:text-blue-400 transition-colors duration-300" />
                      </motion.a>
                      
                      <motion.a
                        href={member.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-gray-500/20 transition-all duration-300 group/social"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Github className="w-5 h-5 text-white/60 group-hover/social:text-gray-400 transition-colors duration-300" />
                      </motion.a>
                    </div>
                  </motion.div>

                  {/* Premium Hover Effects */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  
                  {/* Subtle border glow */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/20 via-indigo-500/20 to-blue-500/20 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none blur-xl" />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Premium CTA Section */}
          <motion.div 
            className="text-center mt-20"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.h3 
              className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4"
              whileHover={{ scale: 1.02 }}
            >
              Birlikte çalışmaya hazır mısınız?
            </motion.h3>
            
            <motion.p 
              className="text-gray-400 text-xl mb-8 font-light"
              whileHover={{ scale: 1.01 }}
            >
              Projenizi bir sonraki seviyeye taşıyalım.
            </motion.p>
            
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <button className="group bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-10 py-4 rounded-full font-semibold hover:from-purple-600 hover:to-indigo-600 transition-all duration-300 flex items-center gap-3 mx-auto shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/40">
                <span>İletişime Geç</span>
                <motion.div
                  className="group-hover:translate-x-1 transition-transform duration-300"
                  whileHover={{ x: 5 }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 