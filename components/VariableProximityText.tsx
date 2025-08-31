'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

interface VariableProximityTextProps {
  text: string;
  className?: string;
}

const VariableProximityText = ({ text, className = '' }: VariableProximityTextProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const calculateDistance = (letterIndex: number, totalLetters: number) => {
    if (!textRef.current) return 1;
    
    const textRect = textRef.current.getBoundingClientRect();
    const letterX = textRect.left + (textRect.width / totalLetters) * letterIndex;
    const letterY = textRect.top + textRect.height / 2;
    
    const distance = Math.sqrt(
      Math.pow(mousePosition.x - letterX, 2) + 
      Math.pow(mousePosition.y - letterY, 2)
    );
    
    const maxDistance = 200;
    const proximityFactor = Math.max(0, 1 - distance / maxDistance);
    
    return 1 + proximityFactor * 0.8;
  };

  const letters = text.split('');

  return (
    <div ref={textRef} className={`inline-block ${className}`}>
      {letters.map((letter, index) => {
        const scale = calculateDistance(index, letters.length);
        const isSpace = letter === ' ';
        
        return (
          <motion.span
            key={index}
            className="inline-block"
            style={{
              transform: `scale(${scale})`,
              textShadow: `0 0 ${scale * 1}px rgba(255, 255, 255, ${scale * 0.5})`,
              transition: 'all 0.1s ease-out',
            }}
          >
            {isSpace ? '\u00A0' : letter}
          </motion.span>
        );
      })}
    </div>
  );
};

export default VariableProximityText;
