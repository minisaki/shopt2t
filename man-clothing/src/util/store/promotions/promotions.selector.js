import { createSelector } from "reselect";

const selectPromotionReducer = state => state.promotions

export const selectPromotionArray = createSelector([selectPromotionReducer], (promotionSlice) => {
  return promotionSlice.promotions.filter( promotion => promotion.expirated === false)
})

export const selectPromotionNameArray = createSelector([selectPromotionArray], (promotions) => {
  return promotions.map(promotion => promotion.promoto_name)
})

export const selectPromotionSelected = createSelector([selectPromotionArray], (promotions) => {
  return promotions[0]
})

export const selectIsLoading = createSelector([selectPromotionReducer], (promotionSlice) => {
  return promotionSlice.isLoading
})