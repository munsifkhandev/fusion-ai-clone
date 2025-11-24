import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const companies = [
  'Acme Corp', 'GlobalTech', 'InnovateCo', 'FutureLabs', 
  'TechVision', 'DataFlow', 'CloudBase', 'AI Systems'
];

export const LogoTicker = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="py-20 border-y border-white/5 overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center text-muted-foreground mb-12"
        >
          Trusted by 150,000+ users worldwide
        </motion.p>

        <div className="relative overflow-hidden">
          {/* Gradient masks on sides */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
          
          <motion.div
            animate={{ x: ['0%', '-50%'] }}
            transition={{ 
              duration: 30, 
              repeat: Infinity, 
              ease: 'linear' 
            }}
            className="flex gap-16"
          >
            {[...companies, ...companies].map((company, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1, color: 'hsl(0, 0%, 70%)' }}
                transition={{ duration: 0.2 }}
                className="flex-shrink-0 text-2xl font-bold text-muted-foreground/30 whitespace-nowrap cursor-pointer"
              >
                {company}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
