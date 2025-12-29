import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone, Mail } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero/loogootee-christmas-tree-lighting-aerial.jpg"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-jg-black/85" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom mx-auto px-4 md:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-nav text-jg-gold uppercase tracking-[0.2em] text-sm mb-4">
            Ready to Get Started?
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-jg-text mb-6">
            Let's Capture Your
            <span className="text-jg-gold"> Story</span>
          </h2>
          <p className="text-jg-text-secondary text-lg max-w-2xl mx-auto mb-8">
            Whether it's a special event, business promotion, or stunning aerial views,
            we're here to bring your vision to life. Contact us today for a free quote.
          </p>

          {/* Contact Options */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a
              href="tel:+18127090053"
              className="flex items-center space-x-2 text-jg-text hover:text-jg-gold transition-colors"
            >
              <Phone size={20} className="text-jg-gold" />
              <span className="font-nav">(812) 709-0053</span>
            </a>
            <span className="hidden sm:block text-jg-text-muted">|</span>
            <a
              href="mailto:jgreene.mds@gmail.com"
              className="flex items-center space-x-2 text-jg-text hover:text-jg-gold transition-colors"
            >
              <Mail size={20} className="text-jg-gold" />
              <span className="font-nav">jgreene.mds@gmail.com</span>
            </a>
          </div>

          {/* CTA Button */}
          <Link to="/contact" className="btn-primary inline-block">
            Get Your Free Quote
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
