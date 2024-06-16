import React, { useState, useEffect } from 'react'
import CategoryService from '../../../services/categoryService';
import { MdOutlineDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import CreateCategoryModal from './createCategory';
import EditCategoryModal from './editCategory';

const CategoryTable = () => {
    const { data: categorias, loading: loadingCategorias, error: errorCategorias, createCategory, updateCategory, deleteCategory } = CategoryService();

    const [selectedCategory, setSelectedCategory] = useState(null);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

    if (loadingCategorias) return <p className='text-center text-gray-500'>Loading...</p>;
    if (errorCategorias) return <p className="text-center text-red-500">Error loading data</p>;



    const handleEdit = (category) => {
        setSelectedCategory(category);
        setIsEditModalOpen(true);
    };

    const handleDelete = async (id) => {
        await deleteCategory(id);
        // Refresh data
        window.location.reload();
    };

    const handleUpdate = async (updatedCategory) => {
        console.log(updatedCategory);
        await updateCategory(selectedCategory.id, updatedCategory);
        setIsEditModalOpen(false);
        // Refresh data
        window.location.reload();
    };
    const handleCreate = async () => {
        setIsCreateModalOpen(true);
    };
    const handleCreated = async (category) => {
        console.log(category);
        await createCategory(category);
        setIsCreateModalOpen(false);

        // Refresh data
        window.location.reload();

    };
    console.log(categorias, loadingCategorias, errorCategorias);

    return (
        <>
            <div className='mt-10 flex flex-col'>
                <div className='-my-2 -mx-4 sm:-mx-6 lg:mx-8 '>
                    <div className='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8'>
                        <div className='mb-2'><button className='p-2 rounded-lg bg-crear hover:bg-[#f9e89b] transition duration-700 ease-in-out' onClick={() => handleCreate()}>Crear Categoria</button></div>
                        <div className="overflow-hidden shadow ring-amarillo_esv ring-2 ring-opacity-5 md:rounded-lg justify-items-center items-center ">
                            {categorias ? (
                                <table className='min-w-full divide-y divide-gray-300'>
                                    <thead className='bg-amarillo_theader text-left font-semibold text-gray-900 sm:pl-4'>
                                        <tr >
                                            <th scope='col' className="py-3.5 pl-6 pr-3  ">Id</th>
                                            <th scope='col' className="py-3.5 pl-6 pr-3  ">Imagen</th>
                                            <th scope='col' className="py-3.5 pl-6 pr-3  ">Nombre</th>
                                            <th scope='col' className="py-3.5 pl-6 pr-3  ">Acciones</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {categorias.data.map((categoria) => (
                                            <tr key={categoria.id} className=" text-sm font-medium text-gray-900 sm:pl-4 bg-amarillo_tbody">
                                                <td className="whitespace-nowrap py-4 pl-6 pr-3">{categoria.id}</td>
                                                <td className="whitespace-nowrap py-4 pl-6 pr-3">
                                                    <img src={categoria.image} alt={categoria.name} className="h-10 w-10 object-cover" />
                                                </td>
                                                <td className="whitespace-nowrap py-4 pl-6 pr-3">{categoria.name}</td>

                                                <td className="whitespace-nowrap py-4 pl-6 pr-3 space-x-2  flex justify-content-between items-center ">
                                                    <button className="text-editar hover:text-editar_hover hover:font-bold  flex flex-col items-center"
                                                        onClick={() => handleEdit(categoria)}
                                                    >
                                                        <CiEdit className="mr-1 " /> <span>Editar</span>
                                                    </button>
                                                    <button className="text-borrar hover:text-borrar_hover hover:font-bold flex flex-col items-center"
                                                        onClick={() => handleDelete(categoria.id)}
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
                <EditCategoryModal
                    category={selectedCategory}
                    onClose={() => setIsEditModalOpen(false)}
                    onSave={handleUpdate}
                />
            )}
            {isCreateModalOpen && (
                <CreateCategoryModal
                    onClose={() => setIsCreateModalOpen(false)}
                    onSave={handleCreated}
                />
            )}
        </>
    )
}

export default CategoryTable