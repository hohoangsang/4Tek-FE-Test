import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HOME_EN from '~/locales/en/home.json';
import HOME_VI from '~/locales/vi/home.json';
import COMMON_EN from '~/locales/en/common.json';
import COMMON_VI from '~/locales/vi/common.json';

export const locales = {
  vi: 'Tiếng việt',
  en: 'English'
} as const;

export const resources = {
  en: {
    //gọi là namespace
    home: HOME_EN,
    common: COMMON_EN
  },
  vi: {
    home: HOME_VI,
    common: COMMON_VI
  }
} as const;

export const defaultNS = 'product';


i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  defaultNS,
  interpolation: {
    escapeValue: false
  }
});
