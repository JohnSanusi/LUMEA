"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useCart } from "@/lib/cart-context"
import { ShoppingCart, Heart } from "lucide-react"

const categories = ["clothes", "shoes", "bags", "gadgets"]

const products = {
  clothes: [
    {
      id: 1,
      image: "/clothes (1).jpg",
      category: "clothes",
      inStock: true,
      isNew: false,
    },
    {
      id: 2,
      image: "/clothes (2).jpg",
      category: "clothes",
      inStock: true,
      isFeatured: true,
    },
    {
      id: 3,
      image: "/clothes (3).jpg",
      category: "clothes",
      inStock: true,
    },
    {
      id: 4,
      image: "/clothes (4).jpg",
      category: "clothes",
      inStock: true,
    },
    {
      id: 5,
      image: "/clothes (5).jpg",
      category: "clothes",
      inStock: true,
      isFeatured: true,
    },
    {
      id: 6,
      image: "/clothes (6).jpg",
      category: "clothes",
      inStock: true,
    },
     {
      id: 7,
      image: "/clothes (7).jpg",
      category: "clothes",
      inStock: true,
    },
     {
      id: 8,
      image: "/clothes (8).jpg",
      category: "clothes",
      inStock: true,
    },
     {
      id: 9,
      image: "/clothes (9).jpg",
      category: "clothes",
      inStock: true,
    },
     {
      id: 10,
      image: "/clothes (10).jpg",
      category: "clothes",
      inStock: true,
    },
     {
      id: 11,
      image: "/clothes (11).jpg",
      category: "clothes",
      inStock: true,
    },
     {
      id: 12,
      image: "/clothes (12).jpg",
      category: "clothes",
      inStock: true,
    },
     {
      id: 13,
      image: "/clothes (13).jpg",
      category: "clothes",
      inStock: true,
    },
     {
      id: 14,
      image: "/clothes (14).jpg",
      category: "clothes",
      inStock: true,
    },
     {
      id: 15,
      image: "/clothes (15).jpg",
      category: "clothes",
      inStock: true,
    },
     {
      id: 16,
      image: "/clothes (16).jpg",
      category: "clothes",
      inStock: true,
    },
     {
      id: 17,
      image: "/clothes (17).jpg",
      category: "clothes",
      inStock: true,
    },
     {
      id: 18,
      image: "/clothes (18).jpg",
      category: "clothes",
      inStock: true,
    },
     {
      id: 19,
      image: "/clothes (19).jpg",
      category: "clothes",
      inStock: true,
    },
     {
      id: 20,
      image: "/clothes (20).jpg",
      category: "clothes",
      inStock: true,
    },
     {
      id: 21,
      image: "/clothes (21).jpg",
      category: "clothes",
      inStock: true,
    },
     {
      id: 22,
      image: "/clothes (22).jpg",
      category: "clothes",
      inStock: true,
    },
     {
      id: 23,
      image: "/clothes (23).jpg",
      category: "clothes",
      inStock: true,
    },
     {
      id: 24,
      image: "/clothes (24).jpg",
      category: "clothes",
      inStock: true,
    },
     {
      id: 25,
      image: "/clothes (25).jpg",
      category: "clothes",
      inStock: true,
    }, 
    {
      id: 26,
      image: "/clothes (26).jpg",
      category: "clothes",
      inStock: true,
    },
     {
      id: 27,
      image: "/clothes (27).jpg",
      category: "clothes",
      inStock: true,
    },

     {
      id: 28,
      image: "/clothes (28).jpg",
      category: "clothes",
      inStock: true,
    }, 
    {
      id: 29,
      image: "/clothes (29).jpg",
      category: "clothes",
      inStock: true,
    }, 
    {
      id: 30,
      image: "/clothes (30).jpg",
      category: "clothes",
      inStock: true,
    },
     {
      id: 31,
      image: "/clothes (31).jpg",
      category: "clothes",
      inStock: true,
    },
     {
      id: 32,
      image: "/clothes (32).jpg",
      category: "clothes",
      inStock: true,
    },
     {
      id: 33,
      image: "/clothes (33).jpg",
      category: "clothes",
      inStock: true,
    },
     {
      id: 34,
      image: "/clothes (34).jpg",
      category: "clothes",
      inStock: true,
    },
     {
      id: 35,
      image: "/clothes (35).jpg",
      category: "clothes",
      inStock: true,
    },
     {
      id: 36,
      image: "/clothes (36).jpg",
      category: "clothes",
      inStock: true,
    },
     {
      id: 37,
      image: "/clothes (37).jpg",
      category: "clothes",
      inStock: true,
    },
     {
      id: 38,
      image: "/clothes (38).jpg",
      category: "clothes",
      inStock: true,
    },
     {
      id: 39,
      image: "/clothes (39).jpg",
      category: "clothes",
      inStock: true,
    },
     {
      id: 40,
      image: "/clothes (40).jpg",
      category: "clothes",
      inStock: true,
    },
     {
      id: 41,
      image: "/clothes (41).jpg",
      category: "clothes",
      inStock: true,
    },
     {
      id: 42,
      image: "/clothes (42).jpg",
      category: "clothes",
      inStock: true,
    },
     {
      id: 43,
      image: "/clothes (43).jpg",
      category: "clothes",
      inStock: true,
    },
     {
      id: 44,
      image: "/clothes (44).jpg",
      category: "clothes",
      inStock: true,
    },
     {
      id: 45,
      image: "/clothes (45).jpg",
      category: "clothes",
      inStock: true,
    },
     {
      id: 46,
      image: "/clothes (46).jpg",
      category: "clothes",
      inStock: true,
    },
     {
      id: 47,
      image: "/clothes (47).jpg",
      category: "clothes",
      inStock: true,
    },
     {
      id: 48,
      image: "/clothes (48).jpg",
      category: "clothes",
      inStock: true,
    },
     {
      id: 49,
      image: "/clothes (49).jpg",
      category: "clothes",
      inStock: true,
    },
     {
      id: 50,
      image: "/clothes (50).jpg",
      category: "clothes",
      inStock: true,
    },
     {
      id: 51,
      image: "/clothes (51).jpg",
      category: "clothes",
      inStock: true,
    },
     {
      id: 52,
      image: "/clothes (52).jpg",
      category: "clothes",
      inStock: true,
    },
     {
      id: 53,
      image: "/clothes (53).jpg",
      category: "clothes",
      inStock: true,
    },
     {
      id: 54,
      image: "/clothes (54).jpg",
      category: "clothes",
      inStock: true,
    },
     {
      id: 55,
      image: "/clothes (55).jpg",
      category: "clothes",
      inStock: true,
    },
     {
      id: 56,
      image: "/clothes (56).jpg",
      category: "clothes",
      inStock: true,
    },
     {
      id: 57,
      image: "/clothes (57).jpg",
      category: "clothes",
      inStock: true,
    },
     {
      id: 58,
      image: "/clothes (58).jpg",
      category: "clothes",
      inStock: true,
    },
     {
      id: 59,
      image: "/clothes (59).jpg",
      category: "clothes",
      inStock: true,
    },
     {
      id: 60,
      image: "/clothes (60).jpg",
      category: "clothes",
      inStock: true,
    },
     {
      id: 61,
      image: "/clothes (61).jpg",
      category: "clothes",
      inStock: true,
    },
     {
      id: 62,
      image: "/clothes (62).jpg",
      category: "clothes",
      inStock: true,
    },
     {
      id: 63,
      image: "/clothes (63).jpg",
      category: "clothes",
      inStock: true,
    },
     {
      id: 64,
      image: "/clothes (64).jpg",
      category: "clothes",
      inStock: true,
    },
  ],
  shoes: [
    {
      id: 65,
      image: "/shoes (1).jpg",
      category: "shoes",
      inStock: true,
      isFeatured: true,
    },
    {
      id: 66,
      image: "/shoes (2).jpg",
      category: "shoes",
      inStock: true,
      isNew: false,
    },
    {
      id: 67,
      image: "/shoes (3).jpg",
      category: "shoes",
      inStock: true,
    },
    {
      id: 68,
      image: "/shoes (4).jpg",
      category: "shoes",
      inStock: true,
    },
    {
      id: 69,
      image: "/shoes (5).jpg",
      category: "shoes",
      inStock: true,
    },
    {
      id: 70,
      image: "/shoes (6).jpg",
      category: "shoes",
      inStock: true,
      isFeatured: true,
    },
     {
      id: 71,
      image: "/shoes (7).jpg",
      category: "shoes",
      inStock: true,
      isFeatured: true,
    }, 
    {
      id: 72,
      image: "/shoes (8).jpg",
      category: "shoes",
      inStock: true,
      isFeatured: true,
    },
     {
      id: 73,
      image: "/shoes (9).jpg",
      category: "shoes",
      inStock: true,
      isFeatured: true,
    },
     {
      id: 74,
      image: "/shoes (10).jpg",
      category: "shoes",
      inStock: true,
      isFeatured: true,
    },
     {
      id: 75,
      image: "/shoes (11).jpg",
      category: "shoes",
      inStock: true,
      isFeatured: true,
    },
     {
      id: 76,
      image: "/shoes (12).jpg",
      category: "shoes",
      inStock: true,
      isFeatured: true,
    },
     {
      id: 77,
      image: "/shoes (13).jpg",
      category: "shoes",
      inStock: true,
      isFeatured: true,
    },
     {
      id: 78,
      image: "/shoes (14).jpg",
      category: "shoes",
      inStock: true,
      isFeatured: true,
    }, 
    {
      id: 79,
      image: "/shoes (15).jpg",
      category: "shoes",
      inStock: true,
      isFeatured: true,
    }, 
    {
      id: 80,
      image: "/shoes (16).jpg",
      category: "shoes",
      inStock: true,
      isFeatured: true,
    },
     {
      id: 81,
      image: "/shoes (17).jpg",
      category: "shoes",
      inStock: true,
      isFeatured: true,
    },
     {
      id: 82,
      image: "/shoes (18).jpg",
      category: "shoes",
      inStock: true,
      isFeatured: true,
    },
     {
      id: 83,
      image: "/shoes (19).jpg",
      category: "shoes",
      inStock: true,
      isFeatured: true,
    }, 
    {
      id: 84,
      image: "/shoes (20).jpg",
      category: "shoes",
      inStock: true,
      isFeatured: true,
    },
     {
      id: 85,
      image: "/shoes (21).jpg",
      category: "shoes",
      inStock: true,
      isFeatured: true,
    },
     {
      id: 86,
      image: "/shoes (22).jpg",
      category: "shoes",
      inStock: true,
      isFeatured: true,
    },
     {
      id: 87,
      image: "/shoes (23).jpg",
      category: "shoes",
      inStock: true,
      isFeatured: true,
    },
     {
      id: 88,
      image: "/shoes (24).jpg",
      category: "shoes",
      inStock: true,
      isFeatured: true,
    },
     {
      id: 89,
      image: "/shoes (25).jpg",
      category: "shoes",
      inStock: true,
      isFeatured: true,
    },
     {
      id: 90,
      image: "/shoes (26).jpg",
      category: "shoes",
      inStock: true,
      isFeatured: true,
    },
     {
      id: 91,
      image: "/shoes (27).jpg",
      category: "shoes",
      inStock: true,
      isFeatured: true,
    },
     {
      id: 92,
      image: "/shoes (28).jpg",
      category: "shoes",
      inStock: true,
      isFeatured: true,
    },
     {
      id: 93,
      image: "/shoes (29).jpg",
      category: "shoes",
      inStock: true,
      isFeatured: true,
    },
     {
      id: 94,
      image: "/shoes (30).jpg",
      category: "shoes",
      inStock: true,
      isFeatured: true,
    },
     {
      id: 95,
      image: "/shoes (31).jpg",
      category: "shoes",
      inStock: true,
      isFeatured: true,
    },
     {
      id: 96,
      image: "/shoes (32).jpg",
      category: "shoes",
      inStock: true,
      isFeatured: true,
    },
     {
      id: 97,
      image: "/shoes (33).jpg",
      category: "shoes",
      inStock: true,
      isFeatured: true,
    },
     {
      id: 98,
      image: "/shoes (34).jpg",
      category: "shoes",
      inStock: true,
      isFeatured: true,
    },

  ],
  bags: [
    {
      id: 99,
      image: "/bags (1).jpg",
      category: "bags",
      inStock: true,
      isFeatured: true,
    },
    {
      id: 100,
      image: "/bags (2).jpg",
      category: "bags",
      inStock: true,
    },
    {
      id: 101,
      image: "/bags (3).jpg",
      category: "bags",
      inStock: true,
      isNew: true,
    },
    {
      id: 102,
      image: "/bags (4).jpg",
      category: "bags",
      inStock: true,
    },
    {
      id: 103,
      image: "/bags (5).jpg",
      category: "bags",
      inStock: true,
    },
    {
      id: 104,
      image: "/bags (6).jpg",
      category: "bags",
      inStock: true,
      isFeatured: true,
    },
     {
      id: 105,
      image: "/bags (7).jpg",
      category: "bags",
      inStock: true,
      isFeatured: true,
    },
     {
      id: 106,
      image: "/bags (8).jpg",
      category: "bags",
      inStock: true,
      isFeatured: true,
    },
     {
      id: 107,
      image: "/bags (9).jpg",
      category: "bags",
      inStock: true,
      isFeatured: true,
    },
  ],
  gadgets: [
    {
      id: 108,
      image: "/gadgets (1).jpg",
      category: "gadgets",
      inStock: true,
      isNew: false,
    },
    {
      id: 109,
      image: "/gadgets (2).jpg",
      category: "gadgets",
      inStock: true,
      isFeatured: true,
    },
    {
      id: 110,
      image: "/gadgets (3).jpg",
      category: "gadgets",
      inStock: true,
    },
    {
      id: 111,
      image: "/gadgets (4).jpg",
      category: "gadgets",
      inStock: true,
    },
    {
      id: 112,
      image: "/gadgets (5).jpg",
      category: "gadgets",
      inStock: true,
    },
    {
      id: 113,
      image: "/gadgets (6).jpg",
      category: "gadgets",
      inStock: true,
      isFeatured: true,
    },
     {
      id: 114,
      image: "/gadgets (7).jpg",
      category: "gadgets",
      inStock: true,
      isFeatured: true,
    },
     {
      id: 115,
      image: "/gadgets (8).jpg",
      category: "gadgets",
      inStock: true,
      isFeatured: true,
    },
     {
      id: 116,
      image: "/gadgets (9).jpg",
      category: "gadgets",
      inStock: true,
      isFeatured: true,
    },
     {
      id: 117,
      image: "/gadgets (10).jpg",
      category: "gadgets",
      inStock: true,
      isFeatured: true,
    },
     {
      id: 118,
      image: "/gadgets (11).jpg",
      category: "gadgets",
      inStock: true,
      isFeatured: true,
    },
     {
      id: 119,
      image: "/gadgets (12).jpg",
      category: "gadgets",
      inStock: true,
      isFeatured: true,
    },
     {
      id: 120,
      image: "/gadgets (13).jpg",
      category: "gadgets",
      inStock: true,
      isFeatured: true,
    },
     {
      id: 121,
      image: "/gadgets (14).jpg",
      category: "gadgets",
      inStock: true,
      isFeatured: true,
    },
     {
      id: 122,
      image: "/gadgets (15).jpg",
      category: "gadgets",
      inStock: true,
      isFeatured: true,
    },
     {
      id: 123,
      image: "/gadgets (16).jpg",
      category: "gadgets",
      inStock: true,
      isFeatured: true,
    },
     {
      id: 124,
      image: "/gadgets (17).jpg",
      category: "gadgets",
      inStock: true,
      isFeatured: true,
    },
     {
      id: 125,
      image: "/gadgets (18).jpg",
      category: "gadgets",
      inStock: true,
      isFeatured: true,
    },
     {
      id: 126,
      image: "/gadgets (19).jpg",
      category: "gadgets",
      inStock: true,
      isFeatured: true,
    },
     {
      id: 127,
      image: "/gadgets (20).jpg",
      category: "gadgets",
      inStock: true,
      isFeatured: true,
    },
     {
      id: 128,
      image: "/gadgets (21).jpg",
      category: "gadgets",
      inStock: true,
      isFeatured: true,
    },
     {
      id: 129,
      image: "/gadgets (22).jpg",
      category: "gadgets",
      inStock: true,
      isFeatured: true,
    },
     {
      id: 130,
      image: "/gadgets (23).jpg",
      category: "gadgets",
      inStock: true,
      isFeatured: true,
    },
     {
      id: 131,
      image: "/gadgets (24).jpg",
      category: "gadgets",
      inStock: true,
      isFeatured: true,
    },
     {
      id: 132,
      image: "/gadgets (25).jpg",
      category: "gadgets",
      inStock: true,
      isFeatured: true,
    },
     {
      id: 133,
      image: "/gadgets (26).jpg",
      category: "gadgets",
      inStock: true,
      isFeatured: true,
    },
     {
      id: 134,
      image: "/gadgets (27).jpg",
      category: "gadgets",
      inStock: true,
      isFeatured: true,
    },
     {
      id: 135,
      image: "/gadgets (28).jpg",
      category: "gadgets",
      inStock: true,
      isFeatured: true,
    },
  ],
}

export function ProductCategories() {
  const [activeCategory, setActiveCategory] = useState("clothes")
  const { dispatch } = useCart()

  const currentProducts = products[activeCategory as keyof typeof products]

  const addToCart = (product: any) => {
    if (product.inStock) {
      dispatch({
        type: "ADD_ITEM",
        payload: {
          id: product.id,
          image: product.image,
          category: product.category,
        },
      })
    }
  }

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              size="lg"
              onClick={() => setActiveCategory(category)}
              className="capitalize text-lg px-8"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Category Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4 capitalize">{activeCategory}</h2>
          <p className="text-lg text-muted-foreground">
            {activeCategory === "clothes" && "Premium fashion for every occasion"}
            {activeCategory === "shoes" && "Step into comfort and style"}
            {activeCategory === "bags" && "Carry your essentials in style"}
            {activeCategory === "gadgets" && "Innovation meets design"}
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentProducts.map((product) => (
            <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={`Product ${product.id}`}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />

                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    {product.isNew && <Badge className="bg-primary text-primary-foreground">New</Badge>}
                    {product.isFeatured && <Badge variant="secondary">Featured</Badge>}
                    {!product.inStock && <Badge variant="destructive">Out of Stock</Badge>}
                  </div>

                  {/* Wishlist Button */}
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-4 right-4 bg-background/80 hover:bg-background"
                  >
                    <Heart className="h-4 w-4" />
                  </Button>

                  {/* Quick Actions */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button
                      className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                      disabled={!product.inStock}
                      onClick={() => addToCart(product)}
                    >
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      {product.inStock ? "Add to Cart" : "Out of Stock"}
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
