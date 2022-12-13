import { toast } from "react-toastify";
import { COUPON_ACTION_TYPE } from "./coupon.type";
import { createAction } from "../../reducer/reducer.util";
import couponApi from "../../api/couponApi";

const fetchCouponStart = () => createAction(COUPON_ACTION_TYPE.FETCH_COUPON_START)
const fetchCouponSuccess = (Coupon) => createAction(COUPON_ACTION_TYPE.FETCH_COUPON_SUCCESS, Coupon)
const fetchCouponError = (error) => createAction(COUPON_ACTION_TYPE.FETCH_COUPON_FAILED, error)


export const fetchCouponAsync = (code) => async (dispach) => {
  dispach(fetchCouponStart())
  try {
    const couponValue = await couponApi.getCoupon(code)
    if (couponValue.value) {
      toast.success(`Áp mã thành công, giảm giá ${(couponValue.value).toLocaleString('it-IT', {
        style: 'currency',
        currency: 'VND',
      })}`)
      dispach(fetchCouponSuccess(couponValue))
    }
  } catch (error) {
    toast.error(error.message)
    dispach(fetchCouponError(error))
    throw Error(error.message)
  }

}