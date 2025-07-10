import React from 'react'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'

// PainPointsSection visually highlights common client challenges with a central circular image and two cards. British English comments included.
const PainPointsSection: React.FC = () => {
  // Use the 'industries' namespace for translations
  const { t } = useTranslation('industries')
  // Get the pain points section data from the translation file
  const painPoints = t('painPointsSection', { returnObjects: true }) as any

  return (
    // Section wrapper with padding and background, now using max-w-7xl for full width alignment
    <section className="py-16 bg-white dark:bg-gray-900">
      {/* Container for centring content, now wider */}
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center px-4 sm:px-6 lg:px-8">
        {/* Headline and description */}
        <h2 className="text-3xl font-bold mb-2 text-charcoal dark:text-white text-center">{painPoints.headline}</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-10 text-center">{painPoints.description}</p>
        {/* Flex row for cards and image, now wider and with larger elements */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 w-full">
          {/* Left card: High Staff Turnover */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg p-10 flex-1 max-w-md min-w-[260px] text-center flex flex-col justify-center items-center">
            <h3 className="text-2xl font-bold text-charcoal dark:text-white mb-4">{painPoints.cards[0].title}</h3>
            <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">{painPoints.cards[0].text}</p>
          </div>
          {/* Central circular image, now larger */}
          <div className="flex-shrink-0 flex justify-center items-center">
            <div className="rounded-full overflow-hidden border-4 border-gold w-60 h-60 flex items-center justify-center bg-gray-100 dark:bg-gray-700">
              <Image
                src="/images/confusing.jpg"
                alt={painPoints.imageAlt}
                width={240}
                height={240}
                className="object-cover w-60 h-60"
                priority
              />
            </div>
          </div>
          {/* Right card: Confusing Compliance Requirements */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg p-10 flex-1 max-w-md min-w-[260px] text-center flex flex-col justify-center items-center">
            <h3 className="text-2xl font-bold text-charcoal dark:text-white mb-4">{painPoints.cards[1].title}</h3>
            <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">{painPoints.cards[1].text}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PainPointsSection
// This section uses translations for all text and is styled to match the rest of the site. The image is circular and cards are square as requested, now with wider layout and more text for balance. 