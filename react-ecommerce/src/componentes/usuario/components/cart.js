import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../../services/cartService'

const Cart = () => {

    const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal, deleteFromCart } = useContext(CartContext);
    console.log(cartItems);

    return (
        <>
            <section className="bg-catalog_light py-8 antialiased dark:bg-catalog_dark md:py-16 h-full">
                <div className="mx-auto max-w-screen-xl px-4 2xl:px-0" >
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">Carrito de compras</h2>

                    <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
                        < div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl" >
                            {cartItems.length > 0 ? (
                                cartItems.map(product => (

                                    <div key={product.id} className="space-y-6 mb-2">
                                        <div className="rounded-lg border border-gray-200  bg-card dark:bg-card_dark p-4 shadow-sm dark:border-gray-700  md:p-6">
                                            <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                                                <a href="#" className="shrink-0 md:order-1">
                                                    <img className="h-20 w-20 " src={product.imageUrl} alt={product.name} />

                                                </a>

                                                <div className="flex items-center justify-between md:order-3 md:justify-end">
                                                    <div className="flex items-center">
                                                        <button type="button" id="decrement-button" data-input-counter-decrement="counter-input" className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                                                            onClick={() => {
                                                                addToCart(product)
                                                            }}>
                                                            <svg className="h-2.5 w-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
                                                            </svg>
                                                        </button>
                                                        <input type="text" id="counter-input" data-input-counter className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white" placeholder="" defaultValue={product.quantity} required />
                                                        <button type="button" id="increment-button" data-input-counter-increment="counter-input" className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                                                            onClick={() => {
                                                                removeFromCart(product)
                                                            }}>
                                                            <svg className="h-2.5 w-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h16" />
                                                            </svg>
                                                        </button>
                                                    </div>
                                                    <div className="text-end md:order-4 md:w-32">
                                                        <p className="text-base font-bold text-gray-900 dark:text-white">
                                                            {typeof product.totalPrice === 'number' ? `$${product.totalPrice.toLocaleString('es-CO')}` : 'Precio no disponible'}

                                                            {/* ${product.totalPrice.toLocaleString('es-CO')} */}
                                                        </p>
                                                    </div>
                                                </div>

                                                <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                                                    <a href="#" className="line-clamp-2 text-base font-medium text-gray-900 hover:underline dark:text-white">
                                                        {product.description}</a>

                                                    <div className="flex items-center gap-4">

                                                        <button type="button" className="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500"
                                                            onClick={() => {
                                                                deleteFromCart(product)
                                                            }}>
                                                            <svg className="me-1.5 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 17.94 6M18 18 6.06 6" />
                                                            </svg>
                                                            Quitar
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                    </div>

                                ))
                            ) : (
                                <h1 className="text-lg font-bold">Tu carrito esta esperando por tus productos</h1>

                            )}
                        </div>


                        <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
                            <div className="space-y-4 rounded-lg border border-gray-200 bg-card p-4 shadow-sm dark:border-gray-700 dark:bg-card_dark sm:p-6">
                                <p className="text-xl font-semibold text-gray-900 dark:text-white">Orden de compra</p>

                                {
                                    cartItems.length > 0 ? (
                                        <div className="space-y-4">
                                            <div className="space-y-2">
                                                <dl className="flex items-center justify-between gap-4">
                                                    <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Valor carrito</dt>
                                                    <dd className="text-base font-medium text-gray-900 dark:text-white">${getCartTotal().toLocaleString('es-CO')}</dd>
                                                </dl>

                                            </div>


                                        </div>

                                    ) : (
                                        <h1 className="text-lg font-bold">Tu carrito esta esperando por tus productos</h1>
                                    )}


                                <button href="#" className="flex w-full items-center justify-center rounded-lg bg-cart-dark-end px-5 py-2.5 text-sm font-medium text-white hover:bg-cart-dark-start focus:outline-none focus:ring-4 focus:ring-yellow-100 dark:bg-cart-dark-end dark:hover:bg-cart-dark-start dark:focus:ring-yellow-800">Continuar con el pago</button>


                                <div className="flex items-center justify-center gap-2">
                                    <span className="text-sm font-normal text-gray-500 dark:text-white"> o </span>
                                    <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-primary underline hover:no-underline dark:text-white">Seguir Comprando

                                        <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Cart