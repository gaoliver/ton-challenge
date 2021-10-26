import React from 'react';
import {
  Pressable,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle
} from 'react-native';
import colors from '../constants/colors';
import { borderRadius } from '../constants/settings';

interface IProps {
  boxStyle?: StyleProp<ViewStyle>;
}

const AppBox: React.FC<IProps> = ({ boxStyle, children }) => {
  return (
    <Pressable
      style={[styles.form, boxStyle]}
      onPress={() => console.warn('ok')}
    >
      {children}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  form: {
    width: '80%',
    minHeight: 235,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: borderRadius,
    backgroundColor: colors.light.boxBackground,
    elevation: 3,
    shadowOffset: {
      height: 0,
      width: 0
    },
    shadowRadius: 3,
    shadowOpacity: 0.3
  }
});

export default AppBox;
