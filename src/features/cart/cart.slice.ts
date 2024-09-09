import {PayloadAction, createSlice} from '@reduxjs/toolkit';

import type {CartItem, CartItems} from '@features/cart/types';

const initialState: CartItems = [];

export const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    onAddItem: (state, action: PayloadAction<CartItem>) => {
      state.push(action.payload);
    },
    onRemoveItem: (state, action: PayloadAction<CartItem>) => {
      const cartItem = action.payload;
      const index = state.findIndex(
        ({product}) => product.SKU === cartItem.product.SKU,
      );

      if (index !== -1) {
        state.splice(index, 1);
      }
    },
    onRemoveSpecificItem: (state, action: PayloadAction<CartItem>) => {
      const cartItem = action.payload;
      const index = state.findIndex(
        ({product, size}) =>
          product.SKU === cartItem.product.SKU && size === cartItem.size,
      );

      if (index !== -1) {
        state.splice(index, 1);
      }
    },
  },
});

export const {onAddItem, onRemoveItem, onRemoveSpecificItem} =
  cartSlice.actions;

export default cartSlice.reducer;
