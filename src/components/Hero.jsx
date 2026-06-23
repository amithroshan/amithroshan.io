import { motion } from 'framer-motion';
import { useRef, useMemo, useEffect } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import { ArrowDown } from 'lucide-react';

/* ── Capsule Dome 3D Component ── */
function CapsuleDome() {
  const count = 400;
  const meshRef = useRef();
  const dummy = useMemo(() => new THREE.Object3D(), []);

  useFrame((state, delta) => {
    if (meshRef.current) {
      // Slowly rotate the entire dome
      meshRef.current.rotation.y += delta * 0.05;

      // Add a slight floating effect to the dome
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1 - 2;
    }
  });

  useEffect(() => {
    if (!meshRef.current) return;

    const phi = Math.PI * (3 - Math.sqrt(5)); // Golden angle

    for (let i = 0; i < count; i++) {
      // y goes from 1 to 0 (hemisphere)
      const y = 1 - (i / (count - 1));
      const radiusAtY = Math.sqrt(1 - y * y);

      const theta = phi * i;

      const x = Math.cos(theta) * radiusAtY;
      const z = Math.sin(theta) * radiusAtY;

      const scale = 16; // Size of the dome

      dummy.position.set(x * scale, (y - 0.5) * scale, z * scale);

      // Point capsules towards the center but slightly outward
      dummy.lookAt(0, -scale * 0.5, 0);

      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);
    }
    meshRef.current.instanceMatrix.needsUpdate = true;
  }, [dummy]);

  return (
    <group>
      <instancedMesh ref={meshRef} args={[null, null, count]} position={[0, -2, 0]}>
        <capsuleGeometry args={[0.2, 1.2, 16, 16]} />
        <meshPhysicalMaterial
          color="#111111"
          metalness={0.9}
          roughness={0.1}
          clearcoat={1}
          clearcoatRoughness={0.1}
        />
      </instancedMesh>

      {/* Central glow from inside the dome */}
      <pointLight position={[0, -8, 0]} intensity={800} color="#c084fc" distance={25} />
      <pointLight position={[0, -2, 0]} intensity={200} color="#8b5cf6" distance={15} />
      <ambientLight intensity={0.1} />
    </group>
  );
}

export default function Hero() {
  return (
    <section id="ar" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20">

      {/* ── 3D Canvas Background ── */}
      <div className="absolute inset-0 z-0 pointer-events-auto flex items-end justify-center" style={{ bottom: '-20vh' }}>
        <Canvas camera={{ position: [0, 2, 10], fov: 50 }}>
          <fog attach="fog" args={['#030712', 5, 25]} />
          <CapsuleDome />
          <Environment preset="city" />
        </Canvas>
      </div>

      {/* ── Centered Text Content ── */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 w-full max-w-5xl pointer-events-none mt-[-5vh]">

        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-cyan-400 uppercase tracking-[0.3em] [word-spacing:0.4em] text-sm md:text-base font-bold mb-12 drop-shadow-[0_0_10px_rgba(34,211,238,0.4)]"
        >
          Welcome to my world
        </motion.h3>
        <br />   <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl md:text-5xl lg:text-6xl font-black leading-normal [word-spacing:0.1em] tracking-normal mb-8 text-white"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          Hi, I'm{' '}
          <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(139,92,246,0.3)]">
            Amith
          </span>
          <br />
          Cloud & DevOps <br /> Enthusiast
        </motion.h1> <br />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 pointer-events-auto mt-10"
        >
          <a
            href="#projects"
            className="btn-premium text-center flex justify-center items-center gap-2"
            style={{
              padding: '12px 32px',
              fontSize: '14px',
              borderRadius: '14px',
              fontFamily: "'Poppins', sans-serif"
            }}
            onClick={(e) => {
              e.preventDefault();
              if (window.lenis) {
                window.lenis.scrollTo('#projects', { offset: -75 });
              } else {
                const el = document.querySelector('#projects');
                const scrollContainer = document.querySelector('.scroll-container');
                if (scrollContainer && el) {
                  scrollContainer.scrollTo({ top: el.offsetTop - 75, behavior: 'smooth' });
                }
              }
            }}
          >
            <ArrowDown size={16} />
            VIEW MY WORK
          </a>
        </motion.div>

      </div>

    </section>
  );
}
