import { productsData } from './Products';

export const getProductById = (productId) => {
    const product = productsData.find((product) => product.id === productId);

    return product || null;
}