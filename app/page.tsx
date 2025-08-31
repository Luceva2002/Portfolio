'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import ParticlesBackground from '../components/ParticlesBackground';
import VariableProximityText from '../components/VariableProximityText';
import CircularText from '../components/CircularText';
import ContactModal from '../components/ContactModal';
import CVModal from '../components/CVModal';
import { useTheme } from '../components/ThemeProvider';

export default function Home() {
  const { isDark, toggleTheme } = useTheme();
  const [isPortfolioOpen, setIsPortfolioOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isCVOpen, setIsCVOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  // Trasformazioni per l'effetto scroll
  const portfolioY = useTransform(scrollYProgress, [0, 0.5, 1], ['100vh', '20vh', '0vh']);
  const astronautScale = useTransform(scrollYProgress, [0, 0.6, 1], [1, 0.3, 0]);
  const astronautOpacity = useTransform(scrollYProgress, [0, 0.4, 0.8], [1, 0.3, 0]);
  const particleScale = useTransform(scrollYProgress, [0.6, 1], [0, 1]);

  return (
    <>
      {/* Container principale unificato */}
      <main ref={containerRef} className={`relative transition-all duration-500 ${isDark ? 'bg-black' : 'bg-white'} overflow-x-hidden`} style={{ height: '200vh' }}>
        <ParticlesBackground />
        
        {/* Background fissato per il contenuto principale */}
        <div className="fixed inset-0 z-10">
          {/* Meteorite - solo desktop */}
          <motion.div
            initial={{ x: -200, y: -200, opacity: 0, rotate: -45 }}
            animate={{ x: 0, y: 0, opacity: 1, rotate: 0 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="hidden md:block meteorite float-medium"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image
                src="/meteorite.png"
                alt="Meteorite"
                width={360}
                height={360}
                className="cursor-pointer"
              />
            </motion.div>
          </motion.div>

          {/* Testi principale sopra l'astronauta */}
          <div className="absolute top-8 md:top-20 left-1/2 transform -translate-x-1/2 text-center z-20 px-4 rotate-[-2deg]">
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className="mb-2"
            >
              <VariableProximityText
                text={isDark ? "WHO AM I?" : ""}
                className={`font-funsized text-xl md:text-2xl mb-1 lg:text-4xl font-bold ${isDark ? 'text-white' : 'text-black'} mb-2 tracking-wider`}
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.5 }}
            >
              <VariableProximityText
                text={isDark ? "LUCA" : "CODING"}
                className={`font-funsized text-2xl md:text-3xl lg:text-4xl font-bold ${isDark ? 'text-white-500' : 'text-gray-800'} mb-2 tracking-wider`}
              />
              <br />
              <VariableProximityText
                text={isDark ? "EVANGELISTA" : "STUDENT"}
                className={`font-funsized text-2xl md:text-3xl lg:text-4xl font-bold ${isDark ? 'text-white' : 'text-gray-800'} tracking-wider`}
              />

            </motion.div>
          </div>

          {/* Astronauta centrale con effetto scroll per tutti */}
          <motion.div 
            className="flex justify-center items-center min-h-[40vh] md:min-h-[60vh] relative z-15 pt-16 md:pt-32"
            style={{ 
              scale: astronautScale,
              opacity: astronautOpacity,
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, delay: 1.5 }}
            >
              <motion.div
                animate={{ 
                  y: [-10, 10, -10],
                  rotate: [-3, 3, -3]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                onClick={() => setIsCVOpen(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="cursor-pointer relative"
              >
                <Image
                  src="/astronaut.png"
                  alt="Astronauta"
                  width={380}
                  height={380}
                  className="glow-astronaut md:w-[613px] md:h-[613px]"
                />
                
            </motion.div>
            </motion.div>
          </motion.div>

          {/* Freccia ME - responsive */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 2.5 }}
            className="font-funsized absolute z-20 left-1/4 md:left-1/4 transform -translate-y-1/2 md:-translate-x-1/2"
            style={{ 
              top: 'calc(50% + 60px)', 
              left: '25%',
            }}
          >
            <div className={`flex items-center md:flex-col text-lg md:text-2xl font-bold ${isDark ? 'text-white' : 'text-black'}`}>
              <span className="mr-4 md:mr-0 md:mb-3 text-xl md:text-2xl">ME</span>
              <motion.div
                animate={{ 
                  x: [0, 10, 0],
                  y: [0, -5, 0] 
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="text-2xl md:text-3xl"
              >
                <span className="hidden md:inline">→</span>
                <span className="md:hidden ">↑</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Theme Toggle - Sun/Moon */}
          <motion.div
            initial={{ opacity: 0, x: 100, y: -100 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 2, delay: 1 }}
            className="toggle md:absolute fixed bottom-4 md:bottom-auto md:top-8 left-4 md:left-auto md:right-8 z-40 md:z-10"
            onClick={toggleTheme}
            drag
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className={`relative pb-4 md:p-2 rounded-full ${isDark ? 'bg-glass-dark' : 'bg-glass-light'}`}>
              {isDark ? (
                <Image
                  src="/moon.png"
                  alt="Luna"
                  width={80}
                  height={80}
                  className="transition-all duration-500 cursor-pointer md:w-[254px] md:h-[254px]"
                />
              ) : (
                <Image
                  src="/sun.png"
                  alt="Sole"
                  width={80}
                  height={80}
                  className="transition-all duration-500 animate-pulse cursor-pointer md:w-[254px] md:h-[254px]"
                />
              )}
            </div>
          </motion.div>

          {/* Alien con testo rotante */}
          <motion.div
            initial={{ opacity: 0, x: 100, y: 100 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 2, delay: 3 }}
            className="alien md:absolute fixed bottom-4 md:bottom-8 right-4 md:right-8 z-40 md:z-10 float-medium cursor-pointer"
            onClick={() => setIsContactOpen(true)}
            drag
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="relative md:-top-[30px] md:-left-[35px]">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute -top-4 -left-4 md:-top-[15px] md:-left-[21px]"
              >
                <CircularText
                  text={!isMobile ? "• STABILISCI • PRIMO • CONTATTO " : "• CONTACT • ME "}
                  radius={!isMobile ? 75 : 38}
                />
              </motion.div>
              
              <div className="interactive-uniform relative z-10">
                <Image
                  src="/alien.png"
                  alt="Alieno"
                  width={60}
                  height={60}
                  className="glow-alien md:w-[100px] md:h-[100px] pb-5 pr-5 md:pb-0 md:pr-0"
                />
              </div>
            </div>
          </motion.div>

        </div>

        {/* Portfolio Card con effetto scroll per tutti */}
        <motion.div 
          className="fixed inset-x-0 bottom-0 z-30 px-4 pb-4"
          style={{ y: portfolioY }}
        >
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, margin: "-30%" }}
            onClick={() => setIsPortfolioOpen(true)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`p-6 ${isDark 
              ? 'bg-black/80 border border-white/30 hover:bg-black/90' 
              : 'bg-white/90 border border-gray-300 hover:bg-white/95 shadow-lg'
            } rounded-2xl backdrop-blur-sm transition-all duration-300 cursor-pointer min-h-screen`}
            style={{
              background: isDark 
                ? 'linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(20,20,40,0.9) 100%)'
                : 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(248,250,252,0.98) 100%)',
              backdropFilter: 'blur(15px)'
            }}
          >
            <div className="text-center mb-6">
              <div className="flex items-center justify-center gap-3 mb-4">
                <h2 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>My Projects</h2>
                <span className="text-2xl">💻</span>
              </div>
            </div>

            {/* Preview dei progetti */}
            <div className="space-y-3">
              <div className={`flex items-center cursor-pointer justify-between p-3 ${isDark 
                ? 'bg-white/5 border border-white/20 hover:bg-white/10' 
                : 'bg-gray-50/80 border border-gray-200 hover:bg-gray-100/90'
              } rounded-xl transition-colors duration-200`}>
                <div>
                  <h3 className={`font-medium text-sm ${isDark ? 'text-white' : 'text-gray-900'}`}>Space Web App</h3>
                  <p className={`text-xs ${isDark ? 'text-white/60' : 'text-gray-600'}`}>React, Next.js, Tailwind</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs px-2 py-1 bg-green-500/20 text-green-600 border border-green-500/30 rounded-full">Complete</span>
                  <span className="text-lg">🛸</span>
                </div>
              </div>

              <div className={`flex items-center cursor-pointer justify-between p-3 ${isDark 
                ? 'bg-white/5 border border-white/20 hover:bg-white/10' 
                : 'bg-gray-50/80 border border-gray-200 hover:bg-gray-100/90'
              } rounded-xl transition-colors duration-200`}>
                <div>
                  <h3 className={`font-medium text-sm ${isDark ? 'text-white' : 'text-gray-900'}`}>Dashboard UI</h3>
                  <p className={`text-xs ${isDark ? 'text-white/60' : 'text-gray-600'}`}>TypeScript, Framer Motion</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs px-2 py-1 bg-yellow-500/20 text-yellow-600 border border-yellow-500/30 rounded-full">WIP</span>
                  <span className="text-lg">🛸</span>
                </div>
              </div>

              <div className={`flex items-center cursor-pointer justify-between p-3 ${isDark 
                ? 'bg-white/5 border border-white/20 hover:bg-white/10' 
                : 'bg-gray-50/80 border border-gray-200 hover:bg-gray-100/90'
              } rounded-xl transition-colors duration-200`}>
                <div>
                  <h3 className={`font-medium text-sm ${isDark ? 'text-white' : 'text-gray-900'}`}>Mobile Cosmic</h3>
                  <p className={`text-xs ${isDark ? 'text-white/60' : 'text-gray-600'}`}>React Native, Expo</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs px-2 py-1 bg-purple-500/20 text-purple-600 border border-purple-500/30 rounded-full">Planned</span>
                  <span className="text-lg">🛸</span>
                </div>
              </div>
            </div>

            <div className="mt-6 text-center">
            </div>
          </motion.div>
        </motion.div>
      </main>

      <ContactModal 
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
      
      <CVModal 
        isOpen={isCVOpen}
        onClose={() => setIsCVOpen(false)}
      />
    </>
  );
}