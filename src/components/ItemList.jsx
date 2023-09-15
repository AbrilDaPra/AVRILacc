import Item from './Item';
import PropTypes from 'prop-types';
import '../App.css';

const ItemList = ({ products }) => {
  return (
    <div className='product-list'>
      {products && products.length > 0 ? (
          products.map((product) => (
            <Item 
              key={product.id} 
              name={product.name} 
              price={product.price}
              product={product}
            />
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
