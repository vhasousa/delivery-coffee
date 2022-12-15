import React, { createContext, ReactNode, useEffect, useState } from 'react'

interface CartContextProviderProps {
  children: ReactNode
}

export interface SelectedCoffeeData {
  id: number
  name: string
  coffeeImage: string
  quantity: number
  price: number
}

interface CartContextType {
  cart: SelectedCoffeeData[]
  cartLength: number
  totalPrice: number
  addToCart: ({ id, coffeeImage, name, quantity }: SelectedCoffeeData) => void
  updateProductQuantity: (quantity: number, id: number) => void
  removeCoffeeFromCart: (id: number) => void
  clearCart: () => void
  setCart: React.Dispatch<React.SetStateAction<SelectedCoffeeData[]>>
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cart, setCart] = useState<SelectedCoffeeData[]>([])
  const [cartLength, setCartLength] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)

  function addToCart({
    id,
    coffeeImage,
    name,
    quantity,
    price,
  }: SelectedCoffeeData) {
    const newItemToCart: SelectedCoffeeData = {
      id,
      name,
      quantity,
      coffeeImage,
      price,
    }

    const isAlreadyInCart = cart.find((item) => item.id === id)

    if (isAlreadyInCart) {
      return
    }

    setCart((state) => [...state, newItemToCart])
    setTotalPrice((state) => state + price * quantity)
  }

  function clearCart() {
    setCart([])
    setTotalPrice(0)
  }

  function removeCoffeeFromCart(id: number) {
    const removedItem = cart.find((item) => item.id === id)
    const cartWithoutRemovedItem = cart.filter((item) => item !== removedItem)

    setCart(cartWithoutRemovedItem)

    if (removedItem)
      setTotalPrice((state) => state - removedItem.price * removedItem.quantity)
  }

  function updateProductQuantity(quantity: number, id: number) {
    const newState = cart.map((state) => {
      if (state.id === id) {
        setTotalPrice(
          (totalPriceState) =>
            totalPriceState -
            state.price * state.quantity +
            state.price * quantity,
        )
        return { ...state, quantity }
      }

      return state
    })

    setCart(newState)
  }

  useEffect(() => {
    setCartLength(cart.length)
  }, [cart, cartLength])

  return (
    <CartContext.Provider
      value={{
        cart,
        cartLength,
        totalPrice,
        addToCart,
        setCart,
        updateProductQuantity,
        clearCart,
        removeCoffeeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
