import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import colors from '../constants/colors';
import { borderRadius } from '../constants/settings';
import currencyFormat from '../utils/currencyFormat';
import { IProduct } from '../utils/types';

import AppBox from './AppBox';
import TextCategory from './TextCategory';

interface IProductBox {
  item: IProduct;
  onProductPress?: () => void;
}

const ProductBox = ({ item, onProductPress }: IProductBox) => {
  return (
    <AppBox boxStyle={styles.container} key={item.id} onPress={onProductPress}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <TextCategory name={item.category} />
      <Text style={styles.title} numberOfLines={3}>
        {item.title}
      </Text>
      <Text style={styles.price}>{currencyFormat(item.price)}</Text>
    </AppBox>
  );
};

export default ProductBox;

const styles = StyleSheet.create({
  container: {
    width: '49%',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  image: {
    width: '100%',
    height: 130,
    borderRadius: borderRadius,
    marginBottom: 10,
  },
  title: {
    flex: 1,
    marginVertical: 10,
    fontSize: 12,
    color: colors.light.text
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.light.text
  }
});
