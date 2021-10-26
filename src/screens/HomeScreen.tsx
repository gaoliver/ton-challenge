import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import ProductBox from '../components/ProductBox';

import { IProduct, NavigationProp } from '../utils/types';
import products from '../__mocks__/products';

interface IHomeProps {
  navigation: NavigationProp;
}

const HomeScreen = ({ navigation }: IHomeProps) => {
  const onPressProduct = (productId: number) => {
    navigation.navigate('Product', { productId });
  };

  type IRenderItem = { item: IProduct };
  const renderProduct = ({ item }: IRenderItem) => (
    <ProductBox item={item} onProductPress={() => onPressProduct(item.id)} />
  );

  return (
    <FlatList
      data={products}
      renderItem={renderProduct}
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
