import axiosClient from "./axiosClient";

const couponApi = {
  getCoupon(code) {
    const url = `coupon/${code}`
    return axiosClient.get(url)
  },
}

export default couponApi;