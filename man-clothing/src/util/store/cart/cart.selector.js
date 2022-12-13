import { createSelector } from "reselect";
import { selectCoupon } from "../coupon/coupon.selector";

const cartReducer = state => {
  return state.cart
}

export const selectCartList = createSelector([cartReducer], (cartSlice) => cartSlice.cartItems)
export const selectCartCount = createSelector([selectCartList], (cartItems) => {
  if (cartItems.length === 0) return
  return cartItems.reduce( (count, item) => count + item.quantity, 0)
})

export const selectIsFreeShip = createSelector([selectCartList], (cartItems) => {
  return cartItems.some( item => item.is_free_ship)
})

export const selectCartTotal = createSelector([selectCartList], (cartItems) => {
  if (cartItems.length === 0) return 
  return cartItems.reduce( (count, item) => count + (+item.quantity * (+item.price_discount || +item.product_price)), 0)
})

export const selectIsOpenCart = createSelector([cartReducer], (cartSlice) => cartSlice.isOpenCart)

export const selectCartTotalResult = createSelector(
  [selectCoupon, selectIsFreeShip, selectCartTotal], 
  (valueCoupon, isFreeShip, cartTotal) => {
    if (!cartTotal) return 0
    let total = isFreeShip ? cartTotal : 30000 + cartTotal    
    total = valueCoupon?.value ? total - valueCoupon.value : total
    return total
  })  