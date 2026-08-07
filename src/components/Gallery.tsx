import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';

const categories = ['All', 'Portrait', 'Cityscape', 'Architecture', 'Nature', 'Street', 'Macro'];

const images = [
  { src: 'gallery-1.jpg', alt: 'Dramatic Portrait', category: 'Portrait', photographer: 'Arjun Reddy', year: '2024' },
  { src: 'gallery-2.jpg', alt: 'City Lights', category: 'Cityscape', photographer: 'Priya Sharma', year: '2024' },
  { src: 'gallery-3.jpg', alt: 'Urban Lines', category: 'Architecture', photographer: 'Karthik Rao', year: '2024' },
  { src: 'gallery-4.jpg', alt: 'Morning Bloom', category: 'Nature', photographer: 'Sneha Patel', year: '2023' },
  { src: 'gallery-5.jpg', alt: 'Fashion Study', category: 'Portrait', photographer: 'Ravi Kumar', year: '2024' },
  { src: 'gallery-6.jpg', alt: 'Street Soul', category: 'Street', photographer: 'Divya Nair', year: '2023' },
  { src: 'gallery-7.jpg', alt: 'Close Focus', category: 'Macro', photographer: 'Aditya Singh', year: '2024' },
  { src: 'gallery-8.jpg', alt: 'Geometric Forms', category: 'Architecture', photographer: 'Meera Iyengar', year: '2023' },
];

const Gallery = () => {
  const [active, setActive] = useState('All');
  const [lightbox, setLightbox] = useState<null | typeof images[0]>(null);

  const filtered = active === 'All' ? images : images.filter(img => img.category === active);

  return (
    <section id="gallery" className="py-32 bg-background border-t border-white/5">
      {/* Header */}
      <div className="container mx-auto px-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div>
            <h2 className="text-secondary/50 uppercase tracking-[0.3em] text-xs font-semibold mb-4">
              Member Works
            </h2>
            <h3 className="font-serif text-5xl md:text-7xl leading-none">
              Through<br />
              <span className="italic text-secondary">the Lens</span>
            </h3>
          </div>
          <p className="text-muted-foreground font-light max-w-sm md:text-right text-sm leading-relaxed">
            Frames captured by Photog members across MVSR's campus and beyond — stories told without words.
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap gap-2 mt-12"
        >
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 text-xs uppercase tracking-widest border transition-all duration-300 ${
                active === cat
                  ? 'bg-white text-background border-white font-semibold'
                  : 'border-white/20 text-muted-foreground hover:border-white hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>
      </div>

      {/* Featured large image */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active + '-featured'}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto px-6 mb-6"
        >
          {filtered[0] && (
            <div
              className="relative w-full h-[50vh] md:h-[65vh] overflow-hidden cursor-zoom-in group"
              onClick={() => setLightbox(filtered[0])}
            >
              <img
                src={`${import.meta.env.BASE_URL}${filtered[0].src}`}
                alt={filtered[0].alt}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-16 h-16 border border-white/60 flex items-center justify-center">
                  <ZoomIn className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 p-8">
                <span className="text-xs uppercase tracking-widest text-secondary block mb-1">{filtered[0].category}</span>
                <h4 className="font-serif text-3xl text-white mb-1">{filtered[0].alt}</h4>
                <span className="text-sm text-white/50 font-light">{filtered[0].photographer} · {filtered[0].year}</span>
              </div>
              <div className="absolute top-6 right-6 border border-white/20 px-4 py-1">
                <span className="text-xs uppercase tracking-widest text-white/70">Featured</span>
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Masonry Grid */}
      <div className="container mx-auto px-6">
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
          <AnimatePresence>
            {filtered.slice(1).map((item, index) => (
              <motion.div
                key={item.src}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: index * 0.07 }}
                className="break-inside-avoid relative group overflow-hidden bg-muted cursor-zoom-in"
                onClick={() => setLightbox(item)}
              >
                <img
                  src={`${import.meta.env.BASE_URL}${item.src}`}
                  alt={item.alt}
                  className="w-full h-auto object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-75"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-400 flex flex-col justify-between p-5">
                  <div className="flex justify-end">
                    <div className="w-8 h-8 border border-white/50 flex items-center justify-center">
                      <ZoomIn className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-secondary block mb-1">{item.category}</span>
                    <span className="font-serif text-lg text-white block">{item.alt}</span>
                    <span className="text-xs text-white/50 font-light">{item.photographer}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Stats strip */}
      <div className="container mx-auto px-6 mt-20">
        <div className="border-t border-white/10 pt-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { num: '8+', label: 'Categories' },
            { num: '120+', label: 'Shots This Year' },
            { num: '40+', label: 'Active Members' },
            { num: '5', label: 'Annual Showcases' },
          ].map(stat => (
            <div key={stat.label}>
              <div className="font-serif text-4xl text-white mb-2">{stat.num}</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-6"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative max-w-5xl w-full max-h-[90vh] flex flex-col"
              onClick={e => e.stopPropagation()}
            >
              <img
                src={`${import.meta.env.BASE_URL}${lightbox.src}`}
                alt={lightbox.alt}
                className="w-full max-h-[78vh] object-contain"
              />
              <div className="flex items-end justify-between mt-4 px-1">
                <div>
                  <span className="text-xs uppercase tracking-widest text-secondary block mb-1">{lightbox.category}</span>
                  <h4 className="font-serif text-2xl text-white">{lightbox.alt}</h4>
                  <span className="text-sm text-white/50 font-light">{lightbox.photographer} · {lightbox.year}</span>
                </div>
                <button
                  onClick={() => setLightbox(null)}
                  className="w-10 h-10 border border-white/20 flex items-center justify-center hover:border-white transition-colors"
                >
                  <X className="w-4 h-4 text-white" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
