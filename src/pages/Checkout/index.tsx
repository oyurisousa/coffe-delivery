import { useContext, useEffect, useState } from 'react'
import { CoffeeCard } from '../../components/CoffeeCard'
import {
  AddressForm,
  CheckoutContainer,
  CompleteOrder,
  ConfirmOrder,
  PaymentMethod,
  SelectedCoffees,
} from './styles'
import { CartContext, type Order } from '../../contexts/CartContext'

export function Checkout() {
  const [itensAdd, setItensAdd] = useState<Order[]>([])
  const { orders } = useContext(CartContext)
  useEffect(() => {
    const items = orders.filter((item) => {
      return item.quant > 0
    })

    setItensAdd(items)
  }, [orders])

  return (
    <CheckoutContainer>
      <CompleteOrder>
        <h3>Complete seu pedido</h3>
        <AddressForm action="/success">
          <input type="text" id="cep" placeholder="CEP" />
          <input type="text" id="street" placeholder="Rua" />
          <input type="text" id="number" placeholder="Número" />
          <input type="text" id="complement" placeholder="Complemento" />
          <input type="text" id="neighborhood" placeholder="Bairro" />
          <input type="text" id="city" placeholder="Cidade" />
          <input type="text" id="uf" placeholder="UF" />
        </AddressForm>
        <PaymentMethod></PaymentMethod>
      </CompleteOrder>
      <SelectedCoffees>
        <h3>Cafés selecionados</h3>
        <ConfirmOrder>
          {itensAdd.map((item, index) => {
            return (
              <CoffeeCard
                id={item.id}
                description={item.description}
                path={item.path}
                price={item.price}
                tasgs={item.tags}
                title={item.title}
                key={index}
                variant="cart"
              />
            )
          })}
        </ConfirmOrder>
      </SelectedCoffees>
    </CheckoutContainer>
  )
}
