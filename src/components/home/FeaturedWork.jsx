import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { featuredImages } from '../../data/gallery';

export default function FeaturedWork() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="section-padding bg-jg-dark">
      <div className="container-custom mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-nav text-jg-gold uppercase tracking-[0.2em] text-sm mb-3">
            Our Portfolio
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-jg-text mb-4">
            Featured Work
          </h2>
          <p className="text-jg-text-secondary max-w-2xl mx-auto">
            A glimpse of our recent projects showcasing our diverse range of photography
            and videography services.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {featuredImages.map((image, index) => (
            <motion.div
              key={image.id}
              className={`relative overflow-hidden rounded-lg cursor-pointer group ${
                index === 0 ? 'col-span-2 row-span-2' : ''
              }`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 ${
                  index === 0 ? 'aspect-square' : 'aspect-square'
                }`}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-jg-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-jg-text text-sm font-nav capitalize">
                    {image.category}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Link */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <Link to="/portfolio" className="btn-primary">
            View Full Portfolio
          </Link>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-jg-black/95 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-jg-text hover:text-jg-gold transition-colors z-10"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>
            <motion.img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
