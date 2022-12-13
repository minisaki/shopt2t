import './color.styles.scss';

const Color = ({data, filter, type, onChangeNavigate}) => {
  
  const handleSelectColor = (color) => {
    onChangeNavigate({
      color
    })
  }
  const renderColor = data.map( color => {
      const handleClickColor = () => {
        handleSelectColor(color.slug)
      }
      return (
        <li className={`color__item ${color.slug === filter[type] ? 'active' : ''}`} key=
        {color.id} onClick={handleClickColor}>
          <input type="color" className="color__input" disabled  value={`${color.code}`}/>
        </li>
      )
    }
  )
  return (
  <ul className="color__list">
    {renderColor}
  </ul>
  )
}

export default Color;