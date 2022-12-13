import { NumericFormat } from 'react-number-format';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setIsOpenCart } from '../../util/store/cart/cart.action';
import { selectCartList } from '../../util/store/cart/cart.selector';
import Button from '../button/button.conponent';
import { BUTTON_TYPE } from '../button/button.conponent';
import './cart-dropdown.styles.scss';

const CartDropdown = ({active}) => {
  const cartItems = useSelector(selectCartList)
  const dispatch = useDispatch()
  const handleCloseCart = () => {
    dispatch(setIsOpenCart(false))
  }
  
  return (    
    <div className={`cart-dropdown ${active && cartItems.length > 0 ? 'active' : ''}`}>
      <ul className="cart-dropdown__list">{        
        cartItems.length > 0 && cartItems.map((item, index)=> (
          <li className="cart-dropdown__item" key={index}>
            <figure className='cart-dropdown__picture'>
              <img src={item.product_image} alt="" className='cart-dropdown__img'/>
            </figure>
            <div className="cart-dropdown__box">
              <p className="cart-dropdown__title">
                {item.product_name}
              </p>
              <div className="cart-dropdown__body">
                <span className="cart-dropdown__quantity"> {item.quantity}</span>
                X
                <span className="cart-dropdown__price">
                  <NumericFormat value={item.price_discount || item.product_price} displayType={'text'} thousandSeparator={true}  suffix='₫' />                
                </span>
              </div>
            </div>
          </li>
        ))
      }
      </ul>
      <Link className="button-cart" to='shopping-cart' onClick={handleCloseCart}>
        <Button type={BUTTON_TYPE.PRIMARY} > Xem chi tiet </Button>
      </Link>
    </div> 
  )
}
export default CartDropdown;