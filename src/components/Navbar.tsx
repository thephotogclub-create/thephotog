import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'wouter';
import { Camera, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { label: 'About', id: 'about' },
    { label: 'Gallery', id: 'gallery' },
    { label: 'Activities', id: 'activities' },
    { label: 'Members', id: 'members' },
    { label: 'Join', id: 'join' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      // Section scrollspy
      const sections = ['about', 'gallery', 'activities', 'members', 'join'];
      const scrollPosition = window.scrollY + 180;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    setActiveSection(id);

    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        const navHeight = 80;
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - navHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/90 backdrop-blur-2xl border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.6)] py-3.5 lg:py-4'
          : 'bg-gradient-to-b from-background/95 via-background/60 to-transparent py-4 lg:py-6'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 sm:gap-4 group shrink-0">
          <div className="relative flex h-11 w-11 sm:h-13 sm:w-13 xl:h-14 xl:w-14 items-center justify-center rounded-full border border-white/20 bg-background/80 shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all duration-500 group-hover:scale-110 group-hover:border-secondary/60 group-hover:shadow-[0_0_25px_rgba(212,175,55,0.35)] overflow-hidden">
            <img
              src={`${import.meta.env.BASE_URL}logo.jpg`}
              alt="The Photog Club Logo"
              className="h-full w-full object-cover rounded-full opacity-85 group-hover:opacity-100 transition-opacity duration-300 mix-blend-lighten scale-105"
            />
          </div>
          <div className="flex flex-col items-start">
            <span className="font-serif text-lg sm:text-2xl xl:text-3xl tracking-[0.25em] uppercase font-bold text-white leading-none">
              Photog
            </span>
            <span className="text-[9px] sm:text-[10px] xl:text-xs uppercase tracking-[0.35em] text-secondary/90 mt-1 font-medium">
              Club
            </span>
          </div>
        </Link>

        {/* Laptop & Desktop Navigation Bar */}
        <nav className="hidden lg:flex items-center gap-2 xl:gap-3 p-2 rounded-full border border-white/15 bg-white/10 backdrop-blur-2xl shadow-2xl">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.id)}
                className={`px-6 py-2.5 xl:px-7 xl:py-3 rounded-full text-xs xl:text-sm font-bold uppercase tracking-[0.22em] transition-all duration-300 ${
                  isActive
                    ? 'bg-secondary text-background shadow-[0_0_25px_rgba(212,175,55,0.4)] scale-105'
                    : 'text-white/85 hover:text-white hover:bg-white/15'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Mobile Hamburger Toggle Button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="lg:hidden flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition hover:bg-white/20 hover:text-secondary active:scale-95 shrink-0"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown Panel */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden overflow-hidden bg-background/95 backdrop-blur-2xl border-b border-white/10 px-5 py-5 mt-2"
          >
            <div className="flex flex-col gap-2.5">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => scrollToSection(item.id)}
                    className={`px-5 py-3.5 rounded-xl text-sm font-bold uppercase tracking-[0.25em] transition-all duration-300 flex items-center justify-between text-left w-full ${
                      isActive
                        ? 'bg-secondary text-background shadow-lg'
                        : 'border border-white/10 bg-white/5 text-white/85 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    <span>{item.label}</span>
                    <span className="text-xs opacity-70">→</span>
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;