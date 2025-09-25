"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useCart } from "@/lib/cart-context"
import { ShoppingCart, X, Plus, Minus, Trash2, MessageCircle } from "lucide-react"

export function CartDrawer() {
  const [isOpen, setIsOpen] = useState(false)
  const { state, dispatch } = useCart()

  const updateQuantity = (id: string, quantity: number) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } })
  }

  const removeItem = (id: string) => {
    dispatch({ type: "REMOVE_ITEM", payload: id })
  }

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" })
  }

  const sendToWhatsApp = () => {
    const ownerPhoneNumber = "+2348135322510" // Replace with actual owner's phone number

    let message = "🛒 *New Order from Lumea*\n\n"
    message += "📋 *Order Details:*\n"

    state.items.forEach((item, index) => {
      message += `${index + 1}. Product ID: ${item.id}\n`
      message += `   Category: ${item.category}\n`
      message += `   Quantity: ${item.quantity}\n\n`
    })

    message += `📦 *Total Items: ${state.itemCount}*\n\n`
    message += "📞 Please discuss pricing and confirm this order with delivery details."

    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${ownerPhoneNumber.replace("+", "")}?text=${encodedMessage}`

    window.open(whatsappUrl, "_blank")
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

      {/* Cart Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-white dark:bg-gray-900 border-l border-gray-200 dark:border-gray-700 shadow-2xl z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full bg-white dark:bg-gray-900 justify-between">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Shopping Cart</h2>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6 bg-white dark:bg-gray-900 ">
            {state.items.length === 0 ? (
              <div className="text-center py-12">
                <ShoppingCart className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">Your cart is empty</p>
              </div>
            ) : (
              <div className="space-y-4 pb-4">
                {state.items.map((item) => (
                  <Card key={item.id}>
                    <CardContent className="p-4">
                      <div className="flex gap-4">
                        <img
                          src={item.image || "/placeholder.svg"}
                          alt={`Product ${item.id}`}
                          className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-foreground text-sm">Product #{item.id}</h3>
                          <p className="text-sm text-muted-foreground capitalize">{item.category}</p>
                        </div>
                        <div className="flex flex-col items-end gap-2 flex-shrink-0">
                          <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => removeItem(item.id)}>
                            <Trash2 className="h-3 w-3" />
                          </Button>
                          <div className="flex items-center gap-1">
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-6 w-6 bg-transparent"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            >
                              <Minus className="h-3 w-3" />
                            </Button>
                            <span className="w-8 text-center text-sm">{item.quantity}</span>
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-6 w-6 bg-transparent"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            >
                              <Plus className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>

          {/* Footer - Fixed at bottom */}
          {state.items.length > 0 && (
            <div className="border-t border-gray-200 dark:border-gray-700 p-6 space-y-4 bg-white dark:bg-gray-900">
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold text-gray-900 dark:text-white">Total Items:</span>
                <span className="text-xl font-bold text-gray-900 dark:text-white">{state.itemCount}</span>
              </div>

              <div className="space-y-2">
                <Button className="w-full bg-green-600 hover:bg-green-700" size="lg" onClick={sendToWhatsApp}>
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Order via WhatsApp
                </Button>
                <Button variant="outline" className="w-full bg-transparent" onClick={clearCart}>
                  Clear Cart
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
