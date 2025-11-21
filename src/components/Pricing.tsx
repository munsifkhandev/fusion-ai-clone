import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: { monthly: 29, yearly: 290 },
    description: 'Perfect for individuals and small teams',
    features: [
      '1,000 tasks per month',
      '5 active workflows',
      'Basic integrations',
      'Email support',
      '30-day history',
    ],
  },
  {
    name: 'Pro',
    price: { monthly: 99, yearly: 990 },
    description: 'For growing teams and businesses',
    features: [
      '10,000 tasks per month',
      'Unlimited workflows',
      'Advanced integrations',
      'Priority support',
      'Unlimited history',
      'Custom AI models',
      'Team collaboration',
    ],
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: { monthly: 299, yearly: 2990 },
    description: 'For large organizations',
    features: [
      'Unlimited tasks',
      'Unlimited workflows',
      'All integrations',
      'Dedicated support',
      'Custom SLAs',
      'Advanced security',
      'On-premise deployment',
    ],
  },
];

export const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section className="py-32 relative" id="pricing">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Choose the perfect plan for your needs
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-4 p-1 rounded-full bg-secondary">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                !isYearly ? 'bg-primary text-background' : 'text-muted-foreground'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                isYearly ? 'bg-primary text-background' : 'text-muted-foreground'
              }`}
            >
              Yearly <span className="text-xs">(Save 20%)</span>
            </button>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative rounded-3xl p-8 ${
                plan.highlighted
                  ? 'border-2 border-primary bg-card'
                  : 'border border-white/10 bg-card/50'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-background text-sm font-semibold">
                  Most Popular
                </div>
              )}

              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-muted-foreground mb-6">{plan.description}</p>

              <div className="mb-8">
                <span className="text-5xl font-bold">
                  ${isYearly ? plan.price.yearly : plan.price.monthly}
                </span>
                <span className="text-muted-foreground">
                  /{isYearly ? 'year' : 'month'}
                </span>
              </div>

              <Button
                className={`w-full mb-8 ${
                  plan.highlighted
                    ? 'bg-primary hover:bg-primary/90 text-background'
                    : 'bg-secondary hover:bg-secondary/80'
                }`}
              >
                Get Started
              </Button>

              <ul className="space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
