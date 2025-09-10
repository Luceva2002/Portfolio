'use client';

// framer-motion removed — all animations replaced with static elements
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
  const dragContainerRef = useRef(null);

  return (
    <>
      {/* Container principale unificato */}
      <main ref={containerRef} className={`relative transition-all duration-500 ${isDark ? 'bg-black' : 'bg-white'} overflow-x-hidden`} style={{ height: '200vh' }}>
        <ParticlesBackground />
        
        {/* Background fissato per il contenuto principale */}
        <div ref={dragContainerRef} className="fixed inset-0 z-10">
          {/* Meteorite - solo desktop */}
          <div className="hidden md:block meteorite float-medium">
            <div>
              <Image
                src="/meteorite.svg"
                alt="Meteorite"
                width={360}
                height={360}
                className="cursor-pointer"
              />
            </div>
          </div>

          {/* Testi principale sopra l'astronauta */}
          <div className="absolute top-8 md:top-20 left-1/2 transform -translate-x-1/2 text-center z-20 px-4 rotate-[-2deg]">
            <div className="mb-2">
              <VariableProximityText
                text={isDark ? "WHO AM I?" : ""}
                className={`font-funsized text-xl md:text-2xl mb-1 lg:text-4xl font-bold ${isDark ? 'text-white' : 'text-black'} mb-2 tracking-wider`}
              />
            </div>
            
            <div>
              <VariableProximityText
                text={isDark ? "LUCA" : "CODING"}
                className={`font-funsized text-2xl md:text-3xl lg:text-4xl font-bold ${isDark ? 'text-white-500' : 'text-gray-800'} mb-2 tracking-wider`}
              />
              <br />
              <VariableProximityText
                text={isDark ? "EVANGELISTA" : "STUDENT"}
                className={`font-funsized whitespace-nowrap text-2xl md:text-3xl lg:text-4xl font-bold ${isDark ? 'text-white' : 'text-gray-800'} tracking-wider`}
              />

            </div>
          </div>

          {/* Astronauta centrale con effetto scroll per tutti */}
          <div 
            className="flex justify-center pt-40 items-center min-h-[40vh] md:min-h-[40vh] relative z-15 md:pt-60"
            style={{ 
            }}
          >
            <div>
              <div
                onClick={() => setIsCVOpen(true)}
                className="cursor-pointer relative"
              >
                <Image
                  src="/astronaut.svg"
                  alt="Astronauta"
                  width={380}
                  height={380}
                  className="md:w-[550px] md:h-[550px]"
                />
              </div>
            </div>
          </div>

          {/* Freccia ME - responsive */}
          <div
            className="font-funsized absolute z-20 left-1/4 md:left-1/4 transform -translate-y-1/2 md:-translate-x-1/2"
            style={{ 
              top: 'calc(50% + 60px)', 
              left: '25%',
            }}
          >
            <div className={`pt-10 pr-2 flex items-center md:flex-col text-lg md:text-2xl font-bold ${isDark ? 'text-white' : 'text-black'} rotate-[-4deg]`}>
              <div className="text-2xl md:text-3xl">
                <span className="hidden md:inline">→</span>
                <span className="md:hidden ">↑</span>
              </div>
                <VariableProximityText
                    text={isDark ? "ME" : "STILL ME"}
                    className="mr-4 md:mr-0 md:mb-3 text-xl md:text-2xl"
                  />
            </div>
          </div>

          {/* Theme Toggle - Sun/Moon */}
          <div
            className="toggle fixed bottom-4 left-4 md:absolute md:top-8 md:right-8 md:bottom-auto md:left-auto z-40 md:z-10"
            onClick={toggleTheme}
          >
            <div className={`relative pb-1 md:p-2 rounded-full ${isDark ? 'bg-glass-dark' : 'bg-glass-light'}`}>
              {isDark ? (
                <Image
                  src="/moon.svg"
                  alt="Luna"
                  width={80}
                  height={80}
                  className="transition-all duration-500 cursor-pointer md:w-[230px] md:h-[230px]"
                />
              ) : (
                <Image
                  src="/sun.svg"
                  alt="Sole"
                  width={80}
                  height={80}
                  className="transition-all duration-500 animate-pulse cursor-pointer md:w-[230px] md:h-[230px]"
                />
              )}
            </div>
          </div>

          {/* Alien con testo rotante */}
          <div
            className="alien fixed bottom-4 right-4 md:absolute md:bottom-8 md:right-8 z-40 md:z-10 pb-3 pr-3 cursor-pointer"
            onClick={() => setIsContactOpen(true)}
          >
            <div className="relative md:-top-[30px] md:-left-[35px]">
              <div className="absolute -top-4 -left-4 md:-top-[15px] md:-left-[21px] pointer-events-none">
                <CircularText
                  text={!isMobile ? "• STABILISCI • PRIMO • CONTATTO " : "• CONTACT • ME "}
                  radius={!isMobile ? 75 : 38}
                />
              </div>
              
              <div className="interactive-uniform relative z-10">
                <Image
                  src="/alien.svg"
                  alt="Alieno"
                  width={60}
                  height={60}
                  className="glow-alien md:w-[100px] md:h-[100px] pb-5 pr-5 md:pb-0 md:pr-0"
                />
              </div>
            </div>
          </div>
        </div>
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