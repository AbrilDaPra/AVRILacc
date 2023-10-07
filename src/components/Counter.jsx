import PropTypes from 'prop-types';

const Counter = ( {quantity, handleDecrement, handleIncrement, handleAdd} ) => {

  return (
    <div>

        <div className="productCounter">
            <button className="counterButton" onClick={handleDecrement}>-</button>
            <p className="counterValue">{quantity}</p>
            <button className="counterButton" onClick={handleIncrement}>+</button>
        </div>
        <button className="addToCartButton" onClick={handleAdd}>Add to cart</button>
    </div>
  )
}

Counter.propTypes = {
  quantity: PropTypes.number,
  handleDecrement: PropTypes.func,
  handleIncrement: PropTypes.func,
  handleAdd: PropTypes.func,
}

export default Counter;