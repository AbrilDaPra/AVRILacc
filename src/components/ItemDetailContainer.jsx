import ItemList from './ItemList';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { productsData } from './Products';

const ItemDetailContainer = () => {
  const [products, setProducts] = useState([]);
  const { categorie } = useParams();

  useEffect(() => {
    const data = productsData;

    const filteredProducts = categorie ? data.filter(product => product.categorie === categorie) : data;

    setProducts(filteredProducts);
  }, [categorie]);

  return (
    <div>
      <h1>PRODUCTS</h1>
      {products ? <ItemList products={products} /> : <p>No products available.</p>}
    </div>
  );
};

export default ItemDetailContainer;

