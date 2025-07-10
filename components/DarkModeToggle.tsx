import React, { useState, useEffect } from 'react'
import { useDarkMode } from '../contexts/DarkModeContext'

export const DarkModeToggle: React.FC = () => {
  const [mounted, setMounted] = useState(false)
  const { isDarkMode, toggleDarkMode } = useDarkMode()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="w-12 h-6 bg-gray-300 dark:bg-gray-600 rounded-full animate-pulse"></div>
    )
  }

  // Slider switch for dark mode toggle
  return (
    <button
      onClick={toggleDarkMode}
      className="relative w-12 h-6 rounded-full focus:outline-none transition-colors duration-200"
      aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
      style={{ background: isDarkMode ? '#2C3E50' : '#e5e7eb' }} // Charcoal or light grey
    >
      {/* Slider track */}
      <span className={`absolute left-0 top-0 w-full h-full rounded-full transition-colors duration-200 ${isDarkMode ? 'bg-charcoal' : 'bg-gray-300'}`}></span>
      {/* Slider thumb */}
      <span
        className={`absolute top-1 left-1 w-4 h-4 rounded-full shadow-md transition-transform duration-200 flex items-center justify-center ${isDarkMode ? 'translate-x-6 bg-gold' : 'translate-x-0 bg-white'}`}
      >
        {isDarkMode ? (
          // Moon icon
          <svg className="w-3 h-3 text-charcoal" fill="currentColor" viewBox="0 0 20 20">
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
        ) : (
          // Sun icon
          <svg className="w-3 h-3 text-gold" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </span>
    </button>
  )
}
// This slider visually indicates and toggles dark mode, with icons for clarity. 