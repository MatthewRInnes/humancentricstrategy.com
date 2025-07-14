import React from 'react'
import { useTranslation } from 'next-i18next'
import { FaLightbulb, FaChartBar, FaPiggyBank, FaRobot, FaLeaf, FaPuzzlePiece, FaUsers, FaUserCheck, FaGlobe } from 'react-icons/fa'
import GoldAccent from './GoldAccent'

// This component is for the homepage only and uses the new clientResultsHome.json translation file
const icons = [
  <FaLightbulb key="icon-0" className="text-2xl text-gold" />, // Future of Work & Hybrid Workforce
  <FaChartBar key="icon-1" className="text-2xl text-gold" />, // HR Data Analytics & Predictive Insights
  <FaPiggyBank key="icon-2" className="text-2xl text-gold" />, // Employee Financial Wellbeing
  <FaRobot key="icon-3" className="text-2xl text-gold" />, // AI & Automation in HR
  <FaLeaf key="icon-4" className="text-2xl text-gold" />, // Sustainable HR & Green Workplaces
  <FaPuzzlePiece key="icon-5" className="text-2xl text-gold" />, // Neurodiversity & Inclusive Hiring
  <FaUsers key="icon-6" className="text-2xl text-gold" />, // Remote Leadership & Digital Collaboration
  <FaUserCheck key="icon-7" className="text-2xl text-gold" />, // Personalized Employee Experience (American English comment)
  <FaGlobe key="icon-8" className="text-2xl text-gold" /> // Global Talent Mobility (British English comment)
]

const ClientResultsHome: React.FC = () => {
  // Use the clientResultsHome namespace for all text
  const { t } = useTranslation('clientResultsHome')
  // Get the array of results from the translation file
  let results = t('results', { returnObjects: true }) as any
  // Fallback: If results is not an array, use an empty array (British English comment)
  if (!Array.isArray(results)) results = [];

  // Defensive check: Ensure results is an array before mapping
  if (!Array.isArray(results)) {
    // If not, show a clear error message for debugging
    return (
      <section className="py-16 bg-gold/10 dark:bg-dark text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-4">Error: Results data is not an array</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">Please check the translation file for 'clientResultsHome' and ensure the 'results' key is an array.</p>
      </section>
    )
  }

  return (
    // Main section for homepage results
    <section className="py-16 relative"> {/* Small gold accent in the top right corner (British English comment) */}
      <GoldAccent position="right" size="small" corner="top" />
      <div className="w-full max-w-7xl mx-auto px-4"> {/* Match width and alignment to all sections (American English comment) */}
        {/* Section heading */}
        <div className="text-left mb-12"> {/* Always left-aligned (American English comment) */}
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal dark:text-white mb-4 text-left">
            {t('sectionTitle')}
          </h2>
          <p className="text-lg text-gold font-semibold text-left">
            {t('sectionSubtitle')}
          </p>
        </div>
        {/* Results grid - each card is a unique, modern HR topic */}
        <div className="grid md:grid-cols-3 gap-10 w-full"> {/* Grid fills container width (American English comment) */}
          {results.map((result, idx) => (
            <div key={result.title} className="bg-white/80 dark:bg-gray-800/80 p-10 pb-8 rounded-2xl shadow-lg flex flex-col items-center text-center w-full mx-auto h-full"> {/* Added extra bottom padding for mobile spacing (British English comment) */}
              {/* Result icon */}
              <div className="mb-4">{icons[idx]}</div>
              {/* Result title */}
              <h3 className="text-xl font-bold text-charcoal dark:text-white mb-2">{result.title}</h3>
              {/* Result description */}
              <p className="text-gray-600 dark:text-gray-300 mb-2">{result.desc}</p>
              {/* Spacer to push label to the bottom (American English comment) */}
              <div className="flex-grow" />
              {/* Label */}
              <span className="inline-block bg-gold/20 text-gold font-semibold px-4 py-2 rounded-full text-sm mb-2 mt-2">{result.label}</span>
            </div>
          ))}
        </div>
        {/* CTA section - call to action for the homepage */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold text-charcoal dark:text-white mb-2">{t('ctaTitle')}</h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">{t('ctaDesc')}</p>
          <button
            className="btn-primary text-lg px-8 py-4"
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                const yOffset = -100; // Offset for fixed navbar (American English comment)
                const y = contactSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({ top: y, behavior: 'smooth' });
              }
            }}
          >
            {t('ctaButton')}
          </button>
        </div>
      </div>
    </section>
  )
}

export default ClientResultsHome 