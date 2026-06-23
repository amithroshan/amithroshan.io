import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const experienceItems = [
  // {
  //   title: 'Intern DevOps Engineer',
  //   company: 'Behaviol Pty Ltd',
  //   period: 'Nov 2025 – Present',
  //   location: null,
  //   isCurrent: true,
  //   description: null,
  //   bullets: [
  //     'Containerized applications using Docker and managed deployments on Kubernetes (GCP)',
  //     'Provisioned cloud infrastructure on GCP using Terraform following IaC best practices',
  //     'Built and maintained CI/CD pipelines with GitHub Actions and Jenkins',
  //     'Wrote Bash scripts to automate operational tasks and reduce manual effort',
  //     'Configured Grafana and Prometheus dashboards to monitor system health and metrics',
  //   ],
  //   tags: ['Docker', 'Kubernetes', 'GCP', 'Terraform', 'GitHub Actions', 'Jenkins', 'Grafana', 'Prometheus'],
  //   accentColor: '#06b6d4',
  // },
  {
    title: 'Data Entry Operator',
    company: 'Singer Sri Lanka PLC',
    period: '09/2019 – 01/2020',
    location: 'Piliyandala, Sri Lanka',
    isCurrent: false,
    description:
      'Worked as a Data Entry Operator for 4 months, responsible for accurately entering and updating product and inventory data into the system.',
    bullets: null,
    tags: null,
    accentColor: '#3b82f6',
  },
];

export default function Experience() {
  return (
    <section
      className="py-20 pointer-events-auto z-10 relative"
      style={{ display: 'flex', justifyContent: 'center' }}
      id="experience"
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
          <div className="section-label">Work History</div>
          <h2 className="section-title">Experience</h2>
          <div className="accent-bar" />
        </motion.div>

        {/* Timeline */}
        <div className="relative" style={{ paddingLeft: '44px' }}>
          {/* Vertical line */}
          <div className="timeline-line" />

          {experienceItems.map((item, i) => (
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
                left: '-38px',
                top: '26px',
                width: '16px',
                height: '16px',
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
                      <Briefcase size={14} style={{ color: item.accentColor }} />
                    </div>
                    <span style={{ color: '#f1f5f9', fontWeight: 700, fontSize: '15px', letterSpacing: '-0.01em', fontFamily: 'Outfit, sans-serif' }}>
                      {item.title}
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
                    {item.period}
                  </span>
                </div>

                {/* Company */}
                <span style={{ color: item.accentColor, fontSize: '13px', fontWeight: 600, display: 'block', marginTop: '4px', marginLeft: '42px' }}>
                  {item.company}
                </span>

                {/* Location */}
                {item.location && (
                  <span style={{ color: '#475569', fontSize: '12px', display: 'block', marginTop: '2px', marginLeft: '42px' }}>
                    📍 {item.location}
                  </span>
                )}

                {/* Bullets */}
                {item.bullets && (
                  <ul style={{ marginTop: '14px', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '14px', listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '7px' }}>
                    {item.bullets.map((b, bi) => (
                      <li key={bi} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                        <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: item.accentColor, flexShrink: 0, marginTop: '7px' }} />
                        <span style={{ color: '#94a3b8', fontSize: '13px', lineHeight: '1.75' }}>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Description */}
                {item.description && (
                  <div style={{ marginTop: '12px', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '12px' }}>
                    <p style={{ color: '#94a3b8', fontSize: '13px', lineHeight: '1.8' }}>
                      {item.description}
                    </p>
                  </div>
                )}

                {/* Tags */}
                {item.tags && (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '14px' }}>
                    {item.tags.map((tag, ti) => (
                      <span key={ti} style={{
                        border: '1px solid rgba(255,255,255,0.08)',
                        borderRadius: '6px',
                        padding: '3px 10px',
                        fontSize: '11px',
                        color: '#94a3b8',
                        background: 'rgba(255,255,255,0.03)',
                      }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
