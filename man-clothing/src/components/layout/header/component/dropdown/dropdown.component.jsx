import { Link } from "react-router-dom";
import './dropdown.styles.scss';

const Dropdown = () => {
  return (
        <ul className="dropdown">
          <li className="dropdown__item">
              <Link to="" className="dropdown__link">About us</Link>
          </li>
          <li className="dropdown__item">
              <Link to="shop-detail.html" className="dropdown__link">Shop details</Link>
          </li>
          <li className="dropdown__item">
              <Link to="/shopping-cart" className="dropdown__link">Shopping Carts</Link>
          </li>
          <li className="dropdown__item">
              <Link to="" className="dropdown__link">Check Out</Link>
          </li>
          <li className="dropdown__item">
              <Link to="" className="dropdown__link">Blog Details</Link>
          </li>
        </ul>
  )
}

export default Dropdown;