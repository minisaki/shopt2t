import { PROFILE_ACTION_TYPE } from "./profile.type";
import { createAction } from "../../reducer/reducer.util";
import profileApi from "../../api/profileApi";

const fetchProfileStart = () => createAction(PROFILE_ACTION_TYPE.FETCH_PROFILE_START)
const fetchProfileSuccess = (profile) => createAction(PROFILE_ACTION_TYPE.FETCH_PROFILE_SUCCESS, profile)
const createProfileSuccess = (id) => createAction(PROFILE_ACTION_TYPE.CREATE_PROFILE_SUCCESS, id)
const updateProfileSuccess = (profile) => createAction(PROFILE_ACTION_TYPE.UPDATE_PROFILE_SUCCESS, profile)
const fetchProfileError = (error) => createAction(PROFILE_ACTION_TYPE.FETCH_PROFILE_FAILED, error)


export const createProfileAsync = () => async (dispatch) => {
  dispatch(fetchProfileStart())
  try {
    const profile = await profileApi.create()
    console.log(profile)
    dispatch(createProfileSuccess(profile.id))
  } catch(error) {
    dispatch(fetchProfileError(error))
  }
}

export const updateProfileAsync = (data, id) => async (dispatch) => {
  const address = `${data.address}-${data.city}`  
  const dataProfile = {
    name: data.name,
    note: data.note,
    phone: data.phone,
    address
  }
  dispatch(fetchProfileStart())
  try {
    const profile = await profileApi.update(dataProfile, id)
    dispatch(updateProfileSuccess(profile))
  } catch(error) {
    dispatch(fetchProfileError(error))
  }
}

export const getProfileAsync = (id) => async (dispatch) => {
  dispatch(fetchProfileStart())
  try {
    const profile = await profileApi.get(id)
    dispatch(fetchProfileSuccess(profile))
  } catch(error) {
    dispatch(fetchProfileError(error))
  }
}
