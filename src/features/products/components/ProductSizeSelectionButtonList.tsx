import React, {FunctionComponent, useState} from 'react';
import {FlatList, View, StyleSheet} from 'react-native';
import {ProductSizeSelectionButton} from '@features/products/components';

interface ProductSizeSelectionButtonListProps<T extends string> {
  data: T[];
  onSelectValue: (value: T) => void;
}
export const ProductSizeSelectionButtonList: FunctionComponent<
  ProductSizeSelectionButtonListProps<string>
> = <T extends string>({data, onSelectValue}: ProductSizeSelectionButtonListProps<T>) => {
  const [value, setValue] = useState<T | null>(data.length ? data[0] : null);
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
            setValue(item);
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
