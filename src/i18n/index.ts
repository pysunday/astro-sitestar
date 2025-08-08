import path from 'path';
import i18next from 'i18next';

const modules = import.meta.glob('./sitestar/*.js');

async function i18nInit() {
  const resources = {};
  for (const p in modules) {
    const mod = await modules[p]();
    const name = path.basename(p, '.js')
    resources[name] = {
      translation: {
        sitestar: mod.default
      }
    }
  }
  i18next.init({
    lng: 'zh',
    fallbackLng: 'zh',
    resources,
    interpolation: {
      escapeValue: false,
    },
  });
};


export const getI18n = async (lang, name) => {
  await i18nInit()
  i18next.changeLanguage(lang || 'zh')
  return (key, ...args) => {
    if (typeof name === 'string') key = `${name}.${key}`
    return i18next.t(key, ...args);
  }
};

