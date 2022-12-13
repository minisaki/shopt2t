import { COLOR_ACTION_TYPES } from "./color.type";

const INITIAL_COLOR = {
  colors: [],
  isLoading: false,
  error: null
}

export const colorReducer = (state = INITIAL_COLOR, action) => {
  const {type, payload} = action;
  switch (type) {
      case COLOR_ACTION_TYPES.FETCH_COLOR_SUCCESS:
          return {
              ...state,
              colors: payload,
              isLoading: false,
          }
      case COLOR_ACTION_TYPES.FETCH_COLOR_START:
        return {
          ...state,
          isLoading: true
        }
      case COLOR_ACTION_TYPES.FETCH_COLOR_FAILED:
        return {
          ...state,
          isLoading: false,
          error: payload
        }
      default:
        return state
  }
}

