import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { defaultTheme } from '../../../../styles/themes/default'
import { Item } from '../Item'

import { HeroContainer } from './styles'

import heroImg from '../../../../assets/hero-image.png'

const items = [
  {
    icon: <ShoppingCart weight="fill" size={20} />,
    iconBackgroundColor: defaultTheme['yellow-dark'],
    text: 'Compra simples e segura',
  },
  {
    icon: <Package weight="fill" size={20} />,
    iconBackgroundColor: defaultTheme['base-text'],
    text: 'Embalagem mantém o café intacto',
  },
  {
    icon: <Timer weight="fill" size={20} />,
    iconBackgroundColor: defaultTheme.yellow,
    text: 'Entrega rápida e rastreada',
  },
  {
    icon: <Coffee weight="fill" size={20} />,
    iconBackgroundColor: defaultTheme.purple,
    text: 'O café chega fresquinho até você',
  },
]

export function Hero() {
  return (
    <HeroContainer>
      <div className="hero__wrapper">
        <div>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <h3>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </h3>
          <div className="itens">
            {items.map((item) => {
              return (
                <Item
                  key={item.text}
                  icon={item.icon}
                  iconBackgroundColor={item.iconBackgroundColor}
                  text={item.text}
                />
              )
            })}
          </div>
        </div>
        <img src={heroImg} alt="" />
      </div>
    </HeroContainer>
  )
}
