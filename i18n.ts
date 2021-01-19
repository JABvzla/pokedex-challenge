import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enJson from "./public/static/locales/en.json";
import esJson from "./public/static/locales/es.json";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: { translation: enJson },
      es: { translation: esJson },
    },
    lng: "en",
    fallbackLng: "en",

    interpolation: {
      escapeValue: false,
    },
  });
