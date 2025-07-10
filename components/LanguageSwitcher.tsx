import React, { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'

const LANGUAGES = [
  { code: 'en', labelKey: 'language.en' },
  { code: 'es', labelKey: 'language.es' },
]

export const LanguageSwitcher: React.FC = () => {
  const router = useRouter()
  const { t } = useTranslation('header')
  const [open, setOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  const currentLang = LANGUAGES.find(l => l.code === router.locale) || LANGUAGES[0]

  // Close menu on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }
    if (open) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [open])

  const handleSelect = (code: string) => {
    setOpen(false)
    if (code !== router.locale) {
      router.push(router.pathname, router.asPath, { locale: code })
    }
  }

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setOpen(v => !v)}
        className="px-3 py-2 rounded-lg text-sm font-medium text-charcoal dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200 flex items-center gap-2 text-charcoal dark:text-white" // Explicitly set text colour for both modes (British English comment)
        aria-haspopup="listbox"
        aria-expanded={open ? 'true' : 'false'} // Use string for ARIA (British English comment)
        aria-label="Select language"
      >
        <span className="text-charcoal dark:text-white">{t(currentLang.labelKey)}</span> {/* Explicitly set text colour for both modes (British English comment) */}
        <svg className={`w-4 h-4 transition-transform ${open ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <ul className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-50 text-charcoal dark:text-white" role="listbox"> {/* Explicitly set text colour for both modes (British English comment) */}
          {LANGUAGES.map(lang => (
            <li
              key={lang.code}
              role="option"
              aria-selected={router.locale === lang.code ? 'true' : 'false'} // Use string for ARIA (British English comment)
              className={`px-4 py-2 cursor-pointer hover:bg-gold/10 dark:hover:bg-gold/20 ${router.locale === lang.code ? 'font-bold text-gold' : 'text-charcoal dark:text-white'} text-charcoal dark:text-white`}
              onClick={e => {
                e.preventDefault(); // Prevent default link behaviour (British English comment)
                setOpen(false);
                if (lang.code !== router.locale) {
                  router.replace(router.pathname, router.asPath, { locale: lang.code }); // Use replace for smoother navigation (British English comment)
                }
              }}
            >
              {t(lang.labelKey)}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
} 