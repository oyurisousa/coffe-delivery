import { useContext, useEffect, useState } from 'react'
import { CoffeeCard } from '../../components/CoffeeCard'
import {
  AddressForm,
  ButtonFibalizeOrder,
  CheckoutContainer,
  CompleteOrder,
  ConfirmOrder,
  PaymentMethod,
  SelectedCoffees,
  Separator,
} from './styles'
import { CartContext, type Order } from '../../contexts/CartContext'
import { priceFormatter } from '../../utils/formatter'

export function Checkout() {
  const [itensAdd, setItensAdd] = useState<Order[]>([])
  const { orders } = useContext(CartContext)
  useEffect(() => {
    const items = orders.filter((item) => {
      return item.quant > 0
    })

    setItensAdd(items)
  }, [orders])

  const calculateValueTotalItens = itensAdd.reduce(
    (acc, cur) => {
      acc.total += cur.price * cur.quant
      acc.taxa = acc.total * 0.1
      return acc
    },
    {
      total: 0,
      taxa: 0,
    },
  )

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
          <div className="orders_added_cart">
            {itensAdd.map((item, index) => {
              return (
                <>
                  <CoffeeCard
                    id={item.id}
                    description={item.description}
                    path={item.path}
                    price={item.price}
                    tasgs={item.tags}
                    title={item.title}
                    quant={item.quant}
                    key={index}
                    variant="cart"
                  />
                  <Separator></Separator>
                </>
              )
            })}
          </div>
          <div className="total_cart">
            <div className="total_itens">
              Total de itens{' '}
              <span>
                {priceFormatter.format(calculateValueTotalItens.total)}
              </span>
            </div>
            <div className="delivery_fee">
              Entrega{' '}
              <span>
                {priceFormatter.format(calculateValueTotalItens.taxa)}
              </span>
            </div>
            <div className="total">
              Total{' '}
              <span>
                {priceFormatter.format(
                  calculateValueTotalItens.taxa +
                    calculateValueTotalItens.total,
                )}
              </span>
            </div>
          </div>
          <ButtonFibalizeOrder>CONFIRMAR PEDIDO</ButtonFibalizeOrder>
        </ConfirmOrder>
      </SelectedCoffees>
    </CheckoutContainer>
  )
}
