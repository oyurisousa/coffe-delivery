import { useState, useContext } from 'react'
import { BuyCartContainer, BuyContainer } from './styles'
import { Minus, Plus, ShoppingCart, Trash } from '@phosphor-icons/react'
import { priceFormatter } from '../../../../utils/formatter'
import { CartContext } from '../../../../contexts/CartContext'

interface BuyProps {
  price: number
  order: string
  variant?: 'catalog' | 'cart'
}

export function Buy({ price, order, variant = 'catalog' }: BuyProps) {
  const [addedItems, setAddedItems] = useState(0)
  const { orders, setOrders } = useContext(CartContext)

  async function addItem() {
    setAddedItems((state) => state + 1)
  }

  function removeItem() {
    setAddedItems((state) => state - 1)
  }

  function handleAddItemsCart() {
    const newOrders = orders.map((item) => {
      if (item.id === order) {
        return { ...item, quant: addedItems }
      }

      return item
    })

    setOrders(newOrders)
    setAddedItems(0)
  }

  return (
    <>
      {variant === 'catalog' ? (
        <BuyContainer>
          <span className="price">{priceFormatter.format(price).trim()}</span>
          <div className="count">
            <Minus
              size={20}
              color="#8047F8"
              weight="bold"
              onClick={removeItem}
            />
            <span className="countdown">{addedItems}</span>
            <Plus size={20} color="#8047F8" weight="bold" onClick={addItem} />
          </div>
          <button
            className="cart"
            onClick={handleAddItemsCart}
            disabled={addedItems <= 0}
          >
            <ShoppingCart size={22} color="white" weight="fill" />
          </button>
        </BuyContainer>
      ) : (
        <BuyCartContainer>
          <div className="count">
            <Minus
              size={20}
              color="#8047F8"
              weight="bold"
              onClick={removeItem}
            />
            <span className="countdown">{addedItems}</span>
            <Plus size={20} color="#8047F8" weight="bold" onClick={addItem} />
          </div>
          <button className="cart">
            <Trash size={16} color="#8047F8" weight="regular" />
            <span>Remover</span>
          </button>
        </BuyCartContainer>
      )}
    </>
  )
}
