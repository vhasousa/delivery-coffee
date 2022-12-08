import { NavLink } from 'react-router-dom'
import { CartAmount, HeaderContainer } from './styles'
import { MapPin, ShoppingCart } from 'phosphor-react'

import logoImg from '../../assets/logo.png'
import { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../contexts/CartContext'

export function Header() {
  const [cartAmount, setCartAmount] = useState(0)
  const [hasProduct, setHasProduct] = useState(false)

  const { cartLength } = useContext(CartContext)

  useEffect(() => {
    setCartAmount((state) => (state = cartLength))

    console.log(cartAmount)

    if (cartAmount >= 1) {
      setHasProduct((state) => (state = true))
    }
  }, [cartAmount, cartLength])

  return (
    <HeaderContainer>
      <div className="header__wrapper">
        <img src={logoImg} alt="" />
        <div>
          <NavLink to="/" title="">
            <MapPin size={24} weight="fill" />
            <span>Valença, RJ</span>
          </NavLink>

          <NavLink to="/" title="">
            <CartAmount hasProduct={hasProduct}>
              <span>{cartAmount}</span>
            </CartAmount>
            <ShoppingCart size={24} weight="fill" />
          </NavLink>
        </div>
      </div>
    </HeaderContainer>
  )
}
