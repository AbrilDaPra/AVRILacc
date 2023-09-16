import { productsData } from '../components/Products';

export const getProductById = (productId) => {
    const product = productsData.find((product) => product.id === productId);

    return product || null;
}