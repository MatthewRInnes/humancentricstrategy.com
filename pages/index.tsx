import { GetServerSideProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { Navbar } from '../components/Navbar'
import { Hero } from '../components/Hero'
import { About } from '../components/About'
import { Solutions } from '../components/Services'
import { CaseStudy } from '../components/CaseStudy'
import { Testimonials } from '../components/Testimonials'
import { FAQSection } from '../components/FAQSection'
import { Contact } from '../components/Contact'
import { Footer } from '../components/Footer'
import { IndustriesSection } from '../components/IndustriesSection'
import PainPointsSection from '../components/PainPointsSection' // Import the new pain points section (British English comment)
import { ImpactSection } from '../components/ImpactSection'
import { ProblemSolvingSteps } from '../components/ProblemSolvingSteps'
import { ClientResults } from '../components/ClientResults'
import ClientResultsHome from '../components/ClientResultsHome' // Import the new homepage-only results component
import Head from 'next/head'

// Minimal test for translation switching (British English comment)
import { useTranslation } from 'next-i18next'

export default function HomePage() {
  // Use translation hook for any text you want to translate (British English comment)
  const { t } = useTranslation('header')

  return (
    <>
      {/* Navigation bar at the top (British English comment) */}
      <Navbar />

      {/* Main hero section (British English comment) */}
      <Hero />

      {/* About section (British English comment) */}
      <About />

      {/* Large absolute spacer for mobile to push Services section down below navbar (British English comment) */}
      {/* Spacer removed; now using scroll-margin on Services section for correct anchor behaviour (British English comment) */}

      {/* Solutions/services section (British English comment) */}
      <Solutions />

      {/* Case study section (British English comment) */}
      <CaseStudy />

      {/* Client results for homepage (British English comment) */}
      <ClientResultsHome />

      {/* Industries section (British English comment) */}
      <IndustriesSection />

      {/* Pain points section (British English comment) */}
      <PainPointsSection />

      {/* Impact section (British English comment) */}
      <ImpactSection />

      {/* Problem solving steps (British English comment) */}
      <ProblemSolvingSteps />

      {/* Client results (British English comment) */}
      <ClientResults />

      {/* Testimonials section (British English comment) */}
      <Testimonials />

      {/* FAQ section (British English comment) */}
      <FAQSection />

      {/* Contact section (British English comment) */}
      <Contact />

      {/* Footer at the bottom (British English comment) */}
      <Footer />
    </>
  )
}

// Add getStaticProps to load translations for the current locale (British English comment)
export async function getStaticProps({ locale }: { locale: string }) { // Explicitly type locale (British English comment)
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'header', // Navigation and language labels (British English comment)
        'common', // Common/shared strings (British English comment)
        'hero', // Hero section (British English comment)
        'cta', // Call-to-action buttons (British English comment)
        'about', // About section (British English comment)
        'services', // Services/Solutions section (British English comment)
        'caseStudy', // Case study section (British English comment)
        'testimonials', // Testimonials section (British English comment)
        'faqs', // FAQ section (British English comment)
        'contact', // Contact section (British English comment)
        'footer', // Footer (British English comment)
        'industries', // Industries section (British English comment)
        'painPointsSection', // Pain points section (British English comment)
        'impact', // Impact section (British English comment)
        'problemSolving', // Problem solving steps (British English comment)
        'clientResults', // Client results (British English comment)
        'clientResultsHome' // Homepage client results (British English comment)
      ])),
    },
  }
} 