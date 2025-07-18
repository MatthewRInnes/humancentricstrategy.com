import React, { useState } from 'react'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'
import { LanguageSwitcher } from './LanguageSwitcher'
import { DarkModeToggle } from './DarkModeToggle'
import { ClientOnly } from './ClientOnly'

export const Navbar: React.FC = () => {
  const { t } = useTranslation('header')
  const router = useRouter()
  // State to track if the mobile menu is open
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { href: '/', label: t('navbar.home') }, // Home navigates to root
    { href: '/services', label: t('navbar.services') }, // Services page
    { href: '/blog', label: t('navbar.blog') }, // Blog page
    { href: '/#about', label: t('navbar.about') }, // About section on homepage
    { href: '/guide', label: t('navbar.guide') }, // Guide Page now uses translation key (British English comment)
    { href: '/#testimonials', label: t('navbar.testimonials') }, // Testimonials section on homepage, translation key (British English comment)
    { href: '/#contact', label: t('navbar.contact') }, // Contact section on homepage
  ]

  // Function to close the mobile menu when a link is clicked
  const handleMobileLinkClick = () => setMobileMenuOpen(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-sm border-b border-gray-200"> {/* Always white background, no dark mode for nav (British English comment) */}
      {/* Increased navbar height to h-44 + 14px for 30px more background space */}
      <div className="container-custom">
        <div className="flex items-center justify-between h-44 md:h-56 lg:h-48 pb-6 md:pb-6 lg:pb-5">{/* Reduced mobile navbar height by 50px (h-44 instead of h-56) for better alignment on mobiles (British English comment) */}
          {/* Logo - Reduced top padding (pt-5) to move logo up by 20px */}
          <Link href="/" className="flex items-center pt-5">
            {/* Logo image with transparent background for proper embedding (British English comment) */}
            <span className="flex flex-col items-center justify-center" style={{ padding: '10px 20px' }}> {/* Removed white background (British English comment) */}
              <Image
                src="/images/humanGraphic.png" // Logo image
                alt="Human Centric Consulting Logo Graphic"
                width={48}
                height={48}
                className="object-contain w-10 h-10 md:w-14 md:h-14 lg:w-10 lg:h-10 mb-1" // Made logo even smaller on large screens (British English comment)
              />
              <span className="font-playfair font-bold text-xs md:text-sm lg:text-base text-charcoal leading-tight tracking-wide text-center mt-1">{/* Logo writing (British English comment) */}HUMAN CENTRIC CONSULTING</span>
              <span className="font-merriweather text-[8px] md:text-[10px] lg:text-xs text-charcoal tracking-widest mt-1 text-center">{/* Tagline (British English comment) */}— YOUR HR BUSINESS PARTNERS —</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-4"> {/* Show nav links only on large screens and up (British English comment) */}
            {/* Reduced space-x-8 to space-x-4 for less space between links */}
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-charcoal hover:text-gold transition-colours duration-200 font-medium text-sm md:text-base lg:text-base" // Always dark text for nav links (British English comment)
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center space-x-4">
            <LanguageSwitcher variant="nav" /> {/* Use nav variant for gold background and dark text, always visible (British English comment) */}
            <ClientOnly>
              <DarkModeToggle /> {/* Keep dark mode toggle so rest of site can use dark mode (British English comment) */}
            </ClientOnly>
            {/* Mobile menu button */}
            <button 
              className="lg:hidden p-2 rounded-lg text-charcoal hover:bg-gray-100"
              aria-label="Toggle mobile menu"
              onClick={() => setMobileMenuOpen((open) => !open)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        {/* Mobile menu dropdown - only visible when open on small screens */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute left-0 right-0 top-full bg-white shadow-lg border-b border-gray-200 animate-fade-in"> {/* Always white background for mobile menu (British English comment) */}
            <div className="flex flex-col items-start p-6 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-charcoal hover:text-gold transition-colours duration-200 font-medium text-lg w-full" // Always dark text for mobile nav links (British English comment)
                  onClick={handleMobileLinkClick}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
} 