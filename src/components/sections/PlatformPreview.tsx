
import { Monitor, Smartphone, BarChart3, Activity } from 'lucide-react';

const PlatformPreview = () => {
  const features = [
    {
      icon: Monitor,
      title: "Unified Dashboard",
      description: "Centralized view of your entire security ecosystem with real-time insights and analytics."
    },
    {
      icon: Activity,
      title: "Threat Intelligence",
      description: "AI-powered threat detection and response with automated incident management."
    },
    {
      icon: BarChart3,
      title: "Analytics & Reporting",
      description: "Comprehensive security metrics and compliance reporting for stakeholders."
    },
    {
      icon: Smartphone,
      title: "Mobile Security",
      description: "Secure mobile access and device management across your organization."
    }
  ];

  return (
    <section id="platform-preview" className="py-20 bg-cyberes-gray-lighter">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-cyberes-primary mb-6">
              Experience the
              <span className="block text-cyberes-light">CybeRes Platform</span>
            </h2>
            <p className="text-xl text-cyberes-gray max-w-2xl mx-auto">
              Our integrated security platform provides comprehensive protection through 
              an intuitive interface designed for security professionals.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Platform Preview */}
            <div className="order-2 lg:order-1">
              <div className="bg-white rounded-2xl shadow-2xl p-1 transform hover:scale-105 transition-transform duration-300">
                <div className="bg-gradient-to-br from-cyberes-primary to-cyberes-light rounded-xl p-8 text-white">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold">Security Dashboard</h3>
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm opacity-90">Threat Level</span>
                      <span className="text-green-300 font-semibold">LOW</span>
                    </div>
                    
                    <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                      <div className="h-full w-3/4 bg-green-400 rounded-full"></div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mt-6">
                      <div className="bg-white/10 rounded-lg p-3">
                        <div className="text-2xl font-bold">1,247</div>
                        <div className="text-sm opacity-90">Events Blocked</div>
                      </div>
                      <div className="bg-white/10 rounded-lg p-3">
                        <div className="text-2xl font-bold">99.9%</div>
                        <div className="text-sm opacity-90">Uptime</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Features List */}
            <div className="order-1 lg:order-2 space-y-6">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-cyberes-primary/10 rounded-lg flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-cyberes-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-cyberes-primary mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-cyberes-gray">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Demo CTA */}
          <div className="text-center mt-16">
            <button className="bg-cyberes-primary text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-cyberes-light transition-colors duration-200 transform hover:scale-105">
              Request Platform Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformPreview;
