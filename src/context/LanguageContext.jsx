import React, { createContext, useState, useEffect } from "react";
import en from "../translations/en.json";
import ar from "../translations/ar.json";

// Create a dictionary to hold translations
const translations = { en, ar };

// Create the Language Context
export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  // Check local storage for a saved language preference
  const storedLanguage = localStorage.getItem("language") || "en";
  const [language, setLanguage] = useState(storedLanguage);

  // Load the translations based on the current language
  const [texts, setTexts] = useState(translations[language]);

  // Switch the language and update translations
  const switchLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem("language", lang); // Store the selected language in local storage
    setTexts(translations[lang]);
  };

  useEffect(() => {
    setTexts(translations[language]);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ texts, switchLanguage, language }}>
      {children}
    </LanguageContext.Provider>
  );
};
