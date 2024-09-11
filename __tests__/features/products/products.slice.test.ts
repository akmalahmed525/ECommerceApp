import productsReducer, {
  fetchProducts,
  onProductsRequestFailure,
  onProductsRequestSuccess,
} from '@features/products/products.slice';
import {ProductsState} from '@features/products/types';

describe('Products slice', () => {
  it('should handle initial state', () => {
    const initialState: ProductsState = {
      data: [],
      isLoading: false,
      errorMessage: null,
    };
    expect(productsReducer(undefined, {type: ''})).toEqual(initialState);
  });

  it('should set the state to loading', () => {
    const initialState: ProductsState = {
      data: [],
      isLoading: false,
      errorMessage: null,
    };
    expect(productsReducer(initialState, fetchProducts())).toEqual({
      ...initialState,
      isLoading: true,
    });
  });

  it('should populate the products if the request is successful', () => {
    const updatedState: ProductsState = {
      data: [],
      isLoading: true,
      errorMessage: null,
    };

    const fetchedData = [
      {
        id: '1',
        SKU: '1210',
        name: 'Nike Air Relentless 4 Mens Running Shoes',
        brandName: 'Nike',
        mainImage:
          'https://s3-eu-west-1.amazonaws.com/api.themeshplatform.com/media/7e386191b2ee40b290886a05d3e10e24_nike-air-relentless-a.jpg',
        price: {
          amount: '45.00',
          currency: 'GBP',
        },
        sizes: ['8', '9', '10', '11'],
        stockStatus: 'IN STOCK',
        colour: 'blue',
        description:
          'Hit the tracks in these Nike Air Relentless 4 featuring flexible forefoot sole and Reslon midsole underfoot cushioning for superior comfort at each step. The ridged outsole ensures excellent traction while the cushioned ankle collar and the anatomically shaped insole guarantee great support for the whole foot. The mesh upper panels provide breathability and airflow within the shoe.',
      },
    ];
    expect(
      productsReducer(
        updatedState,
        onProductsRequestSuccess(fetchedData),
      ),
    ).toEqual({
      ...updatedState,
      data: fetchedData,
      isLoading: false,
    });
  });

  it('should set the error message if the request fails', () => {
    const updatedState: ProductsState = {
      data: [{
        id: '1',
        SKU: '1210',
        name: 'Nike Air Relentless 4 Mens Running Shoes',
        brandName: 'Nike',
        mainImage:
          'https://s3-eu-west-1.amazonaws.com/api.themeshplatform.com/media/7e386191b2ee40b290886a05d3e10e24_nike-air-relentless-a.jpg',
        price: {
          amount: '45.00',
          currency: 'GBP',
        },
        sizes: ['8', '9', '10', '11'],
        stockStatus: 'IN STOCK',
        colour: 'blue',
        description:
          'Hit the tracks in these Nike Air Relentless 4 featuring flexible forefoot sole and Reslon midsole underfoot cushioning for superior comfort at each step. The ridged outsole ensures excellent traction while the cushioned ankle collar and the anatomically shaped insole guarantee great support for the whole foot. The mesh upper panels provide breathability and airflow within the shoe.',
      }],
      isLoading: false,
      errorMessage: null,
    };

    
    expect(
      productsReducer(
        updatedState,
        onProductsRequestFailure('Error Occurred'),
      ),
    ).toEqual({
      ...updatedState,
      data: [],
      errorMessage: 'Error Occurred'
    });
  });
});
