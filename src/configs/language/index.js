import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import uikitLocale from '@enouvo/uikit/src/static/locales/en/common.json';
import frUikitLocale from '@enouvo/uikit/src/static/locales/fr/common.json';
import enLocale from './locales/en.json';
import frLocale from './locales/fr.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: { ...enLocale, ...uikitLocale },
      },
      fr: {
        translation: { ...frLocale, ...frUikitLocale },
      },
    },
    lng: localStorage.getItem('i18nextLng') || 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
