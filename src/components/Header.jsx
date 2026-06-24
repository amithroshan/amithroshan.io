import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll } from 'framer-motion';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Certification', href: '#certifications' },
  { label: 'Project', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [activeSection, setActiveSection] = useState('#about');
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const scrollContainer = document.querySelector('.scroll-container');
    if (!scrollContainer) return;

    const handleScroll = () => {
      const scrollPosition = scrollContainer.scrollTop;
      setScrolled(scrollPosition > 40);
      const windowHeight = window.innerHeight;

      for (const item of navItems) {
        const el = document.querySelector(item.href);
        if (el) {
          const offsetTop = el.offsetTop;
          const height = el.offsetHeight;
          if (
            scrollPosition >= offsetTop - windowHeight / 3 &&
            scrollPosition < offsetTop + height - windowHeight / 3
          ) {
            setActiveSection(item.href);
            break;
          }
        }
      }
    };

    scrollContainer.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => scrollContainer.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setActiveSection(href);
    setIsOpen(false);
    if (window.lenis) {
      window.lenis.scrollTo(href, { offset: -75 });
    } else {
      const scrollContainer = document.querySelector('.scroll-container');
      const el = document.querySelector(href);
      if (scrollContainer && el) {
        scrollContainer.scrollTo({ top: el.offsetTop - 75, behavior: 'smooth' });
      }
    }
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 w-full z-50 pointer-events-auto"
      style={{
        background: scrolled
          ? 'rgba(1, 4, 9, 0.75)'
          : 'rgba(1, 4, 9, 0.2)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: scrolled
          ? '1px solid rgba(255, 255, 255, 0.07)'
          : '1px solid transparent',
        boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.4)' : 'none',
        transition: 'background 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease',
      }}
    >
      <div
        className="relative w-full h-[62px] flex items-center justify-between"
        style={{
          paddingLeft: 'clamp(24px, 5vw, 80px)', 
          paddingRight: 'clamp(24px, 5vw, 80px)'
        }}
      >
        {/* Logo */}
        <div
          onClick={(e) => handleNavClick(e, '#ar')}
          className="relative cursor-pointer select-none flex items-center gap-2"
        >
          <div style={{
            width: '38px',
            height: '38px',
            borderRadius: '10px',
            background: 'linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 0 16px rgba(139,92,246,0.5)',
            fontSize: '15px',
            fontWeight: 900,
            color: '#fff',
            fontFamily: 'Outfit, sans-serif',
            letterSpacing: '-0.02em',
          }}>
            AR
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.href;
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="relative text-sm font-medium tracking-wide transition-all duration-300 select-none"
                style={{
                  color: isActive ? '#fff' : 'rgba(148, 163, 184, 0.85)',
                  padding: '6px clamp(8px, 1.2vw, 14px)',
                  borderRadius: '8px',
                  background: isActive
                    ? 'rgba(56, 189, 248, 0.1)'
                    : 'transparent',
                  border: isActive
                    ? '1px solid rgba(56, 189, 248, 0.2)'
                    : '1px solid transparent',
                }}
                onMouseEnter={e => {
                  if (!isActive) {
                    e.currentTarget.style.color = '#fff';
                    e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                  }
                }}
                onMouseLeave={e => {
                  if (!isActive) {
                    e.currentTarget.style.color = 'rgba(148, 163, 184, 0.85)';
                    e.currentTarget.style.background = 'transparent';
                  }
                }}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-[8px]"
                    style={{ background: 'rgba(56, 189, 248, 0.1)', border: '1px solid rgba(56, 189, 248, 0.2)' }}
                    transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </a>
            );
          })}
        </nav>

        {/* Right side: CTA Button */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="/Amith_Roshan_CV.pdf"
            download
            className="text-xs font-bold tracking-wider uppercase text-white transition-all duration-300 flex items-center gap-1.5"
            style={{
              padding: '7px 16px',
              borderRadius: '8px',
              background: 'linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)',
              boxShadow: '0 0 14px rgba(139,92,246,0.35)',
            }}
            onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 0 22px rgba(139,92,246,0.6)'; }}
            onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 0 14px rgba(139,92,246,0.35)'; }}
          >
            Resume
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-400 hover:text-white focus:outline-none p-2 rounded-lg"
            style={{ background: 'rgba(255,255,255,0.05)' }}
          >
            <svg className="h-5 w-5 fill-none stroke-current" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10, transition: { duration: 0.2 } }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden absolute top-[62px] left-0 w-full px-4 pb-4"
          >
            <motion.div
              style={{
                background: 'rgba(10, 17, 34, 0.85)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '16px',
                boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
                overflow: 'hidden',
              }}
              className="flex flex-col px-3 py-4 gap-2 relative"
            >
              {/* Subtle top glow line */}
              <div style={{
                position: 'absolute', top: 0, left: '15%', right: '15%', height: '1px',
                background: 'linear-gradient(to right, transparent, rgba(56,189,248,0.5), transparent)'
              }} />

              {navItems.map((item, i) => {
                const isActive = activeSection === item.href;
                return (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    initial={{ opacity: 0, y: -15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 + i * 0.05, duration: 0.4, ease: 'easeOut' }}
                    className="flex items-center justify-center px-4 py-[14px] text-[15px] font-semibold tracking-wide rounded-xl transition-all duration-300 relative overflow-hidden group"
                    style={{
                      color: isActive ? '#fff' : '#94a3b8',
                      background: isActive ? 'rgba(56, 189, 248, 0.1)' : 'transparent',
                    }}
                  >
                    <span className="relative z-10 transition-transform duration-300 group-hover:scale-105">
                      {item.label}
                    </span>
                  </motion.a>
                );
              })}

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.4 }}
                className="mt-3 pb-2 flex justify-center"
              >
                <a
                  href="/Amith_Roshan_CV.pdf"
                  download
                  className="btn-premium text-center flex justify-center items-center gap-2"
                  style={{ padding: '10px 24px', fontSize: '12.5px', borderRadius: '12px' }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" x2="12" y1="15" y2="3" /></svg>
                  DOWNLOAD RESUME
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
