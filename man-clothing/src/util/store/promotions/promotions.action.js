import { createAction } from "../../reducer/reducer.util";
import { PROMOTIONS_ACTION_TYPES } from "./promotions.types";
import promotionApi from "../../api/promotionApi";


export const fetchPromotionsStart = () => createAction(PROMOTIONS_ACTION_TYPES.FETCH_PROMOTIONS_START)
export const fetchPromotionsSuccess = (promotionArray) => createAction(PROMOTIONS_ACTION_TYPES.FETCH_PROMOTIONS_SUCCESS, promotionArray)
export const fetchPromotionsError = (error) => createAction(PROMOTIONS_ACTION_TYPES.FETCH_PROMOTIONS_FAILED, error)


export const fetchPromotionsAsync = () => async (dispatch) => {
  dispatch(fetchPromotionsStart())
  try {
    const promotionArray = await promotionApi.getAll()
    dispatch(fetchPromotionsSuccess(promotionArray))
  } catch (error) {
    dispatch(fetchPromotionsError(error))
  }
}