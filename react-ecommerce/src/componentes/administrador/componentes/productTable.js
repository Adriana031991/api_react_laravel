import React, { useEffect, useState } from 'react'
/*
const ProductTable = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/api/products')
            .then(response => response.json())
            .then(response => {
                setProducts(response);
            })
            .catch(error => {
                console.error('There was an error fetching the products!', error);
            });
    }, []);

    const handleDelete = (id) => {
        fetch(`http://localhost:8000/api/products/${id}`, {
            method: 'DELETE'
        })
            .then(response => {
                if (response.ok) {
                    // @ts-ignore
                    setProducts(products.filter(product => product.id !== id));
                }
            })
            .catch(error => {
                console.error('There was an error deleting the product!', error);
            });
    };


    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Imagen</th>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th>Categoria</th>
                    <th>Marca</th>
                    <th>Cantidad</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {products.map(product => (
                    <tr key={product.id}>
                        <td>{product.id}</td>
                        <td>{product.image}</td>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                        <td>{product.category_id}</td>
                        <td>{product.brand_id}</td>
                        <td>{product.amount}</td>
                        <td>
                            <button>Edit</button>
                            <button onClick={() => handleDelete(product.id)}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );

};*/

const ProductTable = () => {

}
export default ProductTable