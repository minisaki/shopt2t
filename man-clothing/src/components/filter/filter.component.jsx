import FilterItem from './conponents/filter-item.conponent';
import './filter.styles.scss';


const Filter = () => {
  return (
    <div className="filter">
      <ul className="filter__list">
        <FilterItem title='bán chạy'  active/>
        <FilterItem title='mới nhận'/>
        <FilterItem title='khuyến mãi'/>
      </ul>
    </div>
  )
}

export default Filter;