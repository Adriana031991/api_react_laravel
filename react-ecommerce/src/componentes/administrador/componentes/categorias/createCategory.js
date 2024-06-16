import React, { useState } from 'react';

const CreateCategoryModal = ({ onClose, onSave }) => {
    const [formState, setFormState] = useState({
        name: "",
        image: ""
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
                <h2 className="text-xl font-bold mb-4">Crear Categoria</h2>
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

export default CreateCategoryModal;
