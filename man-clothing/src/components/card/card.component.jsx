import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import CartImg from './components/card-img/card-img.conponent';
import CartInfo from './components/card-info/card-info.component';
import { selectProfileId } from '../../util/store/profile/profile.selector';
import viewApi from '../../util/api/viewApi';

import './card.styles.scss';

const Card = ({product}) => {
  const {product_image, product_slug, is_free_ship, discount, id, product_name} = product
  const profileId = useSelector(selectProfileId)
  const navigate = useNavigate()

  const navigateShopDetail = async () => {
    try {
      await viewApi.createView({profileId, productId: id})      
    } catch(error) {
    } finally {
      navigate(`/shop/${product_slug}`)
    }
  }

  return (
    <div className="card" onClick={navigateShopDetail}>
      <CartImg imgUrl={product_image} isFreeShip={is_free_ship} discount={discount} title={product_name}/>
      <CartInfo product={product}/>      
    </div>
  )
}

export default Card;