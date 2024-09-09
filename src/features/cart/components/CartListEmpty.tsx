import React from 'react';
import {StyleSheet, Text, View, useWindowDimensions} from 'react-native';
import GiftRed from '@assets/svgs/gift-2-line-red.svg';

export const CartListEmpty = () => {
  const {width} = useWindowDimensions();

  return (
    <View style={styles.container}>
      <GiftRed height={width * .4} width={width * .4} />
      <Text style={styles.emptyListLabel}>Your cart is empty!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyListLabel: {
    fontSize: 25,
    fontFamily: 'SUSE-SemiBold',
    color: '#808080',
  }
});
