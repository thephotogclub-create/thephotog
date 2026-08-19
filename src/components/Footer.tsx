import React from 'react';
import { Camera } from 'lucide-react';
import { Link } from 'wouter';

const Footer = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
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
  };

  return (
    <footer className="bg-background border-t border-white/10 pt-20 pb-10 relative z-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-12 mb-16">
          
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-background/80 overflow-hidden shadow-[0_0_15px_rgba(255,255,255,0.08)]">
                <img
                  src={`${import.meta.env.BASE_URL}logo.jpg`}
                  alt="The Photog Club Logo"
                  className="w-full h-full object-cover rounded-full opacity-85 group-hover:opacity-100 transition-opacity mix-blend-lighten scale-105"
                />
              </div>
              <span className="font-serif text-3xl tracking-widest uppercase font-semibold text-white">
                Photog
              </span>
            </Link>
            <p className="text-muted-foreground font-light text-sm text-center md:text-left max-w-xs">
              The official photography club of MVSR College of Engineering. Fostering creativity through the lens.
            </p>
          </div>

          <div className="flex gap-12">
            <div>
              <h4 className="text-white uppercase tracking-widest text-xs font-semibold mb-6">Navigation</h4>
              <ul className="space-y-4 text-sm font-light text-muted-foreground">
                <li><a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="hover:text-secondary transition-colors">About Us</a></li>
                <li><a href="#gallery" onClick={(e) => scrollToSection(e, 'gallery')} className="hover:text-secondary transition-colors">Gallery</a></li>
                <li><a href="#activities" onClick={(e) => scrollToSection(e, 'activities')} className="hover:text-secondary transition-colors">Activities</a></li>
                <li><a href="#members" onClick={(e) => scrollToSection(e, 'members')} className="hover:text-secondary transition-colors">Members</a></li>
                <li><a href="#join" onClick={(e) => scrollToSection(e, 'join')} className="hover:text-secondary transition-colors">Join Us</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white uppercase tracking-widest text-xs font-semibold mb-6">Socials</h4>
              <ul className="space-y-4 text-sm font-light text-muted-foreground">
                <li>
                  <a 
                    href="https://www.instagram.com/thephotogclub/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-secondary transition-colors"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a 
                    href="https://chat.whatsapp.com/photogmvsr" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-secondary transition-colors"
                  >
                    WhatsApp
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-light text-white/40 uppercase tracking-wider">
          <p>&copy; {new Date().getFullYear()} Photog — MVSR College Photography Club.</p>
          <div className="flex gap-6">
            <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="hover:text-white transition-colors">About</a>
            <a href="#join" onClick={(e) => scrollToSection(e, 'join')} className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;