import { createSelector } from "reselect"

const selectSizeReducer = state => {
  return state.sizes
}

export const selectSizes = createSelector([selectSizeReducer], (sizeSlice) => {
  return sizeSlice.size
})

export const selectSizeIsLoading = createSelector([selectSizeReducer], (sizeSlice) => sizeSlice.isLoading )