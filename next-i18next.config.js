// @ts-check

/** @type {import('next-i18next').UserConfig} */
module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
  },
  localePath: './public/locales',
  reloadOnPrerender: process.env.NODE_ENV === 'development',
  // Use common as the default namespace
  defaultNS: 'common',
  // Disable suspense to prevent hydration issues
  react: { 
    useSuspense: false,
  },
  // Only enable debug in development
  debug: process.env.NODE_ENV === 'development',
  // Use dot as key separator
  keySeparator: '.',
  // Use colon as namespace separator
  nsSeparator: ':',
  // Don't use locale subpaths by default
  localeExtension: 'json',
  // Don't use locale subpaths by default
  localeStructure: '{{lng}}/{{ns}}',
  // Enable compatibility with Next.js 13+ app directory
  // (you don't need to change this if you're not using the app directory)
  // compatibilityJSON: 'v3',
  // Don't use the server cache in development
  use: [],
  // Don't use the server cache in development
  serializeConfig: false,
}