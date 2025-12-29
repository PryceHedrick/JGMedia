import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Camera } from 'lucide-react';

const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

const serviceLinks = [
  { name: 'Sports Photography', path: '/services#sports' },
  { name: 'Commercial', path: '/services#commercial' },
  { name: 'Real Estate', path: '/services#realestate' },
  { name: 'Drone Services', path: '/services#aerial' },
  { name: 'Event Coverage', path: '/services#events' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-jg-dark border-t border-jg-gray">
      <div className="container-custom mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-3 mb-4">
              <img
                src="/images/brand/jg-media-logo.jpg"
                alt="JG Media"
                className="h-14 w-14 rounded-full object-cover"
              />
              <span className="font-display text-2xl text-jg-gold">JG Media</span>
            </Link>
            <p className="text-jg-text-secondary text-sm leading-relaxed mb-6">
              Professional photography, videography, and FAA-certified drone services
              serving Southern Indiana and beyond.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-jg-text-secondary hover:text-jg-gold transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-jg-text-secondary hover:text-jg-gold transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg text-jg-text mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-jg-text-secondary hover:text-jg-gold transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-lg text-jg-text mb-4">Services</h4>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-jg-text-secondary hover:text-jg-gold transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg text-jg-text mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+18127090053"
                  className="flex items-center space-x-3 text-jg-text-secondary hover:text-jg-gold transition-colors text-sm"
                >
                  <Phone size={16} className="text-jg-gold" />
                  <span>(812) 709-0053</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:jgreene.mds@gmail.com"
                  className="flex items-center space-x-3 text-jg-text-secondary hover:text-jg-gold transition-colors text-sm"
                >
                  <Mail size={16} className="text-jg-gold" />
                  <span>jgreene.mds@gmail.com</span>
                </a>
              </li>
              <li>
                <div className="flex items-start space-x-3 text-jg-text-secondary text-sm">
                  <MapPin size={16} className="text-jg-gold mt-0.5" />
                  <span>
                    Loogootee, Indiana 47553
                    <br />
                    Serving Southern Indiana
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-jg-gray mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-jg-text-muted text-sm">
            &copy; {currentYear} JG Media. All rights reserved.
          </p>
          <div className="flex items-center space-x-2 text-jg-text-muted text-sm">
            <Camera size={14} className="text-jg-gold" />
            <span>Capturing moments in Southern Indiana</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
