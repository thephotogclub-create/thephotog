import React from 'react';
import { motion } from 'framer-motion';
import {
  Instagram,
  MessageCircle,
  ExternalLink,
  ArrowRight,
  Bell
} from 'lucide-react';

const INSTAGRAM_HANDLE = '@photog.mvsr';
const INSTAGRAM_URL = 'https://www.instagram.com/photog.mvsr';
const WHATSAPP_LINK = 'https://chat.whatsapp.com/photogmvsr';

const JoinSection = () => {
  return (
    <section className="relative py-32 border-t border-white/5 overflow-hidden">
      <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent" />
      <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-secondary/50 uppercase tracking-[0.3em] text-xs font-semibold mb-4">
            Stay Connected
          </h2>

          <h3 className="font-serif text-5xl md:text-7xl mb-6 leading-none">
            Be part of the
            <br />
            <span className="italic text-secondary">
              Community
            </span>
          </h3>

          <p className="text-muted-foreground font-light max-w-xl mx-auto text-lg leading-relaxed">
            Stay connected with Photog for announcements, upcoming activities,
            photowalks, and everything happening within our community.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto mb-12"
        >
          <div className="border border-secondary/30 bg-secondary/5 p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-5">
            <div className="w-12 h-12 flex-shrink-0 border border-secondary/40 flex items-center justify-center">
              <Bell className="w-5 h-5 text-secondary" />
            </div>

            <div className="flex-1">
              <span className="text-secondary text-xs uppercase tracking-[0.2em] font-semibold">
                Important
              </span>

              <h4 className="font-serif text-2xl mt-1 mb-2">
                Stay updated with announcements
              </h4>

              <p className="text-muted-foreground text-sm leading-relaxed">
                Important announcements, event updates, photowalk details,
                and other club information will be shared through our
                announcement groups.
              </p>
            </div>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-5 py-3 bg-secondary text-background hover:bg-white transition-colors duration-300 text-xs uppercase tracking-widest font-semibold whitespace-nowrap"
            >
              Join Updates
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div className="border border-white/10 p-8 md:p-10 h-full bg-background/60 backdrop-blur-sm hover:border-white/30 transition-all duration-500">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 border border-white/20 flex items-center justify-center group-hover:border-secondary transition-colors duration-500">
                  <Instagram className="w-5 h-5 text-white" />
                </div>

                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
                    Follow Us
                  </div>

                  <div className="text-white font-medium tracking-wide">
                    Instagram
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="p-3 bg-white">
                  <img
                    src={`${import.meta.env.BASE_URL}instagram.jpeg`}
                    alt="Instagram QR Code"
                    width={180}
                    height={180}
                    loading="lazy"
                    className="block w-44 h-44 object-contain"
                  />
                </div>

                <p className="text-white font-medium mt-5 mb-1">
                  Scan to Follow
                </p>

                <p className="font-serif text-2xl text-secondary">
                  {INSTAGRAM_HANDLE}
                </p>
              </div>

              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 flex items-center justify-between px-6 py-4 bg-white text-background hover:bg-secondary transition-colors duration-300 font-medium uppercase tracking-widest text-xs"
              >
                <span>Follow on Instagram</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative group"
          >
            <div className="border border-white/10 p-8 md:p-10 h-full bg-background/60 backdrop-blur-sm hover:border-white/30 transition-all duration-500">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 border border-white/20 flex items-center justify-center group-hover:border-secondary transition-colors duration-500">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>

                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
                    Join Us
                  </div>

                  <div className="text-white font-medium tracking-wide">
                    WhatsApp
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="p-3 bg-white">
                  <img
                    src={`${import.meta.env.BASE_URL}whatsapp-qr.jpg`}
                    alt="WhatsApp QR Code"
                    width={180}
                    height={180}
                    loading="lazy"
                    className="block w-44 h-44 object-contain"
                  />
                </div>

                <p className="text-white font-medium mt-5 mb-1">
                  Scan to Join
                </p>

                <p className="font-serif text-2xl text-secondary">
                  Photog Community
                </p>
              </div>

              <div className="mt-8 space-y-3">
                {[
                  'Important announcements',
                  'Event & photowalk updates',
                  'Community discussions',
                  'Photography opportunities',
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 text-sm font-light text-white/70"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>

              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 flex items-center justify-between px-6 py-4 border border-white/20 hover:border-white text-white transition-all duration-300 font-medium uppercase tracking-widest text-xs hover:bg-white/5"
              >
                <span>Join WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default JoinSection;
