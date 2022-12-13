import { useSelector } from 'react-redux';
import { selectIsLoading, selectPageCurrent, selectPageNext, selectPagePrev, selectPageTCount, selectPageTotal, selectProducts } from '../../../../../util/store/products/product.selector';
import Card from '../../../../card/card.component';
import FilterView from '../../../../filter-view/filter-view.component';
import Pagination from '../../../../pagination/pagination.component';
import SkeletonCart from '../../../../skeleton/skeleton-cart.component';
import ShopHeader from './shop-container-header.component';
import './shop-container.styles.scss';

const ShopContainer = ({filter}) => {
  
  const products = useSelector(selectProducts)
  const pageCurrent = useSelector(selectPageCurrent)
  const pageNext = useSelector(selectPageNext)
  const pagePrev = useSelector(selectPagePrev)
  const pageTotal = useSelector(selectPageTotal)
  const pageCount = useSelector(selectPageTCount)
  const isLoading = useSelector(selectIsLoading)
  
  const renderProduct = products && products.map( product => (
    <div className="col col-4 uti-product-amination card-responsive" key={product.id}>
        <Card product={product} isLoading={isLoading} />
      </div>
  ))

  
  return (

    <div className="col col-9 shop-responsive">      
					<div className="shop-container">
						<ShopHeader count={pageCount} filter={filter}/>
            <FilterView filter={filter}/>
						<div className="products">
							<div className="row">
                {isLoading ? <SkeletonCart/> : renderProduct}
							</div>
						</div>						
					</div>
					{products && <Pagination page={pageCurrent} next={pageNext} prev={pagePrev} total={pageTotal} filter={filter}/>}
        </div>
  )
}

export default ShopContainer;