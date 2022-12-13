import { createSelector } from "reselect";

const profileReducer = state => state.client

export const selectProfileId = createSelector([profileReducer], (profileSlice) => profileSlice.id)
export const selectIsProfile = createSelector([profileReducer], (profileSlice) => profileSlice.isProfile)
export const selectProfile = createSelector([profileReducer], (profileSlice) => profileSlice.profile)