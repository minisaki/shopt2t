import { COUPON_ACTION_TYPE } from "./coupon.type";
const COUPON_INITIAL = {
  coupon: {},
  isLoading: false,
  error: null
}

export const couponReducer = (state=COUPON_INITIAL, action) => {
  const {type, payload} = action;
  switch (type){
    case COUPON_ACTION_TYPE.FETCH_COUPON_START:
      return {
        ...state,
        isLoading: true
      }
    case COUPON_ACTION_TYPE.FETCH_COUPON_SUCCESS:
      return {
        ...state,
        isLoading: false,
        coupon: payload,
        error: null
      }
    case COUPON_ACTION_TYPE.FETCH_COUPON_FAILED:
      return {
        ...state,
        isLoading: false,
        error: payload,
        coupon: {}
      }
    default:
      return state
  }
}
