import { createContext, useContext, useState, useEffect } from 'react';
import translations from '../../dataJson/translations.json';
import PropTypes from 'prop-types';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  // Retrieve language from localStorage or default to 'en'
  const storedLanguage = localStorage.getItem('language');
  const initialLanguage = storedLanguage || 'en';

  const [language, setLanguage] = useState(initialLanguage);
  const translation = translations[language];

  // Update localStorage whenever language changes
  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, translation }}>{children}</LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  return useContext(LanguageContext);
};

LanguageProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
