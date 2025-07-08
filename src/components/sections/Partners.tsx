
const Partners = () => {
  const partners = [
    { name: "DAXAP", country: "NO", role: "Research & Development Lead" },
    { name: "Rumi Augsburg", country: "DE", role: "Educational Content Partner" },
    { name: "NKN Norge", country: "NO", role: "Technology Integration" },
    { name: "InoZet", country: "DE", role: "Innovation & Implementation" }
  ];

  return (
    <section id="partners" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-cyberes-primary mb-6">
            PROJECT PARTNERS
          </h2>
          <p className="text-xl text-cyberes-gray max-w-2xl mx-auto">
            This project is co-developed by European organizations committed to advancing 
            cybersecurity education and digital literacy across diverse communities.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center justify-center p-6 bg-cyberes-gray-lighter rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-cyberes-primary rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-lg">{partner.name.charAt(0)}</span>
              </div>
              <h3 className="text-lg font-semibold text-cyberes-primary mb-2 text-center">
                {partner.name}
              </h3>
              <div className="text-sm text-cyberes-gray font-medium mb-2">
                {partner.country}
              </div>
              <p className="text-sm text-cyberes-gray text-center">
                {partner.role}
              </p>
            </div>
          ))}
        </div>

        {/* EU Funding Badge */}
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8 border border-blue-200">
          <div className="flex flex-col lg:flex-row items-center justify-center space-y-4 lg:space-y-0 lg:space-x-6">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-sm">EU</span>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-cyberes-primary">
                  Co-funded by the European Union
                </h3>
                <p className="text-sm text-cyberes-gray">
                  This project is supported by the European Union's digital education initiatives
                </p>
              </div>
            </div>
          </div>
          <div className="mt-4 text-center">
            <p className="text-xs text-cyberes-gray">
              The European Commission's support for the production of this publication does not constitute 
              an endorsement of the contents, which reflect the views only of the authors, and the Commission 
              cannot be held responsible for any use which may be made of the information contained therein.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
