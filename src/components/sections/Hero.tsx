
import { ArrowRight, Shield, Lock, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center bg-gradient-to-br from-white to-cyberes-gray-lighter pt-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-cyberes-primary/10 rounded-full text-cyberes-primary text-sm font-medium mb-8 animate-fade-in">
            <Shield className="w-4 h-4 mr-2" />
            Advanced Cybersecurity Solutions
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-cyberes-primary mb-6 leading-tight animate-fade-in">
            Secure Your
            <span className="block bg-gradient-to-r from-cyberes-primary to-cyberes-light bg-clip-text text-transparent">
              Digital Future
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-cyberes-gray max-w-3xl mx-auto mb-8 animate-fade-in">
            CybeRes provides enterprise-grade cybersecurity solutions that protect your business 
            from evolving threats while ensuring seamless operations.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in">
            <Button 
              size="lg" 
              className="bg-cyberes-primary hover:bg-cyberes-light text-white px-8 py-3 text-lg font-semibold transition-all duration-200 transform hover:scale-105"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-cyberes-primary text-cyberes-primary hover:bg-cyberes-primary hover:text-white px-8 py-3 text-lg font-semibold transition-all duration-200"
            >
              Watch Demo
            </Button>
          </div>

          {/* Feature Icons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto animate-fade-in">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-cyberes-primary/10 rounded-full flex items-center justify-center mb-4">
                <Shield className="w-8 h-8 text-cyberes-primary" />
              </div>
              <h3 className="font-semibold text-cyberes-primary mb-2">Advanced Protection</h3>
              <p className="text-cyberes-gray text-sm">Multi-layered security architecture</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-cyberes-primary/10 rounded-full flex items-center justify-center mb-4">
                <Eye className="w-8 h-8 text-cyberes-primary" />
              </div>
              <h3 className="font-semibold text-cyberes-primary mb-2">Real-time Monitoring</h3>
              <p className="text-cyberes-gray text-sm">24/7 threat detection and response</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-cyberes-primary/10 rounded-full flex items-center justify-center mb-4">
                <Lock className="w-8 h-8 text-cyberes-primary" />
              </div>
              <h3 className="font-semibold text-cyberes-primary mb-2">Zero Trust Security</h3>
              <p className="text-cyberes-gray text-sm">Never trust, always verify approach</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
