import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { useContext, useState } from 'react'
import { CartContext } from '../../contexts/CartContext'
import { CardContainer } from './styles'

interface CardProps {
  coffeeId: number
  name: string
  description: string
  tags: string[]
  price: number
  coffeeImage: string
}

export function Card({
  coffeeId,
  name,
  description,
  tags,
  price,
  coffeeImage,
}: CardProps) {
  const [quantityOfCoffee, setQuantityOfCoffee] = useState(1)

  const { addToCart } = useContext(CartContext)

  function addCoffee() {
    setQuantityOfCoffee((state) => {
      return state + 1
    })
  }

  function removeCoffee() {
    if (quantityOfCoffee > 1) {
      setQuantityOfCoffee((state) => {
        return state - 1
      })
    }
  }

  function handleAddToCart() {
    const cartData = {
      id: coffeeId,
      coffeeImage,
      name,
      quantity: quantityOfCoffee,
      price,
    }

    addToCart(cartData)
  }

  return (
    <CardContainer>
      <img src={coffeeImage} alt="" />
      <div className="card__tag">
        {tags.map((tag) => {
          return <span key={tag}>{tag}</span>
        })}
      </div>
      <h3>{name}</h3>
      <p>{description}</p>
      <footer>
        <div>
          <span>R$</span>
          <p>{price}</p>
        </div>
        <div>
          <div>
            <button onClick={removeCoffee}>
              <Minus />
            </button>
            <input
              type="number"
              min={1}
              value={quantityOfCoffee}
              onChange={(event) =>
                setQuantityOfCoffee(parseInt(event.target.value))
              }
            />
            <button onClick={addCoffee}>
              <Plus />
            </button>
          </div>
          <button onClick={handleAddToCart} className="card__cart">
            <ShoppingCart weight="fill" />
          </button>
        </div>
      </footer>
    </CardContainer>
  )
}
