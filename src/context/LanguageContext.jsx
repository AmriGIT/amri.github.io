import { createContext } from "react";
import { translations } from "../data/translations";

export const LanguageContext = createContext({
  language: "id",
  t: translations.id,
  toggleLanguage: () => {},
});
