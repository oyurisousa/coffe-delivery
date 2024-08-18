import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Checkout } from './pages/Checkout/Index'
import { Success } from './pages/Success'

export function Router() {
  return (
    <Routes>
      <Route Component={Home} path="/" />
      <Route Component={Checkout} path="/checkout" />
      <Route Component={Success} path="/success" />
    </Routes>
  )
}
