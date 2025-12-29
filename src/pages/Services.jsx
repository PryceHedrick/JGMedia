import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { services } from '../data/services';
import { CheckCircle } from 'lucide-react';

export default function Services() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0">
          <img
            src="/images/sports/salem-speedway-cars-sunset.jpg"
            alt="Services"
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
              What We Offer
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-jg-text mb-6">
              Our Services
            </h1>
            <p className="text-jg-text-secondary text-lg max-w-2xl mx-auto">
              Comprehensive photography, videography, and drone services tailored to capture
              your unique moments and tell your story.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 md:py-24 bg-jg-black">
        <div className="container-custom mx-auto px-4 md:px-8">
          <div className="space-y-24">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={service.id}
                  id={service.id}
                  className="scroll-mt-24"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.6 }}
                >
                  <div
                    className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                      isEven ? '' : 'lg:flex-row-reverse'
                    }`}
                  >
                    {/* Image */}
                    <div className={`${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                      <div className="relative overflow-hidden rounded-lg group">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                          loading="lazy"
                        />
                        {service.badge && (
                          <div className="absolute top-4 right-4 bg-jg-gold text-jg-black px-4 py-2 rounded-full font-nav text-sm font-semibold">
                            {service.badge}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Content */}
                    <div className={`${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-12 h-12 bg-jg-gold/10 rounded-lg flex items-center justify-center">
                          <IconComponent className="w-6 h-6 text-jg-gold" />
                        </div>
                        <h2 className="font-display text-2xl md:text-3xl text-jg-text">
                          {service.title}
                        </h2>
                      </div>

                      <p className="text-jg-text-secondary text-lg mb-6 leading-relaxed">
                        {service.description}
                      </p>

                      {/* Features */}
                      <ul className="space-y-3 mb-8">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-center space-x-3">
                            <CheckCircle className="w-5 h-5 text-jg-gold flex-shrink-0" />
                            <span className="text-jg-text-secondary">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <Link to="/contact" className="btn-primary">
                        Get a Quote
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-jg-dark">
        <div className="container-custom mx-auto px-4 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl md:text-4xl text-jg-text mb-4">
              Need a Custom Package?
            </h2>
            <p className="text-jg-text-secondary text-lg max-w-2xl mx-auto mb-8">
              We offer flexible packages tailored to your specific needs. Contact us to discuss
              your project and get a personalized quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary">
                Contact Us
              </Link>
              <Link to="/portfolio" className="btn-secondary">
                View Our Work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
