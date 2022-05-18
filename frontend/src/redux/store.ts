import {createStore,combineReducers} from 'redux';
import languageReducer from './language/languageReducer'
import ProductsReducer from './products/ProductsReducer';

const rootReducer=combineReducers({
   language: languageReducer,
   products: ProductsReducer
})
const store=createStore(rootReducer);

export type RootState = ReturnType<typeof store.getState>
export default store;