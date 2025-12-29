import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero/loogootee-fireworks-aerial-night.jpg"
          alt="Fireworks over Loogootee"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-jg-black/70 via-jg-black/50 to-jg-black" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom mx-auto px-4 md:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Logo */}
          <motion.img
            src="/images/brand/jg-media-logo.jpg"
            alt="JG Media"
            className="w-24 h-24 md:w-32 md:h-32 mx-auto rounded-full mb-6 shadow-2xl"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />

          {/* Tagline */}
          <motion.p
            className="font-nav text-jg-gold uppercase tracking-[0.3em] text-sm mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Loogootee, Indiana
          </motion.p>

          {/* Main Heading */}
          <motion.h1
            className="font-display text-4xl md:text-6xl lg:text-7xl text-jg-text mb-6 text-shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Capturing Your
            <span className="block text-jg-gold">Moments</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-jg-text-secondary text-lg md:text-xl max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            Professional photography, videography, and FAA-certified drone services
            serving Southern Indiana.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <Link to="/portfolio" className="btn-primary">
              View Our Work
            </Link>
            <Link to="/contact" className="btn-secondary">
              Get a Quote
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown className="text-jg-gold w-8 h-8" />
        </motion.div>
      </motion.div>
    </section>
  );
}
