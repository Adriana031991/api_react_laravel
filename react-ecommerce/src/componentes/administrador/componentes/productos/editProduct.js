import React, { useState } from 'react';

const EditProductModal = ({ product, onClose, onSave }) => {
    const [formState, setFormState] = useState({
        name: product.name,
        price: product.price,
        amount: product.amount,
        category_id: product.category_id,
        brand_id: product.brand_id,
        image: product.image,
        discount: product.discount,
        // Add other product fields here
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormState({ ...formState, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formState);
    };
    console.log(formState);
    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-5 rounded-lg shadow-lg">
                <h2 className="text-xl font-bold mb-4">Editar Producto</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700">Nombre:</label>
                        <input
                            type="text"
                            name="name"
                            value={formState.name}
                            onChange={handleChange}
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Categoria:</label>
                        <input
                            type="number"
                            name="category_id"
                            value={formState.category_id}
                            onChange={handleChange}
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Marca:</label>
                        <input
                            type="number"
                            name="brand_id"
                            value={formState.brand_id}
                            onChange={handleChange}
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Precio:</label>
                        <input
                            type="number"
                            name="price"
                            value={formState.price}
                            onChange={handleChange}
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Descuento:</label>
                        <input
                            type="number"
                            name="discount"
                            value={formState.discount}
                            onChange={handleChange}
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Cantidad:</label>
                        <input
                            type="number"
                            name="amount"
                            value={formState.amount}
                            onChange={handleChange}
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Imagen:</label>
                        <input
                            type="text"
                            name="image"
                            value={formState.image}
                            onChange={handleChange}
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                        />
                    </div>
                    <div className="flex justify-end space-x-2">
                        <button
                            type="button"
                            onClick={onClose}
                            className="bg-gray-500 hover:bg-gray-700 text-white py-2 px-4 rounded"
                        >
                            Cancelar
                        </button>
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
                        >
                            Guardar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditProductModal;
