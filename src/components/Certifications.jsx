import { motion } from 'framer-motion';
import { ExternalLink, Award } from 'lucide-react';
import awsBadge from '../assets/aws.png';
import azBadge from '../assets/az.png';

const certifications = [
  {
    badge: awsBadge,
    name: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    date: '2024',
    verifyUrl: 'https://www.credly.com/badges/6ad8782b-d651-42ae-a168-015b292737a7/public_url',
    accentColor: '#f59e0b',
    glow: 'rgba(245, 159, 11, 0.25)',
    shadowColor: 'rgba(255,153,0,0.3)',
  },
  {
    badge: azBadge,
    name: 'Microsoft Azure Fundamentals',
    issuer: 'Microsoft',
    date: '2024',
    verifyUrl: 'https://learn.microsoft.com/api/credentials/share/en-us/AmithRoshan-5037/2547590F0EA81C59?sharingId=88872592762A5973',
    accentColor: '#38bdf8',
    glow: 'rgba(56,189,248,0.22)',
    shadowColor: 'rgba(0,122,204,0.3)',
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="flex flex-col items-center justify-center px-4 relative z-10 w-full overflow-hidden" style={{ padding: '10px 16px' }}>

      {/* BG glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" style={{
        width: '700px', height: '700px',
        background: 'radial-gradient(circle, rgba(99,102,241,0.07) 0%, transparent 65%)',
        filter: 'blur(70px)', borderRadius: '50%',
      }} />

      {/* Dot grid */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: `radial-gradient(rgba(139,92,246,0.09) 1px, transparent 1px)`,
        backgroundSize: '28px 28px',
        opacity: 0.7,
      }} />

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mb-16 text-center z-20 relative"
      >
        <div className="section-label" style={{ justifyContent: 'center' }}>Credentials</div>
        <h2 className="section-title" style={{ textAlign: 'center' }}>Certifications</h2>
        <div className="accent-bar" style={{ margin: '14px auto 0' }} />
        <p style={{ color: '#64748b', fontSize: '14px', marginTop: '14px', maxWidth: '360px', margin: '14px auto 0' }}>
          Industry-recognized cloud certifications validating my expertise.
        </p>
      </motion.div>

      {/* Cards */}
      <div className="w-full max-w-3xl flex flex-col gap-6 z-20 relative px-4">
        {certifications.map((cert, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
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
              e.currentTarget.style.borderColor = cert.accentColor + '50';
              e.currentTarget.style.boxShadow = `0 12px 50px -10px ${cert.glow}`;
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
              background: `linear-gradient(to bottom, transparent, ${cert.accentColor}, transparent)`,
              borderRadius: '2px',
            }} />

            {/* Badge */}
            <div style={{ position: 'relative', flexShrink: 0 }}>
              <div style={{
                position: 'absolute', inset: '-8px',
                borderRadius: '50%',
                background: `radial-gradient(circle, ${cert.glow} 0%, transparent 70%)`,
                filter: 'blur(10px)',
              }} />
              <img
                src={cert.badge}
                alt={cert.name}
                style={{
                  width: '100px', height: '100px',
                  objectFit: 'contain',
                  position: 'relative',
                  filter: `drop-shadow(0 0 16px ${cert.shadowColor})`,
                }}
              />
            </div>

            {/* Text */}
            <div style={{ flex: 1, minWidth: '120px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                <Award size={14} style={{ color: cert.accentColor }} />
                <span style={{ fontSize: '11px', fontWeight: 600, color: cert.accentColor, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                  {cert.issuer} · {cert.date}
                </span>
              </div>
              <h3 style={{
                fontFamily: 'Outfit, sans-serif',
                fontSize: '20px',
                fontWeight: 700,
                color: '#f1f5f9',
                letterSpacing: '-0.02em',
                lineHeight: 1.3,
                marginBottom: '16px',
              }}>
                {cert.name}
              </h3>
              <motion.a
                href={cert.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="btn-premium"
                style={{ gap: '7px', fontSize: '11px', padding: '8px 20px' }}
              >
                <ExternalLink size={12} />
                Verify Badge
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
