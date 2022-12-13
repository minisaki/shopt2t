import { PRODUCTS_ACTION_TYPES } from "./product.types";
import { createAction } from "../../reducer/reducer.util";
import productApi from "../../api/productApi";

const sleep = ms => new Promise(r => setTimeout(r, ms));

export const fetchProductsStart = () => createAction(PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_START)
export const fetchProductsSuccess = (productArray) => createAction(PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_SUCCESS, productArray)
export const fetchProductsDetail = (product) => createAction(PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_DETAIL, product)
export const fetchProductsError = (error) => createAction(PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_FAILED, error)

export const fetchProductsPreviewAsync =() => async (dispatch) => {
  dispatch(fetchProductsStart())
  try {
    const prouctArray = await productApi.getPreview()    
    dispatch(fetchProductsSuccess(prouctArray))
  }
  catch (error) {
    dispatch(fetchProductsError(error))
  }
}

export const fetchProductsAsync =(params='') => async (dispatch) => {
  dispatch(fetchProductsStart())
  await sleep(100)
  try {
    const productMap = await productApi.getList(params)
    console.log(productMap)
    dispatch(fetchProductsSuccess(productMap))
  }
  catch (error) {
    dispatch(fetchProductsError(error))
  }
}

export const fetchProductDetailsAsync =(slug) => async (dispatch) => {
  dispatch(fetchProductsStart())
  await sleep(1000)
  try {
    const product = await productApi.getDetail(slug)
    console.log(product)
    dispatch(fetchProductsDetail(product))
  }
  catch (error) {
    dispatch(fetchProductsError(error))
  }
}