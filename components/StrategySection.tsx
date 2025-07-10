import React from 'react'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'

// StrategySection visually highlights unique strategy topics with a central image and two cards. British English comments included.
const StrategySection: React.FC = () => {
  // Use the 'services' namespace for translations
  const { t } = useTranslation('services')
  // Get the strategy section data from the translation file
  const strategy = t('strategySection', { returnObjects: true }) as any

  return (
    // Section wrapper with padding and background, using max-w-7xl for full width alignment
    <section className="py-16 bg-white dark:bg-gray-900">
      {/* Container for centring content, now wider */}
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center px-4 sm:px-6 lg:px-8">
        {/* Headline and description */}
        <h2 className="text-3xl font-bold mb-2 text-charcoal dark:text-white text-center">{strategy.headline}</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-10 text-center">{strategy.description}</p>
        {/* Flex row for cards and image, now wider and with larger elements, and aligned with other sections */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 w-full">
          {/* Left card: Strategic Foresight */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg p-12 flex-1 min-w-[320px] max-w-lg text-center flex flex-col justify-center items-center flex-grow">
            <h3 className="text-2xl font-bold text-charcoal dark:text-white mb-4">{strategy.cards[0].title}</h3>
            <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed mb-2">{strategy.cards[0].text}</p>
            <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">{strategy.cards[0].extra}</p>
          </div>
          {/* Central circular image, now larger */}
          <div className="flex-shrink-0 flex justify-center items-center">
            <div className="rounded-full overflow-hidden border-4 border-gold w-64 h-64 flex items-center justify-center bg-gray-100 dark:bg-gray-700">
              <Image
                src="/images/strategy.jpg"
                alt={strategy.imageAlt}
                width={256}
                height={256}
                className="object-cover w-64 h-64"
                priority
              />
            </div>
          </div>
          {/* Right card: Data-Driven Decision Making */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg p-12 flex-1 min-w-[320px] max-w-lg text-center flex flex-col justify-center items-center flex-grow">
            <h3 className="text-2xl font-bold text-charcoal dark:text-white mb-4">{strategy.cards[1].title}</h3>
            <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed mb-2">{strategy.cards[1].text}</p>
            <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">{strategy.cards[1].extra}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StrategySection
// This section uses translations for all text and is styled to match the rest of the site. The image is circular and cards are square as requested, now with wider layout, more text, and vertical alignment for consistency. 