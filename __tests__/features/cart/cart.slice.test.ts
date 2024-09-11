import cartReducer, {
  onAddItem,
  onRemoveItem,
  onRemoveSpecificItem,
} from '@features/cart/cart.slice';
import {CartItem} from '@features/cart/types';

describe('Cart slice reducer', () => {
  it('should handle initial state', () => {
    expect(cartReducer(undefined, {type: ''})).toEqual([]);
  });

  it('Should add an item to the cart', () => {
    const sampleCartItem: CartItem = {
      product: {
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
      size: '8',
    };
    expect(cartReducer([], onAddItem(sampleCartItem))).toEqual([
      sampleCartItem,
    ]);
  });

  it('Should remove an item from the cart', () => {
    const initialCartState: CartItem[] = [
      {
        product: {
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
        size: '8',
      },
      {
        product: {
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
        size: '9',
      },
      {
        product: {
          id: '3',
          SKU: '1243',
          name: 'PUMA Soleil v2',
          brandName: null,
          mainImage:
            'https://s3-eu-west-1.amazonaws.com/api.themeshplatform.com/media/ce1fbd10feb64bd39816d03a45fa5346_35892701_fr_puma_sc7.jpeg',
          price: {
            amount: '40.00',
            currency: 'GBP',
          },
          sizes: ['8', '9', '10', '11'],
          stockStatus: 'IN STOCK',
          colour: 'black',
          description:
            'Simple and clean, the Soleil v2 exhibits iconic PUMA heritage.Synthetic upper with french piping embellishment and bold ghilles.Rubber outsole supplies durability and traction.',
        },
        size: '11',
      },
    ];

    const [firstCartItem, ...restOfCartItems] = initialCartState;
    expect(cartReducer(initialCartState, onRemoveItem(firstCartItem))).toEqual([
      ...restOfCartItems,
    ]);
  });

  it('Should remove a specific item from the cart', () => {
    const initialCartState: CartItem[] = [
      {
        product: {
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
        size: '8',
      },
      {
        product: {
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
        size: '9',
      },
      {
        product: {
          id: '3',
          SKU: '1243',
          name: 'PUMA Soleil v2',
          brandName: null,
          mainImage:
            'https://s3-eu-west-1.amazonaws.com/api.themeshplatform.com/media/ce1fbd10feb64bd39816d03a45fa5346_35892701_fr_puma_sc7.jpeg',
          price: {
            amount: '40.00',
            currency: 'GBP',
          },
          sizes: ['8', '9', '10', '11'],
          stockStatus: 'IN STOCK',
          colour: 'black',
          description:
            'Simple and clean, the Soleil v2 exhibits iconic PUMA heritage.Synthetic upper with french piping embellishment and bold ghilles.Rubber outsole supplies durability and traction.',
        },
        size: '11',
      },
    ];

    expect(
      cartReducer(
        initialCartState,
        onRemoveSpecificItem({
          product: {
            id: '3',
            SKU: '1243',
            name: 'PUMA Soleil v2',
            brandName: null,
            mainImage:
              'https://s3-eu-west-1.amazonaws.com/api.themeshplatform.com/media/ce1fbd10feb64bd39816d03a45fa5346_35892701_fr_puma_sc7.jpeg',
            price: {
              amount: '40.00',
              currency: 'GBP',
            },
            sizes: ['8', '9', '10', '11'],
            stockStatus: 'IN STOCK',
            colour: 'black',
            description:
              'Simple and clean, the Soleil v2 exhibits iconic PUMA heritage.Synthetic upper with french piping embellishment and bold ghilles.Rubber outsole supplies durability and traction.',
          },
          size: '11',
        }),
      ),
    ).toEqual([
      {
        product: {
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
        size: '8',
      },
      {
        product: {
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
        size: '9',
      },
    ]);
  });
});
