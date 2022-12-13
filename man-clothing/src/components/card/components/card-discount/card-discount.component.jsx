import './card-discount.styles.scss';

const CartDiscount = ({discount}) => {
  return (
    <span className='card-discount'>
      {`-${discount}%`}
    </span>
  )
}
export default CartDiscount;