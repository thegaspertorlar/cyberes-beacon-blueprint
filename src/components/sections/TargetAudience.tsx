
import { useLanguage } from '@/contexts/LanguageContext';

const TargetAudience = () => {
  const { t } = useLanguage();

  const audiences = [
    {
      number: "01",
      title: t('audience.item1.title'),
      description: t('audience.item1.description')
    },
    {
      number: "02", 
      title: t('audience.item2.title'),
      description: t('audience.item2.description')
    },
    {
      number: "03",
      title: t('audience.item3.title'),
      description: t('audience.item3.description')
    }
  ];

  return (
    <section id="target-audience" className="py-20 bg-cyberes-gray-lighter" aria-labelledby="audience-heading">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <header className="text-center mb-16">
            <p className="text-sm font-semibold tracking-wider uppercase mb-4 font-inter text-cyberes-primary">
              {t('audience.subtitle')}
            </p>
            <h2 id="audience-heading" className="text-3xl md:text-4xl font-bold text-cyberes-primary font-inter">
              {t('audience.title')}
            </h2>
          </header>

          {/* Audience Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" role="list">
            {audiences.map((audience, index) => (
              <article key={index} className="text-center" role="listitem">
                {/* Circular Badge */}
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 bg-cyberes-primary"
                  aria-label={`Audience ${audience.number}`}
                >
                  <span className="text-2xl font-bold text-white font-inter" aria-hidden="true">
                    {audience.number}
                  </span>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-cyberes-primary leading-tight font-inter">
                    {audience.title}
                  </h3>
                  <p className="text-cyberes-gray leading-relaxed font-inter">
                    {audience.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
