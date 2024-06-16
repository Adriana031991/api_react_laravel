import React, { useState, useEffect } from 'react'
import useProductService from '../../../services/productService'
import CategoryService from '../../../services/categoryService';
import BrandService from '../../../services/brandService';
import { MdOutlineDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import EditProductModal from './editProduct';
import CreateProductModal from './createProduct';

const ProductTable = () => {
    const { data: productos, loading: loadingProductos, error: errorProductos, createProduct, updateProduct, deleteProduct } = useProductService();
    const { data: categorias, loading: loadingCategorias, error: errorCategorias } = CategoryService();
    const { marcas, loadingMarcas, errorMarcas } = BrandService();

    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

    if (loadingProductos || loadingCategorias || loadingMarcas) return <p className='text-center text-gray-500'>Loading...</p>;
    if (errorProductos || errorCategorias || errorMarcas) return <p className="text-center text-red-500">Error loading data</p>;



    const handleEdit = (product) => {
        setSelectedProduct(product);
        setIsEditModalOpen(true);
    };

    const handleDelete = async (id) => {
        await deleteProduct(id);
        // Refresh data
        window.location.reload();
    };

    const handleUpdate = async (updatedProduct) => {
        console.log(updatedProduct);
        await updateProduct(selectedProduct.id, updatedProduct);
        setIsEditModalOpen(false);
        // Refresh data
        window.location.reload();
    };
    const handleCreate = async () => {
        setIsCreateModalOpen(true);
    };
    const handleCreated = async (product) => {
        console.log(product);
        await createProduct(product);
        setIsCreateModalOpen(false);

        // Refresh data
        window.location.reload();

    };
    console.log(productos);
    console.log(loadingProductos);
    console.log(errorProductos);
    console.log(categorias, loadingCategorias, errorCategorias);
    console.log(marcas, loadingMarcas, errorMarcas);

    return (
        <>
            <div className='mt-10 flex flex-col'>
                <div className='-my-2 -mx-4 sm:-mx-6 lg:mx-8 '>
                    <div className='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8'>
                        <div className='mb-2'><button className='p-2 rounded-lg bg-crear hover:bg-[#f9e89b] transition duration-700 ease-in-out' onClick={() => handleCreate()}>Crear Producto</button></div>

                        <div className="overflow-hidden shadow ring-amarillo_esv ring-2 ring-opacity-5 md:rounded-lg justify-items-center items-center ">
                            {productos && categorias && marcas ? (
                                <table className='min-w-full divide-y divide-gray-300'>
                                    <thead className='bg-amarillo_theader text-left font-semibold text-gray-900 sm:pl-4'>
                                        <tr >
                                            <th scope='col' className="py-3.5 pl-6 pr-3  ">Id</th>
                                            <th scope='col' className="py-3.5 pl-6 pr-3  ">Imagen</th>
                                            <th scope='col' className="py-3.5 pl-6 pr-3  ">Nombre</th>
                                            <th scope='col' className="py-3.5 pl-6 pr-3  ">Categoria</th>
                                            <th scope='col' className="py-3.5 pl-6 pr-3  ">Marca</th>
                                            <th scope='col' className="py-3.5 pl-6 pr-3  ">Precio</th>
                                            <th scope='col' className="py-3.5 pl-6 pr-3  ">Cantidad</th>
                                            <th scope='col' className="py-3.5 pl-6 pr-3  ">Acciones</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {productos.data.map((producto) => (
                                            <tr key={producto.id} className=" text-sm font-medium text-gray-900 bg-[#e8af1d0d] sm:pl-4">
                                                <td className="whitespace-nowrap py-4 pl-6 pr-3">{producto.id}</td>
                                                <td className="whitespace-nowrap py-4 pl-6 pr-3">
                                                    <img src={producto.image} alt={producto.name} className="h-10 w-10 object-cover" />
                                                </td>
                                                <td className="whitespace-nowrap py-4 pl-6 pr-3">{producto.name}</td>
                                                <td className="whitespace-nowrap py-4 pl-6 pr-3">{categorias.data.find((cat) => cat.id === producto.category_id)?.name}</td>
                                                <td className="whitespace-nowrap py-4 pl-6 pr-3">{marcas.data.find((marca) => marca.id === producto.brand_id)?.name}</td>
                                                <td className="whitespace-nowrap py-4 pl-6 pr-3">{producto.price}</td>
                                                <td className="whitespace-nowrap py-4 pl-6 pr-3">{producto.amount}</td>
                                                <td className="whitespace-nowrap py-4 pl-6 pr-3 space-x-2 flex justify-content-between items-center ">
                                                    <button className="text-editar hover:text-editar_hover hover:font-bold flex flex-col items-center"
                                                        onClick={() => handleEdit(producto)}
                                                    >
                                                        <CiEdit className="mr-1 " /> <span>Editar</span>
                                                    </button>
                                                    <button className="text-borrar hover:text-borrar_hover hover:font-bold flex flex-col items-center"
                                                        onClick={() => handleDelete(producto.id)}
                                                    >
                                                        <MdOutlineDelete className="mr-1" /> <span> Borrar </span>
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            ) : (
                                <p>No hay datos disponibles.</p>
                            )}
                        </div>
                    </div>

                </div>

            </div>
            {isEditModalOpen && (
                <EditProductModal
                    product={selectedProduct}
                    onClose={() => setIsEditModalOpen(false)}
                    onSave={handleUpdate}
                />
            )}
            {isCreateModalOpen && (
                <CreateProductModal
                    onClose={() => setIsCreateModalOpen(false)}
                    onSave={handleCreated}
                />
            )}
        </>
    )
}

export default ProductTable