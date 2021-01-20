import { useTranslation } from "react-i18next";

export function useLanguage() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "es" : "en";
    i18n.changeLanguage(newLang);
  };
  return {
    language: i18n.language,
    toggleLanguage,
  };
}
