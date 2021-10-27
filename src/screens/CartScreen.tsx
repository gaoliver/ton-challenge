import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import ProductList from '../components/ProductList';

import { IProduct } from '../utils/types';
import products from '../__mocks__/products';

const CartScreen = () => {
  type IProductList = { item: IProduct };
  const renderProduct = ({ item }: IProductList) => {
    return <ProductList item={item} />;
  };

  return (
    <FlatList
      data={products}
      renderItem={renderProduct}
      style={styles.container}
    />
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    padding: 10
  },
});
