import { motion } from 'framer-motion';
import { Mail, ArrowUpRight, Send } from 'lucide-react';

function GithubIcon({ size = 18 }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-7a5.2 5.2 0 0 0-1.4-3.7 5.1 5.1 0 0 0-.1-3.7s-1-.3-3.6 1.4a12.6 12.6 0 0 0-6.8 0C6 2.3 5 2.6 5 2.6a5.1 5.1 0 0 0-.1 3.7A5.2 5.2 0 0 0 3.5 10c0 5.4 3 6.7 6 7a4.8 4.8 0 0 0-1 3.2v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon({ size = 18 }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: 'amithroshan9@gmail.com',
    href: 'mailto:amithroshan9@gmail.com',
    color: '#3b82f6',
    bg: 'rgba(59,130,246,0.1)',
    border: 'rgba(59,130,246,0.2)',
  },
  {
    icon: GithubIcon,
    label: 'GitHub',
    value: 'github.com/amithroshan',
    href: 'https://github.com/amithroshan',
    color: '#e2e8f0',
    bg: 'rgba(226,232,240,0.07)',
    border: 'rgba(226,232,240,0.12)',
  },
  {
    icon: LinkedinIcon,
    label: 'LinkedIn',
    value: 'linkedin.com/in/amithroshan12',
    href: 'https://www.linkedin.com/in/amithroshan12/',
    color: '#38bdf8',
    bg: 'rgba(56,189,248,0.08)',
    border: 'rgba(56,189,248,0.18)',
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center py-20 pointer-events-auto z-10 relative"
      style={{ paddingLeft: '16px', paddingRight: '16px' }}
    >
      {/* BG glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" style={{
        width: '500px', height: '500px',
        background: 'radial-gradient(circle, rgba(56,189,248,0.06) 0%, transparent 70%)',
        filter: 'blur(60px)', borderRadius: '50%',
      }} />

      <div className="w-full max-w-5xl relative">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: '56px', textAlign: 'center' }}
        >
          <div className="section-label" style={{ justifyContent: 'center' }}>Let's Connect</div>
          <h2 className="section-title" style={{ textAlign: 'center' }}>Get In Touch</h2>
          <div className="accent-bar" style={{ margin: '14px auto 0' }} />
          <p style={{ color: '#64748b', fontSize: '14px', marginTop: '16px', maxWidth: '420px', margin: '16px auto 0', textAlign: 'center', lineHeight: '1.7' }}>
            I'm open to new opportunities — full-time roles, internships, or exciting collaborations. My inbox is always open.
          </p>
        </motion.div>

        {/* Two columns */}
        <div className="flex flex-col md:flex-row gap-10 items-start">

          {/* Left: Contact cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="w-full md:w-1/2 flex flex-col gap-3"
          >
            {/* Big availability badge */}
            <div style={{
              padding: '16px 20px',
              borderRadius: '14px',
              background: 'rgba(34,197,94,0.06)',
              border: '1px solid rgba(34,197,94,0.2)',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '8px',
            }}>
              <div style={{
                width: '10px', height: '10px',
                borderRadius: '50%',
                background: '#4ade80',
                boxShadow: '0 0 10px rgba(74,222,128,0.6)',
                animation: 'pulse-green 2s infinite',
                flexShrink: 0,
              }} />
              <div>
                <p style={{ fontSize: '13px', fontWeight: 600, color: '#4ade80' }}>Available for opportunities</p>
                <p style={{ fontSize: '12px', color: '#64748b', marginTop: '2px' }}>Open to full-time roles & internships</p>
              </div>
            </div>

            {contactLinks.map((link, i) => {
              const IconComp = link.icon;
              return (
                <motion.a
                  key={i}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  className="contact-link-card group"
                  style={{ textDecoration: 'none' }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    <div style={{
                      width: '42px', height: '42px',
                      borderRadius: '11px',
                      background: link.bg,
                      border: `1px solid ${link.border}`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: link.color,
                      flexShrink: 0,
                      transition: 'transform 0.2s',
                    }}>
                      <IconComp size={18} />
                    </div>
                    <div>
                      <p style={{ fontSize: '11px', color: '#475569', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                        {link.label}
                      </p>
                      <p style={{ fontSize: '13.5px', color: '#cbd5e1', fontWeight: 600, marginTop: '1px' }}>
                        {link.value}
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight size={15} style={{ color: '#334155', transition: 'color 0.2s, transform 0.2s' }} />
                </motion.a>
              );
            })}
          </motion.div>

          {/* Right: Message form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="w-full md:w-1/2"
          >
            <div style={{
              background: 'rgba(10, 17, 34, 0.7)',
              border: '1px solid rgba(255,255,255,0.07)',
              borderRadius: '20px',
              padding: '28px',
              backdropFilter: 'blur(12px)',
              position: 'relative',
              overflow: 'hidden',
            }}>
              {/* Top accent line */}
              <div style={{
                position: 'absolute',
                top: 0, left: '15%', right: '15%', height: '2px',
                background: 'linear-gradient(to right, transparent, rgba(56,189,248,0.7), rgba(139,92,246,0.7), transparent)',
                borderRadius: '0 0 2px 2px',
              }} />

              <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#f1f5f9', marginBottom: '20px', fontFamily: 'Outfit, sans-serif' }}>
                Send a Message
              </h3>

              <form className="flex flex-col gap-4">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" style={{ fontSize: '11px', fontWeight: 600, color: '#475569', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Your name"
                    className="form-input"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" style={{ fontSize: '11px', fontWeight: 600, color: '#475569', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="your@email.com"
                    className="form-input"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" style={{ fontSize: '11px', fontWeight: 600, color: '#475569', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    placeholder="What's on your mind?"
                    className="form-input"
                    style={{ resize: 'none' }}
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98, y: 2 }}
                  className="btn-premium"
                  style={{ marginTop: '6px', gap: '8px', width: '100%' }}
                >
                  <Send size={14} />
                  Send Message
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
