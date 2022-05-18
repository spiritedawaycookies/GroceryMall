import {createStore,combineReducers} from 'redux';
import languageReducer from './language/languageReducer'
import recommendProductsReducer from './recommendProducts/recommendProductsReducer';

const store=createStore(languageReducer);
const rootReducer=combineReducers({languageReducer,recommendProductsReducer})

export type RootState = ReturnType<typeof store.getState>
export default store;