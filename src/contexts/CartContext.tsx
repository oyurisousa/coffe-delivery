import { createContext, useState, type ReactNode } from 'react'
import { api } from '../lib/axios'

export interface Order {
  id: string
  title: string
  description: string
  path: string
  price: number
  tags: string[]
  quant: number
}

interface CartContextType {
  orders: Order[]
  setOrders: (ordersList: Order[]) => void
  getOrdersById: (id: string) => Promise<Order>
}
interface CartProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextType)

export function CartProvider({ children }: CartProviderProps) {
  const [orders, setOrders] = useState<Order[]>([])

  async function getOrdersById(id: string) {
    const { data } = await api.get(`/orders?id=${id}`)

    return data
  }
  return (
    <CartContext.Provider value={{ orders, setOrders, getOrdersById }}>
      {children}
    </CartContext.Provider>
  )
}
