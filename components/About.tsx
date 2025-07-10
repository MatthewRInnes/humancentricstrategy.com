import React from 'react'
import { useTranslation } from 'next-i18next'
import GoldAccent from './GoldAccent'

export const About: React.FC = () => {
  const { t } = useTranslation('about')

  return (
    <section id="about" className="section-padding relative"> {/* Small gold accent in the top right corner (British English comment) */}
      <GoldAccent position="right" size="small" corner="top" />
      <div className="container-custom">
        <div className="text-left mb-16"> {/* Always left-aligned (American English comment) */}
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal dark:text-white mb-4 text-left">
            {t('about.title')}
          </h2>
          <p className="text-xl text-gold font-semibold mb-6 text-left">
            {t('about.subtitle')}
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl leading-relaxed text-left">
            {t('about.content')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {(t('about.features', { returnObjects: true }) as any[]).map((feature: any, index: number) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-gold" fill="currentColor" viewBox="0 0 20 20">
                  {index === 0 && (
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                  )}
                  {index === 1 && (
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  )}
                  {index === 2 && (
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  )}
                </svg>
              </div>
              <h3 className="text-xl font-bold text-charcoal dark:text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 