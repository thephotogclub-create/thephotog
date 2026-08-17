import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 400]);
  const opacity = useTransform(scrollY, [0, 600], [1, 0]);

  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center bg-background">
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background z-10" />
        {/* We use the generated hero image here */}
        <img 
          src={`${import.meta.env.BASE_URL}hero1.jpeg`} 
          alt="Vintage Film Camera" 
          className="w-full h-full object-cover opacity-80"
        />
        <div className="grain" />
      </motion.div>

      <div className="relative z-10 container mx-auto px-6 text-center mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-secondary/70 uppercase tracking-[0.3em] text-sm font-medium mb-6 block">
            MVSR College
          </span>
          <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl tracking-tighter leading-none mb-6">
            Photography &<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary via-white to-secondary/50">
              Cinematography club
            </span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="max-w-xl mx-auto"
        >
          <p className="text-muted-foreground text-lg md:text-xl font-light mb-12 leading-relaxed">
            A community dedicated to the art of observation, the discipline of composition, and the magic of capturing a single moment in time.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#gallery" 
              className="px-8 py-4 bg-white text-background font-medium tracking-widest uppercase text-sm hover:bg-secondary transition-colors duration-300 w-full sm:w-auto"
            >
              Explore Gallery
            </a>
            <a 
              href="#join" 
              className="px-8 py-4 border border-white/20 hover:border-white text-white font-medium tracking-widest uppercase text-sm transition-all duration-300 w-full sm:w-auto hover:bg-white/5"
            >
              Join the Community
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center text-white/50"
      >
        <div className="w-px h-16 bg-gradient-to-b from-white/50 to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;