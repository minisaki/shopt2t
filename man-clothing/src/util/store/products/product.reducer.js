import { PRODUCTS_ACTION_TYPES } from "./product.types";

const INITIAL_PRODUCTS = {
  products: {},
  product: {},
  isLoading: false,
  error: null
}

export const productsReducer = (state = INITIAL_PRODUCTS, action) => {
  const {type, payload} = action;
  switch (type) {
      case PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_SUCCESS:
          return {
              ...state,
              products: payload,
              isLoading: false,
              error: null
          }
      case PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_DETAIL:
        return {
            ...state,
            product: payload,
            isLoading: false,
            error: null
        }
      case PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_START:
        return {
          ...state,
          isLoading: true
        }
      case PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_FAILED:
        return {
          ...state,
          isLoading: false,
          error: payload,
          products: {}
        }
      default:
        return state
  }
}

