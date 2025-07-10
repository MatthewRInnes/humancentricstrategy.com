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

export default function Home() {
  // Example meta data (replace with translation keys if available)
  const metaTitle = 'Human Centric Strategy | HR Consultancy & People Solutions'
  const metaDescription = 'Transform your organisation with expert HR consulting, people strategy, and tailored solutions for modern workplaces.'
  const canonicalUrl = 'https://humancentricstrategy.com/'
  const ogImage = 'https://humancentricstrategy.com/images/people%20happy.jpg'
  return (
    <div className="min-h-screen">
      {/* SEO meta tags and structured data for homepage (British English comment) */}
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
      <main>
        <Hero />
        {/* Removed Problem Solving Steps section as requested. This will hide the 6-step process from the homepage. */}
        <About />
        <IndustriesSection />
        <PainPointsSection /> {/* Added below IndustriesSection as requested (British English comment) */}
        {/* Removed <Solutions /> to prevent duplicate Proven Results section on homepage */}
        <CaseStudy />
        <Testimonials />
        {/* Moved Future-Focused HR Innovations (ClientResultsHome) above Our Impact section as requested (British English comment) */}
        <ClientResultsHome />
        <ImpactSection />
        <FAQSection />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', [
        'header',
        'hero',
        'about',
        'solutions',
        'testimonials',
        'contact',
        'footer',
        'services',
        'faqs',
        'industries',
        'impact',
        'cta',
        'problemSolving', // Ensure ProblemSolving translations are loaded
        'clientResults', // Ensure ClientResults translations are loaded
        'clientResultsHome', // Ensure the new homepage results translations are loaded
      ])),
    },
  }
} 