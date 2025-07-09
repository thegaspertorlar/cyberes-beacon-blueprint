
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageDropdown from './LanguageDropdown';
import ContactModal from './ContactModal';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useLanguage();

  const navItems = [
    { label: t('nav.home'), href: '#hero' },
    { label: t('nav.details'), href: '#target-audience' },
    { label: t('nav.partners'), href: '#partners' },
    { label: t('nav.training'), href: '/training' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    if (href.startsWith('/')) {
      // External/internal link
      window.open(href, '_blank');
    } else {
      // Anchor scroll
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-cyberes-primary font-inter" role="banner">
              <span className="sr-only">CybeRes - Cyber Resilience Training Platform</span>
              CybeRes
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-baseline space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="text-cyberes-gray hover:text-cyberes-primary px-3 py-2 text-sm font-medium transition-colors duration-200 font-inter focus:outline-none focus:ring-2 focus:ring-cyberes-primary focus:ring-offset-2 rounded-md"
                  aria-label={`Navigate to ${item.label}`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <div className="flex items-center space-x-4">
              <LanguageDropdown />
              <ContactModal>
                <Button 
                  variant="outline"
                  className="border-2 border-cyberes-primary text-cyberes-primary hover:bg-cyberes-primary hover:text-white rounded-full px-6 py-2 font-inter font-semibold transition-all duration-200"
                >
                  {t('nav.contact')}
                </Button>
              </ContactModal>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <LanguageDropdown />
            <ContactModal>
              <Button 
                variant="outline"
                size="sm"
                className="border-2 border-cyberes-primary text-cyberes-primary hover:bg-cyberes-primary hover:text-white rounded-full px-4 py-1 font-inter font-semibold text-xs transition-all duration-200"
              >
                {t('nav.contact')}
              </Button>
            </ContactModal>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-cyberes-gray hover:text-cyberes-primary p-2 focus:outline-none focus:ring-2 focus:ring-cyberes-primary focus:ring-offset-2 rounded-md"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div id="mobile-menu" className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-md rounded-lg mt-2 shadow-lg" role="menu">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="text-cyberes-gray hover:text-cyberes-primary block px-3 py-2 text-base font-medium w-full text-left transition-colors duration-200 font-inter focus:outline-none focus:ring-2 focus:ring-cyberes-primary focus:ring-offset-2 rounded-md min-h-[44px]"
                  role="menuitem"
                  aria-label={`Navigate to ${item.label}`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
