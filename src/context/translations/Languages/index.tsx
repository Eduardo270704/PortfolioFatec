import React, { createContext, useState, useEffect, ReactNode } from "react";
import { Language, LanguageContextType } from "../../../interfaces";

export const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const getBrowserLanguage = (): Language => {
    const browserLang = navigator.language.split("-")[0] as Language;
    return ["en", "pt", "es"].includes(browserLang) ? browserLang : "en";
  };

  const getSavedLanguage = (): Language => {
    return (
      (localStorage.getItem("preferredLanguage") as Language) ||
      getBrowserLanguage()
    );
  };

  const [language, setLanguage] = useState<Language>(getSavedLanguage());

  useEffect(() => {
    localStorage.setItem("preferredLanguage", language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
