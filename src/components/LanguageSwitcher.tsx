import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'fr' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/80 hover:bg-white transition-colors"
    >
      <Globe className="w-5 h-5" />
      <span className="text-sm font-medium">{i18n.language.toUpperCase()}</span>
    </button>
  );
};

export default LanguageSwitcher;