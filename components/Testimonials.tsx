import React from 'react'
import { useTranslation } from 'next-i18next'
import GoldAccent from './GoldAccent'

export const Testimonials: React.FC = () => {
  const { t } = useTranslation('testimonials')

  const testimonials = t('testimonials.items', { returnObjects: true }) as Array<any>;

  return (
    <section id="testimonials" className="section-padding relative"> {/* Gold accent on the right (British English comment) */}
      <GoldAccent position="right" />
      <div className="container-custom">
        <div className="text-left mb-16"> {/* Always left-aligned (American English comment) */}
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal dark:text-white mb-4 text-left">
            {t('testimonials.title')}
          </h2>
          <p className="text-xl text-gold font-semibold text-left">
            {t('testimonials.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial: any, index: number) => (
            <div
              key={index}
              className="bg-white/80 dark:bg-gray-800/80 p-8 rounded-xl relative" // Frosted-glass card effect (British English comment)
            >
              {/* Quote icon */}
              <div className="absolute -top-4 left-8">
                <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
              </div>

              {/* Testimonial content */}
              <div className="pt-4 flex flex-col h-full"> {/* Make testimonial content a flex column (British English comment) */}
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
                {/* Spacer to push author block to the bottom (British English comment) */}
                <div className="flex-grow" />
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center mr-4">
                    <span className="text-gold font-bold text-lg">
                      {testimonial.author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal dark:text-white">
                      {testimonial.author}
                    </h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {testimonial.position}
                    </p>
                    <p className="text-sm text-gold font-medium">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 