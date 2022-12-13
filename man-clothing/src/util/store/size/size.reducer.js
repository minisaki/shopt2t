import { SIZE_ACTION_TYPES } from "./size.type";

const INITIAL_SIZE = {
  size: [],
  isLoading: false,
  error: null
}

export const sizeReducer = (state = INITIAL_SIZE, action) => {
  const {type, payload} = action;
  switch (type) {
      case SIZE_ACTION_TYPES.FETCH_SIZE_SUCCESS:
          return {
              ...state,
              size: payload,
              isLoading: false,
          }
      case SIZE_ACTION_TYPES.FETCH_SIZE_START:
        return {
          ...state,
          isLoading: true
        }
      case SIZE_ACTION_TYPES.FETCH_SIZE_FAILED:
        return {
          ...state,
          isLoading: false,
          error: payload
        }
      default:
        return state
  }
}

