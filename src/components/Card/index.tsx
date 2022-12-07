import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import coffeeImg from '../../assets/expresso.png'
import { CardContainer } from './styles'

export function Card() {
  return (
    <CardContainer>
      <img src={coffeeImg} alt="" />
      <div className="card__tag">Tradicional</div>
      <h3>Expresso Tradicional</h3>
      <p>O tradicional café feito com água quente e grãos moídos</p>
      <footer>
        <div>
          <span>R$</span>
          <p>9,00</p>
        </div>
        <div>
          <div>
            <button>
              <Minus />
            </button>
            <input step={1} type="number" value={1} />
            <button>
              <Plus />
            </button>
          </div>
          <button className="card__cart">
            <ShoppingCart weight="fill" />
          </button>
        </div>
      </footer>
    </CardContainer>
  )
}
