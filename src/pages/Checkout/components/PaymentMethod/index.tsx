import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import { PaymentMethodContainer } from './styles'

export function PaymentMethod() {
  return (
    <PaymentMethodContainer>
      <div className="payment__title">
        <CurrencyDollar size={24} />
        <div>
          <h2>Endereço de Entrega</h2>
          <p>Informe o endereço onde deseja receber seu pedido</p>
        </div>
      </div>
      <div className="payment__options">
        <button>
          <CreditCard size={20} />
          <span>CARTÃO DE CRÉDITO</span>
        </button>
        <button>
          <Bank size={20} />
          <span>CARTÃO DE DÉBITO</span>
        </button>
        <button>
          <Money size={20} />
          <span>DINHEIRO</span>
        </button>
      </div>
    </PaymentMethodContainer>
  )
}
