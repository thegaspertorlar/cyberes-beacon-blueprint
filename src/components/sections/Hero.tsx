
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#040E4C' }}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Label */}
          <div className="mb-6">
            <span className="text-sm font-semibold tracking-wider uppercase" style={{ color: '#D9D9D9' }}>
              CYBERES
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            Secure Your Digital Future
          </h1>

          {/* Paragraph */}
          <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed" style={{ color: '#D9D9D9' }}>
            CybeRes provides enterprise-grade cybersecurity solutions that protect your business 
            from evolving threats while ensuring seamless operations and comprehensive security coverage.
          </p>

          {/* CTA Button */}
          <Button 
            size="lg" 
            className="px-8 py-4 text-lg font-semibold text-white transition-all duration-200 hover:opacity-90"
            style={{ backgroundColor: '#28A745' }}
          >
            EXPLORE THE PLATFORM
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
