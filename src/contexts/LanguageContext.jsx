import { createContext, useState, useEffect } from 'react';

const LanguageContext = createContext({
  language: "en",
  handleChangeLanguage: () => {}
});

function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    const navigatorLanguage = window.navigator.language;
    const lang = navigatorLanguage.split('-')[0];
    setLanguage(lang);
  }, []);

  function handleChangeLanguage(lan) {
    setLanguage(lan);
  }

  return (
    <LanguageContext.Provider value={{ language, handleChangeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export { LanguageContext, LanguageProvider };
