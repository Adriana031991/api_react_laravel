import React from 'react'
import { MdLocalShipping } from 'react-icons/md'
import logo from '../assets/logo/logo_esv_cosmetics.png';
import './nav.css'
import { IoSearchOutline } from 'react-icons/io5';
import { FaRegUser } from 'react-icons/fa';
import { useAuth0 } from "@auth0/auth0-react";
import { SlLogout } from 'react-icons/sl';
import { Link } from 'react-router-dom';

const Nav = () => {

    const { loginWithRedirect, logout, user, isAuthenticated, isLoading } = useAuth0();
    console.log(user)

    const dataNav = new Map([
        ['Inicio', '/inicio'],
        ['Catálogo', '/catalogo'],
        ['Nosotros', '/nosotros'],
        ['Contacto', '/contacto'],
    ])

    if (isLoading) {
        return <div>Loading ...</div>;
    }
    return (
        <>
            <section className='header'>
                <section className='top_header'>

                    <div className='icon'><MdLocalShipping /></div>
                    <div className='info'>
                        <p>Envios gratuitos por compras mayores a $50.000 </p>
                    </div>
                </section>
                <section className='mid_header'>
                    <div className='logo'>
                        <img src={logo} alt='logo' ></img>
                    </div>
                    <div className='search_box'>
                        <input type='text' value='' placeholder='Buscar...'></input>
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

                    <div className='nav'>
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