import { motion } from 'framer-motion';
import featureAnalytics from '@/assets/feature-analytics.png';
import featureWorkflow from '@/assets/feature-workflow.png';

export const FeatureShowcase = () => {
  return (
    <section className="py-32">
      <div className="container mx-auto px-4">
        {/* Feature 1 - Text Left, Image Right */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-6">
              AI Powered
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Intelligent Data
              <br />
              Analysis at Scale
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
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
          >
            <img 
              src={featureAnalytics} 
              alt="Analytics Dashboard" 
              className="rounded-2xl border border-white/10 shadow-2xl"
            />
          </motion.div>
        </div>

        {/* Feature 2 - Image Left, Text Right */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 md:order-1"
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
            <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
              Automation
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Build Complex
              <br />
              Workflows Visually
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
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
