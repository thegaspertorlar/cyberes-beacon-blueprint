
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import CyberAnimation from '@/components/CyberAnimation';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <main>
      <section id="hero" className="min-h-screen flex items-center justify-center bg-cyberes-primary relative overflow-hidden" role="banner">
        <CyberAnimation />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Label */}
            <div className="mb-6">
              <span className="text-sm font-semibold tracking-wider uppercase text-cyberes-gray-light font-inter">
                {t('hero.label')}
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight font-inter">
              {t('hero.title')}
            </h1>

          {/* Paragraph */}
          <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed text-cyberes-gray-light font-inter">
            {t('hero.description')}
          </p>

          {/* CTA Button */}
          <Button 
            size="lg" 
            className="px-8 py-4 text-lg font-semibold text-white bg-cyberes-light hover:bg-white hover:text-cyberes-primary transition-all duration-200 font-inter focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-cyberes-primary min-h-[48px] min-w-[120px] shadow-lg"
            aria-label={`${t('hero.cta')} - Get started with cyber resilience training`}
          >
            {t('hero.cta')}
          </Button>
        </div>
      </div>
    </section>
    </main>
  );
};

export default Hero;
