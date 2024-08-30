import { useContext, useEffect, useState } from 'react'
import { CoffeeCard } from '../../components/CoffeeCard'
import {
  AddressForm,
  ButtonFibalizeOrder,
  CheckoutContainer,
  CompleteOrder,
  ConfirmOrder,
  PaymentMethod,
  PaymentType,
  PaymentTypeButton,
  SelectedCoffees,
  Separator,
} from './styles'
import { CartContext, type Order } from '../../contexts/CartContext'
import { priceFormatter } from '../../utils/formatter'
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from '@phosphor-icons/react'

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
        <AddressForm>
          <div className="info_address">
            <MapPinLine color="#C47F17" size={22} />
            <div>
              <h4>Endereço de Entrega</h4>
              <p>Informe o endereço onde deseja receber seu pedido </p>
            </div>
          </div>
          <form>
            <input type="text" id="cep" placeholder="CEP" />
            <input type="text" id="street" placeholder="Rua" />
            <input type="text" id="number" placeholder="Número" />
            <input type="text" id="complement" placeholder="Complemento" />
            <input type="text" id="neighborhood" placeholder="Bairro" />
            <input type="text" id="city" placeholder="Cidade" />
            <input type="text" id="uf" placeholder="UF" />
          </form>
        </AddressForm>
        <PaymentMethod>
          <div className="info_payment">
            <CurrencyDollar color="#8047F8" size={22} />
            <div>
              <h4>Pagamento</h4>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </div>
          <PaymentType>
            <PaymentTypeButton value="cart-credit">
              <CreditCard size={16} color="#8047F8" />
              Cartão de Crédito
            </PaymentTypeButton>
            <PaymentTypeButton value="cart-debit">
              <Bank size={16} color="#8047F8" />
              Cartão de Débito
            </PaymentTypeButton>
            <PaymentTypeButton value="money">
              <Money size={16} color="#8047F8" />
              Dinheiro
            </PaymentTypeButton>
          </PaymentType>
        </PaymentMethod>
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
          <ButtonFibalizeOrder disabled={itensAdd.length === 0}>
            CONFIRMAR PEDIDO
          </ButtonFibalizeOrder>
        </ConfirmOrder>
      </SelectedCoffees>
    </CheckoutContainer>
  )
}
