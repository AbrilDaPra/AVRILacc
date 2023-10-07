import Item from "./Item";
import PropTypes from 'prop-types';

const ItemList = ( {products} ) => {

  return (
    <div className="container">

        <div className="products">
            { products.map((prod) => <Item product={prod} key={prod.id} />) }
        </div>
    </div>
  )
}

ItemList.propTypes = {
  products: PropTypes.array.isRequired,
};

export default ItemList;