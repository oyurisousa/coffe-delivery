import { useState, useContext } from 'react'
import { BuyCartContainer, BuyContainer } from './styles'
import { Minus, Plus, ShoppingCart, Trash } from '@phosphor-icons/react'
import { priceFormatter } from '../../../../utils/formatter'
import { CartContext } from '../../../../contexts/CartContext'

interface BuyProps {
  price: number
  order: string
  quant?: number
  variant?: 'catalog' | 'cart'
}

export function Buy({
  price,
  order,
  quant = 0,
  variant = 'catalog',
}: BuyProps) {
  const [addedItems, setAddedItems] = useState(quant)
  const { orders, setOrders } = useContext(CartContext)

  async function addItem() {
    setAddedItems((state) => state + 1)
  }

  function removeItem() {
    setAddedItems((state) => state - 1)
  }

  async function handleAddItemsCart() {
    const newOrders = orders.map((item) => {
      if (item.id === order) {
        return { ...item, quant: addedItems }
      }

      return item
    })

    setOrders(newOrders)
    setAddedItems(0)
  }
  function handleRemoveItemCheckout() {
    if (addedItems === 1) {
      return handleRemoveItemsCart()
    }

    return setAddedItems((state) => state - 1)
  }
  async function handleAddItemCheckout() {
    await addItem()
    const newOrders = orders.map((item) => {
      if (item.id === order) {
        return { ...item, quant: addedItems }
      }

      return item
    })

    setOrders(newOrders)
  }
  async function handleRemoveItemsCart() {
    const newOrders = orders.map((item) => {
      if (item.id === order) {
        return { ...item, quant: 0 }
      }

      return item
    })

    setOrders(newOrders)
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
              onClick={handleRemoveItemCheckout}
            />
            <span className="countdown">{addedItems}</span>
            <Plus
              size={20}
              color="#8047F8"
              weight="bold"
              onClick={handleAddItemCheckout}
            />
          </div>
          <button className="cart" onClick={handleRemoveItemsCart}>
            <Trash size={16} color="#8047F8" weight="regular" />
            <span>Remover</span>
          </button>
        </BuyCartContainer>
      )}
    </>
  )
}
