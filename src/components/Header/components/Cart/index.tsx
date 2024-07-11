import { ShoppingCart } from '@phosphor-icons/react'
import { CartContainer, CountdownCart } from './styles'

interface CartProps {
  quantItensCart?: number
}

export function Cart({ quantItensCart = 0 }: CartProps) {
  return (
    <CartContainer>
      <ShoppingCart size={22} color="#c47f17" weight="fill" />

      {quantItensCart > 0 ? (
        <CountdownCart>{quantItensCart}</CountdownCart>
      ) : (
        <></>
      )}
    </CartContainer>
  )
}
