import React, { useState } from 'react'
import { GetServerSideProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { Navbar } from '../components/Navbar'
import GoldAccent from '../components/GoldAccent'
import { Footer } from '../components/Footer'
import { useTranslation } from 'next-i18next'
import { ClientResults } from '../components/ClientResults'
import { FaUserPlus, FaChartLine, FaUserTie, FaChalkboardTeacher, FaMapSigns, FaAward, FaUserCheck, FaBook, FaClipboardCheck, FaSearch, FaBalanceScale, FaHandshake, FaShieldAlt, FaUserClock, FaUserFriends, FaProjectDiagram, FaCogs, FaExchangeAlt, FaGraduationCap, FaDollarSign, FaLaptop, FaGlobe, FaGift, FaStar, FaChartBar, FaLeaf } from 'react-icons/fa'
import { Contact } from '../components/Contact'
import StrategySection from '../components/StrategySection' // Import the new strategy section (British English comment)
import Head from 'next/head'
import Image from 'next/image'

export default function Services() {
  const { t } = useTranslation('services')
  const categories = t('categories', { returnObjects: true }) as Array<any>
  const addons = t('addons', { returnObjects: true }) as { title: string; items: string[] }
  const cta = t('cta', { returnObjects: true }) as { title: string; desc: string; button: string; consultantButton?: string }

  // Cleaned up iconMap: removed all duplicate keys, only the first occurrence of each key is kept to resolve linter errors (British English comment)
  const iconMap: { [key: string]: JSX.Element } = {
    // HR Strategy & Business Alignment (unique icons)
    'HR Strategy & Business Alignment': <FaChartLine className="text-3xl text-gold mb-4" />, // Unique
    'Strategic HR Planning': <FaProjectDiagram className="text-3xl text-gold mb-4" />, // Unique
    'HR Strategy & Metrics': <FaBalanceScale className="text-3xl text-gold mb-4" />, // Unique
    'Organizational Design': <FaCogs className="text-3xl text-gold mb-4" />, // Unique (American English spelling)
    'Workforce Planning': <FaUserTie className="text-3xl text-gold mb-4" />, // Unique
    'HR Metrics & KPIs': <FaChartLine className="text-3xl text-gold mb-4" />, // Unique
    'Business Partnership': <FaHandshake className="text-3xl text-gold mb-4" />, // Unique
    // Employee Relations & Engagement (unique icons)
    'Employee Relations & Engagement': <FaUserFriends className="text-3xl text-gold mb-4" />, // Unique
    'Employee Relations': <FaHandshake className="text-3xl text-gold mb-4" />, // Unique
    'Conflict Resolution & Mediation': <FaBalanceScale className="text-3xl text-gold mb-4" />, // Unique
    'Workplace Investigations': <FaSearch className="text-3xl text-gold mb-4" />, // Unique
    'Employee Engagement Programs': <FaAward className="text-3xl text-gold mb-4" />, // Unique
    'Communication Strategies': <FaUserCheck className="text-3xl text-gold mb-4" />, // Unique
    'Grievance Procedures': <FaClipboardCheck className="text-3xl text-gold mb-4" />, // Unique
    // Performance Management (unique icons)
    'Performance Management': <FaChartLine className="text-3xl text-gold mb-4" />, // Unique
    'Performance Management Systems': <FaCogs className="text-3xl text-gold mb-4" />, // Unique
    'Goal Setting & Alignment': <FaMapSigns className="text-3xl text-gold mb-4" />, // Unique
    'Feedback & Coaching': <FaChalkboardTeacher className="text-3xl text-gold mb-4" />, // Unique
    'Performance Analytics': <FaSearch className="text-3xl text-gold mb-4" />, // Now unique for analytics
    'Recognition & Rewards': <FaAward className="text-3xl text-gold mb-4" />, // Unique
    // HR Technology & HRIS Systems (unique icons)
    'HR Technology & HRIS Systems': <FaLaptop className="text-3xl text-gold mb-4" />, // Unique
    'HR Onboarding': <FaUserCheck className="text-3xl text-gold mb-4" />, // Unique
    'Policy Development': <FaClipboardCheck className="text-3xl text-gold mb-4" />, // Unique
    'Employee Handbooks': <FaBook className="text-3xl text-gold mb-4" />, // Book icon for handbooks
    'HR Process Documentation': <FaClipboardCheck className="text-3xl text-gold mb-4" />, // Clipboard icon for documentation (now unique)
    'HR Audits': <FaSearch className="text-3xl text-gold mb-4" />, // Unique
    'HR Data & Analytics': <FaChartLine className="text-3xl text-gold mb-4" />, // Unique
    // Proven Results & Achievements
    'Employee Retention Enhancement': <FaUserCheck className="text-3xl text-gold mb-4" />,
    'Talent Acquisition & Retention': <FaUserPlus className="text-3xl text-gold mb-4" />,
    'Payroll System Optimization': <FaCogs className="text-3xl text-gold mb-4" />,
    'Payroll Compliance & Controls': <FaShieldAlt className="text-3xl text-gold mb-4" />,
    'Employee Wellness & Recognition': <FaAward className="text-3xl text-gold mb-4" />,
    'Workforce Planning & Restructuring': <FaProjectDiagram className="text-3xl text-gold mb-4" />,
    // Change Management & Transformation
    'Change Management Planning': <FaExchangeAlt className="text-3xl text-gold mb-4" />,
    'Stakeholder Engagement': <FaUserFriends className="text-3xl text-gold mb-4" />,
    'Training & Development for Change': <FaChalkboardTeacher className="text-3xl text-gold mb-4" />,
    'Resistance Management': <FaShieldAlt className="text-3xl text-gold mb-4" />,
    'Post-Change Support': <FaUserCheck className="text-3xl text-gold mb-4" />,
    'Transformation Roadmaps': <FaMapSigns className="text-3xl text-gold mb-4" />,
    // Leadership Coaching & Workforce Planning
    'Executive Coaching': <FaGraduationCap className="text-3xl text-gold mb-4" />, // Unique
    'Leadership Development Programs': <FaChalkboardTeacher className="text-3xl text-gold mb-4" />, // Unique
    'Succession Planning': <FaUserTie className="text-3xl text-gold mb-4" />, // Unique
    'Talent Pipeline Development': <FaUserPlus className="text-3xl text-gold mb-4" />, // Unique
    'Performance Coaching': <FaProjectDiagram className="text-3xl text-gold mb-4" />, // Unique
    'Strategic Workforce Planning': <FaBalanceScale className="text-3xl text-gold mb-4" />, // Unique
    // Total Rewards & Compensation
    'Compensation Strategy': <FaDollarSign className="text-3xl text-gold mb-4" />, // Unique
    'Benefits Program Design': <FaAward className="text-3xl text-gold mb-4" />, // Unique
    'Incentive Program Design': <FaGift className="text-3xl text-gold mb-4" />, // Unique (use FaGift for incentives)
    'Job Evaluation & Grading': <FaClipboardCheck className="text-3xl text-gold mb-4" />, // Unique
    'Recognition Programs': <FaStar className="text-3xl text-gold mb-4" />, // Unique (use FaStar for recognition)
    'Compensation Benchmarking': <FaChartBar className="text-3xl text-gold mb-4" />, // Unique (use FaChartBar for benchmarking)
    // Organizational Development
    'Organizational Development': <FaProjectDiagram className="text-3xl text-gold mb-4" />, // Unique
    'Team Building & Development': <FaUserPlus className="text-3xl text-gold mb-4" />, // Unique
    'Culture Transformation': <FaLeaf className="text-3xl text-gold mb-4" />, // Unique (use FaLeaf for culture)
    'Organizational Effectiveness': <FaChartBar className="text-3xl text-gold mb-4" />, // Unique (use FaChartBar for effectiveness)
    // Core HR Services
    'Career Pathing': <FaMapSigns className="text-3xl text-gold mb-4" />,
    'Employee Recognition': <FaAward className="text-3xl text-gold mb-4" />,
    // Culture & Engagement
    'Well-being Initiatives': <FaUserClock className="text-3xl text-gold mb-4" />,
    'DEI Strategy (Diversity, Equity & Inclusion)': <FaHandshake className="text-3xl text-gold mb-4" />,
    // Compliance & Risk
    'Compliance & Risk Mitigation': <FaShieldAlt className="text-3xl text-gold mb-4" />, // Shield for risk
    'Multi-State Compliance': <FaGlobe className="text-3xl text-gold mb-4" />, // Globe for multi-state
    'Compliance Audits': <FaClipboardCheck className="text-3xl text-gold mb-4" />, // Clipboard for audits
    'Policy Development & Review': <FaClipboardCheck className="text-3xl text-gold mb-4" />, // Clipboard for policy
    'Risk Assessment & Management': <FaSearch className="text-3xl text-gold mb-4" />, // Search for risk
    'Regulatory Training': <FaChalkboardTeacher className="text-3xl text-gold mb-4" />, // Chalkboard for training
    // Interim & Fractional HR Support
    'Interim HR Directors / Managers': <FaUserTie className="text-3xl text-gold mb-4" />,
    'Fractional HR Services': <FaUserFriends className="text-3xl text-gold mb-4" />,
    'Project-Based HR Support': <FaProjectDiagram className="text-3xl text-gold mb-4" />,
    // Talent Acquisition & Employer Branding (all unique icons)
    'Talent Acquisition & Employer Branding': <FaUserPlus className="text-3xl text-gold mb-4" />, // User plus for acquisition
    'Recruitment Strategy': <FaMapSigns className="text-3xl text-gold mb-4" />, // Map signs for strategy
    'Employer Brand Development': <FaAward className="text-3xl text-gold mb-4" />, // Award for brand
    'Candidate Experience': <FaUserCheck className="text-3xl text-gold mb-4" />, // User check for experience
    'Recruitment Process Optimization': <FaCogs className="text-3xl text-gold mb-4" />, // Cogs for process
    'Diversity & Inclusion Recruitment': <FaHandshake className="text-3xl text-gold mb-4" />, // Handshake for diversity
    // Spanish keys (optional, fallback to English if not found)
    'Incorporación de Personal': <FaUserCheck className="text-3xl text-gold mb-4" />,
    'Desarrollo de Políticas': <FaClipboardCheck className="text-3xl text-gold mb-4" />,
    'Manuales de Empleados': <FaBook className="text-3xl text-gold mb-4" />,
    'Auditorías de RRHH': <FaSearch className="text-3xl text-gold mb-4" />,
    'Datos y Analítica de RRHH': <FaChartLine className="text-3xl text-gold mb-4" />,
    'Compensación y Beneficios': <FaBalanceScale className="text-3xl text-gold mb-4" />,
    'Búsqueda y Adquisición de Talento': <FaUserPlus className="text-3xl text-gold mb-4" />,
    'Gestión del Desempeño': <FaChartLine className="text-3xl text-gold mb-4" />,
    'Planificación de Sucesión': <FaUserTie className="text-3xl text-gold mb-4" />,
    'Formación y Desarrollo': <FaChalkboardTeacher className="text-3xl text-gold mb-4" />,
    'Planificación de Carrera': <FaMapSigns className="text-3xl text-gold mb-4" />,
    'Reconocimiento de Empleados': <FaAward className="text-3xl text-gold mb-4" />,
    'Programas de Compromiso de Empleados': <FaUserFriends className="text-3xl text-gold mb-4" />,
    'Iniciativas de Bienestar': <FaUserClock className="text-3xl text-gold mb-4" />,
    'Estrategia DEI (Diversidad, Equidad e Inclusión)': <FaHandshake className="text-3xl text-gold mb-4" />,
    'Revisiones de Cumplimiento de RRHH': <FaShieldAlt className="text-3xl text-gold mb-4" />,
    'Resolución de Conflictos y Mediación': <FaBalanceScale className="text-3xl text-gold mb-4" />,
    'Investigaciones Laborales': <FaSearch className="text-3xl text-gold mb-4" />,
    'Directores/Gerentes de RRHH Interinos': <FaUserTie className="text-3xl text-gold mb-4" />,
    'Servicios de RRHH Fraccionales': <FaUserFriends className="text-3xl text-gold mb-4" />,
    'Soporte de RRHH por Proyecto': <FaProjectDiagram className="text-3xl text-gold mb-4" />,
  }

  // Example meta data (replace with translation keys if available)
  const metaTitle = 'HR Services | Human Centric Strategy'
  const metaDescription = 'Explore our full range of HR consulting services, including strategy, compliance, talent acquisition, and more.'
  const canonicalUrl = 'https://humancentricstrategy.com/services'
  const ogImage = 'https://humancentricstrategy.com/images/people%20happy.jpg'
  return (
    <div className="min-h-screen flex flex-col"> {/* Transparent main container to show global background (British English comment) */}
      {/* SEO meta tags and structured data for services page (British English comment) */}
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={canonicalUrl} />
        {/* Open Graph tags for social sharing (British English comment) */}
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={ogImage} />
        {/* Twitter Card tags (British English comment) */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={ogImage} />
        {/* Structured data for organisation (British English comment) */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'Human Centric Strategy',
          url: canonicalUrl,
          logo: ogImage,
          sameAs: [
            'https://www.linkedin.com/company/humancentricstrategy/',
            // Add other social profiles if available
          ],
        }) }} />
      </Head>
      <Navbar />
      {/* Hero Section with gold accent on the left (British English comment) */}
      <section className="relative min-h-[60vh] flex items-center justify-center pt-44 pb-16">
        <GoldAccent position="left" />
        {/* Vertically center the flex row for perfect alignment (American English comment) */}
        <div className="container-custom w-full">
          <div className="flex flex-col md:flex-row items-center justify-between md:items-center w-full min-h-[60vh] gap-8">
            {/* Left: Text and CTA button */}
            <div className="flex-1 flex flex-col items-start justify-center text-left">
              <h1 className="text-4xl md:text-6xl font-montserrat font-bold text-charcoal dark:text-white mb-4 drop-shadow-lg text-left"> {/* Left-aligned (American English comment) */}
                {t('pageTitle')}
              </h1>
              <p className="text-lg md:text-2xl text-charcoal dark:text-white max-w-2xl mb-6 text-left"> {/* Left-aligned (American English comment) */}
                {t('pageIntro')}
              </p>
              <button
                className="btn-primary text-lg px-8 py-4 mt-2"
                onClick={() => {
                  // Smoothly scroll to the contact form section
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Talk to a Consultant
              </button>
            </div>
            {/* Right: Hero image */}
            <div className="flex-1 flex items-center justify-center w-full max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl lg:mt-20">{/* Added lg:mt-20 to move the image down and visually centre it with the text on large screens (British English comment) */}
              {/* Use next/image for optimisation and accessibility (British English comment) */}
              <Image
                src="/images/risk.jpg"
                alt="Risk management illustration"
                width={600}
                height={420}
                className="rounded-xl shadow-lg object-cover w-full h-auto max-h-[420px] md:max-h-[520px] lg:max-h-[600px] xl:max-h-[700px]"
                priority
              />
            </div>
          </div>
        </div>
      </section>
      {/* Render the new StrategySection above Performance Management (British English comment) */}
      <StrategySection />
      {/* Service Categories */}
      {categories.map((cat, catIdx) => {
        // Insert CTA section just before the Performance Management section
        if (cat.title === 'Performance Management') {
          return (
            <React.Fragment key={cat.title}>
              {/* CTA Section with image, aligned with other sections (British English comment) */}
              <section id="cta-form" className="container-custom mb-16"> {/* Add id for smooth scroll target (British English comment) */}
                <div className="flex flex-col md:flex-row items-center justify-between bg-gold/10 rounded-xl p-8 gap-8">
                  {/* Left: Text and buttons */}
                  <div className="flex-1 flex flex-col items-start justify-center text-left mb-6 md:mb-0">
                    <h2 className="text-2xl md:text-3xl font-bold text-gold mb-4">
                      {cta.title}
                    </h2>
                    <p className="text-lg text-charcoal dark:text-white mb-6">
                      {cta.desc}
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
                      <button
                        className="btn-primary text-lg px-8 py-4"
                        onClick={() => {
                          // Smoothly scroll to the Contact form section (British English comment)
                          const contactSection = document.getElementById('contact');
                          if (contactSection) {
                            contactSection.scrollIntoView({ behavior: 'smooth' });
                          }
                        }}
                      >
                        {cta.button}
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
                        {cta.consultantButton}
                      </button>
                    </div>
                  </div>
                  {/* Right: Image */}
                  <div className="flex-1 flex items-center justify-center w-full max-w-xs md:max-w-sm lg:max-w-md">
                    <img
                      src="/images/contact.jpg"
                      alt="Contact a consultant"
                      className="rounded-xl shadow-lg object-cover w-full h-auto max-h-[260px]"
                    />
                  </div>
                </div>
              </section>
              {/* Now render the Performance Management section as usual */}
              <section key={cat.title} className="relative py-16 overflow-hidden"> {/* overflow-hidden ensures only one gold accent per section (British English comment) */}
                <GoldAccent position={catIdx % 2 === 0 ? 'right' : 'left'} /> {/* Strictly alternate gold accent: right, left, right, left (British English comment) */}
                <div className="container-custom">
                  <h2 className="text-2xl md:text-3xl font-bold text-charcoal dark:text-white mb-2">
                    {cat.title}
                  </h2>
                  <p className="text-lg text-gold font-semibold mb-8">
                    {cat.subtitle}
                  </p>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
                    {cat.items.map((item: any, itemIdx: number) => (
                      <div key={item.title} className="bg-white/80 dark:bg-gray-800/80 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-700 flex flex-col justify-between drop-shadow-md dark:dr"> {/* Frosted-glass card effect (British English comment) */}
                        {/* Add icons for every card using iconMap. To update, edit the iconMap above. (British English comment) */}
                        {iconMap[item.title] || null}
                        <h3 className="text-xl font-bold text-charcoal dark:text-white mb-4 drop-shadow-sm dark:drop-shadow-md">{/* Subtle shadow for headings (British English comment) */}
                          {item.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-2 drop-shadow-xs dark:drop-shadow-sm">{/* Subtle shadow for text (British English comment) */}
                          {item.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </React.Fragment>
          );
        }
        // Render all other sections as usual
        return (
          <section key={cat.title} className="relative py-16 overflow-hidden"> {/* overflow-hidden ensures only one gold accent per section (British English comment) */}
            <GoldAccent position={catIdx % 2 === 0 ? 'right' : 'left'} /> {/* Strictly alternate gold accent: right, left, right, left (British English comment) */}
            <div className="container-custom">
              <h2 className="text-2xl md:text-3xl font-bold text-charcoal dark:text-white mb-2">
                {cat.title}
              </h2>
              <p className="text-lg text-gold font-semibold mb-8">
                {cat.subtitle}
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
                {cat.items.map((item: any, itemIdx: number) => (
                  <div key={item.title} className="bg-white/80 dark:bg-gray-800/80 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-700 flex flex-col justify-between drop-shadow-md dark:dr"> {/* Frosted-glass card effect (British English comment) */}
                    {/* Add icons for every card using iconMap. To update, edit the iconMap above. (British English comment) */}
                    {iconMap[item.title] || null}
                    <h3 className="text-xl font-bold text-charcoal dark:text-white mb-4 drop-shadow-sm dark:drop-shadow-md">{/* Subtle shadow for headings (British English comment) */}
                      {item.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-2 drop-shadow-xs dark:drop-shadow-sm">{/* Subtle shadow for text (British English comment) */}
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );
      })}
      {/* Inserted Contact form halfway down the page for the CTA button to scroll to (British English comment) */}
      <Contact />
      {/* Add-ons Section */}
      <div className="container-custom mb-16"> {/* Ensures the add-ons section is padded and aligned with the rest of the page (British English comment) */}
        <h2 className="text-2xl md:text-3xl font-bold text-charcoal dark:text-white mb-2">
          {addons.title}
        </h2>
        <div className="flex flex-wrap gap-4 mt-4 justify-center w-full"> {/* Centres and balances the add-on buttons (British English comment) */}
          {addons.items.map((addon, idx) => (
            <span key={idx} className="bg-gold/10 text-gold font-semibold px-4 py-2 rounded-full text-sm">
              {addon}
            </span>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}

// This page now renders all service sections and add-ons from the translation files, styled to match the homepage.

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', [
        'header',
        'services',
        'footer',
        'cta',
        'clientResults', // Ensure ClientResults translations are loaded
      ])),
    },
  }
} 