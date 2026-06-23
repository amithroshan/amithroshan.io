import { motion } from 'framer-motion';
import { Download, Cloud, Server } from 'lucide-react';
import profileImg from '../assets/aa.png';

const skills = ['AWS', 'Azure', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD', 'Linux', 'GitHub Actions'];

export default function Summary() {
  return (
    <section
      id="about"
      className="relative z-10 w-full pointer-events-auto overflow-hidden"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '120px 24px 100px',
      }}
    >
      {/* ── Ambient glows ── */}
      <div className="absolute pointer-events-none" style={{
        top: '-5%', left: '-8%', width: '600px', height: '600px',
        background: 'radial-gradient(circle, rgba(139,92,246,0.11) 0%, transparent 65%)',
        filter: 'blur(80px)', borderRadius: '50%',
      }} />
      <div className="absolute pointer-events-none" style={{
        bottom: '-5%', right: '-8%', width: '500px', height: '500px',
        background: 'radial-gradient(circle, rgba(6,182,212,0.09) 0%, transparent 65%)',
        filter: 'blur(80px)', borderRadius: '50%',
      }} />

      {/* ── Dot grid ── */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: `radial-gradient(rgba(139,92,246,0.10) 1px, transparent 1px)`,
        backgroundSize: '32px 32px',
      }} />

      <div className="w-full max-w-6xl relative flex flex-col gap-16">



        {/* ── MAIN CONTENT ROW ── */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-14 lg:gap-20 w-full mx-auto">

          {/* LEFT: Photo */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex-shrink-0 relative"
            style={{ width: '100%', maxWidth: '280px', margin: '0 auto' }}
          >
            {/* Floating icon – Cloud */}
            <motion.div
              animate={{ y: [0, -12, 0], x: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 5.5, ease: 'easeInOut', delay: 0.5 }}
              style={{
                position: 'absolute', top: '8%', right: '-14px', zIndex: 20,
                width: '46px', height: '32px',
                background: 'rgba(255,255,255,0.07)',
                backdropFilter: 'blur(12px)',
                borderRadius: '999px',
                border: '1px solid rgba(255,255,255,0.15)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 0 14px rgba(147,197,253,0.2)',
              }}
            >
              <Cloud className="text-blue-300" size={18} />
            </motion.div>

            {/* Floating icon – Server */}
            <motion.div
              animate={{ y: [0, 14, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut', delay: 1.5 }}
              style={{
                position: 'absolute', bottom: '20%', right: '-16px', zIndex: 20,
                width: '38px', height: '38px',
                background: 'linear-gradient(135deg, #06b6d4, #3b82f6)',
                borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 0 18px rgba(56,189,248,0.45)',
              }}
            >
              <Server size={16} className="text-white" />
            </motion.div>

            {/* Glow behind photo */}
            <div style={{
              position: 'absolute', bottom: '0', left: '50%', transform: 'translateX(-50%)',
              width: '200px', height: '160px',
              background: 'radial-gradient(ellipse, rgba(139,92,246,0.25) 0%, rgba(56,189,248,0.10) 55%, transparent 75%)',
              filter: 'blur(40px)', zIndex: 0,
            }} />

            {/* Profile photo — clean, no frame */}
            <img
              src={profileImg}
              alt="Amith Roshan"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                position: 'relative',
                zIndex: 1,
                WebkitMaskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)',
                maskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)',
                filter: 'contrast(1.04) brightness(1.04)',
              }}
            />
          </motion.div>

          {/* RIGHT: Text content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            style={{ width: '100%', maxWidth: '700px' }}
          >
            {/* Heading */}
            <div className="section-label" style={{ marginBottom: '16px', fontSize: '13px', letterSpacing: '0.14em' }}>
              Who I Am
            </div>
            <h2 style={{
              fontFamily: 'Outfit, sans-serif',
              fontWeight: 900,
              fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
              letterSpacing: '-0.04em',
              lineHeight: 1.05,
              color: '#fff',
              marginBottom: '10px',
            }}>
              About{' '}
              <span style={{
                background: 'linear-gradient(135deg, #c4b5fd 0%, #818cf8 50%, #38bdf8 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                Me
              </span>
            </h2>
            <div className="accent-bar" style={{ marginBottom: '24px' }} />

            {/* Subtitle */}
            <p style={{
              fontSize: '14px',
              fontWeight: 700,
              color: '#38bdf8',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              marginBottom: '20px',
            }}>
              Passionate Cloud Undergraduate &amp; Aspiring DevOps Engineer
            </p>

            {/* Description */}
            <p style={{
              fontSize: '15.5px',
              lineHeight: '1.95',
              color: '#94a3b8',
              maxWidth: '540px',
              fontWeight: 400,
              marginBottom: '28px',
            }}>
              Hi, I'm <span style={{ color: '#e2e8f0', fontWeight: 600 }}>Amith</span>, a driven{' '}
              <span style={{ color: '#c4b5fd', fontWeight: 600 }}>BSc (Hons) Cloud Computing</span>{' '}
              undergraduate. I'm building strong foundational and practical knowledge across major cloud platforms{' '}
              <span style={{ color: '#38bdf8', fontWeight: 600 }}>( AWS · Azure )</span>{' '}
              and DevOps practices. My goal is to orchestrate resilient, scalable cloud infrastructure and automate
              the full software lifecycle. Currently looking for opportunities to apply my skills and grow.
            </p>

            {/* Skill tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '36px' }}>
              {skills.map(skill => (
                <span
                  key={skill}
                  style={{
                    padding: '6px 14px',
                    borderRadius: '8px',
                    fontSize: '12px',
                    fontWeight: 600,
                    color: '#a5b4fc',
                    background: 'rgba(139,92,246,0.08)',
                    border: '1px solid rgba(139,92,246,0.2)',
                    letterSpacing: '0.02em',
                    transition: 'background 0.2s, border-color 0.2s, color 0.2s',
                    cursor: 'default',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = 'rgba(139,92,246,0.18)';
                    e.currentTarget.style.borderColor = 'rgba(139,92,246,0.45)';
                    e.currentTarget.style.color = '#c4b5fd';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'rgba(139,92,246,0.08)';
                    e.currentTarget.style.borderColor = 'rgba(139,92,246,0.2)';
                    e.currentTarget.style.color = '#a5b4fc';
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Download CV */}
            <motion.a
              href="/Amith_Roshan_CV.pdf"
              download="Amith_Roshan_CV.pdf"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97, y: 3 }}
              className="btn-premium"
              style={{ gap: '8px', display: 'inline-flex' }}
            >
              <Download size={14} />
              DOWNLOAD CV
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
