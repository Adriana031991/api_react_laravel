import React from 'react'
import ProductService from '../../services/productService'
import CategoryService from '../../services/categoryService';
import BrandService from '../../services/brandService';

const ProductTable = () => {
    const { productos, loadingProductos, errorProductos } = ProductService();
    const { categorias, loadingCategorias, errorCategorias } = CategoryService();
    const { marcas, loadingMarcas, errorMarcas } = BrandService();
    console.log(productos);
    console.log(loadingProductos);
    console.log(errorProductos);
    console.log(categorias, loadingCategorias, errorCategorias);
    console.log(marcas, loadingMarcas, errorMarcas);

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Imagen</th>
                        <th>Nombre</th>
                        <th>Categoria</th>
                        <th>Marca</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                    </tr>

                </thead>

                <tbody>

                    <tr>
                        <td>2</td>
                        <td>September - December</td>
                        <td>Distinction</td>
                    </tr>

                </tbody>
            </table>
        </>
    )
}

export default ProductTable