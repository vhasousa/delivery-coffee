import { NavLink } from 'react-router-dom'
import { HeaderContainer } from './styles'
import { MapPin, ShoppingCart } from 'phosphor-react'

import logoImg from '../../assets/logo.png'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoImg} alt="" />
      <div>
        <NavLink to="/" title="">
          <MapPin size={24} weight="fill" />
          <span>Valença, RJ</span>
        </NavLink>

        <NavLink to="/" title="">
          <ShoppingCart size={24} weight="fill" />
        </NavLink>
      </div>
    </HeaderContainer>
  )
}
