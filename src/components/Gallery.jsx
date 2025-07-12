import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiX, FiChevronLeft, FiChevronRight } = FiIcons;

const galleryImages = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    caption: 'Young love at the university library, 1984',
    year: '1984'
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    caption: 'Our wedding day - September 15, 1984',
    year: '1984'
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    caption: 'First apartment on Maple Street',
    year: '1986'
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1544776527-59c5a8b0f3a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    caption: 'Sarah\'s first steps in our living room',
    year: '1989'
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1566004100631-35d015d6a491?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    caption: 'Family vacation to the mountains',
    year: '1995'
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    caption: 'Our dream house on Willow Creek',
    year: '1995'
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    caption: 'Dancing at Sarah\'s wedding',
    year: '2015'
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1476703993599-0035a21b17a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    caption: 'Meeting our granddaughter Emma',
    year: '2018'
  },
  {
    id: 9,
    src: 'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    caption: 'Recent photo at the vineyard',
    year: '2024'
  }
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % galleryImages.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(galleryImages[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    setCurrentIndex(prevIndex);
    setSelectedImage(galleryImages[prevIndex]);
  };

  return (
    <section className="py-20 bg-white dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-serif font-light text-slate-800 dark:text-pearl-100 mb-4">
            Through the Years
          </h2>
          <p className="text-lg text-slate-600 dark:text-pearl-300 font-light max-w-2xl mx-auto">
            A visual journey through four decades of love, laughter, and precious moments.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => openLightbox(image, index)}
            >
              <div className="relative overflow-hidden rounded-lg bg-pearl-100 dark:bg-slate-700 aspect-square">
                <img
                  src={image.src}
                  alt={image.caption}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="text-sm font-medium mb-1">{image.year}</div>
                    <div className="text-xs opacity-90">{image.caption}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
              onClick={closeLightbox}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="relative max-w-4xl max-h-[90vh] w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={selectedImage.src}
                  alt={selectedImage.caption}
                  className="w-full h-full object-contain rounded-lg"
                />
                
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                  <div className="text-champagne-400 font-medium mb-1">{selectedImage.year}</div>
                  <div className="text-white text-lg">{selectedImage.caption}</div>
                </div>

                <button
                  onClick={closeLightbox}
                  className="absolute top-4 right-4 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                >
                  <SafeIcon icon={FiX} className="w-6 h-6" />
                </button>

                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                >
                  <SafeIcon icon={FiChevronLeft} className="w-6 h-6" />
                </button>

                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                >
                  <SafeIcon icon={FiChevronRight} className="w-6 h-6" />
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Gallery;