import { BLOG_ACTION_TYPES } from "./blog.types"

const BLOG_INITAL = {
  blogs: [],
  blog: {},
  isLoading: false,
  error: null
}

export const blogReducer = (state=BLOG_INITAL, action) => {
  const {type, payload} = action
  switch (type) {
    case BLOG_ACTION_TYPES.FETCH_BLOG_START:
      return {
        ...state,
        isLoading: true
      }
    case BLOG_ACTION_TYPES.FETCH_BLOG_DETAILL:
      return {
        ...state,
        isLoading: false,
        blog: payload
      }
    case BLOG_ACTION_TYPES.FETCH_BLOG_SUCCESS:
      return {
        ...state,
        isLoading: false,
        blogs: payload
      }
    case BLOG_ACTION_TYPES.FETCH_BLOG_FAILED:
      return {
        ...state,
        isLoading: false,
        error: payload
      }
    default:
      return state
  }
}