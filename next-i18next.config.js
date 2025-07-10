// @ts-check
const path = require('path'); // Required for absolute path resolution (British English comment)

/** @type {import('next-i18next').UserConfig} */
module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
  },
  // Use process.cwd() for absolute path on the server for Vercel/Next.js compatibility (British English comment)
  localePath: typeof window === 'undefined'
    ? path.join(process.cwd(), 'public', 'locales')
    : '/locales',
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