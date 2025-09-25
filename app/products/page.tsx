import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ProductsHero } from "@/components/products-hero"
import { ProductCategories } from "@/components/product-categories"

export default function ProductsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <ProductsHero />
      <ProductCategories />
      <Footer />
    </main>
  )
}
