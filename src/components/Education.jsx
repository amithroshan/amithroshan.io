import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const educationItems = [
  {
    degree: 'BSc (Hons) in Information Technology in Cloud Computing',
    institution: 'SLTC Research University',
    year: '2022 – Present',
    location: 'Padukka, Sri Lanka',
    details: 'Current GPA - 3.16 (after 7 semesters)',
    isCurrent: true,
    accentColor: '#3b82f6',
    institutionColor: '#60a5fa',
  },
  {
    degree: 'G.C.E. Advanced Level Examination – 2020',
    institution: 'Mo / Bandaranayake National School',
    year: '2020',
    location: 'Index No: 3756294',
    details: 'Business Studies – A\nAccounting – B\nInformation & Communication Technology – C\nZ Score – +1.1719',
    isCurrent: false,
    accentColor: '#a855f7',
    institutionColor: '#c084fc',
  },
];

export default function Education() {
  return (
    <section
      className="py-20 pointer-events-auto z-10 relative"
      style={{ display: 'flex', justifyContent: 'center', marginTop: '80px' }}
      id="education"
    >
      <div style={{ width: '100%', maxWidth: '800px', padding: '0 16px' }}>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: '52px' }}
        >
          <div className="section-label">Academic Background</div>
          <h2 className="section-title">Education</h2>
          <div className="accent-bar" />
        </motion.div>

        {/* Timeline */}
        <div className="relative" style={{ paddingLeft: '44px' }}>
          {/* Vertical line */}
          <div style={{
            position: 'absolute',
            left: '11px', top: '12px', bottom: '12px',
            width: '2px',
            background: 'linear-gradient(to bottom, #3b82f6 0%, #a855f7 100%)',
            opacity: 0.4,
          }} />

          {educationItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
              style={{ marginBottom: '28px' }}
            >
              {/* Dot */}
              <div style={{
                position: 'absolute',
                left: '-38px', top: '26px',
                width: '16px', height: '16px',
                borderRadius: '50%',
                background: item.accentColor,
                boxShadow: `0 0 0 3px rgba(1,4,9,1), 0 0 14px ${item.accentColor}`,
                zIndex: 10,
              }} />

              {/* Card */}
              <div
                style={{
                  background: 'rgba(10, 17, 34, 0.7)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: '16px',
                  padding: '22px 26px',
                  backdropFilter: 'blur(12px)',
                  transition: 'border-color 0.3s, box-shadow 0.3s',
                  position: 'relative',
                  overflow: 'hidden',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = `${item.accentColor}40`;
                  e.currentTarget.style.boxShadow = `0 8px 40px -8px ${item.accentColor}25`;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {/* Left accent bar */}
                <div style={{
                  position: 'absolute',
                  left: 0, top: '20%', bottom: '20%',
                  width: '3px',
                  background: `linear-gradient(to bottom, transparent, ${item.accentColor}, transparent)`,
                  borderRadius: '2px',
                }} />

                {/* Top row */}
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '12px', flexWrap: 'wrap', marginBottom: '6px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
                    <div style={{
                      width: '32px', height: '32px',
                      borderRadius: '8px',
                      background: `${item.accentColor}18`,
                      border: `1px solid ${item.accentColor}30`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <GraduationCap size={14} style={{ color: item.accentColor }} />
                    </div>
                    <span style={{ color: '#f1f5f9', fontWeight: 700, fontSize: '15px', letterSpacing: '-0.01em', fontFamily: 'Outfit, sans-serif' }}>
                      {item.degree}
                    </span>
                    {item.isCurrent && <span className="badge-current">Current</span>}
                  </div>
                  <span style={{
                    color: '#475569',
                    fontSize: '12px',
                    fontWeight: 500,
                    whiteSpace: 'nowrap',
                    background: 'rgba(255,255,255,0.04)',
                    padding: '3px 10px',
                    borderRadius: '6px',
                    border: '1px solid rgba(255,255,255,0.06)',
                  }}>
                    {item.year}
                  </span>
                </div>

                {/* Institution */}
                <span style={{ color: item.institutionColor, fontSize: '13px', fontWeight: 600, display: 'block', marginTop: '4px', marginLeft: '42px' }}>
                  {item.institution}
                </span>

                {/* Location */}
                <span style={{ color: '#475569', fontSize: '12px', display: 'block', marginTop: '2px', marginLeft: '42px' }}>
                  📍 {item.location}
                </span>

                {/* Details */}
                <div style={{ marginTop: '14px', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '12px' }}>
                  {item.details.split('\n').map((line, li) => {
                    const isZScore = line.startsWith('Z Score');
                    return (
                      <p key={li} style={{
                        color: isZScore ? '#94a3b8' : '#e2e8f0',
                        fontSize: '13px',
                        lineHeight: '1.85',
                        fontWeight: isZScore ? 400 : 500,
                        marginTop: isZScore ? '6px' : '0',
                      }}>
                        {line}
                      </p>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
