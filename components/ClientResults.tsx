import React from 'react'
import { useTranslation } from 'next-i18next'
import { FaChartLine, FaHandshake, FaShieldAlt, FaUserPlus, FaBoxes } from 'react-icons/fa'

// Array of icons for each result, in order
const icons = [
  <FaChartLine key="icon-0" className="text-2xl text-gold" />, // Employee Retention Enhancement
  <FaUserPlus key="icon-1" className="text-2xl text-gold" />, // Talent Acquisition & Retention
  <FaChartLine key="icon-2" className="text-2xl text-gold" />, // Payroll System Optimization
  <FaHandshake key="icon-3" className="text-2xl text-gold" />, // Employee Wellness & Recognition
  <FaShieldAlt key="icon-4" className="text-2xl text-gold" />, // Payroll Compliance & Controls
  <FaBoxes key="icon-5" className="text-2xl text-gold" /> // Workforce Planning & Restructuring
]

export const ClientResults: React.FC = () => {
  // Use the clientResults namespace for all text
  const { t } = useTranslation('clientResults')
  const results = t('results', { returnObjects: true }) as Array<{ metric: string; title: string; desc: string; label: string }>

  // Defensive check: Ensure results is an array before mapping (British English comment)
  if (!Array.isArray(results)) {
    return (
      <section className="py-16 bg-gold/10 dark:bg-dark text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-4">Error: Results data is not an array</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">Please check the translation file for 'clientResults' and ensure the 'results' key is an array.</p>
      </section>
    )
  }

  return (
    // Main section for client results
    <section className="py-16 bg-gold/10 dark:bg-dark">
      {/* Section heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-charcoal dark:text-white mb-4">
          {t('sectionTitle')}
        </h2>
        <p className="text-lg text-gold font-semibold">
          {t('sectionSubtitle')}
        </p>
      </div>
      {/* Results grid */}
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {results.map((result, idx) => (
          <div key={result.title} className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg flex flex-col items-center text-center">
            {/* Result icon */}
            <div className="mb-4">{icons[idx]}</div>
            {/* Metric */}
            <div className="text-3xl font-bold text-gold mb-2">{result.metric}</div>
            {/* Result title */}
            <h3 className="text-xl font-bold text-charcoal dark:text-white mb-2">{result.title}</h3>
            {/* Result description */}
            <p className="text-gray-600 dark:text-gray-300 mb-2">{result.desc}</p>
            {/* Label */}
            <span className="inline-block bg-gold/20 text-gold font-semibold px-4 py-2 rounded-full text-sm mb-2">{result.label}</span>
            {/* Learn More button */}
            <button className="btn-secondary text-sm mt-2">{t('learnMore')}</button>
          </div>
        ))}
      </div>
      {/* CTA section */}
      <div className="text-center mt-12">
        <h3 className="text-2xl font-bold text-charcoal dark:text-white mb-2">{t('ctaTitle')}</h3>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">{t('ctaDesc')}</p>
        <button className="btn-primary text-lg px-8 py-4">{t('ctaButton')}</button>
      </div>
    </section>
  )
} 