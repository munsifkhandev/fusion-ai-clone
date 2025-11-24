import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Zap, Link2, CheckCircle } from 'lucide-react';

const steps = [
  {
    number: '1.',
    title: 'Select a trigger',
    description: 'Choose an event or schedule that kicks off your workflow.',
    icon: Zap,
  },
  {
    number: '2.',
    title: 'Connect your apps',
    description: 'Sync Fusion AI with your tools—CRM, email, Slack, and more.',
    icon: Link2,
  },
  {
    number: '3.',
    title: 'Let AI do the work',
    description: 'Lets Fusion AI execute tasks automatically.',
    icon: CheckCircle,
  },
];

export const HowItWorks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-4">AI-Driven Features</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
            Automate workflows in
            <br />
            three simple steps
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative p-8 rounded-3xl border border-border/50 bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-sm hover:border-primary/50 transition-all duration-300"
            >
              {/* Gradient background effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center mb-6">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                
                <h3 className="text-xl font-bold mb-3">
                  {step.number} {step.title}
                </h3>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
