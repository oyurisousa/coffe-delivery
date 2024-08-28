import { ShoppingCart } from '@phosphor-icons/react'
import { CartContainer, CountdownCart } from './styles'

interface CartProps {
  quantItemsAddCart: number
}

export function Cart({ quantItemsAddCart }: CartProps) {
  return (
    <CartContainer>
      <ShoppingCart size={22} color="#c47f17" weight="fill" />

      {quantItemsAddCart > 0 ? (
        <CountdownCart>{quantItemsAddCart}</CountdownCart>
      ) : (
        <></>
      )}
    </CartContainer>
  )
}
