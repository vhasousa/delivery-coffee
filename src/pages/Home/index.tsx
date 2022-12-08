import { Card } from '../../components/Card'
import { Hero } from './components/Hero'
import { HomeContainer } from './styles'
import coffeeImg from '../../assets/expresso.png'
import coffeeWithMilkImg from '../../assets/cafe-com-leite.png'
import cubanoImg from '../../assets/cubano.png'
import capuccinoImg from '../../assets/capuccino.png'
import { useEffect, useState } from 'react'

const coffees = [
  {
    id: 1,
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    tags: ['Tradicional'],
    price: 9.99,
    coffeeImage: coffeeImg,
  },
  {
    id: 2,
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    tags: ['Tradicional', 'Com leite'],
    price: 7.89,
    coffeeImage: coffeeWithMilkImg,
  },
  {
    id: 3,
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    tags: ['Especial', 'Alcoólico', 'Gelado'],
    price: 10.99,
    coffeeImage: cubanoImg,
  },
  {
    id: 4,
    name: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    tags: ['Tradicional', 'Com leite'],
    price: 8.99,
    coffeeImage: capuccinoImg,
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
                coffeeImage={coffee.coffeeImage}
              />
            )
          })}
        </div>
      </section>
    </HomeContainer>
  )
}
