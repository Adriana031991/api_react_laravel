import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './sidebar'
import Navbar from './navbar'

const Layout = () => {
    return (
        <>
            <section className='flex flex-grow bg-neutral-100 h-screen w-screen overflow-hidden'>
                <aside><Sidebar /></aside>
                <nav> <Navbar user={''} /> </nav>
                <section className="p-4">
                    <div>{<Outlet />}</div>
                </section>


            </section>
        </>
    )
}

export default Layout