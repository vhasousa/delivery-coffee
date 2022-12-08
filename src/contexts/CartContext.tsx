import React, { createContext, ReactNode, useEffect, useState } from 'react'

interface CartContextProviderProps {
  children: ReactNode
}

export interface SelectedCoffeeDTO {
  id: number
  name: string
  coffeeImage: string
  quantity: number
}

interface CartContextType {
  cart: SelectedCoffeeDTO[]
  cartLength: number
  addToCart: ({ id, coffeeImage, name, quantity }: SelectedCoffeeDTO) => void
  setCart: React.Dispatch<React.SetStateAction<SelectedCoffeeDTO[]>>
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cart, setCart] = useState<SelectedCoffeeDTO[]>([])
  const [cartLength, setCartLength] = useState(0)

  function addToCart({ id, coffeeImage, name, quantity }: SelectedCoffeeDTO) {
    const newItemToCart: SelectedCoffeeDTO = {
      id,
      name,
      quantity,
      coffeeImage,
    }

    setCart((state) => [...state, newItemToCart])
  }

  useEffect(() => {
    setCartLength(cart.length)
  }, [cart, cartLength])

  return (
    <CartContext.Provider value={{ cart, cartLength, addToCart, setCart }}>
      {children}
    </CartContext.Provider>
  )
}
