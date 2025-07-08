
import { Target, Shield, Gauge, CheckCircle } from 'lucide-react';

const Objectives = () => {
  const objectives = [
    {
      icon: Shield,
      title: "Comprehensive Protection",
      description: "Provide end-to-end security coverage across all digital touchpoints and infrastructure components.",
      metrics: "99.9% threat detection rate"
    },
    {
      icon: Gauge,
      title: "Operational Excellence",
      description: "Ensure seamless security integration without compromising business performance or user experience.",
      metrics: "Zero downtime deployment"
    },
    {
      icon: Target,
      title: "Proactive Defense",
      description: "Stay ahead of emerging threats through AI-driven threat intelligence and predictive security measures.",
      metrics: "24/7 monitoring coverage"
    },
    {
      icon: CheckCircle,
      title: "Compliance Assurance",
      description: "Maintain adherence to industry standards and regulatory requirements across all operational areas.",
      metrics: "100% compliance tracking"
    }
  ];

  return (
    <section id="objectives" className="py-20 bg-gradient-to-br from-cyberes-primary to-cyberes-light">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Mission &
            <span className="block text-cyberes-gray-lighter">Strategic Objectives</span>
          </h2>
          <p className="text-xl text-cyberes-gray-lighter max-w-2xl mx-auto">
            We are committed to delivering world-class cybersecurity solutions that protect, 
            enable, and empower organizations to thrive in the digital age.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {objectives.map((objective, index) => (
            <div 
              key={index} 
              className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 group"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <objective.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-3">
                    {objective.title}
                  </h3>
                  <p className="text-cyberes-gray-lighter mb-4 leading-relaxed">
                    {objective.description}
                  </p>
                  <div className="inline-flex items-center px-3 py-1 bg-white/20 rounded-full text-sm text-white font-medium">
                    {objective.metrics}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Security Posture?
            </h3>
            <p className="text-cyberes-gray-lighter mb-6 max-w-2xl mx-auto">
              Join hundreds of organizations that trust CybeRes to protect their most valuable digital assets.
            </p>
            <button className="bg-white text-cyberes-primary px-8 py-3 rounded-xl font-semibold hover:bg-cyberes-gray-lighter transition-colors duration-200">
              Schedule a Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Objectives;
