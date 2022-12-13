import {compose, legacy_createStore as createStore, applyMiddleware} from 'redux';
import {logger} from 'redux-logger';
import thunk from 'redux-thunk';
import {persistReducer, persistStore} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './root-reducer';


const middleWares = [logger, thunk]

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart']
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

const composeEnhancers = compose(applyMiddleware(...middleWares))

export const store = createStore(persistedReducer, undefined, composeEnhancers)

export const persistor = persistStore(store)