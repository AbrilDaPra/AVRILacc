import Item from './Item';
import PropTypes from 'prop-types';

const ItemList = ({ products }) => {
  return (
    <div>
      <h1>Products</h1>
      { 
        products && products.length > 0 ? (
          products.map((product) => (
            <Item key={product.id} name={product.name} image={product.image} title={product.title} />

          ))
        ) : (
          <p>No products available.</p>
        )
      }
    </div>
  )
};

ItemList.propTypes = {
  products: PropTypes.array.isRequired,
};

export default ItemList;
