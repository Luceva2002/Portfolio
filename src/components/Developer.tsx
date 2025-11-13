/*
Componente Developer Universale - Funziona con qualsiasi modello GLB
Ottimizzato per React Three Fiber con animazioni FBX
*/

import React, { useEffect, useRef } from 'react';
import { GroupProps, useFrame } from '@react-three/fiber';
import { useAnimations, useGLTF, Float, useFBX } from '@react-three/drei';
import { Group } from 'three';
import { SkeletonUtils } from 'three-stdlib';

interface DeveloperProps extends GroupProps {
  animationName?: 'idle' | 'salute' | 'clapping' | 'victory';
  enableFloat?: boolean;
  enableRotation?: boolean;
}

/**
 * Componente Developer ottimizzato e universale
 * - Funziona con QUALSIASI modello GLB (non richiede struttura specifica)
 * - Supporta animazioni FBX esterne (Mixamo)
 * - Float e rotazione opzionali
 */
const Developer = ({ 
  animationName = 'idle', 
  enableFloat = false,
  enableRotation = false,
  ...props 
}: DeveloperProps) => {
  const group = useRef<Group>(null);

  // Carica il modello (funziona con qualsiasi GLB)
  const { scene } = useGLTF('/models/animations/developer.glb');
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene]);

  // Carica animazioni FBX esterne (da Mixamo)
  const { animations: idleAnimation } = useFBX('/models/animations/idle.fbx');
  const { animations: saluteAnimation } = useFBX('/models/animations/salute.fbx');
  const { animations: clappingAnimation } = useFBX('/models/animations/clapping.fbx');
  const { animations: victoryAnimation } = useFBX('/models/animations/victory.fbx');

  // Assegna nomi alle animazioni
  idleAnimation[0].name = 'idle';
  saluteAnimation[0].name = 'salute';
  clappingAnimation[0].name = 'clapping';
  victoryAnimation[0].name = 'victory';

  // Setup animazioni
  const { actions } = useAnimations(
    [idleAnimation[0], saluteAnimation[0], clappingAnimation[0], victoryAnimation[0]],
    group,
  );

  // Cambia animazione con transizione smooth
  useEffect(() => {
    if (actions[animationName]) {
      actions[animationName]?.reset().fadeIn(0.5).play();
      return () => {
        actions[animationName]?.fadeOut(0.5);
      };
    }
  }, [animationName, actions]);

  // Rotazione continua opzionale
  useFrame((_, delta) => {
    if (enableRotation && group.current) {
      group.current.rotation.y += delta * 0.5;
    }
  });

  const model = (
    <group ref={group} {...props} dispose={null}>
      {/* Carica TUTTA la scena del modello clonato (per supportare animazioni) */}
      <primitive object={clone} />
    </group>
  );

  // Float opzionale
  if (enableFloat) {
    return (
      <Float floatIntensity={0.5} speed={1.5}>
        {model}
      </Float>
    );
  }

  return model;
};

useGLTF.preload('/models/animations/developer.glb');

export default Developer;
