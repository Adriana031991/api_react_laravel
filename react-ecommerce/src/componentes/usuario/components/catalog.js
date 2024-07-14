import React, { useState, useEffect } from 'react'
import { FaCartPlus } from 'react-icons/fa';
import { firestoreService } from '../../services/firestoreService';
import Paginator from './paginator';
import './styles.css'

const Catalog = () => {
    const [documents, setDocuments] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;


    useEffect(() => {
        const handleReadAllDocuments = async () => {
            setLoading(true);
            const response = await firestoreService.readAllDocuments();
            if (response.status === 'success') {
                setLoading(false);

                setDocuments(response.documents);
            } else {
                setLoading(false);
                // Muestra un mensaje de error
                setError(response.message);
                // setError(response.error);
                console.error(response.error);
            }
        };
        handleReadAllDocuments();

    }, []);

    const totalPages = Math.ceil(documents.length / itemsPerPage);
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const displayedDocuments = documents.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    return (
        <>
            <section className="bg-catalog_light py-8 antialiased dark:bg-catalog_dark md:py-12">
                <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">

                    <div className="mb-4 items-end justify-between space-y-4 sm:flex sm:space-y-0 md:mb-8">
                        <div>
                            {/* breadcrumb */}
                            <nav className="flex" aria-label="Breadcrumb">
                                <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                                    <li className="inline-flex items-center">
                                        <a href="#" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-primary-600 dark:text-gray-400 dark:hover:text-white">
                                            <svg className="me-2.5 h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                                            </svg>
                                            Home
                                        </a>
                                    </li>
                                    <li>
                                        <div className="flex items-center">
                                            <svg className="h-5 w-5 text-gray-400 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7" />
                                            </svg>
                                            <a href="#" className="ms-1 text-sm font-medium text-gray-700 hover:text-primary-600 dark:text-gray-400 dark:hover:text-white md:ms-2">Productos</a>
                                        </div>
                                    </li>

                                </ol>
                            </nav>
                            <h2 className="mt-3 text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">TITULO CATEGORIA</h2>
                        </div>
                    </div>
                    {loading ? (


                        <div className="text-center">
                            <div role="status">
                                <svg aria-hidden="true" class="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                </svg>
                                <span className="sr-only">Loading...</span>
                            </div>
                        </div>
                    ) : (error ? (
                        <p>Error: {error}</p>
                    ) : documents.length > 0 ? (
                        <div className="mb-4 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                            {displayedDocuments.map((producto) => (
                                <div key={producto.id} className="rounded-lg border border-gray-200 bg-card p-6 shadow-sm dark:border-gray-700 dark:bg-card_dark">
                                    <div className="h-56 w-full">
                                        <a href="#">
                                            <img className="mx-auto h-full" src={producto.imageUrl} alt="" />
                                        </a>
                                    </div>
                                    <div className="pt-6">
                                        <a href="#" className="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white">{producto.name}</a>
                                        {/* rating  */}
                                        <div className="mt-2 flex items-center gap-2">
                                            <div className="flex items-center">
                                                {Array.from({ length: producto.rating?.rate }, (_, index) => (
                                                    <svg key={index} className="h-4 w-4 text-yellow-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                                        <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                                                    </svg>
                                                ))}

                                            </div>

                                            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">({producto.rating.views})</p>
                                        </div>

                                        <div className="mt-4 flex items-center justify-between gap-4">
                                            <p className="text-sm font-extrabold leading-tight text-gray-900 dark:text-white">${producto.price.toLocaleString('es-CO')}</p>

                                            <button type="button"
                                                className='
                                                add-to-cart-btn 
                                                text-sm lg:text-lg
                                                inline-flex items-center 
                                                py-2 px-4 rounded-lg font-bold transition-all duration-300 
                                                transform hover:scale-105'
                                            >

                                                <FaCartPlus className='text-sm sm:text-xl lg:text-2xl' />
                                                <span className='ml-2 text-sm'>
                                                    Agregar al carrito
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}

                        </div>
                    ) : (
                        <div className="text-center text-gray-500">
                            No se encontraron documentos.
                        </div>
                    )
                    )
                    }
                    {/* {error && <p>Error: {error}</p>} */}


                    <div className="w-full text-center">


                        <Paginator currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />


                    </div>
                </div>

            </section>

        </>
    )
}

export default Catalog
