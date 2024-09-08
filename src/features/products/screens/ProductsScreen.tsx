import React, {FunctionComponent, useEffect} from 'react';
import {SafeAreaView, FlatList, View, Text} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import {fetchProducts} from '@/features/products/products.slice';

import type {IRootState} from '@/core/store';
import type {ProductsState} from '@/features/products/types/products';

type ProductsScreenProps = {};
export const ProductsScreen: FunctionComponent<ProductsScreenProps> = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const productsState = useSelector<IRootState, ProductsState>(
    state => state.products,
  );

  const {isLoading, errorMessage, data} = productsState;

  return (
    <SafeAreaView>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : errorMessage && !data.length ? (
        <Text>{errorMessage}</Text>
      ) : (
        <FlatList
          data={data}
          renderItem={({item}) => (
            <View>
              <Text>{item.name ?? '--'}</Text>
              <Text>{item.brandName ?? '--'}</Text>
              <Text>{item.description ?? '--'}</Text>
            </View>
          )}
          keyExtractor={item => item.id}
        />
      )}
    </SafeAreaView>
  );
};
