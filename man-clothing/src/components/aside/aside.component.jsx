import { Fragment} from 'react';
import { NumericFormat } from 'react-number-format';
import './aside.styles.scss';

const AsideCheckOutContent = ({cartTotal, isFreeShip, valueCoupon, orderTotal}) => {   
  console.log(cartTotal, isFreeShip, valueCoupon, orderTotal)
  return (
    <Fragment>                  
      <div className="aside__content">
        <span className="aside__name">tổng</span>
        <span className="aside__price">{
          <NumericFormat value={cartTotal || 0} displayType={'text'} thousandSeparator={true}  suffix='₫' />          
        }</span>
      </div>
      <div className="aside__content">
        <span className="aside__name">phí ship</span>
        {isFreeShip ? 
          <span className="aside__price"> Miễn phí </span> :
          <span className="aside__price">{
            <NumericFormat value={30000} displayType={'text'} thousandSeparator={true}  suffix='₫' />          
          }</span>}
      </div>
      {valueCoupon?.value && <div className="aside__content">   
        <span className="aside__name">Giảm giá</span>     
          <span className="aside__price">{
            <NumericFormat value={`-${valueCoupon?.value}`} displayType={'text'} thousandSeparator={true}  suffix='₫' />          
          }</span>
      </div>}
      <div className="aside__content">
        <span className="aside__name">Tỏng cộng</span>
        <span className="aside__price">{
          <NumericFormat value={orderTotal} displayType={'text'} thousandSeparator={true}  suffix='₫' /> }
        </span>
      </div>
    </Fragment>
  )
}
export default AsideCheckOutContent;