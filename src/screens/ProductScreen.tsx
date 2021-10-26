import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import AppContent from '../components/AppContent';
import TextCategory from '../components/TextCategory';
import colors from '../constants/colors';
import { borderRadius } from '../constants/settings';
import currencyFormat from '../utils/currencyFormat';
import { NavigationParamsProp } from '../utils/types';
import products from '../__mocks__/products';

const ProductScreen = ({ route, navigation }: NavigationParamsProp) => {
  const { productId } = route.params;
  const product = products.find((prod) => prod.id === productId);

  const translate = {
    image: product?.image ? product.image : undefined,
    category: product?.category ? product.category : '',
    title: product?.title ? product.title : '',
    description: product?.description ? product.description : '',
    price: product?.price ? product.price : 0
  };

  return (
    <AppContent>
      <Image source={{ uri: translate.image }} style={styles.image} />
      <View style={{ flexDirection: 'row', marginTop: 20 }}>
        <TextCategory name={translate.category} />
      </View>
      <Text style={styles.title}>{product?.title}</Text>
      <Text style={styles.price}>{currencyFormat(translate.price)}</Text>
      <View style={styles.description}>
        <Text style={styles.descriptionTitle}>Description</Text>
        <Text style={styles.descriptionText}>{translate.description}</Text>
      </View>
    </AppContent>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
    backgroundColor: '#FFF',
    borderRadius: borderRadius
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
    color: colors.light.text
  },
  price: {
    fontSize: 30,
    fontWeight: 'bold',
    color: colors.colors.price
  },
  description: {
    marginTop: 30
  },
  descriptionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.light.text
  },
  descriptionText: {
    fontSize: 16,
    marginTop: 10,
    color: colors.light.text
  }
});
