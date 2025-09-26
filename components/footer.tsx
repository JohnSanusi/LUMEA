import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold mb-4">Lumea</h3>
            <p className="text-background/80 mb-6 text-pretty">
              Discover your perfect style with our curated collections of premium fashion, accessories, and lifestyle
              products.
            </p>
            
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-background/80 hover:text-background transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-background/80 hover:text-background transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-background/80 hover:text-background transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-background/80 hover:text-background transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold mb-4">Categories</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/products#clothes" className="text-background/80 hover:text-background transition-colors">
                  Clothes
                </Link>
              </li>
              <li>
                <Link href="/products#shoes" className="text-background/80 hover:text-background transition-colors">
                  Shoes
                </Link>
              </li>
              <li>
                <Link href="/products#bags" className="text-background/80 hover:text-background transition-colors">
                  Bags
                </Link>
              </li>
              <li>
                <Link href="/products#gadgets" className="text-background/80 hover:text-background transition-colors">
                  Gadgets
                </Link>
              </li>
            </ul>
          </div>

          

        <div className="border-t border-background/20 mt-12 pt-8 text-center">
          <p className="text-background/80">
            © 2025 Lumea. All rights reserved. Crafted with passion for modern living.
          </p>
        </div>
      </div>
    </footer>
  )
}
