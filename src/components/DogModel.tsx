import { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { Group } from 'three';

const DogModel = () => {
  const dogRef = useRef<Group>(null);
  const { scene } = useGLTF('/models/dog.glb');
  
  // Animazione leggera - rotazione lenta e movimento verticale
  useFrame((state) => {
    if (dogRef.current) {
      const time = state.clock.getElapsedTime();
      dogRef.current.rotation.y = time * 0.5;
      dogRef.current.position.y = Math.sin(time * 0.8) * 0.1;
    }
  });

  return (
    <group ref={dogRef} scale={0.5} position={[0, -0.5, 0]}>
      <primitive object={scene} />
    </group>
  );
};

// Precarica il modello
useGLTF.preload('/models/dog.glb');

export default DogModel;

