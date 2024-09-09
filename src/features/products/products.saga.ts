import {call, put, takeEvery} from 'redux-saga/effects';
import {AxiosResponse, isAxiosError} from 'axios';

import API from '@core/api';
import {
  onProductsRequestFailure,
  onProductsRequestSuccess,
} from '@features/products/products.slice';
import type {ProductsResponse} from '@features/products/types';

function* fetchProductsAsync() {
  try {
    const productsResponse: AxiosResponse<ProductsResponse> = yield call(() =>
      API.get(),
    );
    const {data} = productsResponse.data;
    yield put(onProductsRequestSuccess(data));
  } catch (error) {
    if (isAxiosError(error)) {
      yield put(onProductsRequestFailure(error.message));
      return;
    }
    yield put(onProductsRequestFailure('Unknown Error'));
  }
}

export default function* () {
  yield takeEvery('products/fetchProducts', fetchProductsAsync);
}
