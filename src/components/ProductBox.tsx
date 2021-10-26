import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import colors from '../constants/colors';
import { borderRadius } from '../constants/settings';
import currencyFormat from '../utils/currencyFormat';
import { IProduct } from '../utils/types';

import AppBox from './AppBox';

interface IProductBox {
  item: IProduct;
}

const ProductBox = ({ item }: IProductBox) => {
  return (
    <AppBox boxStyle={styles.container} key={item.id}>
      <Image source={{ uri: item.image }} style={styles.image} />
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
    borderRadius: borderRadius
  },
  title: {
    flex: 1,
    fontSize: 12,
    color: colors.light.text,
    marginTop: 10
  },
  price: {
    flex: 1
  }
});
