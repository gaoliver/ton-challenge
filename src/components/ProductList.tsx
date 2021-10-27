import React from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';

import colors from '../constants/colors';
import currencyFormat from '../utils/currencyFormat';
import { IProduct } from '../utils/types';
import products from '../__mocks__/products';

import AppBox from './AppBox';
import PrimaryButton from './PrimaryButton';

interface IProductList {
  item: IProduct;
}

const ProductList = ({ item }: IProductList) => {
  const translate = {
    image: item.image ? item.image : '',
    title: item.title ? item.title : '',
    description: item.description ? item.description : '',
    price: item.price ? currencyFormat(item.price) : ''
  };

  return (
    <AppBox boxStyle={styles.container}>
      <Image source={{ uri: translate.image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.title}>{translate.title}</Text>
        <Text style={styles.description} numberOfLines={3}>
          {translate.description}
        </Text>
        <View style={styles.infoBottom}>
          <Text style={styles.price}>{translate.price}</Text>
          <PrimaryButton
            text="Remover"
            fontSize={11}
            paddingHorizontal={15}
            paddingVertical={8}
            color={colors.colors.error}
          />
        </View>
      </View>
    </AppBox>
  );
};

export default ProductList;

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'flex-start',
    minHeight: 180
  },
  image: {
    width: '40%',
    height: '100%',
    resizeMode: 'contain'
  },
  info: {
    flex: 1,
    justifyContent: 'space-between',
    paddingVertical: 15,
    marginLeft: 10
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.light.text
  },
  description: {
    flex: 1,
    marginVertical: 10,
    fontSize: 11,
    color: colors.colors.grey
  },
  infoBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.colors.price
  }
});
