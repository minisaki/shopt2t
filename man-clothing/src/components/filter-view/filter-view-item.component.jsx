import {FiX} from 'react-icons/fi';
import { createSearchParams, useNavigate } from 'react-router-dom';


const FilterViewItem = ({item, filter}) => {
  const navigate = useNavigate()
  const handleChangeFilter = () => {
    if (Object.keys(filter).length === 0) return
    const newFilter = {...filter}
    delete newFilter[item.key]
    navigate({
      search: createSearchParams({
        ...newFilter
      }).toString()
    })
  }
  
  return (
    <li className="view__item"  >
      <span className="view__text">
        {`${item.label}: ${item.value()?.title}`}
      </span>
      <FiX className='view__icon' onClick={handleChangeFilter}/>
    </li>
  )
}
export default FilterViewItem;