import { MapPinLine } from 'phosphor-react'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { AddressData, OrderContext } from '../../../../contexts/OrderContext'
import { AddressContainer } from './styles'

export function Address() {
  const { handleAddressInfo, address } = useContext(OrderContext)

  const { register, getValues } = useForm<AddressData>({
    defaultValues: {
      cep: address?.cep,
      street: address?.street,
      number: address?.number,
      complement: address?.complement,
      district: address?.district,
      city: address?.city,
      state: address?.state,
    },
  })

  function handleOnBlur() {
    const { cep, street, number, complement, district, city, state } =
      getValues()

    const newAddres: AddressData = {
      cep,
      street,
      number,
      complement,
      district,
      city,
      state,
    }

    handleAddressInfo(newAddres)
  }

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
        <form id="addressForm">
          <input
            type="text"
            placeholder="CEP"
            className="cep"
            {...register('cep', {
              onBlur: handleOnBlur,
            })}
          />
          <input
            type="text"
            placeholder="Rua"
            className="street"
            {...register('street', {
              onBlur: handleOnBlur,
            })}
          />
          <input
            type="number"
            placeholder="Número"
            className="number"
            {...register('number', {
              onBlur: handleOnBlur,
            })}
          />
          <input
            type="text"
            placeholder="Complemento"
            className="complement"
            {...register('complement', {
              onBlur: handleOnBlur,
            })}
          />
          <input
            type="text"
            placeholder="Bairro"
            className="district"
            {...register('district', {
              onBlur: handleOnBlur,
            })}
          />
          <input
            type="text"
            placeholder="Cidade"
            className="city"
            {...register('city', {
              onBlur: handleOnBlur,
            })}
          />
          <input
            type="text"
            placeholder="UF"
            className="state"
            {...register('state', {
              onBlur: handleOnBlur,
            })}
          />
        </form>
      </div>
    </AddressContainer>
  )
}
