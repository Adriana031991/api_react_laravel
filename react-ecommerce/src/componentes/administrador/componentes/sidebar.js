import React from 'react'
import { GiShop } from 'react-icons/gi'
import { Link, useLocation } from 'react-router-dom'
import { DASHBOARD_SIDEBAR_LINKS } from '../../../lib/const/navigation'
import classNames from 'classnames'

function SidebarLink({ item }) {
    const linkClass = "flex items-center rounded-l-lg gap-2 px-3 py-2 text-slate-700 font-light text-base hover:-mr-3 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 "
    // const linkClass = "flex items-center mr-3 gap-2 rounded-l-lg text-neutral-100 px-3 py-2 text-slate-700 font-light hover:-mr-16 hover:bg-slate-100 hover:font-medium hover:text-lg hover:text-yellow-950 "

    const { pathname } = useLocation();

    return (
        <>
            <Link to={item.path} className={classNames(pathname === item.path ? '-mr-3 bg-neutral-700 text-neutral-100' : 'text-neutral-400', linkClass)}>
                <span className='text-lg text-yellow-600'>{item.icon}</span>
                {item.label}
            </Link>

        </>
    )
}
const Sidebar = () => {

    return (

        <>
            <section className='bg-neutral-900 w-56 p-3 flex flex-col text-white'>
                <div className='flex items-center gap-2 px-1 py-3'>
                    <GiShop style={{
                        color: '#feec00', height: '1.7rem',
                        width: 'auto'
                    }} />
                    <span className='text-neutral-100 text-lg'>Esv Cosmetics</span>
                </div>
                {/* <div className='flex-1'>top part</div> */}
                <div className="flex-1 py-8 flex flex-col gap-0.5">
                    {/* <div className="flex sm:justify-left space-x-4 py-2"> */}
                    {/* <ul> */}

                    {DASHBOARD_SIDEBAR_LINKS.map((item) => (
                        <SidebarLink key={item.key} item={item} />
                    ))}

                    {/* {DASHBOARD_SIDEBAR_LINKS.map(({ key, label, path }) => (

                            <li key={key} >
                                <Link to={path} className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900 hover:text-lg">{label}</Link>
                            </li>
                        ))} */}

                    {/* </ul> */}

                </div>
            </section>
        </>
    )
}



export default Sidebar