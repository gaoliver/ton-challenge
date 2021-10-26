import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import colors from '../constants/colors';
import { borderRadius } from '../constants/settings';

interface IButtonProps {
  text: string;
  onPress?: () => void;
}

const translate = (props: IButtonProps) => ({
  text: props.text ? props.text : '',
  onPress: props.onPress ? props.onPress : () => {}
});

const PrimaryButton = (props: IButtonProps) => {
  const { text, onPress } = translate(props);

  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={onPress} activeOpacity={0.7}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonContainer: {
    paddingVertical: 20,
    paddingHorizontal: 30,
    backgroundColor: colors.colors.primary,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: borderRadius
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.light.accentText
  }
});
