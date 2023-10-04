import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const CartWidget = () => {

    const { quantityInCart } = useContext(CartContext);

  return (
    <div>
        <Link className="menu-link" to="/cart">
          <ShoppingCartIcon sx={{ color: 'white' }} />
          <span className="cart-number">{quantityInCart()}</span>
        </Link>
    </div>
  )
}

export default CartWidget;