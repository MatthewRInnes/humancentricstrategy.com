import React from 'react'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { GetStaticPropsContext } from 'next'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import Head from 'next/head'

// Terms and Conditions page displays the translated terms from the locale files (British English comment)
export default function Terms() {
  const { t } = useTranslation('footer')
  // Example meta data (replace with translation keys if available)
  const metaTitle = 'Terms & Conditions | Human Centric Strategy'
  const metaDescription = 'Read our terms and conditions to understand your rights and responsibilities when using Human Centric Strategy.'
  const canonicalUrl = 'https://humancentricstrategy.com/terms'
  const ogImage = 'https://humancentricstrategy.com/images/people%20happy.jpg'
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-dark">
      {/* SEO meta tags for terms and conditions page (British English comment) */}
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={canonicalUrl} />
        {/* Open Graph tags for social sharing (British English comment) */}
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={ogImage} />
        {/* Twitter Card tags (British English comment) */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={ogImage} />
      </Head>
      <Navbar />
      <main className="container-custom py-16 pt-56 flex-1">
        {/* Added pt-56 to ensure content is visible below the fixed Navbar (British English comment) */}
        <h1 className="text-3xl md:text-4xl font-bold text-charcoal dark:text-white mb-6 text-center">{t('terms')}</h1>
        <div className="max-w-3xl mx-auto text-lg text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-900 rounded-xl shadow p-8">
          {t('termsContent')}
        </div>
      </main>
      <Footer />
    </div>
  )
}

// Enable server-side translations for this page (British English comment)
export async function getStaticProps(context: GetStaticPropsContext) {
  const locale = context.locale || 'en'
  return {
    props: {
      ...(await serverSideTranslations(locale, ['footer', 'header'])),
    },
  }
} 