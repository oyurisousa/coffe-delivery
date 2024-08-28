import infoCoffee from '../../assets/info-coffee.png'
import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'
import {
  AdvantageContent,
  CoffeeListContainer,
  CoffeeListContent,
  InfoContainer,
  InfoContent,
} from './styles'
import { CoffeeCard } from '../../components/CoffeeCard'
import { useContext, useEffect } from 'react'
import { CartContext, type Order } from '../../contexts/CartContext'
import { api } from '../../lib/axios'

export function Home() {
  const { orders, setOrders } = useContext(CartContext)

  useEffect(() => {
    async function fetchOrdersAndTags() {
      try {
        const { data } = await api.get('/orders')

        const ordersWithTags = await Promise.all(
          data.map(async (item: Order) => {
            const resolvedTags = await Promise.all(
              item.tags.map(async (tag) => {
                const tagResponse = await api.get(`/tags?id=${tag}`)
                return tagResponse.data[0].value
              }),
            )
            return { ...item, tags: resolvedTags }
          }),
        )
        setOrders(ordersWithTags)
      } catch (error) {
        console.error('Erro ao buscar pedidos e tags:', error)
      }
    }

    fetchOrdersAndTags()
  }, [setOrders])
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
          {orders.map((item) => {
            return (
              <CoffeeCard
                id={item.id}
                key={`order_${item.id}`}
                title={item.title}
                description={item.description}
                path={item.path}
                price={item.price}
                tasgs={item.tags}
              />
            )
          })}
        </CoffeeListContent>
      </CoffeeListContainer>
    </>
  )
}
