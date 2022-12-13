import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'
import { CartContext, SelectedCoffeeDTO } from './CartContext'

interface OrderContextProviderProps {
  children: ReactNode
}

export interface AddressDTO {
  cep: string
  street: string
  number: string
  complement: string
  district: string
  city: string
  state: string
}

export interface OrderDTO {
  id: string
  address: AddressDTO
  paymentMethod: string
  products: SelectedCoffeeDTO[]
}

interface OrderContextType {
  order: OrderDTO
  address: AddressDTO
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
  }: AddressDTO) => void
  handleSelectedPaymentMethod: (paymentMethod: string) => void
}

export const OrderContext = createContext({} as OrderContextType)

export function OrderContextProvider({ children }: OrderContextProviderProps) {
  const [order, setOrder] = useState<OrderDTO>({} as OrderDTO)
  const [address, setAddress] = useState<AddressDTO>({} as AddressDTO)
  const [paymentMethod, setPaymentMethod] = useState('')
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(false)

  const { cart, cartLength } = useContext(CartContext)

  function createOrder() {
    const id = String(new Date().getTime())

    const newOrder: OrderDTO = {
      id,
      address,
      paymentMethod,
      products: cart,
    }

    setOrder(newOrder)
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
  }: AddressDTO) {
    const deliveryAddress: AddressDTO = {
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
  }: AddressDTO) {
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
  }, [cartLength, paymentMethod, address])

  return (
    <OrderContext.Provider
      value={{
        order,
        address,
        isSubmitDisabled,
        createOrder,
        handleAddressInfo,
        handleSelectedPaymentMethod,
      }}
    >
      {children}
    </OrderContext.Provider>
  )
}
