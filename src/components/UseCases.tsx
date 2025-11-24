import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Headphones, Heart, TrendingUp, BookOpen, DollarSign } from 'lucide-react';

const useCases = [
  { icon: Headphones, label: 'Customer Support' },
  { icon: Heart, label: 'Healthcare' },
  { icon: TrendingUp, label: 'Marketing' },
  { icon: BookOpen, label: 'Education' },
  { icon: DollarSign, label: 'Finance' },
];

export const UseCases = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-16 relative" ref={ref}>
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-6"
        >
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4, scale: 1.05 }}
              className="flex flex-col items-center justify-center p-6 rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm min-w-[140px] hover:border-primary/50 transition-all duration-300 cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center mb-3">
                <useCase.icon className="w-6 h-6 text-primary" />
              </div>
              <span className="text-sm font-medium text-center">{useCase.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
