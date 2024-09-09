import React, {FunctionComponent, useEffect} from 'react';
import {
  SafeAreaView,
  ActivityIndicator,
  FlatList,
  Text,
  StyleSheet,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import type {NativeStackScreenProps} from '@react-navigation/native-stack';

import {fetchProducts} from '@features/products/products.slice';

import type {IRootState} from '@core/store';
import type {ProductsState} from '@features/products/types';
import {ProductItem, ProductItemSeparator} from '@features/products/components';
import {RootStackParams} from '@core/navigation';

type ProductsScreenProps = {} & NativeStackScreenProps<
  RootStackParams,
  'Products'
>;
export const ProductsScreen: FunctionComponent<ProductsScreenProps> = ({navigation}) => {
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
        <ActivityIndicator />
      ) : errorMessage && !data.length ? (
        <Text>{errorMessage}</Text>
      ) : (
        <FlatList
          horizontal
          data={data}
          contentContainerStyle={styles.listContentContainer}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => (
            <ProductItem
              key={item.id}
              product={item}
              onPress={value => {
                navigation.navigate('ProductDetails', value);
              }}
            />
          )}
          ItemSeparatorComponent={ProductItemSeparator}
          keyExtractor={item => item.id}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    height: 50,
  },
  listContentContainer: {
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
});
