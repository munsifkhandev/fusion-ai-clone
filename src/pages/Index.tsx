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
      <Navbar />
      <Hero />
      <LogoTicker />
      <Features />
      <FeatureShowcase />
      <Pricing />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
