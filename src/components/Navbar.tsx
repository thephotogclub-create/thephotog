import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'wouter';
import { Camera, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
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

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const navItems = [
    { label: 'about', id: 'about' },
    { label: 'gallery', id: 'gallery' },
    { label: 'activities', id: 'activities'},
    { label: 'members', id: 'members' },
    { label: 'join', id: 'join' }
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-500 border-b ${
        isScrolled ? 'backdrop-blur-md border-white/10 shadow-lg shadow-black/10' : 'border-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 h-24 sm:h-28 lg:h-32 xl:h-36 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3 sm:gap-4 group flex-shrink-0">
          <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full border border-secondary/30 bg-secondary/10 text-secondary shadow-sm shadow-secondary/10 transition-transform duration-500 group-hover:scale-110">
            <Camera className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <div className="flex flex-col items-start">
            <span className="font-serif text-xl sm:text-2xl md:text-[1.75rem] tracking-[0.28em] uppercase font-semibold leading-none text-white">
              Photog
            </span>
            <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.35em] text-muted-foreground mt-1">
              Club
            </span>
          </div>
        </Link>

        <div className="flex items-center gap-3">
          <nav className="hidden lg:flex items-center gap-7 xl:gap-10 2xl:gap-12">
            {navItems.map((item) => (
              <React.Fragment key={item.id}>
                {item.divider && <span className="h-px w-8 bg-white/20" />}
                <a
                  href={`#${item.id}`}
                  onClick={(e) => scrollToSection(e, item.id)}
                  className="text-lg xl:text-xl 2xl:text-2xl font-extrabold tracking-[0.12em] uppercase text-white hover:text-secondary transition-all duration-300 relative after:absolute after:-bottom-1 after:left-0 after:h-[3px] after:w-0 after:bg-secondary after:transition-all hover:after:w-full drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]"
                >
                  {item.label}
                </a>
              </React.Fragment>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="lg:hidden flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition hover:bg-white/10 hover:text-secondary"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden mx-4 mb-4 rounded-2xl border border-white/10 bg-background/95 backdrop-blur-md shadow-2xl shadow-black/30"
          >
            <nav className="flex flex-col p-2">
              {navItems.map((item) => (
                <React.Fragment key={item.id}>
                  {item.divider && <div className="my-2 border-t border-white/10" />}
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => scrollToSection(e, item.id)}
                    className="min-h-[44px] px-3 py-3 text-sm font-bold tracking-[0.24em] uppercase text-white hover:text-secondary transition-colors duration-300"
                  >
                    {item.label}
                  </a>
                </React.Fragment>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;