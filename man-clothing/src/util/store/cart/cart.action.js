import { createAction } from "../../reducer/reducer.util";
import { ACTION_CART_TYPE } from "./cart.type";


export const setIsOpenCart = (bool) => createAction(ACTION_CART_TYPE.CART_OPEN, bool)
export const clearCart = () => createAction(ACTION_CART_TYPE.CART_CLEAR)

const addCartItems = (cartItems, cartItemAdd, quantity = 1) => {
  const checkItemExisting = cartItems.find(cartItem => cartItem.id === cartItemAdd.id 
    && cartItem.colorCurrent.id === cartItemAdd.colorCurrent.id && cartItem.sizeCurrent.id === cartItemAdd.sizeCurrent.id)
  if (checkItemExisting) {
    return cartItems.map (cartItem => 
      cartItem.id === cartItemAdd.id && cartItem.colorCurrent.id === cartItemAdd.colorCurrent.id && cartItem.sizeCurrent.id === cartItemAdd.sizeCurrent.id ? {...cartItem, quantity: cartItem.quantity + quantity} : cartItem
    )
  } else {
    cartItemAdd.quantity = + quantity
    return [
      ...cartItems,
      cartItemAdd
    ]
  }
}
const removeCartItems = (cartItems, cartItemRemove) => {
  const cartItemExisting = cartItems.find(cartItem => cartItem.id === cartItemRemove.id 
    && cartItem.colorCurrent.id === cartItemRemove.colorCurrent.id && cartItem.sizeCurrent.id === cartItemRemove.sizeCurrent.id)
  if (!cartItemExisting) return
  console.log(cartItemExisting.quantity === 1)
  if (cartItemExisting.quantity === 1) {    
    return cartItems.filter( cartItem => cartItem.id !== cartItemRemove.id || cartItem.colorCurrent.id !== cartItemRemove.colorCurrent.id || cartItem.sizeCurrent.id !== cartItemRemove.sizeCurrent.id )
    } else {
      return cartItems.filter( cartItem => cartItem.id === cartItemRemove.id 
      && cartItem.colorCurrent.id === cartItemRemove.colorCurrent.id && cartItem.sizeCurrent.id === cartItemRemove.sizeCurrent.id ? 
        {...cartItem, quantity: cartItem.quantity -= 1}:
        cartItem
        )
    }
}
const clearCartItems = (cartItems, cartItemClear) => {
  return cartItems.filter( cartItem => cartItem.id !== cartItemClear.id 
    || cartItem.colorCurrent.id !== cartItemClear.colorCurrent.id || cartItem.sizeCurrent.id !== cartItemClear.sizeCurrent.id)
}

export const addItemToCart = (cartItems, cartItemAdd, quantity) => {
  const newCartItem = addCartItems(cartItems, cartItemAdd, quantity)
  return createAction(ACTION_CART_TYPE.CART_UPDATE, newCartItem)
}

export const removeItemfromCart = (cartItems, cartItemRemove) => {
  const newCartItem = removeCartItems(cartItems, cartItemRemove)
  return createAction(ACTION_CART_TYPE.CART_UPDATE, newCartItem)
}
export const clearCartItem = (cartItems, cartItemClear) => {
  const newCartItem = clearCartItems(cartItems, cartItemClear)
  return createAction(ACTION_CART_TYPE.CART_UPDATE, newCartItem)
}



