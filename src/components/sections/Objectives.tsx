
import { Button } from '@/components/ui/button';

const Objectives = () => {
  const objectives = [
    {
      number: "01",
      title: "Raise awareness about cybersecurity risks",
      description: "Educate users about common digital threats and vulnerabilities they may encounter in their daily online activities."
    },
    {
      number: "02", 
      title: "Promote digital literacy and safe online practices",
      description: "Provide practical guidance on how to navigate the digital world securely and responsibly."
    },
    {
      number: "03",
      title: "Empower individuals with practical cybersecurity skills",
      description: "Equip users with hands-on knowledge and tools to protect themselves and their communities online."
    },
    {
      number: "04",
      title: "Foster inclusive cybersecurity education",
      description: "Ensure cybersecurity knowledge is accessible to all, regardless of background or technical experience."
    },
    {
      number: "05",
      title: "Build resilient digital communities",
      description: "Create networks of informed individuals who can support each other in maintaining digital security."
    },
    {
      number: "06",
      title: "Support educators and digital facilitators",
      description: "Provide resources and training for those who guide others in developing digital security awareness."
    },
    {
      number: "07",
      title: "Bridge the digital divide through education",
      description: "Address gaps in cybersecurity knowledge across different communities and demographics."
    },
    {
      number: "08",
      title: "Create sustainable cybersecurity learning pathways",
      description: "Develop long-term educational frameworks that evolve with emerging digital threats and technologies."
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
                  <p className="text-lg text-cyberes-gray italic">
                    "Step confidently into the digital world."
                  </p>
                </div>
              </div>

              {/* CTA Button */}
              <div className="mt-8 text-center">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="px-8 py-3 text-cyberes-primary border-cyberes-primary hover:bg-cyberes-primary hover:text-white transition-colors duration-200"
                >
                  CONTACT US
                </Button>
              </div>
            </div>

            {/* Right Side - Objectives List */}
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-cyberes-primary mb-8">
                Objectives
              </h2>
              
              <div className="space-y-6">
                {objectives.map((objective, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <span className="inline-flex items-center justify-center w-8 h-8 bg-cyberes-primary text-white text-sm font-bold rounded-full">
                        {objective.number}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-cyberes-primary mb-2">
                        {objective.title}
                      </h3>
                      <p className="text-cyberes-gray leading-relaxed">
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
