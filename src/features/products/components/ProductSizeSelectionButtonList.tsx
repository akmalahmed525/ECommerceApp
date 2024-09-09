import React, {FunctionComponent, useState} from 'react';
import {FlatList, View, StyleSheet} from 'react-native';
import {ProductSizeSelectionButton} from '@features/products/components';

interface ProductSizeSelectionButtonListProps<T extends string> {
  data: T[];
  value: T;
  onSelectValue: (value: T) => void;
}
export const ProductSizeSelectionButtonList: FunctionComponent<
  ProductSizeSelectionButtonListProps<string>
> = <T extends string>({
  data,
  value,
  onSelectValue,
}: ProductSizeSelectionButtonListProps<T>) => {
  return (
    <FlatList
      horizontal
      data={data}
      showsHorizontalScrollIndicator={false}
      renderItem={({item}) => (
        <ProductSizeSelectionButton
          selectedItem={value}
          label={item}
          onPress={() => {
            onSelectValue(item);
          }}
        />
      )}
      ItemSeparatorComponent={ItemSeparator}
      keyExtractor={item => item}
    />
  );
};

const ItemSeparator = () => <View style={styles.itemSeparator} />;

const styles = StyleSheet.create({
  itemSeparator: {
    width: 10,
  },
});
