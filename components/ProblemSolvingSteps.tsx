import React from 'react'
import { useTranslation } from 'next-i18next'
import { FaSearch, FaBug, FaLightbulb, FaCheckCircle, FaCogs, FaChartLine } from 'react-icons/fa'

// Array of icons for each step, in order
const icons = [
  <FaSearch key="icon-0" className="text-2xl text-gold" />, // Define the problem
  <FaBug key="icon-1" className="text-2xl text-gold" />, // Identify root cause
  <FaLightbulb key="icon-2" className="text-2xl text-gold" />, // Develop solutions
  <FaCheckCircle key="icon-3" className="text-2xl text-gold" />, // Select solution
  <FaCogs key="icon-4" className="text-2xl text-gold" />, // Implement solution
  <FaChartLine key="icon-5" className="text-2xl text-gold" /> // Evaluate outcome
]

export const ProblemSolvingSteps: React.FC = () => {
  // Use the problemSolving namespace for all text
  const { t } = useTranslation('problemSolving')
  const steps = t('steps', { returnObjects: true }) as Array<{ title: string; desc: string }>

  return (
    // Main section for the 6 steps
    <section className="py-16"> {/* Main section for the 6 steps of problem solving. Padding added for vertical spacing. */}
      <div className="container-custom"> {/* Use the same container as other card sections for consistent width and alignment (British English comment) */}
        {/* Section heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal dark:text-white mb-4">
            {t('sectionTitle')}
          </h2>
          <p className="text-lg text-gold font-semibold">
            {t('sectionSubtitle')}
          </p>
        </div>
        {/* Steps grid - now matches the grid settings of the HR Innovations section for perfect alignment (British English comment) */}
        <div className="grid md:grid-cols-3 gap-10 w-full"> {/* Grid fills container width, matching HR Innovations section (British English comment) */}
          {steps.map((step, idx) => (
            <div key={step.title} className="bg-white/80 dark:bg-gray-800/80 p-10 rounded-2xl shadow-lg flex flex-col items-center text-center w-full mx-auto h-full min-h-[320px]"> {/* Card matches width and alignment of HR Innovations cards (British English comment) */}
              {/* Step icon */}
              <div className="mb-4">{icons[idx]}</div>
              {/* Step title */}
              <h3 className="text-xl font-bold text-charcoal dark:text-white mb-2">{step.title}</h3>
              {/* Step description */}
              <p className="text-gray-600 dark:text-gray-300">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 