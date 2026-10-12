import React from 'react';
import { motion } from 'framer-motion';
import { Camera, ExternalLink, FileText, ArrowUpRight, Clock } from 'lucide-react';

const GOOGLE_FORM_URL = 'https://forms.google.com';

interface Activity {
  id: number;
  title: string;
  type: string;
  description: string;
  formUrl?: string;
  isOpen: boolean;
}

const activities: Activity[] = [
  {
    id: 1,
    title: 'LENS & LIGHTS',
    type: 'Workshop',
    description:
      'Learn the fundamentals of your camera - Exposure Triangle, Shutter Speed, Aperture, ISO, Framing/Composition, and Lighthing and how to use them with intention.',
    formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLScGDchqUnQ-4Qm4TuohLG_uZxffTbOUnp0y4N1LMmdzXMOz2Q/viewform?usp=publish-editor',
    isOpen: true
  },
  {
    id: 2,
    title: 'Composition & Framing',
    type: 'Learning Session',
    description:
      'Explore composition, framing, leading lines, symmetry, perspective, and the small choices that make a photograph stand out.',
    isOpen: false
  },
  {
    id: 3,
    title: 'Cinematography in Practice',
    type: 'Practical',
    description:
      'Experiment with cinematic framing, lighting, camera movement, and visual storytelling through hands-on practice.',
    isOpen: false
  },
  {
    id: 4,
    title: 'Photowalks',
    type: 'Community',
    description:
      'Step outside, explore familiar places differently, and capture moments while learning from the perspectives of others.',
    isOpen: false
  },
  {
    id: 5,
    title: 'Photo Critique',
    type: 'Discussion',
    description:
      'Share your work, exchange perspectives, and learn how different people interpret the same photograph.',
    isOpen: false
  },
  {
    id: 6,
    title: 'Creative Challenges',
    type: 'Challenge',
    description:
      'Take on photography challenges with a common theme and discover how differently each person can interpret the same idea.',
    isOpen: false
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
              className="group bg-background border border-white/5 hover:border-white/20 p-8 transition-all duration-300 flex flex-col justify-between min-h-[340px] relative"
            >
              <div>
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

                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {activity.description}
                </p>
              </div>

              {/* Action Button: Google Form for Open Activity, Coming Soon for Others */}
              <div className="pt-4 border-t border-white/5">
                {activity.isOpen ? (
                  <a
                    href={activity.formUrl || GOOGLE_FORM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-between px-5 py-3 rounded-lg border border-secondary/40 bg-secondary/10 hover:bg-secondary text-secondary hover:text-background text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-sm hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] group/btn"
                  >
                    <span className="flex items-center gap-2">
                      <FileText className="w-4 h-4 text-secondary group-hover/btn:text-background transition-colors" />
                      <span>Register via Google Form</span>
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-80 group-hover/btn:opacity-100 group-hover/btn:translate-x-0.5 transition-all" />
                  </a>
                ) : (
                  <div className="w-full inline-flex items-center justify-between px-5 py-3 rounded-lg border border-white/10 bg-white/[0.02] text-white/50 text-xs font-medium uppercase tracking-wider select-none">
                    <span className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-secondary/60" />
                      <span>Coming Soon</span>
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-[10px] tracking-widest text-secondary/70 font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary/60 animate-pulse" />
                      SOON
                    </span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 text-center flex flex-col items-center gap-6"
        >
          <p className="text-lg md:text-xl text-white/80 italic max-w-2xl">
            Wanna add activities, join the community, or share ideas? We’d love to have you be part of it.
          </p>

          <a
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-secondary text-background hover:bg-white text-xs uppercase tracking-widest font-bold transition-all duration-300 shadow-[0_0_25px_rgba(212,175,55,0.3)] hover:scale-105"
          >
            <FileText className="w-4 h-4" />
            <span>Open Activity Registration Form</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Events;
