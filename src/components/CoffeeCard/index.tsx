import { Buy } from './components/Buy'
import { CoffeeCardCartContainer, CoffeeCardContainer, Tag } from './styles'

export interface CoffeeCardProps {
  title: string
  description: string
  price: number
  tasgs: string[]
  path: string
  id: string
  variant?: 'catalog' | 'cart'
}

export function CoffeeCard({
  id,
  title,
  description,
  path,
  price,
  tasgs,
  variant = 'catalog',
}: CoffeeCardProps) {
  return (
    <>
      {variant === 'catalog' ? (
        <CoffeeCardContainer>
          <img width="120px" src={path} alt={title} />
          <div className="tags">
            {tasgs.map((tag) => {
              return <Tag key={tag}>{tag}</Tag>
            })}
          </div>
          <h3>{title}</h3>
          <p>{description}</p>
          <Buy order={id} price={price} />
        </CoffeeCardContainer>
      ) : (
        <CoffeeCardCartContainer>
          <img width="64px" src={path} alt={title} />
          <div className="info-cart">
            <div className="title-price">
              <h3>{title}</h3>
              <span>{price}</span>
            </div>
            <Buy order={id} price={price} variant={variant} />
          </div>
        </CoffeeCardCartContainer>
      )}
    </>
  )
}
