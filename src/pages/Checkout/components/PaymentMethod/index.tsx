import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import { useContext, useEffect, useState } from 'react'
import { OrderContext } from '../../../../contexts/OrderContext'
import { PaymentMethodContainer } from './styles'

export function PaymentMethod() {
  const { handleSelectedPaymentMethod, paymentMethod } =
    useContext(OrderContext)

  function handleSelectedMethod(payment: string) {
    handleSelectedPaymentMethod(payment)
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
      <div className="payment__options--container">
        <div className="payment__option">
          <input
            id="credit"
            type="radio"
            value="credit"
            name="paymentMethod"
            onChange={() => handleSelectedMethod('credit')}
            checked={paymentMethod === 'credit'}
          />

          <label htmlFor="credit">
            <div className="payment__option--label">
              <CreditCard size={20} />
              <span>CARTÃO DE CRÉDITO</span>
            </div>
          </label>
        </div>

        <div className="payment__option">
          <input
            id="debit"
            type="radio"
            value="debit"
            name="paymentMethod"
            onChange={() => handleSelectedMethod('debit')}
            checked={paymentMethod === 'debit'}
          />

          <label htmlFor="debit">
            <div className="payment__option--label">
              <Bank size={20} />
              <span>CARTÃO DE DÉBITO</span>
            </div>
          </label>
        </div>

        <div className="payment__option">
          <input
            id="cash"
            type="radio"
            value="cash"
            name="paymentMethod"
            onChange={() => handleSelectedMethod('cash')}
            checked={paymentMethod === 'cash'}
          />

          <label htmlFor="cash">
            <div className="payment__option--label">
              <CreditCard size={20} />
              <span>DINHEIRO</span>
            </div>
          </label>
        </div>
      </div>
    </PaymentMethodContainer>
  )
}
