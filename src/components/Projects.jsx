import { motion } from 'framer-motion';
import { ExternalLink, Server, Cpu, Database } from 'lucide-react';

function GithubIcon({ size = 18 }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-7a5.2 5.2 0 0 0-1.4-3.7 5.1 5.1 0 0 0-.1-3.7s-1-.3-3.6 1.4a12.6 12.6 0 0 0-6.8 0C6 2.3 5 2.6 5 2.6a5.1 5.1 0 0 0-.1 3.7A5.2 5.2 0 0 0 3.5 10c0 5.4 3 6.7 6 7a4.8 4.8 0 0 0-1 3.2v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

const projects = [
  {
    title: 'Full Stack Food Finder Application',
    category: 'Full-Stack',
    categoryColor: '#a78bfa',
    accentColor: 'rgba(139, 92, 246, 0.85)',
    glowColor: 'rgba(139, 92, 246, 0.2)',
    year: '2024',
    icon: Database,
    iconBg: 'rgba(139, 92, 246, 0.15)',
    description:
      'Built a scalable, Dockerized food tracking app using PHP and MySQL, with NGINX load balancing and Kubernetes deployment.',
    tags: ['PHP', 'MySQL', 'NGINX', 'Docker', 'Kubernetes'],
    githubUrl: 'https://github.com/amithroshan/Foodc-Food_Tracking_Application',
  },
  {
    title: 'E-commerce Terraform Infrastructure',
    category: 'DevOps',
    categoryColor: '#34d399',
    accentColor: 'rgba(13, 148, 136, 0.85)',
    glowColor: 'rgba(6, 182, 212, 0.2)',
    year: '2024',
    icon: Server,
    iconBg: 'rgba(6, 182, 212, 0.12)',
    description:
      'Cloud infrastructure for an e-commerce platform using Terraform with AWS IAM, S3, EC2, Auto Scaling, ALB and CI/CD pipelines.',
    tags: ['Terraform', 'AWS', 'EC2', 'S3', 'IAM', 'ALB', 'CI/CD'],
    githubUrl: 'https://github.com/amithroshan/aws_E-commerce_Iac',
  },
  {
    title: 'HR Churn Prediction System',
    category: 'AI / ML',
    categoryColor: '#fb923c',
    accentColor: 'rgba(234, 88, 12, 0.85)',
    glowColor: 'rgba(234, 88, 12, 0.18)',
    year: '2025',
    icon: Cpu,
    iconBg: 'rgba(234, 88, 12, 0.12)',
    description:
      'Flask-based ML application to predict employee attrition with modern dashboards, visual charts and actionable insights.',
    tags: ['Flask', 'Python', 'ML', 'HTML/CSS', 'Chart.js'],
    githubUrl: 'https://github.com/amithroshan/HR-Churn-Prediction-System',
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 px-4 pointer-events-auto z-10 relative"
      style={{ display: 'flex', justifyContent: 'center', marginTop: '60px', marginBottom: '80px' }}
    >
      {/* BG glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" style={{
        width: '600px', height: '600px',
        background: 'radial-gradient(circle, rgba(139,92,246,0.07) 0%, transparent 70%)',
        filter: 'blur(60px)',
        borderRadius: '50%',
      }} />

      <div style={{ width: '100%', maxWidth: '1000px', position: 'relative', padding: '0 20px' }}>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: '48px' }}
        >
          <div className="section-label">Featured Work</div>
          <h2 className="section-title">Projects</h2>
          <div className="accent-bar" />
          <p style={{ color: '#64748b', fontSize: '14px', fontWeight: 400, marginTop: '12px', maxWidth: '480px' }}>
            Hands-on projects spanning Web Development, Cloud Infrastructure, and AI/ML.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {projects.map((project, i) => {
            const IconComponent = project.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="relative flex flex-col justify-between"
                style={{
                  background: 'rgba(10, 17, 34, 0.7)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: '18px',
                  padding: '22px',
                  minHeight: '340px',
                  backdropFilter: 'blur(12px)',
                  transition: 'border-color 0.35s, transform 0.35s, box-shadow 0.35s',
                  cursor: 'default',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = project.glowColor.replace('0.2', '0.45');
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = `0 20px 60px -10px ${project.glowColor}`;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {/* Subtle top accent line */}
                <div style={{
                  position: 'absolute',
                  top: 0, left: '20%', right: '20%',
                  height: '2px',
                  background: `linear-gradient(to right, transparent, ${project.accentColor}, transparent)`,
                  borderRadius: '0 0 2px 2px',
                }} />

                <div>
                  {/* Top row */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                    {/* Icon */}
                    <div style={{
                      width: '40px', height: '40px',
                      borderRadius: '11px',
                      background: project.iconBg,
                      border: `1px solid ${project.accentColor.replace('0.85', '0.25')}`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <IconComponent size={18} style={{ color: project.categoryColor }} />
                    </div>

                    {/* Category + year */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{
                        padding: '3px 10px',
                        borderRadius: '999px',
                        fontSize: '11px',
                        fontWeight: 600,
                        color: project.categoryColor,
                        background: `${project.glowColor}`,
                        border: `1px solid ${project.accentColor.replace('0.85', '0.3')}`,
                      }}>
                        {project.category}
                      </span>
                      <span style={{ fontSize: '11px', color: '#4b5563', fontWeight: 500 }}>{project.year}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 style={{
                    fontSize: '15px',
                    fontWeight: 700,
                    color: '#f1f5f9',
                    marginBottom: '10px',
                    lineHeight: '1.4',
                    letterSpacing: '-0.01em',
                    fontFamily: 'Outfit, sans-serif',
                  }}>
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p style={{ color: '#64748b', fontSize: '12.5px', lineHeight: '1.75', marginBottom: '16px' }}>
                    {project.description}
                  </p>
                </div>

                {/* Bottom */}
                <div>
                  {/* Tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '16px' }}>
                    {project.tags.map((tag, ti) => (
                      <span key={ti} style={{
                        padding: '3px 8px',
                        borderRadius: '6px',
                        fontSize: '11px',
                        fontWeight: 500,
                        color: '#94a3b8',
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(255,255,255,0.08)',
                      }}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* GitHub link */}
                  <div style={{
                    borderTop: '1px solid rgba(255,255,255,0.05)',
                    paddingTop: '14px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                  }}>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'flex', alignItems: 'center', gap: '6px',
                        color: '#475569', fontSize: '12px', fontWeight: 500,
                        textDecoration: 'none', transition: 'color 0.2s',
                      }}
                      onMouseEnter={e => e.currentTarget.style.color = '#94a3b8'}
                      onMouseLeave={e => e.currentTarget.style.color = '#475569'}
                    >
                      <GithubIcon size={15} />
                      <span>View Source</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
