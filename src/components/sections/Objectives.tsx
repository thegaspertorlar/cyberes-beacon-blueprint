
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

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
    },
    {
      number: "05",
      title: t('objectives.item5.title'),
      description: t('objectives.item5.description')
    },
    {
      number: "06",
      title: t('objectives.item6.title'),
      description: t('objectives.item6.description')
    },
    {
      number: "07",
      title: t('objectives.item7.title'),
      description: t('objectives.item7.description')
    },
    {
      number: "08",
      title: t('objectives.item8.title'),
      description: t('objectives.item8.description')
    }
  ];

  return (
    <section id="objectives" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Visual */}
            <div className="order-2 lg:order-1">
              <div className="relative">
                {/* Abstract cyber resilience illustration placeholder */}
                <div className="bg-gradient-to-br from-cyberes-primary to-cyberes-light rounded-2xl p-12 text-center">
                  <div className="space-y-6">
                    <div className="w-24 h-24 bg-white/20 rounded-full mx-auto flex items-center justify-center">
                      <div className="w-12 h-12 bg-white/30 rounded-full flex items-center justify-center">
                        <div className="w-6 h-6 bg-white rounded-full"></div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-2 bg-white/20 rounded-full mx-auto max-w-32"></div>
                      <div className="h-2 bg-white/30 rounded-full mx-auto max-w-24"></div>
                      <div className="h-2 bg-white/20 rounded-full mx-auto max-w-40"></div>
                    </div>
                  </div>
                </div>
                
                {/* Caption */}
                <div className="mt-6 text-center">
                  <p className="text-lg text-cyberes-gray italic font-inter">
                    {t('objectives.visual.caption')}
                  </p>
                </div>
              </div>

              {/* CTA Button */}
              <div className="mt-8 text-center">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="px-8 py-3 text-cyberes-primary border-cyberes-primary hover:bg-cyberes-primary hover:text-white transition-colors duration-200 font-inter font-semibold"
                >
                  {t('objectives.cta')}
                </Button>
              </div>
            </div>

            {/* Right Side - Objectives List */}
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-cyberes-primary mb-8 font-inter">
                {t('objectives.title')}
              </h2>
              
              <div className="space-y-6">
                {objectives.map((objective, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <span className="inline-flex items-center justify-center w-8 h-8 bg-cyberes-primary text-white text-sm font-bold rounded-full font-inter">
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
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Objectives;
