import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';

import { selectCartList, selectCartTotal, selectCartTotalResult, selectIsFreeShip } from '../../../util/store/cart/cart.selector';
import { createOrderAsync } from '../../../util/store/order/order.action';
import { selectCreateOrderSuccess } from '../../../util/store/order/order.selector';
import { getProfileAsync, updateProfileAsync } from '../../../util/store/profile/profile.action';
import { selectProfileId } from '../../../util/store/profile/profile.selector';
import AsideCheckOutContent from '../../aside/aside.component';
import Breakcrumb from '../../breakcrumb/breakcrumb.component';
import FormCheckOut from '../../form/form-checkout/form.component';
import CheckOutItem from './components/checkout-item.component';
import { useNavigate } from 'react-router-dom';
import { clearCart } from '../../../util/store/cart/cart.action';
import HeadingFourth from '../../text/heading-fourth/heading-fourth.conponent';

import './checkout.styles.scss';
import GridLayout from '../../layout/grid/grid.component';
import { selectCoupon } from '../../../util/store/coupon/coupon.selector';


const CheckOut = () => {
  const cartItems = useSelector(selectCartList) 
  const cartTotal = useSelector(selectCartTotal)
  const isFreeShip = useSelector(selectIsFreeShip)
  const valueCoupon = useSelector(selectCoupon)
  const orderTotal = useSelector(selectCartTotalResult)
  const profileId = useSelector(selectProfileId)
  const successOrder = useSelector(selectCreateOrderSuccess)

  const dispatch = useDispatch() 
  const navigate = useNavigate()

  const handleUpdateProfile = (data, profileDefault) => {
    if (!_.isEqual(data, profileDefault)) {
      dispatch(updateProfileAsync(data, profileId))
    }
    
    const dataOrder = {
      profileId,
      cartItems,
      isFreeShip,
      valueCoupon,
      orderTotal,
      cartTotal
    }
    dispatch(createOrderAsync(dataOrder)).then(() => {
      navigate('/shop')
      dispatch(clearCart())
    })
  }
  
  useEffect(() => {
    dispatch(getProfileAsync(profileId))
  }, [dispatch, profileId])

  const renderCartItems = cartItems.length > 0 && cartItems.map( (cartItem, index) => (
    <CheckOutItem key={index} cartItem={cartItem}/>
  ))
  return (
    <main>
		<section className="product-detail">
      <Breakcrumb/>
    </section>
		<section className="section-checkout">
			<div className="checkout">
        <GridLayout reverse>           
          <div className="col col-8 checkout-left-responsive">
            <div className="checkout__form">
              <div className="checkout__header">
                <h3 className="heading-fourth">
                  Thông tin đơn hàng
                </h3>
              </div>
              <FormCheckOut  onUpdateProfile={handleUpdateProfile} isOrderSuccess={!!successOrder}/>
            </div>
          </div>
          <div className="col col-4 checkout-right-responsive">
            <aside className="checkout__aside">
              <div className="checkout__header checkout__header-aside">
                <HeadingFourth>
                  Chi tiết đặt hàng
                </HeadingFourth>
                
              </div>
              <ul className="checkout__list">
                <li className="checkout__item">
                  <span className="checkout__price">Sản phẩm</span>
                  <span className="checkout__price">tổng giá</span>
                </li>
                {renderCartItems}                
              </ul>
              <AsideCheckOutContent 
                cartTotal={cartTotal}
                isFreeShip={isFreeShip}
                valueCoupon={valueCoupon}
                orderTotal={orderTotal}
              />
            </aside>
          </div>
        </GridLayout>
      </div>
		</section>
	</main>
  )
}

export default CheckOut;