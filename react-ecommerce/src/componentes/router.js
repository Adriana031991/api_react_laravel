import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './home'
import Layout from './administrador/componentes/layout'
import Dashboard from './administrador/paginas/dashboard'
import ProductsPage from './administrador/paginas/productsPage'
import LoginAdmin from './administrador/paginas/loginAdmin'

const Routers = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                {/* <Route path='/admin' element={<HomeAdmin />} /> */}

                <Route path='/admin' element={<Layout />} >
                    <Route index element={<Dashboard />}></Route>
                    <Route path='productos' element={<ProductsPage />}></Route>
                </Route>
                <Route path='/loginAdmin' element={<LoginAdmin />} />
            </Routes>
        </>
    )
}

export default Routers