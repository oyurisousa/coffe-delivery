import infoCoffee from '../../assets/info-coffee.png'
import traditional from '../../assets/coffees/tradicional.png'
import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'
import {
  AdvantageContent,
  CoffeeListContainer,
  CoffeeListContent,
  InfoContainer,
  InfoContent,
} from './styles'
import { CoffeeCard } from '../../components/CoffeeCard'

export function Home() {
  return (
    <>
      <InfoContainer>
        <InfoContent>
          <h2>Encontre o café perfeito para qualquer hora do dia</h2>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>

          <AdvantageContent>
            <div className="advantage">
              <div className="advantage-icon">
                <ShoppingCart size={16} color="#fff" weight="fill" />
              </div>
              <span>Compra simples e segura</span>
            </div>
            <div className="advantage">
              <div className="advantage-icon">
                <Package size={16} color="#fff" weight="fill" />
              </div>
              <span>Embalagem mantém o café intacto</span>
            </div>
            <div className="advantage">
              <div className="advantage-icon">
                <Timer size={16} color="#fff" weight="fill" />
              </div>
              <span>Entrega rápida e rastreada</span>
            </div>
            <div className="advantage">
              <div className="advantage-icon">
                <Coffee size={16} color="#fff" weight="fill" />
              </div>
              <span>O café chega fresquinho até você</span>
            </div>
          </AdvantageContent>
        </InfoContent>
        <img src={infoCoffee} alt="" />
      </InfoContainer>
      <CoffeeListContainer>
        <h2>Nossos Cafés</h2>
        <CoffeeListContent className="coffeelist">
          <CoffeeCard
            title="Expresso Tradicional"
            description="O tradicional café feito com água quente e grãos moídos"
            path={traditional}
            price={9.9}
            tasgs={['Tradicional', 'com leite']}
          />
          <CoffeeCard
            title="Expresso Tradicional"
            description="O tradicional café feito com água quente e grãos moídos"
            path={traditional}
            price={9.9}
            tasgs={['Tradicional']}
          />
          <CoffeeCard
            title="Expresso Tradicional"
            description="O tradicional café feito com água quente e grãos moídos"
            path={traditional}
            price={9.9}
            tasgs={['Tradicional']}
          />
          <CoffeeCard
            title="Expresso Tradicional"
            description="O tradicional café feito com água quente e grãos moídos"
            path={traditional}
            price={9.9}
            tasgs={['Tradicional']}
          />
          <CoffeeCard
            title="Expresso Tradicional"
            description="O tradicional café feito com água quente e grãos moídos"
            path={traditional}
            price={9.9}
            tasgs={['Tradicional']}
          />
          <CoffeeCard
            title="Expresso Tradicional"
            description="O tradicional café feito com água quente e grãos moídos"
            path={traditional}
            price={9.9}
            tasgs={['Tradicional']}
          />
          <CoffeeCard
            title="Expresso Tradicional"
            description="O tradicional café feito com água quente e grãos moídos"
            path={traditional}
            price={9.9}
            tasgs={['Tradicional']}
          />
          <CoffeeCard
            title="Expresso Tradicional"
            description="O tradicional café feito com água quente e grãos moídos"
            path={traditional}
            price={9.9}
            tasgs={['Tradicional']}
          />
        </CoffeeListContent>
      </CoffeeListContainer>
    </>
  )
}
