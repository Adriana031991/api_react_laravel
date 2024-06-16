// import { useEffect, useState } from 'react'

// const BASEURL = 'http://127.0.0.1:8000/api/category';

// const CategoryService = () => {
//     const [categorias, setData] = useState(null);
//     const [loadingCategorias, setLoading] = useState(true);
//     const [errorCategorias, setError] = useState(null);
//     useEffect(() => {
//         fetch(BASEURL + '/index')
//             .then((response) => response.json())
//             .then((json) => setData(json))
//             // .then((json) => setError("Error"))
//             .catch((error) => setError(error))
//             .finally(() => setLoading(false));
//     }, []);
//     return { categorias, loadingCategorias, errorCategorias };

// }

// export default CategoryService

import { useState, useEffect } from 'react';

const BASEURL = 'http://127.0.0.1:8000/api/category';

const useCategoryService = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(BASEURL + '/index')
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => setError(error))
            .finally(() => setLoading(false));
    }, []);

    const createCategory = async (category) => {
        try {
            const response = await fetch(`${BASEURL}/store`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(category)
            });
            return response.json();
        } catch (error) {
            setError(error);
        }
    };
    const updateCategory = async (id, category) => {
        try {
            const response = await fetch(`${BASEURL}/update/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(category)
            });
            return response.json();
        } catch (error) {
            setError(error);
        }
    };

    const deleteCategory = async (id) => {
        try {
            const response = await fetch(`${BASEURL}/delete/${id}`, {
                method: 'DELETE'
            });
            return response.json();
        } catch (error) {
            setError(error);
        }
    };

    return { data, loading, error, createCategory, updateCategory, deleteCategory };
};

export default useCategoryService;

