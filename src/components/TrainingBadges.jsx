import { motion } from 'framer-motion';
import { ExternalLink, BadgeCheck } from 'lucide-react';
import googleBadge from '../assets/google.png';
import kodeBadge from '../assets/kode.png';

const badges = [
  {
    id: 'gcloud',
    name: 'Google Cloud Skill Badge',
    subtitle: 'Google Cloud · Hands-on Labs',
    verifyUrl: 'https://www.cloudskillsboost.google/public_profiles/fe650d68-9ecd-4133-a576-3e100276aeaf',
    imgSrc: googleBadge,
    accentColor: '#4285f4',
    glow: 'rgba(66,133,244,0.22)',
    shadowColor: 'rgba(66,133,244,0.3)',
  },
  {
    id: 'terraform',
    name: 'Terraform Basics Training',
    subtitle: 'KodeKloud · Infrastructure as Code',
    verifyUrl: 'https://learn.kodekloud.com/certificate/27dffa79-2b1e-4384-aa21-006f99e4fc79',
    imgSrc: kodeBadge,
    accentColor: '#a855f7',
    glow: 'rgba(168,85,247,0.22)',
    shadowColor: 'rgba(168,85,247,0.3)',
  },
  {
    id: 'devops',
    name: 'Fundamentals of DevOps',
    subtitle: 'KodeKloud · DevOps Essentials',
    verifyUrl: 'https://learn.kodekloud.com/certificate/194bda3f-360b-4ad9-bc25-a37142b4ca0f',
    imgSrc: kodeBadge,
    accentColor: '#f43f5e',
    glow: 'rgba(244,63,94,0.18)',
    shadowColor: 'rgba(244,63,94,0.28)',
  },
];

export default function TrainingBadges() {
  return (
    <section id="training" className="flex flex-col items-center justify-center px-4 relative z-10 w-full overflow-hidden" style={{ padding: '55px 16px' }}>

      {/* BG glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" style={{
        width: '600px', height: '600px',
        background: 'radial-gradient(circle, rgba(139,92,246,0.06) 0%, transparent 70%)',
        filter: 'blur(70px)', borderRadius: '50%',
      }} />

      {/* Dot grid */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: `radial-gradient(rgba(56,189,248,0.08) 1px, transparent 1px)`,
        backgroundSize: '28px 28px',
        opacity: 0.6,
      }} />

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mb-16 text-center z-20 relative"
      >
        <div className="section-label" style={{ justifyContent: 'center' }}>Learning Path</div>
        <h2 className="section-title" style={{ textAlign: 'center' }}>Training & Skill Badges</h2>
        <div className="accent-bar" style={{ margin: '14px auto 0' }} />
        <p style={{ color: '#64748b', fontSize: '14px', marginTop: '14px', maxWidth: '380px', margin: '14px auto 0' }}>
          Hands-on training and platform certifications that demonstrate practical cloud skills.
        </p>
      </motion.div>

      {/* Cards */}
      <div className="w-full max-w-3xl flex flex-col gap-6 z-20 relative px-4">
        {badges.map((badge, i) => (
          <motion.div
            key={badge.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.12 }}
            style={{
              background: 'rgba(10,17,34,0.72)',
              border: '1px solid rgba(255,255,255,0.07)',
              borderRadius: '20px',
              padding: '24px',
              backdropFilter: 'blur(14px)',
              display: 'flex',
              alignItems: 'center',
              gap: '20px',
              flexWrap: 'wrap',
              transition: 'border-color 0.3s, box-shadow 0.3s, transform 0.3s',
              position: 'relative',
              overflow: 'hidden',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = badge.accentColor + '50';
              e.currentTarget.style.boxShadow = `0 12px 50px -10px ${badge.glow}`;
              e.currentTarget.style.transform = 'translateY(-3px)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            {/* Left accent bar */}
            <div style={{
              position: 'absolute',
              left: 0, top: '15%', bottom: '15%',
              width: '3px',
              background: `linear-gradient(to bottom, transparent, ${badge.accentColor}, transparent)`,
              borderRadius: '2px',
            }} />

            {/* Badge image */}
            <div style={{ position: 'relative', flexShrink: 0 }}>
              <div style={{
                position: 'absolute', inset: '-8px',
                borderRadius: '50%',
                background: `radial-gradient(circle, ${badge.glow} 0%, transparent 70%)`,
                filter: 'blur(10px)',
              }} />
              <img
                src={badge.imgSrc}
                alt={badge.name}
                style={{
                  width: '90px', height: '90px',
                  objectFit: 'contain',
                  position: 'relative',
                  filter: `drop-shadow(0 0 14px ${badge.shadowColor})`,
                }}
              />
            </div>

            {/* Text */}
            <div style={{ flex: 1, minWidth: '120px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '7px', marginBottom: '5px' }}>
                <BadgeCheck size={13} style={{ color: badge.accentColor }} />
                <span style={{ fontSize: '11px', fontWeight: 600, color: badge.accentColor, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                  {badge.subtitle}
                </span>
              </div>
              <h3 style={{
                fontFamily: 'Outfit, sans-serif',
                fontSize: '19px',
                fontWeight: 700,
                color: '#f1f5f9',
                letterSpacing: '-0.02em',
                lineHeight: 1.3,
                marginBottom: '16px',
              }}>
                {badge.name}
              </h3>
              <motion.a
                href={badge.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="btn-premium"
                style={{ gap: '7px', fontSize: '11px', padding: '8px 20px' }}
              >
                <ExternalLink size={12} />
                View Badge
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
