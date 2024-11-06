import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import EN from "@/lib/translations/en.json";
import FR from "@/lib/translations/fr.json";
import { Lang } from "@/types/Lang";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
    en: {
        translation: EN,
    },
    fr: {
        translation: FR,
    },
};

i18n.use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: "en",
        fallbackLng: "en",

        interpolation: {
            escapeValue: false, // react already safes from xss
        },
    });

export const langs: Lang[] = [
    {
        code: "en",
        name: "English",
        flag: "en-flag.svg",
    },
    {
        code: "fr",
        name: "Français",
        flag: "fr-flag.svg",
    },
];

export default i18n;
