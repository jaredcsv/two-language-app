import { useContext } from "react";
import { LanguageContext } from "../../contexts/LanguageContext";
import "./Button.css";
import ButtonText from "./button-text.json";
import { useTranslateObject } from "../../hooks/useTranslates/useTranslateObject";

function Button() {
  const { language, handleChangeLanguage } = useContext(LanguageContext);
  const { title } = useTranslateObject(ButtonText);

  return (
    <button onClick={() => handleChangeLanguage(language === "es" ? "en" : "es")} className="language-button">
        {title}
    </button>
  );
}

export default Button;
