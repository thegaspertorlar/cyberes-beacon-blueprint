
import { Mail, ExternalLink } from 'lucide-react';

const Footer = () => {
  const navigationLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#target-audience' },
    { label: 'Partners', href: '#partners' },
    { label: 'Training', href: '#platform-preview' },
    { label: 'Contact', href: '#footer' },
  ];

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="footer" className="bg-cyberes-gray-lighter border-t border-cyberes-gray-light">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Left Column - Logo */}
          <div className="flex flex-col items-center lg:items-start">
            <h3 className="text-3xl font-bold text-cyberes-primary mb-4">
              CYBERES
            </h3>
            <p className="text-cyberes-gray text-center lg:text-left leading-relaxed">
              Empowering communities with accessible cybersecurity education 
              and digital literacy skills for a safer digital future.
            </p>
          </div>

          {/* Center Column - Navigation */}
          <div className="flex flex-col items-center">
            <h4 className="text-lg font-semibold text-cyberes-primary mb-6">
              Navigation
            </h4>
            <ul className="space-y-3 text-center">
              {navigationLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-cyberes-gray hover:text-cyberes-primary transition-colors duration-200 font-medium"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column - Contact & License */}
          <div className="flex flex-col items-center lg:items-end">
            <h4 className="text-lg font-semibold text-cyberes-primary mb-6">
              Contact
            </h4>
            
            <div className="flex items-center space-x-3 mb-6">
              <Mail className="w-5 h-5 text-cyberes-gray" />
              <a 
                href="mailto:info@cyberesplatform.eu" 
                className="text-cyberes-gray hover:text-cyberes-primary transition-colors duration-200"
              >
                info@cyberesplatform.eu
              </a>
            </div>

            {/* License Icons */}
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2 text-sm text-cyberes-gray">
                <span>Licensed under</span>
                <div className="flex items-center space-x-1">
                  <div className="w-6 h-6 bg-cyberes-primary rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">CC</span>
                  </div>
                  <span className="font-medium">BY-SA</span>
                  <ExternalLink className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="border-t border-cyberes-gray-light mt-12 pt-8 text-center">
          <p className="text-cyberes-gray text-sm">
            © 2024 CybeRes Platform. All rights reserved. | 
            Co-funded by the European Union
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
