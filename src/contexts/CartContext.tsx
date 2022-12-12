import React, { createContext, ReactNode, useEffect, useState } from 'react'

interface CartContextProviderProps {
  children: ReactNode
}

export interface SelectedCoffeeDTO {
  id: number
  name: string
  coffeeImage: string
  quantity: number
  price: number
}

interface CartContextType {
  cart: SelectedCoffeeDTO[]
  cartLength: number
  totalPrice: number
  addToCart: ({ id, coffeeImage, name, quantity }: SelectedCoffeeDTO) => void
  updateProductQuantity: (quantity: number, id: number) => void
  removeCoffeeFromCart: (id: number) => void
  setCart: React.Dispatch<React.SetStateAction<SelectedCoffeeDTO[]>>
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cart, setCart] = useState<SelectedCoffeeDTO[]>([])
  const [cartLength, setCartLength] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)

  function addToCart({
    id,
    coffeeImage,
    name,
    quantity,
    price,
  }: SelectedCoffeeDTO) {
    const newItemToCart: SelectedCoffeeDTO = {
      id,
      name,
      quantity,
      coffeeImage,
      price,
    }

    setCart((state) => [...state, newItemToCart])
    setTotalPrice((state) => state + price * quantity)
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
        removeCoffeeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
