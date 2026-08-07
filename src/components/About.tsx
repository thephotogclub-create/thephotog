import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-32 bg-background relative z-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="aspect-[3/4] relative overflow-hidden">
              <div className="absolute inset-0 bg-primary/20 mix-blend-multiply z-10" />
              <img 
                src={`${import.meta.env.BASE_URL}gallery-8.jpg`}
                alt="Darkroom process" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-8 -right-8 w-48 h-48 border-t border-l border-white/20 hidden md:block" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 lg:col-start-7 flex flex-col justify-center"
          >
            <h2 className="text-secondary/50 uppercase tracking-[0.3em] text-xs font-semibold mb-4">
              Our Vision
            </h2>
            <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-8 leading-tight">
              Seeing the world <br />
              <span className="italic text-secondary">differently.</span>
            </h3>
            
            <div className="space-y-6 text-muted-foreground font-light text-lg">
              <p>
                Photog is more than a club; it's MVSR College's collective of visual storytellers. We believe that photography is not just about the equipment you own, but how you perceive the world around you.
              </p>
              <p>
                Founded on the principles of editorial excellence and technical mastery, our society provides a space for students to develop their eye, whether they shoot on medium format film, digital mirrorless, or even their smartphones.
              </p>
              <p>
                From darkroom developing sessions to twilight photowalks and brutalist architecture tours, we foster an environment where constructive critique meets creative freedom.
              </p>
            </div>
            
            <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-3 gap-6">
              <div>
                <div className="font-serif text-3xl text-white mb-1">120+</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Members</div>
              </div>
              <div>
                <div className="font-serif text-3xl text-white mb-1">24</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Exhibitions</div>
              </div>
              <div>
                <div className="font-serif text-3xl text-white mb-1">1988</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Founded</div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;