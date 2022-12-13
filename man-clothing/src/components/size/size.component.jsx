import SizeItem from './sizeItem.component';
import './size.styles.scss';

const Size = ({data, filter, type, onChangeNavigate}) => {
  
  const handleSelectSize = (size) => {
    onChangeNavigate({
      size
    })
  }
  const renderSizeList = data.map( (item) =>  
      <SizeItem 
        key={item.id} 
        item={item}
        onSelectSize={handleSelectSize}
        active={item.slug === filter[type]}
        />
    )
  return (
    <ul className="size__list">
      {renderSizeList}
    </ul>
  )
}

export default Size