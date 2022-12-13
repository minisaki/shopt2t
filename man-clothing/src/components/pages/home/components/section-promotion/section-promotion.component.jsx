import { Fragment, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectProductResultDiscount } from '../../../../../util/store/products/product.selector';

import GridLayout from '../../../../layout/grid/grid.component';
import PromotionImg from './components/promotion-img/promotion-img.conponent';
import PromotionList from './components/promotion-list/promotion-list.component';
import PromotionTimer from './components/promotion-timer/promotion-timer.conponent';

import './section-promotion.styles.scss';

const Promotion = () => {
	const productDiscount = useSelector(selectProductResultDiscount)
	const [product, setProduct] = useState(productDiscount && productDiscount[0])
	
	
	useEffect(() => {
		setProduct(productDiscount && productDiscount[0])
	}, [productDiscount])

	const handleChangePromotionItem = (item) => {
		setProduct(item)
	}

  return (
    <section className="section-promotion">
			<div className="promotion">
				<GridLayout>
					<Fragment>
							<div className="col col-3 col-3-responsive">
								<PromotionList products={productDiscount} product={product} onChangePromotionItem={handleChangePromotionItem}/>
							</div>
							<div className="col col-5 col-5-responsive">
								{product && <PromotionImg productImg={product.product_image} rate={product.discount} title={product.product_name}/>}
							</div>
							<div className="col col-4 col-4-responsive">
								{product && <PromotionTimer timeExpirated={product.exprire} price= {product.product_price} priceDiscount= {product.price_discount} productName={product.product_name} productSlug={product.product_slug}/>}
							</div>
						</Fragment>
				
						
				</GridLayout>
			</div>
		</section>
  )
}

export default Promotion;