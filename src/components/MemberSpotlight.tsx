import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Instagram } from 'lucide-react';

type LeadershipMember = {
  name: string;
  role: string;
  insta: string;
  image: string;
  quote: string;
};

type YearGroup = {
  year: string;
  members: LeadershipMember[];
};

const leadership: YearGroup[] = [
  {
    year: '2026-2027',
    members: [
      {
        name: 'Shivani',
        role: 'Head of The Photog Club',
        insta: '@clickssss._',
        image: 'member-8.jpg',
        quote: 'Photography is the art of revealing what the eye misses in a fleeting glance.'
      },
      {
        name: 'Rishikesh',
        role: 'Head of The Cinematography Club',
        insta: 'https://www.instagram.com/era_clicks.co?igsh=OGNveWF5ZjRrc3R3',
        image: 'member-7.jpg',
        quote: 'The story behind the lens is what truly matters.'
      },
    ]
  },
  {
    year: '2025-2026',
    members: [
      {
        name: 'Keerti',
        role: 'Head of The Photog Club',
        insta: '@keerti',
        image: 'member-6.jpg',
        quote: 'Some moments are too beautiful to be remembered only by memory.'
      },
      {
        name: 'Sathvik',
        role: 'Head of The Cinematography Club',
        insta: '@sathvik',
        image: 'member-5.jpg',
        quote: 'There is magic in the darkroom that digital pixels can never replicate.'
      }
    ]
  },
  {
    year: '2024-2025',
    members: [
      {
        name: 'Giri Charan',
        role: 'Head of The Photog Club',
        insta: '@giricharan',
        image: 'member-4.jpg',
        quote: 'Life is a series of moments captured in time. Click, frame, and live the memory.'
      },
      {
        name: 'Neerajh Kumar',
        role: 'Head of The Cinematography Club',
        insta: 'https://www.instagram.com/neeraajhkumaar?igsh=MXVzZGtlNzd4OGxhOQ==',
        image: 'member-3.jpg',
        quote: 'You do not choose ART, ART chooses you.'
      }
    ]
  },
  {
    year: '2023-2024',
    members: [
      {
        name: 'Prudhvi',
        role: 'Head of The Photog Club',
        insta: 'https://www.instagram.com/urbanwrench?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
        image: 'member-2.jpg',
        quote: 'There is magic in the darkroom that digital pixels can never replicate.'
      },
      {
        name: 'Nithin Bitra',
        role: 'Head of The Cinematography Club',
        insta: '@bitrasn',
        image: 'bitra_anna.jpg',
        quote: 'I will, but my photos never die!\nThat will be my greatest reason.'
      }
    ]
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
  const [selectedYear, setSelectedYear] = useState<string>('2026-2027');

  const yearOptions = leadership.map((g) => g.year);
  const activeGroup = leadership.find((g) => g.year === selectedYear) || leadership[0];
  const isCurrentHeads = activeGroup.year === '2026-2027';

  return (
    <section id="members" className="py-28 md:py-36 bg-background border-t border-white/5 relative overflow-hidden">
      {/* Subtle glowing ambient background effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-secondary/60 uppercase tracking-[0.35em] text-xs font-semibold mb-4">
            Community
          </h2>
          <h3 className="font-serif text-4xl sm:text-5xl md:text-6xl tracking-tight">Member Spotlight</h3>
        </motion.div>

        {/* Filter Tabs for Year Selection */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {yearOptions.map((year) => {
            const isSelected = selectedYear === year;
            return (
              <button
                key={year}
                type="button"
                onClick={() => setSelectedYear(year)}
                className={`relative rounded-full px-6 py-3 text-xs sm:text-sm uppercase tracking-[0.25em] transition-all duration-300 ${
                  isSelected
                    ? 'bg-secondary text-background font-semibold shadow-[0_0_30px_rgba(255,255,255,0.2)] border border-secondary scale-105'
                    : 'border border-white/10 bg-white/5 text-white/70 hover:border-secondary/50 hover:text-white hover:bg-white/10'
                }`}
              >
                {year}
                {year === '2026-2027' && (
                  <span className={`ml-2 text-[10px] px-1.5 py-0.5 rounded-full ${
                    isSelected ? 'bg-background/20 text-background' : 'bg-secondary/20 text-secondary'
                  }`}>
                    Active
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Animated Single-Year Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeGroup.year}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
          >
            {/* Year Subheader */}
            <div className="text-center mb-10">
              <span className="text-secondary/70 uppercase tracking-[0.3em] text-xs font-semibold block mb-2">
                {isCurrentHeads ? 'Current Leadership' : 'Past Leadership'}
              </span>
              <h4 className="font-serif text-3xl sm:text-4xl md:text-5xl">{activeGroup.year}</h4>
            </div>

            {/* Horizontal Swipeable Cards Container */}
            <div className="flex items-stretch justify-start md:justify-center gap-6 sm:gap-8 overflow-x-auto pb-8 pt-2 -mx-6 px-6 md:mx-0 md:px-0 snap-x snap-mandatory scrollbar-hide">
              {activeGroup.members.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="snap-center shrink-0 w-[290px] sm:w-[330px] md:w-[360px] flex flex-col items-center text-center rounded-[2.25rem] border border-white/10 bg-gradient-to-b from-white/[0.07] via-white/[0.03] to-transparent p-7 sm:p-9 backdrop-blur-xl shadow-2xl transition-all duration-500 hover:border-secondary/40 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:-translate-y-1.5 group"
                >
                  {/* Circular Profile Picture with Gradient Ring */}
                  <div className="relative mb-6 h-44 w-44 sm:h-52 sm:w-52 rounded-full p-1.5 bg-gradient-to-tr from-secondary/50 via-white/20 to-secondary/30 group-hover:from-secondary group-hover:to-amber-300 transition-all duration-700 shadow-xl">
                    <div className="h-full w-full rounded-full overflow-hidden">
                      <img
                        src={`${import.meta.env.BASE_URL}${member.image}`}
                        alt={member.name}
                        className="h-full w-full rounded-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                      />
                    </div>
                  </div>

                  {/* Name & Role */}
                  <h5 className="font-serif text-2xl sm:text-3xl font-semibold text-white group-hover:text-secondary transition-colors duration-300">
                    {member.name}
                  </h5>
                  <p className="mt-1.5 text-xs sm:text-sm uppercase tracking-[0.22em] text-secondary/90 font-medium">
                    {member.role}
                  </p>

                  <div className="my-4 h-0.5 w-14 bg-gradient-to-r from-transparent via-secondary/50 to-transparent" />

                  {/* Quote */}
                  <p className="font-serif text-sm sm:text-base italic text-white/75 leading-relaxed flex-1 flex items-center justify-center my-2">
                    “{member.quote}”
                  </p>

                  {/* Instagram Link Pill */}
                  {member.insta && (
                    <a
                      href={getInstaUrl(member.insta)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-xs sm:text-sm text-white/80 transition-all duration-300 hover:border-secondary hover:bg-secondary hover:text-background hover:shadow-[0_0_25px_rgba(255,255,255,0.2)] hover:scale-105"
                    >
                      <Instagram className="h-3.5 w-3.5" />
                      <span>{getInstaHandle(member.insta)}</span>
                    </a>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default MemberSpotlight;
