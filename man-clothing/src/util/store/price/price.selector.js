import { createSelector } from "reselect"

const selectPriceReducer = state => {
  return state.collectPrices
}

export const selectCollectPrice = createSelector([selectPriceReducer], (priceSlice) => {
  return priceSlice.collectPrice
})

export const selectPriceIsLoading = createSelector([selectPriceReducer], (priceSlice) => priceSlice.isLoading )