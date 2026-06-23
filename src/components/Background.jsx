import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Stars, Sparkles } from '@react-three/drei';

export default function Background() {
  const groupRef = useRef();

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.05;
      groupRef.current.rotation.x += delta * 0.02;
    }
  });

  return (
    <group ref={groupRef}>
      <Stars 
        radius={50} 
        depth={50} 
        count={5000} 
        factor={4} 
        saturation={0} 
        fade 
        speed={1} 
      />
      <Sparkles 
        count={300} 
        scale={20} 
        size={2} 
        speed={0.4} 
        opacity={0.5} 
        color="#3b82f6" // Electric Blue
      />
      <Sparkles 
        count={200} 
        scale={25} 
        size={3} 
        speed={0.2} 
        opacity={0.4} 
        color="#8b5cf6" // Vibrant Purple
      />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} color="#3b82f6" />
      <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#8b5cf6" />
    </group>
  );
}
