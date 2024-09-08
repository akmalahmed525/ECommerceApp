import React from 'react';
import {ProductsScreen, ProductDetailsScreen} from '@features/products/screens';
import type {Product} from '@features/products/types/products';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export type RootStackParams = {
  Products: undefined;
  ProductDetails: Product;
};
export const RootStack = createNativeStackNavigator<RootStackParams>();
export const Root = () => (
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
    <RootStack.Screen name="Products" component={ProductsScreen} />
    <RootStack.Screen name="ProductDetails" component={ProductDetailsScreen} />
  </RootStack.Navigator>
);
