import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Routers from './componentes/router'
import './App.css'
import './tailwind.css'
import { CartProvider } from './componentes/services/cartService'


const App = () => {

  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <Routers />
        </BrowserRouter>

      </CartProvider>
    </>
  )
}

export default App