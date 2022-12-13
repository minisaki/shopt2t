import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectCartCount } from "../../../../../util/store/cart/cart.selector";
import './nav.styles.scss';

const Nav = ({onCloseMenu}) => {
  const cartCount = useSelector(selectCartCount)

  const handleCloseMenu = () => {
    if (onCloseMenu) {
      onCloseMenu(false)
    }
  }
  return (
      // <nav className="nav">
          <ul className="nav__list">
              <li className="nav__item" onClick={handleCloseMenu}>
                  <NavLink  to="/" end className={({ isActive }) =>
              isActive ? 'nav__link active' : 'nav__link'
            }>Home</NavLink>
              </li>
              <li className="nav__item" onClick={handleCloseMenu}>
                  <NavLink to="shop"  className={({ isActive }) =>
              isActive ? 'nav__link active' : 'nav__link'
            }>Shop</NavLink>
              </li>
              <li className="nav__item" onClick={handleCloseMenu}>
                <NavLink 
                  to='blog' 
                  className={({ isActive }) => isActive ? 'nav__link active' : 'nav__link'}
                >
                  Blog
                </NavLink>
              </li>
              {cartCount && <li className="nav__item" onClick={handleCloseMenu}>
                <NavLink 
                  to='checkout' 
                  className={({ isActive }) => isActive ? 'nav__link active' : 'nav__link'}>
                  Purchase
                </NavLink>
              </li>}
          </ul>
      // </nav>
  )
}

export default Nav