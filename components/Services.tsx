import React, { useState } from 'react'
import { useTranslation } from 'next-i18next'
import { FaUserCheck, FaUserPlus, FaCogs, FaAward, FaChartLine, FaHandshake } from 'react-icons/fa'
import GoldAccent from './GoldAccent'

export const Solutions: React.FC = () => {
  const { t } = useTranslation('services')

  // State to manage which modal is open (null means none)
  const [openModal, setOpenModal] = useState<string | null>(null)

  // Function to open a modal for a service
  const handleOpenModal = (key: string) => setOpenModal(key)
  // Function to close the modal
  const handleCloseModal = () => setOpenModal(null)

  // Key achievements from Arbor Therapy experience
  const achievements = [
    {
      key: 'retention',
      title: 'Employee Retention Enhancement',
      description: 'Increased employee retention by 20% through strategic people strategies aligned with organisational goals.',
      icon: <FaUserCheck className="w-8 h-8 text-gold" />,
      metric: '20%',
      metricLabel: 'Retention Increase'
    },
    {
      key: 'talent',
      title: 'Talent Acquisition & Retention',
      description: 'Reduced turnover by 15% by leading full-cycle talent acquisition and retention initiatives.',
      icon: <FaUserPlus className="w-8 h-8 text-gold" />,
      metric: '15%',
      metricLabel: 'Turnover Reduction'
    },
    {
      key: 'payroll',
      title: 'Payroll System Optimization',
      description: 'Cut payroll processing time by 15% and improved accuracy by 20% through automation and process enhancements.',
      icon: <FaCogs className="w-8 h-8 text-gold" />,
      metric: '15%',
      metricLabel: 'Time Savings'
    },
    {
      key: 'wellness',
      title: 'Employee Wellness & Recognition',
      description: 'Boosted employee satisfaction scores by 25% by developing and launching wellness and recognition programmes.',
      icon: <FaAward className="w-8 h-8 text-gold" />,
      metric: '25%',
      metricLabel: 'Satisfaction Boost'
    },
    {
      key: 'compliance',
      title: 'Payroll Compliance & Controls',
      description: 'Decreased payroll-related errors by 20% by implementing comprehensive audit controls and compliance measures.',
      icon: <FaChartLine className="w-8 h-8 text-gold" />,
      metric: '20%',
      metricLabel: 'Error Reduction'
    },
    {
      key: 'workforce',
      title: 'Workforce Planning & Restructuring',
      description: 'Ensured 100% role alignment during restructuring by directing workforce planning and performance management strategies.',
      icon: <FaHandshake className="w-8 h-8 text-gold" />,
      metric: '100%',
      metricLabel: 'Role Alignment'
    }
  ]

  return (
    <section id="solutions" className="section-padding relative"> {/* Small gold accent in the top right corner (British English comment) */}
      <GoldAccent position="right" size="small" corner="top" />
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal dark:text-white mb-4">
            Proven Results & Achievements
          </h2>
          <p className="text-xl text-gold font-semibold">
            Real outcomes delivered for growing organisations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, idx) => (
            <div
              key={achievement.key}
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-700 relative overflow-hidden"
            >
              {/* Metric badge */}
              <div className="absolute top-4 right-4 bg-gold/20 text-gold font-bold text-sm px-3 py-1 rounded-full">
                {achievement.metric}
              </div>
              
              <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mb-6">
                {achievement.icon}
              </div>
              
              <h3 className="text-xl font-bold text-charcoal dark:text-white mb-4">
                {achievement.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                {achievement.description}
              </p>
              
              <div className="text-sm text-gold font-semibold">
                {achievement.metricLabel}
              </div>
              
              <div className="mt-6">
                <button 
                  className="btn-secondary text-sm" 
                  onClick={() => handleOpenModal(achievement.key)}
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action section */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-charcoal dark:text-white mb-4">
            Ready to achieve similar results?
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help your organisation improve retention, optimise processes, and boost employee satisfaction.
          </p>
          <button className="btn-primary text-lg px-8 py-4">
            Book Your Consultation
          </button>
        </div>

        {/* Modal popup for achievement details */}
        {openModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-8 max-w-lg w-full relative animate-fade-in">
              {/* Close button */}
              <button
                className="absolute top-4 right-4 text-gray-400 hover:text-gold text-2xl font-bold focus:outline-none"
                onClick={handleCloseModal}
                aria-label="Close modal"
              >
                &times;
              </button>
              
              {/* Modal content */}
              <div className="text-center">
                <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mb-6 mx-auto">
                  {achievements.find(a => a.key === openModal)?.icon}
                </div>
                <h2 className="text-2xl font-bold mb-4 text-charcoal dark:text-white">
                  {achievements.find(a => a.key === openModal)?.title}
                </h2>
                <div className="text-4xl font-bold text-gold mb-4">
                  {achievements.find(a => a.key === openModal)?.metric}
                </div>
                <p className="text-gray-700 dark:text-gray-200 text-lg mb-6">
                  {achievements.find(a => a.key === openModal)?.description}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Based on real results achieved at Arbor Therapy through strategic HR initiatives and process improvements.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
} 