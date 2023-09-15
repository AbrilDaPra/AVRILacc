import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import '../App.css';
const CartWidget = () => {
  return (
    <div className='cart'>
      <ShoppingCartIcon sx={{ color: 'white' }} />
      <p className='cart-text'>5</p>
    </div>
  )
}

export default CartWidget