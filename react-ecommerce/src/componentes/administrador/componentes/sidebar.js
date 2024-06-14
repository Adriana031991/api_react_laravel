import React from 'react'
import { GiShop } from 'react-icons/gi'
import { Link, useLocation } from 'react-router-dom'
import { DASHBOARD_SIDEBAR_BOTTOM_LINKS, DASHBOARD_SIDEBAR_LINKS } from '../../../lib/const/navigation'
import classNames from 'classnames'

function SidebarLink({ item, onClick }) {
    const linkClass = "flex items-center rounded-l-lg gap-2 px-3 py-2 text-slate-100 font-light text-base hover:-mr-3 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 "

    const { pathname } = useLocation();

    return (
        <>
            <Link to={item.path}
                onClick={onClick}
                className={classNames(pathname === item.path ? '-mr-3 bg-neutral-700 text-slate-100' : 'text-slate-400', linkClass)}>
                <span className='text-lg text-yellow-600'>{item.icon}</span>
                {item.label}
            </Link>

        </>
    )
}

const handleLogOut = () => {
    // Your log out logic here
    console.log('Logging out...');
};

const Sidebar = () => {

    return (

        <>
            <aside className='bg-neutral-900 w-56 h-full p-3 flex flex-col text-white'>
                <div className='flex items-center gap-2 px-1 py-3'>
                    <GiShop style={{
                        color: '#feec00', height: '1.7rem',
                        width: 'auto'
                    }} />
                    <span className='text-neutral-100 text-lg'>Esv Cosmetics</span>
                </div>
                <div className="flex-1 py-8 flex flex-col gap-0.5">

                    {DASHBOARD_SIDEBAR_LINKS.map((item) => (
                        <SidebarLink key={item.key} item={item} onClick={undefined} />
                    ))}

                </div>
                <div className=" pt-2 flex flex-col gap-0.5">

                    {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((item) => (
                        <SidebarLink key={item.key} item={item} onClick={item.key === 'log_out' ? handleLogOut : undefined} />
                    ))}

                </div>
            </aside>
        </>
    )
}



export default Sidebar