import { useRef, useState } from 'react';
import './side-bar-search.styles.scss';

const SideBarSearch = ({onChangeNavigate}) => {
  const [querySearch, setQuerySearch] = useState('')
  const inputRef = useRef()
  const handleValueSearch = (e) => {
    setQuerySearch(e.target.value)
  }
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (!querySearch) {
      inputRef.current.focus()
      inputRef.current.style.outline = "1px solid red";
      return
    }
    onChangeNavigate({
      search: querySearch
    })
    setQuerySearch('')
  }
  return (
    <form className="sidebar__search" onSubmit={handleSearchSubmit}>
      <input 
        type="text" 
        className="sidebar__search-input" 
        placeholder="Tìm kiếm..." 
        onChange={handleValueSearch} 
        value={querySearch}
        ref={inputRef}
      />
      <i className="sidebar__search-icon icon-basic-magnifier" onClick={handleSearchSubmit}></i>
    </form>
  )
}

export default SideBarSearch;