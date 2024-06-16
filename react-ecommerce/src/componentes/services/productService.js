// import { useEffect, useState } from 'react'

// const BASEURL = 'http://127.0.0.1:8000/api/product';

// const ProductService = () => {
//     const [productos, setData] = useState(null);
//     const [loadingProductos, setLoading] = useState(true);
//     const [errorProductos, setError] = useState(null);
//     useEffect(() => {
//         fetch(BASEURL + '/index')
//             .then((response) => response.json())
//             .then((json) => setData(json))
//             // .then((json) => setError("Error"))
//             .catch((error) => setError(error))
//             .finally(() => setLoading(false));
//     }, []);
//     return { productos, loadingProductos, errorProductos };

// }

// export default ProductService

import { useState, useEffect } from 'react';

const BASEURL = 'http://127.0.0.1:8000/api/product';

const useProductService = () => {
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

    const createProduct = async (product) => {
        try {
            const response = await fetch(`${BASEURL}/store`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(product)
            });
            return response.json();
        } catch (error) {
            setError(error);
        }
    };
    const updateProduct = async (id, product) => {
        try {
            const response = await fetch(`${BASEURL}/update/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(product)
            });
            return response.json();
        } catch (error) {
            setError(error);
        }
    };

    const deleteProduct = async (id) => {
        try {
            const response = await fetch(`${BASEURL}/delete/${id}`, {
                method: 'DELETE'
            });
            return response.json();
        } catch (error) {
            setError(error);
        }
    };

    return { data, loading, error, createProduct, updateProduct, deleteProduct };
};

export default useProductService;

