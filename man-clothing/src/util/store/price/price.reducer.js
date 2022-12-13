import { ACTION_PRICE_TYPE } from "./price.type";

const PEICE_INITIAL = {
  collectPrice: [],
  isLoaing: false,
  error: null
}

export const priceReducer = (state=PEICE_INITIAL, action) => {
  const {type, payload} = action
  switch (type) {
    case ACTION_PRICE_TYPE.FETCH_PRICE_START:
      return {
        ...state,
        isLoading: true
      }

    case ACTION_PRICE_TYPE.FETCH_PRICE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        collectPrice: payload
      }
    case ACTION_PRICE_TYPE.FETCH_PRICE_FAILED:
      return {
        ...state,
        isLoading: false,
        error: payload
      }
    default:
      return state
  }
}