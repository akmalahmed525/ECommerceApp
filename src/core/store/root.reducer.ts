import {combineReducers} from 'redux';

import productsReducer from '@features/products/products.slice';

const rootReducer = combineReducers({
  products: productsReducer,
});

export default rootReducer;
