import { useSelector } from 'react-redux';
import { createSearchParams, useNavigate } from 'react-router-dom';
import { selectCategories } from '../../../../../util/store/categories/categories.selector';
import { selectColorIsLoading, selectColors } from '../../../../../util/store/color/color.selector';
import { selectCollectPrice, selectPriceIsLoading } from '../../../../../util/store/price/price.selector';
import { selectSizeIsLoading, selectSizes } from '../../../../../util/store/size/size.selector';
import Color from '../../../../color/color.component';
import Size from '../../../../size/size.component';
import SkeletonItem from '../../../../skeleton/skeleton-item.component';
import SideBarBody from '../side-bar-body/side-bar-body.component';
import SideBarCard from '../side-bar-card/side-bar-card.component';
import SideBarSearch from '../side-bar-search/side-bar-search.component';
import './side-bar.styles.scss';



const SideBar = ({filter}) => {
  const categories = useSelector(selectCategories)
  const colectPrices = useSelector(selectCollectPrice)
  const isLoading = useSelector(selectPriceIsLoading)

  const colectSizes = useSelector(selectSizes)
  const sizeIsLoading = useSelector(selectSizeIsLoading)

  const colors = useSelector(selectColors)
  const colorIsLoading = useSelector(selectColorIsLoading)

  const navigate = useNavigate()
  const handleNavigate = (filterItem) => {
    delete filter['page']
    navigate({
      search: createSearchParams({
        ...filter,
        ...filterItem
      }).toString()
    })
  }
  return (
    <div className="col col-3 sidebar-responsive">
      <aside className="sidebar">
        <SideBarSearch onChangeNavigate={handleNavigate} />
        <SideBarCard title='Danh mục' >
        { isLoading ? <SkeletonItem number={5}/>  : <SideBarBody data={categories} filter={filter} type='slug' onChangeNavigate={handleNavigate}/>}
        </SideBarCard>
        
        <SideBarCard title='giá' >
        { isLoading ? <SkeletonItem number={5}/> : <SideBarBody data={colectPrices} filter={filter} type='price' onChangeNavigate={handleNavigate}/>}
        </SideBarCard>
        
        <SideBarCard title='size' >
          { sizeIsLoading ? <SkeletonItem number={5}/> : <Size data={colectSizes} filter={filter} type='size' onChangeNavigate={handleNavigate}/>}
        </SideBarCard>
        
        <SideBarCard title='màu sắc'>
          { colorIsLoading ? <SkeletonItem number={5}/> : <Color data={colors} filter={filter} type='color' onChangeNavigate={handleNavigate}/>}
        </SideBarCard>
      
      </aside>
    </div>
  )
}
export default SideBar;