import { motion } from 'framer-motion';

const stats = [
  { value: '10M+', label: 'Tasks Automated', description: 'Every single month' },
  { value: '99.9%', label: 'Uptime', description: 'Enterprise reliability' },
  { value: '500+', label: 'Integrations', description: 'Connect everything' },
  { value: '50K+', label: 'Active Users', description: 'Growing community' },
];

export const Stats = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 rounded-2xl bg-card/30 border border-border/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300"
            >
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-lg font-semibold text-foreground mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
