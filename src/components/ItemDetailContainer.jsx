import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../js/getproduct';
import '../App.css';
import Button from '@mui/material/Button'
import Counter from './Counter';
import { useCart } from '../context/CartContext';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  const { handleAddToCart } = useCart();

  useEffect(() => {
    const product = getProductById(parseInt(id));

    if (product) {
      setProduct(product);
    } else {
      setProduct(null);
    }
  }, [id]);

  // const handleQuantityChange = (newQuantity) => {
  //   setQuantity(newQuantity);
  // }

  // const handleAddToCartClick = () => {
  //   if (quantity > 0) {
  //     handleAddToCart(product, quantity);
  //   } else {
  //     console.log("Please select at least one product to add to the cart!")
  //   }
  // }

  return (
    <div className='product-detail-container'>
      {!product && <h1 className='products-title'>PRODUCTS</h1>}
      {product ? (
        <div className='product-detail'>

          <div className='product-image'>
          <img src={product.image} alt={product.name} className='product-image' />
          </div>

          <div className='product-info'>
          <h2>{product.name}</h2>
          <p>Description: {product.description}</p>
          <p>Price: ${product.price}</p>
          <Counter stock={product.stock} />
          <Button className='button-addtocart' onClick={() => handleAddToCart(product, 1)}>ADD TO CART</Button>
          </div>

        </div>
      ) : (
        <p>No product found.</p>
      )}
    </div>
  );
}

export default ItemDetailContainer;

