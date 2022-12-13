import { createSelector } from "reselect";

const orderReducer = state => state.order

export const selectOredrIsLoading = createSelector([orderReducer], (orderSlice) => orderSlice.isLoading)
export const selectOredrError = createSelector([orderReducer], (orderSlice) => orderSlice.error)
export const selectCreateOrderSuccess = createSelector([orderReducer], (orderSlice) => orderSlice.success)
// export const selectIsProfile = createSelector([profileReducer], (profileSlice) => profileSlice.isProfile)
// export const selectProfile = createSelector([profileReducer], (profileSlice) => profileSlice.profile)