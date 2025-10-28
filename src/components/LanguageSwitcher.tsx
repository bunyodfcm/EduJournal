import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Icon } from "@iconify/react";

const languages = [
  { code: "uz", label: "O'zbek", icon: "twemoji:flag-uzbekistan" },
  { code: "ru", label: "Русский", icon: "twemoji:flag-russia" },
  { code: "en", label: "English", icon: "twemoji:flag-united-states" },
];

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const currentLang =
    languages.find((lang) => lang.code === i18n.language) || languages[0];

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg border border-border bg-white text-text-primary text-sm font-medium cursor-pointer hover:border-primary transition-colors focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
      >
        <Icon icon={currentLang.icon} width="20" height="20" />
        <span>{currentLang.label}</span>
        <Icon
          icon={isOpen ? "mdi:chevron-up" : "mdi:chevron-down"}
          width="20"
          height="20"
        />
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          ></div>
          <div className="absolute right-0 top-full mt-2 w-48 bg-white border border-border rounded-lg shadow-lg z-20 overflow-hidden">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => changeLanguage(lang.code)}
                className={`w-full flex items-center gap-3 px-4 py-2 text-left hover:bg-bg-secondary hover:text-white transition-colors cursor-pointer ${
                  i18n.language === lang.code
                    ? "bg-primary/10 text-primary"
                    : "text-text-primary"
                }`}
              >
                <Icon icon={lang.icon} width="20" height="20" />
                <span className="text-sm">{lang.label}</span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
