import { motion } from 'framer-motion';
import { Camera, Users, Award, MapPin } from 'lucide-react';

const stats = [
  {
    icon: Camera,
    value: '5,000+',
    label: 'Photos Delivered',
  },
  {
    icon: Users,
    value: '200+',
    label: 'Happy Clients',
  },
  {
    icon: Award,
    value: '8+',
    label: 'Years Experience',
  },
  {
    icon: MapPin,
    value: '50+',
    label: 'Mile Service Area',
  },
];

export default function Stats() {
  return (
    <section className="py-16 bg-jg-black border-y border-jg-gray">
      <div className="container-custom mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <IconComponent className="w-8 h-8 text-jg-gold mx-auto mb-3" />
                <p className="font-display text-3xl md:text-4xl text-jg-text mb-1">
                  {stat.value}
                </p>
                <p className="text-jg-text-secondary text-sm font-nav">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
