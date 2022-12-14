import { Address } from './components/Address'
import { Cart } from './components/Cart'
import { PaymentMethod } from './components/PaymentMethod'
import { CheckoutContainer } from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <div>
        <h2>Complete seu pedido</h2>
        <Address />
        <PaymentMethod />
      </div>
      <div>
        <h2>Cafés selecionados</h2>
        <Cart />
      </div>
    </CheckoutContainer>
  )
}
