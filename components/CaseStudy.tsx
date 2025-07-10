import React from 'react'
import { useTranslation } from 'next-i18next'
import { FaLightbulb } from 'react-icons/fa'

// This component displays a case study section styled to match the provided image
const CaseStudy: React.FC = () => {
  // Use the 'solutions' namespace for translations
  const { t } = useTranslation('solutions')
  // Removed redundant 'caseStudy.' prefix from translation keys (British English comment)

  return (
    <section id="case-study" className="py-16 bg-white dark:bg-gray-900">
      <div className="container-custom flex flex-col md:flex-row gap-0 md:gap-0 items-stretch justify-center">
        {/* Left column: Before stats */}
        <div className="flex-1 flex flex-col items-center justify-between bg-white dark:bg-blue-950 border-t-8 border-blue-300 dark:border-blue-700 rounded-t-xl md:rounded-l-xl md:rounded-tr-none shadow p-8 min-h-[350px]">
          {/* Icon at the top */}
          <div className="mb-4 mt-2">
            <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M21 12A9 9 0 113 12a9 9 0 0118 0z" />
            </svg>
          </div>
          {/* Large stat 1 */}
          <div className="text-4xl font-bold text-blue-700 dark:text-blue-200 mb-2">{t('left.stat1')}</div>
          <div className="text-gray-600 dark:text-gray-300 mb-4 text-center">{t('left.desc1')}</div>
          {/* Large stat 2 */}
          <div className="text-2xl font-bold text-blue-500 dark:text-blue-100 mb-2">{t('left.stat2')}</div>
          <div className="text-gray-600 dark:text-gray-300 text-center">{t('left.desc2')}</div>
        </div>

        {/* Centre column: Main case study summary */}
        <div className="flex-1 flex flex-col items-center justify-center bg-charcoal dark:bg-gray-800 text-white rounded-none md:rounded-none shadow p-8 min-h-[350px] border-t-8 border-charcoal dark:border-gray-700 z-10 relative" style={{marginTop: '-2rem', marginBottom: '-2rem'}}>
          {/* Icon at the top for visual consistency (American English comment) */}
          <div className="mb-4 mt-2">
            <FaLightbulb className="w-8 h-8 text-gold" />
          </div>
          <h3 className="text-2xl font-bold mb-2">{t('title')}</h3>
          <div className="text-gold text-lg font-semibold mb-4">{t('subtitle')}</div>
          <p className="text-base md:text-lg mb-0 text-center">{t('center.desc')}</p>
        </div>

        {/* Right column: After stats */}
        <div className="flex-1 flex flex-col items-center justify-between bg-white dark:bg-green-950 border-t-8 border-green-400 dark:border-green-700 rounded-t-xl md:rounded-r-xl md:rounded-tl-none shadow p-8 min-h-[350px]"> {/* Changed from orange to green for the 'after' panel (British English comment) */}
          {/* Icon at the top */}
          <div className="mb-4 mt-2">
            <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"> {/* Changed icon colour to green (British English comment) */}
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 17l6-6 4 4 8-8" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 17h18" />
            </svg>
          </div>
          {/* Large stat 1 */}
          <div className="text-4xl font-bold text-green-700 dark:text-green-200 mb-2">{t('right.stat1')}</div> {/* Changed stat colour to green (British English comment) */}
          <div className="text-gray-600 dark:text-gray-300 mb-4 text-center">{t('right.desc1')}</div>
          {/* Large stat 2 */}
          <div className="text-2xl font-bold text-green-500 dark:text-green-100 mb-2">{t('right.stat2')}</div> {/* Changed stat colour to green (British English comment) */}
          <div className="text-gray-600 dark:text-gray-300 text-center">{t('right.desc2')}</div>
        </div>
      </div>
    </section>
  )
}

export { CaseStudy } 