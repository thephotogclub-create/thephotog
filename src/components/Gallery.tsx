import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight } from 'lucide-react';

const images = [
  {
    id: 1,
    src: 'gallery-1.jpg',
    alt: 'Dramatic Portrait',
    photographer: 'Arjun Reddy',
    year: '2026',
  },
  {
    id: 2,
    src: 'gallery-2.jpg',
    alt: 'City Lights',
    photographer: 'Priya Sharma',
    year: '2026',
  },
  {
    id: 3,
    src: 'gallery-3.jpg',
    alt: 'Urban Lines',
    photographer: 'Karthik Rao',
    year: '2026',
  },
  {
    id: 4,
    src: 'gallery-4.jpg',
    alt: 'Morning Bloom',
    photographer: 'Sneha Patel',
    year: '2026',
  },
  {
    id: 5,
    src: 'gallery-5.jpg',
    alt: 'Fashion Study',
    photographer: 'Ravi Kumar',
    year: '2026',
  },
  {
    id: 6,
    src: 'gallery-6.jpg',
    alt: 'Street Soul',
    photographer: 'Divya Nair',
    year: '2026',
  },
  {
    id: 7,
    src: 'gallery-7.jpg',
    alt: 'Close Focus',
    photographer: 'Aditya Singh',
    year: '2026',
  },
  {
    id: 8,
    src: 'gallery-8.jpg',
    alt: 'Geometric Forms',
    photographer: 'Meera Iyengar',
    year: '2026',
  },
  {
    id: 9,
    src: 'gallery-9.jpg',
    alt: 'Quiet Moment',
    photographer: 'Member',
    year: '2026',
  },
  {
    id: 10,
    src: 'gallery-10.jpg',
    alt: 'After Light',
    photographer: 'Member',
    year: '2026',
  },
];

const Gallery = () => {
  const [lightbox, setLightbox] = useState(null);

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

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative group cursor-pointer overflow-hidden mb-4"
          onClick={() => setLightbox(images[0])}
        >
          <div className="aspect-[16/8] md:aspect-[16/7]">
            <img
              src={`${import.meta.env.BASE_URL}${images[0].src}`}
              alt={images[0].alt}
              fetchPriority="high"
              decoding="async"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

          <div className="absolute bottom-0 left-0 p-6 md:p-10">
            <span className="text-secondary text-xs uppercase tracking-widest">
              Featured
            </span>

            <h3 className="font-serif text-3xl md:text-5xl mt-2">
              {images[0].alt}
            </h3>

            <p className="text-white/50 text-sm mt-2">
              {images[0].photographer} · {images[0].year}
            </p>
          </div>

          <div className="absolute top-6 right-6 w-10 h-10 border border-white/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
          {images.slice(1, 4).map((image, index) => (
            <PhotoCard
              key={image.id}
              image={image}
              index={index}
              onClick={() => setLightbox(image)}
            />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {images.slice(4, 6).map((image, index) => (
            <PhotoCard
              key={image.id}
              image={image}
              index={index}
              large
              onClick={() => setLightbox(image)}
            />
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.slice(6, 10).map((image, index) => (
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
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-6"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="relative max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={`${import.meta.env.BASE_URL}${lightbox.src}`}
                alt={lightbox.alt}
                className="w-full max-h-[80vh] object-contain"
              />

              <div className="flex items-end justify-between mt-5">
                <div>
                  <h3 className="font-serif text-2xl text-white">
                    {lightbox.alt}
                  </h3>

                  <p className="text-sm text-white/40 mt-1">
                    {lightbox.photographer} · {lightbox.year}
                  </p>
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

const PhotoCard = ({ image, index, large = false, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.7,
        delay: index * 0.08,
      }}
      className="relative group cursor-pointer overflow-hidden"
      onClick={onClick}
    >
      <div className={large ? 'aspect-[4/3]' : 'aspect-square'}>
        <img
          src={`${import.meta.env.BASE_URL}${image.src}`}
          alt={image.alt}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="absolute bottom-0 left-0 p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <h4 className="font-serif text-xl text-white">
          {image.alt}
        </h4>

        <p className="text-xs text-white/50 mt-1">
          {image.photographer}
        </p>
      </div>

      <span className="absolute top-4 right-4 text-xs text-white/40 font-mono">
        {String(image.id).padStart(2, '0')}
      </span>
    </motion.div>
  );
};

export default Gallery;
