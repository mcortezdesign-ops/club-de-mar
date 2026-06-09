'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

export interface CartItem {
  id: number
  name: string
  price: string
  quantity: number
}

interface CartContextValue {
  items: CartItem[]
  addItem: (id: number, name: string, price: string) => void
  removeItem: (id: number) => void
  updateQty: (id: number, delta: number) => void
}

const CartContext = createContext<CartContextValue | null>(null)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])

  function addItem(id: number, name: string, price: string) {
    setItems(prev => {
      if (prev.find(i => i.id === id)) return prev
      return [...prev, { id, name, price, quantity: 1 }]
    })
  }

  function removeItem(id: number) {
    setItems(prev => prev.filter(i => i.id !== id))
  }

  function updateQty(id: number, delta: number) {
    setItems(prev =>
      prev.map(i => {
        if (i.id !== id) return i
        const next = i.quantity + delta
        return next < 1 ? i : { ...i, quantity: next }
      })
    )
  }

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, updateQty }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
