import { ACTION_CART_TYPE } from "./cart.type";


const CART_INITIAL = {
  cartItems: [],
  isOpenCart: false,
  error: null
}

export const cartReducer = (state=CART_INITIAL, action) => {
  const {type, payload} = action;
  switch (type) {
    case ACTION_CART_TYPE.CART_UPDATE:
      return {
        ...state,
        cartItems: payload
      }
    case ACTION_CART_TYPE.CART_OPEN:      
      return {
        ...state,
        isOpenCart: payload
      }
    case ACTION_CART_TYPE.CART_CLEAR:      
      return {
        ...state,
        cartItems: [],
        coupon: null,
      }
    default:
      return state
  }
}