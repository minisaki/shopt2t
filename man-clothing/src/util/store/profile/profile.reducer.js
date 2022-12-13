import { PROFILE_ACTION_TYPE } from "./profile.type";
const PROFILE_INITIAL = {
  id: '',
  profile: {},
  isProfile: false,
  isLoading: false,
  error: null
}

export const profileReducer = (state=PROFILE_INITIAL, action) => {
  const {type, payload} = action;
  switch (type){
    case PROFILE_ACTION_TYPE.FETCH_PROFILE_START:
      return {
        ...state,
        isLoading: true
      }
    case PROFILE_ACTION_TYPE.CREATE_PROFILE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        id: payload,
        isProfile: true
      }
    case PROFILE_ACTION_TYPE.FETCH_PROFILE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        profile: payload
      }
    case PROFILE_ACTION_TYPE.UPDATE_PROFILE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        profile: payload
      }
    case PROFILE_ACTION_TYPE.FETCH_PROFILE_FAILED:
      return {
        ...state,
        isLoading: false,
        error: payload
      }
    default:
      return state
  }
}
