import { useContext, useMemo } from "react";
import { LanguageContext } from "../contexts/LanguageContext";

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

export function useTranslateArray(input) {
  const { language } = useContext(LanguageContext);

  const translatedArray = useMemo(() => {
    return input.map((item) => {
      let translatedItem = {};

      for (const [key, value] of Object.entries(item)) {
        // If it's an object with translations (like {en, es}), get the correct language
        if (typeof value === "object" && value.hasOwnProperty(language)) {
          translatedItem[key] = value[language];
        } else if (Array.isArray(value)) {
          // If it's an array, map over and translate each element
          translatedItem[key] = value.map((subItem) =>
            typeof subItem === "object" && subItem.hasOwnProperty(language)
              ? subItem[language]
              : subItem
          );
        } else {
          // Otherwise, it's just a regular value (like logo or id), so copy it over
          translatedItem[key] = value;
        }
      }

      return translatedItem;
    });
  }, [language, input]);

  return translatedArray;
}