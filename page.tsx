import Hero from './components/hero'
import ProductShowcase from './components/product-showcase'
import GlobalPresence from './components/global-presence'
import Features from './components/features'
import Testimonials from './components/testimonials'
import Gallery from './components/gallery'
import HealthBenefits from './components/health-benefits'
import Supply from './components/supply'
import MediaCoverage from './components/media-coverage'
import Footer from './components/footer'
import LanguageToggle from './components/language-toggle'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <LanguageToggle />
      <Hero />
      <ProductShowcase />
      <GlobalPresence />
      <Features />
      <Testimonials />
      <Gallery />
      <HealthBenefits />
      <Supply />
      <MediaCoverage />
      <Footer />
    </main>
  )
}

