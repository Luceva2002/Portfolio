import { useGSAP } from '@gsap/react';
import { Center, useTexture, Float } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import gsap from 'gsap';
import { useCallback, useRef } from 'react';
import { Mesh } from 'three';

interface RingsProps {
  position: [number, number, number];
  enableFloat?: boolean;
}

/**
 * Anelli concentrici animati con React Three Fiber
 * - Rotazione GSAP con stagger
 * - Float opzionale per movimento naturale
 * - Effetto pulsazione con useFrame
 */
const Rings = ({ position, enableFloat = true }: RingsProps) => {
  const refList = useRef<Mesh[]>([]);
  const groupRef = useRef<any>(null);
  
  const getRef = useCallback((mesh: Mesh | null) => {
    if (mesh && !refList.current.includes(mesh)) {
      refList.current.push(mesh);
    }
  }, []);

  const texture = useTexture('textures/rings.png');

  // Animazione GSAP per rotazione
  useGSAP(
    () => {
      if (refList.current.length === 0) return;

      refList.current.forEach((r) => {
        r.position.set(position[0], position[1], position[2]);
      });

      gsap
        .timeline({
          repeat: -1,
          repeatDelay: 0.5,
        })
        .to(
          refList.current.map((r) => r.rotation),
          {
            y: `+=${Math.PI * 2}`,
            x: `-=${Math.PI * 2}`,
            duration: 2.5,
            stagger: {
              each: 0.15,
            },
          },
        );
    },
    {
      dependencies: position,
    },
  );

  // Effetto pulsazione con useFrame
  useFrame((state) => {
    if (groupRef.current) {
      const pulse = Math.sin(state.clock.elapsedTime * 2) * 0.05 + 1;
      groupRef.current.scale.set(pulse * 0.5, pulse * 0.5, pulse * 0.5);
    }
  });

  const rings = (
    <Center>
      <group ref={groupRef} scale={0.5}>
        {Array.from({ length: 4 }, (_, index) => (
          <mesh key={index} ref={getRef}>
            <torusGeometry args={[(index + 1) * 0.5, 0.1]} />
            <meshMatcapMaterial matcap={texture} toneMapped={false} />
          </mesh>
        ))}
      </group>
    </Center>
  );

  if (enableFloat) {
    return (
      <Float floatIntensity={0.5} speed={1}>
        {rings}
      </Float>
    );
  }

  return rings;
};

export default Rings;
