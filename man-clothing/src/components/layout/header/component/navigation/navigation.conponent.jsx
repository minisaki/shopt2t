import {BsCart} from 'react-icons/bs';
import { NumericFormat } from 'react-number-format';
import CartDropdown from '../../../../cart-dropdown/cart-dropdown.component';
import './navigation.styles.scss';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartCount, selectCartTotal, selectIsOpenCart } from '../../../../../util/store/cart/cart.selector';
import { setIsOpenCart } from '../../../../../util/store/cart/cart.action';
import { useNavigate } from 'react-router-dom';


const Navigation = () => {
  const cartCount = useSelector(selectCartCount)
  const cartTotal = useSelector(selectCartTotal)
  const isOpencart = useSelector(selectIsOpenCart)

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleOpenCart = () => {
    if (window.innerWidth <= 900) {
      navigate('/shopping-cart')
    } else {
      dispatch(setIsOpenCart(!isOpencart))
    }
  }
  
  return (
    <div className="navigation">
      <div className="navigation__box" onClick={handleOpenCart}>
          <BsCart className='navigation__icon-io5'/>
          <span className="navigation__total-price">
            {cartTotal && <NumericFormat value={cartTotal} displayType={'text'} thousandSeparator={true}  suffix='₫' />}
          </span>
          <span className="cart-count">{cartCount}</span>          
      </div>
      <CartDropdown active={isOpencart}/>
  </div>
  )
}

export default Navigation;