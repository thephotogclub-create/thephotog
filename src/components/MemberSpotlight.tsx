import React from 'react';
import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';

const members = [
  {
    id: 1,
    name: 'Shivni',
    role: 'Head of The Photog Club',
    InstaID: '@Shivni',
    image: 'member-7.jpg',
    quote: "Photography is the art of revealing what the eye misses in a fleeting glance."
  },
  {
    id: 2,
    name: 'Rishikesh',
    role: 'Head of the Cinematography Club',
    InstaID: 'https://www.instagram.com/era_clicks.co?igsh=OGNveWF5ZjRrc3R3',
    image: 'member-6.jpg',
    quote: "The story behind the lens is what truly matters."
  },
  {
    id: 3,
    name: 'Keerti',
    role: 'Head of The Photog Club(2025-2026)',
    InstaID: '@keerti',
    image: 'member-5.jpg',
    quote: "There is magic in the darkroom that digital pixels can never replicate."
  },
  {
    id: 4,
    name: 'Sathvik',
    role: 'Head of the Cinematography Club(2025-2026)',
    InstaID: '@sathvik',
    image: 'member-3.jpg',
    quote: "There is magic in the darkroom that digital pixels can never replicate."
  },
  {
    id: 5,
    name: 'Giri Charan',
    role: 'Head of The Photog Club(2024-2025)',
    InstaID: '@giricharan',
    image: 'member-3.jpg',
    quote: "Life is a series of moments captured in time. Click, frame, and live the memory."
  },
  {
    id: 6,
    name: 'Neerajh Kumar',
    role: 'Head of The Cinematography Club(2024-2025)',
    InstaID: 'https://www.instagram.com/neeraajhkumaar?igsh=MXVzZGtlNzd4OGxhOQ==',
    image: 'member-3.jpg',
    quote: "You don't choose ART, ART chooses you"
  },
  {
    id: 7,
    name: 'Prudhvi',
    role: 'Head of The Photog Club(2023-2024)',
    InstaID: 'https://www.instagram.com/urbanwrench?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
    image: 'member-2.jpg',
    quote: "There is magic in the darkroom that digital pixels can never replicate."
  },
  {
    id: 8,
    name: 'Nitin Bitra',
    role: 'Head of The Cinematography Club(2023-2024)',
    InstaID: '@nitinbitra',
    image: 'member-3.jpg',
    quote: "There is magic in the darkroom that digital pixels can never replicate."
  }
];

const getInstaUrl = (insta: string) => {
  if (!insta) return '#';
  if (insta.startsWith('http://') || insta.startsWith('https://')) return insta;
  return `https://www.instagram.com/${insta.replace('@', '')}`;
};

const getInstaHandle = (insta: string) => {
  if (!insta) return '';
  if (insta.startsWith('http://') || insta.startsWith('https://')) {
    try {
      const url = new URL(insta);
      const handle = url.pathname.replace(/^\//, '').split('/')[0];
      return handle ? `@${handle}` : '@instagram';
    } catch {
      return '@instagram';
    }
  }
  return insta.startsWith('@') ? insta : `@${insta}`;
};

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

        {/* Mobile: horizontal scroll | md+: flex-wrap centered */}
        <div className="flex md:flex-wrap justify-start md:justify-center gap-8 lg:gap-12 overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none pb-6 md:pb-0 -mx-6 px-6 md:mx-0 md:px-0 scrollbar-hide">
          {members.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="text-center group flex-shrink-0 w-72 md:w-[calc(33.333%-2rem)] lg:w-[calc(33.333%-3rem)] max-w-sm snap-center"
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
              <div className="text-secondary text-sm tracking-widest uppercase mb-3">
                {member.role}
              </div>

              {member.InstaID && (
                <div className="mb-4">
                  <a
                    href={getInstaUrl(member.InstaID)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-secondary/80 hover:text-white transition-colors duration-300 bg-white/5 hover:bg-secondary/20 px-3.5 py-1.5 rounded-full border border-white/10 hover:border-secondary/40"
                  >
                    <Instagram className="w-3.5 h-3.5" />
                    <span>{getInstaHandle(member.InstaID)}</span>
                  </a>
                </div>
              )}

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