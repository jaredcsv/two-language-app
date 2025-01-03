import { useContext } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';
import './Button.css'

function Button() {
    const { language, handleChangeLanguage } = useContext(LanguageContext);

    const toggleLanguage = () => {
        const nextLanguage = language === "es" ? "en" : "es";
        handleChangeLanguage(nextLanguage);
    };

    return (
        <button onClick={toggleLanguage} className="language-button">
            Cambiar Idioma
        </button>
    );
}

export default Button;
