import ItemList from './ItemList';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { productsData } from './Products';
import '../App.css';

const ItemDetailContainer = () => {
  const [products, setProducts] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const data = productsData;

    const product = data.find(product => product.id === parseInt(id));

    if (product) {
      setProducts([product]);
    } else {
      setProducts([]);
    }
  }, [id]);

  return (
    <div>
      <h1 className='products-title'>PRODUCTS</h1>
      {products.length > 0 ? <ItemList products={products} /> : <p>No product found.</p>}
    </div>
  );
}

export default ItemDetailContainer;

