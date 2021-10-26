import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import ProductBox from '../components/ProductBox';

import { NavigationProp } from '../utils/types';
import products from '../__mocks__/products';

interface IHomeProps {
  navigation: NavigationProp;
}

const HomeScreen = ({ navigation }: IHomeProps) => {
  return (
    <FlatList
      data={products}
      renderItem={ProductBox}
      numColumns={2}
      style={styles.container}
      columnWrapperStyle={styles.listStyle}
    />
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    padding: 10
  },
  listStyle: {
    justifyContent: 'space-between',
    marginBottom: 8
  }
});
