import { useTranslation } from "react-i18next";

export const useLangData = (param: any) => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  if (!param?.translations || !Array.isArray(param.translations)) {
    return null;
  }

  // Normalize locale (e.g., "uz-UZ" -> "uz")
  const norm = (l: string) => (typeof l === "string" ? l.toLowerCase() : "");
  const target = norm(currentLang);
  const base = target.includes("-") ? target.split("-")[0] : target;

  const translations = param.translations;

  // Try exact match by code or title
  const exact = translations.find(
    (item: any) =>
      norm(item?.lang?.code) === target || norm(item?.lang?.title) === target
  );
  if (exact) return exact;

  // Try base language (e.g., en-US -> en)
  const baseMatch = translations.find(
    (item: any) =>
      norm(item?.lang?.code) === base || norm(item?.lang?.title) === base
  );
  if (baseMatch) return baseMatch;

  // No suitable translation for website language
  return null;
};
