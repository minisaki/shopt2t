import './card-view.styles.scss';

const CartView = ({views, sold}) => {
  return (
    <ul className="view__container">
      <span className="view__text">lượt xem: {views.reduce( (total, view) => total + view , 0)}</span>
      <span className="view__text">đã bán: {sold}</span>
    </ul>
  )
}

export default CartView;