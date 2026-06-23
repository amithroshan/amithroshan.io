import { motion } from 'framer-motion';

function SocialIcon({ href, label, children }) {
  return (
    <motion.a
      href={href}
      aria-label={label}
      whileHover={{ scale: 1.15, y: -3 }}
      whileTap={{ scale: 0.95 }}
      className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-violet-500/50 hover:bg-violet-500/10 transition-all duration-300 backdrop-blur-sm shadow-lg"
    >
      {children}
    </motion.a>
  );
}

export default function SocialSidebar() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.9, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="hidden md:flex fixed left-10 top-1/2 -translate-y-1/2 flex-col items-center gap-3 z-50 pointer-events-auto"
    >
      <SocialIcon href="https://www.linkedin.com/in/amithroshan12/" label="LinkedIn">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
      </SocialIcon>
      <SocialIcon href="https://github.com/amithroshan" label="GitHub">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-7a5.2 5.2 0 0 0-1.4-3.7 5.1 5.1 0 0 0-.1-3.7s-1-.3-3.6 1.4a12.6 12.6 0 0 0-6.8 0C6 2.3 5 2.6 5 2.6a5.1 5.1 0 0 0-.1 3.7A5.2 5.2 0 0 0 3.5 10c0 5.4 3 6.7 6 7a4.8 4.8 0 0 0-1 3.2v4" /><path d="M3 19.5 5 18" /></svg>
      </SocialIcon>
      <SocialIcon href="https://www.facebook.com/share/18Aem1urpZ/" label="Facebook">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
      </SocialIcon>
      <SocialIcon href="mailto:amithroshan9@gmal.com" label="Email">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
      </SocialIcon>
      <div className="w-[1px] h-12 bg-gradient-to-b from-white/20 to-transparent rounded-full" />
    </motion.div>
  );
}
