import { useContext, useMemo } from "react";
import { LanguageContext } from "../../contexts/LanguageContext";

// Custom hook for translations
export function useTranslateObject(input) {
  const { language } = useContext(LanguageContext);

  const object = useMemo(() => {
    let translation = {};

    for (const [key, obj] of Object.entries(input)) {
      translation = { ...translation, [key]: obj[language] };
    }

    return translation;
  }, [language, input]);

  return object;
}