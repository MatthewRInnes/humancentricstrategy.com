import React from 'react'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'

export const Hero: React.FC = () => {
  // Use the cta namespace for CTA button translations
  const { t: tCta } = useTranslation('cta')
  const { t } = useTranslation('hero')

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-taupe/20 to-white dark:from-dark dark:to-gray-900 pt-56 relative"> {/* Added relative for overlay (British English comment) */}
      {/* Subtle gold gradient overlay (British English comment) */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0" style={{
        background: 'radial-gradient(ellipse 60% 40% at 20% 20%, rgba(196,163,90,0.18) 0%, transparent 80%)',
      }} />
      <div className="w-full max-w-7xl mx-auto px-4 relative z-10"> {/* Match width and alignment to sections below (American English comment) */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-left"> {/* Always left-aligned (American English comment) */}
            <h1 className="text-5xl font-bold mb-4 text-white">
              {t('heading')}
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              {t('subtext')}
            </p>
            {/* CTA buttons: Book My Demo and Talk to a Consultant, side by side */}
            <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
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
                {tCta('book_a_demo')}
              </button>
              <button
                className="btn-secondary text-lg px-8 py-4"
                onClick={() => {
                  // Smoothly scroll to the contact form section
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                {tCta('talk_to_a_consultant')}
              </button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative w-full h-[320px] md:h-[400px] rounded-2xl overflow-hidden shadow-2xl mb-8"> {/* Reduced height and added margin-bottom (British English comment) */}
              {/* Replaced placeholder with actual image of happy people */}
              <Image
                src="/images/people happy.jpg"
                alt="Happy professionals collaborating"
                fill
                className="object-cover"
                priority
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gold/10 rounded-full"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-charcoal/10 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  )
} 