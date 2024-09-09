import React, {FunctionComponent, useState} from 'react';
import {
  Image,
  View,
  StyleSheet,
  ScrollView,
  Text,
  Platform,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';

import type {IRootState} from '@core/store';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import type {CartItems} from '@features/cart/types';

import {RootStackParams} from '@core/navigation';
import {getCurrency} from '@core/utils';
import {ProductSizeSelectionButtonList} from '@features/products/components';
import {onAddItem, onRemoveItem} from '@features/cart/cart.slice';
import {AppButton, ProductCountButton} from '@core/components';

type ProductDetailsScreenProps = {} & NativeStackScreenProps<
  RootStackParams,
  'ProductDetails'
>;
export const ProductDetailsScreen: FunctionComponent<
  ProductDetailsScreenProps
> = ({route}) => {
  const dispatch = useDispatch();

  const [widgetHeight, setWidgetHeight] = useState(0);
  const product = route.params;
  const {SKU, brandName, name, colour, description, mainImage, price, sizes} =
    product;
  const {amount} = price;

  const [size, setSize] = useState<string>(sizes[0]);
  const cart = useSelector<IRootState, CartItems>(state => state.cart);

  const totalCount = cart.filter(({product}) => product.SKU === SKU).length;

  const isItemAlreadyInCart = totalCount > 0;

  return (
    <SafeAreaView edges={['bottom']} style={styles.container}>
      <ScrollView>
        <Image source={{uri: mainImage}} style={styles.imageContainer} />
        <View
          style={[styles.textContainer, {paddingBottom: widgetHeight * 1.1}]}>
          <Text style={styles.brandName}>{brandName ?? 'Unknown'}</Text>
          <Text style={styles.productName}>
            {name} ({colour})
          </Text>
          <Text style={styles.productDescription}>{description}</Text>
          <ProductSizeSelectionButtonList
            data={sizes}
            value={size}
            onSelectValue={value => {
              setSize(value);
            }}
          />
          <Text numberOfLines={1} style={[styles.priceLabel]}>
            {`${getCurrency(parseFloat(amount))}`}
          </Text>
        </View>
      </ScrollView>
      {isItemAlreadyInCart ? (
        <View
          style={styles.bottomActionBar}
          onLayout={event => {
            const {height} = event.nativeEvent.layout;
            setWidgetHeight(height);
          }}>
          <SafeAreaView style={styles.buttonContainer} edges={['bottom']}>
            <ProductCountButton
              count={totalCount}
              onPressAdd={() => {
                dispatch(
                  onAddItem({
                    product,
                    size,
                  }),
                );
              }}
              onPressSubtract={() => {
                dispatch(
                  onRemoveItem({
                    product,
                    size,
                  }),
                );
              }}
            />
          </SafeAreaView>
        </View>
      ) : (
        <View
          style={styles.bottomActionBar}
          onLayout={event => {
            const {height} = event.nativeEvent.layout;
            setWidgetHeight(height);
          }}>
          <SafeAreaView style={styles.buttonContainer} edges={['bottom']}>
            <AppButton
              onPress={() => {
                dispatch(
                  onAddItem({
                    product,
                    size,
                  }),
                );
              }}>
              Add to cart
            </AppButton>
          </SafeAreaView>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  imageContainer: {
    aspectRatio: 1,
  },
  brandName: {
    fontSize: 14,
    fontFamily: 'SUSE-SemiBold',
    color: '#808080',
  },
  productName: {
    fontSize: 20,
    fontFamily: 'SUSE-SemiBold',
    color: '#0A0A0A',
  },
  productDescription: {
    fontSize: 15,
    fontFamily: 'SUSE-Medium',
    color: '#808080',
  },
  priceLabel: {
    fontSize: 28,
    fontFamily: 'SUSE-Bold',
    color: '#0A0A0A',
  },
  textContainer: {
    flexDirection: 'column',
    padding: 15,
    gap: 10,
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
});
