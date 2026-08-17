import React, { useState } from 'react';
import { motion } from 'framer-motion';
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
        image: 'member-7.jpg',
        quote: 'Photography is the art of revealing what the eye misses in a fleeting glance.'
      },
      {
        name: 'Rishikesh',
        role: 'Head of The Cinematography Club',
        insta: 'https://www.instagram.com/era_clicks.co?igsh=OGNveWF5ZjRrc3R3',
        image: 'member-6.jpg',
        quote: 'The story behind the lens is what truly matters.'
      },
      {
        name: 'Kovid',
        role: 'Manager',
        insta: '@kovid',
        image: 'member-5.jpg',
        quote: 'The best stories are shaped with patience, vision, and a steady hand.'
      }
    ]
  },
  {
    year: '2025-2026',
    members: [
      {
        name: 'Keerti',
        role: 'Head of The Photog Club',
        insta: '@keerti',
        image: 'member-5.jpg',
        quote: 'There is magic in the darkroom that digital pixels can never replicate.'
      },
      {
        name: 'Sathvik',
        role: 'Head of The Cinematography Club',
        insta: '@sathvik',
        image: 'member-3.jpg',
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
        image: 'member-3.jpg',
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
  const [selectedYear, setSelectedYear] = useState('2026-2027');
  const currentHeads = leadership.find((group) => group.year === '2026-2027')?.members ?? [];
  const historicalGroups = leadership.filter((group) => group.year !== '2026-2027');

  const handleYearClick = (year: string) => {
    setSelectedYear(year);
    const section = document.getElementById(`year-${year.replace(/-/g, '')}`);
    section?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="members" className="py-32 bg-background border-t border-white/5">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-secondary/50 uppercase tracking-[0.3em] text-xs font-semibold mb-4">
            Community
          </h2>
          <h3 className="font-serif text-5xl md:text-6xl">Member Spotlight</h3>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {leadership.map((group) => (
            <button
              key={group.year}
              type="button"
              onClick={() => handleYearClick(group.year)}
              className={`rounded-full border px-5 py-3 text-sm uppercase tracking-[0.25em] transition-all duration-300 ${
                selectedYear === group.year
                  ? 'border-secondary bg-secondary text-background shadow-[0_0_30px_rgba(255,255,255,0.14)]'
                  : 'border-white/10 bg-white/5 text-white/80 hover:border-secondary/40 hover:text-white'
              }`}
            >
              {group.year}
            </button>
          ))}
        </div>

        <div className="mb-20 rounded-[2rem] border border-white/10 bg-white/5 p-8 md:p-12 shadow-[0_0_50px_rgba(255,255,255,0.05)]">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="max-w-xl text-center lg:text-left">
              <p className="text-secondary/70 uppercase tracking-[0.3em] text-xs font-semibold mb-4">
                Current Heads
              </p>
              <h4 className="font-serif text-4xl md:text-5xl mb-4">2026-2027</h4>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                The current leadership guiding the photography and cinematography club with creativity, vision, and collaboration.
              </p>
            </div>

            <div className="flex flex-col items-center gap-8 sm:flex-row sm:flex-wrap sm:justify-center md:gap-10">
              {currentHeads.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="relative mb-4 h-44 w-44 rounded-full border-4 border-secondary/40 p-2 shadow-[0_0_40px_rgba(255,255,255,0.08)] transition-all duration-500 hover:scale-105 md:h-56 md:w-56">
                    <img
                      src={`${import.meta.env.BASE_URL}${member.image}`}
                      alt={member.name}
                      className="h-full w-full rounded-full object-cover grayscale transition-all duration-700 hover:grayscale-0"
                    />
                  </div>
                  <h5 className="font-serif text-2xl md:text-3xl">{member.name}</h5>
                  <p className="mt-2 text-sm uppercase tracking-[0.25em] text-secondary md:text-base">{member.role}</p>
                  <div className="mt-3 h-px w-20 bg-secondary/40" />
                  <p className="mt-3 font-serif text-lg italic text-muted-foreground">“{member.quote}”</p>
                  <a
                    href={getInstaUrl(member.insta)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-2 text-xs text-secondary/80 transition hover:border-secondary/40 hover:bg-secondary/20 hover:text-white md:px-4 md:py-2.5 md:text-sm"
                  >
                    <Instagram className="h-3.5 w-3.5" />
                    <span>{getInstaHandle(member.insta)}</span>
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-12">
          {historicalGroups.map((group) => (
            <div
              key={group.year}
              id={`year-${group.year.replace(/-/g, '')}`}
            >
              <div className="mb-8 flex items-center gap-4">
                <div className="h-px flex-1 bg-white/10" />
                <h4 className="text-sm uppercase tracking-[0.35em] text-secondary/70">{group.year}</h4>
                <div className="h-px flex-1 bg-white/10" />
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                {group.members.map((member, index) => (
                  <motion.div
                    key={`${group.year}-${member.name}`}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="rounded-[1.75rem] border border-white/10 bg-background/70 p-8 md:p-10 transition-all duration-500 hover:border-secondary/40 hover:bg-white/5"
                  >
                    <div className="mb-6 flex flex-col items-center text-center">
                      <div className="h-44 w-44 shrink-0 overflow-hidden rounded-full border border-white/10 shadow-[0_0_30px_rgba(255,255,255,0.08)] transition-all duration-500 hover:scale-105 md:h-56 md:w-56">
                        <img
                          src={`${import.meta.env.BASE_URL}${member.image}`}
                          alt={member.name}
                          className="h-full w-full rounded-full object-cover grayscale transition-all duration-700 hover:grayscale-0"
                        />
                      </div>
                      <div className="mt-4">
                        <h5 className="font-serif text-2xl md:text-3xl">{member.name}</h5>
                        <p className="mt-2 text-sm uppercase tracking-[0.25em] text-secondary/80 md:text-base">{member.role}</p>
                      </div>
                    </div>

                    <div className="flex flex-col items-center text-center">
                      <a
                        href={getInstaUrl(member.insta)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mb-4 inline-flex items-center gap-2 text-xs text-secondary/80 transition hover:text-white"
                      >
                        <Instagram className="h-3.5 w-3.5" />
                        <span>{getInstaHandle(member.insta)}</span>
                      </a>

                      <p className="font-serif text-lg italic text-muted-foreground md:text-xl">“{member.quote}”</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MemberSpotlight;