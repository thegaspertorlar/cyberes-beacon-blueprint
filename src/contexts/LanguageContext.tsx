
import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'de' | 'nb';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.details': 'Details',
    'nav.partners': 'Partners',
    'nav.training': 'Training Platform',
    'nav.contact': 'Contact Us',
    
    // Contact Modal
    'contact.title': 'Contact Us',
    'contact.fullName': 'Full Name',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.submit': 'Submit',
    
    // Hero Section
    'hero.label': 'CYBERES',
    'hero.title': 'Secure Your Digital Future',
    'hero.description': 'CybeRes provides enterprise-grade cybersecurity solutions that protect your business from evolving threats while ensuring seamless operations and comprehensive security coverage.',
    'hero.cta': 'EXPLORE THE PLATFORM',
    
    // Target Audience
    'audience.subtitle': 'PROJECT DETAILS',
    'audience.title': 'This project is designed for',
    'audience.item1.title': 'Adults with limited cybersecurity awareness',
    'audience.item1.description': 'Individuals who need foundational knowledge and practical skills to protect themselves in the digital world.',
    'audience.item2.title': 'Individuals from migrant and underrepresented communities',
    'audience.item2.description': 'Communities that may face unique digital challenges and require accessible, culturally-sensitive cybersecurity education.',
    'audience.item3.title': 'Educators and digital facilitators supporting lifelong learning',
    'audience.item3.description': 'Teachers, trainers, and community leaders who guide others in developing essential digital security skills.',
    
    // Objectives
    'objectives.title': 'Objectives',
    'objectives.visual.caption': '"Step confidently into the digital world."',
    'objectives.cta': 'CONTACT US',
    'objectives.item1.title': 'Raise awareness about cybersecurity risks',
    'objectives.item1.description': 'Educate users about common digital threats and vulnerabilities they may encounter in their daily online activities.',
    'objectives.item2.title': 'Promote digital literacy and safe online practices',
    'objectives.item2.description': 'Provide practical guidance on how to navigate the digital world securely and responsibly.',
    'objectives.item3.title': 'Empower individuals with practical cybersecurity skills',
    'objectives.item3.description': 'Equip users with hands-on knowledge and tools to protect themselves and their communities online.',
    'objectives.item4.title': 'Foster inclusive cybersecurity education',
    'objectives.item4.description': 'Ensure cybersecurity knowledge is accessible to all, regardless of background or technical experience.',
    'objectives.item5.title': 'Build resilient digital communities',
    'objectives.item5.description': 'Create networks of informed individuals who can support each other in maintaining digital security.',
    'objectives.item6.title': 'Support educators and digital facilitators',
    'objectives.item6.description': 'Provide resources and training for those who guide others in developing digital security awareness.',
    'objectives.item7.title': 'Bridge the digital divide through education',
    'objectives.item7.description': 'Address gaps in cybersecurity knowledge across different communities and demographics.',
    'objectives.item8.title': 'Create sustainable cybersecurity learning pathways',
    'objectives.item8.description': 'Develop long-term educational frameworks that evolve with emerging digital threats and technologies.',
    
    // Platform Preview
    'platform.title': 'A multilingual, AI-powered cyber resilience platform',
    'platform.subtitle': 'Learn safely. Learn smart.',
    'platform.cta': 'GO TO PLATFORM',
    
    // Partners
    'partners.title': 'PROJECT PARTNERS',
    'partners.description': 'This project is co-developed by European organizations committed to advancing cybersecurity education and digital literacy across diverse communities.',
    'partners.eu.title': 'Co-funded by the European Union',
    'partners.eu.description': 'This project is supported by the European Union\'s digital education initiatives',
    'partners.eu.disclaimer': 'The European Commission\'s support for the production of this publication does not constitute an endorsement of the contents, which reflect the views only of the authors, and the Commission cannot be held responsible for any use which may be made of the information contained therein.',
    
    // Footer
    'footer.navigation': 'Navigation',
    'footer.contact': 'Contact',
    'footer.license': 'Licensed under',
    'footer.copyright': '© 2024 CybeRes Platform. All rights reserved. | Co-funded by the European Union',
  },
  de: {
    // Navigation
    'nav.home': 'Startseite',
    'nav.details': 'Details',
    'nav.partners': 'Partner',
    'nav.training': 'Trainingsplattform',
    'nav.contact': 'Kontakt aufnehmen',
    
    // Contact Modal
    'contact.title': 'Kontakt aufnehmen',
    'contact.fullName': 'Vollständiger Name',
    'contact.email': 'E-Mail',
    'contact.message': 'Nachricht',
    'contact.submit': 'Senden',
    
    // Hero Section
    'hero.label': 'CYBERES',
    'hero.title': 'Sichern Sie Ihre digitale Zukunft',
    'hero.description': 'CybeRes bietet Cybersicherheitslösungen auf Unternehmensniveau, die Ihr Unternehmen vor sich entwickelnden Bedrohungen schützen und gleichzeitig nahtlose Abläufe und umfassende Sicherheitsabdeckung gewährleisten.',
    'hero.cta': 'PLATTFORM ERKUNDEN',
    
    // Target Audience
    'audience.subtitle': 'PROJEKTDETAILS',
    'audience.title': 'Dieses Projekt ist konzipiert für',
    'audience.item1.title': 'Erwachsene mit begrenztem Cybersicherheitsbewusstsein',
    'audience.item1.description': 'Personen, die grundlegendes Wissen und praktische Fähigkeiten benötigen, um sich in der digitalen Welt zu schützen.',
    'audience.item2.title': 'Personen aus Migranten- und unterrepräsentierten Gemeinschaften',
    'audience.item2.description': 'Gemeinschaften, die einzigartigen digitalen Herausforderungen gegenüberstehen und zugängliche, kultursensible Cybersicherheitsbildung benötigen.',
    'audience.item3.title': 'Pädagogen und digitale Facilitatoren für lebenslanges Lernen',
    'audience.item3.description': 'Lehrer, Trainer und Gemeinschaftsführer, die andere bei der Entwicklung wesentlicher digitaler Sicherheitsfähigkeiten anleiten.',
    
    // Objectives
    'objectives.title': 'Ziele',
    'objectives.visual.caption': '"Treten Sie selbstbewusst in die digitale Welt ein."',
    'objectives.cta': 'KONTAKT AUFNEHMEN',
    'objectives.item1.title': 'Bewusstsein für Cybersicherheitsrisiken schaffen',
    'objectives.item1.description': 'Nutzer über häufige digitale Bedrohungen und Schwachstellen aufklären, denen sie in ihren täglichen Online-Aktivitäten begegnen können.',
    'objectives.item2.title': 'Digitale Kompetenz und sichere Online-Praktiken fördern',
    'objectives.item2.description': 'Praktische Anleitung bieten, wie man sicher und verantwortungsbewusst in der digitalen Welt navigiert.',
    'objectives.item3.title': 'Einzelpersonen mit praktischen Cybersicherheitsfähigkeiten stärken',
    'objectives.item3.description': 'Nutzer mit praktischem Wissen und Werkzeugen ausstatten, um sich und ihre Gemeinschaften online zu schützen.',
    'objectives.item4.title': 'Inklusive Cybersicherheitsbildung fördern',
    'objectives.item4.description': 'Sicherstellen, dass Cybersicherheitswissen für alle zugänglich ist, unabhängig von Hintergrund oder technischer Erfahrung.',
    'objectives.item5.title': 'Widerstandsfähige digitale Gemeinschaften aufbauen',
    'objectives.item5.description': 'Netzwerke informierter Personen schaffen, die sich gegenseitig bei der Aufrechterhaltung digitaler Sicherheit unterstützen können.',
    'objectives.item6.title': 'Pädagogen und digitale Facilitatoren unterstützen',
    'objectives.item6.description': 'Ressourcen und Schulungen für diejenigen bereitstellen, die andere bei der Entwicklung digitaler Sicherheitsbewusstseins anleiten.',
    'objectives.item7.title': 'Die digitale Kluft durch Bildung überbrücken',
    'objectives.item7.description': 'Lücken im Cybersicherheitswissen in verschiedenen Gemeinschaften und Demografien angehen.',
    'objectives.item8.title': 'Nachhaltige Cybersicherheits-Lernwege schaffen',
    'objectives.item8.description': 'Langfristige Bildungsrahmen entwickeln, die sich mit aufkommenden digitalen Bedrohungen und Technologien weiterentwickeln.',
    
    // Platform Preview
    'platform.title': 'Eine mehrsprachige, KI-gestützte Cyber-Resilienz-Plattform',
    'platform.subtitle': 'Sicher lernen. Intelligent lernen.',
    'platform.cta': 'ZUR PLATTFORM',
    
    // Partners
    'partners.title': 'PROJEKTPARTNER',
    'partners.description': 'Dieses Projekt wird von europäischen Organisationen mitentwickelt, die sich für die Förderung von Cybersicherheitsbildung und digitaler Kompetenz in verschiedenen Gemeinschaften einsetzen.',
    'partners.eu.title': 'Kofinanziert von der Europäischen Union',
    'partners.eu.description': 'Dieses Projekt wird von den digitalen Bildungsinitiativen der Europäischen Union unterstützt',
    'partners.eu.disclaimer': 'Die Unterstützung der Europäischen Kommission für die Erstellung dieser Veröffentlichung stellt keine Billigung des Inhalts dar, der nur die Ansichten der Autoren widerspiegelt, und die Kommission kann nicht für die Verwendung der darin enthaltenen Informationen verantwortlich gemacht werden.',
    
    // Footer
    'footer.navigation': 'Navigation',
    'footer.contact': 'Kontakt',
    'footer.license': 'Lizenziert unter',
    'footer.copyright': '© 2024 CybeRes Platform. Alle Rechte vorbehalten. | Kofinanziert von der Europäischen Union',
  },
  nb: {
    // Navigation
    'nav.home': 'Hjem',
    'nav.details': 'Detaljer',
    'nav.partners': 'Partnere',
    'nav.training': 'Treningsplattform',
    'nav.contact': 'Kontakt oss',
    
    // Contact Modal
    'contact.title': 'Kontakt oss',
    'contact.fullName': 'Fullt navn',
    'contact.email': 'E-post',
    'contact.message': 'Melding',
    'contact.submit': 'Send inn',
    
    // Hero Section
    'hero.label': 'CYBERES',
    'hero.title': 'Sikre din digitale fremtid',
    'hero.description': 'CybeRes tilbyr cybersikkerhetsløsninger i bedriftsklasse som beskytter virksomheten din mot utviklende trusler samtidig som de sikrer sømløse operasjoner og omfattende sikkerhetsdekning.',
    'hero.cta': 'UTFORSK PLATTFORMEN',
    
    // Target Audience
    'audience.subtitle': 'PROSJEKTDETALJER',
    'audience.title': 'Dette prosjektet er designet for',
    'audience.item1.title': 'Voksne med begrenset cybersikkerhetsbevissthet',
    'audience.item1.description': 'Individer som trenger grunnleggende kunnskap og praktiske ferdigheter for å beskytte seg selv i den digitale verden.',
    'audience.item2.title': 'Individer fra migrant- og underrepresenterte samfunn',
    'audience.item2.description': 'Samfunn som kan møte unike digitale utfordringer og krever tilgjengelig, kulturelt sensitiv cybersikkerhetsutdanning.',
    'audience.item3.title': 'Utdannere og digitale tilretteleggere som støtter livslang læring',
    'audience.item3.description': 'Lærere, trenere og samfunnsledere som veileder andre i å utvikle essensielle digitale sikkerhetsferdigheter.',
    
    // Objectives
    'objectives.title': 'Mål',
    'objectives.visual.caption': '"Tre trygt inn i den digitale verden."',
    'objectives.cta': 'KONTAKT OSS',
    'objectives.item1.title': 'Øke bevisstheten om cybersikkerhetsrisiko',
    'objectives.item1.description': 'Utdanne brukere om vanlige digitale trusler og sårbarheter de kan møte i sine daglige online-aktiviteter.',
    'objectives.item2.title': 'Fremme digital kompetanse og sikker online-praksis',
    'objectives.item2.description': 'Gi praktisk veiledning om hvordan man navigerer den digitale verden sikkert og ansvarlig.',
    'objectives.item3.title': 'Styrke individer med praktiske cybersikkerhetsferdigheter',
    'objectives.item3.description': 'Utstyre brukere med praktisk kunnskap og verktøy for å beskytte seg selv og sine samfunn online.',
    'objectives.item4.title': 'Fremme inkluderende cybersikkerhetsutdanning',
    'objectives.item4.description': 'Sikre at cybersikkerhetskunnskap er tilgjengelig for alle, uavhengig av bakgrunn eller teknisk erfaring.',
    'objectives.item5.title': 'Bygge motstandsdyktige digitale samfunn',
    'objectives.item5.description': 'Skape nettverk av informerte individer som kan støtte hverandre i å opprettholde digital sikkerhet.',
    'objectives.item6.title': 'Støtte utdannere og digitale tilretteleggere',
    'objectives.item6.description': 'Tilby ressurser og opplæring for de som veileder andre i å utvikle digital sikkerhetsbevissthet.',
    'objectives.item7.title': 'Bygge bro over det digitale skillet gjennom utdanning',
    'objectives.item7.description': 'Adressere hull i cybersikkerhetskunnskap på tvers av forskjellige samfunn og demografier.',
    'objectives.item8.title': 'Skape bærekraftige cybersikkerhetslæringsveier',
    'objectives.item8.description': 'Utvikle langsiktige utdanningsrammer som utvikler seg med fremvoksende digitale trusler og teknologier.',
    
    // Platform Preview
    'platform.title': 'En flerspråklig, AI-drevet cyber-motstandskraft plattform',
    'platform.subtitle': 'Lær trygt. Lær smart.',
    'platform.cta': 'GÅ TIL PLATTFORM',
    
    // Partners
    'partners.title': 'PROSJEKTPARTNERE',
    'partners.description': 'Dette prosjektet er co-utviklet av europeiske organisasjoner forpliktet til å fremme cybersikkerhetsutdanning og digital kompetanse på tvers av diverse samfunn.',
    'partners.eu.title': 'Medfinansiert av Den europeiske union',
    'partners.eu.description': 'Dette prosjektet støttes av Den europeiske unions digitale utdanningsinitiativ',
    'partners.eu.disclaimer': 'Den europeiske kommisjonens støtte til produksjonen av denne publikasjonen utgjør ikke en godkjenning av innholdet, som kun gjenspeiler forfatternes synspunkter, og kommisjonen kan ikke holdes ansvarlig for eventuell bruk som kan gjøres av informasjonen som finnes i den.',
    
    // Footer
    'footer.navigation': 'Navigasjon',
    'footer.contact': 'Kontakt',
    'footer.license': 'Lisensiert under',
    'footer.copyright': '© 2024 CybeRes Platform. Alle rettigheter reservert. | Medfinansiert av Den europeiske union',
  },
};

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || translations.en[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
