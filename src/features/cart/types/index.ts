import type {Product} from '@features/products/types';

export type CartItem = {
  product: Product;
  size: string;
};

export type CartItems = CartItem[];
