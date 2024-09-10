import React, {FunctionComponent} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  GestureResponderEvent,
  Text,
} from 'react-native';

import AddWhite from '@assets/svgs/add-line-white.svg';
import SubtractWhite from '@assets/svgs/subtract-line-white.svg';
import DeleteBinWhite from '@assets/svgs/delete-bin-line-white.svg';

type ProductCountButtonProps = {
  count: number;
  onPressAdd: (event: GestureResponderEvent) => void;
  onPressSubtract: (event: GestureResponderEvent) => void;
  variant?: 'large' | 'normal';
};
export const ProductCountButton: FunctionComponent<ProductCountButtonProps> = ({
  count,
  variant = 'large',
  onPressAdd,
  onPressSubtract,
}) =>
  variant === 'large' ? (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPressSubtract}>
        <View style={styles.actionButtonContainerLarge}>
          {count === 1 ? (
            <DeleteBinWhite height={20} width={20} />
          ) : (
            <SubtractWhite height={20} width={20} />
          )}
        </View>
      </TouchableOpacity>
      <View style={styles.itemCountContainer}>
        <Text style={styles.itemCountTextLarge}>{count}</Text>
      </View>
      <TouchableOpacity onPress={onPressAdd}>
        <View style={styles.actionButtonContainerLarge}>
          <AddWhite height={20} width={20} />
        </View>
      </TouchableOpacity>
    </View>
  ) : (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPressSubtract}>
        <View style={styles.actionButtonContainerNormal}>
          {count === 1 ? (
            <DeleteBinWhite height={15} width={15} />
          ) : (
            <SubtractWhite height={15} width={15} />
          )}
        </View>
      </TouchableOpacity>
      <View style={styles.itemCountContainer}>
        <Text style={styles.itemCountTextNormal}>{count}</Text>
      </View>
      <TouchableOpacity onPress={onPressAdd}>
        <View style={styles.actionButtonContainerNormal}>
          <AddWhite height={15} width={15} />
        </View>
      </TouchableOpacity>
    </View>
  );

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionButtonContainerLarge: {
    padding: 15,
    backgroundColor: '#FF0000',
    borderRadius: 15,
  },
  actionButtonContainerNormal: {
    padding: 10,
    backgroundColor: '#FF0000',
    borderRadius: 15,
  },
  itemCountContainer: {
    paddingHorizontal: 15,
  },
  itemCountTextLarge: {
    fontSize: 30,
    fontFamily: 'SUSE-Bold',
    color: '#0A0A0A',
  },
  itemCountTextNormal: {
    fontSize: 15,
    fontFamily: 'SUSE-Bold',
    color: '#0A0A0A',
  },
});
