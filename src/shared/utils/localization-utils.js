import i18next from 'i18next';
import { withTranslation } from 'react-i18next';

const setupResources = (namespace, resources) => {
  for (let lang of Object.keys(resources)) {
    if (!i18next || !i18next.hasResourceBundle) return;
    if (!i18next.hasResourceBundle(lang, namespace))
      i18next.addResourceBundle(lang, namespace, resources[lang]);
  }
};

const withLocalization = (
  Component,
  resources,
  name,
  withoutNamespace = false
) => {
  setupResources(name, resources);
  if (withoutNamespace) return withTranslation()(Component);
  return withTranslation(name)(Component);
};

export { withLocalization, setupResources };
