
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import ContactModal from '@/components/ContactModal';

const Objectives = () => {
  const { t } = useLanguage();

  const objectives = [
    {
      number: "01",
      title: t('objectives.item1.title'),
      description: t('objectives.item1.description')
    },
    {
      number: "02", 
      title: t('objectives.item2.title'),
      description: t('objectives.item2.description')
    },
    {
      number: "03",
      title: t('objectives.item3.title'),
      description: t('objectives.item3.description')
    },
    {
      number: "04",
      title: t('objectives.item4.title'),
      description: t('objectives.item4.description')
    }
  ];

  return (
    <section id="objectives" className="py-20 bg-white" aria-labelledby="objectives-heading">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Visual */}
            <div className="order-2 lg:order-1">
              <figure className="relative">
                {/* Digital Shield Animation */}
                <div className="bg-gradient-to-br from-cyberes-primary to-cyberes-light rounded-2xl p-12 text-center relative overflow-hidden" role="img" aria-label="Digital security shield with network connections representing cyber resilience">
                  <div className="relative z-10 space-y-6">
                    {/* Animated shield icon */}
                    <div className="w-24 h-24 mx-auto relative">
                      <svg viewBox="0 0 100 100" className="w-full h-full" aria-hidden="true">
                        <defs>
                          <linearGradient id="shieldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="rgba(255,255,255,0.9)" />
                            <stop offset="100%" stopColor="rgba(255,255,255,0.6)" />
                          </linearGradient>
                        </defs>
                        <path 
                          d="M50 10 L20 25 L20 60 C20 75 35 85 50 90 C65 85 80 75 80 60 L80 25 Z" 
                          fill="url(#shieldGradient)"
                          className="animate-pulse"
                        />
                        <circle cx="50" cy="50" r="8" fill="white" className="animate-ping" />
                        <circle cx="50" cy="50" r="4" fill="white" />
                      </svg>
                    </div>
                    
                    {/* Network connections */}
                    <div className="space-y-2">
                      <div className="h-1 bg-white/30 rounded-full mx-auto max-w-32 animate-pulse"></div>
                      <div className="h-1 bg-white/40 rounded-full mx-auto max-w-24 animate-pulse" style={{animationDelay: '0.5s'}}></div>
                      <div className="h-1 bg-white/30 rounded-full mx-auto max-w-40 animate-pulse" style={{animationDelay: '1s'}}></div>
                    </div>
                  </div>
                  
                  {/* Background pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-4 left-4 w-4 h-4 border border-white rounded-full animate-ping"></div>
                    <div className="absolute top-8 right-8 w-3 h-3 border border-white rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
                    <div className="absolute bottom-6 left-8 w-2 h-2 border border-white rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
                    <div className="absolute bottom-4 right-4 w-3 h-3 border border-white rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
                  </div>
                </div>
                
                {/* Caption */}
                <figcaption className="mt-6 text-center">
                  <p className="text-lg text-cyberes-gray italic font-inter">
                    {t('objectives.visual.caption')}
                  </p>
                </figcaption>
              </figure>

              {/* CTA Button */}
              <div className="mt-8 text-center">
                <ContactModal>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="px-8 py-3 text-cyberes-primary border-cyberes-primary hover:bg-cyberes-primary hover:text-white transition-colors duration-200 font-inter font-semibold"
                  >
                    {t('objectives.cta')}
                  </Button>
                </ContactModal>
              </div>
            </div>

            {/* Right Side - Objectives List */}
            <div className="order-1 lg:order-2">
              <h2 id="objectives-heading" className="text-3xl md:text-4xl font-bold text-cyberes-primary mb-8 font-inter">
                {t('objectives.title')}
              </h2>
              
              <ol className="space-y-6" role="list">
                {objectives.map((objective, index) => (
                  <li key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <span className="inline-flex items-center justify-center w-8 h-8 bg-cyberes-primary text-white text-sm font-bold rounded-full font-inter" aria-label={`Objective ${objective.number}`}>
                        {objective.number}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-cyberes-primary mb-2 font-inter">
                        {objective.title}
                      </h3>
                      <p className="text-cyberes-gray leading-relaxed font-inter">
                        {objective.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Objectives;
