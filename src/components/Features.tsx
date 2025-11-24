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

const FeatureCard = ({ feature }: { feature: typeof features[0] }) => {
  return (
    <div className="group relative rounded-2xl border border-white/10 bg-card/50 backdrop-blur-sm p-5 overflow-hidden hover:border-primary/50 transition-all duration-500 hover-lift">
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center mb-4 shadow-lg">
          <feature.icon className="w-5 h-5 text-primary" />
        </div>
        
        <h3 className="text-lg font-bold mb-2 group-hover:gradient-text transition-all duration-300">
          {feature.title}
        </h3>
        
        <p className="text-xs text-gray-400 mb-4 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
          {feature.description}
        </p>
        
        <div>
          <img 
            src={feature.image} 
            alt={feature.title}
            className="rounded-lg border border-white/10 w-full opacity-80 group-hover:opacity-100 transition-all duration-500 shadow-md group-hover:shadow-xl"
          />
        </div>
      </div>

      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  );
};

export const Features = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-4">
            AI-Driven Features
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
            Build, scale and manage
            <br />
            <span className="gradient-text">entire AI workforce</span>
          </h2>
          <p className="text-base text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Fusion AI helps you tackle data bottlenecks, streamline analysis, 
            and make smarter decisions with ease.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-6xl mx-auto">
          {features.map((feature) => (
            <FeatureCard key={feature.title} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};