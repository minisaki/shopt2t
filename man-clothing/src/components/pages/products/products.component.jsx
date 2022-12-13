import { useEffect, useMemo} from 'react';
import { useDispatch } from 'react-redux';
import queryString from 'query-string';

import { fetchColorAsync } from '../../../util/store/color/color.action';
import { fetchPriceAsync } from '../../../util/store/price/price.action';
import { fetchSizeAsync } from '../../../util/store/size/size.action';
import { fetchCategoriesAsync } from '../../../util/store/categories/categories.action';

import Breakcrumb from '../../breakcrumb/breakcrumb.component';
import GridLayout from '../../layout/grid/grid.component';
import ShopContainer from './components/shop-container/shop-container.conponent';
import SideBar from './components/side-bar/side-bar.component';
import { useLocation } from 'react-router-dom';
import { fetchProductsAsync } from '../../../util/store/products/product.action';

const Products = () => {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchPriceAsync())
    dispatch(fetchSizeAsync())
    dispatch(fetchColorAsync())
    dispatch(fetchCategoriesAsync())
    // dispatch(fetchProductsAsync())
  }, [dispatch])

  const location = useLocation()
  const queryParams = useMemo(() => {
    return queryString.parse(location.search)
  }, [location.search]) 
  
  
  useEffect(() => {
    dispatch(fetchProductsAsync(queryParams))
  }, [dispatch, queryParams])


  return (
    <main>      
      <Breakcrumb/>
      <GridLayout>
        <SideBar filter={queryParams}/>
        <ShopContainer filter={queryParams}/>
      </GridLayout>
      
    </main>
  )
}

export default Products;