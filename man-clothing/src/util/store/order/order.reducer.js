import { ORDER_ACTION_TYPE } from "./order.type";
const ORDER_INITIAL = {
  order: {},
  isLoading: false,
  error: null,
  success: null
}

export const orderReducer = (state=ORDER_INITIAL, action) => {
  const {type, payload} = action;
  switch (type){
    case ORDER_ACTION_TYPE.FETCH_ORDER_START:
      return {
        ...state,
        isLoading: true
      }
    case ORDER_ACTION_TYPE.CREATE_ORDER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        success: payload,
        error: null
      }
    case ORDER_ACTION_TYPE.FETCH_ORDER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        order: payload
      }
    case ORDER_ACTION_TYPE.UPDATE_ORDER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        success: payload
      }
    case ORDER_ACTION_TYPE.FETCH_ORDER_FAILED:
      return {
        ...state,
        isLoading: false,
        error: payload,
        order: {}
      }
    default:
      return state
  }
}
