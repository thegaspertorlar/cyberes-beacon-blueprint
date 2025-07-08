
const TargetAudience = () => {
  const audiences = [
    {
      number: "01",
      title: "Adults with limited cybersecurity awareness",
      description: "Individuals who need foundational knowledge and practical skills to protect themselves in the digital world."
    },
    {
      number: "02", 
      title: "Individuals from migrant and underrepresented communities",
      description: "Communities that may face unique digital challenges and require accessible, culturally-sensitive cybersecurity education."
    },
    {
      number: "03",
      title: "Educators and digital facilitators supporting lifelong learning",
      description: "Teachers, trainers, and community leaders who guide others in developing essential digital security skills."
    }
  ];

  return (
    <section id="target-audience" className="py-20" style={{ backgroundColor: '#F9F9F9' }}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h3 className="text-sm font-semibold tracking-wider uppercase mb-4" style={{ color: '#28A745' }}>
              PROJECT DETAILS
            </h3>
            <h2 className="text-3xl md:text-4xl font-bold text-cyberes-primary">
              This project is designed for
            </h2>
          </div>

          {/* Audience Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {audiences.map((audience, index) => (
              <div key={index} className="text-center">
                {/* Circular Badge */}
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                  style={{ backgroundColor: '#28A745' }}
                >
                  <span className="text-2xl font-bold text-white font-inter">
                    {audience.number}
                  </span>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-cyberes-primary leading-tight">
                    {audience.title}
                  </h3>
                  <p className="text-cyberes-gray leading-relaxed">
                    {audience.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
