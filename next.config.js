/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['via.placeholder.com'],
    formats: ['image/webp', 'image/avif'],
  },
  // Disable i18n in next.config.js as it's handled by next-i18next
  // i18n: {
  //   locales: ['en', 'es'],
  //   defaultLocale: 'en',
  // },
  webpack: (config) => {
    return config
  },
}