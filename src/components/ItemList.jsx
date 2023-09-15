import Item from './Item';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../App.css';

const ItemList = ({ products }) => {
  return (
    <div className='product-list'>
      {products && products.length > 0 ? (
          products.map((product) => (
            <div key={product.id} className='product-item'>
              <Link to={`/item/${product.id}`}>
                <Item 
                  key={product.id} 
                  name={product.name} 
                  price={product.price}
                  product={product}
                />
              </Link>
            </div>
            
          ))
        ) : (
          <p>No products available.</p>
        )
      }
    </div>
  );
};

ItemList.propTypes = {
  products: PropTypes.array.isRequired,
};

export default ItemList;
