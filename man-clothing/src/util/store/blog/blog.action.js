import { BLOG_ACTION_TYPES } from "./blog.types";
import { createAction } from "../../reducer/reducer.util";
import blogApi from "../../api/blogApi";
const sleep = ms => new Promise(r => setTimeout(r, ms));
export const fetchBlogStart = () => createAction(BLOG_ACTION_TYPES.FETCH_BLOG_START)
export const fetchBlogSuccess = (blogArray) =>  createAction(BLOG_ACTION_TYPES.FETCH_BLOG_SUCCESS, blogArray)
export const fetchBlogDetailSuccess = (blog) =>  createAction(BLOG_ACTION_TYPES.FETCH_BLOG_DETAILL, blog)
export const fetchBlogFailed = (error) =>  createAction(BLOG_ACTION_TYPES.FETCH_BLOG_FAILED, error)


export const fetchBlogAsync = () => async (dispatch) => {
  dispatch(fetchBlogStart())
  await sleep(1000)
  try {
    const blogArray = await blogApi.getAll()
    console.log(blogArray)
    dispatch(fetchBlogSuccess(blogArray))
  }
  catch (error) {
    dispatch(fetchBlogFailed(error))
  }
}

export const fetchBlogDetailAsync = (slug) => async (dispatch) => {
  dispatch(fetchBlogStart())
  try {
    const blog = await blogApi.getItem(slug)    
    dispatch(fetchBlogDetailSuccess(blog))
  }
  catch (error) {
    dispatch(fetchBlogFailed(error))
  }
}