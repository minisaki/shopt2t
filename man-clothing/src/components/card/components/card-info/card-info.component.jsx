import HeadingFourth from '../../../text/heading-fourth/heading-fourth.conponent';
import CartView from '../card-view/card-view.component';
import { NumericFormat } from 'react-number-format';
import './card-info.styles.scss';

const CartInfo = ({product}) => {
  
  return (
    <div className="card__info">
      <HeadingFourth>{product.product_name}</HeadingFourth>
      <CartView views={product.views} sold={product.sold}/>
      <div className="card__price">
      {product.price_discount && <span className="card__price-discount">
          <NumericFormat value={product.price_discount} displayType={'text'} thousandSeparator={true}  suffix='₫' />
        </span>}
        <span className={`card__price-${product.price_discount ? 'root': 'discount'}`}>
          <NumericFormat value={product.product_price} displayType={'text'} thousandSeparator={true}  suffix='₫' />
        </span>
        
      </div>
    </div>
  )
}

export default CartInfo;