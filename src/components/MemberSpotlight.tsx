import React from 'react';
import { motion } from 'framer-motion';

const members = [
  {
    id: 1,
    name: 'Elena Rostova',
    role: 'President',
    specialty: 'Portrait & Editorial',
    image: 'member-1.jpg',
    quote: "Photography is the art of revealing what the eye misses in a fleeting glance."
  },
  {
    id: 2,
    name: 'Marcus Chen',
    role: 'Equipment Manager',
    specialty: 'Street & Architecture',
    image: 'member-2.jpg',
    quote: "The geometry of the city speaks loudly if you know how to frame it."
  },
  {
    id: 3,
    name: 'Sarah Jenkins',
    role: 'Events Coordinator',
    specialty: 'Analog & Alternative Process',
    image: 'member-3.jpg',
    quote: "There is magic in the darkroom that digital pixels can never replicate."
  }
];

const MemberSpotlight = () => {
  return (
    <section id="members" className="py-32 bg-background border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-secondary/50 uppercase tracking-[0.3em] text-xs font-semibold mb-4">
              Community
            </h2>
            <h3 className="font-serif text-5xl md:text-6xl">Member Spotlight</h3>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8">
          {members.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="text-center group"
            >
              <div className="relative w-64 h-64 mx-auto mb-8 rounded-full overflow-hidden border-2 border-white/10 group-hover:border-secondary transition-colors duration-500">
                <div className="absolute inset-0 bg-primary/20 mix-blend-multiply z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <img 
                  src={`${import.meta.env.BASE_URL}${member.image}`}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110"
                />
              </div>
              
              <h4 className="font-serif text-3xl mb-2">{member.name}</h4>
              <div className="text-secondary text-sm tracking-widest uppercase mb-4">
                {member.role}
              </div>
              <div className="text-white/50 text-xs tracking-wider uppercase mb-6 border-b border-white/10 pb-6 w-3/4 mx-auto">
                {member.specialty}
              </div>
              <p className="text-muted-foreground font-serif italic text-lg px-6 leading-relaxed">
                "{member.quote}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MemberSpotlight;