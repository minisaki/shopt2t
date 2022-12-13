import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectCartTotal, selectCartTotalResult, selectIsFreeShip } from '../../../../../util/store/cart/cart.selector';
import { selectCoupon } from '../../../../../util/store/coupon/coupon.selector';
import AsideCheckOutContent from '../../../../aside/aside.component';
import Button, {BUTTON_TYPE} from '../../../../button/button.conponent';
import FormCoupon from '../../../../form/form-coupon/form-coupon.component';
import './shopping-aside.styles.scss';

const ShoppingAside =() => {
  const cartTotal = useSelector(selectCartTotal)
  const isFreeShip = useSelector(selectIsFreeShip)
  const valueCoupon = useSelector(selectCoupon)
  const orderTotal = useSelector(selectCartTotalResult)
  
  return (
    <aside className="aside">
      <h4 className="heading-fourth">
        Mã giảm giá
      </h4>
      <FormCoupon/>
      <div className="aside__total">
        <div className="aside__title">Tổng</div>
        <AsideCheckOutContent 
          cartTotal={cartTotal} 
          isFreeShip={isFreeShip}
          valueCoupon={valueCoupon}
          orderTotal={orderTotal}
        />
        <Link to="/checkout" className='aside__button'>
          <Button type={BUTTON_TYPE.PRIMARY} > Đặt hàng  </Button>
        </Link>
      </div>
    </aside>
  )
}
export default ShoppingAside;