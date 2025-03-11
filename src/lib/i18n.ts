"use client";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Import JSON files directly
import enTranslation from "../locales/en.json";
import arTranslation from "../locales/ar.json";

i18n
  .use(LanguageDetector) // Detects browser language
  .use(initReactI18next) // Initialize React i18next
  .init({
    resources: {
      en: { translation: enTranslation },
      ar: { translation: arTranslation },
    },
    fallbackLng: "en", // Default language
    interpolation: { escapeValue: false },
  });

export default i18n;
