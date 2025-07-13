'use client';

import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Users, Globe, Award, ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Hero() {
  const { scrollY } = useScroll();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Mouse tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Smooth mouse following
  const springX = useSpring(mouseX, { stiffness: 100, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 30 });
  
  // Parallax transforms
  const backgroundY = useTransform(scrollY, [0, 1000], [0, 300]);
  const titleY = useTransform(scrollY, [0, 800], [0, -200]);
  
  // Mouse tracking effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 100;
      const y = (e.clientY / window.innerHeight - 0.5) * 100;
      mouseX.set(x);
      mouseY.set(y);
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

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
    hidden: { opacity: 0, y: 100, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { 
        duration: 1.2,
        type: "spring",
        stiffness: 100
      }
    }
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.8,
        delay: 0.4,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.8,
        delay: 0.6,
        type: "spring"
      }
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 text-white overflow-hidden">
      
      {/* PREMIUM SOFT ANIMATED BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">
        
        {/* Layer 1: Soft Gradient Base */}
        <motion.div 
          className="absolute inset-0"
          style={{ y: backgroundY }}
        >
          {/* Main soft gradient */}
          <motion.div
            className="absolute inset-0 opacity-90"
            animate={{
              background: [
                'radial-gradient(circle at 25% 25%, rgba(99, 102, 241, 0.15) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(168, 85, 247, 0.12) 0%, transparent 50%), radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 60%)',
                'radial-gradient(circle at 75% 30%, rgba(168, 85, 247, 0.15) 0%, transparent 50%), radial-gradient(circle at 25% 70%, rgba(59, 130, 246, 0.12) 0%, transparent 50%), radial-gradient(circle at 60% 40%, rgba(99, 102, 241, 0.1) 0%, transparent 60%)',
                'radial-gradient(circle at 50% 80%, rgba(59, 130, 246, 0.15) 0%, transparent 50%), radial-gradient(circle at 30% 20%, rgba(99, 102, 241, 0.12) 0%, transparent 50%), radial-gradient(circle at 70% 60%, rgba(168, 85, 247, 0.1) 0%, transparent 60%)',
                'radial-gradient(circle at 25% 25%, rgba(99, 102, 241, 0.15) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(168, 85, 247, 0.12) 0%, transparent 50%), radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 60%)'
              ]
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* Interactive mouse gradient */}
          <motion.div
            className="absolute inset-0 opacity-40"
            style={{
              background: `radial-gradient(circle 500px at ${mousePosition.x}px ${mousePosition.y}px, rgba(139, 92, 246, 0.08) 0%, transparent 70%)`
            }}
          />
        </motion.div>

        {/* Layer 2: Soft Morphing Shapes */}
        <motion.div 
          className="absolute inset-0"
          style={{
            x: useTransform(springX, [-50, 50], [-15, 15]),
            y: useTransform(springY, [-50, 50], [-15, 15])
          }}
        >
          {/* Main morphing shape */}
          <motion.div
            className="absolute top-1/2 left-1/2 w-80 h-80 opacity-25"
            style={{
              x: useTransform(springX, [-50, 50], [-80, 80]),
              y: useTransform(springY, [-50, 50], [-80, 80])
            }}
            animate={{
              borderRadius: [
                '40% 60% 60% 40% / 60% 30% 70% 40%',
                '60% 40% 40% 60% / 40% 60% 30% 70%',
                '50% 50% 50% 50% / 50% 50% 50% 50%',
                '30% 70% 70% 30% / 70% 40% 60% 30%',
                '40% 60% 60% 40% / 60% 30% 70% 40%'
              ],
              rotate: [0, 120, 240, 360],
              scale: [1, 1.1, 0.9, 1]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="border border-indigo-400/15 bg-gradient-to-br from-indigo-400/8 to-purple-400/8 backdrop-blur-sm"
          />
          
          {/* Secondary soft shapes */}
          {Array.from({ length: 3 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-24 h-24 opacity-20"
              style={{
                x: useTransform(springX, [-50, 50], [(-1) ** i * 120, (-1) ** i * 160]),
                y: useTransform(springY, [-50, 50], [(-1) ** i * 80, (-1) ** i * 120])
              }}
              animate={{
                borderRadius: [
                  '30% 70% 70% 30% / 30% 30% 70% 70%',
                  '70% 30% 30% 70% / 70% 70% 30% 30%',
                  '50% 50% 50% 50% / 50% 50% 50% 50%',
                  '30% 70% 70% 30% / 30% 30% 70% 70%'
                ],
                rotate: [0, (-1) ** i * 180],
                x: [0, (-1) ** i * 30, 0],
                y: [0, (-1) ** (i + 1) * 20, 0]
              }}
              transition={{
                duration: 15 + i * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 3
              }}
              className={`border border-white/8 bg-gradient-to-br ${
                i === 0 ? 'from-blue-400/10 to-cyan-400/8' :
                i === 1 ? 'from-purple-400/10 to-pink-400/8' :
                'from-indigo-400/10 to-blue-400/8'
              }`}
              style={{
                left: `${25 + i * 25}%`,
                top: `${15 + i * 30}%`,
                transform: 'translate(-50%, -50%)'
              }}
            />
          ))}
        </motion.div>

        {/* Layer 3: Premium Particle Field */}
        <div className="absolute inset-0">
          {Array.from({ length: 35 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white/60"
              style={{
                width: i % 4 === 0 ? '3px' : i % 3 === 0 ? '2px' : '1.5px',
                height: i % 4 === 0 ? '3px' : i % 3 === 0 ? '2px' : '1.5px',
                x: useTransform(springX, [-50, 50], [(-1) ** i * 8, (-1) ** i * 18]),
                y: useTransform(springY, [-50, 50], [(-1) ** i * 12, (-1) ** i * 20])
              }}
              animate={{
                x: [
                  Math.cos((i * 360 * Math.PI) / 35 / 180) * (180 + i * 4),
                  Math.cos(((i * 360 + 180) * Math.PI) / 35 / 180) * (220 + i * 4),
                  Math.cos((i * 360 * Math.PI) / 35 / 180) * (180 + i * 4)
                ],
                y: [
                  Math.sin((i * 360 * Math.PI) / 35 / 180) * (180 + i * 4),
                  Math.sin(((i * 360 + 180) * Math.PI) / 35 / 180) * (220 + i * 4),
                  Math.sin((i * 360 * Math.PI) / 35 / 180) * (180 + i * 4)
                ],
                opacity: [0.3, 0.8, 0.5, 1, 0.3],
                scale: [1, 1.5, 1.2, 1]
              }}
              transition={{
                duration: 10 + i * 0.3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.15
              }}
              style={{
                left: '50%',
                top: '50%',
                filter: `blur(${i % 5 === 0 ? '1px' : '0.5px'})`,
                boxShadow: i % 3 === 0 ? '0 0 10px rgba(255, 255, 255, 0.3)' : 'none'
              }}
            />
          ))}
        </div>

        {/* Layer 4: Soft Flowing Lines */}
        <motion.div className="absolute inset-0 opacity-25">
          <svg className="w-full h-full">
            {Array.from({ length: 6 }).map((_, i) => (
              <motion.path
                key={i}
                d={`M ${100 + i * 150} 100 Q ${250 + i * 80} ${200 + i * 60} ${400 + i * 120} ${300 + i * 40}`}
                stroke={
                  i % 3 === 0 ? "rgba(99, 102, 241, 0.4)" :
                  i % 3 === 1 ? "rgba(168, 85, 247, 0.4)" :
                  "rgba(59, 130, 246, 0.4)"
                }
                strokeWidth="1.5"
                fill="none"
                strokeDasharray="8,12"
                animate={{
                  pathLength: [0, 1, 0],
                  opacity: [0.2, 0.8, 0.2]
                }}
                transition={{
                  duration: 8 + i * 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.8
                }}
              />
            ))}
          </svg>
        </motion.div>

        {/* Layer 5: Elegant Energy Orbs */}
        <motion.div 
          className="absolute inset-0"
          style={{
            x: useTransform(springX, [-50, 50], [-25, 25]),
            y: useTransform(springY, [-50, 50], [-25, 25])
          }}
        >
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                width: `${15 + i * 8}px`,
                height: `${15 + i * 8}px`,
                left: `${10 + i * 12}%`,
                top: `${15 + i * 10}%`,
                background: `radial-gradient(circle, ${
                  i % 4 === 0 ? 'rgba(99, 102, 241, 0.6)' :
                  i % 4 === 1 ? 'rgba(168, 85, 247, 0.6)' :
                  i % 4 === 2 ? 'rgba(59, 130, 246, 0.6)' :
                  'rgba(139, 92, 246, 0.6)'
                } 0%, transparent 70%)`,
                filter: 'blur(1px)'
              }}
              animate={{
                y: [0, -40 - i * 8, 0],
                x: [0, 15 * Math.cos(i * 0.5), 0],
                scale: [1, 1.2, 1],
                opacity: [0.4, 0.9, 0.4]
              }}
              transition={{
                duration: 12 + i * 1.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5
              }}
            />
          ))}
        </motion.div>

        {/* Layer 6: Sophisticated Light Prism */}
        <motion.div 
          className="absolute inset-0 opacity-20"
          style={{
            background: `conic-gradient(from 0deg at ${mousePosition.x}px ${mousePosition.y}px, 
              transparent 0deg, 
              rgba(99, 102, 241, 0.1) 72deg, 
              transparent 144deg, 
              rgba(168, 85, 247, 0.1) 216deg, 
              transparent 288deg, 
              rgba(59, 130, 246, 0.1) 360deg)`
          }}
          animate={{ rotate: 360 }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Layer 7: Subtle Ambient Glow */}
        <motion.div 
          className="absolute inset-0 opacity-60"
          animate={{
            background: [
              'radial-gradient(circle at 20% 20%, rgba(99, 102, 241, 0.03) 0%, transparent 70%)',
              'radial-gradient(circle at 80% 80%, rgba(168, 85, 247, 0.03) 0%, transparent 70%)',
              'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.03) 0%, transparent 70%)',
              'radial-gradient(circle at 20% 20%, rgba(99, 102, 241, 0.03) 0%, transparent 70%)'
            ]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* CONTENT AREA */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="min-h-screen flex flex-col justify-center items-center text-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-6xl mx-auto"
          >
            {/* Main Title */}
            <motion.h1 
              variants={titleVariants}
              style={{ y: titleY }}
              className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight mb-8 tracking-wide bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent"
            >
              Satışı artır, kârlılığı yükselt,<br />
              <span className="bg-gradient-to-r from-indigo-300 via-purple-300 to-blue-300 bg-clip-text text-transparent">
                markanı güçlendir.
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p 
              variants={subtitleVariants}
              className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-16 max-w-4xl mx-auto font-light leading-relaxed"
            >
              Modern dijital pazarlama stratejileriyle işinizi büyütün. 
              <br className="hidden md:block" />
              Veri odaklı çözümlerle hedeflerinize ulaşın.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              variants={buttonVariants}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  href="/contact"
                  className="group bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-10 py-4 rounded-full font-semibold hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 flex items-center gap-3 min-w-[250px] justify-center shadow-lg shadow-indigo-500/20 hover:shadow-xl hover:shadow-indigo-500/30"
                >
                  Ücretsiz Görüşme
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  href="/services"
                  className="group border-2 border-white/20 text-white px-10 py-4 rounded-full font-semibold hover:bg-white/5 hover:border-white/30 transition-all duration-300 min-w-[250px] justify-center flex items-center backdrop-blur-sm"
                >
                  Hizmetlerimizi İncele
                </Link>
              </motion.div>
            </motion.div>

            {/* Stats */}
            <motion.div 
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto"
            >
              {[
                { icon: Users, number: "500+", text: "Mutlu Müşteri" },
                { icon: Globe, number: "50+", text: "Başarılı Proje" },
                { icon: Award, number: "5+", text: "Yıl Deneyim" }
              ].map((stat, i) => (
                <motion.div 
                  key={i}
                  variants={buttonVariants}
                  whileHover={{ y: -10, scale: 1.05 }}
                  className="text-center group"
                >
                  <div className="flex items-center justify-center mb-4">
                    <div className="p-4 rounded-full bg-gradient-to-br from-white/10 to-white/5 group-hover:from-white/15 group-hover:to-white/8 transition-all duration-300 backdrop-blur-sm">
                      <stat.icon className="w-8 h-8 text-white group-hover:text-indigo-300 transition-colors" />
                    </div>
                  </div>
                  <span className="text-4xl font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent block mb-2">
                    {stat.number}
                  </span>
                  <p className="text-gray-400 text-lg font-medium">{stat.text}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div 
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 15, 0] }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="flex flex-col items-center gap-2">
              <span className="text-gray-400 text-sm font-medium tracking-wider uppercase">Scroll</span>
              <ChevronDown className="w-6 h-6 text-gray-400" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 