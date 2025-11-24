import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { LogoTicker } from '@/components/LogoTicker';
import { Features } from '@/components/Features';
import { FeatureShowcase } from '@/components/FeatureShowcase';
import { Pricing } from '@/components/Pricing';
import { Testimonials } from '@/components/Testimonials';
import { CTA } from '@/components/CTA';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Premium background with animated gradients */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-background" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
      </div>

      <Navbar />
      <Hero />
      
      {/* Premium section divider */}
      <div className="relative py-8">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-border/20 to-transparent" />
      </div>

      <LogoTicker />
      
      {/* Spacer with subtle gradient */}
      <div className="h-24 bg-gradient-to-b from-transparent to-background/50" />
      
      <Features />
      
      {/* Premium separator */}
      <div className="relative py-12">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        </div>
      </div>
      
      <FeatureShowcase />
      
      {/* Pricing section with enhanced background */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        <Pricing />
      </div>
      
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
