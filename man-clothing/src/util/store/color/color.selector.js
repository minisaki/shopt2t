import { createSelector } from "reselect"

const selectColorReducer = state => {
  return state.colors
}

export const selectColors = createSelector([selectColorReducer], (colorSlice) => {
  return colorSlice.colors
})

export const selectColorIsLoading = createSelector([selectColorReducer], (colorSlice) => colorSlice.isLoading )