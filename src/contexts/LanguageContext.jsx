import { createContext, useState, useEffect } from 'react';

const LanguageContext = createContext({
  language: "en",
  handleChangeLanguage: () => {}
});

function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("en");
  const [languageLoaded, setLanguageLoaded] = useState(false);

  useEffect(() => {
    const navigatorLanguage = window.navigator.language;
    const lang = navigatorLanguage.split('-')[0];
    setLanguage(lang);
    setLanguageLoaded(true);
  }, []);

  function handleChangeLanguage(lan) {
    setLanguage(lan);
  }

  return (
    <LanguageContext.Provider value={{ language, handleChangeLanguage }}>
      {languageLoaded && children}
    </LanguageContext.Provider>
  );
}

export { LanguageContext, LanguageProvider };
