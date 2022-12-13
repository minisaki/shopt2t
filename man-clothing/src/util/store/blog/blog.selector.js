import { createSelector } from "reselect";

const selectBlogReducer = state => state.blogs

export const selectBlogArray = createSelector([selectBlogReducer], (blogSlices) => blogSlices.blogs)
export const selectBlog = createSelector([selectBlogReducer], (blogSlice) => blogSlice.blog)
export const selectBlogIsLoading = createSelector([selectBlogReducer], (blogSlice) => blogSlice.isLoading)
export const selectBlogError = createSelector([selectBlogReducer], (blogSlice) => blogSlice.error)