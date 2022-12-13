import { useRef, useState } from 'react';
import {CiSearch} from 'react-icons/ci';
import { createSearchParams, useNavigate } from 'react-router-dom';
import './search.styles.scss';

const Search = () => {
  const navigate = useNavigate()
  const [value, setValue] = useState()
  const searchInput = useRef()
  const handleChangeInput = (e) => {
    setValue(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!value) {
      searchInput.current.focus()
      return
    }
    navigate({
      pathname: '/shop',
      search: createSearchParams({
        search: value
      }).toString()
    })
    setValue('')
    
    
  }
  return (
    <form className="search__control" onSubmit={handleSubmit}>        
        <input type="search" ref={searchInput} className="search__box" placeholder="Tìm tên sản phẩm" value={value} onChange={handleChangeInput}/>
        <label htmlFor="search" className="search__label" onClick={handleSubmit}>
          <CiSearch className="search__icon"/>
        </label>
    </form>
  )
}

export default Search;