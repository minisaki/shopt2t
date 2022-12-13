import { createSelector } from "reselect"

const selectProductsReducer = state => {
  return state.products
}

export const selectProductMap = createSelector([selectProductsReducer], (productsSlice) => {
  return productsSlice.products
})

export const selectProductDetail = createSelector([selectProductsReducer], (productsSlice) => {
  return productsSlice.product
})

export const selectProductItem = createSelector([selectProductDetail], (productsDetail) => {
  console.log(productsDetail.product)
  return productsDetail.product
})

export const selectProductColor = createSelector([selectProductDetail], (productsDetail) => {
  console.log(productsDetail.color)
  return productsDetail.color
})

export const selectProductSize = createSelector([selectProductDetail], (productsDetail) => {
  console.log(productsDetail.size)
  return productsDetail.size
})

export const selectProductResult = createSelector([selectProductMap], (productMap) => {
  return productMap.results
})

export const selectProductResultDiscount = createSelector([selectProductResult], (products) => {  
  return products?.filter( product => product.discount)
})



export const selectProducts = createSelector([selectProductMap], (productMap) => {
  return productMap.results
})

export const selectPageCurrent= createSelector([selectProductMap], (productMap) => {
  return productMap.current
})
export const selectPagePrev= createSelector([selectProductMap], (productMap) => {
  return productMap.previous
})

export const selectPageNext= createSelector([selectProductMap], (productMap) => {
  return productMap.next
})
export const selectPageTotal= createSelector([selectProductMap], (productMap) => {
  return productMap.total
})

export const selectPageTCount= createSelector([selectProductMap], (productMap) => {
  return productMap.count
})


export const selectIsLoading = createSelector([selectProductsReducer], (productsSlice) => productsSlice.isLoading )