import { useRef, useState, useEffect } from 'react';
import Globe, { type GlobeMethods } from 'react-globe.gl';
import Lottie from 'lottie-react';

import Button from '../components/Button';
import { ParticleCard, GlobalSpotlight } from '../components/MagicBento';
import alienAnimation from '../../public/animazionealieno.json';

// Per-card accent colors (RGB string for rgba())
const CARD_COLORS = {
  blue:   '59, 130, 246',   // Card 1 — Intro
  violet: '139, 92, 246',   // Card 2 — Tech Stack
  yellow: '234, 179, 8',    // Card 3 — Globe
  green:  '34, 197, 94',    // Card 4 — Passion
  red:    '239, 68, 68',    // Card 5 — Alien
} as const;

type CardColor = (typeof CARD_COLORS)[keyof typeof CARD_COLORS];

const makeCardStyle = (color: CardColor): React.CSSProperties => ({
  '--glow-x': '50%',
  '--glow-y': '50%',
  '--glow-intensity': '0',
  '--glow-radius': '400px',
  '--glow-color': color,
} as React.CSSProperties);

const useMobileDetection = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);
  return isMobile;
};

const About = () => {
  const gridRef = useRef<HTMLDivElement>(null);
  const globeRef = useRef<GlobeMethods | undefined>(undefined);
  const isMobile = useMobileDetection();

  const handleGlobeReady = () => {
    globeRef.current?.pointOfView({ lat: 41.9028, lng: 12.4964, altitude: 2 }, 0);
  };

  return (
    <>
      {/* Border-glow CSS — reads --glow-color from each card's inline style */}
      <style>{`
        .bento-card--border-glow::after {
          content: '';
          position: absolute;
          inset: 0;
          padding: 2px;
          background: radial-gradient(
            var(--glow-radius, 400px) circle at var(--glow-x, 50%) var(--glow-y, 50%),
            rgba(var(--glow-color), calc(var(--glow-intensity, 0) * 0.9)) 0%,
            rgba(var(--glow-color), calc(var(--glow-intensity, 0) * 0.45)) 30%,
            transparent 60%
          );
          border-radius: inherit;
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask-composite: exclude;
          pointer-events: none;
          z-index: 1;
        }
        .bento-card--border-glow:hover {
          box-shadow: 0 4px 24px rgba(0,0,0,0.4), 0 0 28px rgba(var(--glow-color), 0.2);
        }
      `}</style>

      <GlobalSpotlight
        gridRef={gridRef}
        disableAnimations={isMobile}
        enabled={true}
        spotlightRadius={400}
        glowColor={CARD_COLORS.violet}
      />

      <section className="c-space my-20 bento-section" id="about">
        <div
          ref={gridRef}
          className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full"
        >
          {/* Card 1 — Intro · BLUE */}
          <div className="col-span-1 xl:row-span-3">
            <ParticleCard
              className="grid-container bento-card bento-card--border-glow h-full"
              style={makeCardStyle(CARD_COLORS.blue)}
              disableAnimations={isMobile}
              glowColor={CARD_COLORS.blue}
              particleCount={0}
              enableTilt
              clickEffect={false}
              enableMagnetism={false}
            >
              <img src="assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />
              <div>
                <p className="grid-headtext">Hi, I&apos;m Luca Evangelista</p>
                <p className="grid-subtext">
                  23 y.o. student of 42 network, passionate about React and modern user centered applications.
                </p>
              </div>
            </ParticleCard>
          </div>

          {/* Card 2 — Tech Stack · VIOLET */}
          <div className="col-span-1 xl:row-span-3">
            <ParticleCard
              className="grid-container bento-card bento-card--border-glow h-full"
              style={makeCardStyle(CARD_COLORS.violet)}
              disableAnimations={isMobile}
              glowColor={CARD_COLORS.violet}
              particleCount={0}
              enableTilt
              clickEffect={false}
              enableMagnetism={false}
            >
              <img src="assets/grid2.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />
              <div>
                <p className="grid-headtext">Tech Stack</p>
                <p className="grid-subtext">
                  I&apos;m specializing in a variety of languages, frameworks, and tools that allow me to build
                  robust and scalable applications
                </p>
              </div>
            </ParticleCard>
          </div>

          {/* Card 3 — Globe · YELLOW */}
          <div className="col-span-1 xl:row-span-4">
            <ParticleCard
              className="grid-container bento-card bento-card--border-glow h-full"
              style={makeCardStyle(CARD_COLORS.yellow)}
              disableAnimations={isMobile}
              glowColor={CARD_COLORS.yellow}
              particleCount={0}
              enableTilt
              clickEffect={false}
              enableMagnetism={false}
            >
              <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
                <Globe
                  ref={globeRef}
                  height={326}
                  width={326}
                  backgroundColor="rgba(0, 0, 0, 0)"
                  showAtmosphere
                  showGraticules
                  globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                  bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                  onGlobeReady={handleGlobeReady}
                  labelsData={[{ lat: 41.9028, lng: 12.4964, text: 'Rome, Italy', color: 'white', size: 15 }]}
                />
              </div>
              <div>
                <p className="grid-headtext">I&apos;m very flexible with time zone communications &amp; locations</p>
                <p className="grid-subtext">Based in Rome, Italy and open to remote work worldwide.</p>
                <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
              </div>
            </ParticleCard>
          </div>

          {/* Card 4 — Passion · GREEN */}
          <div className="xl:col-span-2 xl:row-span-3">
            <ParticleCard
              className="grid-container bento-card bento-card--border-glow h-full"
              style={makeCardStyle(CARD_COLORS.green)}
              disableAnimations={isMobile}
              glowColor={CARD_COLORS.green}
              particleCount={0}
              enableTilt
              clickEffect={false}
              enableMagnetism={false}
            >
              <img src="assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />
              <div>
                <p className="grid-headtext">My Passion for Coding</p>
                <p className="grid-subtext">
                  I love solving problems and building things through code. Programming isn&apos;t just my
                  profession—it&apos;s my passion. I enjoy exploring new technologies, and enhancing my skills.
                </p>
              </div>
            </ParticleCard>
          </div>

          {/* Card 5 — Alien · RED */}
          <div className="xl:col-span-1 xl:row-span-2">
            <ParticleCard
              className="grid-container bento-card bento-card--border-glow h-full"
              style={makeCardStyle(CARD_COLORS.red)}
              disableAnimations={isMobile}
              glowColor={CARD_COLORS.red}
              particleCount={0}
              enableTilt
              clickEffect={false}
              enableMagnetism={false}
            >
              <div className="w-full md:h-[126px] sm:h-[276px] h-fit flex justify-center items-center overflow-hidden">
                <Lottie
                  animationData={alienAnimation}
                  loop
                  autoplay
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                />
              </div>
              <div>
                <p className="grid-headtext">Just talk</p>
                <p className="grid-subtext">I&apos;m always open to new ideas and collaborations.</p>
              </div>
            </ParticleCard>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
