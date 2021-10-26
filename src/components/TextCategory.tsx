import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import colors from '../constants/colors';

interface ITextCategory {
  name: string;
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
}

const translate = (props: ITextCategory) => ({
  name: props.name ? props.name : '',
  marginTop: props.marginTop ? props.marginTop : 0,
  marginBottom: props.marginBottom ? props.marginBottom : 0,
  marginLeft: props.marginLeft ? props.marginLeft : 0,
  marginRight: props.marginRight ? props.marginRight : 0
});

const TextCategory = (props: ITextCategory) => {
  const { name, marginTop, marginBottom, marginLeft, marginRight } =
    translate(props);

  const styles = StyleSheet.create({
    container: {
      backgroundColor: colors.colors.accent,
      paddingHorizontal: 10,
      paddingVertical: 3,
      marginTop: marginTop,
      marginBottom: marginBottom,
      marginLeft: marginLeft,
      marginRight: marginRight
    },
    text: {
      fontSize: 10,
      color: colors.light.text
    }
  });

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{name}</Text>
    </View>
  );
};

export default TextCategory;
