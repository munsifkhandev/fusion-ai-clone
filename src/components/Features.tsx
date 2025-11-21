import { motion } from 'framer-motion';
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

export const Features = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-4">AI-Driven Features</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
            Build, scale and manage
            <br />
            entire AI workforce
          </h2>
          <p className="text-base text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Fusion AI helps you tackle data bottlenecks, streamline analysis, 
            and make smarter decisions with ease.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="group relative rounded-3xl border border-white/10 bg-card/50 backdrop-blur-sm p-8 overflow-hidden hover:border-primary/50 transition-all duration-300"
            >
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-sm text-gray-400 mb-6 leading-relaxed">{feature.description}</p>
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="rounded-xl border border-white/10 w-full opacity-80 group-hover:opacity-100 transition-opacity"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
