import { useRef } from 'react';
import { useGLTF, Float } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Group } from 'three';
import { GroupProps } from '@react-three/fiber';

interface PortfolioModelProps extends GroupProps {
  modelPath: string;
  enableFloat?: boolean;
  enableRotation?: boolean;
}

/**
 * Componente ottimizzato per caricare modelli 3D portfolio
 * - Supporta Float per movimento naturale
 * - Rotazione automatica opzionale
 * - Animazione entrata con GSAP
 */
const PortfolioModel = ({ 
  modelPath, 
  enableFloat = false, 
  enableRotation = false,
  ...props 
}: PortfolioModelProps) => {
  const group = useRef<Group>(null);
  const { scene } = useGLTF(modelPath);

  // Animazione entrata
  useGSAP(() => {
    if (group.current) {
      gsap.from(group.current.rotation, {
        y: Math.PI / 2,
        duration: 1,
        ease: 'power3.out',
      });
    }
  }, [modelPath]);

  // Rotazione continua opzionale
  useFrame((_, delta) => {
    if (enableRotation && group.current) {
      group.current.rotation.y += delta * 10;
    }
  });

  const model = (
    <group ref={group} {...props} dispose={null}>
      <primitive object={scene} />
    </group>
  );

  // Wrap con Float se abilitato
  if (enableFloat) {
    return (
      <Float floatIntensity={0.5} speed={1.5} rotationIntensity={0.2}>
        {model}
      </Float>
    );
  }

  return model;
};

// Preload solo portfolio5.glb
useGLTF.preload('/models/portfolio5.glb');

export default PortfolioModel;

