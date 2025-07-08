
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { label: 'Solutions', href: '#' },
    { label: 'Pricing', href: '#' },
    { label: 'Documentation', href: '#' },
    { label: 'Support', href: '#' },
  ];

  const company = [
    { label: 'About Us', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Press', href: '#' },
    { label: 'Blog', href: '#' },
  ];

  const legal = [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Cookie Policy', href: '#' },
    { label: 'Compliance', href: '#' },
  ];

  return (
    <footer id="footer" className="bg-cyberes-primary text-white">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-4">CybeRes</h3>
            <p className="text-cyberes-gray-lighter mb-6 leading-relaxed">
              Protecting organizations worldwide with advanced cybersecurity solutions 
              designed for the modern digital landscape.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-cyberes-gray-lighter" />
                <span className="text-cyberes-gray-lighter">contact@cyberes.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-cyberes-gray-lighter" />
                <span className="text-cyberes-gray-lighter">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-cyberes-gray-lighter" />
                <span className="text-cyberes-gray-lighter">San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Solutions</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-cyberes-gray-lighter hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              {company.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-cyberes-gray-lighter hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Legal</h4>
            <ul className="space-y-3">
              {legal.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-cyberes-gray-lighter hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-cyberes-light/30 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
            <div>
              <h4 className="text-lg font-semibold mb-2">Stay Updated</h4>
              <p className="text-cyberes-gray-lighter">Get the latest cybersecurity insights and updates.</p>
            </div>
            <div className="flex space-x-4 w-full lg:w-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 lg:w-80 px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-cyberes-gray-lighter focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <button className="bg-white text-cyberes-primary px-6 py-2 rounded-lg font-semibold hover:bg-cyberes-gray-lighter transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-cyberes-light/30 mt-8 pt-8 flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
          <p className="text-cyberes-gray-lighter text-sm">
            © 2024 CybeRes. All rights reserved.
          </p>
          
          {/* Social Links */}
          <div className="flex space-x-4">
            <a href="#" className="text-cyberes-gray-lighter hover:text-white transition-colors duration-200">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="text-cyberes-gray-lighter hover:text-white transition-colors duration-200">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-cyberes-gray-lighter hover:text-white transition-colors duration-200">
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
