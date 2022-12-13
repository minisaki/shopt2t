import { COLOR_ACTION_TYPES } from "./color.type";
import { createAction } from "../../reducer/reducer.util";
import colorApi from "../../api/colorApi";


export const fetchColorStart = () => createAction(COLOR_ACTION_TYPES.FETCH_COLOR_START)
export const fetchColorSuccess = (colorArray) => createAction(COLOR_ACTION_TYPES.FETCH_COLOR_SUCCESS, colorArray)
export const fetchColorError = (error) => createAction(COLOR_ACTION_TYPES.FETCH_COLOR_FAILED, error)

export const fetchColorAsync =() => async (dispatch) => {
  dispatch(fetchColorStart())
  try {
    const colorArray = await colorApi.getAll()
    dispatch(fetchColorSuccess(colorArray))
  }
  catch (error) {
    dispatch(fetchColorError(error))
  }
}