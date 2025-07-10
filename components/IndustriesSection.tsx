import React from 'react'
import GoldAccent from './GoldAccent'
import { useTranslation } from 'next-i18next'
import { FaLaptopCode, FaHeartbeat, FaChalkboardTeacher, FaShoppingCart, FaUniversity, FaIndustry } from 'react-icons/fa'

// Array of icons for each industry (in order)
const industryIcons = [
  <FaLaptopCode className="text-4xl text-gold mb-4" key="tech" />, // Technology
  <FaHeartbeat className="text-4xl text-gold mb-4" key="health" />, // Healthcare
  <FaChalkboardTeacher className="text-4xl text-gold mb-4" key="edu" />, // Education
  <FaShoppingCart className="text-4xl text-gold mb-4" key="retail" />, // Retail
  <FaUniversity className="text-4xl text-gold mb-4" key="finance" />, // Finance
  <FaIndustry className="text-4xl text-gold mb-4" key="manufacturing" />, // Manufacturing
]

// IndustriesSection component displays the industries served
export const IndustriesSection: React.FC = () => {
  // Use the 'industries' namespace for translations
  const { t } = useTranslation('industries')
  // Get the array of industries from the translation file
  const industries = t('industries', { returnObjects: true }) as { title: string; description: string }[]

  return (
    <section className="py-16 relative"> {/* Small gold accent in the top right corner (British English comment) */}
      <GoldAccent position="right" size="small" corner="top" />
      <div className="container-custom">
        <div className="text-left mb-16"> {/* Always left-aligned (American English comment) */}
          <h2 className="text-3xl font-bold mb-2 text-charcoal dark:text-white text-left">{t('sectionTitle')}</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 text-left">{t('sectionSubtitle')}</p>
        </div>
        {/* Industries grid - matches About and Services sections */}
        <div className="grid md:grid-cols-3 gap-8">
          {industries.map((industry, idx) => (
            <div key={industry.title} className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-2xl transition-all duration-300">
              {/* Icon for the industry */}
              {industryIcons[idx]}
              <h3 className="text-xl font-bold text-charcoal dark:text-white mb-3">{industry.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{industry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
// This section visually showcases the industries served, with icons, titles, and descriptions, and supports translation. 