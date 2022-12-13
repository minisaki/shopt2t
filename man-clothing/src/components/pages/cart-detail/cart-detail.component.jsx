import Breakcrumb from '../../breakcrumb/breakcrumb.component';
import Shopping from './components/shopping/shopping.component';
import './cart-detail.styles.scss';

const CartDetail = () => {
  return (
    <main>
     <Breakcrumb/>
		<section className="shopping-cart">
			<Shopping/>
		</section>
	</main>
  )
}
export default CartDetail;