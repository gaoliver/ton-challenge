import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import colors from '../constants/colors';
import { borderRadius } from '../constants/settings';

interface IButtonProps {
  text: string;
  onPress?: () => void;
  fontSize?: number;
  paddingHorizontal?: number;
  paddingVertical?: number;
  color?: string;
}

const translate = (props: IButtonProps) => ({
  text: props.text ? props.text : '',
  color: props.color ? props.color : colors.colors.primary,
  fontSize: props.fontSize ? props.fontSize : 20,
  paddingHorizontal: props.paddingHorizontal ? props.paddingHorizontal : 30,
  paddingVertical: props.paddingVertical ? props.paddingVertical : 20,
  onPress: props.onPress ? props.onPress : () => {}
});

const PrimaryButton = (props: IButtonProps) => {
  const { text, onPress, fontSize, paddingHorizontal, paddingVertical, color } =
    translate(props);

  const styles = StyleSheet.create({
    buttonContainer: {
      paddingVertical: paddingVertical,
      paddingHorizontal: paddingHorizontal,
      backgroundColor: color,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: borderRadius
    },
    buttonText: {
      fontSize: fontSize,
      fontWeight: 'bold',
      color: colors.light.accentText
    }
  });

  return (
    <TouchableOpacity
      style={styles.buttonContainer}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default PrimaryButton;
