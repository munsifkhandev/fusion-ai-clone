import { motion } from 'framer-motion';

const companies = [
  'Acme Corp', 'GlobalTech', 'InnovateCo', 'FutureLabs', 
  'TechVision', 'DataFlow', 'CloudBase', 'AI Systems'
];

export const LogoTicker = () => {
  return (
    <section className="py-20 border-y border-white/5">
      <div className="container mx-auto px-4">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground mb-12"
        >
          Trusted by 150,000+ users worldwide
        </motion.p>

        <div className="relative overflow-hidden">
          <motion.div
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="flex gap-16"
          >
            {[...companies, ...companies].map((company, index) => (
              <div
                key={index}
                className="flex-shrink-0 text-2xl font-bold text-muted-foreground/30 whitespace-nowrap"
              >
                {company}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
