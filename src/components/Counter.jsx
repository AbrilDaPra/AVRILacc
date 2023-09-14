import { useState } from "react";
import "../App.css";

const Counter = () => {

    const [number, setNumber] = useState(0);

    const increment = () => {
        setNumber(number + 1);
    }

    const decrement = () => {
        setNumber(number - 1);
    }

    const addToCart = () => {
      console.log("Product added to cart");
    }

  return (
    <div className="productCounter">
        <button className="counterButton" onClick={decrement}>-</button>
        <h2 className="counterValue">{number}</h2>
        <button className="counterButton" onClick={increment}>+</button>
        <button className="addToCartButton" onClick={addToCart}>Add to cart</button>
    </div>
  )
};

export default Counter;