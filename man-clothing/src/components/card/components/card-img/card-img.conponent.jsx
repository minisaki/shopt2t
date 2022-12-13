import './card-img.styles.scss';
import CartDiscount from '../card-discount/card-discount.component';
import CartFreeship from '../card-freeship/card-freeship.component';

const CartImg = ({imgUrl, isFreeShip, discount, title}) => {
  console.log(title)
  return (
    <figure className="card__img-box">
        <img src={imgUrl} alt={title} className="card__img" />
        {/* <ul className="cart__support">
          <li className="cart__item">
            <i className="cart__icon icon-basic-heart"></i>
          </li>
          <li className="cart__item">
            
            <CiRepeat className='cart__icon' />
          </li>
          <li className="cart__item">
            <BsCartPlus className="cart__icon"/>
          </li>
        </ul> */}
        {isFreeShip && <CartFreeship/> }
        {discount && <CartDiscount discount={discount}/>}
      </figure>
  )
}

export default CartImg;