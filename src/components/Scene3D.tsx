import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment } from '@react-three/drei';
import { Suspense } from 'react';
import { ReactNode } from 'react';
import Loading from './Loading';

interface Scene3DProps {
  children: ReactNode;
  className?: string;
  cameraPosition?: [number, number, number];
  enableControls?: boolean;
}

const Scene3D = ({ 
  children, 
  className = '', 
  cameraPosition = [0, 0, 20],
  enableControls = true 
}: Scene3DProps) => {
  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas
        shadows
        gl={{ 
          antialias: true,
          alpha: true 
        }}
        dpr={[1, 2]}
      >
        <PerspectiveCamera makeDefault position={cameraPosition} />
        
        {/* Luci per illuminare la scena */}
        <ambientLight intensity={1} />
        <directionalLight 
          position={[10, 10, 5]} 
          intensity={1}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        <spotLight
          position={[-10, 10, 10]}
          angle={0.3}
          penumbra={1}
          intensity={0.5}
          castShadow
        />
        
        {/* Ambiente per riflessioni realistiche */}
        <Environment preset="city" />
        
        {/* Contenuto 3D */}
        <Suspense fallback={<Loading />}>
          {children}
        </Suspense>
        
        {/* Controlli della camera (opzionali) */}
        {enableControls && (
          <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 3}
          />
        )}
      </Canvas>
    </div>
  );
};

export default Scene3D;

