import HeadingFifth from '../../text/heading-fifth/heading-fifth.component';

import './filter-item.styles.scss';

const FilterItem = ({title, active}) => {
  const show = active ? 'filter__item--active' : ''
  return (
    <li className={`filter__item ${show} `}>
      <HeadingFifth>{title}</HeadingFifth>												
    </li>
  )
}

export default FilterItem;