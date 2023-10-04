// import PropTypes from 'prop-types';
// import { useState } from 'react';

// const Counter = ( { stock, handleDecrement, handleIncrement, handleAddToCart } ) => {
//   const [number, setNumber] = useState(1);

//   const increment = () => {
//     if (number < stock) {
//       setNumber(prevNumber => prevNumber + 1);
//       handleIncrement();
//     }
//   };

//   const decrement = () => {
//     if (number > 1) {
//       setNumber(prevNumber => prevNumber - 1);
//       handleDecrement();
//     }
//   };

//   const addToCart = () => {
//     if (number > 0) {
//       handleAddToCart();
//     } else {
//       console.log("Please select at least one product to add to the cart");
//     }
//   };

//   return (
//     <div className="productCounter">
//       <button className="counterButton" onClick={decrement}>-</button>
//       <h2 className="counterValue">{number}</h2>
//       <button className="counterButton" onClick={increment}>+</button>
//       <button className="addToCartButton" onClick={addToCart}>Add to cart</button>
//     </div>
//   )
// }

// Counter.propTypes = {
//   stock: PropTypes.number,
//   handleDecrement: PropTypes.func,
//   handleIncrement: PropTypes.func,
//   handleAddToCart: PropTypes.func,

// };

// export default Counter;

// import { useState } from "react"

// const Counter = () => {
//   const [number, setNumber] = useState(0);

//   const increment = () => {
//     setNumber(number + 1);
//   }

//   const decrement = () => {
//     setNumber(number - 1);
//   }

//   return(
//     <div className="productCounter">
//       <button className="counterButton" onClick={decrement}>-</button>
//       <h2 className="counterValue">{number}</h2>
//       <button className="counterButton" onClick={increment}>+</button>
//     </div>
//   )
// }

// export default Counter;



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