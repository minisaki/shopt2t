import { NumericFormat } from 'react-number-format';
import { useDispatch, useSelector } from 'react-redux';

import {addItemToCart, clearCartItem, removeItemfromCart} from '../../../../../util/store/cart/cart.action';
import { selectCartList } from '../../../../../util/store/cart/cart.selector';
import GridLayout from '../../../../layout/grid/grid.component';

import './shopping-item.styles.scss';

const ShoppingItem = ({cartItem}) => {
  const dispatch = useDispatch()
  const cartItems = useSelector(selectCartList)

  const cartItemTotalPrice = (cartItem.price_discount || cartItem.product_price) * cartItem.quantity
  // const cartItem = {...cartItem, cartItemTotalPrice}
  const hanldeAddCartItem = () => {
    dispatch(addItemToCart(cartItems, cartItem ))
  }

  const hanldeRemoveCartItem = () => {
    dispatch(removeItemfromCart(cartItems, cartItem ))
  }

  const hanldeClearCartItem = () => {
    dispatch(clearCartItem(cartItems, cartItem ))
  }

  return (
    <div className="shopping__item">  
      <GridLayout noGutter>
        <div className="col col-5 col--1">
          <div className="shopping__product">
            <img src={cartItem.product_image} alt="" className="shopping__product-img"/>
            <div className="shopping__product-infor">
              <h5 className="heading-fifth">
                {cartItem.product_name}
              </h5>
              <span className="shopping__product-price">
                <NumericFormat value={cartItem.price_discount || cartItem.product_price} displayType={'text'} thousandSeparator={true}  suffix='₫' /> 
              </span>
              <span className="shopping__product-price">
                Color: {cartItem.colorCurrent.title}
              </span>
              <span className="shopping__product-price">
                Size: {cartItem.sizeCurrent.title}
              </span>
            </div>
          </div>
        </div>
        <div className="col col-3 col--2">
          <span className="shopping__arrow" onClick={hanldeRemoveCartItem}>&#x276C;</span>
          <span className="shopping__quantity">{cartItem.quantity}</span>
          <span className="shopping__arrow" onClick={hanldeAddCartItem}>&#x276D;</span>
        </div>
        <div className="col col-3 col--3">
          <h4 className="heading-fourth">
            <NumericFormat value={cartItemTotalPrice} displayType={'text'} thousandSeparator={true}  suffix='₫' /> 
          </h4>
        </div>
        <div className="col col-1 col--4">
          <span className="shopping__close" onClick={hanldeClearCartItem}>
            &#10005;
          </span>
        </div>
      </GridLayout>
    </div>
  )
}

export default ShoppingItem;