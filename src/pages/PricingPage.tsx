import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Pricing } from '@/components/Pricing';
import { motion } from 'framer-motion';
import { Check, Shield, Zap, HeadphonesIcon } from 'lucide-react';

const benefits = [
  {
    icon: Shield,
    title: 'Enterprise-Grade Security',
    description: 'Your data is encrypted and secure with SOC 2 compliance.',
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Optimized infrastructure for maximum performance.',
  },
  {
    icon: HeadphonesIcon,
    title: '24/7 Support',
    description: 'Our team is always here to help you succeed.',
  },
  {
    icon: Check,
    title: 'No Hidden Fees',
    description: 'Transparent pricing with no surprises.',
  },
];

const PricingPage = () => {
  return (
    <div className="relative overflow-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 relative">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-4">Pricing</p>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              Choose Your Plan
            </h1>
            <p className="text-base text-gray-400 leading-relaxed">
              Start free, scale as you grow. No credit card required.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Component */}
      <Pricing />

      {/* Benefits Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
              Why Choose Us?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-4">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PricingPage;
