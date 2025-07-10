import React, { useState } from 'react'
import { useTranslation } from 'next-i18next'
import GoldAccent from './GoldAccent'

// FAQSection component displays a list of frequently asked questions and answers as an accordion
export const FAQSection: React.FC = () => {
  // Use the 'faqs' namespace for translations
  const { t } = useTranslation('faqs')
  // Get the array of FAQs from the translation file
  const faqs = t('faqs', { returnObjects: true }) as { question: string; answer: string }[]

  // State to track which FAQ is open (null means none are open)
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  // Function to toggle an FAQ open/closed
  const handleToggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx)
  }

  return (
    <section className="py-12 relative"> {/* Gold accent on the left (British English comment) */}
      <GoldAccent position="left" />
      {/* Section heading */}
      <div className="max-w-3xl mx-auto mb-8 text-center">
        {/* Use translation keys for FAQ heading and subheading */}
        <h2 className="text-3xl font-bold mb-2 text-charcoal dark:text-white">{t('heading')}</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300">{t('subheading')}</p>
      </div>
      {/* FAQ accordion */}
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, idx) => (
          <div key={idx} className="bg-white dark:bg-gray-800 rounded-lg shadow">
            {/* Question button - click to toggle answer */}
            <button
              className="w-full text-left px-6 py-4 focus:outline-none flex justify-between items-center text-charcoal dark:text-white font-semibold text-lg"
              onClick={() => handleToggle(idx)}
              aria-expanded={openIndex === idx}
              aria-controls={`faq-answer-${idx}`}
            >
              {faq.question}
              <span className="ml-4 text-gold text-2xl">{openIndex === idx ? '-' : '+'}</span>
            </button>
            {/* Collapsible answer */}
            {openIndex === idx && (
              <div
                id={`faq-answer-${idx}`}
                className="px-6 pb-4 text-charcoal dark:text-gray-200 animate-fade-in"
              >
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
// This accordion allows users to click a question to reveal or hide the answer. Only one answer is open at a time for clarity.
// This component will automatically show the FAQs in the correct language (English or Spanish) based on the user's selection. 