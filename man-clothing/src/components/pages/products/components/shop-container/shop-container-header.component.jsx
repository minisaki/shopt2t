import { createSearchParams,  useNavigate } from "react-router-dom";


const ShopHeader = ({count, filter}) => {
  const navigate = useNavigate()
  
  const handleChangeSort = (e) => {    
    navigate({
      search: createSearchParams({
        ...filter,
        [e.target.name]: e.target.value
      }).toString()
    })
  }
  return (
    <div className="shop-container__header">
      <div className="shop-container__title">
        {count ? `Kết quả: ${count} sản phẩm ` : `Không có sản phẩm khớp với tìm kiếm`}
      </div>
      <div className="shop-container__sort">
        <span className="shop-container__title">
          sắp xếp: 
        </span>
        <select name="sort" id="sort" className="shop-container__sort-option" onChange={handleChangeSort} value={filter.sort || '-create'}>
          <option value="product_price" >Giá tăng dần</option>
          <option value="-product_price" >Giá giảm dần</option>
          <option value="-create" >Mới nhất</option>
        </select>
      </div>
    </div>
  )
}

export default ShopHeader;