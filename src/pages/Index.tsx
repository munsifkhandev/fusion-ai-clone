import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Premium background with gradients */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-background" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />
      </div>

      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
};

export default Index;
