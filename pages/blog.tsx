import React from 'react'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { GetStaticPropsContext } from 'next'
import { Contact } from '../components/Contact'
import Head from 'next/head'

export default function Blog() {
  // Use the blog namespace for translations
  const { t } = useTranslation('blog')
  // Use the cta namespace for CTA button translations
  const { t: tCta } = useTranslation('cta')
  // Attempt to fetch the posts array from the translation file
  // If posts is not an array, default to an empty array to prevent runtime errors
  const postsRaw = t('posts', { returnObjects: true })
  // Log the raw posts value to help debug translation issues
  console.log('postsRaw:', postsRaw)
  const posts = Array.isArray(postsRaw) ? postsRaw : []

  // Example meta data (replace with translation keys if available)
  const metaTitle = 'HR Blog & Insights | Human Centric Strategy'
  const metaDescription = 'Read the latest HR insights, case studies, and thought leadership from Human Centric Strategy.'
  const canonicalUrl = 'https://humancentricstrategy.com/blog'
  const ogImage = 'https://humancentricstrategy.com/images/blog.jpg'

  return (
    <div className="min-h-screen flex flex-col"> {/* Transparent main container to show global background (British English comment) */}
      {/* SEO meta tags and structured data for blog page (British English comment) */}
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
      {/* Navigation bar at the top of the page */}
      <Navbar />
      {/* Blog page header section with title and introduction */}
      <section className="relative min-h-[50vh] flex flex-col md:flex-row items-center justify-center pt-56 pb-10 container-custom gap-8"> {/* Two-column hero: text left, image right (American English comment) */}
        {/* Left: Text and buttons */}
        <div className="flex-1 flex flex-col items-start justify-center text-left z-10 h-full"> {/* h-full for vertical alignment (American English comment) */}
          <h1 className="text-4xl md:text-6xl font-montserrat font-bold mb-4 drop-shadow-lg text-charcoal dark:text-white"> {/* Force dark text in light mode, white in dark mode (American English comment) */}
            {t('pageTitle')}
          </h1>
          <p className="text-lg md:text-2xl max-w-2xl mb-6 text-gray-800 dark:text-white/90"> {/* Force dark intro text in light mode, white in dark mode (American English comment) */}
            {t('pageIntro')}
          </p>
          <div className="flex flex-col md:flex-row gap-4 mt-4">
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
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  const yOffset = -100; // Offset for fixed navbar (American English comment)
                  const y = contactSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
                  window.scrollTo({ top: y, behavior: 'smooth' });
                }
              }}
            >
              {tCta('talk_to_a_consultant')}
            </button>
          </div>
        </div>
        {/* Right: Blog image */}
        <div className="flex-1 flex items-center justify-center w-full max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl h-full"> {/* h-full for vertical centering (American English comment) */}
          <img
            src="/images/blog.jpg"
            alt="Blog - HR insights and stories"
            className="rounded-xl shadow-lg object-cover w-full h-auto max-h-[400px]"
          />
        </div>
      </section>
      {/* CTA section is now included in the hero section above (American English comment) */}
      {/* Blog stories grid section */}
      <section className="container-custom py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Map through each post and display its details */}
          {posts.map((story, idx) => (
            <div key={idx} className="bg-white/80 dark:bg-gray-800/80 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-700 flex flex-col justify-between"> {/* Frosted-glass card effect (British English comment) */}
              {/* Blog story title */}
              <h2 className="text-2xl font-bold text-charcoal dark:text-white mb-2">{story.title}</h2>
              {/* Blog story summary */}
              <p className="text-gray-600 dark:text-gray-300 mb-4">{story.summary}</p>
              {/* Blog story meta info: author and date */}
              <div className="flex items-center justify-between text-sm text-gray-400 dark:text-gray-500 mt-auto">
                <span>{story.author}</span>
                <span>{new Date(story.date).toLocaleDateString('en-GB', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Footer at the bottom of the page */}
      <Contact /> {/* Contact form at the bottom for CTA buttons to scroll to (American English comment) */}
      <Footer />
    </div>
  )
}

// This function ensures the correct translation namespaces are loaded for the blog page
export async function getStaticProps(context: GetStaticPropsContext) {
  // Extract the locale from the context, defaulting to 'en' if not set
  const locale = context.locale || 'en'
  return {
    props: {
      // Load the 'header', 'blog', and 'cta' namespaces for the current locale
      ...(await serverSideTranslations(locale, ['header', 'blog', 'cta'])),
    },
  }
} 