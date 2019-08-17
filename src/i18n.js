import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { localizationUtils } from './shared/utils';
import { common } from './shared/locales';

i18n.use(initReactI18next).init({
  lng: 'enUS',
  interpolation: {
    escapeValue: false
  }
});

/** Global resources */
localizationUtils.setupResources('common', common);

export default i18n;
