

import React, { useState } from 'react'
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth } from '../../../lib/config/firebase.config';
import logo from '../../../assets/logo/logo_esv_cosmetics.png';
import { Link, useNavigate } from 'react-router-dom';
import { FaGoogle, FaGoogleDrive } from 'react-icons/fa';

const Login = () => {
    const provider = new GoogleAuthProvider();
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password).then((res) => {
                navigate("/");

            });
        } catch (error) {
            if (error.code === 'auth/user-not-found') {
                setError('Usuario no existe.');

            } else {

                setError(error.message);
            }
        }
    };

    const handleLoginGoogle = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                setUser(result.user);
                // console.log(result.user)
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                navigate("/"); // Redirige al usuario a la página de inicio

            })
            .catch((error) => {
                // const email = error.customData.email;
                // The AuthCredential type that was used.
                // const credential = GoogleAuthProvider.credentialFromError(error);
                console.log(error)
                setError(error.message);

            });
    };

    return (
        <>
            <section className="bg-catalog_light dark:bg-catalog_dark">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <img className="w-auto h-16 " src={logo} alt='logo' ></img>

                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Ingresa a tu cuenta
                            </h1>
                            <form className="space-y-4 md:space-y-6" >
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Correo electrónico</label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="name@company.com"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />


                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contraseña</label>
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        placeholder="••••••••"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        required
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                                {error &&
                                    <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                                        {error}</p>
                                }
                                <div className="flex items-center justify-between">

                                    <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Olvidaste la contraseña?</a>
                                </div>
                                <button
                                    onClick={handleLogin}
                                    className="w-full text-white bg-yellow-600 hover:bg-yellow-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-primary-800">
                                    Ingresar</button>

                                <button
                                    type="button"
                                    onClick={handleLoginGoogle}
                                    className="w-52 text-black  hover:bg-yellow-700 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  dark:hover:bg-yellow-700 dark:focus:ring-yellow-800 mt-4">
                                    <div className='flex justify-between'>
                                        <FaGoogle />
                                        Ingresar con Google

                                    </div>
                                </button>

                                <p className="text-sm font-light text-gray-500 dark:text-gray-400 mr-2">
                                    No tiene una cuenta todavia?
                                    <Link to="/register">
                                        <span>Regístrate</span>
                                    </Link>

                                </p>
                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">

                                    <Link to="/">
                                        <span>Home</span>
                                    </Link>

                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login

