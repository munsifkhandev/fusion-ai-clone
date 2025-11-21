import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

export const CTA = () => {
  return (
    <section className="py-32 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(217,91%,20%),transparent_70%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center rounded-3xl border border-white/10 bg-card/30 backdrop-blur-xl p-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready to Transform
            <br />
            Your Workflow?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join thousands of teams already automating with AI
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-background font-semibold text-lg px-8 group"
            >
              Start Free Trial
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white/20 hover:bg-white/5 text-lg px-8"
            >
              Schedule Demo
            </Button>
          </div>

          <p className="text-sm text-muted-foreground mt-6">
            No credit card required • 14-day free trial
          </p>
        </motion.div>
      </div>
    </section>
  );
};
