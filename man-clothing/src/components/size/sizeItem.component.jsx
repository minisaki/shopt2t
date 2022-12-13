const SizeItem = ({item, onSelectSize, active}) => {
  const handleClickSize = () => {
    onSelectSize(item.slug)
  }
  return (
    <li className={`size__item ${active ? 'active' : ''}`} onClick={handleClickSize}>{item.title}</li>
  )
}

export default SizeItem;