import {createStore,combineReducers,applyMiddleware} from 'redux';
import languageReducer from './language/languageReducer'
import ProductsReducer from './products/ProductsReducer';
import thunk from 'redux-thunk'
const rootReducer=combineReducers({
   language: languageReducer,
   products: ProductsReducer
})
const store=createStore(rootReducer,applyMiddleware(thunk));

export type RootState = ReturnType<typeof store.getState>
export default store;