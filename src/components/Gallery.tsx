import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight } from 'lucide-react';

const images = [
  {
    id: 1,
    src: 'gal-1.jpeg',
    alt: 'Nitin Bitra',
  },
  {
    id: 2,
    src: 'gal-2.jpg',
    alt: 'Neerajh Kumar',
  },
  {
    id: 3,
    src: 'gal-3.jpg',
    alt: 'Keerti Kolla',
  },
  {
    id: 4,
    src: 'gal-4.jpg',
    alt: 'Swachatha',
  },
  {
    id: 5,
    src: 'gal-5.jpg',
    alt: 'Shivani Sama',
  },
  {
    id: 6,
    src: 'gal-6.jpg',
    alt: 'Kovid Reddy',
  },
  {
    id: 7,
    src: 'gal-7.jpeg',
    alt: 'Sri Harsha',
  },
  {
    id: 8,
    src: 'gal-8.jpg',
    alt: 'Kovid Reddy',
  },
  {
    id: 9,
    src: 'gal-9.PNG',
    alt: 'Bhadri',
  },
  {
    id: 10,
    src: 'gal-10.jpg',
    alt: 'Rishikesh',
  },
  {
    id: 11,
    src: 'gal-11.jpg',
    alt: 'Rishikesh',
  },
];

const Gallery = () => {
  const [lightbox, setLightbox] = useState<any>(null);

  return (
    <section
      id="gallery"
      className="py-32 bg-background border-t border-white/5"
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16"
        >
          <div>
            <span className="text-secondary/60 uppercase tracking-[0.3em] text-xs font-semibold block mb-5">
              Member Works
            </span>

            <h2 className="font-serif text-5xl md:text-7xl leading-[0.9]">
              Through
              <br />
              <span className="italic text-secondary">
                the Lens
              </span>
            </h2>
          </div>

          <p className="text-muted-foreground font-light max-w-sm md:text-right text-sm leading-relaxed">
            A selection of our favourite frames, captured by the people
            who make Photog what it is.
          </p>
        </motion.div>

        {/* Masonry layout preserving natural aspect ratios */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((image, index) => (
            <PhotoCard
              key={image.id}
              image={image}
              index={index}
              onClick={() => setLightbox(image)}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 pt-8 border-t border-white/10 text-center"
        >
          <p className="font-serif italic text-xl md:text-2xl text-white/70">
            Different people. Different perspectives. Different stories.
          </p>
        </motion.div>
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-10"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="relative max-w-5xl w-full flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={`${import.meta.env.BASE_URL}${lightbox.src}`}
                alt={lightbox.alt}
                className="w-auto h-auto max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
              />

              <div className="flex items-end justify-between w-full mt-5">
                <div>
                  <h3 className="font-serif text-2xl text-white">
                    {lightbox.alt}
                  </h3>

                  <p className="text-sm text-white/50 mt-1">
                    {lightbox.photographer} · {lightbox.year}
                  </p>
                </div>

                <button
                  onClick={() => setLightbox(null)}
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-white transition-colors bg-white/10 backdrop-blur-md"
                >
                  <X className="w-5 h-5 text-white" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

const PhotoCard = ({ image, index, onClick }: { image: any; index: number; onClick: () => void }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.7,
        delay: index * 0.05,
      }}
      className="break-inside-avoid mb-6 w-full inline-block relative group cursor-pointer overflow-hidden rounded-xl bg-white/5 border border-white/10 shadow-lg"
      onClick={onClick}
    >
      <div className="w-full h-auto overflow-hidden">
        <img
          src={`${import.meta.env.BASE_URL}${image.src}`}
          alt={image.alt}
          loading="lazy"
          decoding="async"
          className="w-full h-auto block transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      <div className="absolute bottom-0 left-0 right-0 p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none flex justify-between items-end">
        <div>
          <h4 className="font-serif text-xl text-white">
            {image.alt}
          </h4>
          <p className="text-xs text-white/60 mt-1">
            {image.photographer} · {image.year}
          </p>
        </div>

        <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
          <ArrowUpRight className="w-4 h-4 text-white" />
        </div>
      </div>

      <span className="absolute top-4 right-4 text-xs text-white/80 font-mono bg-black/50 backdrop-blur-md px-2 py-1 rounded border border-white/10">
        {String(image.id).padStart(2, '0')}
      </span>
    </motion.div>
  );
};

export default Gallery;
