import { SIZE_ACTION_TYPES } from "./size.type";
import { createAction } from "../../reducer/reducer.util";
import sizeApi from "../../api/sizeApi";


export const fetchSizeStart = () => createAction(SIZE_ACTION_TYPES.FETCH_SIZE_START)
export const fetchSizeSuccess = (sizeArray) => createAction(SIZE_ACTION_TYPES.FETCH_SIZE_SUCCESS, sizeArray)
export const fetchSizeError = (error) => createAction(SIZE_ACTION_TYPES.FETCH_SIZE_FAILED, error)

export const fetchSizeAsync =() => async (dispatch) => {
  dispatch(fetchSizeStart())
  try {
    const sizeArray = await sizeApi.getAll()
    dispatch(fetchSizeSuccess(sizeArray))
  }
  catch (error) {
    dispatch(fetchSizeError(error))
  }
}