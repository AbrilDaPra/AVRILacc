import { useState } from "react";
import "../App.css";
import PropTypes from 'prop-types';

const Counter = ({ stock }) => {

    const [number, setNumber] = useState(0);

    const increment = () => {
      if(number < stock) {
        setNumber((prevNumber) => prevNumber + 1);
      }
    }

    const decrement = () => {
      if(number > 0) {
        setNumber((prevNumber) => prevNumber - 1);
      }
    }

    const addToCart = () => {
      if (number > 0) {
        console.log("Product added to cart");
      } else {
        console.log("Please select at least one product to add to the cart")
      }
    };

  return (
    <div className="productCounter">
        <button className="counterButton" onClick={decrement}>-</button>
        <h2 className="counterValue">{number}</h2>
        <button className="counterButton" onClick={increment}>+</button>
        <button className="addToCartButton" onClick={addToCart}>Add to cart</button>
    </div>
  )
};

Counter.propTypes = {
  stock: PropTypes.number,
};

export default Counter;

