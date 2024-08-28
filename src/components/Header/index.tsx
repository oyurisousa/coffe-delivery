import { Link } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import { Cart } from './components/Cart'
import {
  HeaderContainer,
  HeaderContent,
  HeaderContentActions,
  Location,
} from './styles'
import { MapPin } from '@phosphor-icons/react'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

export function Header() {
  const { orders } = useContext(CartContext)

  const quantItemsAddCart = orders.filter((item) => item.quant > 0)
  console.log(quantItemsAddCart)

  return (
    <HeaderContainer>
      <HeaderContent>
        <Link to={'/'}>
          <img width={'100px'} src={logo} alt="" />
        </Link>
        <HeaderContentActions>
          <Location>
            <MapPin size={22} color="#8047f8" weight="fill" />
            <span>Porto Alegre, RS</span>
          </Location>
          <Link to={'/checkout'}>
            <Cart quantItemsAddCart={quantItemsAddCart.length} />
          </Link>
        </HeaderContentActions>
      </HeaderContent>
    </HeaderContainer>
  )
}
