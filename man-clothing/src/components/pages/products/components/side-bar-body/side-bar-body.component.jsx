import SideBarItem from "../side-bar-item/side-bar-item.component";


const SideBarBody = ({data, filter, type, onChangeNavigate}) => {
  
  const hanldeSelectCategory = (slug) => {
    onChangeNavigate({
      [type]: slug
    })
  }
  const renderList = data.map( (item, index) => 
      <SideBarItem 
        onSelectCategory={hanldeSelectCategory} 
        item={item} 
        key={index}
        type={type}
        active = {item.slug === filter[type]}
        />
    )
  return (
    <ul className="sidebar__list">
      {renderList}
    </ul>
  )
}
export default SideBarBody;