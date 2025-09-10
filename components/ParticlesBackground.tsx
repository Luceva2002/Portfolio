'use client';

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine } from "@tsparticles/engine";
import { useTheme } from './ThemeProvider';
// framer-motion removed for static background

const ParticlesBackground = ({ className = "" }: { className?: string }) => {
  const { isDark } = useTheme();
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const baseColor = isDark ? "#000000" : "#ffffff";
  const foregroundColor = isDark ? "#ffffff" : "#000000";

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "transparent",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "repulse",
          },
          onHover: {
            enable: true,
            mode: 'grab',
          },
          resize: {
            enable: true,
          },
        },
        modes: {
          repulse: {
            distance: 200,
            duration: 0.5,
          },
          grab: {
            distance: 150,
            links: {
              opacity: 0.5,
              enable: true
            }
          },
        },
      },
      particles: {
        color: {
          value: foregroundColor,
        },
        links: {
          color: foregroundColor,
          enable: false,
        },
        move: {
          direction: "none" as const,
          enable: true,
          outModes: {
            default: "bounce" as const,
          },
          random: true,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 80,
        },
        opacity: {
          value: isDark ? 0.6 : 0.4,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 3 },
        },
      },
      detectRetina: true,
    }),
    [isDark, baseColor, foregroundColor],
  );

  if (!init) {
    return null;
  }

  return (
    <div className={className}>
      <Particles
        id="tsparticles"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
        }}
        options={options}
      />
    </div>
  );
};

export default ParticlesBackground;
