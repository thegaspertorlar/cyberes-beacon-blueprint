
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
                {/* Enhanced Cyber Resilience Visualization */}
                <div className="bg-gradient-to-br from-cyberes-primary via-cyberes-light to-cyberes-lighter rounded-2xl p-16 text-center relative overflow-hidden" role="img" aria-label="Advanced cybersecurity network with real-time threat detection and protection systems">
                  {/* Animated background elements */}
                  <div className="absolute inset-0 opacity-20">
                    {/* Scanning lines */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent">
                      <div className="w-full h-full animate-pulse" style={{animationDelay: '0s'}}></div>
                    </div>
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent">
                      <div className="w-full h-full animate-pulse" style={{animationDelay: '1s'}}></div>
                    </div>
                    
                    {/* Corner elements */}
                    <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-white opacity-60"></div>
                    <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-white opacity-60"></div>
                    <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-white opacity-60"></div>
                    <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-white opacity-60"></div>
                    
                    {/* Floating particles */}
                    <div className="absolute top-12 left-12 w-2 h-2 bg-white rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
                    <div className="absolute top-20 right-16 w-1.5 h-1.5 bg-white rounded-full animate-ping" style={{animationDelay: '1.5s'}}></div>
                    <div className="absolute bottom-16 left-20 w-2.5 h-2.5 bg-white rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
                    <div className="absolute bottom-12 right-12 w-1 h-1 bg-white rounded-full animate-ping" style={{animationDelay: '0.8s'}}></div>
                  </div>
                  
                  <div className="relative z-10 space-y-8">
                    {/* Central shield with enhanced design */}
                    <div className="w-32 h-32 mx-auto relative">
                      <svg viewBox="0 0 120 120" className="w-full h-full" aria-hidden="true">
                        <defs>
                          <radialGradient id="enhancedShieldGradient" cx="50%" cy="30%" r="70%">
                            <stop offset="0%" stopColor="rgba(255,255,255,1)" />
                            <stop offset="50%" stopColor="rgba(255,255,255,0.9)" />
                            <stop offset="100%" stopColor="rgba(255,255,255,0.6)" />
                          </radialGradient>
                          <filter id="glow">
                            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                            <feMerge> 
                              <feMergeNode in="coloredBlur"/>
                              <feMergeNode in="SourceGraphic"/>
                            </feMerge>
                          </filter>
                        </defs>
                        
                        {/* Outer protective ring */}
                        <circle cx="60" cy="60" r="45" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="2" strokeDasharray="8,4" filter="url(#glow)">
                          <animateTransform 
                            attributeName="transform" 
                            origin="60 60"
                            type="rotate" 
                            values="0;360" 
                            dur="10s" 
                            repeatCount="indefinite"
                          />
                        </circle>
                        
                        {/* Main shield body */}
                        <path 
                          d="M60 15 L25 35 L25 75 C25 90 42.5 100 60 105 C77.5 100 95 90 95 75 L95 35 Z" 
                          fill="url(#enhancedShieldGradient)"
                          stroke="rgba(255,255,255,0.8)"
                          strokeWidth="1.5"
                          filter="url(#glow)"
                        >
                          <animate attributeName="opacity" values="0.8;1;0.8" dur="2.5s" repeatCount="indefinite" />
                        </path>
                        
                        {/* Central security core */}
                        <circle cx="60" cy="60" r="12" fill="white" opacity="0.9">
                          <animate attributeName="r" values="10;15;10" dur="3s" repeatCount="indefinite" />
                          <animate attributeName="opacity" values="0.7;1;0.7" dur="3s" repeatCount="indefinite" />
                        </circle>
                        
                        {/* Lock symbol */}
                        <rect x="56" y="57" width="8" height="8" rx="1" fill="rgba(4,14,76,0.8)" />
                        <circle cx="60" cy="53" r="3" fill="none" stroke="rgba(4,14,76,0.8)" strokeWidth="2" />
                        
                        {/* Data streams */}
                        <line x1="30" y1="50" x2="90" y2="50" stroke="rgba(255,255,255,0.6)" strokeWidth="1" strokeDasharray="4,2">
                          <animate attributeName="stroke-dashoffset" values="0;12" dur="2s" repeatCount="indefinite" />
                        </line>
                        <line x1="30" y1="70" x2="90" y2="70" stroke="rgba(255,255,255,0.6)" strokeWidth="1" strokeDasharray="4,2">
                          <animate attributeName="stroke-dashoffset" values="0;12" dur="1.5s" repeatCount="indefinite" />
                        </line>
                      </svg>
                    </div>
                    
                    {/* Enhanced network visualization */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-center space-x-2">
                        <div className="h-1 bg-white/40 rounded-full w-12 animate-pulse"></div>
                        <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
                        <div className="h-1 bg-white/40 rounded-full w-16 animate-pulse" style={{animationDelay: '0.3s'}}></div>
                        <div className="w-2 h-2 bg-white rounded-full animate-ping" style={{animationDelay: '0.6s'}}></div>
                        <div className="h-1 bg-white/40 rounded-full w-10 animate-pulse" style={{animationDelay: '0.9s'}}></div>
                      </div>
                      <div className="flex items-center justify-center space-x-2">
                        <div className="h-1 bg-white/30 rounded-full w-8 animate-pulse" style={{animationDelay: '0.5s'}}></div>
                        <div className="w-1.5 h-1.5 bg-white/70 rounded-full animate-ping" style={{animationDelay: '0.8s'}}></div>
                        <div className="h-1 bg-white/30 rounded-full w-20 animate-pulse" style={{animationDelay: '1.1s'}}></div>
                        <div className="w-1.5 h-1.5 bg-white/70 rounded-full animate-ping" style={{animationDelay: '1.4s'}}></div>
                        <div className="h-1 bg-white/30 rounded-full w-14 animate-pulse" style={{animationDelay: '1.7s'}}></div>
                      </div>
                    </div>
                    
                    {/* Status indicators */}
                    <div className="flex justify-center space-x-6">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                        <span className="text-white/80 text-sm font-inter">SECURE</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-white rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                        <span className="text-white/80 text-sm font-inter">ACTIVE</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-white rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                        <span className="text-white/80 text-sm font-inter">PROTECTED</span>
                      </div>
                    </div>
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
