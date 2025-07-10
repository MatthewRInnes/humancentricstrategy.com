import React, { useState } from 'react'
import { useTranslation } from 'next-i18next'
import Head from 'next/head'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { LanguageSwitcher } from '../components/LanguageSwitcher'
import { GoldAccent } from '../components/GoldAccent'
import Image from 'next/image'
import { useRouter } from 'next/router'

// GuidePage: A comprehensive guide for clients, now fully translatable (British English comments)
const GuidePage: React.FC = () => {
  const { t } = useTranslation('guide')
  const steps = t('steps', { returnObjects: true }) as any[]
  const timeline = t('timeline', { returnObjects: true }) as string[]
  const expectations = t('expectations', { returnObjects: true }) as string[]
  const router = useRouter()
  const lang = router.locale || 'en'

  // Helper to get the correct currency and price for the selected language (British English comment)
  const getCurrencyAndPrice = (card: any) => {
    // For Spanish, show euros; for any English (en or en-US), show dollars; otherwise, show pounds (British English comment)
    if (lang.startsWith('es')) {
      return { symbol: '€', price: card.basePriceEUR }
    } else if (lang === 'en' || lang === 'en-US') {
      return { symbol: '$', price: card.basePriceUSD }
    } else {
      return { symbol: '£', price: card.basePriceGBP }
    }
  }

  // Calculator state (British English comment)
  const [employees, setEmployees] = useState(10)
  const [calcResult, setCalcResult] = useState<string | null>(null)

  // Handle calculator logic (British English comment)
  const handleCalculate = () => {
    // Use the Starter plan as the base for calculation (British English comment)
    const cards = t('pricing.cards', { returnObjects: true }) as any[]
    const base = cards[0] // Starter/Inicial
    let price = 0
    let symbol = '£'
    if (lang.startsWith('es')) {
      price = base.basePriceEUR
      symbol = '€'
    } else if (lang === 'en-US') {
      price = base.basePriceUSD
      symbol = '$'
    } else {
      price = base.basePriceGBP
      symbol = '£'
    }
    // Simple logic: scale price by number of employees (British English comment)
    let multiplier = 1
    if (employees > 10 && employees <= 50) multiplier = 2
    if (employees > 50) multiplier = 3
    const total = price * multiplier
    setCalcResult(t('calculator.result', { cost: `${symbol}${total}` }))
  }

  return (
    <>
      <Head>
        <title>{t('metaTitle')}</title>
      </Head>
      {/* Navigation bar at the top of the page (British English comment) */}
      <Navbar />
      {/* Language switcher below the navbar (British English comment) */}
      <LanguageSwitcher />
      <main className="min-h-screen bg-white dark:bg-dark text-charcoal dark:text-white relative overflow-x-clip"> {/* Set main to relative and clip overflow for accents (British English comment) */}
        {/* Gold accent for Tools & Frameworks section, from the very edge (British English comment) */}
        <GoldAccent position="left" size="large" />
        {/* Gold accent for Consulting Process section, from the very edge (British English comment) */}
        <GoldAccent position="right" size="large" />
        <div className="max-w-7xl mx-auto px-4 pt-40 pb-16 relative z-10"> {/* Content stays above gold accents (British English comment) */}
          {/* Page Heading */}
          <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-12 text-left">{t('heading')}</h1> {/* Added mt-12 and left-aligned (American English comment) */}
          <p className="text-lg text-left mb-12">{t('intro')}</p>

          {/* Hero section with image and writing (American English comment) */}
          <section className="mb-16 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8">
            {/* Image on the left */}
            <div className="w-full md:w-1/2 flex justify-center">
              {/* Use next/image for optimisation and accessibility (British English comment) */}
              <Image
                src="/images/guide.jpg"
                alt={t('hero.imageAlt')}
                width={400}
                height={300}
                className="rounded-lg shadow-lg object-cover w-full max-w-md h-auto"
                priority
              />
            </div>
            {/* Writing and CTA on the right */}
            <div className="w-full md:w-1/2 flex flex-col items-start md:items-start">
              <h2 className="text-2xl font-bold mb-4 text-left">{t('hero.ctaWriting')}</h2> {/* Left-aligned (American English comment) */}
              <p className="mb-6 text-lg text-left">{t('hero.sideWriting')}</p>
              <button
                className="btn-primary px-6 py-3 text-lg font-semibold rounded bg-gold text-white hover:bg-gold/80 transition"
                onClick={() => {
                  const form = document.getElementById('contact-form-section');
                  if (form) form.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {t('hero.cta')}
              </button>
            </div>
          </section>

          {/* Tools & Frameworks Section (American English comment) */}
          <section className="mb-16 max-w-7xl mx-auto relative z-10"> {/* Remove overflow-hidden so accent can show (British English comment) */}
            <h2 className="text-2xl font-bold mb-4 text-left relative z-10">{t('tools.heading')}</h2> {/* Left-aligned (American English comment) */}
            <p className="text-left mb-8 text-gray-700 dark:text-gray-200 relative z-10">{t('tools.intro')}</p>
            {/* Responsive grid layout, full width, cards vertically aligned (British English comment) */}
            {(() => {
              const toolsList = t('tools.list', { returnObjects: true }) as any[];
              return Array.isArray(toolsList) ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full px-2 relative z-10"> {/* Responsive grid, full width (British English comment) */}
                  {toolsList.map((tool: any, idx: number) => (
                    <div
                      key={idx}
                      className="bg-white/80 dark:bg-gray-800/80 rounded-lg p-6 shadow-md max-w-full mx-auto text-left border-none transition-all duration-300 hover:shadow-lg focus-within:shadow-lg"
                      tabIndex={0}
                    > {/* Light card style, subtle shadow, no heavy border (British English comment) */}
                      <h3 className="font-bold text-lg mb-2">{tool.name}</h3>
                      <p className="text-sm">{tool.desc}</p>
                    </div>
                  ))}
                </div>
              ) : null;
            })()}
          </section>

          {/* Step-by-step consulting process */}
          <section className="mb-16 max-w-7xl mx-auto relative z-10"> {/* Remove overflow-hidden so accent can show (British English comment) */}
            {/* Subtle gold spot in top right (British English comment) */}
            <div className="absolute top-0 right-0 w-64 h-64 pointer-events-none" style={{ zIndex: 0 }}>
              <div className="w-full h-full rounded-full bg-gradient-to-bl from-gold/30 to-transparent blur-2xl" />
            </div>
            <h2 className="text-2xl font-bold mb-4 text-center relative z-10">{t('stepsHeading')}</h2>
            <ol className="space-y-6 relative z-10"> {/* Removed max-w-3xl for full width (British English comment) */}
              {/** Defensive check: Ensure steps is always an array before mapping (British English comment) */}
              {Array.isArray(steps) && steps.map((step, idx) => (
                <li key={idx} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow flex flex-col md:flex-row items-center gap-4">
                  <span className="text-gold font-bold text-2xl mr-4">{idx + 1}</span>
                  <div>
                    <h3 className="font-bold text-lg mb-1">{step.title}</h3>
                    <p>{step.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          {/* Flowchart/Timeline (simple visual) */}
          <section className="mb-16 max-w-7xl mx-auto relative z-10"> {/* Remove overflow-hidden so accent can show (British English comment) */}
            {/* Gold spot in top left (British English comment) */}
            <div className="absolute top-0 left-0 w-64 h-64 pointer-events-none" style={{ zIndex: 0 }}>
              <div className="w-full h-full rounded-full bg-gradient-to-br from-gold/30 to-transparent blur-2xl" />
            </div>
            <h2 className="text-2xl font-bold mb-4 text-center relative z-10">{t('timelineHeading')}</h2>
            <div className="flex flex-col items-center relative z-10">
              <svg width="700" height="120" viewBox="0 0 700 120" className="mb-4">
                {/* Timeline line */}
                <rect x="60" y="60" width="580" height="4" fill="#c4a35a" />
                {/* Steps */}
                {/** Defensive check: Ensure timeline is always an array before mapping (British English comment) */}
                {Array.isArray(timeline) && timeline.map((label, idx) => (
                  <g key={idx}>
                    <circle cx={60 + idx * 120} cy="62" r="18" fill="#fff" stroke="#c4a35a" strokeWidth="4" />
                    <text x={60 + idx * 120} y="68" textAnchor="middle" fontSize="18" fill="#c4a35a" fontWeight="bold">{idx + 1}</text>
                  </g>
                ))}
              </svg>
              <div className="flex justify-between w-full text-sm text-gray-600 dark:text-gray-300"> {/* Removed max-w-3xl for full width (British English comment) */}
                {/** Defensive check: Ensure timeline is always an array before mapping (British English comment) */}
                {Array.isArray(timeline) && timeline.map((label, idx) => (
                  <span key={idx} className="w-32 text-center">{label}</span>
                ))}
              </div>
            </div>
          </section>

          {/* What to expect section */}
          <section className="mb-16 max-w-7xl mx-auto relative z-10"> {/* Remove overflow-hidden so accent can show (British English comment) */}
            {/* Gold spot in top right (British English comment) */}
            <div className="absolute top-0 right-0 w-64 h-64 pointer-events-none" style={{ zIndex: 0 }}>
              <div className="w-full h-full rounded-full bg-gradient-to-bl from-gold/30 to-transparent blur-2xl" />
            </div>
            <h2 className="text-2xl font-bold mb-4 text-center relative z-10">{t('expectHeading')}</h2>
            <ul className="space-y-4 list-disc list-inside text-gray-700 dark:text-gray-200 relative z-10"> {/* Removed max-w-2xl for full width (British English comment) */}
              {/** Defensive check: Ensure expectations is always an array before mapping (British English comment) */}
              {Array.isArray(expectations) && expectations.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </section>

          {/* Pricing Overview Section (British English comment) */}
          <section className="mb-16 max-w-7xl mx-auto relative z-10"> {/* Remove overflow-hidden so accent can show (British English comment) */}
            {/* Gold spot in top left (British English comment) */}
            <div className="absolute top-0 left-0 w-64 h-64 pointer-events-none" style={{ zIndex: 0 }}>
              <div className="w-full h-full rounded-full bg-gradient-to-br from-gold/30 to-transparent blur-2xl" />
            </div>
            <h2 className="text-2xl font-bold mb-4 text-center relative z-10">{t('pricing.heading')}</h2>
            <p className="text-center mb-8 text-gray-700 dark:text-gray-200 relative z-10">{t('pricing.intro')}</p>
            {(() => {
              const pricingCards = t('pricing.cards', { returnObjects: true }) as any[]
              const fromLabel = t('pricing.from')
              return Array.isArray(pricingCards) ? (
                <div className="flex flex-wrap justify-center gap-8 w-full relative z-10">
                  {pricingCards.map((card: any, idx: number) => {
                    const { symbol, price } = getCurrencyAndPrice(card)
                    // Only show 'From' for the first two cards (British English comment)
                    const showFrom = idx < 2 && price !== null
                    return (
                      <div key={idx} className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow w-full max-w-xs text-center border border-gold flex flex-col justify-between mx-2 transition-all duration-300 hover:shadow-lg">
                        <div>
                          <h3 className="font-bold text-xl mb-3 text-gold tracking-wide uppercase">{card.title}</h3>
                          <p className="text-3xl font-bold mb-2 flex items-center justify-center gap-1">
                            {showFrom && <span className="text-base font-medium text-gray-500 dark:text-gray-300 mr-1">{fromLabel}</span>}
                            {price !== null ? `${symbol}${price}` : t('pricing.customPrice', { symbol })}
                          </p>
                          <ul className="text-base mb-4 list-disc list-inside text-left px-4">
                            {card.features.map((feature: string, i: number) => (
                              <li key={i}>{feature}</li>
                            ))}
                          </ul>
                          {card.extra && <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 font-medium">{card.extra}</p>}
                          {card.details && <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">{card.details}</p>}
                        </div>
                        <div className="mt-6 flex justify-center">
                          <button
                            className="inline-block bg-gold text-white rounded px-6 py-3 font-semibold text-lg hover:bg-gold/80 transition"
                            onClick={() => {
                              const form = document.getElementById('contact-form-section');
                              if (form) form.scrollIntoView({ behavior: 'smooth' });
                            }}
                          >
                            {card.cta}
                          </button>
                        </div>
                      </div>
                    )
                  })}
                </div>
              ) : null
            })()}
          </section>

          {/* Calculator Section (British English comment) */}
          <section className="mb-16 max-w-3xl mx-auto relative z-10">
            <h2 className="text-2xl font-bold mb-4 text-center relative z-10">{t('calculator.heading')}</h2>
            <p className="text-center mb-8 text-gray-700 dark:text-gray-200 relative z-10">{t('calculator.intro')}</p>
            <form
              className="flex flex-col md:flex-row items-center justify-center gap-4"
              onSubmit={e => { e.preventDefault(); handleCalculate(); }}
            >
              <label className="font-semibold" htmlFor="employees">{t('calculator.labelEmployees')}</label>
              <input
                id="employees"
                type="number"
                min={1}
                value={employees}
                onChange={e => setEmployees(Number(e.target.value))}
                className="rounded border-2 border-gold bg-white dark:bg-gray-900 text-charcoal dark:text-white px-4 py-2 w-32 text-center shadow focus:outline-none focus:ring-2 focus:ring-gold"
              />
              <button type="submit" className="btn-primary px-6 py-2 text-lg ml-2">{t('calculator.button')}</button>
            </form>
            {/* Show the result in a box with a contrasting background for readability (British English comment) */}
            {calcResult && (
              <p className="mt-4 text-center text-xl font-bold text-gold bg-white dark:bg-gray-900 rounded-lg px-6 py-4 shadow inline-block">
                {calcResult}
              </p>
            )}
          </section>

          {/* Contact form */}
          <section id="contact-form-section" className="mb-16 max-w-7xl mx-auto relative z-10"> {/* Remove overflow-hidden so accent can show (British English comment) */}
            {/* Gold spot in top right (British English comment) */}
            <div className="absolute top-0 right-0 w-64 h-64 pointer-events-none" style={{ zIndex: 0 }}>
              <div className="w-full h-full rounded-full bg-gradient-to-bl from-gold/30 to-transparent blur-2xl" />
            </div>
            <h2 className="text-2xl font-bold mb-4 text-center relative z-10">{t('form.heading')}</h2>
            <form className="max-w-xl mx-auto bg-gray-50 dark:bg-gray-800 rounded-lg p-8 shadow space-y-6">
              <div>
                <label htmlFor="name" className="block font-semibold mb-1">{t('form.name')}</label>
                <input type="text" id="name" name="name" className="w-full rounded border border-gray-300 dark:border-gray-700 px-4 py-2 bg-white dark:bg-dark" required />
              </div>
              <div>
                <label htmlFor="email" className="block font-semibold mb-1">{t('form.email')}</label>
                <input type="email" id="email" name="email" className="w-full rounded border border-gray-300 dark:border-gray-700 px-4 py-2 bg-white dark:bg-dark" required />
              </div>
              <div>
                <label htmlFor="message" className="block font-semibold mb-1">{t('form.message')}</label>
                <textarea id="message" name="message" rows={4} className="w-full rounded border border-gray-300 dark:border-gray-700 px-4 py-2 bg-white dark:bg-dark" required></textarea>
              </div>
              <button type="submit" className="btn-primary w-full py-3 text-lg">{t('form.button')}</button>
            </form>
          </section>
        </div>
      </main>
      {/* Footer at the bottom of the page (British English comment) */}
      <Footer />
    </>
  )
}

export default GuidePage
// This page is now fully translatable and uses an improved SVG map. All text is in the 'guide' namespace. 

// Ensure the guide namespace is loaded for translations (British English comment)
import { GetServerSideProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['guide', 'header'])), // Load both guide and header namespaces (British English comment)
    },
  }
} 