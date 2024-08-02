import React, { useContext, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { CartContext } from '../../services/cartService';

const ProductDetail = () => {
    const location = useLocation();
    const [producto, setProducto] = useState([]);
    const { addToCart } = useContext(CartContext)


    useEffect(() => {
        if (location.state && location.state.product) {
            setProducto(location.state.product);
        }
    }, [location.state]);

    return (
        <>
            <section className="py-8 bg-card md:py-16 dark:bg-card_dark antialiased">
                <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0 h-full">
                    <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
                        <div className="shrink-0 max-w-64 lg:max-w-xs mx-auto">
                            <img className="w-full" src={producto.imageUrl} alt={producto.name} />
                        </div>

                        <div className="relative mt-6 sm:mt-8 lg:mt-0 ">
                            <Link to="/" className="absolute top-0 right-0">
                                <button className='px-4 py-1 bg-cart-dark-end text-white rounded hover:bg-cart-dark-start transition duration-300'>Regresar</button>
                            </Link>
                            <h1
                                className="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white"
                            >
                                {producto.name}
                            </h1>
                            <div className="mt-4 sm:items-center sm:gap-4 sm:flex">
                                <p
                                    className="text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-white"
                                >
                                    {typeof producto.price === 'number' ? `$${producto.price.toLocaleString('es-CO')}` : 'Precio no disponible'}
                                </p>
                                {/* rating  */}
                                <div className="mt-2 flex items-center gap-2">
                                    <div className="flex items-center">
                                        {Array.from({ length: producto.rating?.rate }, (_, index) => (
                                            <svg key={index} className="h-4 w-4 text-yellow-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                                            </svg>
                                        ))}

                                    </div>

                                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400"> {producto.rating?.views ?? 0}</p>
                                </div>


                            </div>

                            <div className="mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8">


                                <button
                                    type="button"
                                    onClick={() => addToCart(producto)}
                                    className=" add-to-cart-btn  mt-4 sm:mt-0  font-medium rounded-lg text-sm px-5 py-2.5  focus:outline-none  flex items-center justify-center"

                                >
                                    <svg
                                        className="w-5 h-5 -ms-2 me-2"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
                                        />
                                    </svg>

                                    Añadir al carrito
                                </button>

                                <Link to="/carrito" >
                                    <button className='px-5 py-2.5 font-medium text-sm text-gray-900 dark:text-gray-700 rounded-lg bg-gradient-to-r from-transparent to-yellow-200 hover:from-yellow-200 hover:to-yellow-500 transition duration-300'>
                                        Ver el carrito</button>
                                </Link>
                            </div>

                            <hr className="my-6 md:my-8 border-gray-200 dark:border-gray-800" />

                            <p className="mb-6 text-gray-500 dark:text-gray-400">
                                {producto.description}
                            </p>


                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProductDetail