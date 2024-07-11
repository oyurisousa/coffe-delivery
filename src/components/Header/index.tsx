import logo from '../../assets/logo.svg'
import { Cart } from './components/Cart'
import {
  HeaderContainer,
  HeaderContent,
  HeaderContentActions,
  Location,
} from './styles'
import { MapPin } from '@phosphor-icons/react'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img width={'100px'} src={logo} alt="" />
        <HeaderContentActions>
          <Location>
            <MapPin size={22} color="#8047f8" weight="fill" />
            <span>Porto Alegre, RS</span>
          </Location>
          <Cart quantItensCart={1} />
        </HeaderContentActions>
      </HeaderContent>
    </HeaderContainer>
  )
}
