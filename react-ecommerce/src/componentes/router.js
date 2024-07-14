import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './administrador/componentes/layout'
import Dashboard from './administrador/paginas/dashboard'
import ProductsPage from './administrador/paginas/productsPage'
import CategoryPage from './administrador/paginas/categoryPage'
import HomeUser from './usuario/components/homeUser'
import Login from './usuario/components/login'
import PrivateRoute from './usuario/components/privateroute'
import Register from './usuario/components/register'
import Home from './usuario/home'
import LoginAdmin from './administrador/paginas/loginAdmin'

const Routers = () => {
    return (
        <>
            <Routes>
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/' element={<Home />} >
                    {/* <Route path='nosotros' element={<ProductsPage />}></Route>
                <Route path='contacto' element={<ProductsPage />}></Route> */}
                    <Route
                        path="/dashboard"
                        element={
                            <PrivateRoute>
                                <HomeUser />
                            </PrivateRoute>
                        }
                    />
                </Route>

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