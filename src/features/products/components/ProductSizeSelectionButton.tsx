import React, {FunctionComponent} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
} from 'react-native';

type ProductSizeSelectionButtonProps = {
  label: string;
  selectedItem: string | null;
} & TouchableOpacityProps;
export const ProductSizeSelectionButton: FunctionComponent<
  ProductSizeSelectionButtonProps
> = ({label, selectedItem, ...props}) => (
  <TouchableOpacity
    style={
      selectedItem === label
        ? styles.selectedContainer
        : styles.unselectedContainer
    }
    {...props}>
    <Text
      style={
        selectedItem === label ? styles.selectedText : styles.unselectedText
      }>
      {label}
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  selectedContainer: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    backgroundColor: '#FF0000',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'SUSE-Bold',
  },
  unselectedContainer: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    backgroundColor: '#FFFFFF',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#FF0000',
  },
  unselectedText: {
    color: '#0A0A0A',
    fontSize: 16,
    fontFamily: 'SUSE-Bold',
  },
});
