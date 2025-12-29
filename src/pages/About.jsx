import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Camera, Award, Heart, MapPin, Plane, Users } from 'lucide-react';

const values = [
  {
    icon: Heart,
    title: 'Passion',
    description:
      'We love what we do. Every shoot is an opportunity to create something beautiful and meaningful.',
  },
  {
    icon: Award,
    title: 'Quality',
    description:
      'We never compromise on quality. From equipment to editing, we deliver professional results.',
  },
  {
    icon: Users,
    title: 'Community',
    description:
      'We\'re proud to serve our local community and capture the moments that matter most.',
  },
];

const capabilities = [
  'Professional DSLR & Mirrorless Cameras',
  'FAA Part 107 Certified Drone Pilot',
  'Professional Lighting Equipment',
  'High-Quality Video Production',
  'Advanced Photo Editing Software',
  'VHS to Digital Conversion Equipment',
];

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0">
          <img
            src="/images/landscape/overlook-park-golden-hour-autumn.jpg"
            alt="About JG Media"
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
              Our Story
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-jg-text mb-6">
              About JG Media
            </h1>
            <p className="text-jg-text-secondary text-lg max-w-2xl mx-auto">
              A passion for photography and a love for our community drives everything we do.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 md:py-24 bg-jg-black">
        <div className="container-custom mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                <img
                  src="/images/commercial/restaurant-team-group-photo.jpg"
                  alt="JG Media Team"
                  className="w-full rounded-lg"
                />
                <div className="absolute -bottom-6 -right-6 bg-jg-gold p-6 rounded-lg hidden md:block">
                  <p className="font-display text-3xl text-jg-black">8+</p>
                  <p className="text-jg-black font-nav text-sm">Years Experience</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="font-nav text-jg-gold uppercase tracking-[0.2em] text-sm mb-3">
                Who We Are
              </p>
              <h2 className="font-display text-3xl md:text-4xl text-jg-text mb-6">
                Capturing Southern Indiana's Stories
              </h2>
              <div className="space-y-4 text-jg-text-secondary leading-relaxed">
                <p>
                  JG Media was founded by Jason Greene and Stephanie Gilbert with a simple mission:
                  to provide professional, high-quality photography and videography services to our
                  local community and beyond.
                </p>
                <p>
                  Based in Loogootee, Indiana, we've had the privilege of capturing countless
                  memories—from thrilling high school basketball games to stunning aerial views of
                  our beautiful Southern Indiana landscape.
                </p>
                <p>
                  As an FAA Part 107 certified drone operator, we bring a unique perspective to
                  every project. Whether it's real estate photography, community events, or
                  commercial work, we combine technical expertise with a genuine passion for
                  storytelling.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-16 md:py-24 bg-jg-dark">
        <div className="container-custom mx-auto px-4 md:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-nav text-jg-gold uppercase tracking-[0.2em] text-sm mb-3">
              The Team
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-jg-text mb-4">
              Meet Jason & Stephanie
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              className="bg-jg-gray rounded-lg p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-24 h-24 bg-jg-gold/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Camera className="w-12 h-12 text-jg-gold" />
              </div>
              <h3 className="font-display text-xl text-jg-text mb-2">Jason Greene</h3>
              <p className="text-jg-gold font-nav text-sm mb-3">Lead Photographer & Drone Pilot</p>
              <p className="text-jg-text-secondary text-sm">
                FAA Part 107 certified, Jason brings years of experience in sports photography,
                aerial imaging, and commercial work. His eye for action and detail ensures every
                shot tells a story.
              </p>
            </motion.div>

            <motion.div
              className="bg-jg-gray rounded-lg p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="w-24 h-24 bg-jg-gold/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Camera className="w-12 h-12 text-jg-gold" />
              </div>
              <h3 className="font-display text-xl text-jg-text mb-2">Stephanie Gilbert</h3>
              <p className="text-jg-gold font-nav text-sm mb-3">Photographer & Creative Director</p>
              <p className="text-jg-text-secondary text-sm">
                Stephanie's creative vision and attention to detail shine through in every project.
                From portraits to events, she captures the moments that matter with warmth and
                professionalism.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 md:py-24 bg-jg-black">
        <div className="container-custom mx-auto px-4 md:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-nav text-jg-gold uppercase tracking-[0.2em] text-sm mb-3">
              What Drives Us
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-jg-text">Our Values</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="w-16 h-16 bg-jg-gold/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-jg-gold" />
                  </div>
                  <h3 className="font-display text-xl text-jg-text mb-3">{value.title}</h3>
                  <p className="text-jg-text-secondary">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-16 md:py-24 bg-jg-dark">
        <div className="container-custom mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center space-x-3 mb-4">
                <MapPin className="w-6 h-6 text-jg-gold" />
                <p className="font-nav text-jg-gold uppercase tracking-[0.2em] text-sm">
                  Service Area
                </p>
              </div>
              <h2 className="font-display text-3xl md:text-4xl text-jg-text mb-6">
                Proudly Serving Southern Indiana
              </h2>
              <p className="text-jg-text-secondary mb-6">
                Based in Loogootee, Indiana (Martin County), we serve clients throughout
                Southern Indiana and are available for travel within a 50-100 mile radius.
                This includes areas such as:
              </p>
              <ul className="grid grid-cols-2 gap-2 text-jg-text-secondary">
                {[
                  'Martin County',
                  'Daviess County',
                  'Dubois County',
                  'Lawrence County',
                  'Orange County',
                  'Pike County',
                  'Spencer County',
                  'Washington County',
                ].map((area, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-jg-gold rounded-full" />
                    <span>{area}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="/images/aerial/trinity-springs-mustering-elm-park-aerial.jpg"
                alt="Southern Indiana Aerial View"
                className="w-full rounded-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Equipment & Capabilities */}
      <section className="py-16 md:py-24 bg-jg-black">
        <div className="container-custom mx-auto px-4 md:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Plane className="w-6 h-6 text-jg-gold" />
              <p className="font-nav text-jg-gold uppercase tracking-[0.2em] text-sm">
                Our Capabilities
              </p>
            </div>
            <h2 className="font-display text-3xl md:text-4xl text-jg-text">
              Professional Equipment & Expertise
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {capabilities.map((capability, index) => (
              <motion.div
                key={index}
                className="flex items-center space-x-3 bg-jg-dark p-4 rounded-lg"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <span className="w-2 h-2 bg-jg-gold rounded-full flex-shrink-0" />
                <span className="text-jg-text-secondary">{capability}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-jg-dark border-t border-jg-gray">
        <div className="container-custom mx-auto px-4 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl md:text-4xl text-jg-text mb-4">
              Ready to Work Together?
            </h2>
            <p className="text-jg-text-secondary text-lg max-w-2xl mx-auto mb-8">
              We'd love to hear about your project. Get in touch and let's create something amazing.
            </p>
            <Link to="/contact" className="btn-primary">
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
