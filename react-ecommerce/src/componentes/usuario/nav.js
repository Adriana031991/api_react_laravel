import React, { useEffect, useState } from 'react'
import { MdLocalShipping } from 'react-icons/md'
import logo from '../../assets/logo/logo_esv_cosmetics.png';
import './nav.css'
import { IoSearchOutline } from 'react-icons/io5';
import { FaRegUser, FaSun } from 'react-icons/fa';
import { useAuth0 } from "@auth0/auth0-react";
import { SlLogout } from 'react-icons/sl';
import { Link } from 'react-router-dom';
import { GiMoon } from 'react-icons/gi';


// const initialDarkToggle = document.documentElement.className.includes("dark");

const Nav = () => {
    const [theme, setTheme] = useState('light');
    const changeTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }
    useEffect(() => {
        if (theme === 'dark') {
            document.querySelector('html')?.classList.add("dark");
        } else {
            document.querySelector('html')?.classList.remove("dark");
        }
    }, [theme]);

    const { loginWithRedirect, logout, user, isAuthenticated, isLoading } = useAuth0();
    // console.log(user)

    const dataNav = new Map([
        ['Inicio', '/'],
        ['Nosotros', '/nosotros'],
        ['Contacto', '/contacto'],
    ])

    if (isLoading) {
        return <div>Loading ...</div>;
    }
    return (
        <>
            <section className='header'>
                {/* <section className='top_header flex '>

                    <div className='icon'><MdLocalShipping /></div>
                    <div className='info '>
                        <p>Envios gratuitos por compras mayores a $50.000 </p>
                    </div>
                    <div className=' justify-evenly'>
                        <button onClick={changeTheme}>
                            {theme ? <GiMoon /> : <FaSun />}
                        </button>

                    </div>

                </section> */}
                <section className="top_header flex justify-between items-center p-4 bg-gray-200 dark:bg-gray-800">
                    <div className="flex items-center space-x-2">
                        <div className="icon">
                            <MdLocalShipping className="text-xl text-gray-900 dark:text-white" />
                        </div>
                        <div className="info">
                            <p className="text-gray-900 dark:text-white">
                                Envíos gratuitos por compras mayores a $50.000
                            </p>
                        </div>
                    </div>
                    <div>
                        <button onClick={changeTheme} className="text-gray-900 dark:text-white">
                            {theme ? <GiMoon className="text-2xl" /> : <FaSun className="text-2xl" />}
                        </button>
                    </div>
                </section>
                <section className='mid_header'>
                    <div className='logo'>
                        <img src={logo} alt='logo' ></img>
                    </div>
                    <div className='search_box'>
                        <input type='text' placeholder='Buscar...' defaultValue=""></input>
                        <button><IoSearchOutline /></button>
                    </div>
                    {isAuthenticated ?
                        <div className='user'>
                            <div className='icon'><SlLogout /></div>

                            <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                                <span>Log out</span>
                            </button>
                        </div>
                        :

                        <div className='user'>
                            <div className='icon'><FaRegUser /></div>

                            <button onClick={() => loginWithRedirect()}>
                                <span>Login</span>
                                <span>Register</span>

                            </button>
                            {/* <button >
                            <span>Register</span>
                        </button> */}
                        </div>
                    }
                </section>

                <section className='last_header'>
                    <div className='user_profile'>
                        {
                            isAuthenticated ?
                                <>
                                    <div className='info'>
                                        <img src={user?.picture} alt={user?.name} />
                                        <h2>{user?.nickname}</h2>
                                        <span>{user?.email}</span>
                                    </div>
                                </>
                                :
                                <>
                                    <div className='info'>
                                        {/* <span>Por favor logueate</span> */}
                                    </div>
                                </>
                        }
                    </div>

                    <div className='nav bg-nav'>
                        <ul>
                            {Array.from(dataNav.entries()).map(([key, value]) => (

                                <li key={key}>
                                    <Link to={value} className='link'>{key}</Link>
                                </li>
                            ))}

                        </ul>

                    </div>
                </section>
            </section>
        </>
    )
}

export default Nav