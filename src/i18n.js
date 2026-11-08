import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

const isBrowser = typeof window !== 'undefined';

let instance = i18n.use(initReactI18next);
if (isBrowser) {
  instance = instance.use(Backend).use(LanguageDetector);
}

instance.init({
    fallbackLng: 'en',
    debug: false,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

const syncDocumentMeta = (lng) => {
  document.documentElement.lang = lng;
  document
    .querySelector('meta[name="description"]')
    ?.setAttribute('content', i18n.t('site.seo.description', { lng }));
};

if (isBrowser) {
  i18n.on('languageChanged', syncDocumentMeta);
}

export default i18n;