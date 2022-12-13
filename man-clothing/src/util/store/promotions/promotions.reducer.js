import { PROMOTIONS_ACTION_TYPES } from "./promotions.types";

const PROMOTIONS_INITTIAL_STATE = {
  promotions: [],
  isLoading: false,
  error: null
}

export const promotionsReducer = ( state = PROMOTIONS_INITTIAL_STATE, action ) => {
  const {type, payload} = action
  switch (type) {
    case PROMOTIONS_ACTION_TYPES.FETCH_PROMOTIONS_START:
      return {
        ...state,
        isLoading: true
      }
    case PROMOTIONS_ACTION_TYPES.FETCH_PROMOTIONS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        promotions: payload
      }
    case PROMOTIONS_ACTION_TYPES.FETCH_PROMOTIONS_FAILED:
      return {
        ...state,
        isLoading: false,
        error: payload
      }
    default:
      return state
  }
   
}