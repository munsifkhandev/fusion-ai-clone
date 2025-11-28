import { Button } from '@/components/ui/button';
import { ChevronRight, Sparkles, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroDashboard from '@/assets/hero-dashboard.png';

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
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight leading-tight">
            Automate Your
            <br />
            <span className="gradient-text inline-block">
              AI Workflows
            </span>
            <br />
            with AI Agent
          </h1>

          {/* Subtitle */}
          <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Connect your favorite apps, set triggers and watch AI handle the rest — no coding required. 
            Get up and running in minutes.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/waitlist">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-background font-semibold text-lg px-8 group hover-glow shadow-lg"
              >
                Get Started - Free
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </Link>
            <Link to="/pricing">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white/20 hover:bg-white/5 text-lg px-8 hover:border-primary/50 transition-all duration-300"
              >
                View Pricing
              </Button>
            </Link>
          </div>
          
          {/* Watch Demo Link */}
          <div className="flex items-center justify-center gap-2 mb-16">
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center cursor-pointer hover:bg-primary/30 transition-colors">
              <Play className="w-4 h-4 text-primary fill-primary" />
            </div>
            <span className="text-muted-foreground text-sm cursor-pointer hover:text-foreground transition-colors">
              Watch 2-min demo
            </span>
          </div>
          
          {/* Dashboard Preview */}
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 pointer-events-none" />
            <div className="relative rounded-2xl overflow-hidden border border-border/50 shadow-2xl shadow-primary/10">
              <img 
                src={heroDashboard} 
                alt="Fusion AI Dashboard" 
                className="w-full h-auto"
              />
              {/* Glow effect behind image */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/20 to-accent/20 blur-3xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};