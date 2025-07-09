import { useLanguage, Language } from '@/contexts/LanguageContext';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const LanguageDropdown = () => {
  const { language, setLanguage } = useLanguage();

  const languages: { code: Language; label: string }[] = [
    { code: 'en', label: 'EN' },
    { code: 'de', label: 'DE' },
    { code: 'nb', label: 'NB' },
  ];

  return (
    <Select value={language} onValueChange={(value: Language) => setLanguage(value)}>
      <SelectTrigger className="w-20 bg-white/10 border-white/20 text-white hover:bg-white/20 font-inter">
        <SelectValue />
      </SelectTrigger>
      <SelectContent className="bg-white border border-gray-200">
        {languages.map((lang) => (
          <SelectItem 
            key={lang.code} 
            value={lang.code}
            className="font-inter text-cyberes-gray hover:bg-gray-100"
          >
            {lang.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default LanguageDropdown;