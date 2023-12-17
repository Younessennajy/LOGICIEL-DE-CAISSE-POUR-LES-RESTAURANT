import '../styles/navbar.css';
import { FaShoppingCart } from 'react-icons/fa';

const Navbar = ({ size, setShow }) => {
 

  return (
    <nav>
      <div className="nav_box">
        <span className="my_shop" onClick={() => setShow(true)}>
          My Shopping
        </span>
        <div className="cart" onClick={() => setShow(false)}>
          <span>
            <i className="fas fa-cart-plus"> </i>
            <FaShoppingCart />
          </span>
          <span id="count">{size}</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
