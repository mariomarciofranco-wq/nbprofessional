import HeroBanner from "@/components/home/hero-banner"
import CategoryShowcase from "@/components/home/category-showcase"
import FeaturedProducts from "@/components/home/featured-products"
import TreatmentFinder from "@/components/home/treatment-finder"
import BrandShowcase from "@/components/home/brand-showcase"

export default function Home() {
  return (
    <>
      <HeroBanner />
      <CategoryShowcase />
      <FeaturedProducts />
      <TreatmentFinder />
      <BrandShowcase />
    </>
  )
}
