
import { Building2, Zap, Users, TrendingUp } from 'lucide-react';

const TargetAudience = () => {
  const audiences = [
    {
      icon: Building2,
      title: "Enterprise Organizations",
      description: "Large corporations requiring comprehensive security infrastructure and compliance management.",
      features: ["Enterprise-grade security", "Compliance frameworks", "Scalable solutions"]
    },
    {
      icon: Zap,
      title: "Technology Companies",
      description: "Fast-growing tech companies needing robust protection for their digital assets and intellectual property.",
      features: ["API security", "Cloud protection", "DevSecOps integration"]
    },
    {
      icon: Users,
      title: "Financial Services",
      description: "Banks, fintech, and financial institutions requiring the highest security standards and regulatory compliance.",
      features: ["Financial compliance", "Fraud detection", "Secure transactions"]
    },
    {
      icon: TrendingUp,
      title: "Growing Businesses",
      description: "SMBs and scale-ups looking to establish strong security foundations as they expand their operations.",
      features: ["Cost-effective solutions", "Easy implementation", "Growth-ready security"]
    }
  ];

  return (
    <section id="target-audience" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-cyberes-primary mb-6">
            Built for Organizations That
            <span className="block text-cyberes-light">Value Security</span>
          </h2>
          <p className="text-xl text-cyberes-gray max-w-2xl mx-auto">
            Our cybersecurity solutions are designed to meet the unique challenges 
            faced by different types of organizations in today's digital landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {audiences.map((audience, index) => (
            <div 
              key={index} 
              className="bg-cyberes-gray-lighter p-8 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-cyberes-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <audience.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-cyberes-primary mb-3">
                    {audience.title}
                  </h3>
                  <p className="text-cyberes-gray mb-4 leading-relaxed">
                    {audience.description}
                  </p>
                  <ul className="space-y-2">
                    {audience.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-cyberes-gray">
                        <div className="w-2 h-2 bg-cyberes-primary rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
