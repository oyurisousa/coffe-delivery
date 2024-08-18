import { useState } from 'react'
import { BuyContainer } from './styles'
import { Minus, Plus, ShoppingCart } from '@phosphor-icons/react'
import { priceFormatter } from '../../../../utils/formatter'

interface BuyProps {
  price: number
}

export function Buy({ price }: BuyProps) {
  const [addedItems, setAddedItems] = useState(0)

  function addItem() {
    setAddedItems((state) => state + 1)
  }

  function removeItem() {
    setAddedItems((state) => state - 1)
  }

  return (
    <BuyContainer>
      <span className="price">{priceFormatter.format(price).trim()}</span>
      <div className="count">
        <Minus size={20} color="#8047F8" weight="bold" onClick={removeItem} />
        <span className="countdown">{addedItems}</span>
        <Plus size={20} color="#8047F8" weight="bold" onClick={addItem} />
      </div>
      <div className="cart">
        <ShoppingCart size={22} color="white" weight="fill" />
      </div>
    </BuyContainer>
  )
}
