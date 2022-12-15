import { Address } from './components/Address'
import { Cart } from './components/Cart'
import { PaymentMethod } from './components/PaymentMethod'
import { CheckoutContainer } from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <div>
        <h2 className="checkout__title">Complete seu pedido</h2>
        <Address />
        <PaymentMethod />
      </div>
      <div>
        <h2 className="checkout__title">Cafés selecionados</h2>
        <Cart />
      </div>
    </CheckoutContainer>
  )
}
