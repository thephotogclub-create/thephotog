import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-32 bg-background relative z-20">
      <div className="w-full h-px bg-white/10 mb-20" />
      <div className="container mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <span className="text-secondary/70 uppercase tracking-[0.3em] text-sm font-medium block mb-4">
            Who We Are
          </span>
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl tracking-tight">
            About
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto text-center"
        >
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-3xl md:text-4xl lg:text-5xl mb-10 leading-tight"
          >
            A community built around <br className="hidden md:block" />
            the way we see.
          </motion.h3>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6 text-muted-foreground font-light text-base md:text-lg lg:text-xl text-left md:text-center"
          >
            <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.6, delay: 0.15 }}>
              Photog is more than a photography club — it is a community of people who see the world in their own unique ways.
            </motion.p>
            <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.6, delay: 0.2 }}>
              We believe photography is not just about capturing a picture; it is about discovering how someone else sees the same world differently. Every person brings their own perspective, experiences, and way of noticing things, and that is what makes every photograph different.
            </motion.p>
            <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.6, delay: 0.25 }}>
              Our club is a space to learn, experiment, share, and grow together. Whether you're picking up a camera for the first time or have been photographing for years, there is always something new to learn from the person next to you.
            </motion.p>
            <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.6, delay: 0.3 }}>
              Through photowalks, conversations, creative activities, and shared experiences, we encourage each other to look closer, think differently, and find stories in the ordinary.
            </motion.p>
            <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.6, delay: 0.35 }}>
              Because at Photog, the best part of photography isn't just the picture — it's the people and perspectives behind it.
            </motion.p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto text-center mt-24 pt-20 border-t border-white/10"
        >
          <h2 className="text-secondary/50 uppercase tracking-[0.3em] text-xs font-semibold mb-4">
            Our Vision
          </h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-3xl md:text-4xl lg:text-5xl mb-10 leading-tight"
          >
            Seeing the world through <br className="hidden md:block" />
            <span className="italic text-secondary">different eyes.</span>
          </motion.h3>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6 text-muted-foreground font-light text-base md:text-lg lg:text-xl"
          >
            <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.6, delay: 0.2 }}>
              We want to build a community where every perspective has a place.
            </motion.p>
            <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.6, delay: 0.25 }}>
              A place where we learn not only how to take better photographs, but how to see better — by observing, questioning, experimenting, and learning from one another.
            </motion.p>
            <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.6, delay: 0.3 }}>
              Different people. Different perspectives. Different stories.
            </motion.p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="font-serif italic text-2xl md:text-3xl text-white mt-10"
          >
            One frame can be seen a hundred ways.
          </motion.p>
        </motion.div>

      </div>
    </section>
  );
};

export default About;