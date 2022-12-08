import { ReactNode } from 'react'
import { ItemContainer } from './styles'

interface ItemProps {
  icon: ReactNode
  iconBackgroundColor: string
  text: string
}

export function Item({ icon, iconBackgroundColor, text }: ItemProps) {
  return (
    <ItemContainer>
      <div style={{ backgroundColor: iconBackgroundColor }}>{icon}</div>
      <span>{text}</span>
    </ItemContainer>
  )
}
