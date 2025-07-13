'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Share2, 
  Search, 
  Mail, 
  Zap, 
  Target, 
  BarChart3, 
  Users,
  ArrowRight,
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

export default function Services() {
  const { scrollY } = useScroll();
  
  // Parallax effects
  const backgroundY = useTransform(scrollY, [0, 1000], [0, -100]);
  const orb1Y = useTransform(scrollY, [0, 1000], [0, 200]);
  const orb2Y = useTransform(scrollY, [0, 1000], [0, -150]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Daha dramatik stagger için artırıldı
        delayChildren: 0.3,
        duration: 0.8
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
        duration: 1,
        type: "spring" as const,
        stiffness: 100
      }
    }
  };

  return (
    <section className="relative py-32 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 overflow-hidden">
      
      {/* Premium Animated Background */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        style={{ y: backgroundY }}
      >
        {/* Soft gradient base */}
        <motion.div
          className="absolute inset-0 opacity-60"
          animate={{
            background: [
              'radial-gradient(circle at 30% 30%, rgba(99, 102, 241, 0.1) 0%, transparent 50%), radial-gradient(circle at 70% 70%, rgba(168, 85, 247, 0.08) 0%, transparent 50%)',
              'radial-gradient(circle at 70% 30%, rgba(168, 85, 247, 0.1) 0%, transparent 50%), radial-gradient(circle at 30% 70%, rgba(59, 130, 246, 0.08) 0%, transparent 50%)',
              'radial-gradient(circle at 30% 30%, rgba(99, 102, 241, 0.1) 0%, transparent 50%), radial-gradient(circle at 70% 70%, rgba(168, 85, 247, 0.08) 0%, transparent 50%)'
            ]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut" as const
          }}
        />
        
        {/* Floating orbs */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl"
          style={{ y: orb1Y }}
          animate={{
            x: [0, 100, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut" as const
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-full blur-3xl"
          style={{ y: orb2Y }}
          animate={{
            x: [0, -80, 0],
            scale: [1.1, 1, 1.1]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut" as const,
            delay: 5
          }}
        />
        
        {/* Floating particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: 8 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut" as const,
              delay: i * 0.3
            }}
          />
        ))}
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px", amount: 0.1 }}
          variants={containerVariants}
        >
          {/* Premium Section Header */}
          <motion.div 
            variants={titleVariants}
            className="text-center mb-20 relative z-30"
          >
            <motion.div 
              className="text-indigo-400 font-semibold text-lg mb-4 uppercase tracking-wider"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: "spring" as const, stiffness: 200 }}
            >
              HİZMETLERİMİZ
            </motion.div>
            
            <motion.h2 
              className="text-4xl sm:text-5xl md:text-6xl font-black bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent leading-tight mb-6"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.span 
                className="block"
                initial={{ opacity: 0, rotateX: 90 }}
                whileInView={{ opacity: 1, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Neler yapıyoruz?
              </motion.span>
            </motion.h2>
            
            <motion.p 
              className="text-xl text-gray-400 max-w-3xl mx-auto font-light"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Dijital pazarlama alanında sunduğumuz premium hizmetlerle markanızı geleceğe taşıyoruz.
            </motion.p>
          </motion.div>

          {/* Floating Constellation Layout */}
          <div className="relative w-full h-[700px] md:h-[800px] lg:h-[900px] max-w-7xl mx-auto overflow-hidden">
            
            {/* Connection Lines */}
            <svg className="absolute inset-0 pointer-events-none" style={{ zIndex: 1 }}>
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="rgba(99, 102, 241, 0.3)" />
                  <stop offset="100%" stopColor="rgba(168, 85, 247, 0.3)" />
                </linearGradient>
              </defs>
              {/* Animated connection lines */}
              <motion.line
                x1="20%" y1="25%" x2="80%" y2="35%"
                stroke="url(#lineGradient)"
                strokeWidth="2"
                opacity="0.2"
                animate={{
                  opacity: [0.1, 0.4, 0.1],
                  strokeWidth: [1, 3, 1]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut" as const
                }}
              />
              <motion.line
                x1="15%" y1="60%" x2="60%" y2="20%"
                stroke="url(#lineGradient)"
                strokeWidth="2"
                opacity="0.2"
                animate={{
                  opacity: [0.1, 0.4, 0.1],
                  strokeWidth: [1, 3, 1]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut" as const,
                  delay: 1
                }}
              />
              <motion.line
                x1="70%" y1="65%" x2="30%" y2="80%"
                stroke="url(#lineGradient)"
                strokeWidth="2"
                opacity="0.2"
                animate={{
                  opacity: [0.1, 0.4, 0.1],
                  strokeWidth: [1, 3, 1]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut" as const,
                  delay: 2
                }}
              />
            </svg>

            {/* Floating Service Cards */}
            {services.slice(0, 6).map((service, index) => {
              const Icon = iconMap[service.icon];
              const positions = [
                { x: '15%', y: '20%' },
                { x: '75%', y: '15%' },
                { x: '85%', y: '60%' },
                { x: '25%', y: '75%' },
                { x: '60%', y: '80%' },
                { x: '10%', y: '50%' }
              ];
              
              const colors = [
                'from-purple-500/20 to-indigo-500/20',
                'from-blue-500/20 to-cyan-500/20',
                'from-green-500/20 to-emerald-500/20',
                'from-orange-500/20 to-red-500/20',
                'from-pink-500/20 to-rose-500/20',
                'from-indigo-500/20 to-purple-500/20'
              ];

              const iconColors = [
                'from-purple-500/40 to-indigo-500/40',
                'from-blue-500/40 to-cyan-500/40',
                'from-green-500/40 to-emerald-500/40',
                'from-orange-500/40 to-red-500/40',
                'from-pink-500/40 to-rose-500/40',
                'from-indigo-500/40 to-purple-500/40'
              ];

              return (
                <motion.div
                  key={service.id}
                  className="absolute group cursor-pointer"
                  style={{
                    left: positions[index].x,
                    top: positions[index].y,
                    transform: 'translate(-50%, -50%)',
                    zIndex: 10
                  }}
                  initial={{ 
                    opacity: 0, 
                    scale: 0,
                    rotate: Math.random() * 360
                  }}
                  whileInView={{ 
                    opacity: 1, 
                    scale: 1,
                    rotate: 0
                  }}
                  transition={{ 
                    duration: 1.2,
                    delay: index * 0.2,
                    type: "spring" as const,
                    stiffness: 100
                  }}
                  animate={{
                    y: [0, -20, 0],
                    rotate: [0, 5, 0, -5, 0],
                    scale: [1, 1.02, 1],
                    transition: {
                      duration: 6 + index,
                      repeat: Infinity,
                      ease: "easeInOut" as const,
                      delay: index * 0.5
                    }
                  }}
                  whileHover={{
                    scale: 1.15,
                    rotate: 10,
                    z: 50,
                    transition: {
                      duration: 0.3,
                      type: "spring" as const,
                      stiffness: 400,
                      damping: 10
                    }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className={`relative bg-gradient-to-br ${colors[index]} backdrop-blur-xl rounded-full w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 flex flex-col items-center justify-center border border-white/10 group-hover:border-white/30 transition-all duration-500 group-hover:shadow-2xl overflow-hidden`}>
                    
                    {/* Floating Icon */}
                    <motion.div 
                      className={`w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-gradient-to-br ${iconColors[index]} rounded-full flex items-center justify-center mb-2 md:mb-3 lg:mb-4 backdrop-blur-sm border border-white/20`}
                      animate={{
                        rotate: [0, 360],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{
                        duration: 10 + index,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                      whileHover={{
                        scale: 1.2,
                        rotate: 180,
                        transition: { duration: 0.4 }
                      }}
                    >
                      {Icon && <Icon className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-white" />}
                    </motion.div>
                    
                    {/* Service Title */}
                    <h3 className="text-xs md:text-sm lg:text-base font-bold text-white text-center leading-tight group-hover:text-white/90 transition-colors duration-300 px-2">
                      {service.title.split(' ').slice(0, 2).join(' ')}
                    </h3>
                    
                    {/* Pulsing Ring */}
                    <motion.div
                      className="absolute inset-0 rounded-full border-2 border-white/20"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.7, 0.3]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut" as const,
                        delay: index * 0.3
                      }}
                    />
                    
                    {/* Hover Ring */}
                    <motion.div
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      animate={{
                        rotate: [0, 360]
                      }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    />
                    
                    {/* Floating Particles */}
                    {Array.from({ length: 3 }).map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-white/40 rounded-full"
                        style={{
                          left: `${20 + i * 30}%`,
                          top: `${20 + i * 25}%`,
                        }}
                        animate={{
                          y: [0, -30, 0],
                          opacity: [0.2, 1, 0.2],
                          scale: [0.5, 1.5, 0.5]
                        }}
                        transition={{
                          duration: 4 + i,
                          repeat: Infinity,
                          ease: "easeInOut" as const,
                          delay: i * 0.5 + index * 0.2
                        }}
                      />
                    ))}
                  </div>
                </motion.div>
              );
            })}

            {/* Central Hub */}
            <motion.div
              className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
              style={{ zIndex: 5 }}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, delay: 1 }}
            >
              <motion.div
                className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-indigo-500/30 to-purple-500/30 rounded-full flex items-center justify-center backdrop-blur-xl border border-white/20"
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-white/20 to-white/10 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 md:w-3 md:h-3 lg:w-4 lg:h-4 bg-white rounded-full animate-pulse" />
                </div>
              </motion.div>
            </motion.div>

          </div>

          {/* Premium CTA Section */}
          <motion.div 
            className="text-center mt-20"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <button className="group bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-10 py-4 rounded-full font-semibold hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 flex items-center gap-3 mx-auto shadow-lg shadow-indigo-500/25 hover:shadow-xl hover:shadow-indigo-500/40">
                <span>Tüm Hizmetlerimizi Görün</span>
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
