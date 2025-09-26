import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const categories = [
  {
    name: "Clothes",
    description: "Premium fashion for every occasion",
    image: "/elegant-clothing-fashion-items.jpg",
    href: "/products#clothes",
  },
  {
    name: "Shoes",
    description: "Step into comfort and style",
    image: "/luxury-shoes-and-footwear-collection.jpg",
    href: "/products#shoes",
  },
  {
    name: "Bags",
    description: "Carry your essentials in style",
    image: "/designer-bags-and-accessories.jpg",
    href: "/products#bags",
  },
  {
    name: "Gadgets",
    description: "Innovation meets design",
    image: "/modern-tech-gadgets-and-devices.jpg",
    href: "/products#gadgets",
  },
]

export function CategoriesSection() {
  return (
    <section id="categories" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">Explore Our Collections</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Discover curated categories designed to complement your lifestyle and express your unique personality.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <Card key={category.name} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-2">{category.name}</h3>
                    <p className="text-white/90 text-sm mb-4">{category.description}</p>
                    <Button variant="secondary" size="sm" className="w-full">
                      Shop Now
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
