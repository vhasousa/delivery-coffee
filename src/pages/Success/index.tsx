import { CurrencyDollar, MapPin, Money, Timer } from 'phosphor-react'
import { SuccessContainer, SuccessInfo, SuccessItem } from './styles'
import deliveryIllustration from '../../assets/illustration.png'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { OrderData } from '../../contexts/OrderContext'

export function Success() {
  const { state } = useLocation()
  const { paymentMethod, address } = state as OrderData

  const [paymentMethodTranslate, setPaymentMethodTranslate] = useState('')

  function handleTranslatePaymentMethod() {
    switch (paymentMethod) {
      case 'credit':
        setPaymentMethodTranslate('Cartão de crédito')
        break
      case 'debit':
        setPaymentMethodTranslate('Cartão de débito')
        break
      case 'cash':
        setPaymentMethodTranslate('Dinheiro')
        break
      default:
        return paymentMethodTranslate
    }
  }

  useEffect(() => {
    handleTranslatePaymentMethod()
  }, [])

  return (
    <SuccessContainer>
      <div>
        <div className="success__title">
          <h1>Uhu! Pedido confirmado</h1>
          <p>Agora é só aguardar que logo o café chegará até você</p>
        </div>
        <SuccessInfo>
          <SuccessItem>
            <div className="item__icon" style={{ background: '#8047F8' }}>
              <MapPin weight="fill" />
            </div>
            <div>
              <p>
                Entrega em{' '}
                <span>
                  {address.street + ', ' + address.number + address.complement}
                </span>
              </p>
              <p>Centro - Valença, RJ</p>
            </div>
          </SuccessItem>
          <SuccessItem>
            <div className="item__icon" style={{ background: '#DBAC2C' }}>
              <Timer weight="fill" />
            </div>
            <div>
              <p>Previsão de entrega</p>
              <span>20 min - 30 min</span>
            </div>
          </SuccessItem>
          <SuccessItem>
            <div className="item__icon" style={{ background: '#C47F17' }}>
              <CurrencyDollar weight="fill" />
            </div>
            <div>
              <p>Pagamento na entrega</p>
              <span>{paymentMethodTranslate}</span>
            </div>
          </SuccessItem>
        </SuccessInfo>
      </div>
      <img src={deliveryIllustration} alt="" />
    </SuccessContainer>
  )
}
