import { ACTION_PRICE_TYPE } from "./price.type";
import { createAction } from "../../reducer/reducer.util";
import priceApi from "../../api/collectFilterPriceApi";

export const fetchPriceStart = () => createAction(ACTION_PRICE_TYPE.FETCH_PRICE_START)
export const fetchPriceSuccess = (collectPrice) => createAction(ACTION_PRICE_TYPE.FETCH_PRICE_SUCCESS, collectPrice)
export const fetchPriceFailed = (error) => createAction(ACTION_PRICE_TYPE.FETCH_PRICE_FAILED, error)


export const fetchPriceAsync = () => async (dispatch) => {
  dispatch(fetchPriceStart())
  try {
    const priceArray = await priceApi.getAll()
    dispatch(fetchPriceSuccess(priceArray))
  } 
  catch (error) {
    dispatch(fetchPriceFailed(error))
  }
}