import { NumericFormat } from "react-number-format"

const SideBarItem = ({item, onSelectCategory, active, type}) => {
  
  const handleClickCategory = () => {
    onSelectCategory(item.slug)
  }
  
  if (type === 'price') {
    const [from, to] = item.title.split('-')
    return <li className={`sidebar__item ${active ? 'active' : ''}`}>
        <div 
          onClick={handleClickCategory} 
          className="sidebar__link">
          <NumericFormat value={from} displayType={'text'} thousandSeparator={true}  suffix='₫' /> -  <NumericFormat value={to} displayType={'text'} thousandSeparator={true}  suffix='₫' />
        </div>
        </li>
  } else {
    return <li className={`sidebar__item ${active ? 'active' : ''}`}>
        <div 
          onClick={handleClickCategory} 
          className="sidebar__link">
          {item.title}
        </div>
        </li>
  }
  
}

export default SideBarItem;