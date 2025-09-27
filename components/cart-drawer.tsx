"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useCart } from "@/lib/cart-context"
import { ShoppingCart, X, Plus, Minus, Trash2 } from "lucide-react"

export function CartDrawer() {
  const [isOpen, setIsOpen] = useState(false)
  const [phone, setPhone] = useState("")
  const { state, dispatch } = useCart()

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const BASE_URL = "https://lumea-frontend.vercel.app" // 👈 update this

  const updateQuantity = (id: string, quantity: number) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } })
  }

  const removeItem = (id: string) => {
    dispatch({ type: "REMOVE_ITEM", payload: id })
  }

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" })
  }

  const placeOrder = async () => {
    if (!phone.trim()) {
      setSubmitStatus("error")
      return
    }

    setIsSubmitting(true)
    setSubmitStatus("idle")

    const normalizedItems = state.items.map((item) => ({
      ...item,
      image: item.image?.startsWith("http")
        ? item.image
        : `${BASE_URL}${item.image}`,
    }))

    try {
      const res = await fetch("https://lumea-backend.onrender.com/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          phone,
          items: normalizedItems,
          totalItems: state.itemCount,
        }),
      })

      if (res.ok) {
        setSubmitStatus("success")
        clearCart()
        setIsOpen(false)
      } else {
        setSubmitStatus("error")
      }
    } catch (err) {
      console.error("Order error:", err)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      {/* Cart Button */}
      <Button variant="ghost" size="icon" className="relative" onClick={() => setIsOpen(true)}>
        <ShoppingCart className="h-5 w-5" />
        {state.itemCount > 0 && (
          <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs">
            {state.itemCount}
          </Badge>
        )}
      </Button>

      {/* Overlay */}
      {isOpen && <div className="fixed inset-0 bg-black/50 z-40" onClick={() => setIsOpen(false)} />}

      <div
        className={`fixed top-0 right-0 h-screen w-full max-w-md bg-background border-l shadow-xl z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b bg-background">
          <h2 className="text-lg font-semibold">Shopping Cart ({state.itemCount})</h2>
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Content */}
        <div className="h-[calc(100vh-220px)] overflow-y-auto p-4">
          {state.items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingCart className="h-16 w-16 text-muted-foreground mb-4" />
              <p className="text-muted-foreground text-lg">Your cart is empty</p>
              <p className="text-sm text-muted-foreground mt-2">Add some products to get started</p>
            </div>
          ) : (
            <div className="space-y-4">
              {state.items.map((item) => (
                <div key={item.id} className="bg-card border rounded-lg p-4">
                  {/* ... your cart item UI stays the same ... */}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {state.items.length > 0 && (
          <div className="absolute bottom-0 left-0 right-0 p-4 border-t bg-background space-y-3">
            {/* Phone Input */}
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter your phone number"
              className="w-full border rounded-lg px-3 py-2 text-sm"
            />

            <div className="flex justify-between items-center">
              <span className="font-medium">Total Items:</span>
              <span className="font-bold text-lg">{state.itemCount}</span>
            </div>

            {/* ✅ Status feedback */}
            {submitStatus === "success" && (
              <div className="p-3 bg-green-50 border border-green-200 rounded-lg text-sm text-green-800">
                Order placed successfully! We’ll contact you soon.
              </div>
            )}
            {submitStatus === "error" && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-800">
                Failed to place order. Please try again.
              </div>
            )}

            <div className="grid grid-cols-1 gap-2">
              <Button
                className="w-full bg-green-600 hover:bg-green-700"
                onClick={placeOrder}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Placing Order..." : "Order"}
              </Button>
              <Button variant="outline" className="w-full bg-transparent" onClick={clearCart}>
                Clear Cart
              </Button>
            </div>
          </div>
        )}
      </div>
    </>
  )
          }
