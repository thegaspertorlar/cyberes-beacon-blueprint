
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
                {/* Advanced Cyber Resilience Visualization */}
                <div className="bg-gradient-to-br from-cyberes-primary via-cyberes-light to-cyberes-lighter rounded-2xl p-20 text-center relative overflow-hidden" role="img" aria-label="Advanced cybersecurity digital fortress with multi-layered protection systems">
                  {/* Dynamic background matrix */}
                  <div className="absolute inset-0 opacity-25">
                    {/* Digital grid matrix */}
                    <div className="absolute inset-0" style={{
                      backgroundImage: `
                        linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                      `,
                      backgroundSize: '20px 20px'
                    }}>
                      <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                    </div>
                    
                    {/* Scanning beams */}
                    <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white to-transparent animate-pulse"></div>
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white to-transparent animate-pulse" style={{animationDelay: '1s'}}></div>
                    <div className="absolute left-0 top-0 w-0.5 h-full bg-gradient-to-b from-transparent via-white to-transparent animate-pulse" style={{animationDelay: '0.5s'}}></div>
                    <div className="absolute right-0 top-0 w-0.5 h-full bg-gradient-to-b from-transparent via-white to-transparent animate-pulse" style={{animationDelay: '1.5s'}}></div>
                    
                    {/* Corner detection frames */}
                    <div className="absolute top-6 left-6 w-12 h-12 border-l-3 border-t-3 border-white opacity-70"></div>
                    <div className="absolute top-6 right-6 w-12 h-12 border-r-3 border-t-3 border-white opacity-70"></div>
                    <div className="absolute bottom-6 left-6 w-12 h-12 border-l-3 border-b-3 border-white opacity-70"></div>
                    <div className="absolute bottom-6 right-6 w-12 h-12 border-r-3 border-b-3 border-white opacity-70"></div>
                    
                    {/* Floating data nodes */}
                    <div className="absolute top-16 left-16 w-3 h-3 bg-white rounded-full animate-ping" style={{animationDelay: '0.2s'}}></div>
                    <div className="absolute top-24 right-20 w-2 h-2 bg-white/70 rounded-full animate-ping" style={{animationDelay: '1.2s'}}></div>
                    <div className="absolute bottom-20 left-24 w-4 h-4 bg-white/80 rounded-full animate-ping" style={{animationDelay: '1.8s'}}></div>
                    <div className="absolute bottom-16 right-16 w-2.5 h-2.5 bg-white rounded-full animate-ping" style={{animationDelay: '0.7s'}}></div>
                  </div>
                  
                  <div className="relative z-10 space-y-10">
                    {/* Enhanced digital fortress shield */}
                    <div className="w-40 h-40 mx-auto relative">
                      <svg viewBox="0 0 140 140" className="w-full h-full" aria-hidden="true">
                        <defs>
                          <radialGradient id="fortressShield" cx="50%" cy="30%" r="80%">
                            <stop offset="0%" stopColor="rgba(255,255,255,1)" />
                            <stop offset="40%" stopColor="rgba(255,255,255,0.95)" />
                            <stop offset="80%" stopColor="rgba(255,255,255,0.7)" />
                            <stop offset="100%" stopColor="rgba(255,255,255,0.5)" />
                          </radialGradient>
                          <filter id="fortressGlow">
                            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                            <feMerge> 
                              <feMergeNode in="coloredBlur"/>
                              <feMergeNode in="SourceGraphic"/>
                            </feMerge>
                          </filter>
                          <linearGradient id="dataStream" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="rgba(255,255,255,0)" />
                            <stop offset="50%" stopColor="rgba(255,255,255,0.8)" />
                            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
                          </linearGradient>
                        </defs>
                        
                        {/* Outer defense perimeter */}
                        <circle cx="70" cy="70" r="55" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="3" strokeDasharray="12,6" filter="url(#fortressGlow)">
                          <animateTransform 
                            attributeName="transform" 
                            origin="70 70"
                            type="rotate" 
                            values="0;360" 
                            dur="12s" 
                            repeatCount="indefinite"
                          />
                        </circle>
                        
                        {/* Secondary defense ring */}
                        <circle cx="70" cy="70" r="42" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="2" strokeDasharray="8,4">
                          <animateTransform 
                            attributeName="transform" 
                            origin="70 70"
                            type="rotate" 
                            values="360;0" 
                            dur="8s" 
                            repeatCount="indefinite"
                          />
                        </circle>
                        
                        {/* Active scanning ring */}
                        <circle cx="70" cy="70" r="32" fill="none" stroke="rgba(255,255,255,0.8)" strokeWidth="1.5">
                          <animate attributeName="r" values="28;36;28" dur="3s" repeatCount="indefinite" />
                          <animate attributeName="opacity" values="0.5;1;0.5" dur="3s" repeatCount="indefinite" />
                        </circle>
                        
                        {/* Main fortress shield */}
                        <path 
                          d="M70 20 L30 40 L30 85 C30 105 50 115 70 120 C90 115 110 105 110 85 L110 40 Z" 
                          fill="url(#fortressShield)"
                          stroke="rgba(255,255,255,0.9)"
                          strokeWidth="2.5"
                          filter="url(#fortressGlow)"
                        >
                          <animate attributeName="opacity" values="0.9;1;0.9" dur="2s" repeatCount="indefinite" />
                        </path>
                        
                        {/* Central security core */}
                        <circle cx="70" cy="70" r="16" fill="white" opacity="0.95">
                          <animate attributeName="r" values="14;18;14" dur="2.5s" repeatCount="indefinite" />
                          <animate attributeName="opacity" values="0.8;1;0.8" dur="2.5s" repeatCount="indefinite" />
                        </circle>
                        
                        {/* Advanced lock mechanism */}
                        <rect x="64" y="66" width="12" height="12" rx="2" fill="rgba(4,14,76,0.9)" />
                        <circle cx="70" cy="60" r="4.5" fill="none" stroke="rgba(4,14,76,0.9)" strokeWidth="2.5" />
                        
                        {/* Data flow streams */}
                        <line x1="35" y1="55" x2="105" y2="55" stroke="url(#dataStream)" strokeWidth="2">
                          <animate attributeName="stroke-dashoffset" values="0;20" dur="1.5s" repeatCount="indefinite" />
                        </line>
                        <line x1="35" y1="75" x2="105" y2="75" stroke="url(#dataStream)" strokeWidth="2">
                          <animate attributeName="stroke-dashoffset" values="0;20" dur="1.8s" repeatCount="indefinite" />
                        </line>
                        <line x1="35" y1="95" x2="105" y2="95" stroke="url(#dataStream)" strokeWidth="1.5">
                          <animate attributeName="stroke-dashoffset" values="0;20" dur="2s" repeatCount="indefinite" />
                        </line>
                        
                        {/* Security status nodes */}
                        <circle cx="45" cy="45" r="3" fill="rgba(100,255,100,0.9)">
                          <animate attributeName="opacity" values="0.6;1;0.6" dur="1.2s" repeatCount="indefinite" />
                        </circle>
                        <circle cx="95" cy="45" r="3" fill="rgba(100,255,100,0.9)">
                          <animate attributeName="opacity" values="0.6;1;0.6" dur="1.2s" repeatCount="indefinite" begin="0.4s" />
                        </circle>
                        <circle cx="45" cy="95" r="3" fill="rgba(100,255,100,0.9)">
                          <animate attributeName="opacity" values="0.6;1;0.6" dur="1.2s" repeatCount="indefinite" begin="0.8s" />
                        </circle>
                        <circle cx="95" cy="95" r="3" fill="rgba(100,255,100,0.9)">
                          <animate attributeName="opacity" values="0.6;1;0.6" dur="1.2s" repeatCount="indefinite" begin="1.2s" />
                        </circle>
                      </svg>
                    </div>
                    
                    {/* Advanced data flow visualization */}
                    <div className="space-y-4">
                      <div className="flex items-center justify-center space-x-3">
                        <div className="h-1.5 bg-white/50 rounded-full w-16 animate-pulse"></div>
                        <div className="w-3 h-3 bg-white rounded-full animate-ping"></div>
                        <div className="h-1.5 bg-white/50 rounded-full w-20 animate-pulse" style={{animationDelay: '0.2s'}}></div>
                        <div className="w-3 h-3 bg-white rounded-full animate-ping" style={{animationDelay: '0.4s'}}></div>
                        <div className="h-1.5 bg-white/50 rounded-full w-14 animate-pulse" style={{animationDelay: '0.6s'}}></div>
                      </div>
                      <div className="flex items-center justify-center space-x-3">
                        <div className="h-1 bg-white/40 rounded-full w-12 animate-pulse" style={{animationDelay: '0.3s'}}></div>
                        <div className="w-2 h-2 bg-white/80 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
                        <div className="h-1 bg-white/40 rounded-full w-24 animate-pulse" style={{animationDelay: '0.7s'}}></div>
                        <div className="w-2 h-2 bg-white/80 rounded-full animate-ping" style={{animationDelay: '0.9s'}}></div>
                        <div className="h-1 bg-white/40 rounded-full w-18 animate-pulse" style={{animationDelay: '1.1s'}}></div>
                      </div>
                    </div>
                    
                    {/* Enhanced status indicators */}
                    <div className="flex justify-center space-x-8">
                      <div className="flex items-center space-x-3">
                        <div className="w-4 h-4 bg-white rounded-full animate-pulse shadow-lg"></div>
                        <span className="text-white/90 text-sm font-inter font-medium tracking-wide">FORTRESS</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-4 h-4 bg-white rounded-full animate-pulse shadow-lg" style={{animationDelay: '0.4s'}}></div>
                        <span className="text-white/90 text-sm font-inter font-medium tracking-wide">SECURED</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-4 h-4 bg-white rounded-full animate-pulse shadow-lg" style={{animationDelay: '0.8s'}}></div>
                        <span className="text-white/90 text-sm font-inter font-medium tracking-wide">RESILIENT</span>
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
