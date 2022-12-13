import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategoriesDetailAsync } from '../../../../../util/store/categories/categories.action';
import { selectCategory } from '../../../../../util/store/categories/categories.selector';
import Cart from '../../../../card/card.component';
import './product-related.styles.scss';

const ProductRelated = ({categorySlug, productSlug}) => {
console.log(productSlug)
	const dispatch = useDispatch()
	const category = useSelector(selectCategory)
	
	useEffect(() => {
		dispatch(fetchCategoriesDetailAsync(categorySlug))
	}, [dispatch, categorySlug])
  return (    
			<div className="grid wide">
				<h2 className="heading-secondary uti-margin-bottom uti-text-center">Sản phẩm tương tự</h2>
				<div className="products">
					<div className="row">
						{ category.products && 
							category.products.filter(product => product.product_slug !== productSlug).map( product => 
								<div 
									className="col col-3 uti-product-amination cart-responsive" 
									key={product.id}>
									<Cart product={product}/>
								</div>
							)
						}			
					</div>
				</div>
			</div>
  )
}

export default ProductRelated;