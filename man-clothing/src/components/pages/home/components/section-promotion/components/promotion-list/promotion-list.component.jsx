import HeadingFifth from '../../../../../../text/heading-fifth/heading-fifth.component';
import './promotion-list.styles.scss';

const PromotionList = ({products, product, onChangePromotionItem}) => {

  const handleChangePromotoItem = (item) => {
    onChangePromotionItem(item)
  }
  const promotionItem = product && products && products.map( (item, index) => {
    
    return (
      <li 
      className={`promotion__item ${product.id === item.id ? 'active' : ''}`} 
      key={index}
      onClick={() => handleChangePromotoItem(item)}
      >
          <HeadingFifth >{item.product_name}</HeadingFifth>								
        </li>
    )
  })
  
    return (
        <ul className="promotion__list">
          {promotionItem}
        </ul>
    )
  
}
export default PromotionList;