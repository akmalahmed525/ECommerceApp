import {all, fork} from 'redux-saga/effects';

import products from '@features/products/products.saga';

export default function* rootSaga() {
  yield all([fork(products)]);
}
