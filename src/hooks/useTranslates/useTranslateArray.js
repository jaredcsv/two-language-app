import { useContext, useMemo } from "react";
import { LanguageContext } from "../../contexts/LanguageContext";

export function useTranslateArray(input) {
    const { language } = useContext(LanguageContext);
  
    const translatedArray = useMemo(() => {
      return input.map((item) => {
        let translatedItem = {};
  
        for (const [key, value] of Object.entries(item)) {
          if (typeof value === "object" && value.prototype.hasOwnProperty.call(language)) {
            translatedItem[key] = value[language];
          } else if (Array.isArray(value)) {
            translatedItem[key] = value.map((subItem) =>
              typeof subItem === "object" && subItem.prototype.hasOwnProperty.call(language)
                ? subItem[language]
                : subItem
            );
          } else {
            translatedItem[key] = value;
          }
        }
        return translatedItem;
      });
    }, [language, input]);
  
    return translatedArray;
  }