import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
// Import the i18n config for next-i18next (British English comment)
import nextI18NextConfig from '../next-i18next.config.js'
import { DarkModeProvider } from '../contexts/DarkModeContext'
import { DefaultSeo } from 'next-seo'
import '../styles/globals.css'
import Head from 'next/head'

function App({ Component, pageProps }: AppProps) {
  return (
    <DarkModeProvider>
      {/* Removed <Head> as it is not needed without children (British English comment) */}
      {/* Skip to content link for keyboard users (British English comment) */}
      <a href="#main-content" className="skip-to-content-link">Skip to main content</a>
      <DefaultSeo
        title="Human Centric Strategy - Expert HR Solutions"
        description="We customize and deliver industry-leading HR functions for modern organizations."
        openGraph={{
          type: 'website',
          locale: 'en_US',
          url: 'https://humancentricstrategy.com',
          siteName: 'Human Centric Strategy',
          title: 'Human Centric Strategy - Expert HR Solutions',
          description: 'We customize and deliver industry-leading HR functions for modern organizations.',
        }}
        additionalMetaTags={[
          {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1',
          },
        ]}
      />
      <Component {...pageProps} />
    </DarkModeProvider>
  )
}

// Export the app wrapped with translation and config (British English comment)
export default appWithTranslation(App, nextI18NextConfig) 