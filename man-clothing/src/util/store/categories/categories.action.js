import { CATEGORIES_ACTION_TYPES } from "./categories.types";
import { createAction } from "../../reducer/reducer.util";
import categoryApi from "../../api/categoriesApi";

const sleep = ms => new Promise( r => setTimeout(r, ms))

export const setCategories = (categoryArray) => createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categoryArray)

export const fetchCategoriesStart = () => createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START)
export const fetchCategoriesSuccess = (categoryArray) => createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, categoryArray)
export const fetchCategoriesDetail = (category) => createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_DETAIL, category)
export const fetchCategoriesFailed = (error) => createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, error)


export const fetchCategoriesAsync = () => async (dispatch) => {
  dispatch(fetchCategoriesStart())
  await sleep(1000)
  try {
    const categoryArray = await categoryApi.getAll()
    dispatch(fetchCategoriesSuccess(categoryArray))
  } catch (error) {
    dispatch(fetchCategoriesFailed(error))
  }
}

export const fetchCategoriesDetailAsync = (slug) => async (dispatch) => {
  console.log(slug)
  dispatch(fetchCategoriesStart())
  
  try {
    const category = await categoryApi.getBySlug(slug)
    dispatch(fetchCategoriesDetail(category))
  } catch (error) {
    dispatch(fetchCategoriesFailed(error))
  }
}