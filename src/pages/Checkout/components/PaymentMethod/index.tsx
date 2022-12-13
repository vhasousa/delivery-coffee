import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import { useContext } from 'react'
import { OrderContext } from '../../../../contexts/OrderContext'
import { PaymentMethodContainer } from './styles'

export function PaymentMethod() {
  const { handleSelectedPaymentMethod } = useContext(OrderContext)

  function handleSelectedMethod(paymentMethod: string) {
    handleSelectedPaymentMethod(paymentMethod)
  }

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
        <button onClick={() => handleSelectedMethod('creditCard')}>
          <CreditCard size={20} />
          <span>CARTÃO DE CRÉDITO</span>
        </button>
        <button onClick={() => handleSelectedMethod('debitCard')}>
          <Bank size={20} />
          <span>CARTÃO DE DÉBITO</span>
        </button>
        <button onClick={() => handleSelectedMethod('money')}>
          <Money size={20} />
          <span>DINHEIRO</span>
        </button>
      </div>
    </PaymentMethodContainer>
  )
}
