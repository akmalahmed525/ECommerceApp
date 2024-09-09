import React, {FunctionComponent} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  useWindowDimensions,
  Platform,
  TouchableOpacity,
} from 'react-native';
import {Grayscale} from 'react-native-color-matrix-image-filters';
import {Product} from '@features/products/types';
import {getCurrencySymbol} from '@core/utils';

type ProductItemProps = {
  product: Product;
  onPress: (product: Product) => void;
};
export const ProductItem: FunctionComponent<ProductItemProps> = ({
  product,
  onPress,
}) => {
  const {width} = useWindowDimensions();
  const {price, stockStatus} = product;
  const textColor = stockStatus === 'IN STOCK' ? '#0A0A0A' : '#808080';
  return (
    <TouchableOpacity
      onPress={() => {
        if (stockStatus === 'IN STOCK') {
          onPress(product);
        }
      }}
      style={[styles.container, {width: width * 0.7}]}>
      <View style={styles.cardContent}>
        <View style={styles.productImageContent}>
          {stockStatus === 'IN STOCK' ? (
            <Image
              style={[styles.productImage]}
              source={{uri: product.mainImage}}
            />
          ) : (
            <Grayscale>
              <Image
                style={styles.productImage}
                source={{uri: product.mainImage}}
              />
            </Grayscale>
          )}
        </View>
        <View style={styles.textContent}>
          <Text numberOfLines={1} style={[styles.productBrand]}>
            {product.brandName ?? 'Unknown'}
          </Text>
          <Text
            numberOfLines={2}
            style={[styles.productName, {color: textColor}]}>
            {product.name}
          </Text>
          <Text
            numberOfLines={1}
            style={[styles.priceLabel, {color: textColor}]}>
            {`${getCurrencySymbol(price.currency)}${price.amount}`}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    ...(Platform.OS === 'ios'
      ? {
          shadowColor: '#0A0A0A',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
        }
      : Platform.OS === 'android'
      ? {elevation: 15}
      : {}),
  },
  cardContent: {
    overflow: 'hidden',
    borderRadius: 15,
    backgroundColor: '#F7FCFE',
    flexGrow: 1,
  },
  productImageContent: {
    padding: 10,
  },
  productImage: {
    aspectRatio: 1,
    borderRadius: 15,
  },
  textContent: {
    flexDirection: 'column',
    paddingHorizontal: 15,
    paddingBottom: 10,
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  productName: {
    fontSize: 18,
    fontFamily: 'SUSE-SemiBold',
  },
  productBrand: {
    fontSize: 14,
    fontFamily: 'SUSE-Regular',
    color: 'grey',
  },
  priceLabel: {
    fontSize: 28,
    fontFamily: 'SUSE-Bold',
  },
});
