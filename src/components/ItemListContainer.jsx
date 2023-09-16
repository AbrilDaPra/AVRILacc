import ItemList from './ItemList';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { productsData } from './Products';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import '../App.css';


const ItemListContainer = () => {

    const [products, setProducts] = useState([]);
    const { categorie } = useParams();

    useEffect(() => {
      const data = productsData;
      const filteredProducts = categorie ? data.filter(product => product.categorie === categorie) : data;
    
      setProducts(filteredProducts);
    }, [categorie]);

  return (
    <div className='products-container'>
        <h1>PRODUCTS</h1>

        <ButtonGroup variant="contained" aria-label="outlined primary button group">
          <Button component={Link} to="/categorie/rings">Rings</Button>
          <Button component={Link} to="/categorie/earrings">Earrings</Button>
          <Button component={Link} to="/categorie/necklaces">Necklaces</Button>
          <Button component={Link} to="/categorie/bracelets">Bracelets</Button>
          <Button component={Link} to="/products">All</Button>
        </ButtonGroup>

        <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;