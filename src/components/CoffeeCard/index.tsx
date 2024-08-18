import { Buy } from './components/Buy'
import { CoffeeCardContainer, Tag } from './styles'

interface CoffeeCardProps {
  title: string
  description: string
  price: number
  tasgs: string[]
  path: string
}

export function CoffeeCard({
  title,
  description,
  path,
  price,
  tasgs,
}: CoffeeCardProps) {
  return (
    <CoffeeCardContainer>
      <img width="120px" src={path} alt={title} />
      <div className="tags">
        {tasgs.map((tag) => {
          return <Tag key={tag}>{tag}</Tag>
        })}
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <Buy price={price} />
    </CoffeeCardContainer>
  )
}
