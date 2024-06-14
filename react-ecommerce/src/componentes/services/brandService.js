import { useEffect, useState } from 'react'

const BASEURL = 'http://127.0.0.1:8000/api/brand';

const BrandService = () => {
    const [marcas, setData] = useState(null);
    const [loadingMarcas, setLoading] = useState(true);
    const [errorMarcas, setError] = useState(null);
    useEffect(() => {
        fetch(BASEURL + '/index')
            .then((response) => response.json())
            .then((json) => setData(json))
            // .then((json) => setError("Error"))
            .catch((error) => setError(error))
            .finally(() => setLoading(false));
    }, []);
    return { marcas, loadingMarcas, errorMarcas };

}

export default BrandService

