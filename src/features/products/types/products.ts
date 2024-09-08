export type ProductPrice = {
  amount: string;
  currency: string;
};

export type ProductSizes = Array<string>;

export type Product = {
  id: string;
  SKU: string;
  name: string;
  brandName: string | null | undefined;
  mainImage: string;
  price: ProductPrice;
  sizes: ProductSizes;
  stockStatus: string;
  colour: string;
  description: string;
};

export type ProductsResponse = {
  result: string;
  data: Array<Product>;
};

export type ProductsState = {
  data: Product[];
  isLoading: boolean;
  errorMessage: string | null | undefined;
};
