import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {FunctionComponent} from 'react';
import {FlatList, View, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import type {IRootState} from '@core/store';
import type {CartItem, CartItems} from '@features/cart/types';

import {RootStackParams} from '@core/navigation';
import {useSelector} from 'react-redux';
import {CartListEmpty, CartListItem} from '@features/cart/components';

type CartScreenProps = {} & NativeStackScreenProps<RootStackParams, 'Cart'>;
export const CartScreen: FunctionComponent<CartScreenProps> = ({}) => {
  const cart = useSelector<IRootState, CartItems>(state => state.cart);

  const groupedBySKU = cart.reduce((acc, product) => {
    if (!acc[product.product.SKU]) {
      acc[product.product.SKU] = [];
    }
    acc[product.product.SKU].push(product);
    return acc;
  }, {} as {[key: string]: CartItem[]});

  return (
    <FlatList
      data={Object.keys(groupedBySKU)}
      contentContainerStyle={styles.listContentcontainer}
      keyExtractor={item => item}
      ListEmptyComponent={CartListEmpty}
      renderItem={({item}) => <CartListItem cartItems={groupedBySKU[item]} />}
    />
  );
};

const styles = StyleSheet.create({
  listContentcontainer: {
    flexGrow: 1,
  },
});
