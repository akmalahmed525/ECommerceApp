import React, {FunctionComponent, ReactNode} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  GestureResponderEvent,
} from 'react-native';

type AppButtonProps = {
  onPress: (event: GestureResponderEvent) => void;
} & {children: ReactNode};
export const AppButton: FunctionComponent<AppButtonProps> = ({
  onPress,
  children,
}) => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.container}>
      <Text style={styles.buttonText}>{children}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    padding: 15,
    borderRadius: 15,
    flexDirection: 'row',
    backgroundColor: '#FF0000',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 20,
    color: '#FFFFFF',
    fontFamily: 'SUSE-Bold',
  },
});
