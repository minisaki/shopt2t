import { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { fetchProductDetailsAsync } from '../../../util/store/products/product.action';
import Breakcrumb from '../../breakcrumb/breakcrumb.component';
import GridLayout from '../../layout/grid/grid.component';
import ProductInfor from './components/product-infor/product-infor.component';
import ProductItem from './components/product-item/product-item.component';
import { selectIsLoading, selectProductItem} from '../../../util/store/products/product.selector';
import ProductDescription from './components/product-description/product-description.component';
import ProductRelated from './components/product-related/product-related.component';
import SkeletonProductDetail from '../../skeleton/skeleton-product-detail.component';
import './product-detail.styles.scss';

const ProductDetail = () => {
  const dispatch = useDispatch()
  const {productId} = useParams()

  const productItem = useSelector(selectProductItem)
  const isLoading = useSelector(selectIsLoading)

  useEffect(() => {
    dispatch(fetchProductDetailsAsync(productId))
  }, [dispatch, productId])
  return (
    <main>
      {isLoading ? 
        <SkeletonProductDetail/> : 
        productItem && (
        <Fragment>
          <Breakcrumb/>
          <section className="product-detail">
            <ProductItem imageDetail={productItem.image_detail} slug = {productItem.product_slug}/>
          </section>
          <section className="product-infor">
            <GridLayout>
              <ProductInfor
                product={productItem}
              />
            </GridLayout>
          </section>
          <section className="section-description"> 
          <ProductDescription description={productItem.description}/>
          </section>
          <section className="section-related"> 
            <ProductRelated categorySlug={productItem.categories.slug} productSlug={productId}/>
          </section>
      </Fragment>)}
      
    </main>
  )
}

export default ProductDetail;