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

interface IBoxProps {
  boxStyle?: StyleProp<ViewStyle>;
  onPress?: () => void;
}

const translate = (props: IBoxProps) => ({
  boxStyle: props.boxStyle && props.boxStyle,
  onPress: props.onPress ? props.onPress : () => {}
});

const AppBox: React.FC<IBoxProps> = (props) => {
  const {boxStyle, onPress} = translate(props)

  return (
    <Pressable
      style={[styles.form, boxStyle]}
      onPress={onPress}
    >
      {props.children}
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
