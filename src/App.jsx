import { useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import Background from './components/Background';
import Hero from './components/Hero';
import Hero3D from './components/Hero3D';
import Summary from './components/Summary';
import Certifications from './components/Certifications';
import TrainingBadges from './components/TrainingBadges';

import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import SocialSidebar from './components/SocialSidebar';

import Header from './components/Header';
import Lenis from 'lenis';

function App() {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      wrapper: scrollContainerRef.current,
      content: scrollContainerRef.current?.firstElementChild,
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
    });

    window.lenis = lenis;

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      window.lenis = null;
    };
  }, []);

  return (
    <>
      <Header />
      <SocialSidebar />
      <div className="canvas-container">
        <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
          <Background />
          <Hero3D />
        </Canvas>
      </div>

      <div className="scroll-container" ref={scrollContainerRef}>
        <div>
          <Hero />
          <Summary />
          <Certifications />
          <TrainingBadges />

          <Projects />
          <Experience />
          <Education />
          <Contact />

          {/* Footer */}
          <footer style={{
            textAlign: 'center',
            padding: '32px 24px',
            borderTop: '1px solid rgba(255,255,255,0.05)',
            marginTop: '20px',
            position: 'relative',
          }}>
            {/* Top gradient line */}
            <div style={{
              position: 'absolute',
              top: 0, left: '20%', right: '20%', height: '1px',
              background: 'linear-gradient(to right, transparent, rgba(139,92,246,0.4), rgba(56,189,248,0.4), transparent)',
            }} />
            <p style={{
              fontFamily: 'Outfit, sans-serif',
              fontWeight: 700,
              fontSize: '15px',
              background: 'linear-gradient(135deg, #c4b5fd, #38bdf8)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              marginBottom: '6px',
            }}>
              Amith Roshan
            </p>
            <p style={{ color: '#334155', fontSize: '12px', fontWeight: 400 }}>
              © {new Date().getFullYear()} · Built with React, Three.js &amp; Tailwind CSS
            </p>
          </footer>
        </div>
      </div>
    </>
  );
}

export default App;
