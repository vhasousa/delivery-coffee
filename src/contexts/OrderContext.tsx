import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'
import { CartContext, SelectedCoffeeData } from './CartContext'

interface OrderContextProviderProps {
  children: ReactNode
}

export interface AddressData {
  cep: string
  street: string
  number: string
  complement: string
  district: string
  city: string
  state: string
}

export interface OrderData {
  id: string
  address: AddressData
  paymentMethod: string
  products: SelectedCoffeeData[]
}

interface OrderContextType {
  order: OrderData
  address: AddressData
  paymentMethod: string
  isSubmitDisabled: boolean
  createOrder: () => void
  handleAddressInfo: ({
    cep,
    city,
    complement,
    district,
    number,
    state,
    street,
  }: AddressData) => void
  handleSelectedPaymentMethod: (paymentMethod: string) => void
  clearCurrentOrder: () => void
}

export const OrderContext = createContext({} as OrderContextType)

export function OrderContextProvider({ children }: OrderContextProviderProps) {
  const [orderHistory, setOrderHistory] = useState<OrderData[]>([])
  const [order, setOrder] = useState<OrderData>({} as OrderData)
  const [address, setAddress] = useState<AddressData>({} as AddressData)
  const [paymentMethod, setPaymentMethod] = useState('')
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(false)

  const { cart, cartLength } = useContext(CartContext)

  function createOrder() {
    const id = String(new Date().getTime())

    const newOrder: OrderData = {
      id,
      address,
      paymentMethod,
      products: cart,
    }

    setOrder(newOrder)
    setOrderHistory((state) => [...state, newOrder])

    return newOrder
  }

  function clearCurrentOrder() {
    setOrder({} as OrderData)
    setAddress({} as AddressData)
  }

  function handleSelectedPaymentMethod(paymentMethod: string) {
    setPaymentMethod(paymentMethod)
  }

  function handleAddressInfo({
    cep,
    city,
    complement,
    district,
    number,
    state,
    street,
  }: AddressData) {
    const deliveryAddress: AddressData = {
      cep,
      city,
      complement,
      district,
      number,
      state,
      street,
    }

    setAddress(deliveryAddress)
  }

  function validateShippingAddress({
    cep,
    city,
    district,
    number,
    state,
    street,
  }: AddressData) {
    if (cep && city && district && number && state && street) {
      return true
    }

    return false
  }

  useEffect(() => {
    if (cartLength > 0 && paymentMethod && validateShippingAddress(address)) {
      setIsSubmitDisabled(false)
    } else {
      setIsSubmitDisabled(true)
    }
  }, [cartLength, paymentMethod, address, order])

  return (
    <OrderContext.Provider
      value={{
        order,
        address,
        paymentMethod,
        isSubmitDisabled,
        createOrder,
        handleAddressInfo,
        handleSelectedPaymentMethod,
        clearCurrentOrder,
      }}
    >
      {children}
    </OrderContext.Provider>
  )
}
