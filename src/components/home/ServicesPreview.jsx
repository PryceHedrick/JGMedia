import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { featuredServices } from '../../data/services';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function ServicesPreview() {
  return (
    <section className="section-padding bg-jg-black">
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
            What We Offer
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-jg-text mb-4">
            Our Services
          </h2>
          <p className="text-jg-text-secondary max-w-2xl mx-auto">
            From high-action sports photography to stunning aerial views, we offer
            comprehensive visual services for every need.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {featuredServices.map((service) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="group"
              >
                <Link
                  to={`/services#${service.id}`}
                  className="block card-dark h-full"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-jg-gold/10 rounded-lg flex items-center justify-center group-hover:bg-jg-gold/20 transition-colors">
                      <IconComponent className="w-6 h-6 text-jg-gold" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-xl text-jg-text mb-2 group-hover:text-jg-gold transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-jg-text-secondary text-sm">
                        {service.shortDescription}
                      </p>
                      {service.badge && (
                        <span className="inline-block mt-3 px-3 py-1 bg-jg-gold/20 text-jg-gold text-xs font-nav rounded-full">
                          {service.badge}
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* View All Link */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <Link
            to="/services"
            className="inline-flex items-center text-jg-gold hover:text-jg-gold-light font-nav text-sm uppercase tracking-wider transition-colors"
          >
            View All Services
            <svg
              className="ml-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
