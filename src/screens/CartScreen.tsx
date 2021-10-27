import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';

import ProductList from '../components/ProductList';
import colors from '../constants/colors';
import { ApplicationReducer } from '../redux';
import currencyFormat from '../utils/currencyFormat';
import { IProduct } from '../utils/types';
import products from '../__mocks__/products';

const CartScreen = () => {
  const products = useSelector((state: ApplicationReducer) => state.productsReducer.cart)
  const totalQuantity = products.length;
  const textPluralSingular = totalQuantity > 1 ? 'produtos' : 'produto';

  type IProductList = { item: IProduct };
  const renderProduct = ({ item }: IProductList) => {
    return <ProductList item={item} />;
  };

  const totalPrice = () => {
    let sum = 0;
    for (let i = 0; i < totalQuantity; i++) {
      sum = sum + products[i].price;
    }

    return currencyFormat(sum);
  };

  return (
    <>
      <Text
        style={styles.title}
      >{`${totalQuantity} ${textPluralSingular} - ${totalPrice()}`}</Text>
      <FlatList
        data={products}
        renderItem={renderProduct}
        style={styles.container}
      />
    </>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    padding: 10
  },
  title: {
    fontSize: 18,
    margin: 10,
    color: colors.light.text
  }
});
