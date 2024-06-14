import { useEffect, useState } from 'react'

const BASEURL = 'http://127.0.0.1:8000/api/product';

const ProductService = () => {
    const [productos, setData] = useState(null);
    const [loadingProductos, setLoading] = useState(true);
    const [errorProductos, setError] = useState(null);
    useEffect(() => {
        fetch(BASEURL + '/index')
            .then((response) => response.json())
            .then((json) => setData(json))
            // .then((json) => setError("Error"))
            .catch((error) => setError(error))
            .finally(() => setLoading(false));
    }, []);
    return { productos, loadingProductos, errorProductos };

}

export default ProductService

