
import { useLanguage, Language } from '@/contexts/LanguageContext';

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  const languages: { code: Language; label: string }[] = [
    { code: 'en', label: 'EN' },
    { code: 'de', label: 'DE' },
    { code: 'nb', label: 'NB' },
  ];

  return (
    <div className="flex items-center space-x-1 bg-white/10 rounded-md p-1">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => setLanguage(lang.code)}
          className={`px-3 py-1 text-sm font-semibold rounded transition-all duration-200 ${
            language === lang.code
              ? 'bg-white text-cyberes-primary'
              : 'text-cyberes-gray hover:text-white'
          }`}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
};

export default LanguageToggle;
