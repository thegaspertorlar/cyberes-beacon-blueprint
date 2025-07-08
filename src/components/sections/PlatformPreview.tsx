
import { Button } from '@/components/ui/button';

const PlatformPreview = () => {
  return (
    <section id="platform-preview" className="py-20 bg-gradient-to-r from-cyberes-primary to-cyan-600">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            A multilingual, AI-powered cyber resilience platform
          </h2>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-white/90 mb-12 font-medium">
            Learn safely. Learn smart.
          </p>
          
          {/* CTA Button */}
          <Button 
            variant="outline" 
            size="lg"
            className="px-8 py-4 text-lg font-semibold text-white border-2 border-white bg-transparent hover:bg-white hover:text-cyberes-primary transition-all duration-200"
          >
            GO TO PLATFORM
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PlatformPreview;
