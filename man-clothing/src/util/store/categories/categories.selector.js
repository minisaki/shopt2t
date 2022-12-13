import { createSelector } from "reselect";

const selectCategoryReducer = state => {
  return state.categories
}

export const selectCategories = createSelector([selectCategoryReducer], (categoriesSlice) => categoriesSlice.categories)
export const selectIsLoading = createSelector([selectCategoryReducer], (categoriesSlice) => categoriesSlice.isLoading)
export const selectCategory = createSelector([selectCategoryReducer], (categoriesSlice) => categoriesSlice.category)
