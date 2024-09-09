import React, {FunctionComponent} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {useDispatch} from 'react-redux';

import type {CartItem} from '@features/cart/types';
import type {Product} from '@features/products/types';

import {ProductCountButton} from '@core/components';
import {onAddItem, onRemoveSpecificItem} from '@features/cart/cart.slice';
import {getCurrency} from '@core/utils';

type CartListItemProps = {
  cartItems: CartItem[];
};
export const CartListItem: FunctionComponent<CartListItemProps> = ({
  cartItems,
}) => {
  const dispatch = useDispatch();
  const cartItem = cartItems.map(({product}) => product)[0];

  const sortedCartItems = cartItems.sort(
    (a, b) => parseInt(a.size) - parseInt(b.size),
  );

  const groupedBySize = sortedCartItems.reduce((acc, {product, size}) => {
    if (!acc[size]) {
      acc[size] = [];
    }
    acc[size].push(product);
    return acc;
  }, {} as {[key: string]: Product[]});

  return (
    <View style={styles.container}>
      <View style={styles.productContent}>
        <Image source={{uri: cartItem.mainImage}} style={styles.productImage} />
        <View style={styles.imageContentSeparator} />
        <View style={styles.productDescriptionContainer}>
          <Text
            numberOfLines={2}
            ellipsizeMode="tail"
            style={styles.productName}>
            {cartItem.name}
          </Text>
          <Text style={styles.productBrand}>
            Brand: {cartItem.brandName ?? 'Unknown'}
          </Text>
          <Text numberOfLines={1} style={styles.priceLabel}>
            {`${getCurrency(
              parseFloat(cartItem.price.amount) * cartItems.length,
            )}`}
          </Text>
          {Object.keys(groupedBySize)
            .sort((a, b) => parseInt(a) - parseInt(b))
            .map((sizeKey, key) => (
              <View key={`id-${key}`} style={styles.sizeInfoListItem}>
                <Text style={styles.productSize}>Size: {sizeKey}</Text>
                <ProductCountButton
                  count={groupedBySize[sizeKey].length}
                  variant="normal"
                  onPressAdd={() => {
                    dispatch(
                      onAddItem({
                        product: cartItem,
                        size: sizeKey,
                      }),
                    );
                  }}
                  onPressSubtract={() => {
                    dispatch(
                      onRemoveSpecificItem({
                        product: cartItem,
                        size: sizeKey,
                      }),
                    );
                  }}
                />
              </View>
            ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    padding: 15,
  },
  productContent: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    overflow: 'hidden',
  },
  productImage: {
    aspectRatio: 1,
    width: 50,
  },
  imageContentSeparator: {
    width: 15,
  },
  productDescriptionContainer: {
    flexDirection: 'column',
    flex: 1,
    gap: 5,
  },
  productName: {
    fontSize: 18,
    fontFamily: 'SUSE-Bold',
    color: '#0A0A0A',
  },
  productBrand: {
    fontSize: 12,
    fontFamily: 'SUSE-Medium',
    color: '#808080',
  },
  productSize: {
    fontSize: 14,
    fontFamily: 'SUSE-Medium',
    color: '#0A0A0A',
  },
  sizeInfoListItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  priceLabel: {
    fontSize: 28,
    fontFamily: 'SUSE-Bold',
  },
});
