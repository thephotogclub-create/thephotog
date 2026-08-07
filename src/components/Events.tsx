import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, MapPin } from 'lucide-react';

const events = [
  {
    id: 1,
    title: 'Darkroom Masterclass: Developing B&W Film',
    date: 'Oct 14, 2024',
    time: '18:00 - 21:00',
    location: 'Studio B, Arts Building',
    type: 'Workshop',
    description: 'Learn the fundamentals of developing your own black and white 35mm and 120 film. Chemicals and equipment provided.'
  },
  {
    id: 2,
    title: 'Neon Nights Photowalk',
    date: 'Oct 21, 2024',
    time: '20:00 - 23:00',
    location: 'Meet at City Square',
    type: 'Field Trip',
    description: 'A guided evening walk focusing on low-light photography, cyberpunk aesthetics, and capturing motion.'
  },
  {
    id: 3,
    title: 'Autumn Critique Session',
    date: 'Nov 05, 2024',
    time: '17:30 - 19:30',
    location: 'Room 402, Main Library',
    type: 'Critique',
    description: 'Bring 3-5 of your best recent shots for constructive feedback from peers and guest professional photographer Jane Doe.'
  }
];

const Events = () => {
  return (
    <section id="events" className="py-32 bg-card relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-secondary/50 uppercase tracking-[0.3em] text-xs font-semibold mb-4">
              Agenda
            </h2>
            <h3 className="font-serif text-5xl md:text-6xl">Upcoming Events</h3>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <a href="#" className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-secondary hover:text-white transition-colors border-b border-secondary hover:border-white pb-1">
              View Calendar <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group bg-background border border-white/5 hover:border-white/20 p-8 transition-colors duration-300 flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-6">
                <span className="text-xs uppercase tracking-widest text-secondary px-3 py-1 bg-secondary/10 border border-secondary/20">
                  {event.type}
                </span>
                <span className="font-serif text-white/50 text-xl">{String(index + 1).padStart(2, '0')}</span>
              </div>
              
              <h4 className="font-serif text-2xl mb-4 group-hover:text-secondary transition-colors">
                {event.title}
              </h4>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-8 flex-grow">
                {event.description}
              </p>
              
              <div className="space-y-3 pt-6 border-t border-white/10 text-sm text-white/70">
                <div className="flex items-center gap-3">
                  <Calendar className="w-4 h-4 text-secondary/70" />
                  <span>{event.date} • {event.time}</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-secondary/70" />
                  <span>{event.location}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;