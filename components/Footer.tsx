import React from 'react'
import { useTranslation } from 'next-i18next'
import { LanguageSwitcher } from './LanguageSwitcher'
import Image from 'next/image'
import Link from 'next/link'

export const Footer: React.FC = () => {
  const { t } = useTranslation('footer')

  return (
    <footer className="bg-charcoal dark:bg-gray-900 text-white py-12">
      <div className="container-custom">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2 flex flex-col items-center">
            {/* Logo image with white background for visibility in all modes, now with 20px padding on all sides and tightly wrapped */}
            <span
              className="bg-white rounded-lg inline-flex flex-col items-center justify-center mb-2"
              style={{ padding: '20px 40px' }} // More horizontal padding for a wider logo background (British English comment)
            >
              <Image
                src="/images/humanGraphic.png"
                alt="Human Centric Strategy Logo"
                width={60}
                height={60}
                className="object-contain"
              />
              {/* Logo writing (British English comment) */}
              <span className="font-playfair font-bold text-xs md:text-sm lg:text-base text-charcoal leading-tight tracking-wide text-center mt-1">
                {t('logoTitle')}
              </span>
              {/* Tagline (British English comment) */}
              <span className="font-merriweather text-[8px] md:text-[10px] lg:text-xs text-charcoal tracking-widest mt-1 text-center">
                — {t('logoSubtitle')} —
              </span>
            </span>
            {/* Company description for credibility (British English comment) */}
            <p className="text-gray-300 text-center text-sm mb-4 max-w-xs">
              {t('description')}
            </p>
            {/* Language selector with white background and dark text for visibility */}
            <div className="flex space-x-4 mb-4">
              <span className="rounded px-3 py-1 bg-gold border border-gold text-charcoal dark:bg-gold dark:text-white"> {/* Gold background and border for maximum visibility in both modes (British English comment) */}
                <LanguageSwitcher />
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{t('quickLinks')}</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-300 hover:text-gold transition-colours duration-200">
                  {t('home')}
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-gold transition-colours duration-200">
                  {t('about')}
                </a>
              </li>
              <li>
                <a href="#solutions" className="text-gray-300 hover:text-gold transition-colours duration-200">
                  {t('solutions')}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-gold transition-colours duration-200">
                  {t('contact')}
                </a>
              </li>
            </ul>
          </div>

          {/* Services List for quick reference (British English comment) */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{t('ourServices')}</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>{t('service1')}</li>
              <li>{t('service2')}</li>
              <li>{t('service3')}</li>
              <li>{t('service4')}</li>
              <li>{t('service5')}</li>
              <li>{t('service6')}</li>
            </ul>
          </div>

          {/* Contact Info - visually distinct, only email and phone (British English comment) */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{t('contactTitle')}</h3>
            <div className="space-y-2 text-gray-300 text-sm bg-gold/10 rounded-lg p-4">
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12H8m8 0a8 8 0 11-16 0 8 8 0 0116 0z" /></svg>
                <span>{t('email')}</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm0 8a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-2zm8-8a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zm0 8a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
                <span>{t('phone')}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tagline moved below the grid, above the bottom bar, and centred */}
        <div className="w-full flex justify-center mt-4 mb-8">
          <p className="text-charcoal text-lg text-center max-w-2xl"> {/* Ensures the tagline is always visible, even with a white background logo (British English comment) */}
            {t('tagline')}
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            © 2025 {t('company')}. {t('rights')}<br />
            Designed & developed by Matthew R Innes
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy-policy" legacyBehavior>
              <a className="text-gray-300 hover:text-gold text-sm transition-colors duration-200"> {/* Link to the dedicated privacy policy page (British English comment) */}
                {t('privacy')}
              </a>
            </Link>
            <Link href="/terms" legacyBehavior>
              <a className="text-gray-300 hover:text-gold text-sm transition-colors duration-200"> {/* Link to the dedicated terms and conditions page (British English comment) */}
                {t('terms')}
              </a>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
} 