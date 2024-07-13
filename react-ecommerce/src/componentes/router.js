import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './administrador/componentes/layout'
import Dashboard from './administrador/paginas/dashboard'
import ProductsPage from './administrador/paginas/productsPage'
import LoginAdmin from './administrador/paginas/loginAdmin'
import CategoryPage from './administrador/paginas/categoryPage'
import Home from './usuario/home'

const Routers = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                {/* <Route path='nosotros' element={<ProductsPage />}></Route>
                <Route path='contacto' element={<ProductsPage />}></Route> */}

                <Route path='/admin' element={<Layout />} >
                    <Route index element={<Dashboard />}></Route>
                    <Route path='productos' element={<ProductsPage />}></Route>
                    <Route path='categorias' element={<CategoryPage />}></Route>
                </Route>
                <Route path='/loginAdmin' element={<LoginAdmin />} />
            </Routes>
        </>
    )
}

export default Routers