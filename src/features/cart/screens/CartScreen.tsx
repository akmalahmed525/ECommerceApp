import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {FunctionComponent, useState} from 'react';
import {FlatList, View, StyleSheet, Platform, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import type {IRootState} from '@core/store';
import type {CartItem, CartItems} from '@features/cart/types';

import {RootStackParams} from '@core/navigation';
import {useSelector} from 'react-redux';
import {
  CartListEmpty,
  CartListItem,
  CartListSeparator,
} from '@features/cart/components';
import {AppButton} from '@core/components';
import {getCurrency} from '@core/utils';

type CartScreenProps = {} & NativeStackScreenProps<RootStackParams, 'Cart'>;
export const CartScreen: FunctionComponent<CartScreenProps> = ({}) => {
  const [widgetHeight, setWidgetHeight] = useState(0);
  const cart = useSelector<IRootState, CartItems>(state => state.cart);

  const groupedBySKU = cart.reduce((acc, product) => {
    if (!acc[product.product.SKU]) {
      acc[product.product.SKU] = [];
    }
    acc[product.product.SKU].push(product);
    return acc;
  }, {} as {[key: string]: CartItem[]});

  const totalAmount = cart
    .map(({product}) => parseInt(product.price.amount))
    .reduce((amount1, amount2) => amount1 + amount2, 0);

  return (
    <View style={styles.container}>
      <FlatList
        data={Object.keys(groupedBySKU)}
        contentContainerStyle={[styles.listContentContainer, {paddingBottom: widgetHeight}]}
        keyExtractor={item => item}
        ListEmptyComponent={CartListEmpty}
        ItemSeparatorComponent={CartListSeparator}
        renderItem={({item}) => <CartListItem cartItems={groupedBySKU[item]} />}
      />
      {Object.keys(groupedBySKU).length > 0 ? (
        <View
          style={styles.bottomActionBar}
          onLayout={event => {
            const {height} = event.nativeEvent.layout;
            setWidgetHeight(height);
          }}>
          <SafeAreaView style={styles.buttonContainer} edges={['bottom']}>
            <View style={styles.priceContainer}>
              <Text style={styles.priceTotalLabel}>Total</Text>
              <Text
                style={
                  styles.priceTotalLabel
                }>{`${getCurrency(totalAmount)}`}</Text>
            </View>
            <AppButton onPress={() => {}}>Checkout</AppButton>
          </SafeAreaView>
        </View>
      ) : (
        <></>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContentContainer: {
    flexGrow: 1,
  },
  bottomActionBar: {
    zIndex: 1,
    bottom: 0,
    left: 0,
    right: 0,
    paddingTop: 10,
    paddingBottom: Platform.OS === 'android' ? 10 : 0,
    position: 'absolute',
    backgroundColor: 'white',
  },
  buttonContainer: {
    marginHorizontal: 10,
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 10,
    marginBottom: 10,
  },
  priceTotalLabel: {
    fontSize: 28,
    fontFamily: 'SUSE-Bold',
    color: '#0A0A0A',
  },
});
