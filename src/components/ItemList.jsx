import Item from "./Item";
// import { toCapital } from "../helpers/toCapital";
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
  title: PropTypes.string.isRequired
};

export default ItemList;