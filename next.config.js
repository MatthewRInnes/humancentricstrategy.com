/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config'); // Import i18n config (British English comment)

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['via.placeholder.com'],
    formats: ['image/webp', 'image/avif'],
  },
  i18n, // Enable i18n for Next.js to pass locale to getStaticProps (British English comment)
  webpack: (config) => {
    return config
  },
}