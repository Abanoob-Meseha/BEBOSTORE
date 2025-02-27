"use client";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector) // Detects browser language
  .use(initReactI18next) // Initialize React i18next
  .init({
    resources: {
      en: { translation: require("../locales/en.json") },
      ar: { translation: require("../locales/ar.json") }
    },
    fallbackLng: "en", // Default language
    interpolation: { escapeValue: false }
  });

export default i18n;
