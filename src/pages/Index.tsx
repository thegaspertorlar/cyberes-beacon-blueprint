
import Navigation from '@/components/Navigation';
import Hero from '@/components/sections/Hero';
import TargetAudience from '@/components/sections/TargetAudience';
import Objectives from '@/components/sections/Objectives';
import PlatformPreview from '@/components/sections/PlatformPreview';
import Partners from '@/components/sections/Partners';
import Footer from '@/components/sections/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <TargetAudience />
      <Objectives />
      <PlatformPreview />
      <Partners />
      <Footer />
    </div>
  );
};

export default Index;
