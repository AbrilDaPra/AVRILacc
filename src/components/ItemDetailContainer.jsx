import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../js/getproduct';
import '../App.css';
import Button from '@mui/material/Button'

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const product = getProductById(parseInt(id));

    if (product) {
      setProduct(product);
    } else {
      setProduct(null);
    }
  }, [id]);

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
          <Button className='button-addtocart'>ADD TO CART</Button>
          </div>

        </div>
      ) : (
        <p>No product found.</p>
      )}
    </div>
  );
}

export default ItemDetailContainer;

