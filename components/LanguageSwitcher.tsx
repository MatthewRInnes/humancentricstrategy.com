import React, { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'

const LANGUAGES = [
  { code: 'en', labelKey: 'language.en' },
  { code: 'es', labelKey: 'language.es' },
]

export const LanguageSwitcher: React.FC<{ variant?: 'nav' | 'default' }> = ({ variant = 'default' }) => {
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
        className={
          variant === 'nav'
            ? 'px-3 py-2 rounded-lg text-sm font-medium bg-gold text-white hover:bg-gold/90 transition-colors duration-200 flex items-center gap-2' // Gold background and white text for nav (British English comment)
            : 'px-3 py-2 rounded-lg text-sm font-medium text-charcoal dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200 flex items-center gap-2 text-charcoal dark:text-white' // Default styling (British English comment)
        }
        aria-haspopup="listbox"
        aria-expanded={open ? 'true' : 'false'} // Use string for ARIA (British English comment)
        aria-label="Select language"
      >
        <span className={variant === 'nav' ? 'text-charcoal' : 'text-charcoal dark:text-white'}>{t(currentLang.labelKey)}</span> {/* Always dark text for nav variant (British English comment) */}
        <svg className={`w-4 h-4 transition-transform ${open ? 'rotate-180' : ''} ${variant === 'nav' ? 'text-charcoal' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <ul className={
          variant === 'nav'
            ? 'absolute right-0 mt-2 w-40 bg-gold text-charcoal border border-gold rounded-lg shadow-lg z-50' // Gold dropdown, dark text for nav (British English comment)
            : 'absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-50 text-charcoal dark:text-white' // Default dropdown (British English comment)
        } role="listbox">
          {LANGUAGES.map(lang => (
            <li
              key={lang.code}
              role="option"
              aria-selected={router.locale === lang.code ? 'true' : 'false'} // Use string for ARIA (British English comment)
              className={
                variant === 'nav'
                  ? `px-4 py-2 cursor-pointer hover:bg-gold/80 ${router.locale === lang.code ? 'font-bold underline' : ''} text-charcoal` // Always dark text for nav dropdown (British English comment)
                  : `px-4 py-2 cursor-pointer hover:bg-gold/10 dark:hover:bg-gold/20 ${router.locale === lang.code ? 'font-bold text-gold' : 'text-charcoal dark:text-white'} text-charcoal dark:text-white`
              }
              onClick={e => {
                e.preventDefault();
                setOpen(false);
                if (lang.code !== router.locale) {
                  router.push({ pathname: router.pathname, query: router.query }, undefined, { locale: lang.code });
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