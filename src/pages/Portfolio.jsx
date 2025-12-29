import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { galleryImages, categories } from '../data/gallery';

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const filteredImages =
    activeCategory === 'all'
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  const openLightbox = (image, index) => {
    setSelectedImage(image);
    setSelectedIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const goToPrevious = (e) => {
    e.stopPropagation();
    const newIndex = selectedIndex === 0 ? filteredImages.length - 1 : selectedIndex - 1;
    setSelectedIndex(newIndex);
    setSelectedImage(filteredImages[newIndex]);
  };

  const goToNext = (e) => {
    e.stopPropagation();
    const newIndex = selectedIndex === filteredImages.length - 1 ? 0 : selectedIndex + 1;
    setSelectedIndex(newIndex);
    setSelectedImage(filteredImages[newIndex]);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0">
          <img
            src="/images/landscape/smoky-mountains-sunrise-panorama.jpg"
            alt="Portfolio"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-jg-black/80 via-jg-black/70 to-jg-black" />
        </div>

        <div className="relative z-10 container-custom mx-auto px-4 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-nav text-jg-gold uppercase tracking-[0.2em] text-sm mb-4">
              Our Work
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-jg-text mb-6">
              Portfolio
            </h1>
            <p className="text-jg-text-secondary text-lg max-w-2xl mx-auto">
              Browse our collection of photography showcasing sports, commercial, events,
              portraits, real estate, aerial, and landscape work.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 md:py-24 bg-jg-black">
        <div className="container-custom mx-auto px-4 md:px-8">
          {/* Filter Tabs */}
          <motion.div
            className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 md:px-6 md:py-2.5 rounded-full font-nav text-sm transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-jg-gold text-jg-black'
                    : 'bg-jg-dark text-jg-text-secondary hover:bg-jg-gray hover:text-jg-text'
                }`}
              >
                {category.label}
              </button>
            ))}
          </motion.div>

          {/* Gallery Grid */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4"
            layout
          >
            <AnimatePresence mode="popLayout">
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="relative overflow-hidden rounded-lg cursor-pointer group aspect-square"
                  onClick={() => openLightbox(image, index)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-jg-black/80 via-jg-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-jg-gold text-xs font-nav uppercase tracking-wider mb-1">
                        {image.category}
                      </p>
                      <p className="text-jg-text text-sm line-clamp-2">{image.alt}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Image Count */}
          <motion.p
            className="text-center text-jg-text-muted mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Showing {filteredImages.length} of {galleryImages.length} images
          </motion.p>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-jg-black/95"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-jg-text hover:text-jg-gold transition-colors z-10 p-2"
              onClick={closeLightbox}
            >
              <X size={32} />
            </button>

            {/* Previous Button */}
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 text-jg-text hover:text-jg-gold transition-colors z-10 p-2 bg-jg-black/50 rounded-full"
              onClick={goToPrevious}
            >
              <ChevronLeft size={32} />
            </button>

            {/* Next Button */}
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-jg-text hover:text-jg-gold transition-colors z-10 p-2 bg-jg-black/50 rounded-full"
              onClick={goToNext}
            >
              <ChevronRight size={32} />
            </button>

            {/* Image */}
            <motion.div
              className="max-w-[90vw] max-h-[85vh] relative"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-w-full max-h-[85vh] object-contain rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-jg-black/80 to-transparent rounded-b-lg">
                <p className="text-jg-gold text-sm font-nav uppercase tracking-wider mb-1">
                  {selectedImage.category}
                </p>
                <p className="text-jg-text">{selectedImage.alt}</p>
              </div>
            </motion.div>

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-jg-text-secondary text-sm">
              {selectedIndex + 1} / {filteredImages.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
