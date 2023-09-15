import ItemList from './ItemList';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { productsData} from './Products';

const ItemListContainer = () => {

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
        <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;