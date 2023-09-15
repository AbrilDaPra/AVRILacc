import CartWidget from './CartWidget';
import { Link } from 'react-router-dom/dist';
import '../App.css';

const NavBar = () => {
  return (
    <nav className='navbar'>
      <Link to="/" className='logo'><h1>AVRIL</h1></Link>
      <ul className='menu'>
        <li><Link className="menu-link" to="/">HOME</Link></li>
        <li><Link className="menu-link" to="/products">PRODUCTS</Link></li>
        <li><Link className="menu-link" to="/aboutus">ABOUT US</Link></li>
        <li><Link className="menu-link" to="/contact">CONTACT</Link></li>
      </ul>

      <Link to={"/cart"}>
        <CartWidget />
      </Link>

    </nav>
  )
}

export default NavBar


