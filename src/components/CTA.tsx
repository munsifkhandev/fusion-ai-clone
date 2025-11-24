import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight, Sparkles } from 'lucide-react';

export const CTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 relative overflow-hidden" ref={ref}>
      {/* Animated background gradients */}
      <motion.div 
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(217,91%,20%),transparent_70%)]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,hsl(25,95%,15%),transparent_60%)]"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.95 }}
          transition={{ 
            duration: 0.8, 
            ease: [0.22, 1, 0.36, 1] 
          }}
          className="max-w-3xl mx-auto text-center rounded-3xl border border-white/10 bg-card/30 backdrop-blur-xl p-12 hover-lift relative overflow-hidden group"
        >
          {/* Floating particles */}
          <motion.div
            className="absolute top-10 left-10 w-2 h-2 bg-primary rounded-full"
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-10 right-10 w-2 h-2 bg-accent rounded-full"
            animate={{
              y: [0, 20, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />

          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ delay: 0.3, duration: 0.5, type: "spring" }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6"
          >
            <Sparkles className="w-8 h-8 text-primary animate-pulse-slow" />
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold mb-4 tracking-tight"
          >
            Ready to Transform
            <br />
            <span className="gradient-text">Your Workflow?</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-base text-gray-400 mb-8 leading-relaxed"
          >
            Join thousands of teams already automating with AI
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-background font-semibold text-lg px-8 group hover-glow"
              >
                Start Free Trial
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white/20 hover:bg-white/5 text-lg px-8 hover:border-primary/50 transition-all duration-300"
              >
                Schedule Demo
              </Button>
            </motion.div>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="text-sm text-muted-foreground mt-6"
          >
            No credit card required • 14-day free trial
          </motion.p>

          {/* Shine effect on hover */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
