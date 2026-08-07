import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { Camera } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-500 border-b ${
        isScrolled ? 'bg-background/90 backdrop-blur-md border-white/10' : 'bg-transparent border-transparent'
      }`}
    >
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <Camera className="w-6 h-6 text-secondary transition-transform group-hover:scale-110 duration-500" />
          <span className="font-serif text-xl tracking-widest uppercase font-semibold">
            Photog
          </span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          {['about', 'gallery', 'events', 'members', 'join'].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={(e) => scrollToSection(e, item)}
              className="text-sm font-medium tracking-widest uppercase text-muted-foreground hover:text-white transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-white after:transition-all hover:after:w-full"
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </motion.header>
  );
};

export default Navbar;