import { useContext } from "react";
import { LanguageContext } from "../../context";
import { translations } from "../../translate";

export const useTranslation = () => {
  const { language } = useContext(LanguageContext)!;
  const t = (key: keyof (typeof translations)["en"]) =>
    translations[language][key];

  return { t };
};
