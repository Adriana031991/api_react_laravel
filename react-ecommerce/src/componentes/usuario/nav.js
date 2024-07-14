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
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../../lib/config/firebase.config';


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

    // const { loginWithRedirect, logout, user, isAuthenticated, isLoading } = useAuth0();
    // console.log(user)

    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
        });

        return () => unsubscribe();
    }, []);

    const dataNav = new Map([
        ['Inicio', '/'],
        ['Carrito de compras', '/carrito'],
        ['Nosotros', '/nosotros'],
        ['Contacto', '/contacto'],
    ])

    const handleLogout = async () => {
        try {
            await signOut(auth);
            setUser(null);
        } catch (error) {
            console.error('Error signing out:', error);
        }
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
                <section className="top_header flex justify-between items-center p-4 bg-catalog_light dark:bg-catalog_dark">
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
                            {theme == 'light' ? <GiMoon className="text-2xl" /> : <FaSun className="text-2xl" />}
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
                    {user ?
                        <div className='user'>
                            <div className='icon'><SlLogout /></div>

                            <button onClick={handleLogout}>
                                <span>Log out</span>
                            </button>
                        </div>
                        :

                        <div className='user'>
                            <div className='icon'><FaRegUser /></div>

                            <Link to="/login">
                                <span>Login</span>
                            </Link>

                        </div>
                    }
                </section>

                <section className='last_header'>

                    <div className='nav  flex justify-end'>
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