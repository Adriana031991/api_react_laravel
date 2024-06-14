import React from 'react'
import ProductTable from '../componentes/productTable'

const ProductsPage = () => {
    return (
        <div className="w-16 md:w-32 lg:w-48">
            <ProductTable />
            <h1>Productos</h1>
        </div>
    )
}

export default ProductsPage