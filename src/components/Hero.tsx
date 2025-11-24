import { Button } from '@/components/ui/button';
import { ChevronRight, Sparkles } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,hsl(217,91%,20%),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_100%,hsl(25,95%,15%),transparent_50%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8 group cursor-pointer hover:border-primary/50 transition-all duration-300">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">SUPERCHARGE YOUR AI WORKFLOWS</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-tight">
            Automate Your
            <br />
            <span className="gradient-text inline-block">
              AI Workflows
            </span>
            <br />
            with AI Agent
          </h1>

          {/* Subtitle */}
          <p className="text-base md:text-lg text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            Connect your favorite apps, set triggers and watch AI handle the rest — no coding required. 
            Get up and running in minutes.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-background font-semibold text-lg px-8 group hover-glow shadow-lg"
            >
              Get Started - Free
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white/20 hover:bg-white/5 text-lg px-8 hover:border-primary/50 transition-all duration-300"
            >
              View Pricing
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};