import Hero from "@/components/hero";
import Features from "@/components/features";
import ProductShowcase from "@/components/product-showcase";
import HealthBenefits from "@/components/health-benefits";
import GlobalPresence from "@/components/global-presence";
import MediaCoverage from "@/components/media-coverage";
import Testimonials from "@/components/testimonials";
import Gallery from "@/components/gallery";
import Supply from "@/components/supply";
import Footer from "@/components/footer";
import VendingLocations from "@/components/vending-locations";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <ProductShowcase />
      <HealthBenefits />
      <GlobalPresence />
      <MediaCoverage />
      <Testimonials />
<VendingLocations />
      <Gallery />
      <Supply />
      <Footer />
    </main>
  );
}
