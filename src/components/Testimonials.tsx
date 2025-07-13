'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Quote, Star, ArrowRight, User } from 'lucide-react';
import { testimonials, testimonialsSection } from '@/constants/testimonials';

export default function Testimonials() {
  const ref = useRef(null);
  const { scrollY } = useScroll();
  
  // Parallax effects
  const backgroundY = useTransform(scrollY, [0, 1000], [0, -100]);
  const orb1Y = useTransform(scrollY, [0, 1000], [0, 180]);
  const orb2Y = useTransform(scrollY, [0, 1000], [0, -140]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
        type: "spring" as const,
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
        type: "spring" as const,
        stiffness: 80
      }
    }
  };

  return (
    <section ref={ref} className="relative py-32 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 overflow-hidden">
      
      {/* Premium Animated Background */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        style={{ y: backgroundY }}
      >
        {/* Soft gradient base */}
        <motion.div
          className="absolute inset-0 opacity-40"
          animate={{
            background: [
              'radial-gradient(circle at 30% 30%, rgba(59, 130, 246, 0.1) 0%, transparent 50%), radial-gradient(circle at 70% 70%, rgba(99, 102, 241, 0.08) 0%, transparent 50%)',
              'radial-gradient(circle at 70% 30%, rgba(99, 102, 241, 0.1) 0%, transparent 50%), radial-gradient(circle at 30% 70%, rgba(168, 85, 247, 0.08) 0%, transparent 50%)',
              'radial-gradient(circle at 30% 30%, rgba(59, 130, 246, 0.1) 0%, transparent 50%), radial-gradient(circle at 70% 70%, rgba(99, 102, 241, 0.08) 0%, transparent 50%)'
            ]
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut" as const
          }}
        />
        
        {/* Floating orbs */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-500/8 to-indigo-500/8 rounded-full blur-3xl"
          style={{ y: orb1Y }}
          animate={{
            x: [0, 80, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut" as const
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-br from-indigo-500/8 to-purple-500/8 rounded-full blur-3xl"
          style={{ y: orb2Y }}
          animate={{
            x: [0, -60, 0],
            scale: [1.1, 1, 1.1]
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut" as const,
            delay: 4
          }}
        />
        
        {/* Floating particles */}
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/10 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.8, 1]
            }}
            transition={{
              duration: 12 + i * 0.8,
              repeat: Infinity,
              ease: "easeInOut" as const,
              delay: i * 0.6
            }}
          />
        ))}
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px", amount: 0.2 }}
          variants={containerVariants}
        >
          {/* Premium Section Header */}
          <motion.div
            variants={titleVariants}
            className="text-center mb-20"
          >
                        <motion.div
              className="text-blue-400 font-semibold text-lg mb-4 uppercase tracking-wider"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: "spring" as const, stiffness: 200 }}
            >
              MÜŞTERİ DENEYİMLERİ
            </motion.div>
            
            <motion.h2 
              className="text-4xl sm:text-5xl md:text-6xl font-black bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent leading-tight mb-6"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {testimonialsSection.title}
            </motion.h2>
            
            <motion.p 
              className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {testimonialsSection.subtitle}
            </motion.p>
          </motion.div>

          {/* Premium Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mb-20">
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                variants={cardVariants}
                className="group"
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-3xl p-8 h-full border border-white/10 hover:border-blue-500/20 transition-all duration-500 group-hover:shadow-xl group-hover:shadow-blue-500/10">
                  
                  {/* Premium Quote Icon */}
                  <div className="mb-6">
                    <motion.div 
                      className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-2xl flex items-center justify-center group-hover:from-blue-500/30 group-hover:to-indigo-500/30 transition-all duration-300 backdrop-blur-sm border border-white/10"
                      whileHover={{ 
                        scale: 1.05,
                        rotate: 5,
                        transition: { duration: 0.3 }
                      }}
                    >
                      <Quote className="w-8 h-8 text-white/80" />
                    </motion.div>
                  </div>

                  {/* Premium Content */}
                  <blockquote className="text-gray-300 leading-relaxed mb-8 text-lg font-light group-hover:text-gray-200 transition-colors duration-300">
                    &quot;{testimonial.content}&quot;
                  </blockquote>

                  {/* Premium Rating */}
                  <div className="flex items-center gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: i * 0.1 }}
                      >
                        <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      </motion.div>
                    ))}
                  </div>

                  {/* Premium Author Info */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/10">
                      <User className="w-6 h-6 text-white/70" />
                    </div>
                    <div>
                      <p className="font-bold text-white text-lg group-hover:text-blue-300 transition-colors duration-300">
                        {testimonial.name}
                      </p>
                      <p className="text-gray-400 text-sm font-medium group-hover:text-gray-300 transition-colors duration-300">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                  
                  {/* Premium Hover Effects */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  
                  {/* Subtle border glow */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-purple-500/20 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none blur-xl" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Premium Success Stories CTA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center"
          >
            <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-3xl p-12 lg:p-16 border border-white/10 max-w-5xl mx-auto">
              
              {/* Premium Background Effects */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/5 via-indigo-500/5 to-purple-500/5 opacity-50" />
              
              <div className="relative space-y-8">
                <div>
                  <motion.h3 
                    className="text-3xl sm:text-4xl md:text-5xl font-black bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent mb-4"
                    whileHover={{ scale: 1.02 }}
                  >
                    MARKA HİKAYELERİ
                  </motion.h3>
                  <motion.h4 
                    className="text-2xl md:text-3xl font-bold text-blue-300 mb-6"
                    whileHover={{ scale: 1.01 }}
                  >
                    Sonuçlar, Dönüşümler.
                  </motion.h4>
                </div>
                
                <motion.p 
                  className="text-lg lg:text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto font-light"
                  whileHover={{ scale: 1.01 }}
                >
                  Müşterilerimizin başarı hikayelerini keşfedin. Her projede elde ettiğimiz 
                  sonuçlar ve sağladığımız dönüşümler hakkında detaylı bilgi alın.
                </motion.p>
                
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <button className="group bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-10 py-4 rounded-full font-semibold hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 flex items-center gap-3 mx-auto shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40">
                    <span>Tüm Başarı Hikayelerini Görün</span>
                    <motion.div
                      className="group-hover:translate-x-1 transition-transform duration-300"
                      whileHover={{ x: 5 }}
                    >
                      <ArrowRight className="w-5 h-5" />
                    </motion.div>
                  </button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 
