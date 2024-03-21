import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from '../locals/en.json';
import sv from '../locals/sv.json';
import fr from '../locals/fr.json';
import ar from '../locals/ar.json';
import ger from '../locals/ger.json';

const languageResource = {
  en: {translation: en},
  sv: {translation: sv},
  fr: {translation: fr},
  ar: {translation: ar},
  ger: {translation: ger},
};

i18next.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  lng: 'en',
  fallbackLng: 'en',
  resources: languageResource,
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
});

export default i18next;
