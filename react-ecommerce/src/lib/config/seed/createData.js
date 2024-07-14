import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase.config";


export const generateFakeProductsFromAPI = async (count) => {
    const response = await fetch('http://makeup-api.herokuapp.com/api/v1/products.json');
    const allProducts = await response.json();

    // Limit the number of products to the count specified
    const products = allProducts.slice(0, count).map((product, index) => ({
        id: index.toString(),
        brand: product.brand,
        category: product.category,
        name: product.name,
        description: product.description,
        price: Math.floor(Math.random() * 20000) + 1,
        imageUrl: 'https://' + product.api_featured_image.split('//')[1],
        rating: {
            rate: Math.floor(Math.random() * 5) + 1,
            views: Math.floor(Math.random() * 1000) + 1
        },
        quantity: Math.floor(Math.random() * 100) + 1 // Add a random quantity
    }));

    return products;
};


export const uploadProductsToFirestore = async (products) => {

    try {
        for (const producto of products) {
            await addDoc(collection(db, 'productos'), producto);
        }
        console.log('Productos subidos correctamente');
    } catch (error) {
        console.error('Error al subir productos:', error);
    }
};



      // const handleUpProductsToFirestore = async () => {
        //     try {
        //         const productos = await generateFakeProductsFromAPI(50);

        //         console.log(productos);
        //         await uploadProductsToFirestore(productos)

        //     } catch (error) {
        //         console.log(error);
        //     }

        // }
        // handleUpProductsToFirestore();

//esto se coloca en un useEffect