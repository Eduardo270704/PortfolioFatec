type Language = "en" | "pt" | "es";

export default interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

export { Language };
