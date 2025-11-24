import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Sparkles, Zap, Workflow, MessageSquare } from 'lucide-react';
import featureWorkflow from '@/assets/feature-workflow.png';
import featureChat from '@/assets/feature-chat.png';

const features = [
  {
    icon: Sparkles,
    title: 'Seamless Integrations',
    description: 'Integrate Slack, HubSpot, Zendesk & more—automate data flow instantly.',
    image: featureWorkflow,
  },
  {
    icon: MessageSquare,
    title: 'Conversational Actions',
    description: 'Create records, assign tasks & queue emails with a simple prompt in seconds flat.',
    image: featureChat,
  },
  {
    icon: Workflow,
    title: 'Visual Workflow Designer',
    description: 'Drag & drop AI actions to build workflows visually— no coding required.',
    image: featureWorkflow,
  },
  {
    icon: Zap,
    title: 'Multi‑Channel Automation',
    description: 'Trigger email, SMS & chat messages automatically on schedule.',
    image: featureChat,
  },
];

const FeatureCard = ({ feature, index }: { feature: typeof features[0], index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ 
        duration: 0.7, 
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1]
      }}
      whileHover={{ 
        y: -8,
        transition: { duration: 0.3 }
      }}
      className="group relative rounded-3xl border border-white/10 bg-card/50 backdrop-blur-sm p-8 overflow-hidden hover:border-primary/50 transition-all duration-500 hover-lift"
    >
      {/* Animated gradient overlay on hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      />
      
      <div className="relative z-10">
        <motion.div 
          whileHover={{ rotate: 360, scale: 1.1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="w-12 h-12 rounded-2xl bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center mb-6 shadow-lg"
        >
          <feature.icon className="w-6 h-6 text-primary" />
        </motion.div>
        
        <h3 className="text-xl font-bold mb-3 group-hover:gradient-text transition-all duration-300">
          {feature.title}
        </h3>
        
        <p className="text-sm text-gray-400 mb-6 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
          {feature.description}
        </p>
        
        <motion.div
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.3 }}
        >
          <img 
            src={feature.image} 
            alt={feature.title}
            className="rounded-xl border border-white/10 w-full opacity-80 group-hover:opacity-100 transition-all duration-500 shadow-lg group-hover:shadow-2xl"
          />
        </motion.div>
      </div>

      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
};

export const Features = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <motion.p 
            className="text-sm uppercase tracking-widest text-primary font-semibold mb-4"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            AI-Driven Features
          </motion.p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
            Build, scale and manage
            <br />
            <span className="gradient-text">entire AI workforce</span>
          </h2>
          <p className="text-base text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Fusion AI helps you tackle data bottlenecks, streamline analysis, 
            and make smarter decisions with ease.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
