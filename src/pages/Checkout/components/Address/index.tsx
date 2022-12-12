import { MapPinLine } from 'phosphor-react'
import { AddressContainer } from './styles'

export function Address() {
  return (
    <AddressContainer>
      <div className="address__title">
        <MapPinLine size={24} />
        <div>
          <h2>Endereço de Entrega</h2>
          <p>Informe o endereço onde deseja receber seu pedido</p>
        </div>
      </div>
      <div className="address__info">
        <form action="">
          <input type="text" placeholder="CEP" className="cep" />
          <input type="text" placeholder="Rua" className="street" />
          <input type="number" placeholder="Número" className="number" />
          <input type="text" placeholder="Complemento" className="complement" />
          <input type="text" placeholder="Bairro" className="district" />
          <input type="text" placeholder="Cidade" className="city" />
          <input type="text" placeholder="UF" className="state" />
        </form>
      </div>
    </AddressContainer>
  )
}
