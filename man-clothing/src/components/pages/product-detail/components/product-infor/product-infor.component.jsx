import { useEffect } from 'react';
import { useState } from 'react';
import { NumericFormat } from 'react-number-format';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { addItemToCart } from '../../../../../util/store/cart/cart.action';
import { selectCartList } from '../../../../../util/store/cart/cart.selector';
import { selectProductColor, selectProductSize } from '../../../../../util/store/products/product.selector';
import Button, {BUTTON_TYPE} from '../../../../button/button.conponent';
import CartView from '../../../../card/components/card-view/card-view.component';
import './product-infor.styles.scss';

const ProductInfor = ({product}) => {
  const colors = useSelector(selectProductColor)
  const sizes = useSelector(selectProductSize)

  const [colorCurrent, setColorCurrent] = useState(colors && colors[0])
  const [sizeCurrent, setSizeCurrent] = useState(sizes && sizes[0])
  const [quantityAdd, setQuantityAdd] = useState(1)
  
  useEffect(() => {
    setColorCurrent(colors && colors[0])
    setSizeCurrent(sizes && sizes[0])
  }, [product, colors, sizes])

  const cartItems = useSelector(selectCartList)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleChangeQuantity = (e) => {
    setQuantityAdd(+(e.target.value) || 1)
  }
  const handleSelectColor = (color) => {
    setColorCurrent({...color})
  }

  const handleSelectSize = (size) => {
    setSizeCurrent({...size})
  }

  const handleAddToCart = () => {
    const {image_detail, ...productDetail} = product
    dispatch(addItemToCart(cartItems, {...productDetail, product_image: image_detail[0].image_thumb , colorCurrent, sizeCurrent}, quantityAdd ))
    toast.success('Đã thêm sản phẩm vào giỏ hàng')
    setQuantityAdd(1)
  }

  const handleAddToCartAndCheckout = () => {
    const {image_detail, ...productDetail} = product
    const checkItemExisting = cartItems.find(cartItem => cartItem.id === productDetail.id 
      && cartItem.colorCurrent.id === colorCurrent.id && cartItem.sizeCurrent.id === sizeCurrent.id)
    if (!checkItemExisting) {
      dispatch(addItemToCart(cartItems, {...productDetail, product_image: image_detail[0].image_thumb , colorCurrent, sizeCurrent}, quantityAdd ))
    }
    navigate('/shopping-cart')
  }

  return (
    <div className="col col-12">
      <div className="information">
        <h4 className="heading-fourth">{product.product_name}</h4>
        <div className="information__review">
          <CartView views={product.views} sold={product.sold}/>
        </div>
        <div className="information__price">
          <span className="information__price-sale">
            <NumericFormat value={product.price_discount || product.product_price} displayType={'text'} thousandSeparator={true}  suffix='₫' />
          </span>
          {product.price_discount && <span className="information__price-primary">
            <NumericFormat value={product.product_price} displayType={'text'} thousandSeparator={true}  suffix='₫' />
          </span>}
        </div>
        <div className="information__description">
          <p className="heading-paragrapy">
            {product.short_description}
          </p>
        </div>
        <div className="information__type">
          <div className="size">
            <span className="size__title">Size:</span>
            <ul className="size__list">
              { sizes?.map(
                size => <li 
                  key={size.id} 
                  className={`size__item ${sizeCurrent.id === size.id ? 'active' : ''}`}
                  onClick={() => handleSelectSize(size)}
                  >
                  {size.title}
                </li>
              )}             
            </ul>
          </div>
          <div className="color">
            <span className="color__title">color:</span>
            <ul className="color__list">
              {colors?.map( color => 
                <li 
                  key={color.id} 
                  className={`color__item ${colorCurrent.id === color.id ? 'active' : ''}`} 
                  onClick={() => handleSelectColor(color)}
                  >
                  <input type="color" className="color__input" disabled readOnly  value={color.code}/>
                </li>                
              )}
           
            </ul>
          </div>
        </div>
        <div className="information__quantity">
          <input 
            type="number" 
            className="quantity__input"  
            value={quantityAdd}  
            onChange={handleChangeQuantity}
            min="1" 
            max="10"/>
          <Button type={BUTTON_TYPE.LINE} onClick={handleAddToCart}>Thêm vào giỏ hàng</Button>
          
        </div>
        <div className="button__order">
          <Button type={BUTTON_TYPE.PRIMARY} onClick={handleAddToCartAndCheckout} >Đặt hàng</Button>
        </div>
        <ul className="information__tags">
          <li className="information__tag">
            <span className="information__tag-name">id:</span>
            <span className="information__tag-content">{product.id}</span>
          </li>
          <li className="information__tag">
            <span className="information__tag-name">Danh mục:</span>
            <span className="information__tag-content">{product.categories.title}</span>
          </li>
          {/* <li className="information__tag">
            <span className="information__tag-name">tag:</span>
            <span className="information__tag-content">clother, skin, body</span>
          </li> */}
        </ul>
      </div>
    </div>
  )
}
export default ProductInfor;