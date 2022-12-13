import {toast} from 'react-toastify';
import { ORDER_ACTION_TYPE } from "./order.type";
import { createAction } from "../../reducer/reducer.util";
import orderApi from "../../api/orderApi";

const fetchOrderStart = () => createAction(ORDER_ACTION_TYPE.FETCH_ORDER_START)
// const fetchOrderSuccess = (profile) => createAction(ORDER_ACTION_TYPE.FETCH_ORDER_SUCCESS, profile)
const createOrderSuccess = (order) => createAction(ORDER_ACTION_TYPE.CREATE_ORDER_SUCCESS, order)
// const updateOrderSuccess = (profile) => createAction(ORDER_ACTION_TYPE.UPDATE_ORDER_SUCCESS, profile)
const fetchOrderError = (error) => createAction(ORDER_ACTION_TYPE.FETCH_ORDER_FAILED, error)


export const createOrderAsync = (data) => async (dispatch) => {
  dispatch(fetchOrderStart())
  try {
    const order = await orderApi.create(data)
    toast.success(order.message);
    dispatch(createOrderSuccess(order.message))
    return order.message
  } catch(error) {
    toast.error(error?.message);
    dispatch(fetchOrderError(error))
    throw Error(error?.message)
  }
}

// export const updateOrderAsync = (data, id) => async (dispatch) => {
//   const address = `${data.address}-${data.city}`  
//   const dataOrder = {
//     name: data.name,
//     note: data.note,
//     phone: data.phone,
//     address
//   }
//   dispatch(fetchProfileStart())
//   try {
//     const profile = await profileApi.update(dataProfile, id)
//     dispatch(updateProfileSuccess(profile))
//   } catch(error) {
//     dispatch(fetchProfileError(error))
//   }
// }

// export const getProfileAsync = (id) => async (dispatch) => {
//   dispatch(fetchProfileStart())
//   try {
//     const profile = await profileApi.get(id)
//     dispatch(fetchProfileSuccess(profile))
//   } catch(error) {
//     dispatch(fetchProfileError(error))
//   }
// }
