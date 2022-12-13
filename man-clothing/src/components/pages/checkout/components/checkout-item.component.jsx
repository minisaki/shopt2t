import { NumericFormat } from "react-number-format";

const CheckOutItem = ({cartItem}) => {
  
  return (
    <li className="checkout__item">
      <span className="checkout__title">{`${cartItem.quantity.toString().padStart(2, '0')}. ${cartItem.product_name} (${cartItem.colorCurrent.title} - ${cartItem.sizeCurrent.title})`}</span>
      <span className="checkout__price">        
        <NumericFormat value={cartItem.quantity * (cartItem.price_discount || cartItem.product_price )} thousandSeparator suffix='₫' displayType="text"/>
      </span>
    </li>
  )
}
export default CheckOutItem;