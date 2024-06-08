import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Routers from './componentes/router'
import './App.css'
import './tailwind.css'


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routers />
      </BrowserRouter>
    </>
  )
}

export default App