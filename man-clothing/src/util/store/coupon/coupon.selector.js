import { createSelector } from "reselect";

const couponReducer = state => state.coupon

export const selectCoupon = createSelector([couponReducer], (couponSlice) => couponSlice.coupon)
export const selectCouponIsLoading = createSelector([couponReducer], (couponSlice) => couponSlice.isLoading)
export const selectCouponFaild = createSelector([couponReducer], (couponSlice) => couponSlice.error)