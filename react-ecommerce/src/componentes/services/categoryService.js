import { useEffect, useState } from 'react'

const BASEURL = 'http://127.0.0.1:8000/api/category';

const CategoryService = () => {
    const [categorias, setData] = useState(null);
    const [loadingCategorias, setLoading] = useState(true);
    const [errorCategorias, setError] = useState(null);
    useEffect(() => {
        fetch(BASEURL + '/index')
            .then((response) => response.json())
            .then((json) => setData(json))
            // .then((json) => setError("Error"))
            .catch((error) => setError(error))
            .finally(() => setLoading(false));
    }, []);
    return { categorias, loadingCategorias, errorCategorias };

}

export default CategoryService

