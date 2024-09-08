import {createSlice} from '@reduxjs/toolkit';

import type {ProductsState} from '@features/products/types/products';

const initialState: ProductsState = {
  data: [],
  isLoading: false,
  errorMessage: null,
};

export const productSlice = createSlice({
  name: 'products',
  initialState: initialState,
  reducers: {
    fetchProducts: state => {
      state.isLoading = true;
    },
    onProductsRequestSuccess: (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
    },
    onProductsRequestFailure: (state, action) => {
      state.data = [];
      state.isLoading = false;
      state.errorMessage = action.payload;
    },
  },
});

export const {
  fetchProducts,
  onProductsRequestSuccess,
  onProductsRequestFailure,
} = productSlice.actions;

export default productSlice.reducer;
