import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectCartList } from '../../../../../util/store/cart/cart.selector';
import Button, {BUTTON_TYPE} from '../../../../button/button.conponent';

import ShoppingHeader from '../shopping-header/shopping-header.component';
import ShoppingItem from '../shopping-item/shopping-item.component';
import './shopping-list.styles.scss';

const ShoppingList = () => {

  const cartItems = useSelector(selectCartList)

	const renderCartItems =  cartItems.length > 0 && cartItems.map ( (cartItem, index) => (
		<ShoppingItem cartItem={cartItem} key={index}/>
	))

  return (    
    <Fragment>
      <ShoppingHeader/>
      {renderCartItems}
      <Link className="shopping__action" to='/shop'>
        <Button type={BUTTON_TYPE.LINE}> Chọn thêm sản phẩm </Button>						
      </Link>
    </Fragment>
    
  )
}

export default ShoppingList