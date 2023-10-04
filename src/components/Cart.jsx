import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom';

const Cart = () => {

    const { cart, totalPrice, clearCart } = useContext(CartContext);

    const handleClearCart = () => {
        clearCart();
    }

  return (
    <div className="cart-container">
        <h1 className="cart-title">Cart</h1>

        {
          cart.map((prod) => (
              <div key={prod.id}>
                  <br />
                  <h3>{prod.title}</h3>
                  <p>Unit price: ${prod.price}</p>
                  <p>Total price: ${prod.price * prod.quantity}</p>
                  <p>Quantity: {prod.quantity}</p>
                  <br />
              </div>
          ))
        }

        {  
          cart.length > 0 ?
          <>
              <h2>Total price: ${totalPrice()}</h2>
              <button onClick={handleClearCart}>Clear cart</button>
              <Link to="/checkout">Complete Purchase</Link>
          </> :
          <h2>The cart is empty!</h2>
        }
        
    </div>
  )
}

export default Cart;