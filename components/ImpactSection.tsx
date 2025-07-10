import React from 'react'
import { useTranslation } from 'next-i18next'
import GoldAccent from './GoldAccent'

// ImpactSection component displays client success stories
export const ImpactSection: React.FC = () => {
  // Use the 'impact' namespace for translations
  const { t } = useTranslation('impact')
  // Get the array of stories from the translation file
  const stories = t('stories', { returnObjects: true }) as { industry: string; challenge: string; solution: string; results: string }[]

  return (
    <section className="py-16 relative"> {/* Gold accent on the right (British English comment) */}
      <GoldAccent position="right" />
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-2 text-charcoal dark:text-white">{t('sectionTitle')}</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">{t('sectionSubtitle')}</p>
        </div>
        {/* Stories grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Defensive check to ensure stories is an array before mapping (British English comment) */}
          {Array.isArray(stories) && stories.map((story, idx) => (
            <div key={idx} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 flex flex-col hover:shadow-2xl transition-all duration-300">
              <div className="mb-4">
                <span className="inline-block bg-gold/20 text-gold font-semibold px-4 py-2 rounded-full text-sm mb-2">{story.industry}</span>
              </div>
              {/* Use translation keys for subheadings to support multilingual display */}
              <h3 className="font-bold text-charcoal dark:text-white mb-2 text-lg">{t('challengeHeading')}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{story.challenge}</p>
              <h3 className="font-bold text-charcoal dark:text-white mb-2 text-lg">{t('solutionHeading')}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{story.solution}</p>
              <h3 className="text-bold text-gold mb-2 text-lg">{t('resultsHeading')}</h3>
              <p className="text-gold font-semibold">{story.results}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
// This section visually showcases client success stories, with industry, challenge, solution, and results, and supports translation. 