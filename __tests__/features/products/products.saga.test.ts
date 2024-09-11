import productsSaga, {
  fetchProductsAsync,
} from '@features/products/products.saga';
import { takeEvery } from 'redux-saga/effects';

describe('Products Saga', () => {
  const genObject = productsSaga();

  it('should fetch the products', async () => {
    expect(genObject.next().value)
      .toEqual(takeEvery('products/fetchProducts', fetchProductsAsync));
  });

  it('should be done in the next iteration', () => {
    expect(genObject.next().done).toBeTruthy();
  });
});
