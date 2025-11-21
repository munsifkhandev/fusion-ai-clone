import { motion } from 'framer-motion';
import featureAnalytics from '@/assets/feature-analytics.png';
import featureWorkflow from '@/assets/feature-workflow.png';

export const FeatureShowcase = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Feature 1 - Text Left, Image Right */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs uppercase tracking-wider font-semibold mb-4">
              AI Powered
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
              Intelligent Data
              <br />
              Analysis at Scale
            </h2>
            <p className="text-base text-gray-400 mb-6 leading-relaxed">
              Let AI handle complex data analysis, generate insights, and create 
              comprehensive reports automatically. Transform raw data into actionable 
              intelligence in seconds.
            </p>
            <ul className="space-y-4">
              {['Real-time analytics', 'Predictive insights', 'Custom dashboards'].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-xl mx-auto"
          >
            <img 
              src={featureAnalytics} 
              alt="Analytics Dashboard" 
              className="rounded-2xl border border-white/10 shadow-2xl"
            />
          </motion.div>
        </div>

        {/* Feature 2 - Image Left, Text Right */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 md:order-1 max-w-xl mx-auto"
          >
            <img 
              src={featureWorkflow} 
              alt="Workflow Automation" 
              className="rounded-2xl border border-white/10 shadow-2xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 md:order-2"
          >
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs uppercase tracking-wider font-semibold mb-4">
              Automation
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
              Build Complex
              <br />
              Workflows Visually
            </h2>
            <p className="text-base text-gray-400 mb-6 leading-relaxed">
              Design sophisticated automation workflows with our intuitive visual builder. 
              Connect multiple services, add conditional logic, and deploy in minutes 
              without writing code.
            </p>
            <ul className="space-y-4">
              {['Drag & drop interface', 'Pre-built templates', 'Advanced triggers'].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                  </div>
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
