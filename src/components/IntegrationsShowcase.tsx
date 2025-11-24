import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Slack as SlackIcon, 
  MessageSquare, 
  Mail,
  Calendar,
  Database,
  FileText,
  Zap,
  Users
} from 'lucide-react';
import { Button } from './ui/button';

const apps = [
  { icon: SlackIcon, name: 'Slack' },
  { icon: MessageSquare, name: 'Teams' },
  { icon: Mail, name: 'Gmail' },
  { icon: Calendar, name: 'Calendar' },
  { icon: Database, name: 'HubSpot' },
  { icon: FileText, name: 'Notion' },
  { icon: Zap, name: 'Zapier' },
  { icon: Users, name: 'Salesforce' },
];

export const IntegrationsShowcase = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 relative overflow-hidden" ref={ref}>
      {/* Decorative gradient orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-[120px] opacity-30" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-4">Powerful Integrations</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
            Seamlessly <span className="gradient-text">Integrate</span>
            <br />
            Every App
          </h2>
        </motion.div>

        {/* Circular app icons layout */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full max-w-3xl mx-auto h-[400px] mb-12"
        >
          {apps.map((app, index) => {
            const angle = (index / apps.length) * 2 * Math.PI;
            const radius = 180;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;

            return (
              <motion.div
                key={app.name}
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.2, zIndex: 10 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                style={{
                  transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                }}
              >
                <div className="w-16 h-16 rounded-2xl bg-card/80 backdrop-blur-sm border border-border/50 flex items-center justify-center hover:border-primary/50 transition-all duration-300 shadow-lg">
                  <app.icon className="w-8 h-8 text-primary" />
                </div>
              </motion.div>
            );
          })}

          {/* Center glow effect */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center"
        >
          <Button size="lg" variant="outline" className="rounded-full">
            Explore All
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
