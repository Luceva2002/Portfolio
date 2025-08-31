'use client';

import { motion } from 'framer-motion';

interface CircularTextProps {
  text: string;
  radius: number;
  className?: string;
}

const CircularText = ({ text, radius, className = '' }: CircularTextProps) => {
  const characters = text.split('');
  const angleStep = (2 * Math.PI) / characters.length;

  return (
    <div className={`relative ${className}`} style={{ width: radius * 2, height: radius * 2 }}>
      {characters.map((char, index) => {
        const angle = index * angleStep - Math.PI / 2; // Start from top
        const x = radius + Math.cos(angle) * radius;
        const y = radius + Math.sin(angle) * radius;
        const rotation = (angle * 180) / Math.PI + 90; // Rotate character to follow circle

        return (
          <motion.span
            key={index}
            className="absolute text-green-400 text-sm font-bold font-supersonic"
            style={{
              left: x - 6,
              top: y - 8,
              transform: `rotate(${rotation}deg)`,
              transformOrigin: 'center',
            }}
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: index * 0.1,
            }}
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        );
      })}
    </div>
  );
};

export default CircularText;
