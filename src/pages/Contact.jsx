import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Facebook, Send, CheckCircle } from 'lucide-react';

const contactInfo = [
  {
    icon: Phone,
    label: 'Phone',
    value: '(812) 709-0053',
    href: 'tel:+18127090053',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'jgreene.mds@gmail.com',
    href: 'mailto:jgreene.mds@gmail.com',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Loogootee, Indiana 47553',
    href: null,
  },
  {
    icon: Clock,
    label: 'Availability',
    value: 'Mon-Sat: 8am - 8pm',
    href: null,
  },
];

const serviceOptions = [
  'Sports Photography',
  'Commercial/Business',
  'Event Coverage',
  'Portrait Photography',
  'Real Estate Photography',
  'Drone/Aerial Services',
  'Videography',
  'VHS to Digital',
  'Print Sales',
  'Other',
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulating form submission - replace with actual Formspree endpoint
    // In production, use: action="https://formspree.io/f/YOUR_FORM_ID"
    try {
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      }
    } catch (error) {
      console.error('Form submission error:', error);
    }

    setIsSubmitting(false);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0">
          <img
            src="/images/events/christmas-parade-santa-frosty-float.jpg"
            alt="Contact JG Media"
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
              Get in Touch
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-jg-text mb-6">
              Contact Us
            </h1>
            <p className="text-jg-text-secondary text-lg max-w-2xl mx-auto">
              Ready to capture your special moments? We'd love to hear from you.
              Get in touch for a free quote.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-jg-black">
        <div className="container-custom mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-3xl text-jg-text mb-6">
                Let's Start a Conversation
              </h2>
              <p className="text-jg-text-secondary mb-8">
                Whether you need sports photography, drone services, or commercial work,
                we're here to help bring your vision to life. Reach out and let's discuss
                your project.
              </p>

              {/* Contact Details */}
              <div className="space-y-6 mb-8">
                {contactInfo.map((item, index) => {
                  const IconComponent = item.icon;
                  const content = (
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-jg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-5 h-5 text-jg-gold" />
                      </div>
                      <div>
                        <p className="text-jg-text-muted text-sm font-nav uppercase tracking-wider mb-1">
                          {item.label}
                        </p>
                        <p className="text-jg-text">{item.value}</p>
                      </div>
                    </div>
                  );

                  return item.href ? (
                    <a
                      key={index}
                      href={item.href}
                      className="block hover:opacity-80 transition-opacity"
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={index}>{content}</div>
                  );
                })}
              </div>

              {/* Social Links */}
              <div className="border-t border-jg-gray pt-8">
                <p className="text-jg-text-muted text-sm font-nav uppercase tracking-wider mb-4">
                  Follow Us
                </p>
                <div className="flex space-x-4">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-jg-dark rounded-lg flex items-center justify-center text-jg-text-secondary hover:bg-jg-gold hover:text-jg-black transition-all"
                  >
                    <Facebook size={20} />
                  </a>
                </div>
              </div>

              {/* Service Area Note */}
              <div className="mt-8 p-4 bg-jg-dark rounded-lg border border-jg-gray">
                <p className="text-jg-text-secondary text-sm">
                  <span className="text-jg-gold font-semibold">Service Area:</span> We primarily
                  serve Southern Indiana within a 50-100 mile radius of Loogootee. Travel fees
                  may apply for locations outside this area.
                </p>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-jg-dark rounded-lg p-6 md:p-8">
                <h3 className="font-display text-2xl text-jg-text mb-6">
                  Request a Free Quote
                </h3>

                {isSubmitted ? (
                  <motion.div
                    className="text-center py-12"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                  >
                    <CheckCircle className="w-16 h-16 text-jg-gold mx-auto mb-4" />
                    <h4 className="font-display text-xl text-jg-text mb-2">
                      Thank You!
                    </h4>
                    <p className="text-jg-text-secondary">
                      We've received your message and will get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="btn-secondary mt-6"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name */}
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-jg-text-secondary text-sm mb-2"
                      >
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-jg-gray border border-jg-gray rounded-lg px-4 py-3 text-jg-text placeholder-jg-text-muted focus:border-jg-gold focus:outline-none transition-colors"
                        placeholder="John Doe"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-jg-text-secondary text-sm mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-jg-gray border border-jg-gray rounded-lg px-4 py-3 text-jg-text placeholder-jg-text-muted focus:border-jg-gold focus:outline-none transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-jg-text-secondary text-sm mb-2"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-jg-gray border border-jg-gray rounded-lg px-4 py-3 text-jg-text placeholder-jg-text-muted focus:border-jg-gold focus:outline-none transition-colors"
                        placeholder="(555) 123-4567"
                      />
                    </div>

                    {/* Service */}
                    <div>
                      <label
                        htmlFor="service"
                        className="block text-jg-text-secondary text-sm mb-2"
                      >
                        Service Interested In *
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full bg-jg-gray border border-jg-gray rounded-lg px-4 py-3 text-jg-text focus:border-jg-gold focus:outline-none transition-colors"
                      >
                        <option value="">Select a service...</option>
                        {serviceOptions.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-jg-text-secondary text-sm mb-2"
                      >
                        Tell Us About Your Project *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full bg-jg-gray border border-jg-gray rounded-lg px-4 py-3 text-jg-text placeholder-jg-text-muted focus:border-jg-gold focus:outline-none transition-colors resize-none"
                        placeholder="Please describe your project, event date, location, and any other details..."
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary w-full flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <span>Sending...</span>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send size={18} />
                        </>
                      )}
                    </button>

                    <p className="text-jg-text-muted text-xs text-center">
                      We'll respond within 24 hours. Your information is never shared.
                    </p>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
