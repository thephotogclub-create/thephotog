import React from 'react';
import { ExternalLink, Sparkles, ArrowRight, FileText } from 'lucide-react';

export interface AnnouncementItem {
  id: string;
  text: string;
  badge?: string;
  type: 'activity' | 'form' | 'external';
  target: string; // section id like '#activities' or URL 'https://forms.google.com/...'
}

const defaultAnnouncements: AnnouncementItem[] = [
  {
    id: '1',
    text: 'Event Registration Form is now OPEN — Click here to fill out the Google Form!',
    badge: 'GOOGLE FORM',
    type: 'form',
    target: 'https://docs.google.com/forms/d/e/1FAIpQLScGDchqUnQ-4Qm4TuohLG_uZxffTbOUnp0y4N1LMmdzXMOz2Q/viewform?usp=publish-editor'
  },
  {
    id: '2',
    text: 'Event Registration Form is now OPEN — Click here to fill out the Google Form!',
    badge: 'GOOGLE FORM',
    type: 'form',
    target: 'https://docs.google.com/forms/d/e/1FAIpQLScGDchqUnQ-4Qm4TuohLG_uZxffTbOUnp0y4N1LMmdzXMOz2Q/viewform?usp=publish-editor'
  },
  {
    id: '3',
    text: 'Event Registration Form is now OPEN — Click here to fill out the Google Form!',
    badge: 'GOOGLE FORM',
    type: 'form',
    target: 'https://docs.google.com/forms/d/e/1FAIpQLScGDchqUnQ-4Qm4TuohLG_uZxffTbOUnp0y4N1LMmdzXMOz2Q/viewform?usp=publish-editor'
  },
  {
    id: '4',
    text: 'Event Registration Form is now OPEN — Click here to fill out the Google Form!',
    badge: 'GOOGLE FORM',
    type: 'form',
    target: 'https://docs.google.com/forms/d/e/1FAIpQLScGDchqUnQ-4Qm4TuohLG_uZxffTbOUnp0y4N1LMmdzXMOz2Q/viewform?usp=publish-editor'
  }
  
];

interface AnnouncementTickerProps {
  announcements?: AnnouncementItem[];
}

export const AnnouncementTicker: React.FC<AnnouncementTickerProps> = ({
  announcements = defaultAnnouncements
}) => {
  const handleItemClick = (e: React.MouseEvent, item: AnnouncementItem) => {
    e.preventDefault();

    if (item.type === 'activity' || item.target === 'activities' || item.target === '#activities') {
      const element = document.getElementById('activities');
      if (element) {
        const navHeight = 90;
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - navHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    } else {
      // Form or external link
      window.open(item.target, '_blank', 'noopener,noreferrer');
    }
  };

  // Duplicate items for continuous marquee scroll
  const marqueeItems = [...announcements, ...announcements, ...announcements];

  return (
    <div className="w-full bg-gradient-to-r from-[#20050c] via-[#2a0812] to-[#20050c] border-b border-yellow-500/30 text-yellow-300 py-2 overflow-hidden shadow-inner select-none relative z-50">
      <div className="flex items-center">
        {/* Left static badge */}
        <div className="hidden sm:flex items-center gap-1.5 px-3 py-0.5 ml-3 bg-yellow-400/10 border border-yellow-400/30 rounded-full shrink-0 z-10 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-yellow-300 shadow-[0_0_10px_rgba(250,204,21,0.2)]">
          <span>Announcements</span>
        </div>

        {/* Ticker marquee container */}
        <div className="relative flex-1 overflow-hidden group">
          <div className="animate-marquee flex items-center whitespace-nowrap gap-8 sm:gap-12 pl-4">
            {marqueeItems.map((item, idx) => (
              <button
                key={`${item.id}-${idx}`}
                onClick={(e) => handleItemClick(e, item)}
                type="button"
                className="inline-flex items-center gap-2 group/item cursor-pointer text-xs sm:text-sm font-semibold tracking-wide text-yellow-300 hover:text-yellow-100 hover:underline underline-offset-4 transition-all duration-200">

                {/* bg color for announcement badge */}
                {item.badge && (
                  <span className="px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-wider rounded bg-yellow-400 text-black shadow-sm group-hover/item:scale-105 transition-transform">
                    {item.badge}
                  </span>
                )}
                
                {/* Announcement text in crisp white with yellow hover highlight */}
                <span className="font-medium text-white group-hover/item:text-yellow-300 transition-colors">
                  {item.text}
                </span>
                {/* Icon and seperaator dots */}
                {item.type === 'activity' ? (
                  <ArrowRight className="w-3.5 h-3.5 text-yellow-400 group-hover/item:translate-x-1 transition-transform" />
                ) : (
                  <ExternalLink className="w-3.5 h-3.5 text-yellow-400 group-hover/item:scale-110 transition-transform" />
                )}
                
                <span className="text-yellow-500/50 ml-4 font-normal">•</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementTicker;
