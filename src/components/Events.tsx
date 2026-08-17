import React from 'react';
import { motion } from 'framer-motion';
import { Camera } from 'lucide-react';

const activities = [
  {
    id: 1,
    title: 'Understanding Your Camera',
    type: 'Workshop',
    description:
      'Learn the fundamentals of your camera — exposure, shutter speed, aperture, ISO, lenses, and how to use them with intention.'
  },
  {
    id: 2,
    title: 'Composition & Framing',
    type: 'Learning Session',
    description:
      'Explore composition, framing, leading lines, symmetry, perspective, and the small choices that make a photograph stand out.'
  },
  {
    id: 3,
    title: 'Cinematography in Practice',
    type: 'Practical',
    description:
      'Experiment with cinematic framing, lighting, camera movement, and visual storytelling through hands-on practice.'
  },
  {
    id: 4,
    title: 'Photowalks',
    type: 'Community',
    description:
      'Step outside, explore familiar places differently, and capture moments while learning from the perspectives of others.'
  },
  {
    id: 5,
    title: 'Photo Critique',
    type: 'Discussion',
    description:
      'Share your work, exchange perspectives, and learn how different people interpret the same photograph.'
  },
  {
    id: 6,
    title: 'Creative Challenges',
    type: 'Challenge',
    description:
      'Take on photography challenges with a common theme and discover how differently each person can interpret the same idea.'
  }
];

const Events = () => {
  return (
    <section id="activities">
      <div className="container mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="text-secondary/70 uppercase tracking-[0.3em] text-sm font-medium block mb-4">
            What We Do
          </span>

          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl tracking-tight">
            Activities
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1
              }}
              className="group bg-background border border-white/5 hover:border-white/20 p-8 transition-colors duration-300 flex flex-col min-h-[280px]"
            >
              <div className="flex justify-between items-start mb-7">
                <span className="text-xs uppercase tracking-widest text-secondary px-3 py-1 bg-secondary/10 border border-secondary/20">
                  {activity.type}
                </span>

                <span className="font-serif text-white/30 text-xl">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>

              <Camera className="w-5 h-5 text-secondary/60 mb-5" />

              <h4 className="font-serif text-2xl mb-4 group-hover:text-secondary transition-colors">
                {activity.title}
              </h4>

              <p className="text-muted-foreground text-sm leading-relaxed">
                {activity.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 text-center"
        >
          <p className="text-lg md:text-xl text-white/80 italic">
            Wanna add activities, join the community, or share ideas? We’d love to have you be part of it.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Events;