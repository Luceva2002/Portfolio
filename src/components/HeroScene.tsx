import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';
import { Mesh } from 'three';

const HeroScene = () => {
  const sphereRef = useRef<Mesh>(null);
  const torusRef = useRef<Mesh>(null);
  
  // Animazione della scena
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    // Rotazione e movimento della sfera
    if (sphereRef.current) {
      sphereRef.current.rotation.x = time * 0.2;
      sphereRef.current.rotation.y = time * 0.3;
      sphereRef.current.position.y = Math.sin(time * 0.5) * 0.5;
    }
    
    // Rotazione del torus
    if (torusRef.current) {
      torusRef.current.rotation.x = time * 0.3;
      torusRef.current.rotation.z = time * 0.2;
    }
  });

  return (
    <group>
      {/* Sfera principale con materiale distorto */}
      <Sphere ref={sphereRef} args={[1, 100, 100]} scale={2}>
        <MeshDistortMaterial
          color="#AFB0B6"
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
      
      {/* Torus orbita */}
      <mesh ref={torusRef} position={[0, 0, 0]}>
        <torusGeometry args={[3, 0.1, 16, 100]} />
        <meshStandardMaterial color="#D6D9E9" />
      </mesh>
      
      {/* Particelle di sfondo */}
      <Points />
    </group>
  );
};

// Componente per le particelle
const Points = () => {
  const count = 500;
  const positions = new Float32Array(count * 3);
  
  for (let i = 0; i < count * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 20;
  }
  
  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#ffffff"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
};

export default HeroScene;

