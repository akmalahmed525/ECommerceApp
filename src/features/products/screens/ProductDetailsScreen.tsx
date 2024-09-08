import React, {FunctionComponent, useState} from 'react';
import {
  Image,
  View,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import type {NativeStackScreenProps} from '@react-navigation/native-stack';

import {RootStackParams} from '@core/navigation';
import {getCurrencySymbol} from '@core/utils';
import {ProductSizeSelectionButtonList} from '@features/products/components';

type ProductDetailsScreenProps = {} & NativeStackScreenProps<
  RootStackParams,
  'ProductDetails'
>;
export const ProductDetailsScreen: FunctionComponent<
  ProductDetailsScreenProps
> = ({route}) => {
  const [widgetHeight, setWidgetHeight] = useState(0);
  const products = route.params;
  const {brandName, name, colour, description, mainImage, price, sizes} =
    products;
  const {currency, amount} = price;

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
            onSelectValue={value => {
              console.log(value);
            }}
          />
          <Text numberOfLines={1} style={[styles.priceLabel]}>
            {`${getCurrencySymbol(currency)}${amount}`}
          </Text>
        </View>
      </ScrollView>
      <View
        style={styles.bottomActionBar}
        onLayout={event => {
          const {height} = event.nativeEvent.layout;
          setWidgetHeight(height);
        }}>
        <SafeAreaView edges={['bottom']}>
          <TouchableOpacity>
            <View style={styles.buttonContainer}>
              <Text style={styles.buttonText}>Add to cart</Text>
            </View>
          </TouchableOpacity>
        </SafeAreaView>
      </View>
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
    borderRadius: 15,
    backgroundColor: 'red',
    justifyContent: 'center',
    flexDirection: 'row',
    padding: 15,
    marginHorizontal: 10,
  },
  buttonText: {
    fontSize: 20,
    color: '#FFFFFF',
    fontFamily: 'SUSE-Bold',
  },
});
