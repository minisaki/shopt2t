import { useSelector } from 'react-redux';
import { selectIsLoading, selectProducts } from '../../../../../util/store/products/product.selector';
import Cart from '../../../../card/card.component';
import Filter from '../../../../filter/filter.component';
import './section-product.styles.scss';

const Products = () => {

	const products = useSelector(selectProducts)
	const productsIsLoading = useSelector(selectIsLoading)
	console.log(products)
	const productList = productsIsLoading ? 'loading...' : (products && products.map(product => {
			return (
					<div className="col col-3 uti-product-amination cart__responsive" key = {product.id}>
						<Cart product={product}/>
					</div>
			)
		
	}))
  return (
    <section className="section-products">
			<div className="grid wide">
				<div className="row">
						<div className="col col-12">
								<Filter />
						</div>
				</div>
				<div className="products">
					<div className="row">
						{productList}
					
					</div>
				</div>
			</div>

		</section>
  )
}

export default Products