
const Partners = () => {
  const partners = [
    { name: "Microsoft", logo: "🏢" },
    { name: "AWS", logo: "☁️" },
    { name: "Google Cloud", logo: "🌐" },
    { name: "Cisco", logo: "🔧" },
    { name: "IBM", logo: "💼" },
    { name: "Oracle", logo: "🗄️" },
    { name: "VMware", logo: "🖥️" },
    { name: "Fortinet", logo: "🛡️" }
  ];

  const certifications = [
    "ISO 27001",
    "SOC 2 Type II",
    "GDPR Compliant",
    "HIPAA Ready",
    "FedRAMP Authorized"
  ];

  return (
    <section id="partners" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-cyberes-primary mb-6">
            Trusted by Industry
            <span className="block text-cyberes-light">Leaders Worldwide</span>
          </h2>
          <p className="text-xl text-cyberes-gray max-w-2xl mx-auto">
            CybeRes partners with the world's leading technology companies to deliver 
            integrated security solutions that meet the highest industry standards.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-cyberes-primary text-center mb-8">
            Technology Partners
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {partners.map((partner, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center justify-center p-6 bg-cyberes-gray-lighter rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 group"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {partner.logo}
                </div>
                <span className="text-cyberes-gray font-medium text-center">
                  {partner.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="bg-gradient-to-br from-cyberes-primary to-cyberes-light rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold mb-4">
              Security Certifications & Compliance
            </h3>
            <p className="text-cyberes-gray-lighter max-w-2xl mx-auto">
              Our platform meets the most stringent security standards and regulatory requirements.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {certifications.map((cert, index) => (
              <div 
                key={index} 
                className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full border border-white/30 hover:bg-white/30 transition-colors duration-200"
              >
                <span className="font-medium">{cert}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-cyberes-primary mb-2">500+</div>
            <div className="text-cyberes-gray">Enterprise Clients</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-cyberes-primary mb-2">99.9%</div>
            <div className="text-cyberes-gray">Uptime Guarantee</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-cyberes-primary mb-2">24/7</div>
            <div className="text-cyberes-gray">Security Monitoring</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
