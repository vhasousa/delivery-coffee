import { Minus, Plus, Trash } from 'phosphor-react'
import { useContext, useEffect, useState } from 'react'
import { FormProvider } from 'react-hook-form'
import { CartContext } from '../../../../contexts/CartContext'
import { OrderContext } from '../../../../contexts/OrderContext'
import {
  CartContainer,
  CartItem,
  CartQuantity,
  Price,
  Total,
  TotalPrices,
} from './styles'

export function Cart() {
  const [shipping, setShipping] = useState(3.5)

  const { cart, totalPrice, updateProductQuantity, removeCoffeeFromCart } =
    useContext(CartContext)

  const { createOrder, isSubmitDisabled } = useContext(OrderContext)

  function addCoffee(id: number) {
    const cartItemToUpdate = cart.find((item) => item.id === id)

    if (cartItemToUpdate) {
      const updatedCartItemQuantity = cartItemToUpdate.quantity + 1

      updateProductQuantity(updatedCartItemQuantity, id)
    }
  }

  function removeCoffee(id: number) {
    const cartItemToUpdate = cart.find((item) => item.id === id)

    if (cartItemToUpdate) {
      if (cartItemToUpdate.quantity > 1) {
        const updatedCartItemQuantity = cartItemToUpdate.quantity - 1

        updateProductQuantity(updatedCartItemQuantity, id)
      }
    }
  }

  return (
    <CartContainer>
      <article>
        {cart.map((item) => {
          return (
            <CartItem key={item.id}>
              <img src={item.coffeeImage} alt="" />
              <div>
                <p>{item.name}</p>
                <div>
                  <CartQuantity>
                    <button onClick={() => removeCoffee(item.id)}>
                      <Minus />
                    </button>
                    <input
                      type="number"
                      min={1}
                      value={item.quantity}
                      onChange={(event) => event.target.value}
                    />
                    <button onClick={() => addCoffee(item.id)}>
                      <Plus />
                    </button>
                  </CartQuantity>
                  <button
                    onClick={() => removeCoffeeFromCart(item.id)}
                    className="cart__remove"
                  >
                    <Trash size={16} /> <span>REMOVER</span>
                  </button>
                </div>
              </div>
              <Price>
                <p>
                  {(item.price * item.quantity).toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  })}
                </p>
              </Price>
            </CartItem>
          )
        })}
      </article>
      <TotalPrices>
        <div>
          <p>Total de itens</p>
          <p>
            {totalPrice.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
          </p>
        </div>
        <div>
          <p>Entrega</p>
          <p>
            {shipping.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
          </p>
        </div>
        <Total>
          <p>Total</p>
          <p>
            {(totalPrice + shipping).toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
          </p>
        </Total>
        <button disabled={isSubmitDisabled} onClick={createOrder}>
          CONFIRMAR PEDIDO
        </button>
        <span>
          {isSubmitDisabled
            ? '* Preencha todas as informações para finalizar o seu pedido'
            : ''}
        </span>
      </TotalPrices>
    </CartContainer>
  )
}
