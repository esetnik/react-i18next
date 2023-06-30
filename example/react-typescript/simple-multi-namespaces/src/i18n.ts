import i18n, { InitOptions, ResourceKey } from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import resourcesToBackend from 'i18next-resources-to-backend';
import { initReactI18next } from 'react-i18next';
import { COOKIE_NAME_LANG, SUPPORTED_LANGUAGES } from './constants';
import assignments from './locales/en/assignments.json';
import auth from './locales/en/auth.json';
import bundles from './locales/en/bundles.json';
import certifications from './locales/en/certifications.json';
import classes from './locales/en/classes.json';
import dashboard from './locales/en/dashboard.json';
import error from './locales/en/error.json';
import invitations from './locales/en/invitations.json';
import modals from './locales/en/modals.json';
import reports from './locales/en/reports.json';
import trainingPlans from './locales/en/trainingPlans.json';
import transcripts from './locales/en/transcripts.json';
import translation from './locales/en/translation.json';
import users from './locales/en/users.json';

export const defaultNS: Namespace = 'translation';
export const resources = {
  en: {
    assignments,
    auth,
    bundles,
    certifications,
    classes,
    dashboard,
    error,
    invitations,
    modals,
    transcripts,
    trainingPlans,
    translation,
    users,
    reports,
  },
} as const;

export const ns = [
  'assignments',
  'auth',
  'bundles',
  'certifications',
  'classes',
  'dashboard',
  'error',
  'invitations',
  'modals',
  'transcripts',
  'trainingPlans',
  'translation',
  'users',
  'reports',
] as const;

export type Namespace = (typeof ns)[number];

export const ResourcesToBackend = resourcesToBackend(
  (language, namespace, callback) => {
    import(`../public/locales/${language}/${namespace}.json`)
      .then((resources: ResourceKey) => {
        callback(null, resources);
      })
      .catch((error: Error) => {
        callback(error, null);
      });
  }
);

export const i18nInitOptions: InitOptions = {
  supportedLngs: SUPPORTED_LANGUAGES,
  fallbackLng: 'en',
  debug: true,
  partialBundledLanguages: true,
  resources,
  ns,
  interpolation: {
    escapeValue: false,
  },
};

void i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    ...i18nInitOptions,
    detection: {
      lookupQuerystring: 'lang',
      lookupCookie: COOKIE_NAME_LANG,
    },
  });

i18n.on('languageChanged', (lng) => {
  document.documentElement.setAttribute('lang', lng);
});

export default i18n;

