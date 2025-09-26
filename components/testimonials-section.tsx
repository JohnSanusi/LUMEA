import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Fashion Designer",
    content:
      "Lumea has completely transformed my wardrobe. The quality and attention to detail in every piece is exceptional.",
    rating: 5,
    image: "/professional-woman-portrait.png",
  },
  {
    name: "Marcus Rodriguez",
    role: "Creative Director",
    content:
      "The gadgets from Lumea perfectly blend functionality with aesthetic appeal. They've become essential to my daily workflow.",
    rating: 5,
    image: "/professional-man-portrait.png",
  },
  {
    name: "Emma Thompson",
    role: "Lifestyle Blogger",
    content: "Every purchase from Lumea feels like discovering a hidden gem. Their curation is absolutely impeccable.",
    rating: 5,
    image: "/young-woman-portrait.png",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">What Our Customers Say</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Join thousands of satisfied customers who have discovered their perfect style with Lumea.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>

                <blockquote className="text-muted-foreground mb-6 text-pretty">"{testimonial.content}"</blockquote>

                <div className="flex items-center">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
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
