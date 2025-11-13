import { useGLTF, Float } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { GroupProps } from '@react-three/fiber';
import { Group } from 'three';

/**
 * Componente Target ottimizzato con React Three Fiber
 * - Float per movimento naturale
 * - Rotazione continua
 * - Animazione bounce verticale
 */
const Target = (props: GroupProps) => {
  const targetRef = useRef<Group>(null);
  const { scene } = useGLTF(
    'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf',
  );

  // Animazione bounce verticale con GSAP
  useGSAP(() => {
    if (targetRef.current) {
      gsap.to(targetRef.current.position, {
        y: targetRef.current.position.y + 0.5,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
      });
    }
  });

  // Rotazione continua con useFrame
  useFrame((_, delta) => {
    if (targetRef.current) {
      targetRef.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <Float floatIntensity={0.3} speed={1}>
      <group {...props} ref={targetRef} rotation={[0, Math.PI / 5, 0]} scale={1.5}>
        <primitive object={scene} />
      </group>
    </Float>
  );
};

export default Target;
