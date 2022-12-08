import { Card } from '../../components/Card'
import { Hero } from './components/Hero'
import { HomeContainer } from './styles'
import coffeeImg from '../../assets/expresso.png'
import { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../contexts/CartContext'

const coffees = [
  {
    id: 1,
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    tags: ['Tradicional', 'Com leite'],
    price: 9.99,
    coffeeImage: coffeeImg,
  },
]

interface CardDTO {
  id: number
  name: string
  description: string
  tags: string[]
  price: number
  coffeeImage: string
}

export function Home() {
  const [cards, setCards] = useState<CardDTO[]>([])

  useEffect(() => {
    setCards(coffees)
  }, [cards])

  return (
    <HomeContainer>
      <Hero />
      <section className="coffees">
        <h2>Nossos cafés</h2>
        <div className="coffee-cards">
          {cards.map((coffee) => {
            return (
              <Card
                key={coffee.id}
                coffeeId={coffee.id}
                name={coffee.name}
                description={coffee.description}
                tags={coffee.tags}
                price={coffee.price}
                coffeeImage={coffeeImg}
              />
            )
          })}
        </div>
      </section>
    </HomeContainer>
  )
}
