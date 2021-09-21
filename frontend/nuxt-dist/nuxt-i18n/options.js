import locale77427e78 from '../../languages/en.js'
import locale774aad26 from '../../languages/fa.js'

export const Constants = {
  COMPONENT_OPTIONS_KEY: "nuxtI18n",
  STRATEGIES: {"PREFIX":"prefix","PREFIX_EXCEPT_DEFAULT":"prefix_except_default","PREFIX_AND_DEFAULT":"prefix_and_default","NO_PREFIX":"no_prefix"},
  REDIRECT_ON_OPTIONS: {"ALL":"all","ROOT":"root","NO_PREFIX":"no prefix"},
}
export const nuxtOptions = {
  isUniversalMode: true,
  trailingSlash: undefined,
}
export const options = {
  vueI18n: {},
  vueI18nLoader: false,
  locales: [{"name":"English","code":"en","iso":"en-US","file":"en.js","layout":"ltr"},{"name":"فارسی","code":"fa","iso":"fa-IR","file":"fa.js","layout":"rtl"}],
  defaultLocale: "en",
  defaultDirection: "ltr",
  routesNameSeparator: "___",
  defaultLocaleRouteNameSuffix: "default",
  sortRoutes: true,
  strategy: "prefix_except_default",
  lazy: false,
  langDir: "/Users/amintado/Documents/projects/company_site/yiiman_engin/frontend/languages",
  rootRedirect: null,
  detectBrowserLanguage: {"alwaysRedirect":false,"cookieCrossOrigin":false,"cookieDomain":null,"cookieKey":"i18n_redirected","cookieSecure":false,"fallbackLocale":"","redirectOn":"root","useCookie":true},
  differentDomains: false,
  baseUrl: "",
  vuex: {"moduleName":"i18n","syncRouteParams":true},
  parsePages: true,
  pages: {},
  skipSettingLocaleOnNavigate: false,
  onBeforeLanguageSwitch: () => {},
  onLanguageSwitched: () => null,
  normalizedLocales: [{"name":"English","code":"en","iso":"en-US","file":"en.js","layout":"ltr"},{"name":"فارسی","code":"fa","iso":"fa-IR","file":"fa.js","layout":"rtl"}],
  localeCodes: ["en","fa"],
}

export const localeMessages = {
  'en.js': () => Promise.resolve(locale77427e78),
  'fa.js': () => Promise.resolve(locale774aad26),
}
