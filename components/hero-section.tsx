import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-secondary/30 to-accent/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold text-foreground mb-8 text-balance">
            Discover Your
            <span className="block text-primary">Perfect Style</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto text-pretty">
            Curated collections of premium fashion, accessories, and lifestyle products that define modern elegance and
            functionality.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-md px-8 py-6 group">
              <Link href="#categories">
               Explore Collection 
                </Link>
            </Button>
                
          
          
            
          </div>
        </div>

        {/* Hero Image */}
        <div className="mt-16 relative">
          <div className="bg-card rounded-2xl p-8 shadow-2xl max-w-4xl mx-auto">
            <img
              src="/modern-fashion-lifestyle-products-arranged-elegant.jpg"
              alt="Lumea product showcase"
              className="w-full h-96 object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
