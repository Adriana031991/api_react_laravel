import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './sidebar'
import Navbar from './navbar'

const Layout = () => {
    return (
        <>
            <div className="bg-sky-200"><Sidebar /></div>
            <div className="bg-teal-200"><Navbar user={'user'} /></div>

            <div>{<Outlet />}</div>
        </>
    )
}

export default Layout