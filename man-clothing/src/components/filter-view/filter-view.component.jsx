import {useSelector} from 'react-redux'
import FilterViewItem from './filter-view-item.component';
import { selectCategories } from '../../util/store/categories/categories.selector';
import { selectCollectPrice } from '../../util/store/price/price.selector';
import { selectColors } from '../../util/store/color/color.selector';
import { selectSizes } from '../../util/store/size/size.selector';
import './filter-view.styles.scss';


const FilterView = ({filter}) => {

  const categories = useSelector(selectCategories)
  const prices = useSelector(selectCollectPrice)
  const colors = useSelector(selectColors)
  const sizes = useSelector(selectSizes)

  const listFilterView = [
    {
      id: 1,
      label: 'Danh mục',
      key: 'slug',
      isVisible: (filter) => filter['slug'],
      value: () => categories?.find(cate => cate.slug === filter['slug'])
    },
    {
      id: 2,
      label: 'Giá',
      key: 'price',
      isVisible: (filter) => filter['price'],
      value: () => prices?.find(price => price.slug === filter['price'])
    },
    {
      id: 3,
      label: 'Màu sắc',
      key: 'color',
      isVisible: (filter) => filter['color'],
      value: () => colors?.find(color => color.slug === filter['color'])
    },
    {
      id: 4,
      label: 'size',
      key: 'size',
      isVisible: (filter) => filter['size'],
      value: () => sizes?.find(size => size.slug === filter['size'])
    }
  ]

  const renderListFilter = listFilterView.filter( item => item.isVisible(filter)).map( item => {
    return  <FilterViewItem key={item.id} item={item} filter={filter}/>
  })
  
  return (
    <div className="view__filter">
      <ul className="view__list">
        {renderListFilter}
      </ul>
    </div>
  )
}

export default FilterView;