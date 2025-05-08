import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { FeaturedCollection } from "@/components/featured-collection"
import { CategoriesSection } from "@/components/categories-section"
import { AboutSection } from "@/components/about-section"
import { Footer } from "@/components/footer"
import { FloatingWhatsApp } from "@/components/floating-whatsapp"
import { ScrollToTop } from "@/components/scroll-to-top"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <FeaturedCollection />
      <CategoriesSection />
      <AboutSection />
      <Footer />
      <FloatingWhatsApp />
      <ScrollToTop />
    </main>
  )
}
