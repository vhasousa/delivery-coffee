import { Card } from '../../components/Card'
import { Hero } from './Hero'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Hero />
      <section className="coffees">
        <h2>Nossos cafés</h2>
        <div className="coffee-cards">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </section>
    </HomeContainer>
  )
}
