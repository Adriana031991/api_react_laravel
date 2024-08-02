import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../../lib/config/firebase.config';
import logo from '../../../assets/logo/logo_esv_cosmetics.png';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();
    const [error, setError] = useState(null);

    const handleRegister = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            console.log(user);
            navigate("/"); // Redirige al usuario a la página de inicio
        } catch (error) {
            console.error(error);
            setError(error.message);

            // alert('Error registering user: ' + error.message);
        }
    };

    return (
        <section className="bg-catalog_light dark:bg-catalog_dark">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <img className="w-auto h-16 " src={logo} alt='logo' ></img>


                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Crea tu cuenta
                        </h1>
                        <form className="space-y-4 md:space-y-6" >
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Correo electrónico</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <div>
                                <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirma tu contraseña</label>
                                <input
                                    type="password"
                                    name="confirm-password"
                                    id="confirm-password"
                                    placeholder="••••••••"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    required
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                            </div>
                            {error &&
                                <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                                    {error}</p>
                            }
                            <button
                                onClick={handleRegister}
                                type="button"
                                className="w-full text-white bg-yellow-700 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-yellow-900 dark:hover:bg-yellow-700 dark:focus:ring-primary-800">
                                Crear cuenta</button>

                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Ya tienes cuenta?
                                <Link to="/login" className="font-medium mx-2 text-primary-600 hover:underline dark:text-primary-500">
                                    <span>Ingresa aqui</span>
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
    );
};

export default Register;
