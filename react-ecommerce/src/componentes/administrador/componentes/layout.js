import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './sidebar'
import Navbar from './navbar'

const Layout = () => {
    return (
        <>
            <section className='flex flex-grow bg-neutral-100 h-screen w-screen overflow-hidden'>
                <Sidebar />
                <section className='flex-1'>
                    <Navbar user={''} />
                    <div className="p-4">{<Outlet />}</div>
                    {/* el Outle es para renderizar las rutas  */}
                </section>


            </section>
        </>
    )
}

export default Layout