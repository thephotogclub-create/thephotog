import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, MessageCircle, ExternalLink, ArrowRight } from 'lucide-react';

// Replace these with actual club handles/links
const INSTAGRAM_HANDLE = '@photog.mvsr';
const INSTAGRAM_URL = 'https://www.instagram.com/photog.mvsr';
const WHATSAPP_LINK = 'https://chat.whatsapp.com/photogmvsr'; // Replace with real invite link

const JoinSection = () => {
  return (
    <section id="join" className="py-32 bg-card relative overflow-hidden border-t border-white/10">
      <div className="grain opacity-20 absolute inset-0" />

      {/* Decorative lines */}
      <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent" />
      <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-secondary/50 uppercase tracking-[0.3em] text-xs font-semibold mb-4">
            Connect With Us
          </h2>
          <h3 className="font-serif text-5xl md:text-7xl mb-6 leading-none">
            Join the<br />
            <span className="italic text-secondary">Community</span>
          </h3>
          <p className="text-muted-foreground font-light max-w-lg mx-auto text-lg">
            Be part of MVSR College's most passionate photography community. Follow us on Instagram or scan to join our WhatsApp group.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">

          {/* Instagram Card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div className="border border-white/10 p-10 h-full flex flex-col gap-8 bg-background/60 backdrop-blur-sm hover:border-white/30 transition-all duration-500">
              {/* Icon */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 border border-white/20 flex items-center justify-center group-hover:border-secondary transition-colors duration-500">
                  <Instagram className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Follow Us</div>
                  <div className="text-white font-medium text-lg tracking-wide">Instagram</div>
                </div>
              </div>

              {/* Handle */}
              <div className="flex-1">
                <div className="font-serif text-4xl md:text-5xl text-secondary leading-none mb-4">
                  {INSTAGRAM_HANDLE}
                </div>
                <p className="text-muted-foreground font-light text-sm leading-relaxed">
                  Behind-the-scenes shots, member showcases, event announcements and daily visual inspiration from the Photog community at MVSR.
                </p>
              </div>

              {/* Fake preview grid */}
              <div className="grid grid-cols-3 gap-1.5">
                {['gallery-1.jpg', 'gallery-3.jpg', 'gallery-5.jpg'].map((img, i) => (
                  <div key={i} className="aspect-square overflow-hidden bg-muted">
                    <img
                      src={`${import.meta.env.BASE_URL}${img}`}
                      alt="Instagram preview"
                      className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-500"
                    />
                  </div>
                ))}
              </div>

              {/* CTA */}
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between px-6 py-4 bg-white text-background hover:bg-secondary transition-colors duration-300 font-medium uppercase tracking-widest text-xs"
              >
                <span>Follow on Instagram</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* WhatsApp Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative group"
          >
            <div className="border border-white/10 p-10 h-full flex flex-col gap-8 bg-background/60 backdrop-blur-sm hover:border-white/30 transition-all duration-500">
              {/* Icon */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 border border-white/20 flex items-center justify-center group-hover:border-secondary transition-colors duration-500">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Join Group</div>
                  <div className="text-white font-medium text-lg tracking-wide">WhatsApp</div>
                </div>
              </div>

              {/* QR Code */}
              <div className="flex-1 flex flex-col items-center justify-center gap-6 py-4">
                <div className="relative p-4 bg-white">
                  <img
                    src={`https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(WHATSAPP_LINK)}&color=1a0005&bgcolor=ffffff`}
                    alt="WhatsApp QR Code"
                    width={180}
                    height={180}
                    className="block"
                  />
                </div>
                <div className="text-center">
                  <p className="text-white font-medium mb-1 tracking-wide">Scan to Join</p>
                  <p className="text-muted-foreground font-light text-xs uppercase tracking-widest">
                    Point your camera at the QR code
                  </p>
                </div>
              </div>

              {/* Perks */}
              <ul className="space-y-3">
                {[
                  'Event reminders & photo walk updates',
                  'Peer feedback & critique threads',
                  'Gear tips from fellow members',
                ].map((perk, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-light text-white/70">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0" />
                    {perk}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between px-6 py-4 border border-white/20 hover:border-white text-white transition-all duration-300 font-medium uppercase tracking-widest text-xs hover:bg-white/5"
              >
                <span>Open WhatsApp Link</span>
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
