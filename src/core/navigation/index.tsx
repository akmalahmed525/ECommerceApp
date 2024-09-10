import React from 'react';
import {useSelector} from 'react-redux';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import type {Product} from '@features/products/types';
import type {CartItems} from '@features/cart/types';

import {CartScreen} from '@features/cart/screens';
import {ProductsScreen, ProductDetailsScreen} from '@features/products/screens';
import {HeaderButton} from '@core/components';
import {IRootState} from '@core/store';

export type RootStackParams = {
  Products: undefined;
  ProductDetails: Product;
  Cart: undefined;
};
export const RootStack = createNativeStackNavigator<RootStackParams>();
export const Root = () => {
  const cart = useSelector<IRootState, CartItems>(state => state.cart);

  return (
    <RootStack.Navigator
      initialRouteName="Products"
      screenOptions={{
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontSize: 20,
          color: '#0A0A0A',
          fontFamily: 'SUSE-Bold',
        },
        headerBackTitleVisible: false,
        headerTintColor: '#FF0000',
      }}>
      <RootStack.Screen
        name="Products"
        component={ProductsScreen}
        options={({navigation}) => ({
          headerRight: () => (
            <HeaderButton
              showIndicator={cart.length > 0}
              onPress={() => navigation.navigate('Cart')}
            />
          ),
        })}
      />
      <RootStack.Screen
        name="ProductDetails"
        component={ProductDetailsScreen}
        options={({navigation}) => ({
          title: 'Product Details',
          headerRight: () => (
            <HeaderButton
              showIndicator={cart.length > 0}
              onPress={() => navigation.navigate('Cart')}
            />
          ),
        })}
      />
      <RootStack.Screen name="Cart" component={CartScreen} />
    </RootStack.Navigator>
  );
};
