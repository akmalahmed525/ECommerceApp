import React, {FunctionComponent} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';
import CartBlack from '@assets/svgs/shopping-cart-line-black.svg';

type ButtonType = 'cart';

type HeaderButtonProps = {
  showIndicator?: boolean;
  buttonType?: ButtonType;
} & TouchableOpacityProps;
export const HeaderButton: FunctionComponent<HeaderButtonProps> = ({
  buttonType = 'cart',
  showIndicator = false,
  ...props
}) => {
  return (
    <TouchableOpacity {...props}>
      <Icon buttonType={buttonType} />
      {showIndicator && <View style={styles.indicator} />}
    </TouchableOpacity>
  );
};

const Icon: FunctionComponent<{buttonType: ButtonType}> = ({buttonType}) => {
  switch (buttonType) {
    default:
      return <CartBlack width={25} height={25} />;
  }
};

const styles = StyleSheet.create({
  indicator: {
    width: 10,
    height: 10,
    borderRadius: 10 / 2,
    backgroundColor: '#FF0000',
    position: 'absolute',
    right: -5,
    zIndex: 1,
    top: -5,
  },
});
