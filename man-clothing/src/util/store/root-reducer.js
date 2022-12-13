import {combineReducers} from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import storageSession from 'redux-persist/lib/storage/session';
import { categoriesReducer } from './categories/categories.reducer';
import { productsReducer } from './products/product.reducer';
import { promotionsReducer } from './promotions/promotions.reducer';
import { blogReducer } from './blog/blog.reducer';
import { priceReducer } from './price/price.reducer';
import { sizeReducer } from './size/size.reducer';
import { colorReducer } from './color/color.reducer';
import { cartReducer } from './cart/cart.reducer';
import { couponReducer } from './coupon/coupon.reducer';
import { profileReducer } from './profile/profile.reducer';
import { orderReducer } from './order/order.reducer';

const authPersistConfig = {
  key: 'client',
  storage: storage,
  whitelist: ['id', 'isProfile']
}

const couponPersistConfig = {
  key: 'coupon',
  storage: storageSession
}
// const cartPersistConfig = {
//   key: 'cart',
//   storage: storage,
//   blacklist: ['coupon']
// }

export const rootReducer = combineReducers({
  categories: categoriesReducer,
  products: productsReducer,
  promotions: promotionsReducer,
  blogs: blogReducer,
  collectPrices: priceReducer,
  sizes: sizeReducer,
  colors: colorReducer,
  cart:  cartReducer,
  coupon: persistReducer(couponPersistConfig, couponReducer),
  client: persistReducer(authPersistConfig, profileReducer),
  order: orderReducer
})

export default rootReducer;