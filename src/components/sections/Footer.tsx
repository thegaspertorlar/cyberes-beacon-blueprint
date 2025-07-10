
import { Mail } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer id="footer" className="bg-cyberes-gray-lighter border-t border-cyberes-gray-light">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="flex justify-center">
          {/* Centered Column - Logo and Contact */}
          <div className="flex flex-col items-center text-center max-w-md">
            <h3 className="text-3xl font-bold text-cyberes-primary mb-4 font-inter">
              CYBERES
            </h3>
            <p className="text-cyberes-gray leading-relaxed font-inter mb-8">
              Empowering communities with accessible cybersecurity education 
              and digital literacy skills for a safer digital future.
            </p>
            
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-cyberes-gray" />
              <a 
                href="mailto:info@cyberesplatform.eu" 
                className="text-cyberes-gray hover:text-cyberes-primary transition-colors duration-200 font-inter"
              >
                info@cyberesplatform.eu
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="border-t border-cyberes-gray-light mt-12 pt-8 text-center">
          <p className="text-cyberes-gray text-sm font-inter">
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
